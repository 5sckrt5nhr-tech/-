const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.textContent = isOpen ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));

document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  document.querySelector('#form-message').textContent =
    'Дякуємо! Це демонстраційна форма — реальна заявка поки не надсилається.';
  form.reset();
});

document.querySelectorAll('.faq details').forEach(item => {
  item.addEventListener('toggle', () => {
    const mark = item.querySelector('summary span');
    mark.textContent = item.open ? '−' : '＋';
  });
});
