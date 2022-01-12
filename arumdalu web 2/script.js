const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

// Ketika toggle di klik, jalankan function berikut.
menuToggle.addEventListener('click', function () {
  // toogle itu kalo gak ada classnya tambahin, kalo ada classnya hilangin, disini kelas yg ingin ditambahin adalah slide
  nav.classList.toggle('slide');
});
