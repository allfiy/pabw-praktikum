import { karya } from "./app.js";

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

function buatKartu(item) {
  const kartu = document.createElement("li");
  kartu.textContent = `${item.judul} (${item.tahun}) — ${item.kategori}`;
  return kartu;
}

function renderKarya(kategori = "semua") {
  wadah.textContent = "";

  const hasilFilter =
    kategori === "semua"
      ? karya
      : karya.filter(
          (item) => item.kategori.toLowerCase() === kategori
        );

  hasilFilter.forEach((item) => {
    wadah.append(buatKartu(item));
  });

  pesanKosong.hidden = hasilFilter.length > 0;
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button[data-kategori]");

  if (!tombol) return;

  const kategori = tombol.dataset.kategori;

  barisFilter.querySelectorAll("button").forEach((item) => {
    item.classList.toggle("aktif", item === tombol);
  });

  renderKarya(kategori);
});

renderKarya();