const C='spm-v3',F=['./','index.html','style.css','app.js','data/math.js','data/math_steps.js','data/sejarah.js','data/bm.js','data/papers.js','data/en_math.js','data/en_sej.js','data/en_bm.js','data/more_math.js','data/more_math_en.js','data/more_sej.js','data/more_bm.js','manifest.json','icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
