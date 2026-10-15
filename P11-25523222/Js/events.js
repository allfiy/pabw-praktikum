
import { pilihKategori } from "./state.js";
import { aturUlang } from "./storage.js";

export function pasangEventFilter() {
  const barisFilter = document.querySelector("#filter");

  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button[data-kategori]");

      if (!tombol || !barisFilter.contains(tombol)) return;

      pilihKategori(tombol.dataset.kategori);
    });
  }

  const tombolAturUlang = document.querySelector("#atur-ulang");

  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
      pilihKategori("semua");
    });
  }
}
