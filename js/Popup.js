const portfolio = document.getElementById('portfolio');

const projects = [
  {
    projectName: 'Touch coin',
    projectExps: ['Frontend Dev', '2023'],
    projectImage: { alt: 'touch coin', imgUrl: './assets/touchcoindesk.png' },
    projectDesc: 'A application built with react to provide metrics about crypto coins.',
    techs: ['html', 'css', 'javascript'],
    projectLinks: ['https://touch-coin-zeph.netlify.app/', 'https://github.com/Zeph180/touch-coin'],
    projectDescExt: 'A application built with react to provide metrics about crypto coins',

  },
  {
    projectName: 'Space Travelers',
    projectExps: ['Frontend Dev', '2023'],
    projectImage: { alt: 'space travelers hub', imgUrl: '../assets/space.png' },
    projectDesc: 'A website built with React that allows users to book rockets to space. It also provides details about rockets, departure dates and prices..',
    techs: ['React', 'css', 'javascript'],
    projectLinks: ['https://space-travellers-hub-zeph-gathoni.netlify.app/', 'https://github.com/Zeph180/space-traveller-s-hub'],
    projectDescExt: 'A website built with React that allows users to book rockets to space. It also provides details about rockets, departure dates and prices.',

  },
  {
    projectName: 'Music Association',
    projectExps: ['Frontend Dev', '2023'],
    projectImage: { alt: 'space travelers hub', imgUrl: '../assets/umah.png' },
    projectDesc: 'A website built for Uganda Music Association. It shows up coming events, program schedule and a list of featured speakers.',
    techs: ['HTML', 'css', 'javascript'],
    projectLinks: ['https://uganda-music-association.netlify.app/', 'https://github.com/Zeph180/UmaDay22'],
    projectDescExt: 'A website built with html, CSS and JavaScript for Uganda Music Association. It shows up coming events, program schedule and a list of featured speakers.',

  },
  {
    projectName: 'Awesome Books',
    projectExps: ['Frontend Dev', '2023'],
    projectImage: { alt: 'awesome books screenshot', imgUrl: '../assets/awesome.png' },
    projectDesc: 'A book list app built with JavaScript. It allows users to add and remove books from a list.',
    techs: ['HTML', 'css', 'javascript'],
    projectLinks: ['https://uganda-music-association.netlify.app/', 'https://github.com/Zeph180/UmaDay22'],
    projectDescExt: 'A book list app built with JavaScript. It allows users to add and remove books from a list.',

  },
  {
    projectName: 'Great Farm',
    projectExps: ['Frontend Dev', '2023'],
    projectImage: { alt: 'great farm screenshot', imgUrl: '../assets/farm.png' },
    projectDesc: 'A website built with html, CSS and JavaScript for a local farm. It shows products, services and contact information.',
    techs: ['HTML', 'css', 'javascript'],
    projectLinks: ['https://great-farm.netlify.app/', 'https://github.com/Zeph180/UmaDay22'],
    projectDescExt: 'A website built with html, CSS and JavaScript for a local farm. It shows products, services and contact information.',

  },
];

function breakTitle(title, element) {
  const index = title.indexOf(' ');
  const strOne = title.substr(0, index);
  const strTwo = title.substr(index + 1);
  const formatTitle = `${strOne}<br /> ${strTwo}`;

  if (index !== 0) {
    element.classList.add('lng-wrk-card');
  }
  return formatTitle;
}

projects.forEach((project) => {
  const temp = document.createElement('div');
  const name = project.projectName;
  temp.classList.add('work-card');
  temp.innerHTML = `
    <div class="work-image-cont">
        <img src=${project.projectImage.imgUrl} alt=${project.projectImage.alt} >
    </div>

      <div class="over-pop">
      <div id="popup" class="popup">
      <div class="project-cont">
        <div class="popup-header">
          <h6 class="project-title">${project.projectName}</h6>
          <img class="close-popup-btn" src="./assets/closePopupBtn.svg" alt="close button">
        </div>
        <div class="work-list">
        <p class="canopy">CANOPY</p>
        ${project.projectExps.map((projectExp) => `<p class="work-list-item">&#8226; ${projectExp}</p>`)}
        </div>
      </div>

    <div class="popup-image-cont">
        <img src=${project.projectImage.imgUrl} alt=${project.projectImage.alt}>
    </div>

    <div class="project-cont popup-cont">
          <p class="popup-desc">
           ${project.projectDescExt}
          </p>

        <ul>
        ${project.techs.map((tech) => `<li> ${tech} </li>`)}
        </ul>
        <hr>
    </div>
    <div class="popup-btn-cont">
      <button type="button" class="btn"><a href=${project.projectLinks[0]}>See live <img src="./assets/seeLiveBtn.svg" alt=""></a></button>
      <button type="button" class="btn"><a href=${project.projectLinks[1]}>See source <img src="./assets/GitHub.svg" alt=""><a/></button>
    </div>
  </div>
      </div>

    <div class="project-cont">
      <h6 class="project-title">${breakTitle(name, temp)}</h6>
      <div class="work-list">
        <p class="canopy">CANOPY</p>
        ${project.projectExps.map((projectExp) => `<p class="work-list-item">&#8226; ${projectExp}</p>`)}
        </div>
        <p class="project-desc">
          ${project.projectDesc}
        </p>
        <ul>
          ${project.techs.map((tech) => `<li> ${tech} </li>`)}
        </ul>
        <button id="see-project" type="button" class="btn see-project">See project</button>
    </div>
`;
  portfolio.append(temp);
});

const seeProjectBtns = document.querySelectorAll('.see-project');
const closePopupBtns = document.querySelectorAll('.close-popup-btn');
const overPops = document.querySelectorAll('.over-pop');
const navBar = document.querySelector('.nav');
const navHolder = navBar;

for (let i = 0; i < overPops.length; i += 1) {
  for (let j = 0; j < seeProjectBtns.length; j += 1) {
    seeProjectBtns[i].onclick = function showPopup() {
      overPops[i].style.visibility = 'visible';
      overPops[i].style.position = 'fixed';
      overPops[i].classList.add('popup-active');
      navHolder.style.visibility = 'hidden';
    };
    closePopupBtns[i].onclick = function closePopup() {
      overPops[i].style.visibility = 'hidden';
      overPops[i].classList.remove('popup-active');
      navHolder.style.visibility = 'visible';
    };
  }
}
