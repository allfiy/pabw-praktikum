# PABW — Alfia Syakira Al Amin — 25523222

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web (SIF302), Kelas E, Semester Gasal 2026/2027.

---

## Pertemuan 4 — CSS Fundamental & Design Token (Halaman Profil Saya)

### 1. Identitas & Arah Visual Halaman Profil
- **Nama**: Alfia Syakira Al Amin
- **NIM**: 25523222
- **Kelas**: E
- **Tanggal**: Rabu, 23 September 2026

#### Rencana Visual (Lembar A):
- **Arah visual**: Tenang dan Akademik / Tegas dan Teknis
- **Warna utama**: `#1D3A8C` (Deep Indigo / Navy Blue), diturunkan dari identitas akademis dan warna foto profil personal.
- **Warna netral terang**: `#F8FAFC` (Slate 50)
- **Warna netral gelap**: `#0F172A` (Slate 900)
- **Ukuran huruf isi dan judul**: Isi `1rem` (`16px`), Judul Utama `2.25rem` (`36px`), Judul Section `1.5rem` (`24px`).
- **Jarak dasar**: `1rem` (`--space-4`), Jarak antar bagian `1.5rem` (`--space-6`).
- **Radius sudut dan bayangan**: Radius `0.5rem` (`--radius-md`), Bayangan `0 1px 3px rgba(15, 23, 42, 0.10)`.

---

### 2. Design Token Halaman Profil (Lembar C & D)
Pengembangan CSS menggunakan arsitektur **dua lapis token**:
1. **Lapis Primitif**: Menyimpan nilai mentah seperti warna (`--blue-700`), spasi (`--space-4`), radius (`--radius-md`), tipografi (`--text-md`).
2. **Lapis Semantik**: Memberi peran fungsional (`--color-bg`, `--color-fg`, `--color-primary`, `--color-surface`, `--color-border`, `--color-danger`, `--color-focus`) yang mengacu pada Lapis Primitif.

#### Berkas Gaya yang Dibuat:
- `css/tokens.css`: Definisi seluruh nilai token primitif & semantik.
- `css/base.css`: Reset ringan global, `box-sizing: border-box`, tipografi relatif (`rem`), dan warna dasar.
- `css/layout.css`: Layout navbar Flexbox, pembungkus bagian, katalog kartu responsif (`flex-wrap` & `gap`), dan footer.
- `css/komponen.css`: Gaya form, keadaan fokus (`:focus-visible`), isian tidak sah (`:user-invalid`), dan komponen semantik tambahan.
- `css/tema.css`: Tema gelap otomatis (`@media (prefers-color-scheme: dark)`) dan tombol pengalih manual tanpa JavaScript (`:root:has(#tema:checked)`).

#### Tabel Ringkasan Token Utama:
| Token Semantik | Nilai Primitif | Peran / Untuk Apa |
|---|---|---|
| `--color-bg` | `var(--slate-50)` / `#F8FAFC` | Warna latar belakang halaman |
| `--color-fg` | `var(--slate-900)` / `#0F172A` | Warna teks utama |
| `--color-surface` | `#FFFFFF` | Latar kartu, panel, dan form |
| `--color-border` | `var(--slate-300)` / `#CBD5E1` | Garis tepi dan pemisah |
| `--color-primary` | `var(--blue-700)` / `#1D3A8C` | Tombol, penanda judul, tautan navigasi |
| `--color-danger` | `var(--red-700)` / `#B00020` | Peringatan isian form tidak sah |
| `--color-focus` | `var(--blue-600)` / `#2563EB` | Garis fokus navigasi papan ketik |
| `--radius-md` | `0.5rem` | Radius sudut membulat tombol dan kartu |
| `--space-4` | `1rem` | Jarak internal standar (*padding*) |
| `--section-gap` | `var(--space-6)` / `1.5rem` | Jarak antar bagian halaman |

**Kriteria Selesai (Uji Satu Baris)**: Mengubah `--blue-700` atau `--color-primary` pada satu baris di `tokens.css` secara otomatis memperbarui warna tombol, tautan, garis bawah judul, penanda fokus, dan elemen visual utama di seluruh halaman tanpa perlu mengubah berkas CSS lainnya.

---

### 3. Tiga Struktur Tambahan Semantik (Lembar B.3 & Lembar I.5)

Tiga bagian semantik baru ditambahkan di dalam `<main>`, tepat sebelum tag penutup `</main>`:

