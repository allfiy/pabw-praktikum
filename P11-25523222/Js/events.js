
import { state, ubahPilihanAktif, ambilKaryaTerpilih } from "./state.js";
import { render, tandaiTombolAktif } from "./dom.js";

export function pasangEventFilter() {
  const barisFilter = document.querySelector("#filter");

  if (!barisFilter) return;

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button[data-kategori]");

    if (!tombol || !barisFilter.contains(tombol)) return;

    ubahPilihanAktif(tombol.dataset.kategori);
    tandaiTombolAktif(tombol);
    render(ambilKaryaTerpilih());
  });
}
