const menuBtn = document.querySelector('#open-menu');
const mobileMenu = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('#close-menu');
const menuItems = document.querySelectorAll('#mobile-menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-active');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('is-active');
  });
});

const contactForm = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const isValid = (emailInput) => !/([A-Z])/g.test(emailInput);
const error = document.querySelector('.error-message');

contactForm.addEventListener('submit', (event) => {
  if (!isValid(emailInput.value)) {
    event.preventDefault();
    error.textContent = 'Submission failed: email is invalid use lowercase';
    error.className = 'error active';
  } else {
    contactForm.submit();
    emailInput.className = 'error valid';
    error.textContent = '';
    error.className = 'error';
  }
});