/* Extra note sections (appended to each chapter). A(sub, chapterIndex, [[BM label, BM points, EN label, EN points (omit = same)], ...]) */
function A(sub,ch,secs){const c=SUBJ[sub].chapters[ch],e=EN[sub][ch];secs.forEach(([ml,mp,el,ep])=>{c.notes.push([ml,mp]);e.n.push([el,ep||mp])})}
SUBJ.math.formLabel={4:'Tingkatan 4',5:'Tingkatan 5',6:'Tingkatan 1–3 (asas yang diandaikan)'};
/* ===== Tingkatan 4 ===== */
A('math',0,[
['Formula penting',['Punca α, β: **α + β = −b/a**, **αβ = c/a**','Bentuk persamaan daripada punca: **x² − (α+β)x + αβ = 0**','Penyempurnaan kuasa dua: x² + bx = (x + b/2)² − (b/2)²','f(x) = a(x − p)² + q → nilai min/maks = **q** pada **x = p**','Pintasan-x = punca persamaan f(x) = 0; pintasan-y = f(0) = c','f(x) > 0 untuk semua x jika a > 0 dan b² − 4ac < 0'],'Key formulas'],
['Ketaksamaan kuadratik',['Faktorkan, cari punca p < q','(x − p)(x − q) > 0 → **x < p atau x > q**','(x − p)(x − q) < 0 → **p < x < q**','Lakar graf untuk memastikan julat'],'Quadratic inequalities']]);
A('math',1,[
['Jadual & petua',['Kuasa 2: 1, 2, 4, 8, 16, 32, 64, 128','Asas 2 → 8: kumpul **3 digit** dari kanan (101 = 5)','Asas 2 → 4: kumpul **2 digit** dari kanan','Asas 8 → 2: setiap digit jadi 3 bit; asas 4 → 2: setiap digit jadi 2 bit','Tolak: pinjam nilai asas (asas 2: pinjam 10₂)','Bentuk piawai (ringkasan) dalam asas lain: tukar ke asas 10 dahulu jika ragu-ragu'],'Tables & tips']]);
A('math',2,[
['Bentuk hujah deduktif',['**Bentuk I**: P1 Semua A ialah B. P2 C ialah A. K: C ialah B','**Bentuk II**: P1 Jika p, maka q. P2 p benar. K: q benar','**Bentuk III**: P1 Jika p, maka q. P2 ~q benar. K: ~p benar','Hujah **sah** + premis benar → **munasabah (sound)**'],'Forms of deductive argument'],
['Jadual kebenaran',['~p: benar ↔ palsu','p dan q: benar hanya jika kedua-duanya benar','p atau q: palsu hanya jika kedua-duanya palsu','**p → q palsu hanya apabila p benar dan q palsu**','Untuk menunjukkan pernyataan palsu: beri **contoh penyangkal**'],'Truth tables'],
['Induksi',['Cari beza sepunya d: Tn = a + (n − 1)d','Cari corak kuasa dua/kuasa tiga: n², n³, 2ⁿ','Tulis kesimpulan umum berdasarkan pola (mungkin tidak sah)'],'Induction']]);
A('math',3,[
['Rumus tambahan',['n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C)','Bilangan subset bagi set dengan n unsur = **2ⁿ**','Simbol: ∈ (unsur), ∉ (bukan unsur), ∅ atau { } (set kosong), ξ (set semesta)','Lorek: A′ ∩ B, (A ∪ B)′, A ∩ B′ … lorek bahagian yang betul pada gambar rajah Venn'],'Extra formulae']]);
A('math',4,[
['Istilah tambahan',['**Gelung** (loop), **tepi berganda**, **laluan**, **kitaran**, **graf tersambung**','Graf lengkap Kₙ: tepi = **n(n − 1)/2**','Graf terarah: Σ darjah masuk = Σ darjah keluar = bilangan tepi','Pokok serentang: semua bucu, n − 1 tepi, tiada kitaran','Cara cari laluan terpendek: senaraikan semua laluan, jumlahkan pemberat, pilih yang terkecil'],'More terms']]);
A('math',5,[
['Langkah melukis rantau',['1. Tukar ketaksamaan kepada persamaan','2. Cari dua titik (pintasan-x dan pintasan-y)','3. Jenis garis: putus-putus (< >) atau penuh (≤ ≥)','4. Uji titik (0,0) kecuali garis melalui asalan','5. Lorek rantau (rantau bertindih jika lebih satu)'],'Steps to draw a region'],
['Menulis ketaksamaan daripada rantau',['Cari kecerunan m dan pintasan-y c → y = mx + c','Lorek di atas → y > / ≥ mx + c; di bawah → y < / ≤','Garis y = 0 ialah paksi-x; x = 0 ialah paksi-y'],'Writing inequalities from a region']]);
A('math',6,[
['Rumus dan penukaran',['Laju purata = **jumlah jarak ÷ jumlah masa**','Luas trapezium = **½(a + b)h** (graf laju–masa)','**km/j → m/s: ÷ 3.6**; m/s → km/j: × 3.6','Dua garis bersilang pada graf jarak–masa = dua objek bertemu','Kecerunan graf laju–masa antara dua titik = pecutan purata'],'Formulae and conversions']]);
A('math',7,[
['Formula',['**Min x̄ = Σx ÷ N**','Median: N ganjil → nilai tengah; N genap → **purata dua nilai tengah**','**Varians σ² = Σ(x − x̄)² ÷ N = Σx²/N − x̄²**; **SP σ = √σ²**','Data + k: min + k, SP **tidak berubah**; data × k: min × k, SP × |k|, **varians × k²**','**IQR = Q₃ − Q₁**; Julat = maks − min'],'Formulae'],
['Perwakilan data',['Plot kotak: min, Q₁, median, Q₃, maks','Plot batang dan daun: kunci mesti ditulis','Plot titik; histogram; bentuk taburan (simetri / condong)'],'Data representation']]);
A('math',8,[
['Petua penting',['**P(A′) = 1 − P(A)**','"Sekurang-kurangnya satu" = **1 − P(tiada)**','Gambar rajah pokok: **darab sepanjang cabang, tambah antara cabang**','Jadual ruang sampel: kira kes yang diingini ÷ jumlah kes','Peristiwa bebas ≠ saling eksklusif (jangan keliru)'],'Key rules']]);
A('math',9,[
['Formula faedah',['Faedah mudah **I = Prt**, jumlah A = P + I','Faedah kompaun **A = P(1 + r/n)^(nt)**','Dana kecemasan = **3–6 bulan perbelanjaan**','Aliran tunai bersih = pendapatan − perbelanjaan','Perancangan: tetapkan matlamat → belanjawan → simpan/labur → semak'],'Interest formulae']]);
/* ===== Tingkatan 5 ===== */
A('math',10,[
['Hubungan dua keadaan',['Langsung: **y₁/x₁ = y₂/x₂**','Songsang: **y₁x₁ = y₂x₂**','Bergabung y ∝ x/z: **y₁z₁/x₁ = y₂z₂/x₂**','Graf: y lawan x (langsung) = garis lurus melalui asalan; y lawan 1/x (songsang) = garis lurus melalui asalan'],'Relating two situations']]);
A('math',11,[
['Rumus 2×2',['(a b / c d)(e f / g h) = **(ae+bg  af+bh / ce+dg  cf+dh)**','**A⁻¹ = 1/(ad − bc) × (d −b / −c a)**','AA⁻¹ = A⁻¹A = I = (1 0 / 0 1); AI = IA = A','Penyelesaian: ax + by = h, cx + dy = k → **(x / y) = A⁻¹ (h / k)**','Skalar × matriks: darab setiap unsur; (AB)ᵀ tidak diperlukan'],'2×2 formulae']]);
A('math',12,[
['Insurans kenderaan & perubatan',['Insurans kenderaan: **komprehensif** vs **pihak ketiga**','**Diskaun tanpa tuntutan (NCD)**: 25%, 30%, 38.33%, 45%, 55% (tahun berturut-turut tiada tuntutan)','Ko-insurans perubatan (cth. 80/20): penginsurans bayar 80%, pemegang polisi 20% selepas deduktibel','Kerugian = bayaran premium berbanding tuntutan; baca soalan: cari premium selepas NCD = premium × (1 − NCD)'],'Motor and medical insurance']]);
A('math',13,[
['Langkah pengiraan cukai pendapatan',['1. Pendapatan agregat − pelepasan = **pendapatan bercukai**','2. Cari baris kadar cukai: **cukai kumulatif + (kadar % × baki)**','3. Tolak **rebat / zakat** = cukai kena bayar','**Cukai taksiran** = kadar × nilai tahunan; **cukai tanah** = kadar × luas','Cukai jualan (barang) & cukai perkhidmatan (perkhidmatan): jumlah = harga × (1 + kadar)'],'Income-tax calculation steps']]);
A('math',14,[
['Koordinat transformasi',['Translasi (a / b): (x, y) → **(x + a, y + b)**','Pantulan paksi-x: (x, −y); paksi-y: (−x, y); garis y = x: **(y, x)**','Putaran 90° lawan jam pada asalan: **(−y, x)**; 180°: (−x, −y); 90° ikut jam: **(y, −x)**','Pembesaran pusat asalan faktor k: **(kx, ky)**; pusat (a, b): (a + k(x−a), b + k(y−b))','Faktor skala k = **jarak imej ÷ jarak objek** (dari pusat); luas k²; isi padu k³'],'Coordinate rules for transformations']]);
A('math',15,[
['Jadual sudut khas',['θ:  0°, 30°, 45°, 60°, 90°','sin: 0, ½, √2/2, √3/2, 1','kos: 1, √3/2, √2/2, ½, 0','tan: 0, 1/√3, 1, √3, tidak tertakrif'],'Special angles table'],
['Menyelesaikan persamaan',['sin θ = k → θ = α, **180° − α**','kos θ = k → θ = α, **360° − α**','tan θ = k → θ = α, **180° + α**','Graf sin: 0 → 1 (90°) → 0 (180°) → −1 (270°) → 0 (360°); graf kos bermula pada 1','**sin²θ + kos²θ = 1; tan θ = sin θ ÷ kos θ**'],'Solving equations and graphs']]);
A('math',16,[
['Formula tambahan',['Min = **Σfx ÷ Σf** (fx = titik tengah × kekerapan)','Median daripada formula: **L + ((N/2 − F)/f) × c**','Q₁ pada N/4, Q₃ pada 3N/4 — baca daripada ogif','Perbezaan: histogram (kekerapan) vs ogif (kekerapan longgokan)','Bandingkan dua set data: gunakan **median, IQR, SP**'],'Extra formulae']]);
A('math',17,[
['Contoh jenis soalan',['Perbandingan pelan (Pelan A vs B): kos, masa','Pengoptimuman: luas/perimeter/susun atur','Kewangan: pinjaman, simpanan, ansuran','Gerakan: jarak, laju, masa','Gunakan **pembundaran 2 t.p.** jika diminta; tulis **unit**'],'Typical problem types']]);

