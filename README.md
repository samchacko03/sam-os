# Sam OS

One scroll each morning, then go build. A personal operating system for Sam: today, capture, people, soul, briefing, sermons, and integrations with Asana, Outlook/Google calendars, Planning Center, Claude, and Supabase.

## Deploy

Static site. On Netlify: Add new site → Import from GitHub → this repo. Publish directory `.`. No build command.

Then on your phone open the site in Safari → Share → Add to Home Screen.

## Setup inside the app

Tap your avatar → Settings:
- Asana: personal access token
- Calendar: Outlook and Google ICS links
- Reminders: times, channels, server URL (see server/README.md)
- Brief: Anthropic API key
- LOFT: Planning Center personal access token
- Sync: Supabase URL, anon key, passphrase (see server/SYNC.md)

All credentials stay on the device.

## Files

- index.html: the whole app
- support.js, ios-frame.jsx, samos-data.js, samos-connect.js: runtime and helpers
- sw.js, manifest.webmanifest, icons/: installable app
- ds/: LOFT City Church brand tokens
- server/: optional reminder worker and Supabase SQL
