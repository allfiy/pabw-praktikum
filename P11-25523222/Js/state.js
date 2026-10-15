
import { karya } from "./data.js";

export const state = {
  karya: karya,
  pilihanAktif: "semua"
};

export function ubahPilihanAktif(pilihan) {
  state.pilihanAktif = pilihan;
}

export function ambilKaryaTerpilih() {
  if (state.pilihanAktif === "semua") {
    return state.karya;
  }

  return state.karya.filter(
    (item) =>
      item.kategori.toLowerCase() ===
      state.pilihanAktif.toLowerCase()
  );
}
