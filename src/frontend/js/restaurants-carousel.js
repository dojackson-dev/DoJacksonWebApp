// restaurants-carousel.js
import { restaurants, restaurantCategories } from '../app-data/restaurants-data.js';

function createFilterDropdown() {
  const filterDiv = document.createElement('div');
  filterDiv.className = 'restaurants-filter';
  const select = document.createElement('select');
  select.id = 'restaurant-category';
  select.innerHTML = `<option value="all">All Categories</option>` +
    restaurantCategories.map(cat => `<option value="${cat.category}">${cat.category}</option>`).join('');
  filterDiv.appendChild(select);
  // Add description element
  const desc = document.createElement('div');
  desc.className = 'category-desc';
  desc.textContent = '';
  filterDiv.appendChild(desc);
  select.addEventListener('change', function() {
    if (this.value === 'all') {
      desc.textContent = '';
    } else {
      const cat = restaurantCategories.find(c => c.category === this.value);
      desc.textContent = cat ? cat.description : '';
    }
  });
  return filterDiv;
}

function createMapLink(address) {
  const encoded = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
}

function formatAddress(address) {
  // Remove city, state, and zip (assumes format: 'Street, City, State ZIP')
  return address.replace(/,\s*Jackson,\s*MS\s*\d{5}/i, '');
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createCarousel(items) {
  items = shuffleArray([...items]);
  
  // Create container wrapper
  const container = document.createElement('div');
  container.className = 'carousel-container';
  
  // Create navigation arrows
  const nav = document.createElement('div');
  nav.className = 'carousel-nav';
  
  const leftArrow = document.createElement('button');
  leftArrow.className = 'carousel-arrow carousel-arrow-left';
  leftArrow.innerHTML = '‹';
  leftArrow.setAttribute('aria-label', 'Previous restaurant');
  
  const navLabel = document.createElement('span');
  navLabel.className = 'carousel-nav-label';
  navLabel.textContent = 'Scroll to browse restaurants';
  
  const rightArrow = document.createElement('button');
  rightArrow.className = 'carousel-arrow carousel-arrow-right';
  rightArrow.innerHTML = '›';
  rightArrow.setAttribute('aria-label', 'Next restaurant');
  
  nav.appendChild(leftArrow);
  nav.appendChild(navLabel);
  nav.appendChild(rightArrow);
  
  // Create carousel
  const carousel = document.createElement('div');
  carousel.className = 'restaurants-carousel';
  carousel.innerHTML = items.map(item => `
    <div class="restaurants-card">
      <div class="card">
  <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='img/logo.png'" style="width:100%;height:180px;object-fit:cover;">
        <div class="card-section">
          <h5>${item.name}</h5>
          <div class="address-logo-line" style="text-align:center;"><img src="img/locationico.png" alt="Location" class="location-icon" /></div>
          <div class="contact" style="text-align:center;">
            <p class="address-title" style="margin:0;font-weight:600;">Address:</p>
            <p style="margin:4px 0;"><a href="${createMapLink(item.address)}" target="_blank">${formatAddress(item.address)}</a></p>
            <p style="margin:4px 0;">${item.phone}</p>
          </div>
          <div class="website-link"><a href="${item.url}" target="_blank" class="website-btn">Website</a></div>
          <div class="card-desc"><span class="desc-title">Description:</span> ${item.description}</div>
        </div>
      </div>
    </div>
  `).join('');
  
  // Add scroll functionality
  const cardWidth = 300; // Approximate card width + gap
  
  function updateArrowStates() {
    const scrollLeft = carousel.scrollLeft;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    
    leftArrow.disabled = scrollLeft <= 0;
    rightArrow.disabled = scrollLeft >= maxScroll - 1;
  }
  
  leftArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    setTimeout(updateArrowStates, 300);
  });
  
  rightArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    setTimeout(updateArrowStates, 300);
  });
  
  carousel.addEventListener('scroll', updateArrowStates);
  
  // Initial arrow state
  setTimeout(updateArrowStates, 100);
  
  container.appendChild(nav);
  container.appendChild(carousel);
  
  return container;
}

function renderRestaurantsCarousel(filter = 'all') {
  const container = document.getElementById('restaurants-list');
  if (!container) return;
  container.innerHTML = '';
  let filtered = restaurants;
  if (filter !== 'all') {
    filtered = restaurants.filter(item => {
      if (Array.isArray(item.category)) {
        return item.category.includes(filter);
      }
      if (typeof item.category === 'string') {
        return item.category === filter;
      }
      const cat = restaurantCategories.find(c => c.category === filter);
      if (!cat) return false;
      return cat.examples.some(ex => item.name.includes(ex) || (item.type && ex.toLowerCase().includes(item.type.replace(/-/g, ' '))));
    });
  }
  container.appendChild(createCarousel(filtered));
}

function initRestaurants() {
  const main = document.querySelector('main');
  if (!main) return;
  if (!document.getElementById('restaurants-list')) {
    main.insertAdjacentHTML('beforeend', '<div id="restaurants-list"></div>');
  }
  // Insert filter dropdown if not already present
  const existingFilter = document.querySelector('.restaurants-filter');
  if (!existingFilter) {
    main.insertBefore(createFilterDropdown(), document.getElementById('restaurants-list'));
  }
  renderRestaurantsCarousel();
  const dropdown = document.getElementById('restaurant-category');
  if (dropdown) {
    dropdown.addEventListener('change', function() {
      renderRestaurantsCarousel(this.value);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRestaurants);
} else {
  initRestaurants();
}

export { createCarousel };
