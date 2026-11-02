(function(root){
 'use strict';
 const seed=()=>[
  {id:'demo-01',name:'Example Ledger Ltd',sector:'Professional services',location:'Bromley',distance:1.8,status:'review',website:'none',corporate:true,permission:true,verified:true,contact:true,audit:false,source:true,performance:null,accessibility:null,seo:null,https:true,viewport:true,cta:false,meta:false,issue:'No official website identified in this fictional research record.',service:'Business website',confidenceFloor:78},
  {id:'demo-02',name:'Sample Advisory Ltd',sector:'Professional services',location:'Beckenham',distance:3.2,status:'review',website:'poor',corporate:true,permission:true,verified:true,contact:true,audit:true,source:true,performance:34,accessibility:61,seo:58,https:true,viewport:false,cta:false,meta:false,issue:'Sample mobile review shows slow loading and no clear enquiry route.',service:'Website improvement',confidenceFloor:0},
  {id:'demo-03',name:'Illustration Services LLP',sector:'Professional services',location:'Bromley',distance:4.1,status:'deferred',website:'unknown',corporate:true,permission:true,verified:false,contact:false,audit:false,source:false,performance:null,accessibility:null,seo:null,https:true,viewport:true,cta:true,meta:true,issue:'Evidence incomplete. Trading status and contact route need review.',service:'Further research',confidenceFloor:0},
  {id:'demo-04',name:'Example Home Studio Ltd',sector:'Retail',location:'Croydon',distance:7.4,status:'approved',website:'poor',corporate:true,permission:true,verified:true,contact:true,audit:true,source:true,performance:45,accessibility:66,seo:62,https:true,viewport:true,cta:false,meta:false,issue:'Sample website has no useful next step for prospective customers.',service:'Website and enquiry flow',confidenceFloor:0},
  {id:'demo-05',name:'Sample Design Practice',sector:'Creative services',location:'Bromley',distance:2.5,status:'review',website:'poor',corporate:false,permission:false,verified:true,contact:true,audit:true,source:true,performance:39,accessibility:75,seo:65,https:true,viewport:true,cta:false,meta:false,issue:'Potential website need. Subscriber classification and permission unresolved.',service:'Manual review first',confidenceFloor:0},
  {id:'demo-06',name:'Demo Workshop Ltd',sector:'Retail',location:'Beckenham',distance:3.5,status:'suppressed',website:'none',corporate:true,permission:false,verified:true,contact:true,audit:false,source:true,performance:null,accessibility:null,seo:null,https:true,viewport:true,cta:false,meta:false,issue:'Fictional do-not-contact request. Review cannot reopen outreach.',service:'Do not contact',confidenceFloor:0}
 ];
 const discovery=()=>[
  {...seed()[0],id:'demo-07',name:'Example Accounts Studio Ltd',distance:2.1,status:'review'},
  {...seed()[1],id:'demo-08',name:'Sample Commercial Partners Ltd',distance:4.4,status:'review'},
  {...seed()[2],id:'demo-09',name:'Demonstration Consulting LLP',distance:1.2,status:'review'}
 ];
 function score(l){
  let opportunity=l.website==='none'?85:l.website==='unknown'?35:0;
  if(l.website!=='none'&&l.website!=='unknown'&&l.audit){
   if(!l.https)opportunity+=20;if(!l.viewport)opportunity+=15;
   if(l.performance!==null&&l.performance<50)opportunity+=15;
   if(l.accessibility!==null&&l.accessibility<70)opportunity+=10;
   if(l.seo!==null&&l.seo<70)opportunity+=10;
   if(!l.meta)opportunity+=8;if(!l.cta)opportunity+=8;
  }
  let fit=(l.verified?30:0)+(l.corporate?20:0)+(l.distance<=5?20:l.distance<=10?12:0)+15+(l.contact?15:-30);
  let confidence=(l.verified?55:0)+(l.source?15:0)+(l.audit?25:0)+(Number.isFinite(l.distance)?5:0);
  return {opportunity:Math.min(100,opportunity),fit:Math.max(0,Math.min(100,fit)),confidence:Math.min(100,Math.max(confidence,l.confidenceFloor||0))};
 }
 function electronicReady(l){return l.status!=='suppressed'&&l.corporate&&l.permission&&l.verified&&l.contact;}
 function transition(l,status){
  if(!['review','approved','deferred','rejected','suppressed'].includes(status))throw Error('Choose a valid review decision.');
  if(l.status==='suppressed'&&status!=='suppressed')throw Error('Do-not-contact records stay blocked.');
  if(status==='approved'&&!electronicReady(l))throw Error('Resolve evidence, contact type and permission before approval.');
  return {...l,status,...(status==='suppressed'?{draft:null,synced:false}:{})};
 }
 function canSync(l){return l.status==='approved'&&electronicReady(l);}
 function draft(l){
  if(!canSync(l))throw Error('Approve a contact-ready lead before preparing a sample draft.');
  const observation=l.website==='none'?'I could not confidently identify an official website in this sample review.':'The sample mobile review suggests the enquiry route could be clearer.';
  return `Subject: A website question for ${l.name}\n\nHello,\n\n${observation} This may be worth checking before deciding whether any work is needed.\n\nConceptbox helps businesses improve websites and practical enquiry workflows. Would a short conversation about your current setup be useful?\n\nBest wishes,\nDavinia\n\nFictional demonstration draft. No message has been sent.`;
 }
 const api={seed,discovery,score,electronicReady,transition,canSync,draft};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.LeadDemo=api;
})(typeof window!=='undefined'?window:globalThis);
