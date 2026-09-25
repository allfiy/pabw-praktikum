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

5. **Mengapa `gap` lebih baik daripada `margin` untuk jarak antar item di dalam flexbox?**
   - `gap` mengatur jarak antar item flex secara bersih tanpa menambah jarak di luar tepi wadah (tidak ada margin bocor) dan tidak mengalami masalah margin collapse. Selain itu, `gap` otomatis bekerja pada pembungkusan baris (`flex-wrap: wrap`) baik secara horizontal maupun vertikal.
