<script setup>
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { onMounted, watch } from 'vue'
import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

const identitas = {
  nama: 'Alfia Syakira Al Amin',
  peran: 'Mahasiswa Informatika',
}

onMounted(() => {
  const isi = muat()

  if (isi) {
    state.kategoriAktif = isi.kategoriAktif
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })

function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <main>
    <KepalaProfil :profil="identitas" />
    <TombolFilter />
    <button type="button" @click="aturUlangPilihan">
      Atur Ulang Pilihan
    </button>
    <DaftarProyek />
    <FormKontak />
  </main>
</template>
