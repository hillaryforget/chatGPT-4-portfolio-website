/* global document */

document.addEventListener('DOMContentLoaded', () => {
  let currentItem = 0;
  setInterval(() => {
    currentItem = (currentItem + 1) % 3;
    $(".carousel-item").removeClass("active");
    $(`.carousel-item:nth-child(${currentItem + 1})`).addClass("active");
  }, 3000);
});
