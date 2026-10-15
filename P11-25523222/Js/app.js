
import { karya, buatPerkenalan, formatKeahlian } from "./data.js";
import { render } from "./dom.js";
import { pasangEventFilter } from "./events.js";

console.log("JavaScript berhasil terhubung!");

const nama = "Alfia Syakira Al Amin";
const nim = "25523222";
const tahun = 2026;
const jurusan = "Informatika";

const daftarKeahlian = [
  "HTML5 Semantik",
  "CSS Fundamental & Design Token",
  "Pengontrol Versi (Git)"
];

console.log(`${nama} · ${nim} · ${tahun}`);
console.log(buatPerkenalan(nama, jurusan));
console.log(formatKeahlian(daftarKeahlian));
console.table(karya);

render(karya);
pasangEventFilter();
