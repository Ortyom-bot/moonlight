let index = 0;
function switchSlide() {
  const carousel = document.querySelector(".carousel-container");
  index = (index + 1) % 5; // Переключение между 0 и 4
  carousel.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(switchSlide, 3000); // Переключение каждые 3 секунды
