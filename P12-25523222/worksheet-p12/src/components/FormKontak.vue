<script setup>
import { ref } from 'vue'

const nama = ref('')
const email = ref('')
const pesan = ref('')

function kirimPesan() {
  nama.value = ''
  email.value = ''
  pesan.value = ''
}
</script>

<template>
  <section id="kontak">
    <h2>Kontak Saya</h2>

    <form @submit.prevent="kirimPesan">
      <label for="nama">Nama</label>
      <input
        id="nama"
        v-model="nama"
        type="text"
        placeholder="Nama lengkap"
        required
      >

      <label for="email">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="Email kamu"
        required
      >

      <label for="pesan">Pesan</label>
      <textarea
        id="pesan"
        v-model="pesan"
        placeholder="Tulis pesan"
        required
      ></textarea>

      <button type="submit">Kirim</button>
    </form>
  </section>
</template>