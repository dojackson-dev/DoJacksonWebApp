import { thingsToDo, thingsCategories } from '../app-data/things-to-do-data.js';

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
  carousel.className = 'things-carousel';
  carousel.innerHTML = items.map(item => `
    <div class="things-card">
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
          <div class="website-link"><a href="${item.url}" target="_blank" class="website-btn">Website</a></div>
          <div class="card-desc"><span class="desc-title">Description:</span> ${item.description}</div>
        </div>
      </div>
    </div>
  `).join('');
  return carousel;
}

function createFilterDropdown() {
  const filterDiv = document.createElement('div');
  filterDiv.className = 'things-filter';
  const select = document.createElement('select');
  select.id = 'things-category';
  select.innerHTML = `<option value="all">All Categories</option>` +
    thingsCategories.map(cat => `<option value="${cat.category}">${cat.category}</option>`).join('');
  filterDiv.appendChild(select);
  const desc = document.createElement('div');
  desc.className = 'category-desc';
  desc.textContent = '';
  filterDiv.appendChild(desc);
  select.addEventListener('change', function() {
    if (this.value === 'all') {
      desc.textContent = '';
    } else {
      const cat = thingsCategories.find(c => c.category === this.value);
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
  return address.replace(/,\s*Jackson,\s*MS\s*\d{5}/i, '');
}

function renderThingsCarousel(filter = 'all') {
  const container = document.getElementById('things-list');
  if (!container) return;
  container.innerHTML = '';
  let filtered = thingsToDo;
  if (filter !== 'all') {
    filtered = thingsToDo.filter(item => {
      if (Array.isArray(item.category)) return item.category.includes(filter);
      if (typeof item.type === 'string') return item.type === filter || item.type.toLowerCase().includes(filter.toLowerCase());
      const cat = thingsCategories.find(c => c.category === filter);
      if (!cat) return false;
      return cat.examples.some(ex => item.name.includes(ex));
    });
  }
  container.appendChild(createCarousel(filtered));
}

function initThings() {
  const main = document.querySelector('main');
  if (!main) return;
  if (!document.getElementById('things-list')) {
    main.insertAdjacentHTML('beforeend', '<div id="things-list"></div>');
  }
  const existingFilter = document.querySelector('.things-filter');
  if (!existingFilter) {
    main.insertBefore(createFilterDropdown(), document.getElementById('things-list'));
  }
  renderThingsCarousel();
  const dropdown = document.getElementById('things-category');
  if (dropdown) {
    dropdown.addEventListener('change', function() {
      renderThingsCarousel(this.value);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThings);
} else {
  initThings();
}

export { createCarousel };
