// Toast notification
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg || 'Added to Bag';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function addToBag(e) {
  e.preventDefault();
  e.stopPropagation();
  showToast('Item Added to Bag');
}

// Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Size selection
document.querySelectorAll('.size-btn:not(.unavailable)').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.size-options').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Product gallery thumbnails
document.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
  thumb.addEventListener('click', () => {
    const mainImg = document.querySelector('.gallery-main img');
    const src = thumb.querySelector('img').src;
    if (mainImg) {
      mainImg.style.opacity = '0';
      setTimeout(() => { mainImg.src = src; mainImg.style.opacity = '1'; }, 200);
    }
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.filter-left').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Add to bag (product detail page)
const addBagBtn = document.querySelector('.add-to-bag');
if (addBagBtn) {
  addBagBtn.addEventListener('click', () => {
    const size = document.querySelector('.size-btn.active');
    if (!size) {
      showToast('Please select a size');
      return;
    }
    showToast('Item Added to Bag');
    addBagBtn.textContent = 'Added ✓';
    setTimeout(() => { addBagBtn.textContent = 'Add to Bag'; }, 2000);
  });
}
