
const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");

export function buatKartu(proyek) {
  const kartu = document.createElement("li");
  kartu.className = "kartu";
  kartu.textContent =
    `${proyek.judul} (${proyek.tahun}) — ${proyek.kategori}`;

  return kartu;
}

export function saring(state) {
  if (state.kategoriAktif === "semua") {
    return state.daftarProyek;
  }

  return state.daftarProyek.filter((proyek) =>
    proyek.kategori.toLowerCase() ===
    state.kategoriAktif.toLowerCase()
  );
}

export function render(state) {
  if (!wadah || !pesanKosong) return;

  wadah.replaceChildren();

  const daftarTampil = saring(state);

  if (daftarTampil.length === 0) {
    pesanKosong.hidden = false;
    tandaiTombolAktif(state.kategoriAktif);
    return;
  }

  pesanKosong.hidden = true;

  daftarTampil.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });

  tandaiTombolAktif(state.kategoriAktif);
}

export function tandaiTombolAktif(kategoriAktif) {
  document
    .querySelectorAll("#filter button[data-kategori]")
    .forEach((tombol) => {
      tombol.classList.toggle(
        "aktif",
        tombol.dataset.kategori.toLowerCase() ===
          kategoriAktif.toLowerCase()
      );
    });
}
