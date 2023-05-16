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

const nameInput = document.getElementsByName('user-name');
const emailInput = document.getElementsByName('e-mail');
const messageInput = document.getElementsByName('message');

let formData = {
  nameInputValue: '',
  emailInputValue: '',
  messageInputValue: '',
};

if (localStorage.getItem('form-data')) {
  formData = JSON.parse(localStorage.getItem('form-data'));
  nameInput[0].value = formData.nameInputValue;
  emailInput[0].value = formData.emailInputValue;
  messageInput[0].value = formData.messageInputValue;
}

function updateFormData() {
  formData.nameInputValue = nameInput[0].value;
  formData.emailInputValue = emailInput[0].value;
  formData.messageInputValue = messageInput[0].value;
  localStorage.setItem('form-data', JSON.stringify(formData));
}

nameInput[0].addEventListener('input', updateFormData);
emailInput[0].addEventListener('input', updateFormData);
messageInput[0].addEventListener('input', updateFormData);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.setItem('form-data', JSON.stringify(formData));
  form.submit();
});

const fullName = document.querySelector('#name');
const feedback = document.querySelector('#email');
const Message = document.querySelector('#user-text');

function visitorData() {
  const visitor = {
    Name: fullName.value,
    Email: feedback.value,
    Message: Message.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
}

[fullName, feedback, Message].forEach((input) => input.addEventListener('focusout', visitorData));
const visitorDataExist = JSON.parse(localStorage.getItem('visitor'));
if (visitorDataExist) {
  fullName.value = visitorDataExist.Name;
  feedback.value = visitorDataExist.Email;
  Message.value = visitorDataExist.Message;
}
