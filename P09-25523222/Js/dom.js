
import { karya } from "./app.js";

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

function buatKartu(proyek) {
  const kartu = document.createElement("li");
  kartu.className = "kartu";
  kartu.textContent =
    `${proyek.judul} (${proyek.tahun}) — ${proyek.kategori}`;

  return kartu;
}

function render(daftarProyek) {
  wadah.replaceChildren();

  daftarProyek.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });

  pesanKosong.hidden = daftarProyek.length > 0;
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button[data-kategori]");

  if (!tombol || !barisFilter.contains(tombol)) return;

  const kategori = tombol.dataset.kategori;

  const terpilih = karya.filter(
    (proyek) =>
      kategori === "semua" ||
      proyek.kategori.toLowerCase() === kategori.toLowerCase()
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});

render(karya);