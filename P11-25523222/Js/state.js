
import { karya } from "./data.js";
import { render } from "./dom.js";
import { simpan, muat } from "./storage.js";

const tersimpan = muat();

export const state = {
  daftarProyek: karya,
  kategoriAktif:
    tersimpan?.kategoriAktif ?? "semua"
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  simpan(state);
  render(state);
}