1. **Bagian Tanya Jawab (`<section id="tanya-jawab">`)**:
   - *Elemen*: `<details>` dan `<summary>`.
   - *Sasaran Pembaca*: Pengunjung atau penilai yang ingin mengenal latar belakang dan kebiasaan kerja secara cepat.
   - *Menjawab Apa*: Menyajikan pertanyaan umum seputar fokus keahlian dan perangkat lunak yang digunakan sehari-hari. Berfungsi secara interaktif (buka-tutup) murni memakai standar HTML5 tanpa bergantung pada JavaScript.

2. **Bagian Keterampilan (`<section id="keterampilan">`)**:
   - *Elemen*: `<dl>`, `<dt>`, dan `<dd>`.
   - *Sasaran Pembaca*: Rekan kolaborator atau dosen pengampu yang ingin melihat pemetaan kompetensi teknis.
   - *Menjawab Apa*: Menyajikan daftar istilah keahlian (seperti HTML Semantik, CSS Design Token, Git) beserta deskripsi kompetensi yang telah dikuasai secara terstruktur.

3. **Bagian Lini Masa Perjalanan (`<section id="lini-masa">`)**:
   - *Elemen*: `<ol class="lini">` dan `<time datetime="...">`.
   - *Sasaran Pembaca*: Pembaca yang ingin mengikuti rekam jejak akademik dan perkembangan proses belajar.
   - *Menjawab Apa*: Menyajikan riwayat waktu kronologis sejak awal masuk perkuliahan Informatika UII hingga pengerjaan halaman profil portofolio ini.

---

### 4. Laporan Hasil Evaluasi W3C & WCAG (Lembar I.5)

- **W3C Nu Html Checker**: **0 Error**, **0 Warning**. Seluruh elemen semantik valid dan pasangan `id` / `label` utuh.
- **WCAG — Kontras Warna AA**: Lolos audit kontras minimal 4.5:1 untuk teks isi dan 3:1 untuk garis tepi/fokus baik pada tema terang maupun tema gelap.
- **WCAG — Navigasi Papan Ketik (Keyboard Operability)**: Seluruh tautan, tombol, dan elemen `<details>` dapat difokuskan secara berurutan menggunakan tombol `Tab`. Indikator fokus `:focus-visible` terlihat jelas dengan garis outline kontras.
- **WCAG — Independensi Warna**: Halaman tetap dapat dipahami sepenuhnya meskipun warna dimatikan (memanfaatkan hirarki tipografi, garis tepi, ikon, dan teks pembantu).
- **Pengujian Zoom 200%**: Tampilan tetap proporsional dan tidak menimbulkan gulir mendatar (*horizontal scrollbar*).

---

### 5. Pengungkapan Penggunaan AI (Lembar I.6)
- **Dikerjakan Sendiri**: Perencanaan arah visual, penentuan skala token warna/spasi, penulisan struktur kerangka HTML `profil.html`, penyusunan bagian semantik tambahan (`<details>`, `<dl>`, `<ol>`), serta pengujian manual kontras warna dan aksesibilitas papan ketik.
- **Dibantu AI**: Pengecekan sintaks CSS modern (seperti `:has()` dan `:user-invalid`), validasi kerapian dokumentasi README, serta verifikasi kelengkapan checklist rubrik praktikumdan beberapa pengejaan lain nya juga.

---

### 6. Jawaban Tiket Keluar (Lembar I)

1. **Apa bedanya `--blue-700` dengan `--color-primary`?**
   - `--blue-700` adalah token primitif yang menjawab "warna apa" (nilai mentah `#1D3A8C`), sedangkan `--color-primary` adalah token semantik yang menjawab "untuk apa" (peran warna utama komponen). Komponen sebaiknya hanya menyentuh `--color-primary` agar ketika tema berubah atau warna dirubah, komponen tidak perlu disunting ulang.

2. **Anda memakai `--color-surface: #FFFFFF` untuk latar kartu, lalu tema gelap tidak berubah pada kartu itu. Apa yang Anda tulis, dan bagaimana seharusnya?**
   - Kesalahannya adalah menuliskan nilai mentah `#FFFFFF` langsung pada komponen kartu atau pada selector tema gelap tanpa melalui token semantik. Seharusnya pada komponen kartu ditulis `background: var(--color-surface);`, dan pada blok tema gelap (`prefers-color-scheme: dark`) nilai token `--color-surface` diperbarui menjadi warna gelap seperti `#1E293B`.

3. **Mengapa menulis `--color-primary: #7DA9F7` di dalam blok tema gelap, bukan `#1D3A8C` yang sama seperti tema terang?**
   - Karena warna `#1D3A8C` adalah biru tua yang memiliki kontras tinggi terhadap latar belakang terang (`#F8FAFC`), namun akan gagal kontras (gelap di atas gelap) jika ditaruh di atas latar tema gelap (`#0F172A`). Warna `#7DA9F7` / `#60A5FA` lebih terang sehingga memenuhi rasio kontras WCAG AA (minimal 4.5:1) di atas latar gelap.

