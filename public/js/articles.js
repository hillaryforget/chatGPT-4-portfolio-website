/* global document */

const articles = [
  // Add your articles here
  { title: 'Title 1', url: 'https://medium.com/the-good-vibes-corner/new-chatgpt-4-strengths-weaknesses-and-limitations-86834e2dd6ba' },
  { title: 'Title 2', url: 'https://example.com/article-2' },
  // ...
  { title: 'Title 20', url: 'https://example.com/article-20' },
];

const masonryGrid = document.querySelector('.masonry-grid');
articles.forEach((article) => {
  const articleCard = document.createElement('div');
  articleCard.className = 'article-card';
  articleCard.style.backgroundColor = getRandomColor();
  articleCard.style.width = getRandomSize();
  articleCard.style.height = getRandomSize();

  const articleLink = document.createElement('a');
  articleLink.href = article.url;
  articleLink.textContent = article.title;
  articleCard.appendChild(articleLink);

  masonryGrid.appendChild(articleCard);
});

function getRandomColor() {
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomSize() {
  const sizes = ['100px', '150px', '200px'];
  return sizes[Math.floor(Math.random() * sizes.length)];
}

document.addEventListener('DOMContentLoaded', function () {
  const msnry = new Masonry(masonryGrid, {
    itemSelector: '.article-card',
    columnWidth: '.article-card',
    percentPosition: true,
  });
});
