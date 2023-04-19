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

const projects = [
  {
    img: 'images/gymnast.png',
    title: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ['CSS', 'HTML', 'Bootstrap', 'RUby'],
    button: 'See Project',
  },
  {
    title: 'Professional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ['HTML', 'Bootstrap', 'RUby'],
    button: 'See Project',
  },
  {
    title: 'Professional Art Printing Data',
    title1: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ['HTML', 'Bootstrap', 'RUby'],
    button: 'See Project',
  },
  {
    title: 'Professional Art Printing Data',
    title1: 'Website Potfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ['HTML', 'Bootstrap', 'RUby'],
    button: 'See Project',
  },
  {
    title: 'Professional Art Printing Data',
    title1: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ['HTML', 'Bootstrap', 'RUby'],
    button: 'See Project',
  },
  {
    title: 'Professional Art Printing Data',
    title1: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ['HTML', 'Bootstrap', 'RUby'],
    button: 'See Project',
  },
  {
    title: 'Professional Art Printing Data',
    title1: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ['HTML', 'Bootstrap', 'RUby'],
    button: 'See Project',
  },
];

const projectsContainer = document.getElementById('works');

const projectsGrid = document.getElementById('grid-projects');

for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];

  if (i === 0) {
    const projectHTML = `
      <div class="project1">
      <div class="grid">
        <div>
        ${project.img ? `<img src="${project.img}" alt="${project.title}" class="gymnast">` : ''}
        </div>
        <div>
        <h2 class="recent1">${project.title}</h2>
        <p class="recentp" >${project.description}</p>
        <ul class="langu">
          ${project.tags.map((tag) => `<li class="works-btn">${tag}</li>`).join('')}
        </ul>
        <button class="see">${project.button}</button>
        </div>
      </div>
      </div>
    `;

    projectsContainer.innerHTML += projectHTML;
  } else if (i === 1) {
    const project1HTML = `
      <div class="grid-projects">
      <div class="see-proj">
        <div class="projects-background" id="whitebg">  
        <button class="sees-project" id="see-proj-btn">${project.button}</button>
                    
        </div>
      </div>  
      `;
    const projectElement = document.getElementById(`project-${i}`);
    projectElement.addEventListener('mouseenter', () => {
      const imageElement = document.getElementById(`project-img-${i}`);
      const buttonElement = document.getElementById(`see-proj-btn-${i}`);
      imageElement.classList.add('hover');
      buttonElement.classList.add('hover');
    });

    projectElement.addEventListener('mouseleave', () => {
      const imageElement = document.getElementById(`project-img-${i}`);
      const buttonElement = document.getElementById(`see-proj-btn-${i}`);
      imageElement.classList.remove('hover');
      buttonElement.classList.remove('hover');
    });

    projectsGrid.innerHTML += project1HTML;
  } else {
    const projectHTML = `
      <div class="see-proj">
        <div class="projects-background" id="bg${i}"> 
          <div class="background">
            <h2 class="projects-heading">${project.title}</h2>
            ${project.title1 ? `<h2 class="Desktop-heading">${project.title1}</h2>` : ''}
            <p class="para">${project.description}</p>
            <div class="project-btn">
              <ul>${project.tags.map((tag) => `<li class="projects-btn">${tag}</li>`).join('')}</ul>
            </div>
          </div>  
        </div>
        <button class="see-project">${project.button}</button>
      </div>
    `;

    projectsGrid.innerHTML += projectHTML;
  }
}

const form = document.getElementById('validation');
const email = document.getElementById('email');
const lowerCaseRegex = /[A-Z]/;
form.addEventListener('submit', (e) => {
  if (lowerCaseRegex.test(email.value.trim())) {
    e.preventDefault();
    const errorMessage = document.querySelector('small');
    errorMessage.classList.remove('hidden');
  }
});