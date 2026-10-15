
const ALAMAT = "https://jsonplaceholder.typicode.com/posts";

export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);

    console.log("Status:", respons.status);
    console.log("Berhasil:", respons.ok);

    if (!respons.ok) {
      throw new Error("Status " + respons.status);
    }

    const data = await respons.json();

    console.log("Data JSON:", data);

    return data;
  } catch (galat) {
    console.error("Gagal memuat data:", galat.message);
    throw galat;
  }
}
