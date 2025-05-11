document.getElementById('current-date').textContent = new Date().toLocaleDateString('es-ES', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

document.getElementById('current-year').textContent = new Date().getFullYear();