4. **Apa yang terjadi bila `input:invalid` dipakai untuk memberi warna merah, dan mengapa `:user-invalid` lebih baik? Sebutkan saat keduanya menyala.**
   - `input:invalid` menyala langsung saat halaman pertama kali dibuka untuk semua kolom wajib yang masih kosong, sehingga formulir tampak merah sebelum pengguna mengetik apapun. `:user-invalid` lebih baik karena hanya menyala setelah pengguna berinteraksi (mengetik atau mencoba mengirimkan form) dan isinya tidak sah, sehingga tidak membingungkan pengguna.
  
   - 

5. **Mengapa `gap` lebih baik daripada `margin` untuk jarak antar item di dalam flexbox?**
   - `gap` mengatur jarak antar item flex secara bersih tanpa menambah jarak di luar tepi wadah (tidak ada margin bocor) dan tidak mengalami masalah margin collapse. Selain itu, `gap` otomatis bekerja pada pembungkusan baris (`flex-wrap: wrap`) baik secara horizontal maupun vertikal.

# P05 — JavaScript Modern dan Debugging

**Mata Kuliah:** Pengembangan Aplikasi Berbasis Web (PABW)
**Nama:** Alfia Syakira Al Amin
**NIM:** 25523222
**Pertemuan:** 5

## Deskripsi

Praktikum P05 membahas penggunaan fitur JavaScript modern dan proses debugging untuk memahami cara program dijalankan serta menemukan kesalahan pada kode.

Melalui praktikum ini, saya mempelajari penggunaan variabel, fungsi, objek, array, array methods, serta pemanfaatan Console dan breakpoint untuk memeriksa jalannya program.

## Tujuan Praktikum

* Memahami penggunaan `const` dan `let`.
* Memahami template literal dan operator modern JavaScript.
* Menggunakan objek, array, dan fungsi.
* Memahami penggunaan array methods seperti `map()`, `filter()`, dan `find()`.
* Membaca pesan kesalahan pada Console.
* Menggunakan breakpoint untuk memeriksa nilai variabel selama program berjalan.

## Materi yang Dipelajari

### 1. Variabel dan sintaks modern

Penggunaan `const` dan `let` membantu mendeklarasikan variabel sesuai kebutuhan program.

### 2. Objek dan array

Objek digunakan untuk menyimpan data dalam bentuk pasangan properti dan nilai, sedangkan array digunakan untuk menyimpan kumpulan data.

### 3. Array methods

Beberapa metode yang dipelajari meliputi:

* `map()` untuk menghasilkan array baru dari hasil pengolahan setiap elemen.
* `filter()` untuk mengambil elemen yang memenuhi kondisi.
* `find()` untuk mencari elemen pertama yang memenuhi kondisi.
* `console.table()` untuk menampilkan data dalam bentuk tabel di Console.

### 4. Debugging

Debugging dilakukan dengan membaca pesan kesalahan di Console dan menggunakan breakpoint untuk menghentikan sementara program sehingga nilai variabel dapat diperiksa.

## Struktur Berkas

Struktur dasar folder yang perlu diperiksa:

```text
P05-25523222/
├── README.md
├── profil.html
├── kerangka-profil.html
├── css/
└── media/
```

Sesuaikan struktur tersebut dengan berkas yang benar-benar ada di folder P05. Cantumkan file JavaScript hanya jika memang tersedia di folder tersebut.

## Cara Menjalankan

1. Buka folder P05 di Visual Studio Code.
2. Buka halaman HTML yang digunakan untuk praktikum.
3. Jalankan halaman melalui Live Server jika project menggunakan halaman web.
4. Buka DevTools browser dengan menekan `F12`.
5. Pilih tab Console untuk melihat keluaran program dan pesan kesalahan.
6. Jika terdapat latihan debugging, gunakan breakpoint sesuai instruksi worksheet.

## Pengujian

Pemeriksaan dilakukan dengan menjalankan latihan JavaScript, mengamati keluaran program, dan memeriksa nilai variabel melalui debugger.

Hasil akhir dicatat berdasarkan latihan yang benar-benar sudah dijalankan.

## Kesimpulan

Praktikum P05 membantu saya memahami fitur JavaScript modern serta pentingnya debugging untuk mengetahui penyebab kesalahan dan memahami alur eksekusi program.

# P06 — Responsive Mobile-First

