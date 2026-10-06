console.log("JavaScript berhasil terhubung!");

const nama = "Alfia Syakira Al Amin";
const nim = "25523222";
const tahun = 2026;

let pilihanAktif = "semua";
let belumDibuat;

console.log(`Pilihan awal: ${pilihanAktif}`);

pilihanAktif = "keahlian";

console.log(`Pilihan setelah diubah: ${pilihanAktif}`);

console.log(typeof nama);
console.log(typeof tahun);
console.log(typeof belumDibuat);

const identitas = `${nama} · ${nim} · ${tahun}`;

console.log(identitas);

const jurusan = null;

const jurusanAman = jurusan ?? "Informatika";

console.log(jurusanAman);

const profil = {
  nama: "Alfia Syakira Al Amin",
  nim: "25523222"
};

console.log(profil?.nama);
console.log(profil?.email);

  function buatPerkenalan(nama, jurusan) {
  return `Halo, saya ${nama} dari jurusan ${jurusan}.`;
}

console.log(buatPerkenalan(nama, jurusanAman));

function formatKeahlian(keahlian) {
  return keahlian.join(", ");
}

const daftarKeahlian = [
  "HTML5 Semantik",
  "CSS Fundamental & Design Token",
  "Pengontrol Versi (Git)"
];

console.log(formatKeahlian(daftarKeahlian));

   const karya = [
    
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

console.table(karya);
  

const judulKarya = karya.map(item => item.judul);

console.log(judulKarya);


const karyaCSS = karya.filter(item => item.kategori === "CSS");

console.table(karyaCSS);

   const karyaUIUX = karya.find(item => item.kategori === "UI/UX");

console.log(karyaUIUX);

 console.log(nama);

    console.log("Mulai breakpoint");

const angka1 = 10;
const angka2 = 20;
const hasil = angka1 + angka2;

console.log("Hasil:", hasil);
   
    const pesan = "Halo";
console.log(pesan);

const angka = 10;
// angka.toUpperCase();

function perkenalan(nama, peran) {
  return `Halo, saya ${nama}. Saya ${peran}.`;
}

console.log(perkenalan(nama, "Mahasiswa Informatika"));

console.log(formatKeahlian(daftarKeahlian));
