const bannerElement = document.querySelector('.banner');
const images = [
  'images2/pixelcut-export.jpeg',
  'images2/3.webp',
  'images2/4.avif',
  'images2/pataconn.avif',
  'images2/pataconn.avif',
  // Agrega más rutas de imagen según necesites
];

function changeBannerImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  bannerElement.style.backgroundImage = `linear-gradient(100deg, #000000, #00000020), url('${images[randomIndex]}')`;
}


setInterval(changeBannerImage, 3000); // Cambia la imagen cada 15 segundos