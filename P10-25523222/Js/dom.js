
import { karya } from "./app.js";

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

function buatKartu(proyek) {
  const kartu = document.createElement("li");
  kartu.className = "kartu";
  kartu.textContent =
    `${proyek.judul} (${proyek.tahun}) — ${proyek.kategori}`;

  return kartu;
}


function render(daftar) {
  wadah.replaceChildren();

  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button[data-kategori]");

  if (!tombol || !barisFilter.contains(tombol)) return;

  const kategori = tombol.dataset.kategori;

  const terpilih = karya.filter(
    (proyek) =>
      kategori === "semua" ||
      proyek.kategori.toLowerCase() === kategori.toLowerCase()
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});

render(karya);


const form = document.querySelector("#kontak form");

if (form) {
  form.noValidate = true;

  const nama = form.querySelector("#nama");
  const email = form.querySelector("#email");
  const nim = form.querySelector("#nim");
  const pesan = form.querySelector("#pesan");

  const kolom = [nama, email, nim, pesan].filter(Boolean);

  const tombolKirim = form.querySelector(
    'button[type="submit"], input[type="submit"]'
  );

  let sudahMencobaKirim = false;

  const pesanBerhasil = document.createElement("p");
  pesanBerhasil.setAttribute("role", "status");
  pesanBerhasil.setAttribute("aria-live", "polite");
  form.append(pesanBerhasil);

  kolom.forEach((input) => {
    const error = document.createElement("span");
    error.className = "pesan-error";
    error.hidden = true;
    error.id = `${input.id}-error`;

    input.insertAdjacentElement("afterend", error);
    input.setAttribute("aria-describedby", error.id);
  });

  function periksaKolom(input, tampilkanError = false) {
    const nilai = input.value.trim();
    let pesanError = "";

    if (nilai === "") {
      pesanError = "Kolom ini wajib diisi.";
    } else if (
      input.type === "email" &&
      !input.validity.valid
    ) {
      pesanError = "Masukkan alamat email yang valid.";
    }

    input.setAttribute(
      "aria-invalid",
      String(pesanError !== "")
    );

    const error = document.getElementById(`${input.id}-error`);

    error.textContent = pesanError;
    error.hidden = !tampilkanError || pesanError === "";

    return pesanError === "";
  }

  function periksaSemuaKolom() {
  const hasil = kolom.map((input) =>
    periksaKolom(input, sudahMencobaKirim)
  );

  return hasil.every(Boolean);
}

  function perbaruiTombol() {
    const semuaSah = periksaSemuaKolom();

    if (tombolKirim) {
      tombolKirim.disabled =
        sudahMencobaKirim && !semuaSah;
    }

    return semuaSah;
  }

  kolom.forEach((input) => {
    input.addEventListener("input", () => {
      pesanBerhasil.textContent = "";
      periksaKolom(input, sudahMencobaKirim);
      perbaruiTombol();
    });

    input.addEventListener("blur", () => {
      periksaKolom(input, sudahMencobaKirim);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    sudahMencobaKirim = true;

    const semuaSah = perbaruiTombol();

    if (!semuaSah) {
      const kolomPertamaSalah = kolom.find(
        (input) => input.getAttribute("aria-invalid") === "true"
      );

      kolomPertamaSalah?.focus();
      return;
    }

    pesanBerhasil.textContent =
      "Form berhasil diperiksa. Data belum dikirim ke server.";
  });
}