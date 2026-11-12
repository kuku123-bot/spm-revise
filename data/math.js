window.SUBJ=window.SUBJ||{};
SUBJ.math={name:'Matematik (1449)',icon:'🧮',about:'KSSM Tingkatan 4 & 5. Notes use SPM (BM) chapter titles with English explanations. Matrices are written row by row: (a b / c d). SPM also assumes Form 1–3 basics (algebra, Pythagoras, angles, circles, solid geometry).',
chapters:[
/* ===== TINGKATAN 4 ===== */
{f:4,n:1,t:'Fungsi dan Persamaan Kuadratik dalam Satu Pemboleh Ubah',notes:[
['Bentuk am',['Fungsi kuadratik: **f(x) = ax² + bx + c**, a ≠ 0','Persamaan kuadratik: **ax² + bx + c = 0**']],
['Kaedah penyelesaian',['**Pemfaktoran** – cari dua faktor, samakan setiap satu dengan 0','**Rumus**: x = (−b ± √(b² − 4ac)) / 2a','**Penyempurnaan kuasa dua**: tulis dalam bentuk a(x − p)² + q']],
['Jenis punca (diskriminan b² − 4ac)',['b² − 4ac **> 0** → dua punca nyata yang berbeza','b² − 4ac **= 0** → dua punca nyata yang sama','b² − 4ac **< 0** → tiada punca nyata']],
['Hasil tambah & hasil darab punca',['Hasil tambah punca = **−b/a**','Hasil darab punca = **c/a**']],
['Graf fungsi kuadratik',['a > 0 → bentuk U, ada nilai **minimum**; a < 0 → bentuk ∩, ada nilai **maksimum**','**Paksi simetri**: x = −b/2a','f(x) = a(x − p)² + q → **titik pusingan (verteks)** ialah (p, q)','Pintasan-y = c']]],
q:[
['Punca bagi persamaan x² − 5x + 6 = 0 ialah',['1 dan 6','2 dan 3','−2 dan −3','−1 dan 6'],1,'(x−2)(x−3)=0 → x = 2 atau 3.'],
['Nilai diskriminan bagi 2x² − 3x + 5 = 0 ialah',['−31','31','−11','49'],0,'b²−4ac = 9 − 40 = −31 (< 0, tiada punca nyata).'],
['Hasil tambah punca bagi 2x² − 7x + 3 = 0 ialah',['−7/2','7/2','3/2','−3/2'],1,'−b/a = 7/2.'],
['Persamaan paksi simetri bagi y = x² − 6x + 5 ialah',['x = −3','x = 3','x = 6','x = 5'],1,'x = −b/2a = 6/2 = 3.'],
['Nilai k supaya x² + kx + 9 = 0 mempunyai dua punca sama ialah',['±3','3','±6','6'],2,'b²−4ac=0 → k² − 36 = 0 → k = ±6.'],
['Nilai minimum bagi f(x) = x² − 4x + 7 ialah',['7','3','−3','5'],1,'f(x) = (x−2)² + 3 → minimum = 3.']]},

{f:4,n:2,t:'Asas Nombor',notes:[
['Konsep',['Asas nombor: 2, 5, 8, 10, dll. Nilai tempat bagi asas n: …n³, n², n¹, n⁰','Asas 2 hanya guna digit 0 dan 1']],
['Penukaran',['**Asas n → asas 10**: kembangkan mengikut nilai tempat. 1101₂ = 8 + 4 + 0 + 1 = 13','**Asas 10 → asas n**: bahagi berulang dengan n, baca baki dari **bawah ke atas**','Asas 2 ↔ asas 8 ↔ asas 4: kumpulkan digit (3 digit asas 2 = 1 digit asas 8)']],
['Operasi',['Tambah & tolak dalam asas yang sama; ingat 1 + 1 = 10 dalam asas 2','Tukar ke asas 10 jika ragu-ragu, kemudian tukar balik']]],
q:[
['1101₂ bersamaan dengan nombor asas 10',['11','12','13','15'],2,'8+4+0+1 = 13.'],
['25 dalam asas 10 ditukar ke asas 2 ialah',['10011₂','11001₂','11010₂','10101₂'],1,'25 = 16+8+1 → 11001₂.'],
['345₈ ditukar ke asas 10 ialah',['229','197','245','301'],0,'3×64 + 4×8 + 5 = 192+32+5 = 229.'],
['1011₂ + 110₂ =',['10001₂','10111₂','1111₂','11001₂'],0,'11 + 6 = 17 = 10001₂.'],
['Nilai digit 3 dalam 2301₄ ialah',['3','12','48','192'],2,'3 berada di tempat 4² → 3 × 16 = 48.'],
['213₅ bersamaan dengan asas 10',['58','48','63','53'],0,'2×25 + 1×5 + 3 = 58.']]},

{f:4,n:3,t:'Penaakulan Logik',notes:[
['Pernyataan',['**Pernyataan** = ayat yang boleh ditentukan benar atau palsu (soalan & arahan BUKAN pernyataan)','**Penafian** (~p): benar jadi palsu dan sebaliknya','Pengkuantiti: **semua** ↔ **sebilangan / sekurang-kurangnya satu**. Penafian "semua" ialah "sebilangan … tidak"']],
['Operasi',['**dan**: benar hanya jika kedua-duanya benar','**atau**: palsu hanya jika kedua-duanya palsu']],
['Implikasi',['"Jika p, maka q": antejadian = p, akibat = q','**Akas**: Jika q, maka p','**Songsangan**: Jika ~p, maka ~q','**Kontrapositif**: Jika ~q, maka ~p (nilai kebenaran sama dengan implikasi asal)','"p jika dan hanya jika q" = dua implikasi']],
['Hujah',['**Deduktif** – umum → khusus (Bentuk I, II, III). Hujah **sah** jika premis benar ⇒ kesimpulan benar','**Induktif** – khusus → umum (cari pola, kesimpulan boleh palsu)']]],
q:[
['Penafian bagi "Semua nombor perdana ialah nombor ganjil" ialah',['Tiada nombor perdana ialah nombor ganjil','Sebilangan nombor perdana bukan nombor ganjil','Semua nombor perdana bukan nombor ganjil','Sebilangan nombor ganjil ialah nombor perdana'],1,'Penafian "semua" → "sebilangan … tidak".'],
['"p dan q" adalah benar apabila',['p benar sahaja','q benar sahaja','p dan q kedua-duanya benar','p atau q benar'],2,'Operasi "dan" benar hanya jika kedua-duanya benar.'],
['Akas bagi "Jika x > 3, maka x > 1" ialah',['Jika x > 1, maka x > 3','Jika x ≤ 3, maka x ≤ 1','Jika x ≤ 1, maka x ≤ 3','Jika x > 3, maka x ≤ 1'],0,'Akas: tukar antejadian dan akibat.'],
['Kontrapositif bagi "Jika p, maka q" ialah',['Jika q, maka p','Jika ~p, maka ~q','Jika ~q, maka ~p','Jika p, maka ~q'],2,'Tukar dan nafikan keduanya.'],
['Premis 1: Semua pelajar ialah anggota kelab. Premis 2: Aina ialah pelajar. Kesimpulan:',['Aina bukan anggota kelab','Aina ialah anggota kelab','Semua anggota kelab ialah pelajar','Sebilangan pelajar bukan anggota'],1,'Hujah deduktif Bentuk I.'],
['Satu urutan: 3, 7, 11, 15, … Sebutan ke-20 ialah',['77','79','81','83'],1,'Sebutan ke-n = 4n − 1 → 4(20) − 1 = 79 (induksi).']]},

{f:4,n:4,t:'Operasi ke atas Set',notes:[
['Simbol',['**A ∩ B** persilangan (di dalam kedua-dua)','**A ∪ B** kesatuan (dalam A atau B atau kedua-duanya)','**A′** pelengkap (dalam ξ tetapi bukan dalam A)','**A ⊂ B** A ialah subset B; **∅** set kosong']],
['Rumus',['**n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**','n(A′) = n(ξ) − n(A)','Hukum De Morgan: (A ∪ B)′ = A′ ∩ B′; (A ∩ B)′ = A′ ∪ B′']],
['Gambar rajah Venn',['Isi nombor dari **bahagian persilangan** dahulu, kemudian bahagian lain','Bahagian luar bulatan = (A ∪ B)′']]],
q:[
['n(A) = 12, n(B) = 9 dan n(A ∩ B) = 4. Nilai n(A ∪ B) ialah',['21','17','25','13'],1,'12 + 9 − 4 = 17.'],
['A = {1,2,3,4}, B = {3,4,5}. A ∩ B =',['{3,4}','{1,2,3,4,5}','{1,2,5}','{5}'],0,'Unsur sepunya.'],
['n(ξ) = 30 dan n(A) = 18. n(A′) =',['48','18','12','10'],2,'30 − 18 = 12.'],
['(A ∪ B)′ sama dengan',['A′ ∪ B′','A′ ∩ B′','A ∩ B′','A′ ∩ B'],1,'Hukum De Morgan.'],
['Daripada 40 murid, 25 suka Matematik, 20 suka Sains dan 8 suka kedua-duanya. Bilangan murid yang tidak suka mana-mana ialah',['3','5','7','12'],0,'25+20−8 = 37; 40 − 37 = 3.'],
['A ⊂ B bermaksud',['A ∪ B = A','A ∩ B = B','A ∪ B = B','A′ = B'],2,'Semua unsur A ada dalam B, jadi A ∪ B = B.']]},

{f:4,n:5,t:'Rangkaian dalam Teori Graf',notes:[
['Istilah',['**Bucu** (titik), **tepi** (garis penghubung)','**Darjah bucu** = bilangan tepi pada bucu itu','**Σ darjah = 2 × bilangan tepi**']],
['Jenis graf',['**Graf terarah** – tepi ada anak panah','**Graf berpemberat** – tepi ada nilai (jarak, kos, masa)','**Graf mudah** – tiada gelung & tiada tepi berganda','**Pokok** – graf mudah tersambung tanpa kitaran; n bucu → **n − 1 tepi**','**Subgraf**, **pokok serentang**']],
['Aplikasi',['**Laluan terpendek** = jumlah pemberat paling kecil','Pokok serentang minimum = jumlah pemberat minimum yang menyambung semua bucu']]],
q:[
['Satu graf mempunyai 5 tepi. Jumlah darjah semua bucu ialah',['5','10','15','25'],1,'2 × 5 = 10.'],
['Sebuah pokok mempunyai 7 bucu. Bilangan tepinya ialah',['5','6','7','8'],1,'n − 1 = 6.'],
['Dalam graf berpemberat, laluan terpendek ialah laluan yang',['melalui bucu paling sedikit','mempunyai jumlah pemberat paling kecil','melalui tepi paling banyak','berbentuk kitaran'],1,'Terpendek merujuk kepada jumlah pemberat.'],
['Darjah satu bucu ialah',['bilangan bucu dalam graf','bilangan tepi yang bersambung pada bucu itu','jumlah pemberat','bilangan subgraf'],1,'Definisi darjah bucu.'],
['Graf terarah dikenali melalui',['tepi berpemberat','bucu berwarna','tepi bertanda anak panah','tiada kitaran'],2,'Tepi mempunyai arah.'],
['Graf mudah dengan 4 bucu yang setiap bucu berdarjah 3 mempunyai bilangan tepi',['4','6','8','12'],1,'Σ darjah = 12 → tepi = 6.']]},

{f:4,n:6,t:'Ketaksamaan Linear dalam Dua Pemboleh Ubah',notes:[
['Melukis rantau',['Lukis garis sempadan dahulu','**Garis putus-putus** untuk > atau <','**Garis penuh** untuk ≥ atau ≤','Uji satu titik (cth. (0,0)) untuk menentukan sisi yang diorak']],
['Petua',['y > mx + c → rantau **di atas** garis; y < mx + c → **di bawah**','x > a → di **kanan** garis x = a; x < a → di **kiri**','Sistem ketaksamaan: rantau yang memuaskan **semua** ketaksamaan serentak (rantau bertindih)']]],
q:[
['Garis y = 2x + 1 dilukis sebagai garis putus-putus bagi ketaksamaan',['y ≥ 2x + 1','y > 2x + 1','y ≤ 2x + 1','Semua'],1,'> dan < guna garis putus-putus.'],
['Rantau y < x terletak',['di atas garis y = x','di bawah garis y = x','di kiri paksi-y','di atas paksi-x'],1,'y lebih kecil → bawah garis.'],
['Titik yang memuaskan y ≥ x + 2 ialah',['(1, 1)','(2, 0)','(0, 3)','(3, 3)'],2,'3 ≥ 0 + 2 benar.'],
['Rantau x ≥ 0 ialah',['di kiri paksi-y','di kanan paksi-y termasuk paksi-y','di atas paksi-x','di bawah paksi-x'],1,'x ≥ 0 → kanan, garis penuh.'],
['Rantau penyelesaian bagi sistem ketaksamaan ialah',['rantau bagi ketaksamaan pertama sahaja','rantau yang memuaskan semua ketaksamaan','gabungan semua rantau','rantau di luar semua garis'],1,'Rantau bertindih.'],
['Rantau y > 3 ialah',['di atas garis mengufuk y = 3, garis putus-putus','di bawah garis y = 3, garis penuh','di kanan garis x = 3','di atas garis y = 3, garis penuh'],0,'> → garis putus-putus, y besar → atas.']]},

{f:4,n:7,t:'Graf Gerakan',notes:[
['Graf jarak–masa',['**Kecerunan = laju**','Garis **mengufuk** = objek pegun (rehat)','Kecerunan negatif = bergerak balik ke titik asal']],
['Graf laju–masa',['**Kecerunan = pecutan** (negatif = nyahpecutan)','**Luas di bawah graf = jarak**','Garis mengufuk = laju seragam']],
['Formula',['Laju = jarak ÷ masa','Pecutan = (v − u) ÷ t','Laju purata = jumlah jarak ÷ jumlah masa']]],
q:[
['Kecerunan graf jarak–masa mewakili',['pecutan','laju','jarak','masa'],1,'Kecerunan = Δjarak/Δmasa = laju.'],
['Garis mengufuk pada graf jarak–masa menunjukkan objek',['bergerak laju seragam','dipecut','pegun','dinyahpecut'],2,'Jarak tidak berubah.'],
['Luas di bawah graf laju–masa mewakili',['pecutan','laju purata','jarak yang dilalui','masa'],2,'Luas = jarak.'],
['Laju bertambah daripada 0 kepada 12 m/s dalam 4 saat. Pecutan ialah',['3 m/s²','4 m/s²','8 m/s²','48 m/s²'],0,'12 ÷ 4 = 3.'],
['Satu objek bergerak 8 m/s selama 5 s. Jarak yang dilalui',['13 m','1.6 m','40 m','45 m'],2,'8 × 5 = 40 m.'],
['Kecerunan negatif pada graf laju–masa bermaksud',['objek pegun','objek dipecut','objek dinyahpecut','laju seragam'],2,'Pecutan negatif = nyahpecutan.']]},

{f:4,n:8,t:'Sukatan Serakan Data Tak Terkumpul',notes:[
['Sukatan',['**Julat** = nilai terbesar − nilai terkecil','**Kuartil** Q₁, Q₂ (median), Q₃; **Julat antara kuartil = Q₃ − Q₁**','**Varians σ² = Σ(x − min)² ÷ N = Σx²/N − min²**','**Sisihan piawai σ = √varians**']],
['Petua penting',['Tambah/tolak pemalar kepada semua data → **SP & julat tidak berubah**','Darab semua data dengan k → SP didarab dengan |k|','Data yang sama semua → SP = 0','**Plot kotak**: min, Q₁, median, Q₃, maks']],
['Gunakan',['SP/IQR kecil → data lebih konsisten','IQR tidak terjejas oleh nilai ekstrem (outlier)']]],
q:[
['Julat bagi 3, 7, 2, 9, 5 ialah',['5','7','9','6'],1,'9 − 2 = 7.'],
['Julat antara kuartil bagi 1, 3, 5, 7, 9, 11, 13 ialah',['6','8','10','12'],1,'Q₁ = 3, Q₃ = 11 → 8.'],
['Sisihan piawai ialah',['kuasa dua varians','punca kuasa dua varians','dua kali varians','julat ÷ 2'],1,'σ = √σ².'],
['Sisihan piawai bagi 4, 4, 4, 4 ialah',['0','4','2','16'],0,'Tiada serakan.'],
['Varians bagi 2, 4, 6, 8, 10 ialah',['4','8','10','6'],1,'min = 6; Σ(x−6)² = 40; 40 ÷ 5 = 8.'],
['Setiap nilai data ditambah 5. Sisihan piawai',['bertambah 5','berkurang 5','tidak berubah','menjadi 5 kali ganda'],2,'Serakan tidak berubah.']]},

{f:4,n:9,t:'Kebarangkalian Peristiwa Bergabung',notes:[
['Jenis peristiwa',['**Peristiwa bebas** – kejadian satu tidak menjejas yang lain (dengan pengembalian)','**Peristiwa saling eksklusif** – tidak boleh berlaku serentak, P(A ∩ B) = 0']],
['Petua',['**Bebas**: P(A dan B) = P(A) × P(B)','**Saling eksklusif**: P(A atau B) = P(A) + P(B)','**Umum**: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)','Tanpa pengembalian → penyebut berkurang 1 (peristiwa bersandar)']],
['Tip',['Gunakan **gambar rajah pokok** atau jadual sampel','Kebarangkalian sentiasa antara 0 dan 1']]],
q:[
['Syiling dan dadu dilambung. P(kepala dan 6) =',['1/12','1/6','1/2','7/12'],0,'1/2 × 1/6 = 1/12.'],
['A dan B saling eksklusif. P(A) = 0.3, P(B) = 0.5. P(A atau B) =',['0.15','0.2','0.8','0.35'],2,'0.3 + 0.5 = 0.8.'],
['A dan B bebas. P(A) = 0.4, P(B) = 0.5. P(A ∩ B) =',['0.9','0.1','0.2','0.45'],2,'0.4 × 0.5 = 0.2.'],
['Beg ada 3 bola merah dan 2 biru. Dua bola diambil DENGAN pengembalian. P(kedua-duanya merah) =',['9/25','3/10','6/25','3/5'],0,'(3/5)² = 9/25.'],
['Soalan sama TANPA pengembalian. P(kedua-duanya merah) =',['9/25','3/10','2/5','6/25'],1,'3/5 × 2/4 = 3/10.'],
['P(A) = 0.6, P(B) = 0.5, P(A ∩ B) = 0.3. P(A ∪ B) =',['1.1','0.8','0.9','0.3'],1,'0.6 + 0.5 − 0.3 = 0.8.']]},

{f:4,n:10,t:'Matematik Pengguna: Pengurusan Kewangan',notes:[
['Asas',['Pendapatan, simpanan, pelaburan, perbelanjaan; **belanjawan** = rancangan pendapatan vs perbelanjaan','**Lebihan** = pendapatan > belanja; **Defisit** = belanja > pendapatan; **Seimbang** = sama']],
['Matlamat kewangan (SMART)',['**S**pecific, **M**easurable, **A**chievable, **R**ealistic, **T**ime-bound','Matlamat jangka pendek / sederhana / panjang']],
['Kekayaan',['**Kekayaan bersih = Aset − Liabiliti**','Aliran tunai positif = masuk > keluar']],
['Langkah',['Tetapkan matlamat → Nilai kedudukan kewangan → Cipta rancangan → Laksana → Semak & ubah suai']]],
q:[
['Pendapatan RM3 000 dan perbelanjaan RM3 400. Belanjawan ini mengalami',['lebihan RM400','defisit RM400','lebihan RM3 400','seimbang'],1,'Perbelanjaan melebihi pendapatan.'],
['Aset RM250 000 dan liabiliti RM90 000. Kekayaan bersih ialah',['RM340 000','RM160 000','RM90 000','RM250 000'],1,'250 000 − 90 000.'],
['Huruf "M" dalam SMART bermaksud',['Mudah','Measurable (boleh diukur)','Minimum','Maksimum'],1,'Measurable.'],
['Belanjawan lebihan berlaku apabila',['perbelanjaan > pendapatan','pendapatan > perbelanjaan','aset < liabiliti','simpanan = 0'],1,'Pendapatan melebihi belanja.'],
['Contoh perbelanjaan tetap ialah',['makan di restoran','ansuran pinjaman rumah','membeli pakaian','hadiah'],1,'Jumlah sama setiap bulan.'],
['Aliran tunai positif bermaksud',['tunai keluar > tunai masuk','tunai masuk > tunai keluar','tiada simpanan','tunai masuk = 0'],1,'Masuk lebih banyak daripada keluar.']]},

/* ===== TINGKATAN 5 ===== */
{f:5,n:1,t:'Ubahan',notes:[
['Jenis ubahan',['**Langsung**: y ∝ x → **y = kx** (graf: garis lurus melalui asalan)','**Songsang**: y ∝ 1/x → **y = k/x**','**Bergabung**: y ∝ xz → y = kxz; y ∝ x/z → y = kx/z']],
['Langkah penyelesaian',['1. Tulis hubungan dengan k','2. Cari k menggunakan nilai yang diberi','3. Guna k untuk cari nilai yang dikehendaki']],
['Variasi lain',['y ∝ x² → y = kx²','y ∝ 1/√x → y = k/√x']]],
q:[
['y berubah secara langsung dengan x. y = 12 apabila x = 3. y apabila x = 5 ialah',['15','20','25','60'],1,'k = 4 → y = 4 × 5 = 20.'],
['y berubah secara songsang dengan x. y = 6 apabila x = 4. y apabila x = 8 ialah',['3','12','48','1.5'],0,'k = 24 → 24/8 = 3.'],
['y ∝ x². y = 18 apabila x = 3. y apabila x = 5 ialah',['30','50','90','45'],1,'k = 2 → 2 × 25 = 50.'],
['y ∝ x/z. y = 4 apabila x = 8 dan z = 2. y apabila x = 9, z = 3 ialah',['3','4','6','12'],0,'4 = k(8/2) → k = 1 → 9/3 = 3.'],
['Graf bagi ubahan langsung y = kx ialah',['lengkung ke bawah','garis lurus melalui asalan','garis mengufuk','hiperbola'],1,'Garis lurus melalui (0,0).'],
['p ∝ 1/q². p = 5 apabila q = 2. p apabila q = 10 ialah',['0.2','1','0.5','2'],0,'k = 20 → 20/100 = 0.2.']]},

{f:5,n:2,t:'Matriks',notes:[
['Asas',['**Peringkat** = bil. baris × bil. lajur','Penambahan/penolakan: peringkat sama, operasi unsur sepadan','Pendaraban: (m×n)(n×p) → m×p; **baris × lajur**; AB ≠ BA umumnya']],
['Matriks 2×2 (a b / c d)',['**Penentu** |A| = ad − bc','**Songsang** A⁻¹ = (1/(ad − bc)) (d −b / −c a)','Jika penentu = 0 → matriks **singular**, tiada songsang','AA⁻¹ = I (matriks identiti)']],
['Persamaan serentak',['Tulis AX = B → **X = A⁻¹B**']]],
q:[
['Matriks dengan 3 baris dan 2 lajur mempunyai peringkat',['2 × 3','3 × 2','3 × 3','6'],1,'baris × lajur.'],
['(1 2 / 3 4) + (0 1 / 2 −1) =',['(1 3 / 5 3)','(1 2 / 5 3)','(1 3 / 6 3)','(0 2 / 6 −4)'],0,'Tambah unsur sepadan.'],
['Penentu bagi (2 3 / 1 4) ialah',['5','11','−5','7'],0,'8 − 3 = 5.'],
['Songsang bagi (3 1 / 5 2) ialah',['(2 −1 / −5 3)','(2 1 / 5 3)','(−2 1 / 5 −3)','(3 −1 / −5 2)'],0,'Penentu = 6 − 5 = 1; tukar a↔d, tukar tanda b, c.'],
['(2 1) × (3 / 4) [baris × lajur] =',['(10)','(6 4)','(14)','(24)'],0,'2×3 + 1×4 = 10.'],
['Matriks yang penentunya 0 dipanggil',['identiti','simetri','singular (tiada songsang)','matriks sifar'],2,'Singular.']]},

{f:5,n:3,t:'Matematik Pengguna: Insurans',notes:[
['Istilah',['**Premium** = bayaran berkala kepada penginsurans','**Deduktibel** = jumlah awal yang ditanggung pemegang polisi','**Ko-insurans** = perkongsian kerugian antara penginsurans dan pemegang polisi','**Prinsip indemniti**: pampasan setakat kerugian sebenar, tidak boleh untung']],
['Jenis',['**Insurans hayat** (berjangka, sepenuh hayat, endowmen)','**Insurans am**: motor, kebakaran, kesihatan/perubatan']],
['Insurans kebakaran (klausa ko-insurans)',['Pampasan = (jumlah diinsuranskan ÷ (ko-insurans% × nilai harta)) × kerugian — tidak melebihi jumlah diinsuranskan','_Semak formula tepat dalam buku teks anda_']]],
q:[
['Bayaran berkala kepada syarikat insurans dipanggil',['deduktibel','premium','ko-insurans','faedah'],1,'Premium.'],
['Jumlah yang ditanggung pemegang polisi dahulu sebelum pampasan dipanggil',['premium','manfaat','deduktibel','caj'],2,'Deduktibel.'],
['Kerugian RM12 000, deduktibel RM500 (liputan penuh). Penginsurans membayar',['RM12 000','RM11 500','RM12 500','RM500'],1,'12 000 − 500.'],
['Prinsip indemniti bermaksud',['pemegang polisi boleh untung','pampasan setakat kerugian sebenar','premium dikembalikan','tiada deduktibel'],1,'Tidak boleh mengambil untung.'],
['Insurans yang membayar apabila kematian dalam tempoh tertentu ialah insurans hayat',['berjangka','endowmen','sepenuh hayat','am'],0,'Hayat berjangka.'],
['Harta bernilai RM400 000, ko-insurans 80%, jumlah diinsuranskan RM240 000, kerugian RM100 000. Pampasan ialah',['RM100 000','RM75 000','RM60 000','RM80 000'],1,'240/(0.8×400) = 0.75 → 0.75 × 100 000 = 75 000.']]},

{f:5,n:4,t:'Matematik Pengguna: Percukaian',notes:[
['Jenis cukai',['**Cukai pendapatan** – atas pendapatan individu/syarikat','**Cukai harta** – cukai taksiran (cukai pintu), cukai tanah (cukai petak)','**Cukai jualan & perkhidmatan (SST)** – cukai jualan atas barang; cukai perkhidmatan atas perkhidmatan']],
['Pengiraan',['**Pendapatan bercukai = pendapatan agregat − pelepasan cukai**','Cukai pendapatan dikira berdasarkan **jadual kadar cukai** (kadar berperingkat)','**Rebat/zakat** menolak terus daripada cukai kena bayar','Cukai taksiran = kadar % × nilai tahunan harta']],
['Pihak berkuasa',['Cukai pendapatan → LHDN; Cukai taksiran → Pihak Berkuasa Tempatan; Cukai tanah → Pejabat Tanah negeri']]],
q:[
['Cukai taksiran dikutip oleh',['LHDN','Pihak Berkuasa Tempatan','Pejabat Tanah','Kastam'],1,'PBT.'],
['Pendapatan agregat RM60 000, pelepasan RM15 000. Pendapatan bercukai',['RM75 000','RM45 000','RM15 000','RM60 000'],1,'60 000 − 15 000.'],
['Cukai tanah dibayar kepada',['LHDN','PBT','Pejabat Tanah negeri','Bank Negara'],2,'Pejabat Tanah.'],
['Zakat yang dibayar boleh dituntut sebagai',['pelepasan menambah pendapatan','rebat ke atas cukai pendapatan','cukai tambahan','tiada kesan'],1,'Rebat menolak cukai kena bayar.'],
['Nilai tahunan RM12 000, kadar cukai taksiran 5%. Cukai ialah',['RM600','RM60','RM6 000','RM2 400'],0,'0.05 × 12 000 = 600.'],
['Cukai yang dikenakan atas barang yang dikilangkan ialah cukai',['perkhidmatan','pendapatan','jualan','tanah'],2,'Cukai jualan.']]},

{f:5,n:5,t:'Kekongruenan, Pembesaran dan Gabungan Transformasi',notes:[
['Kekongruenan',['Bentuk & saiz sama. Ujian segi tiga: **SSS, SAS, ASA/AAS, RHS**','Isometri: **translasi, pantulan, putaran** (saiz tak berubah)']],
['Pembesaran',['Faktor skala k: imej = k × objek dari pusat','**Nisbah luas = k²**; panjang = |k|','k negatif → imej di sisi bertentangan pusat dan songsang','**Luas imej = k² × luas objek**']],
['Gabungan transformasi',['**VW** bermaksud transformasi **W dahulu, kemudian V**','Gabungan dua isometri = isometri','Jika ada pembesaran, bukan isometri']]],
q:[
['Antara yang berikut, bukan isometri ialah',['translasi','putaran','pantulan','pembesaran dengan k = 3'],3,'Saiz berubah.'],
['Faktor skala 3. Nisbah luas imej : objek ialah',['3 : 1','6 : 1','9 : 1','1 : 3'],2,'3² = 9.'],
['Pembesaran dengan k = −2 menghasilkan imej',['di sisi sama pusat, 2× lebih besar','di sisi bertentangan pusat, songsang, 2× lebih besar','lebih kecil di sisi bertentangan','sama saiz'],1,'k negatif → songsang.'],
['Luas segi tiga 10 cm² dibesarkan k = 3. Luas imej',['30 cm²','60 cm²','90 cm²','100 cm²'],2,'10 × 9 = 90.'],
['Antara yang berikut, bukan ujian kekongruenan segi tiga ialah',['SSS','SAS','AAA','ASA'],2,'AAA hanya menjamin keserupaan.'],
['Gabungan VW bermaksud',['V dahulu, kemudian W','W dahulu, kemudian V','serentak','V sahaja'],1,'W dilakukan dahulu.']]},

{f:5,n:6,t:'Nisbah dan Graf Fungsi Trigonometri',notes:[
['Nisbah',['sin θ = sbl/hip, kos θ = sbg/hip, tan θ = sbl/sbg','Sudut khas: sin30°=½, kos60°=½, tan45°=1, sin45°=kos45°=√2/2']],
['Sudut 0°–360° (petua ASTC / "Semua Sains Tak Kos")',['Sukuan 1: semua +; Sukuan 2: **sin** +; Sukuan 3: **tan** +; Sukuan 4: **kos** +','Sudut rujukan α: sin(180−α)=sin α; kos(180−α)=−kos α; tan(180−α)=−tan α']],
['Graf',['y = sin x & y = kos x: **amplitud 1, kala 360°**; y = tan x: kala 180°, tiada amplitud','y = a sin bx: amplitud |a|, kala 360°/b']]],
q:[
['sin 30° =',['1/2','√3/2','1','√2/2'],0,'Sudut khas.'],
['tan 45° =',['0','1','√3','1/2'],1,'Segi tiga sama kaki.'],
['kos 120° =',['1/2','−1/2','√3/2','−√3/2'],1,'Sukuan 2 → kos negatif; kos 60° = ½.'],
['Dalam sukuan ketiga (180°–270°), nisbah yang positif ialah',['sin','kos','tan','semua'],2,'ASTC.'],
['Kala bagi y = kos 2x ialah',['90°','180°','360°','720°'],1,'360° ÷ 2.'],
['Nilai maksimum y = 3 sin x ialah',['1','3','6','−3'],1,'Amplitud 3.']]},

{f:5,n:7,t:'Sukatan Serakan Data Terkumpul',notes:[
['Data terkumpul',['**Titik tengah** kelas = (had bawah + had atas) ÷ 2','**Sempadan atas** kelas 20–24 = 24.5; sempadan bawah = 19.5','Saiz kelas = sempadan atas − sempadan bawah','**Min = Σfx ÷ Σf**']],
['Ogif',['Plot **kekerapan longgokan** lawan **sempadan atas**','**Median** pada N/2; **Q₁** pada N/4; **Q₃** pada 3N/4','**IQR = Q₃ − Q₁**']],
['Histogram',['Paksi-x: sempadan kelas; paksi-y: kekerapan','**Poligon kekerapan**: sambung titik tengah']]],
q:[
['Titik tengah kelas 10–19 ialah',['14','14.5','15','10'],1,'(10+19)/2.'],
['Ogif dilukis dengan memplot kekerapan longgokan melawan',['titik tengah','sempadan atas','had bawah','sempadan bawah'],1,'Sempadan atas.'],
['Sempadan atas bagi kelas 20–24 ialah',['24','24.5','25','25.5'],1,'Tambah 0.5.'],
['Min bagi data terkumpul ialah',['Σf ÷ Σfx','Σfx ÷ Σf','Σx ÷ n','fx'],1,'Σfx / Σf.'],
['Median daripada ogif dibaca pada kekerapan longgokan',['N/4','N/2','3N/4','N'],1,'N/2.'],
['Kuartil pertama daripada ogif dibaca pada',['N/4','N/2','3N/4','N'],0,'N/4.']]},

{f:5,n:8,t:'Pemodelan Matematik',notes:[
['Langkah-langkah (SPM Kertas 2 Bahagian C)',['1. **Mengenal pasti & mentakrif masalah**','2. **Membuat andaian & mengenal pasti pemboleh ubah**','3. **Mengaplikasi matematik untuk menyelesaikan masalah**','4. **Mengesahkan & mentafsir penyelesaian**','5. **Memperhalus model matematik**','6. **Melaporkan dapatan**']],
['Tip jawapan',['Tulis **andaian** dengan jelas','Tunjuk kiraan lengkap (kaedah) & **bandingkan** pilihan','Beri **kesimpulan** yang menjawab masalah']]],
q:[
['Langkah pertama dalam pemodelan matematik ialah',['melaporkan dapatan','mengenal pasti dan mentakrif masalah','memperhalus model','membuat andaian'],1,'Langkah 1.'],
['"Memperhalus model" dilakukan selepas',['melaporkan dapatan','mengesahkan & mentafsir penyelesaian','mentakrif masalah','membuat andaian'],1,'Jika penyelesaian kurang sesuai, model dibaiki.'],
['Dalam jawapan pemodelan, "andaian" bertujuan untuk',['memanjangkan jawapan','memudahkan masalah dunia sebenar','menukar soalan','mengelak pengiraan'],1,'Memudahkan situasi.'],
['Langkah terakhir pemodelan ialah',['mentakrif masalah','menyelesaikan masalah','melaporkan dapatan','membuat andaian'],2,'Langkah 6.'],
['Pemboleh ubah dikenal pasti pada langkah',['1','2','5','6'],1,'Bersama andaian.'],
['Soalan pemodelan biasanya muncul dalam',['Kertas 1','Kertas 2 Bahagian C','Kertas 2 Bahagian A','Kertas 1 Bahagian B'],1,'Bahagian C – jawab satu daripada dua.']]}
]};
