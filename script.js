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
    title1: 'Multi Post Stories',
    title2: 'Keeping track of hundreds  of components website',
    title3: 'Profesional Art Printing Data',
    title4: 'Data Dashboard Healthcare',
    title5: 'Website Portfolio',
    title6: 'Profesional Art Printing Data More',
    tags: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    img1: 'images/Snapshoot-Portfolio.png',
    img2: 'images/Snapshoot-Portfolio.png',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    seelive: '',
    seesource: '',
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
    title: 'Profesional Art Printing Data',
    description1: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: 'see project',
  },
  {
    id: 4,
    img1: 'images/projects-backgound.png',
    img2: 'images/bg2.png',
    title1: 'Profesional Art Printing Data',
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
    title2: 'Website Portfolio',
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
    description1: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: 'see project',
  },
  {
    id: 8,
    img1: 'images/projects-backgound.png',
    img2: 'images/bg6.png',
    title1: 'Profesional Art Printing Data',
    title2: 'Website Portfolio',
    description1: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: 'see project',
  },
];

const projects = document.querySelector('#works');
projects.style.display = 'grid';
projects.style.gridTemplateColumns = 'repeat(3, 1fr)';

cards.forEach((value, index) => {
  const div = document.createElement('div');
  div.id = index;

  if (index === 2) {
    div.innerHTML = `
      <div class="see-proj">
        <div class="projects-background" id="whitebg"> 
          <div class="background">
            <h2 class="projects-heading">${value.title}</h2>
            <p class="para">${value.description1}</p>
            <div class="project-btn">
              <ul class="btn-ul">
                ${value.tags.map((tag) => `<li><button class="projects-btn" type="button">${tag}</button></li>`).join('')}
              </ul>
            </div>
          </div>
          <button class="sees-project" id="see-proj-btn">${value.button}</button>
        </div>
      </div>
    `;
  } else if (index >= 3 && index <= 7) {
    div.className = 'card-2';
    div.innerHTML = `
      <div class="recent-works2">
        <div class="see-proj">
          <div class="projects-background" id="bg${index - 1}"> 
            <div class="background">
              <h2 class="projects-heading">${value.title1}</h2>
              <h2 class="Desktop-heading">${value.title2}</h2>
              <p class="para">${value.description1}</p>
              <div class="project-btn">
                <ul class="project-btn">
                  ${value.tags.map((tag) => `<li><button class="projects-btn" type="button">${tag}</button></li>`).join('')}
                </ul>
              </div>
            </div>
            <button class="see-project">${value.button}</button>
          </div> 
        </div>
      </div>
    `;
  }

  projects.appendChild(div);
});