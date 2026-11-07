const NL = "\n";
export const WORKFLOWS = [
 {cat:"Preaching",title:"Sermon to small-group guide",desc:"One sermon becomes a discussion guide.",template:"Help me turn a sermon into a small-group discussion guide for LOFT City Church. Use the CSB for any scripture. Do not use em dashes. Keep the tone warm and accessible for a diverse, multilingual congregation with many first-generation believers."+NL+NL+"Sermon (paste text or main points):"+NL+"[PASTE SERMON]"+NL+NL+"Produce: a one-paragraph recap, one clear big idea, 4 to 6 questions that move from observation to reflection to application, one passage to read together, and a short closing prayer prompt."},
 {cat:"Preaching",title:"Sermon to Instagram carousel",desc:"5 to 7 slides plus a caption.",template:"Turn this sermon into an Instagram carousel for LOFT City Church. Do not use em dashes. CSB for scripture. Voice is warm, hopeful, and clear."+NL+NL+"Sermon:"+NL+"[PASTE SERMON]"+NL+NL+"Give me 5 to 7 slides. Slide 1 is a hook. Each slide is one short line plus one sentence. End with an invitation to Sunday. Then write a caption with a soft call to action and 5 relevant hashtags."},
 {cat:"Preaching",title:"Sermon to devotional set",desc:"A short daily devotional series.",template:"From this sermon, write a 5 day devotional series for LOFT City Church. Do not use em dashes. CSB for scripture."+NL+NL+"Sermon:"+NL+"[PASTE SERMON]"+NL+NL+"Each day: a title, one CSB passage, 150 to 200 words of reflection, one question, and a one line prayer. Keep it accessible for first-generation believers."},
 {cat:"Preaching",title:"Sermon to YouTube and bulletin",desc:"Description, timestamps, and a blurb.",template:"From this sermon create two things. Do not use em dashes. CSB for scripture."+NL+NL+"Sermon:"+NL+"[PASTE SERMON]"+NL+NL+"1) A YouTube description with a 2 sentence summary, suggested timestamps, and 3 scripture references. 2) A 3 sentence bulletin blurb that invites people into the series."},
 {cat:"Pastoral",title:"Draft a caring email",desc:"Warm, personal, two versions.",template:"Help me draft a pastoral email as Sam, lead pastor of LOFT City Church. Tone is warm, personal, and conversational, never corporate. Do not use em dashes. Sign as Sam."+NL+NL+"Context: [WHAT HAPPENED AND THE RELATIONSHIP]"+NL+"My goal for this email: [GOAL]"+NL+NL+"Give me two versions: one gentle, one a little more direct. Keep both short."},
 {cat:"Pastoral",title:"Prepare for a hard conversation",desc:"Frame it before you walk in.",template:"I have a difficult conversation coming up. Help me prepare with grace and clarity."+NL+NL+"The person and our relationship: [WHO]"+NL+"The issue: [ISSUE]"+NL+"What I most want to protect: [OUTCOME OR RELATIONSHIP]"+NL+NL+"Give me: the one thing to open with, 3 points to make plainly, 2 likely reactions and a gracious response to each, and a short list of what I should NOT say. I value harmony and I lead with developing people."},
 {cat:"Pastoral",title:"Remarks starter",desc:"Funeral, wedding, or dedication.",template:"Help me draft remarks. Do not use em dashes. CSB for scripture. Warm and personal."+NL+NL+"Occasion: [FUNERAL / WEDDING / BABY DEDICATION]"+NL+"Who and a few details: [NAMES AND NOTES]"+NL+"What I want people to leave with: [THE HEART OF IT]"+NL+NL+"Give me an opening, a middle with one fitting passage, and a close. Keep it honest, not sentimental."},
 {cat:"Leadership",title:"Meeting notes to decisions and owners",desc:"Turn a mess into next steps.",template:"Turn these meeting notes into clear output."+NL+NL+"Notes:"+NL+"[PASTE NOTES]"+NL+NL+"Give me: decisions made, open questions still to resolve, and a task list with owner and a suggested due date for each. Then draft a 4 line follow-up email summarizing next steps. Do not use em dashes."},
 {cat:"Leadership",title:"Sharpen a decision",desc:"A pre-mortem before you commit.",template:"Help me think clearly about a decision."+NL+NL+"The decision: [DECISION]"+NL+"What I am leaning toward: [LEAN]"+NL+NL+"Run a quick pre-mortem: imagine it is a year later and this went badly, what most likely went wrong. Then give me the 3 questions I should answer before deciding, and one option I may not have considered. Be honest, not agreeable."},
 {cat:"Leadership",title:"Coach prep for a planter",desc:"Strong questions for a session.",template:"I am coaching a church planter as a Stadia coach. I lead with ideation and I value developing people."+NL+NL+"Their situation: [SITUATION]"+NL+"This session's goal: [GOAL]"+NL+NL+"Give me 6 strong coaching questions that are open and not leading, one simple framework that fits their situation, and one challenge to leave them with."},
 {cat:"Plant Dallas + Stadia",title:"Catalytic event one-pager",desc:"A crisp event brief.",template:"Help me draft a one-page brief for a Plant Dallas catalytic event. Plant Dallas is a Dallas County church planting network built on collaboration. Structured and factual with clear section headers. Do not use em dashes."+NL+NL+"Event focus: [THEME]"+NL+"Audience: [PLANTERS / PASTORS / PARTNERS]"+NL+NL+"Sections: purpose, who it is for, the experience, the outcome we want, and a simple call to action."},
 {cat:"Plant Dallas + Stadia",title:"Grant narrative starter",desc:"A first draft for a funder.",template:"Help me draft a grant narrative for Plant Dallas, a Dallas County church planting network. Structured and factual with section headers. Do not use em dashes."+NL+NL+"Funder or program: [FUNDER]"+NL+"Amount and purpose: [PURPOSE]"+NL+NL+"Draft these sections: the need in Dallas County, our approach, expected outcomes, and why Plant Dallas is positioned to deliver."},
 {cat:"Plant Dallas + Stadia",title:"Cohort session outline",desc:"A teaching session, ready to run.",template:"Help me outline a planter cohort session for Plant Dallas. Do not use em dashes. Practical and warm."+NL+NL+"Topic: [TOPIC]"+NL+"Length: [TIME]"+NL+NL+"Give me: a hook to open, 3 teaching moves, one discussion block with questions, one hands-on exercise, and a takeaway assignment."},
 {cat:"Admin + Comms",title:"Outreach email (structured)",desc:"Factual, sectioned, for partners.",template:"Help me write a professional outreach email. Structured and factual with section headers, not narrative or pastoral prose. Do not use em dashes. Sign as Sam."+NL+NL+"Recipient and context: [WHO AND WHY]"+NL+"What I am asking for: [THE ASK]"+NL+NL+"Sections: brief context, the ask, what I am offering or proposing, and a clear next step."},
 {cat:"Admin + Comms",title:"Summarize a long document",desc:"Get to the point fast.",template:"Summarize this document for me. Do not use em dashes."+NL+NL+"[PASTE DOCUMENT]"+NL+NL+"Give me: a 3 sentence summary, the 5 most important points, anything that needs my decision, and any deadlines or dollar amounts mentioned."},
 {cat:"Admin + Comms",title:"Post-Zoom action items",desc:"From a call to follow-up.",template:"I just finished a Zoom call. Help me close the loop."+NL+NL+"What the call was about and what was said: [PASTE NOTES OR TRANSCRIPT]"+NL+NL+"Give me: a short recap, action items with owners, and a friendly follow-up email I can send. Do not use em dashes."},
 {cat:"Personal",title:"Plan a family outing or trip",desc:"For Ann and the kids.",template:"Help me plan something for my family. My wife is Ann and we have Nicole (in college), Timothy, and Micah. Do not use em dashes."+NL+NL+"What I am planning: [OUTING / TRIP / WEEKEND]"+NL+"Budget and dates: [DETAILS]"+NL+NL+"Give me a simple plan with options, rough timing, and one idea that would make it memorable for the kids."},
 {cat:"Personal",title:"What's worth knowing on a topic",desc:"Catch up fast, plainly.",template:"Catch me up on a topic in plain language, as of today."+NL+NL+"Topic: [TOPIC, e.g. AI for nonprofits, a leadership idea, a tech shift]"+NL+NL+"Give me the 5 things worth knowing right now, what each means for a pastor leading three organizations, and one thing I could try this week."}
];
export const SOURCES = [
 {id:"bbc-world",name:"BBC World",url:"https://feeds.bbci.co.uk/news/world/rss.xml",cat:"News",top:true},
 {id:"npr-news",name:"NPR News",url:"https://feeds.npr.org/1001/rss.xml",cat:"News",top:true},
 {id:"religion-news",name:"Religion News",url:"https://religionnews.com/feed/",cat:"News"},
 {id:"christianity-today",name:"Christianity Today",url:"https://www.christianitytoday.com/feed/",cat:"Ministry",top:true},
 {id:"carey",name:"Carey Nieuwhof",url:"https://careynieuwhof.com/feed/",cat:"Ministry",top:true},
 {id:"church-answers",name:"Church Answers",url:"https://churchanswers.com/feed/",cat:"Ministry"},
 {id:"tgc",name:"The Gospel Coalition",url:"https://www.thegospelcoalition.org/feed/",cat:"Ministry",top:true},
 {id:"desiring-god",name:"Desiring God",url:"https://www.desiringgod.org/articles.rss",cat:"Soul care",top:true},
 {id:"pastorserve",name:"PastorServe",url:"https://www.pastorserve.org/feed/",cat:"Soul care"},
 {id:"exponential",name:"Exponential",url:"https://exponential.org/feed/",cat:"Planting"},
 {id:"acts29",name:"Acts 29",url:"https://www.acts29.com/feed/",cat:"Planting"},
 {id:"newchurches",name:"NewChurches",url:"https://newchurches.com/feed/",cat:"Planting"},
 {id:"one-useful-thing",name:"One Useful Thing",url:"https://www.oneusefulthing.org/feed",cat:"AI",top:true},
 {id:"simon",name:"Simon Willison",url:"https://simonwillison.net/atom/everything/",cat:"AI",top:true},
 {id:"mit-tech",name:"MIT Tech Review",url:"https://www.technologyreview.com/feed/",cat:"AI",top:true},
 {id:"import-ai",name:"Import AI",url:"https://importai.substack.com/feed",cat:"AI"},
 {id:"the-verge",name:"The Verge",url:"https://www.theverge.com/rss/index.xml",cat:"Tech",top:true},
 {id:"techcrunch",name:"TechCrunch",url:"https://techcrunch.com/feed/",cat:"Tech",top:true},
 {id:"ars",name:"Ars Technica",url:"https://feeds.arstechnica.com/arstechnica/index",cat:"Tech"},
 {id:"seth",name:"Seth Godin",url:"https://seths.blog/feed/",cat:"Leadership"},
 {id:"fs",name:"Farnam Street",url:"https://fs.blog/feed/",cat:"Leadership"},
 {id:"nextafter",name:"NextAfter",url:"https://www.nextafter.com/feed/",cat:"Giving"},
 {id:"barna",name:"Barna",url:"https://www.barna.com/feed/",cat:"Giving"},
 {id:"dmag",name:"D Magazine",url:"https://www.dmagazine.com/feed/",cat:"Dallas",top:true},
 {id:"community-impact",name:"Community Impact",url:"https://communityimpact.com/feed/",cat:"Dallas"},
 {id:"kera",name:"KERA News",url:"https://www.keranews.org/feed",cat:"Dallas"}
];
export const LENSES = ["Top picks","AI","Tech","Ministry","Soul care","Planting","News","Leadership","Giving","Dallas"];

