// nightlife-carousel.js
import { nightlife, nightlifeCategories } from '../app-data/nightlife-data.js';

function createFilterDropdown() {
  const filterDiv = document.createElement('div');
  filterDiv.className = 'nightlife-filter';
  const select = document.createElement('select');
  select.id = 'nightlife-category';
  select.innerHTML = `<option value="all">All Categories</option>` +
    nightlifeCategories.map(cat => `<option value="${cat.category}">${cat.category}</option>`).join('');
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
      const cat = nightlifeCategories.find(c => c.category === this.value);
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
  const carousel = document.createElement('div');
  carousel.className = 'nightlife-carousel';
  carousel.innerHTML = items.map(item => `
    <div class="nightlife-card">
      <div class="card">
  <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='img/logo.png'" style="width:100%;height:180px;object-fit:cover;">
        <div class="card-section">
          <h5>${item.name}</h5>
          <div class="address-logo-line" style="text-align:center;"><img src="img/locationico.png" alt="Location" class="location-icon" /></div>
          <div class="contact" style="text-align:center;">
            <p class="address-title" style="margin:0;font-weight:600;">Address:</p>
            <p style="margin:4px 0;"><a href="${createMapLink(item.address)}" target="_blank">${formatAddress(item.address)}</a></p>
            <p style="margin:4px 0;">${item.phone || ''}</p>
          </div>
          <div class="website-link" style="text-align:center;margin:8px 0;"><a href="${item.url}" target="_blank" style="display:inline-block;background:#ff9900;color:#0033cc;padding:8px 12px;border-radius:4px;text-decoration:none;font-weight:600;">Website</a></div>
          <div class="card-desc"><span class="desc-title">Description:</span> ${item.description}</div>
        </div>
      </div>
    </div>
  `).join('');
  return carousel;
}

function renderNightlifeCarousel(filter = 'all') {
  const container = document.getElementById('nightlife-list');
  if (!container) return;
  container.innerHTML = '';
  let filtered = nightlife;
  if (filter !== 'all') {
    filtered = nightlife.filter(item => {
      // Support multiple categories per item: item.category can be a string or an array
      if (Array.isArray(item.category)) {
        return item.category.includes(filter);
      }
      if (typeof item.category === 'string') {
        return item.category === filter;
      }
      // Fallback: try to match by examples or type
      const cat = nightlifeCategories.find(c => c.category === filter);
      if (!cat) return false;
      return cat.examples.some(ex => item.name.includes(ex) || (item.type && ex.toLowerCase().includes(item.type.replace(/-/g, ' '))));
    });
  }
  container.appendChild(createCarousel(filtered));
}

function initNightlife() {
  const main = document.querySelector('main');
  if (!main) return;
  if (!document.getElementById('nightlife-list')) {
    main.insertAdjacentHTML('beforeend', '<div id="nightlife-list"></div>');
  }
  // Insert filter dropdown if not already present
  const existingFilter = document.querySelector('.nightlife-filter');
  if (!existingFilter) {
    main.insertBefore(createFilterDropdown(), document.getElementById('nightlife-list'));
  }
  renderNightlifeCarousel();
  const dropdown = document.getElementById('nightlife-category');
  if (dropdown) {
    dropdown.addEventListener('change', function() {
      renderNightlifeCarousel(this.value);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNightlife);
} else {
  initNightlife();
}

export { createCarousel };
