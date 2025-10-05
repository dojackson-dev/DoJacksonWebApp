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
        <img src="${item.image}" alt="${item.name}" style="width:100%;height:180px;object-fit:cover;">
        <div class="card-section">
          <h5>${item.name}</h5>
          <div class="address-logo-line"><img src="img/locationico.png" alt="Location" class="location-icon" /></div>
          <div class="contact">
            <p class="address-title">Address:</p>
            <p><a href="${createMapLink(item.address)}" target="_blank">${formatAddress(item.address)}</a></p>
            <p>${item.phone || ''}</p>
          </div>
          <div class="website-link"><a href="${item.url}" target="_blank">Website</a></div>
          <div class="card-desc"><span class="desc-title">Description:</span> ${item.description}</div>
        </div>
      </div>
    </div>
  `).join('');
  return carousel;
}
