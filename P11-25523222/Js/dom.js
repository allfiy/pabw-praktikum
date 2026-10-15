
import { karya } from "./data.js";

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");

export function buatKartu(proyek) {
  const kartu = document.createElement("li");
  kartu.className = "kartu";
  kartu.textContent =
    `${proyek.judul} (${proyek.tahun}) — ${proyek.kategori}`;

  return kartu;
}

export function render(daftar = karya) {
  if (!wadah || !pesanKosong) return;

  wadah.replaceChildren();

  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}
