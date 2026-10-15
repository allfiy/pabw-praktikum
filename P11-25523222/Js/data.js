
export const karya = [
  {
    judul: "Halaman Kelas Terbuka Kampus",
    tahun: 2026,
    kategori: "HTML"
  },
  {
    judul: "Desain Antarmuka Aplikasi Mobile",
    tahun: 2026,
    kategori: "UI/UX"
  },
  {
    judul: "Portofolio Web Pribadi",
    tahun: 2026,
    kategori: "CSS"
  }
];

export function buatPerkenalan(nama, jurusan) {
  return `Halo, saya ${nama} dari jurusan ${jurusan}.`;
}

export function formatKeahlian(keahlian) {
  return keahlian.join(", ");
}
