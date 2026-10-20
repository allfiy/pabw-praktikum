<script setup>
import { state, pilihKategori } from '../state.js'

const kategori = ['semua', 'html', 'css', 'ui/ux']
</script>

<template>
  <div id="filter">
    <button
      v-for="item in kategori"
      :key="item"
      type="button"
      :class="{ aktif: state.kategoriAktif === item }"
      @click="pilihKategori(item)"
    >
      {{ item === 'semua' ? 'Semua' : item.toUpperCase() }}
    </button>
  </div>
</template>