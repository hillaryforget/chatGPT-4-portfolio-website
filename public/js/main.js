/* global document, Masonry, imagesLoaded */

document.addEventListener('DOMContentLoaded', () => {
  // Existing code for dropdown menu
  const navIcon = document.querySelector('.nav-icon');
  const navLinks = document.querySelector('nav ul');

  navIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Initialize Masonry grid
  const masonryGrid = document.querySelector('.masonry-grid');
  if (masonryGrid) {
    const msnry = new Masonry(masonryGrid, {
      itemSelector: '.article-card',
      columnWidth: '.article-card',
      percentPosition: true,
    });

    // Use imagesLoaded to initialize Masonry after images are loaded
    imagesLoaded(masonryGrid).on('progress', () => {
      msnry.layout();
    });
  }
});
