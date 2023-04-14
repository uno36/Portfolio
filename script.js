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
    title: 'My Recent Works',
  },
  {
    img1: 'images/pic.png',
    img2: 'https://example.com/image2.jpg',
    title: 'Multi-Post Stories',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    buttons: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    tags: ['see project'],
  },
  {
    title: 'Profesional Art Printing Data',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    buttons: ['HTML', 'Bootstrap', 'Ruby'],
  },

];

const works = document.getElementById('works');

projects.forEach((project, index) => {
  const div = document.createElement('div');

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
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  if (index === 0) {
    div.className = 'card-1';
    div.innerHTML = `
    <div class="flex">
            <h1 class="recent">${project.title}</h1>
            <hr class="hor" >
        </div>
    `;
  } else if (index === 1) {
    div.className = 'card-2';
    div.innerHTML = `
    <div class="grid">
      <div class="gymnast"></div>
      <div class="text-container">
        <h2 class="recent1">${project.title}</h2>
        <p class="recentp">${project.text}</p>
      <div class="languages">
          <ul>
            <li><button class="works-btn">CSS</button>
            <li><button class="works-btn">HTML</button>
            <li><button class="works-btn">Bootstrap</button>
            <li><button class="works-btn">Ruby</button>
            </ul>
        </div>
        <button class="see" data-modal-target="#modal" >${project.tags}</button>
      </div>
    </div>
    <div class="grid-projects">
            <div class="see-proj">
             <div class="projects-background" id="whitebg"> 
                <div class="background">
                <h2 >${project.title}</h2>
                <p class="para">${project.text}</p>
                <div class="project-btn">
                    <ul class="btn-ul">
                        <li><button class="projects-btn" type="button">HTML</button></li>
                        <li><button class="projects-btn" type="button">Bootstrap</button></li>
                        <li><button class="projects-btn" type="button">Ruby</button></li>
                    </ul>
                </div>
            </div>
            <button data-modal-target="#modal" class="sees-project" id="see-proj-btn">See project</button>
       </div>
        </div>

        <div class="see-proj">
        <div class="projects-background" id="bg2"> 
            <div class="background">
           <h2 class="projects-heading">Professional Art <br>
            printing Data</h2>
           <h2 class="Desktop-heading">Data Dashboard Healthcare</h2>
           <p class="para">A daily selection of privately <br> personalized reads; no accounts or <br> sign-ups required. Has been the <br> industry's standard.</p>
           <div class="project-btn">
               <ul>
                   <li><button class="projects-btn" type="button">HTML</button></li>
                   <li><button class="projects-btn" type="button">Bootstrap</button></li>
                   <li><button class="projects-btn" type="button">Ruby</button></li>
               </ul>
           </div>
   </div>  
         
        </div>
        <button data-modal-target="#modal" class="see-project">See project</button>
   </div>
   <div class="see-proj">
        <div class="projects-background" id="bg3"> 
           <div class="background">
            <h2 class="projects-heading">Professional Art <br> printing Data</h2>
            <h2 class="heading3" >website Portfolio</h2>
           <p class="para">A daily selection of privately <br> personalized reads; no accounts or <br> sign-ups required. Has been the <br> industry's standard.</p>
           <div class="project-btn">
               <ul>
                   <li><button class="projects-btn" type="button">HTML</button></li>
                   <li><button class="projects-btn" type="button">Bootstrap</button></li>
                   <li><button class="projects-btn" type="button">Ruby</button></li>
               </ul>
           </div>
   </div>  
         
        </div>
        <button data-modal-target="#modal" class="see-project">See project</button>
   </div>
   <div class="see-proj">
    <div class="projects-background" id="bg4"> 
       <div class="background">
        <h2 class="projects-heading">Professional Art <br>printing Data</h2>
        <h2 class="Desktop-heading">Profesional Art Printing Data More</h2>
       <p class="para">A daily selection of privately <br> personalized reads; no accounts or <br> sign-ups required. Has been the <br> industry's standard.</p>
       <div class="project-btn">
           <ul>
               <li><button class="projects-btn" type="button">HTML</button></li>
               <li><button class="projects-btn" type="button">Bootstrap</button></li>
               <li><button class="projects-btn" type="button">Ruby</button></li>
           </ul>
       </div>
</div>  
     
    </div>
    <button data-modal-target="#modal" class="see-project">See project</button>
</div>
<div class="see-proj">
    <div class="projects-background" id="bg5" > 
       <div class="background">
        <h2 class="projects-heading">Professional Art <br> printing Data</h2>
        <h2 class="Desktop-heading">Data Dashboard Healthcare</h2>
       <p class="para">A daily selection of privately <br> personalized reads; no accounts or <br> sign-ups required. Has been the <br> industry's standard.</p>
       <div class="project-btn">
           <ul>
               <li><button class="projects-btn" type="button">HTML</button></li>
               <li><button class="projects-btn" type="button">Bootstrap</button></li>
               <li><button class="projects-btn" type="button">Ruby</button></li>
           </ul>
       </div>
</div>  
     
    </div>
    <button data-modal-target="#modal" class="see-project">See project</button>
</div>


<div class="see-proj">
    <div class="projects-background" id="bg6"> 
       <div class="background">
        <h2 class="projects-heading">Professional Art <br> printing Data</h2>
            <h2 class="heading3" >website Portfolio</h2>
       <p class="para">A daily selection of privately <br> personalized reads; no accounts or <br> sign-ups required. Has been the <br> industry's standard.</p>
       <div class="project-btn">
           <ul>
               <li><button class="projects-btn" type="button">HTML</button></li>
               <li><button class="projects-btn" type="button">Bootstrap</button></li>
               <li><button class="projects-btn" type="button">Ruby</button></li>
           </ul>
       </div>
    </div> 
    </div>
</div>
  <button data-modal-target="#modal" class="see-project">See project</button>                    
    </div>       
    
       
  
    `;
  }
  works.appendChild(div);
});
