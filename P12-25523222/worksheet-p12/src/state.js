
import { reactive } from 'vue'
import { karya } from './data.js'

export const state = reactive({
  daftarProyek: karya,
  kategoriAktif: 'semua',
})

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}
