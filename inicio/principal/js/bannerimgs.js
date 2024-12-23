const bannerElement = document.querySelector('.banner');
const images = [
  'images2/pixelcut-export.jpeg',
  'images2/3.webp',
  'images2/4.avif',
  'images2/pataconn.avif',
  'images2/pataconn.avif',
];

function changeBannerImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  bannerElement.style.backgroundImage = `linear-gradient(100deg, #000000, #00000020), url('${images[randomIndex]}')`;
  bannerElement.style.transition = 'background-image 1s ease-in-out';
}

setInterval(changeBannerImage, 3000); // Cambia la imagen cada 3 segundos