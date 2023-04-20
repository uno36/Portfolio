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

const cards = [
  {
    id: 1,
    title2: 'Multi Post Stories',
    title1: 'Keeping track of hundreds  of components website',
    title3: 'Profesional Art Printing Data',
    title4: 'Data Dashboard Healthcare',
    title5: 'Website Portfolio',
    title6: 'Profesional Art Printing Data More',
    tags: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    img1: 'images/Snapshoot-Portfolio.png',
    img2: 'images/Snapshoot-Portfolio1.png',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description3: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    seelive: 'See live',
    seesource: 'See source',
  },
  {
    id: 2,
    title: 'My Recent Works',
    img1: 'images/pic.png',
    img2: 'images/gymnst.png',
    heading: 'Multi-Post Stories',
    description1: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    button: 'see project',
  },
  {
    id: 3,
    img1: 'images/projects-backgound.png',
    img2: 'images/whitebg.png',
    title1: 'Profesional Art Printing Data',
    title3: '',
    description1: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: 'see project',
  },
  {
    id: 4,
    img1: 'images/projects-backgound.png',
    img2: 'images/bg2.png',
    title1: 'Profesional Art Printing Data',
    title3: '',
    title2: 'Data Dashboard Healthcare',
    description1: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: 'see project',
  },
  {
    id: 5,
    img1: 'images/projects-backgound.png',
    img2: 'images/bg3.png',
    title1: 'Profesional Art Printing Data',
    title2: '',
    title3: 'Website Portfolio',
    description1: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: 'see project',
  },
  {
    id: 6,
    img1: 'images/projects-backgound.png',
    img2: 'images/bg4.png',
    title1: 'Profesional Art Printing Data',
    title2: 'Profesional Art Printing Data More',
    title3: '',
    description1: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: 'see project',
  },
  {
    id: 7,
    img1: 'images/projects-backgound.png',
    img2: 'images/bg5.png',
    title1: 'Profesional Art Printing Data',
    title2: 'Data Dashboard Healthcare',
    title3: '',
    description1: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: 'see project',
  },
  {
    id: 8,
    img1: 'images/projects-backgound.png',
    img2: 'images/bg6.png',
    title1: 'Profesional Art Printing Data',
    title2: '',
    title3: 'Website Portfolio',
    description1: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: 'see project',
  },
];

function displayCard(card) {
  const worksElement = document.getElementById('works');
  // create the card HTML
  const cardHTML = `
    <div class="recent-works">
      <div class="flex">
        <h1>${card.title}</h1>
        <hr class="hor" >
      </div>
      <div class="grid">
        <div class="gymnast"></div>
        <div>     
          <h2 class="recent1">${card.heading}</h2>
          <p class="recentp">${card.description1}</p>
          <div class="languages">
            <ul class="langu">
              ${card.tags.map((tag) => `<li><button id="btn-btn" class="works-btn" type="button">${tag}</button></li>`).join('')}
            </ul>
          </div>

          <button class="see" data-modal-target="#modal">${card.button}</button>
        </div>    
  `;
  // add the card HTML to the "works" element
  worksElement.innerHTML = cardHTML;
}
displayCard(cards[1]);

const Cards = document.querySelector('.recent');

function display() {
  const firstCard = `
    <div class="see-proj">
      <div class="projects-background" id="bg1"> 
        <div class="background">
        <h2 class="projects-heading" id="h">${cards[3].title1}</h2>
        <p class="para" id="p">${cards[3].description1}</p>
          <div class="project-btn">
            <ul class="langu">
            ${cards[3].tags.map((tag) => `<li><button id="pro-btn1" class="projects-btn" type="button">${tag}</button></li>`).join('')}
            </ul>
          </div>
        </div class="btn-container">
        <button class="sees-project" id="see-proj-btn" data-modal-target="#modal">${cards[3].button}</button>
      </div>
    </div>
  `;

  let displayCard = '';
  for (let i = 3; i < cards.length; i += 1) {
    displayCard += `
      <div class="see-proj">
        <div class="projects-background" id="bg${i - 1}"> 
          <div class="background" >
            <h2 class="projects-heading">${cards[i].title1}</h2>
            <h2 class="Desktop-heading" id="d-heading2">${cards[i].title3}</h2>
            <h2 class="Desktop-heading" id="d-heading">${cards[i].title2}</h2>
            
            <p class="para">${cards[i].description1}</p>
            <div class="project-btn">
              <ul class="langu">
                ${cards[i].tags.map((tag) => `<li><button id="pro-btn" class="projects-btn" type="button">${tag}</button></li>`).join('')}
              </ul>
            </div>
          </div>
          <button class="see-project" data-modal-target="#modal" >${cards[i].button}</button>
        </div>
      </div>
    `;
  }

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');
  gridContainer.innerHTML = firstCard + displayCard;
  Cards.appendChild(gridContainer);
}

display();

const popUpWindow = document.getElementById('modal');

function popUpDisaplay(card) {
  const popUp = `
      <div class='modal-view'>
      <div class="modal-header">
      <div>
          <h1 class="mod-header">${card.title2}</h1>
          <h1 class="mod-header1">${card.title1}</h1>
      </div>
      <div>
          <button data-close-button id="mod-button" class="fa-solid fa-xmark"></button>
      </div>
      </div>
      <div class="mod-btn-container">
      <ul class="mod-buttons">
          <li><button class="mod-btn" type="button">${card.tags[0]}</button></li>
          <li><button class="mod-btn" type="button">${card.tags[1]}</button></li>
          <li><button class="mod-btn" type="button">${card.tags[2]}</button></li>
      </ul>
      </div>
      <div class="images-popup">
      <div>
          <img src="${card.img1}" alt="IOT-10-image" class="mod-img">
          <img src="${card.img2}" alt="IOT-10-image2" class="mod-img1">
      </div>
      <div class="mod-para"><p class="first">${card.description2}<br><br>${card.description3}</p>
          <p class="p">${card.description1}</p>

            <ul class="mod-buttons" id="modal-btn">
              <li><button class="mod-btns" type="button">${card.seelive} &nbsp  <img src="images/Icon.png" alt="icon"></button></li>
              <li><button class="mod-btns" type="button">${card.seesource} &nbsp <img src="images/Icon2.png" alt="icon"></button></li>
          </ul>
      </div> 
      </div>
      <div id="overlay"></div>
      </div>
  `;
  popUpWindow.innerHTML = popUp;
}
popUpDisaplay(cards[0]);

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

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('#modal');
    closeModal(modal);
  });
});