/* ===== New chapter: Form 1–3 basics ===== */
SUBJ.math.chapters.push({f:6,t:'Asas Tingkatan 1–3: Formula yang Diandaikan',notes:[
['Indeks & bentuk piawai',['aᵐ × aⁿ = **aᵐ⁺ⁿ**; aᵐ ÷ aⁿ = **aᵐ⁻ⁿ**; (aᵐ)ⁿ = **aᵐⁿ**','a⁰ = 1; **a⁻ⁿ = 1/aⁿ**; a^(1/n) = ⁿ√a','Bentuk piawai: **A × 10ⁿ, 1 ≤ A < 10**']],
['Algebra',['(a + b)² = a² + 2ab + b²; (a − b)² = a² − 2ab + b²','**a² − b² = (a + b)(a − b)**','Persamaan serentak: penghapusan atau penggantian','Faktor: a² + bx + c → cari dua nombor']],
['Pythagoras & Trigonometri',['**c² = a² + b²**','sin = sbl/hip; kos = sbg/hip; tan = sbl/sbg (**SOH-CAH-TOA**)','Sudut dongakan & sudut tunduk diukur dari garis mengufuk']],
['Bulatan',['Lilitan = **2πr**; luas = **πr²**','Panjang lengkok = **θ/360° × 2πr**; luas sektor = **θ/360° × πr²**','Sudut pada pusat = **2 × sudut pada lilitan**','Sudut dalam sama tembereng sama; sisi empat kitaran: sudut bertentangan = **180°**','Tangen ⟂ jejari; dua tangen dari satu titik sama panjang']],
['Poligon & sudut',['Hasil tambah sudut pedalaman = **(n − 2) × 180°**','Sudut pedalaman poligon sekata = (n − 2) × 180° ÷ n','Hasil tambah sudut peluaran = **360°**','Garis selari: sudut sepadan sama, berselang-seli sama, **pedalaman = 180°**']],
['Luas & isi padu',['Segi tiga **½bt**; segi empat selari **bt**; trapezium **½(a + b)t**','Prisma = luas keratan rentas × tinggi; silinder **πj²t**','Kon **⅓πj²t**; sfera **4/3 πj³**; piramid **⅓ × tapak × t**','Luas permukaan: silinder 2πjt + 2πj²; kon πjs + πj²; sfera **4πj²**']],
['Koordinat & garis lurus',['Kecerunan **m = (y₂ − y₁)/(x₂ − x₁)**; **y = mx + c**','Jarak = √((x₂−x₁)² + (y₂−y₁)²); titik tengah = ((x₁+x₂)/2, (y₁+y₂)/2)','Selari: m sama; serenjang: **m₁m₂ = −1**']],
['Statistik, kebarangkalian & kewangan',['P(A) = n(A) ÷ n(S)','Min, median, mod','Faedah mudah **I = Prt**; peratus perubahan = (perubahan ÷ asal) × 100%','Untung = jualan − kos; diskaun = harga asal − harga jualan','Bearing diukur ikut jam dari **utara**']]],
q:[
['Lilitan bulatan berjejari 7 cm (π = 22/7) ialah',['22 cm','44 cm','154 cm','88 cm'],1,'Step 1: Lilitan = 2πr.\nStep 2: = 2 × 22/7 × 7.\nStep 3: = 44 cm. ✔'],
['Hasil tambah sudut pedalaman sebuah heksagon ialah',['540°','720°','900°','1080°'],1,'Step 1: Heksagon n = 6.\nStep 2: (n − 2) × 180° = 4 × 180°.\nStep 3: = 720°. ✔'],
['Isi padu sebuah kon berjejari 3 cm dan tinggi 7 cm (π = 22/7) ialah',['66 cm³','22 cm³','198 cm³','462 cm³'],0,'Step 1: V = ⅓πr²h.\nStep 2: = ⅓ × 22/7 × 9 × 7.\nStep 3: = 66 cm³. ✔'],
['Kecerunan garis yang melalui (1, 2) dan (5, 10) ialah',['1','2','4','0.5'],1,'Step 1: m = (y₂ − y₁)/(x₂ − x₁).\nStep 2: = (10 − 2)/(5 − 1) = 8/4.\nStep 3: m = 2. ✔'],
['Faedah mudah bagi RM2 000 pada kadar 5% setahun selama 3 tahun ialah',['RM100','RM300','RM150','RM3 000'],1,'Step 1: I = Prt.\nStep 2: = 2000 × 0.05 × 3.\nStep 3: = RM300. ✔'],
['Panjang lengkok sektor sudut 90° berjejari 14 cm (π = 22/7) ialah',['11 cm','22 cm','44 cm','7 cm'],1,'Step 1: Lengkok = θ/360° × 2πr.\nStep 2: = 90/360 × 2 × 22/7 × 14 = ¼ × 88.\nStep 3: = 22 cm. ✔']]});
EN.math.push({t:'Forms 1–3 Basics: Assumed Formulae',n:[
['Indices & standard form',['aᵐ × aⁿ = **aᵐ⁺ⁿ**; aᵐ ÷ aⁿ = **aᵐ⁻ⁿ**; (aᵐ)ⁿ = **aᵐⁿ**','a⁰ = 1; **a⁻ⁿ = 1/aⁿ**; a^(1/n) = ⁿ√a','Standard form: **A × 10ⁿ, 1 ≤ A < 10**']],
['Algebra',['(a + b)² = a² + 2ab + b²; (a − b)² = a² − 2ab + b²','**a² − b² = (a + b)(a − b)**','Simultaneous equations: elimination or substitution','Factorising: ax² + bx + c → find two numbers']],
['Pythagoras & Trigonometry',['**c² = a² + b²**','sin = opp/hyp; cos = adj/hyp; tan = opp/adj (**SOH-CAH-TOA**)','Angle of elevation & depression are measured from the horizontal']],
['Circles',['Circumference = **2πr**; area = **πr²**','Arc length = **θ/360° × 2πr**; sector area = **θ/360° × πr²**','Angle at the centre = **2 × angle at the circumference**','Angles in the same segment are equal; cyclic quadrilateral: opposite angles = **180°**','Tangent ⟂ radius; two tangents from one point are equal']],
['Polygons & angles',['Sum of interior angles = **(n − 2) × 180°**','Interior angle of a regular polygon = (n − 2) × 180° ÷ n','Sum of exterior angles = **360°**','Parallel lines: corresponding angles equal, alternate angles equal, **co-interior = 180°**']],
['Area & volume',['Triangle **½bh**; parallelogram **bh**; trapezium **½(a + b)h**','Prism = cross-section area × height; cylinder **πr²h**','Cone **⅓πr²h**; sphere **4/3 πr³**; pyramid **⅓ × base × h**','Surface area: cylinder 2πrh + 2πr²; cone πrs + πr²; sphere **4πr²**']],
['Coordinates & straight lines',['Gradient **m = (y₂ − y₁)/(x₂ − x₁)**; **y = mx + c**','Distance = √((x₂−x₁)² + (y₂−y₁)²); midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)','Parallel: same m; perpendicular: **m₁m₂ = −1**']],
['Statistics, probability & finance',['P(A) = n(A) ÷ n(S)','Mean, median, mode','Simple interest **I = Prt**; percentage change = (change ÷ original) × 100%','Profit = selling − cost; discount = original − sale price','Bearings are measured clockwise from **north**']]],
q:[
['The circumference of a circle of radius 7 cm (π = 22/7) is',0,0],['The sum of the interior angles of a hexagon is',0,0],['The volume of a cone with radius 3 cm and height 7 cm (π = 22/7) is',0,0],['The gradient of the line through (1, 2) and (5, 10) is',0,0],['The simple interest on RM2 000 at 5% per year for 3 years is',0,0],['The arc length of a sector of angle 90° and radius 14 cm (π = 22/7) is',0,0]]});
