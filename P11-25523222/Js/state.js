
import { karya } from "./data.js";
import { render } from "./dom.js";

export const state = {
  daftarProyek: karya,
  kategoriAktif: "semua"
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  render(state);
}
