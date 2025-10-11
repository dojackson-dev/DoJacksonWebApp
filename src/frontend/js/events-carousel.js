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
  return carousel;
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
  const weeks = groupEventsByWeek(filtered);
  if (onlyThisWeek) {
    // Find the week that contains today's date
    const today = new Date();
    for (const weekEvents of weeks) {
      for (const ev of weekEvents) {
        const d = new Date(ev.date);
        // if same ISO week number, show this week
        const sameWeek = (d >= startOfWeek(today)) && (d < startOfWeek(addDays(today, 7)));
        if (sameWeek) {
          container.appendChild(createWeekCarousel(weekEvents));
          return;
        }
      }
    }
    // If none found, fall back to showing all
  }
  weeks.forEach(weekEvents => {
    if (weekEvents.length) {
      container.appendChild(createWeekCarousel(weekEvents));
    }
  });
}

function startOfWeek(d) {
  const date = new Date(d);
  const day = date.getDay(); // 0 (Sun) - 6
  const diff = date.getDate() - day;
  return new Date(date.setDate(diff));
}

function addDays(d, days) {
  const dt = new Date(d);
  dt.setDate(dt.getDate() + days);
  return dt;
}
function initEvents() {
  const main = document.querySelector('main');
  if (!main) return;
  if (!document.getElementById('events-list')) {
    main.insertAdjacentHTML('beforeend', '<div id="events-list"></div>');
  }
  if (!document.querySelector('.events-filter')) {
    main.insertBefore(createFilterDropdown(), document.getElementById('events-list'));
  }
  renderEventsCarousel();
  const dropdown = document.getElementById('event-category');
  if (dropdown) {
    dropdown.addEventListener('change', function() {
      renderEventsCarousel(this.value, false);
    });
  }

  // Wire week toggles (if present in DOM)
  const thisWeekBtn = document.getElementById('show-this-week');
  const allWeeksBtn = document.getElementById('show-all-weeks');
  if (thisWeekBtn && allWeeksBtn) {
    thisWeekBtn.addEventListener('click', function(){
      thisWeekBtn.setAttribute('aria-pressed','true');
      allWeeksBtn.setAttribute('aria-pressed','false');
      const selected = (document.getElementById('event-category') || {}).value || 'all';
      renderEventsCarousel(selected, true);
    });
    allWeeksBtn.addEventListener('click', function(){
      thisWeekBtn.setAttribute('aria-pressed','false');
      allWeeksBtn.setAttribute('aria-pressed','true');
      const selected = (document.getElementById('event-category') || {}).value || 'all';
      renderEventsCarousel(selected, false);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEvents);
} else {
  initEvents();
}
export { createWeekCarousel as createCarousel };
