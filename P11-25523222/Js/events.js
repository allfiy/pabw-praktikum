
import { pilihKategori } from "./state.js";

export function pasangEventFilter() {
  const barisFilter = document.querySelector("#filter");

  if (!barisFilter) return;

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button[data-kategori]");

    if (!tombol || !barisFilter.contains(tombol)) return;

    pilihKategori(tombol.dataset.kategori);
  });
}