function strip(s){ const d=document.createElement("div"); d.innerHTML=s||""; return (d.textContent||"").replace(/\s+/g," ").trim(); }
function parse(xml){
  let doc=new DOMParser().parseFromString(xml,"text/xml");
  let nodes=Array.from(doc.querySelectorAll("item")); if(!nodes.length) nodes=Array.from(doc.querySelectorAll("entry"));
  return nodes.slice(0,6).map(n=>{
    const g=sel=>{const el=n.querySelector(sel); return el?el.textContent.trim():"";};
    let link=g("link"); if(!link){const la=n.querySelector('link[rel="alternate"]')||n.querySelector("link"); if(la) link=la.getAttribute("href")||"";}
    return {title:g("title")||"(untitled)",link:link.trim(),date:g("pubDate")||g("published")||g("updated"),desc:strip(g("description")||g("summary")||g("content")).slice(0,200)};
  }).filter(i=>i.link);
}
async function fetchText(url,ms){ const c=new AbortController(); const t=setTimeout(()=>c.abort(),ms||12000); try{ const r=await fetch(url,{signal:c.signal}); if(!r.ok) throw new Error(r.status); return await r.text(); } finally{ clearTimeout(t); } }
export async function loadFeed(u){
  const enc=encodeURIComponent(u);
  try{ const j=JSON.parse(await fetchText("https://api.allorigins.win/get?url="+enc)); if(j&&j.contents){ const it=parse(j.contents); if(it.length) return it; } }catch(e){}
  try{ const j=JSON.parse(await fetchText("https://api.rss2json.com/v1/api.json?rss_url="+enc)); if(j&&j.items) return j.items.slice(0,6).map(x=>({title:x.title,link:x.link,date:x.pubDate,desc:strip(x.description).slice(0,200)})); }catch(e){}
  return [];
}
