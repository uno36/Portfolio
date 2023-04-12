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

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});
