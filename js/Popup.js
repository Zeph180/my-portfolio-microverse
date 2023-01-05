const portfolio = document.getElementById('portfolio');

const projects = [
  {
    projectName: '5554 ffffff',
    projectExps: ['Backend Dev', '2015'],
    projectImage: { alt: 'jfffjfjfj', imgUrl: './assets/firstPjct.png' },
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techs: ['html', 'css', 'javascript'],
    projectLinks: ['https://kigozijosephsuubi.me', 'https://github.com/Zeph180/my-portfolio-microverse'],
    projectDescExt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

  },
  {
    projectName: 'djdjdj',
    projectExps: ['Backend Dev', '2015'],
    projectImage: { alt: 'jfffjfjfj', imgUrl: '../assets/firstPjct.png' },
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techs: ['html', 'css', 'javascript'],
    projectLinks: ['https://kigozijosephsuubi.me', 'https://github.com/Zeph180/my-portfolio-microverse'],
    projectDescExt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

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
