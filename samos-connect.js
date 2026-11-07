// Asana + ICS calendar + reminder helpers for Sam OS.
const ASANA = "https://app.asana.com/api/1.0";
async function asanaGet(token, path) {
  const r = await fetch(ASANA + path, { headers: { Authorization: "Bearer " + token, Accept: "application/json" } });
  if (!r.ok) throw new Error("Asana " + r.status);
  return (await r.json()).data;
}
export async function asanaMe(token) { return asanaGet(token, "/users/me?opt_fields=name,workspaces.name"); }
export async function asanaMyTasks(token) {
  const me = await asanaMe(token);
  const out = [];
  for (const ws of me.workspaces) {
    const data = await asanaGet(token, "/tasks?assignee=me&workspace=" + ws.gid + "&completed_since=now&limit=100&opt_fields=name,due_on,due_at,completed,permalink_url,projects.name,memberships.section.name");
    data.forEach(t => out.push({ gid: t.gid, name: t.name, due: t.due_on || (t.due_at ? t.due_at.slice(0, 10) : ""), url: t.permalink_url, project: (t.projects && t.projects[0] && t.projects[0].name) || ws.name, ws: ws.name }));
  }
  return out;
}
export async function asanaComplete(token, gid, completed) {
  const r = await fetch(ASANA + "/tasks/" + gid, { method: "PUT", headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" }, body: JSON.stringify({ data: { completed } }) });
  if (!r.ok) throw new Error("Asana " + r.status);
}

// ---- ICS ----
async function fetchText(url, ms) { const c = new AbortController(); const t = setTimeout(() => c.abort(), ms || 15000); try { const r = await fetch(url, { signal: c.signal }); if (!r.ok) throw new Error(r.status); return await r.text(); } finally { clearTimeout(t); } }
async function fetchIcs(url) {
  url = url.replace(/^webcal:/, "https:");
  try { const t = await fetchText(url, 8000); if (/BEGIN:VCALENDAR/.test(t)) return t; } catch (e) {}
  try { const j = JSON.parse(await fetchText("https://api.allorigins.win/get?url=" + encodeURIComponent(url))); if (j && j.contents && /BEGIN:VCALENDAR/.test(j.contents)) return j.contents; } catch (e) {}
  try { const t = await fetchText("https://corsproxy.io/?" + encodeURIComponent(url)); if (/BEGIN:VCALENDAR/.test(t)) return t; } catch (e) {}
  throw new Error("Could not reach calendar");
}
function unfold(s) { return s.replace(/\r\n[ \t]|\n[ \t]/g, ""); }
function parseDate(v, params) {
  if (/^\d{8}$/.test(v)) return { d: new Date(+v.slice(0, 4), +v.slice(4, 6) - 1, +v.slice(6, 8)), allDay: true };
  const m = v.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})?(Z?)$/);
  if (!m) return null;
  if (m[7] === "Z") return { d: new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +(m[6] || 0))), allDay: false };
  return { d: new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +(m[6] || 0)), allDay: false }; // TZID treated as local
}
export function parseIcs(text, source) {
  const lines = unfold(text).split(/\r?\n/);
  const events = []; let cur = null;
  for (const line of lines) {
    if (line === "BEGIN:VEVENT") { cur = {}; continue; }
    if (line === "END:VEVENT") { if (cur && cur.start) events.push(cur); cur = null; continue; }
    if (!cur) continue;
    const i = line.indexOf(":"); if (i < 0) continue;
    const key = line.slice(0, i), val = line.slice(i + 1), name = key.split(";")[0];
    if (name === "SUMMARY") cur.title = val.replace(/\\,/g, ",").replace(/\\n/g, " ");
    else if (name === "LOCATION") cur.loc = val.replace(/\\,/g, ",");
    else if (name === "DTSTART") { const p = parseDate(val, key); if (p) { cur.start = p.d; cur.allDay = p.allDay; } }
    else if (name === "DTEND") { const p = parseDate(val, key); if (p) cur.end = p.d; }
    else if (name === "RRULE") cur.rrule = val;
  }
  return events.map(e => Object.assign(e, { source }));
}
// Expand simple recurrences (DAILY/WEEKLY/MONTHLY/YEARLY, BYDAY for weekly) into a window.
export function occurrences(events, from, to) {
  const out = [], DAYS = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  for (const e of events) {
    const dur = e.end ? e.end - e.start : (e.allDay ? 864e5 : 36e5);
    const push = d => { if (d >= from - dur && d <= to) out.push({ title: e.title || "(no title)", loc: e.loc, allDay: e.allDay, start: new Date(d), end: new Date(d.getTime() + dur), source: e.source }); };
    if (!e.rrule) { push(e.start); continue; }
    const r = {}; e.rrule.split(";").forEach(kv => { const [k, v] = kv.split("="); r[k] = v; });
    const until = r.UNTIL ? (parseDate(r.UNTIL) || {}).d : null, interval = +(r.INTERVAL || 1); let count = +(r.COUNT || 10000);
    const byday = r.BYDAY ? r.BYDAY.split(",").map(x => DAYS.indexOf(x.slice(-2))).filter(x => x >= 0) : null;
    let d = new Date(e.start), guard = 0;
    while (d <= to && count > 0 && guard++ < 2000) {
      if (until && d > until) break;
      if (r.FREQ === "WEEKLY" && byday) {
        const wkStart = new Date(d); wkStart.setDate(d.getDate() - d.getDay());
        for (const wd of byday) { const o = new Date(wkStart); o.setDate(wkStart.getDate() + wd); o.setHours(e.start.getHours(), e.start.getMinutes(), 0, 0); if (o >= e.start && (!until || o <= until) && count > 0) { push(o); count--; } }
        d.setDate(d.getDate() + 7 * interval); continue;
      }
      push(d); count--;
      if (r.FREQ === "DAILY") d.setDate(d.getDate() + interval);
      else if (r.FREQ === "WEEKLY") d.setDate(d.getDate() + 7 * interval);
      else if (r.FREQ === "MONTHLY") d.setMonth(d.getMonth() + interval);
      else if (r.FREQ === "YEARLY") d.setFullYear(d.getFullYear() + interval);
      else break;
    }
  }
  return out.sort((a, b) => (a.allDay === b.allDay ? a.start - b.start : a.allDay ? -1 : 1));
}
export async function loadCalendars(cals, from, to) {
  const all = [];
  await Promise.all(cals.filter(c => c.url).map(async c => { try { all.push(...parseIcs(await fetchIcs(c.url), c.name)); } catch (e) { all.push({ error: c.name }); } }));
  return { events: occurrences(all.filter(e => e.start), from, to), errors: all.filter(e => e.error).map(e => e.error) };
}

// ---- Reminders (device side) ----
export async function requestPush() {
  if (!("Notification" in window)) return "unsupported";
  return await Notification.requestPermission();
}
export function scheduleLocal(times, build) {
  // Fires while the app is open or installed and running. Server handles the rest.
  if (window.__samTimer) clearInterval(window.__samTimer);
  const fired = {};
  window.__samTimer = setInterval(() => {
    const n = new Date(), key = n.toDateString() + n.getHours() + ":" + n.getMinutes();
    times.forEach(t => { if (t.on && n.getHours() === t.h && n.getMinutes() === 0 && !fired[key + t.id] && (!t.day || n.getDay() === t.day)) { fired[key + t.id] = 1; const msg = build(t); if (Notification.permission === "granted") new Notification("Sam OS · " + t.label, { body: msg }); } });
  }, 30000);
}
