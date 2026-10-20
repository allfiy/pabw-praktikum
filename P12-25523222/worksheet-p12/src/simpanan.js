
const KUNCI = 'pabw-p11'
const VERSI = 2

export function simpan(state) {
  try {
    localStorage.setItem(
      KUNCI,
      JSON.stringify({
        versi: VERSI,
        kategoriAktif: state.kategoriAktif,
      }),
    )
  } catch (galat) {
    console.error('Gagal menyimpan pilihan:', galat)
  }
}

export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI)

    if (!teks) return null

    const isi = JSON.parse(teks)

    if (isi.versi !== VERSI) {
      localStorage.removeItem(KUNCI)
      return null
    }

    return isi
  } catch (galat) {
    localStorage.removeItem(KUNCI)
    return null
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI)
}
