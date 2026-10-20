<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const karyaTerpilih = computed(() => {
  if (state.kategoriAktif === 'semua') {
    return state.daftarProyek
  }

  return state.daftarProyek.filter((proyek) => {
    return proyek.kategori.toLowerCase() === state.kategoriAktif.toLowerCase()
  })
})
</script>

<template>
  <section id="karya">
    <h2>Proyek Saya</h2>

      <article
        v-for="proyek in karyaTerpilih"
        :key="proyek.id"
      >
        <h3>{{ proyek.judul }}</h3>
        <p>{{ proyek.deskripsi }}</p>
        <p>
          {{ proyek.teknologi || proyek.kategori }}
          — {{ proyek.tahun || 2026 }}
        </p>
    </article>

    <p v-if="karyaTerpilih.length === 0">
      Belum ada proyek pada kategori ini.
    </p>
  </section>
</template>