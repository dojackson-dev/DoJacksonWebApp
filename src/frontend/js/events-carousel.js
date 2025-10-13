// events-carousel.js
import { events, eventCategories } from '../app-data/events-data.js';

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yy = String(date.getFullYear()).slice(-2);
  return `${mm}/${dd}/${yy}`;
}
function getDayOfWeek(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'short' });
}
function groupEventsByWeek(events) {
  // Group events by week starting Sunday
  const weeks = [];
  let currentWeek = [];
  let lastSunday = null;
  events.sort((a, b) => new Date(a.date) - new Date(b.date));
  for (const event of events) {
    const d = new Date(event.date);
    if (d.getDay() === 0 || !lastSunday) {
      if (currentWeek.length) weeks.push(currentWeek);
      currentWeek = [];
      lastSunday = d;
    }
    currentWeek.push(event);
  }
  if (currentWeek.length) weeks.push(currentWeek);
  return weeks;
}
function createFilterDropdown() {
  const filterDiv = document.createElement('div');
  filterDiv.className = 'events-filter';
  const select = document.createElement('select');
  select.id = 'event-category';
  select.innerHTML = `<option value="all">All Categories</option>` +
    eventCategories.map(cat => `<option value="${cat.category}">${cat.category}</option>`).join('');
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
      const cat = eventCategories.find(c => c.category === this.value);
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
function createWeekCarousel(events) {
  events = shuffleArray([...events]);
  
  // Create container wrapper
  const container = document.createElement('div');
  container.className = 'carousel-container';
  
  // Create navigation arrows
  const nav = document.createElement('div');
  nav.className = 'carousel-nav';
  
  const leftArrow = document.createElement('button');
  leftArrow.className = 'carousel-arrow carousel-arrow-left';
  leftArrow.innerHTML = '‹';
  leftArrow.setAttribute('aria-label', 'Previous event');
  
  const navLabel = document.createElement('span');
  navLabel.className = 'carousel-nav-label';
  navLabel.textContent = 'Scroll to browse events';
  
  const rightArrow = document.createElement('button');
  rightArrow.className = 'carousel-arrow carousel-arrow-right';
  rightArrow.innerHTML = '›';
  rightArrow.setAttribute('aria-label', 'Next event');
  
  nav.appendChild(leftArrow);
  nav.appendChild(navLabel);
  nav.appendChild(rightArrow);
  
  // Create carousel
  const carousel = document.createElement('div');
  carousel.className = 'events-carousel';
  carousel.innerHTML = events.map(event => `
    <div class="events-card">
      <div class="card">
  <div class="event-date">${formatDate(event.date)}</div>
  <div class="event-day">${getDayOfWeek(event.date)}</div>
  <h5>${event.name}</h5>
  <div class="address-logo-line"><img src="img/locationico.png" alt="Location" class="location-icon" onerror="this.onerror=null;this.src='img/logo.png'" /></div>
        <div class="contact">
          <p class="address-title">Address:</p>
          <p><a href="${createMapLink(event.address)}" target="_blank">${formatAddress(event.address)}</a></p>
          <p>${event.phone || ''}</p>
        </div>
        <div class="website-link"><a href="${event.url}" target="_blank" class="website-btn">Website</a></div>
        <div class="card-desc"><span class="desc-title">Description:</span> ${event.description}</div>
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
function renderEventsCarousel(filter = 'all', onlyThisWeek = false) {
  const container = document.getElementById('events-list');
  if (!container) return;
  container.innerHTML = '';
  let filtered = events;
  if (filter !== 'all') {
    filtered = events.filter(item => {
      const cat = eventCategories.find(c => c.category === filter);
      if (!cat) return false;
      // Support multiple categories per event
      if (Array.isArray(item.category)) {
        return item.category.some(catName => catName === filter);
      } else {
        return item.category === filter;
      }
    });
  }

  if (onlyThisWeek) {
    const now = new Date();
    const start = new Date(now);
    // set to Sunday
    start.setDate(now.getDate() - now.getDay());
    start.setHours(0,0,0,0);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    end.setHours(23,59,59,999);
    filtered = filtered.filter(item => {
      try {
        const d = new Date(item.date);
        return d >= start && d <= end;
      } catch(e) {
        return false;
      }
    });
  }

  // Create a single carousel with all filtered events
  if (filtered.length) {
    container.appendChild(createWeekCarousel(filtered));
  }
}
function initEvents() {
  const main = document.querySelector('main');
  if (!main) return;
  if (!document.getElementById('events-list')) {
    main.insertAdjacentHTML('beforeend', '<div id="events-list"></div>');
  }
  if (!document.querySelector('.events-filter')) {
    main.insertBefore(createFilterDropdown(), document.getElementById('events-list'));
    // Insert week toggles (This week / All weeks)
    const toggleWrap = document.createElement('div');
    toggleWrap.className = 'events-week-toggle';
    toggleWrap.innerHTML = `<button id="show-this-week" class="toggle-btn">This week</button><button id="show-all-weeks" class="toggle-btn active">All weeks</button>`;
    main.insertBefore(toggleWrap, document.getElementById('events-list'));
  }
  renderEventsCarousel();
  const dropdown = document.getElementById('event-category');
  if (dropdown) {
    dropdown.addEventListener('change', function() {
      renderEventsCarousel(this.value);
    });
  }
  // week toggles wiring
  const btnThis = document.getElementById('show-this-week');
  const btnAll = document.getElementById('show-all-weeks');
  if (btnThis && btnAll) {
    btnThis.addEventListener('click', function() {
      btnThis.classList.add('active'); btnAll.classList.remove('active');
      const sel = (document.getElementById('event-category') || {}).value || 'all';
      renderEventsCarousel(sel, true);
    });
    btnAll.addEventListener('click', function() {
      btnAll.classList.add('active'); btnThis.classList.remove('active');
      const sel = (document.getElementById('event-category') || {}).value || 'all';
      renderEventsCarousel(sel, false);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEvents);
} else {
  initEvents();
}
export { createWeekCarousel as createCarousel };
