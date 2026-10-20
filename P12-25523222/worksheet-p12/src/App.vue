<script setup>
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const identitas = {
  nama: 'Alfia Syakira Al Amin',
  peran: 'Mahasiswa Informatika',
}
</script>

<template>
  <main>
    <KepalaProfil :profil="identitas" />
    <TombolFilter />
    <DaftarProyek />
    <FormKontak />
  </main>
</template>