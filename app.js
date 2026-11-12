(function(){
const $=s=>document.querySelector(s), app=$('#app');
const S=window.SUBJ, ORDER=['math','sej','bm'];
const esc=t=>String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const md=t=>esc(t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');
const L={get(k,d){try{return JSON.parse(localStorage.getItem('spm_'+k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem('spm_'+k,JSON.stringify(v))}catch(e){}}};
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
(window.MATH_STEPS||[]).forEach((a,i)=>a.forEach((s,j)=>{try{S.math.chapters[i].q[j][3]=s}catch(e){}}));
/* Step-by-step explanation: real steps if the data has them, otherwise build 3 steps from the key fact */
function exp(q){const e=q[3]||'';if(e.indexOf('\n')>-1)return e;
  const others=q[1].filter((x,i)=>i!==q[2]);
  return 'Step 1: Read what is asked → '+q[0].replace(/\n/g,' ')+'\nStep 2: Key fact → '+e+'\nStep 3: Answer = "'+q[1][q[2]]+'". The other options do not fit: '+others.join(' / ')+'.'}
const MOCK={math:{n:40,min:90,paper:'Kertas 1 (1449/1) – 40 soalan objektif'},sej:{n:40,min:60,paper:'Kertas 1 (1249/1) – 40 soalan objektif'},bm:{n:40,min:50,paper:'Latihan Sistem Bahasa & Kefahaman (objektif)'}};
let timer=null;

/* ---------- language: ms (BM) / en / both (BM + English line) ---------- */
const lang=()=>L.get('lang','both');
const EC=(sub,i)=>(window.EN&&EN[sub]&&EN[sub][i])||null;
const MON={Januari:'January',Februari:'February',Mac:'March',Mei:'May',Jun:'June',Julai:'July',Ogos:'August',Oktober:'October',Disember:'December',daripada:'of',hingga:'to'};
const mapW=s=>String(s).replace(/\b(Januari|Februari|Mac|Mei|Jun|Julai|Ogos|Oktober|Disember|daripada|hingga)\b/g,m=>MON[m]);
const enDiv=h=>'<div class="en">'+h+'</div>';
function T(ms,en,pre){ /* html for one text in the chosen language; md applied */
  const f=pre||md;if(!en||en===ms)return f(ms);const l=lang();return l==='ms'?f(ms):l==='en'?f(en):f(ms)+enDiv(f(en))}
function qEn(it){const c=EC(it.sub,it.ch),e=c&&c.q&&c.q[it.j];if(!e)return null;const q=it.q;
  return [e[0],e[1]||q[1].map(mapW),q[2],e[2]||q[3]]}
function chTitle(sub,c,i,card){const e=EC(sub,i),l=lang(),no=c.n?(l==='en'?'Chapter ':'Bab ')+c.n+': ':'';
  if(l==='ms'||!e)return esc(no+c.t);if(l==='en')return esc(no+e.t);return esc(no+c.t)+enDiv(esc(e.t))}
function formName(sub,f){const s=S[sub],l=lang();const ms=s.formLabel?s.formLabel[f]:'Tingkatan '+f;
  const enm=sub==='bm'?{1:'Paper 1 – Writing',2:'Paper 2 – Comprehension & Language Systems',3:'Paper 2 – Malay Literature (Komsas)'}[f]:(f===6?'Forms 1–3 (assumed basics)':'Form '+f);
  return l==='ms'?ms:l==='en'?enm:ms+' / '+enm}
function allQ(sub,ch){const out=[];S[sub].chapters.forEach((c,i)=>{if(ch!=null&&ch!=i)return;c.q.forEach((q,j)=>out.push({sub,ch:i,j,q,id:sub+i+'_'+j}))});return out}
/* BM line followed by its English line (two blocks if line counts differ) */
function zip(a,b){const x=a.split('\n'),y=b.split('\n');if(x.length!==y.length)return md(a)+enDiv(md(b));
  return x.map((l,i)=>md(l)+enDiv(md(y[i]))).join('')}
/* full view of a question in the current language */
function view(it){const q=it.q,e=qEn(it),l=lang();
  const qh=e?T(q[0],e[0]):md(q[0]);
  const opts=q[1].map((o,i)=>e?T(o,e[1][i]):md(o));
  const a=exp(q);let eh=md(a);
  if(e){const b=exp(e);eh=l==='ms'?md(a):l==='en'?md(b):(a===b?md(a):zip(a,b))}
  return {qh,opts,eh,ans:'ABCD'[q[2]]+'. '+(e?T(q[1][q[2]],e[1][q[2]]):md(q[1][q[2]]))}}
function pickMock(sub){const by=S[sub].chapters.map((c,i)=>shuffle(allQ(sub,i)));const out=[];let k=0;while(out.length<MOCK[sub].n&&by.some(b=>b.length)){const b=by[k++%by.length];if(b.length)out.push(b.shift())}return shuffle(out)}
function prog(){return L.get('prog',{})}
function saveScore(key,right,total){const p=prog();const o=p[key]||{best:0,tries:0};o.tries++;o.last=Math.round(right/total*100);o.best=Math.max(o.best,o.last);p[key]=o;L.set('prog',p)}
function wrongAdd(ids){const w=new Set(L.get('wrong',[]));ids.forEach(i=>w.add(i));L.set('wrong',[...w])}
function wrongDel(ids){const w=new Set(L.get('wrong',[]));ids.forEach(i=>w.delete(i));L.set('wrong',[...w])}

function setTab(t){document.querySelectorAll('#tabs a').forEach(a=>a.classList.toggle('on',a.dataset.t===t))}

/* ---------- views ---------- */
function home(){setTab('home');
  const p=prog();
  app.innerHTML=`<h1>Hi! Ready to revise? 💜</h1>
  <p class="mut sm">SPM 2026 covers <b>Tingkatan 4 + Tingkatan 5</b> (KSSM). Pick a subject.</p>`+
  ORDER.map(k=>{const s=S[k];const done=s.chapters.filter((c,i)=>p[k+'_'+i]).length;
    return `<a class="card subj" href="#/s/${k}"><span class="ic">${s.icon}</span><div style="flex:1"><b>${s.name}</b><div class="mut sm">${s.chapters.length} chapters · ${allQ(k).length} MCQs</div><div class="bar"><i style="width:${done/s.chapters.length*100}%"></i></div><div class="mut sm">${done}/${s.chapters.length} chapters practised</div></div></a>`}).join('')+
  `<a class="card" href="#/mock"><b>⏱️ Full mock test</b><div class="mut sm">Maths + Sejarah + BM, timed, with score</div></a>
   <a class="card" href="#/past"><b>📝 Past-year style questions & papers</b><div class="mut sm">Practice questions, MCQ browser, where to download real papers</div></a>
   <a class="card" href="#/wrong"><b>🔁 Redo my mistakes</b><div class="mut sm">${L.get('wrong',[]).length} saved questions</div></a>`;
}

function subject(k){setTab('home');const s=S[k],p=prog();
  const forms=[...new Set(s.chapters.map(c=>c.f))].sort();let h=`<a href="#/">← Home</a><h1>${s.icon} ${s.name}</h1><p class="mut sm">${s.about}</p>`;
  forms.forEach(f=>{const cs=s.chapters.map((c,i)=>[c,i]).filter(x=>x[0].f===f);if(!cs.length)return;
    h+=`<h2>${esc(formName(k,f))}</h2>`;
    cs.forEach(([c,i])=>{const r=p[k+'_'+i];h+=`<a class="card" href="#/c/${k}/${i}"><b>${chTitle(k,c,i)}</b><div class="mut sm">${r?'Best '+r.best+'% · ':''}${c.q.length} MCQs</div></a>`})});
  app.innerHTML=h+`<p><a class="btn alt" href="#/browse/${k}">Browse all MCQs</a></p>`;
}

function chapter(k,i,tab){const s=S[k],c=s.chapters[i];tab=tab||'notes';
  let h=`<a href="#/s/${k}">← ${s.name}</a><h1>${chTitle(k,c,i)}</h1><span class="pill">${esc(formName(k,c.f))}</span>
  <div class="seg"><button class="${tab=='notes'?'on':''}" data-go="#/c/${k}/${i}">Short notes</button><button class="${tab=='quiz'?'on':''}" data-go="#/c/${k}/${i}/quiz">MCQ quiz (${c.q.length})</button></div>`;
  if(tab=='notes'){h+='<div class="card note">'+c.notes.map(([lab,pts],ni)=>{const en=EC(k,i),eN=en&&en.n&&en.n[ni];return `<h3>${T(lab,eN&&eN[0])}</h3><ul>${pts.map((x,pi)=>`<li>${T(x,eN&&eN[1][pi])}</li>`).join('')}</ul>`}).join('')+'</div>'}
  app.innerHTML=h;
  app.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>location.hash=b.dataset.go);
  if(tab=='quiz'){const box=document.createElement('div');app.appendChild(box);runQuiz(box,shuffle(allQ(k,i)),{key:k+'_'+i,instant:true,back:`#/c/${k}/${i}`})}
}

/* quiz engine: opts {instant, key, back, onDone, title} */
function runQuiz(box,qs,o){let n=0,right=0;const wrong=[],answers=[];
  if(o.live)o.live.get=()=>({right,answers});
  function show(){const it=qs[n],q=it.q,V=view(it);
    const order=shuffle([0,1,2,3]);let done=false;
    box.innerHTML=`<div class="mut sm">Question ${n+1} / ${qs.length}</div><div class="bar"><i style="width:${n/qs.length*100}%"></i></div><div class="card"><div class="q">${V.qh}</div>${order.map((oi,pos)=>`<button class="opt" data-i="${oi}">${'ABCD'[pos]}. ${V.opts[oi]}</button>`).join('')}<div id="fb"></div></div>`;
    box.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{if(done)return;const pick=+b.dataset.i,ok=pick===q[2];
      answers[n]=ok;if(!ok)wrong.push(it.id);else right++;
      if(o.instant){done=true;box.querySelectorAll('.opt').forEach(x=>{if(+x.dataset.i===q[2])x.classList.add('ok');else if(x===b)x.classList.add('no')});
        $('#fb')&&($('#fb').innerHTML=`<div class="exp">${ok?'✅ Correct!':'❌ Not quite.'}\n${V.eh}</div><button class="btn" id="nx">${n+1<qs.length?'Next →':'See result'}</button>`);$('#nx').onclick=next}
      else{done=true;box.querySelectorAll('.opt').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');setTimeout(next,250)}})}
  function next(){n++;n<qs.length?show():finish()}
  function finish(){const pct=Math.round(right/qs.length*100);if(o.key)saveScore(o.key,right,qs.length);
    if(wrong.length)wrongAdd(wrong);wrongDel(qs.filter((x,i)=>answers[i]).map(x=>x.id));
    if(o.onDone)return o.onDone({right,total:qs.length,qs,answers,pct});
    box.innerHTML=`<div class="card" style="text-align:center"><div class="big">${right}/${qs.length}</div><div>${pct}% ${pct>=80?'🎉 Great!':pct>=50?'👍 Keep going':'💪 Review the notes and try again'}</div></div>
    <button class="btn" id="again">Try again</button>${o.back?`<a class="btn alt" href="${o.back}">Back</a>`:''}`;
    $('#again').onclick=()=>runQuiz(box,shuffle(qs),o)}
  show()}

function browse(k){setTab('past');const s=S[k];let h=`<a href="#/past">← Past Qs</a><h1>${s.icon} All ${s.name} MCQs</h1><p class="mut sm">Tap a question to see the answer.</p>`;
  s.chapters.forEach((c,i)=>{h+=`<h2>${chTitle(k,c,i)}</h2>`+allQ(k,i).map(it=>{const V=view(it);return `<details><summary>${V.qh}</summary><div style="margin-top:6px">${V.opts.map((x,j)=>`<div>${'ABCD'[j]}. ${x}</div>`).join('')}</div><div class="ans">✔ ${V.ans}\n${V.eh}</div></details>`}).join('')});
  app.innerHTML=h}

function past(){setTab('past');let h=`<h1>📝 Past-year questions</h1><div class="card sm"><b>Please read:</b> Lembaga Peperiksaan does not publish full SPM papers online, and they are copyrighted, so they are <b>not copied into this app</b>. The practice questions here are <b>original, written in the SPM style, topics and mark format</b> – each with step-by-step answers. Under each subject you'll find <b>real papers to download</b>: LP's official examiner reports (Kupasan Mutu Jawapan) and state/school <b>trial papers (percubaan)</b>, which follow the real SPM format. Do those under exam conditions and check with the marking schemes.</div>`;
  ORDER.forEach(k=>{const s=S[k],P=window.PAPERS[k];h+=`<h2>${s.icon} ${s.name}</h2>
  <a class="card" href="#/browse/${k}"><b>Objective (MCQ) bank</b><div class="mut sm">${allQ(k).length} SPM-style MCQs with answers, grouped by chapter</div></a>
  <div class="card"><b>Structured practice (Kertas 2 style) – tap for step-by-step answer</b><div class="mut sm">${P.p2.length} questions with model answers</div>
  ${P.p2.map((x,pi)=>{const e=(window.EN&&EN.p2&&EN.p2[k]&&EN.p2[k][pi])||{};return `<details><summary>${T(x.q,e.q)} <span class="pill">${x.m} marks</span></summary><div class="ans">${T(x.a,e.a)}</div></details>`}).join('')}</div>
  <div class="card"><b>Real past papers (download)</b>${P.links.map(l=>`<div class="sm" style="margin:6px 0">🔗 <a href="${l[1]}" target="_blank" rel="noopener">${esc(l[0])}</a></div>`).join('')}</div>`});
  app.innerHTML=h}

function wrongView(){setTab('home');const ids=new Set(L.get('wrong',[]));const qs=[];ORDER.forEach(k=>allQ(k).forEach(x=>{if(ids.has(x.id))qs.push(x)}));
  app.innerHTML=`<a href="#/">← Home</a><h1>🔁 My mistakes</h1>`;
  if(!qs.length){app.innerHTML+='<div class="card">Nothing here yet — questions you get wrong in quizzes appear here.</div>';return}
  const box=document.createElement('div');app.appendChild(box);runQuiz(box,shuffle(qs),{instant:true,back:'#/'})}

function mockHome(){setTab('mock');const hist=L.get('mocks',[]);
  app.innerHTML=`<h1>⏱️ Mock test</h1><p class="mut sm">Timed, no hints while answering, full review at the end. Questions are drawn across <b>all chapters</b> of Tingkatan 4 & 5.</p>
  ${ORDER.map(k=>`<div class="card"><b>${S[k].icon} ${S[k].name}</b><div class="mut sm">${MOCK[k].paper} · ${Math.min(MOCK[k].n,allQ(k).length)} Qs · ${MOCK[k].min} min</div><a class="btn" href="#/mock/${k}">Start</a></div>`).join('')}
  <div class="card"><b>🏁 Full mock — all 3 subjects</b><div class="mut sm">Maths → Sejarah → BM back-to-back, one combined report</div><a class="btn" href="#/mock/all">Start full mock</a></div>
  <h2>Past mock scores</h2>${hist.slice(-8).reverse().map(m=>`<div class="card sm">${m.date} · ${m.name} · <b>${m.score}%</b></div>`).join('')||'<div class="mut sm">None yet</div>'}`}

function mockRun(arg){setTab('mock');const queue=arg==='all'?ORDER.slice():[arg];const results=[];
  function start(){const k=queue.shift(),qs=pickMock(k);let end=Date.now()+MOCK[k].min*60000;
    app.innerHTML=`<div class="timer"><span>${S[k].icon} ${S[k].name} mock</span><span id="tm"></span></div><div id="qb"></div>`;
    let finished=false;const doneCb=r=>{if(finished)return;finished=true;clearInterval(timer);results.push({k,...r});queue.length?start():report()};
    const live={};
    const tick=()=>{const left=Math.max(0,end-Date.now());const m=Math.floor(left/60000),s=Math.floor(left%60000/1000);$('#tm')&&($('#tm').textContent=`${m}:${String(s).padStart(2,'0')}`);if(!left){clearInterval(timer);const g=live.get();doneCb({right:g.right,total:qs.length,qs,answers:qs.map((x,i)=>!!g.answers[i]),pct:0})}};
    runQuiz($('#qb'),qs,{instant:false,onDone:doneCb,live});
    clearInterval(timer);timer=setInterval(tick,1000);tick()}
  function report(){const tot=results.reduce((a,r)=>a+r.right,0),all=results.reduce((a,r)=>a+r.total,0);const sc=Math.round(tot/all*100);
    const h=L.get('mocks',[]);h.push({date:new Date().toLocaleDateString(),name:results.map(r=>S[r.k].name).join(' + '),score:sc});L.set('mocks',h);
    app.innerHTML=`<h1>Mock result</h1><div class="card" style="text-align:center"><div class="big">${sc}%</div><div class="mut">${tot}/${all} correct</div></div>`+
    results.map(r=>`<div class="card"><b>${S[r.k].icon} ${S[r.k].name}</b> — ${r.right}/${r.total} (${Math.round(r.right/r.total*100)}%)
    <div class="mut sm">Weak chapters: ${weak(r)}</div>
    <details><summary>Review answers</summary>${r.qs.map((x,i)=>`<div style="margin:10px 0"><div class="q">${r.answers[i]?'✅':'❌'} ${view(x).qh}</div><div class="ans">✔ ${view(x).ans}\n${view(x).eh}</div></div>`).join('')}</details></div>`).join('')+`<a class="btn" href="#/mock">Done</a>`}
  function weak(r){const m={};r.qs.forEach((x,i)=>{if(!r.answers[i]){const t=S[x.sub].chapters[x.ch].t;m[t]=(m[t]||0)+1}});const a=Object.entries(m).sort((x,y)=>y[1]-x[1]).slice(0,3).map(e=>e[0]);return a.length?a.join('; '):'none 🎉'}
  start()}

function progressView(){setTab('progress');const p=prog();let h='<h1>📈 Progress</h1>';
  ORDER.forEach(k=>{h+=`<h2>${S[k].icon} ${S[k].name}</h2><div class="card">`+S[k].chapters.map((c,i)=>{const r=p[k+'_'+i];return `<div class="sm" style="margin:6px 0">${chTitle(k,c,i)}<div class="bar"><i style="width:${r?r.best:0}%"></i></div><span class="mut">${r?'best '+r.best+'% ('+r.tries+'×)':'not tried'}</span></div>`}).join('')+'</div>'});
  app.innerHTML=h+`<button class="btn alt" id="rs">Reset progress</button>`;$('#rs').onclick=()=>{if(confirm('Reset all progress?')){['prog','wrong','mocks'].forEach(x=>localStorage.removeItem('spm_'+x));progressView()}}}

function route(){clearInterval(timer);const r=(location.hash||'#/').slice(2).split('/');window.scrollTo(0,0);
  if(r[0]==='s')return subject(r[1]);
  if(r[0]==='c')return chapter(r[1],+r[2],r[3]);
  if(r[0]==='browse')return browse(r[1]);
  if(r[0]==='past')return past();
  if(r[0]==='wrong')return wrongView();
  if(r[0]==='mock')return r[1]?mockRun(r[1]):mockHome();
  if(r[0]==='progress')return progressView();
  home()}
const LN={ms:'BM',en:'EN',both:'BM+EN'};
function langBtn(){const b=$('#lang');b.textContent='🌐 '+LN[lang()]}
$('#lang').onclick=()=>{const n={both:'en',en:'ms',ms:'both'}[lang()];L.set('lang',n);langBtn();
  if(/^#\/(mock\/|c\/\w+\/\d+\/quiz|wrong)/.test(location.hash))return; /* running quiz: applies from the next question */
  route()};
langBtn();
window.addEventListener('hashchange',route);route();
(function(){const el=$('#countdown'),d=new Date('2026-11-23T00:00'),n=Math.ceil((d-new Date())/864e5);el.textContent=n>0?`SPM in ${n} days`:'Good luck! 🍀'})();
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
})();
