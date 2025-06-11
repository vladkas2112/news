import './style/main.scss'

// Sample news data
const newsItems = [
  {
    title: 'Rosyjski politolog: Putin sprowadził na Rosję nową wojnę',
    imageUrl: 'https://picsum.photos/400/300',
    isPremium: true
  },
  {
    title: 'Udaremniony zamach stanu w Boliwii. Podsumowanie nocy',
    imageUrl: 'https://picsum.photos/400/301',
    category: 'W SKRÓCIE'
  },
  {
    title: 'Dolce vita Pawlaka. Ford bestia z USA i polędwica na koszt podatnika',
    imageUrl: 'https://picsum.photos/400/302'
  }
];

// Function to create news card HTML
function createNewsCard(news) {
  return `
    <article class="news-card">
      <div class="news-card__image">
        <img src="${news.imageUrl}" alt="${news.title}">
        ${news.isPremium ? '<span class="news-card__badge premium">premium</span>' : ''}
        ${news.category ? `<span class="news-card__badge category">${news.category}</span>` : ''}
      </div>
      <div class="news-card__content">
        <h3 class="news-card__title">${news.title}</h3>
      </div>
    </article>
  `;
}

// Populate news grid
const newsGrid = document.querySelector('.news-grid');
if (newsGrid) {
  newsGrid.innerHTML = newsItems.map(createNewsCard).join('');
}

// Add click handlers for action buttons
document.querySelectorAll('.action-button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    // Add your action handling logic here
    console.log('Action clicked:', button.textContent.trim());
  });
});