## Identitas

* **Nama:** Alfia Syakira Al Amin
* **NIM:** 25523222
* **Kelas:** E
* **Mata Kuliah:** Pengembangan Aplikasi Berbasis Web (PABW)
* **Pertemuan:** 6 — Responsive Mobile-First

## Deskripsi

P06 merupakan praktikum yang membahas penerapan desain web responsif menggunakan CSS dengan pendekatan **Mobile-First**. Halaman profil dikembangkan agar dapat menyesuaikan tampilan berdasarkan ukuran layar perangkat, mulai dari ponsel hingga desktop.

## Tujuan Praktikum

1. Memahami konsep desain responsif dan pendekatan Mobile-First.
2. Membuat tampilan dasar untuk layar berukuran kecil.
3. Menggunakan media query untuk menyesuaikan tata letak pada layar yang lebih besar.
4. Menguji tampilan halaman pada beberapa ukuran layar.

## Implementasi

Pada praktikum ini, beberapa hal yang diterapkan adalah:

* **Mobile-First:** Tampilan dasar dibuat untuk perangkat dengan layar kecil terlebih dahulu.
* **Media Query:** Digunakan untuk mengatur perubahan tata letak berdasarkan lebar layar.
* **Responsive Layout:** Tata letak halaman disesuaikan agar tetap nyaman digunakan pada berbagai perangkat.
* **Viewport:** Menggunakan meta viewport agar halaman ditampilkan sesuai ukuran layar perangkat.
* **Pengujian Responsif:** Tampilan diperiksa pada lebar layar 360 px, 768 px, dan 1280 px.

## Struktur Folder

```text
P06-25523222/
├── README.md
├── kerangka-profil.html
├── profil.html
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── responsif.css
│   ├── komponen.css
│   └── tema.css
└── media/
    └── foto-profil.jpg
```

## Kesimpulan

Melalui praktikum P06, saya mempelajari cara membuat halaman web yang responsif menggunakan CSS dan pendekatan Mobile-First. Dengan menggunakan media query dan menguji beberapa ukuran layar, tampilan halaman dapat menyesuaikan perangkat yang digunakan.

# P08 — JavaScript pada Halaman Profil

**Mata Kuliah:** Pengembangan Aplikasi Berbasis Web (PABW)
**Nama:** Alfia Syakira Al Amin
**NIM:** 25523222
**Pertemuan:** 8

## Deskripsi

Praktikum P08 merupakan bagian dari pengembangan halaman profil web dengan JavaScript. Praktikum ini melanjutkan penggunaan HTML dan CSS dengan menambahkan atau menghubungkan kode JavaScript sesuai materi pertemuan.

JavaScript digunakan untuk menjalankan logika program pada halaman web. Struktur kode disesuaikan dengan kebutuhan praktikum dan berkas yang tersedia di dalam project.

## Tujuan Praktikum

* Memahami cara menghubungkan JavaScript dengan halaman HTML.
* Memahami penggunaan sintaks JavaScript yang dipelajari pada pertemuan ini.
* Mengorganisasi kode JavaScript sesuai struktur project.
* Memeriksa hasil eksekusi JavaScript melalui browser dan Console.

## Implementasi

Halaman profil menjadi bagian dari project praktikum. Implementasi JavaScript mengikuti kode yang tersedia di folder P08.

Bagian yang perlu diperiksa dan dijelaskan berdasarkan implementasi aktual:

1. **Penghubung JavaScript** — cara file JavaScript dipanggil dari HTML.
2. **Struktur kode** — pembagian kode ke dalam file sesuai kebutuhan praktikum.
3. **Pengolahan data** — apabila terdapat objek, array, atau array methods, jelaskan penggunaannya sesuai kode.
4. **Pemeriksaan hasil** — menggunakan browser dan Console untuk memastikan kode berjalan.

## Struktur Berkas

```text
P08-25523222/
├── README.md
├── profil.html
├── kerangka-profil.html
├── css/
└── Js/
```

Struktur di atas merupakan gambaran awal berdasarkan project profil yang digunakan pada praktikum sebelumnya. Periksa isi folder P08 dan sesuaikan nama serta daftar file dengan struktur yang benar-benar tersedia.

## Cara Menjalankan

1. Buka folder `P08-25523222` di Visual Studio Code.
2. Buka file HTML utama yang digunakan dalam praktikum.
3. Jalankan menggunakan Live Server apabila project memerlukannya.
4. Buka DevTools browser dengan menekan `F12`.
5. Periksa tab Console untuk melihat keluaran atau pesan kesalahan JavaScript.

## Pengujian

