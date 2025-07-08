const toggleButton = document.getElementById("toggle-button");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("active");
  toggleButton.classList.toggle("active");
  toggleButton.classList.toggle("rotate");
}

// Klik diluar sidebar untuk menutup sidebar
document.addEventListener("click", function (event) {
  if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
    sidebar.classList.remove("active");
    toggleButton.classList.remove("active");
    toggleButton.classList.remove("rotate");
  }
});

// Membuka pertemuan yang dipilih dan menutup pertemuan lainnya
const pertemuan = document.querySelectorAll(".sidebar-item");
const sections = document.querySelectorAll(".section");
const logo = document.querySelectorAll(".logo");

pertemuan.forEach((item) => {
  item.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");

    // Tutup semua pertemuan
    pertemuan.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");

    // Buka pertemuan yang dipilih
    sections.forEach((section) => {
      section.classList.remove("active");
      if (section.id === targetId) {
        section.classList.add("active");
      }
    });

    // Panggil fungsi inisialisasi khusus berdasarkan pertemuan
    if (targetId === "pert-2") {
      initPertemuan2();
    } else if (targetId === "pert-3") {
      initCanvas();
      drawPolygon();
    } else if (targetId === "pert-4") {
      initCircleCanvas();
      initEllipseCanvas();
    } else if (targetId === "pert-5") {
      // Fungsi untuk pertemuan 5 sudah ada di bagian akhir script
    }
  });
});

const home = document.getElementById("home");

// Sembunyikan #home saat menu sidebar diklik
pertemuan.forEach((item) => {
  item.addEventListener("click", function () {
    if (home) {
      home.style.display = "none";
    }
  });
});

// Tampilkan #home saat halaman pertama kali dimuat
if (home) {
  home.style.display = "block";
}

// Tampilkan #home saat logo diklik
logo.forEach((item) => {
  item.addEventListener("click", function () {
    if (home) {
      home.style.display = "block";
    }
    // Nonaktifkan semua section dan sidebar-item
    sections.forEach((section) => section.classList.remove("active"));
    pertemuan.forEach((li) => li.classList.remove("active"));
  });
});