Pengujian dilakukan dengan membuka halaman praktikum dan memeriksa apakah kode JavaScript berjalan sesuai instruksi worksheet.

Tuliskan hasil pengujian berdasarkan perilaku halaman dan keluaran Console yang benar-benar diamati.

## Kesimpulan

Melalui praktikum P08, saya mempelajari penerapan JavaScript pada project web dan pentingnya memastikan kode terhubung dengan halaman HTML serta berjalan sesuai tujuan praktikum.

# P09 — DOM, Event, dan Interaktivitas

**Mata Kuliah:** Pengembangan Aplikasi Berbasis Web (PABW)
**Nama:** Alfia Syakira Al Amin
**NIM:** 25523222
**Pertemuan:** 9

## Deskripsi

Praktikum P09 membahas Document Object Model (DOM), event, dan interaktivitas pada halaman web. Pada praktikum ini, JavaScript digunakan untuk memilih elemen HTML, membentuk daftar karya dari data, menerapkan filter kategori, serta memvalidasi formulir.

## Tujuan Praktikum

* Mengambil elemen HTML menggunakan DOM selector.
* Membuat dan memperbarui elemen HTML melalui JavaScript.
* Menggunakan event listener untuk menangani interaksi pengguna.
* Memahami event delegation pada tombol filter.
* Menampilkan pesan ketika hasil penyaringan kosong.
* Memvalidasi isian formulir.
* Menggunakan DevTools untuk memeriksa dan memperbaiki masalah.

## Fitur yang Diterapkan

### 1. DOM selector

Elemen HTML diambil menggunakan metode seperti `document.querySelector()` dan `document.querySelectorAll()`.

### 2. Render daftar karya

Data karya disimpan dalam array dan ditampilkan ke halaman menggunakan `createElement()`, `textContent`, serta fungsi `render()`.

### 3. Filter kategori

Pengguna dapat memilih kategori Semua, HTML, UI/UX, dan CSS. Filter menggunakan event delegation sehingga pendengar klik dipasang pada elemen induk.

### 4. Keadaan kosong

Pesan keadaan kosong ditampilkan ketika tidak ada karya yang cocok dengan kategori yang dipilih.

### 5. Validasi formulir

Formulir kontak memeriksa isian seperti nama, email, NIM, dan pesan. JavaScript digunakan untuk menampilkan pesan kesalahan dan mencegah pengiriman formulir ketika isian belum valid.

### 6. Debugging dengan DevTools

Console dan Event Listeners digunakan untuk memeriksa elemen, event, serta gejala ketika halaman tidak bereaksi sesuai harapan.

## Struktur Berkas

```text
P09-25523222/
├── README.md
├── profil.html
├── css/
│   ├── base.css
│   ├── komponen.css
│   ├── layout.css
│   ├── responsif.css
│   ├── tema.css
│   └── tokens.css
└── Js/
    ├── app.js
    └── dom.js
```

Struktur tersebut mengikuti berkas yang digunakan dalam project. Jika ada perbedaan pada folder aktual, sesuaikan daftar di atas.

## Cara Menjalankan

1. Buka folder `P09-25523222` di Visual Studio Code.
2. Jalankan `profil.html` menggunakan Live Server.
3. Buka bagian Karya dan pilih kategori Semua, HTML, UI/UX, atau CSS.
4. Pastikan daftar karya berubah sesuai kategori.
5. Uji formulir dengan mengosongkan kolom dan memasukkan data yang sesuai.
6. Buka DevTools menggunakan `F12` untuk memeriksa Console dan Event Listeners.

## Pengujian

Pengujian dilakukan dengan memeriksa DOM selector, mencoba tombol filter, mengamati keadaan kosong, dan menguji validasi formulir.

Hasil pengujian akhir perlu disesuaikan dengan kondisi project yang benar-benar dijalankan.

## Deklarasi Penggunaan AI

Dalam pengerjaan P09, saya menggunakan bantuan AI untuk memahami konsep DOM, selector, render data, event delegation, validasi formulir, serta proses debugging.

Saya memeriksa dan menyesuaikan saran yang diberikan dengan project saya. Bagian yang dikerjakan secara mandiri dan hasil pengujian yang dicantumkan harus sesuai dengan pekerjaan yang benar-benar saya lakukan dan pahami.

## Kesimpulan

Praktikum P09 membantu saya memahami cara JavaScript berinteraksi dengan elemen HTML, mengolah data menjadi tampilan, menangani event, serta memvalidasi masukan pengguna. Saya juga belajar menggunakan DevTools untuk menemukan penyebab masalah sebelum melakukan perubahan kode.
