const toggleMenu = document.querySelector('#toggle-menu');
const closeBtn = document.querySelector('#close-btn');
const menuItems = document.querySelectorAll('.menu-item');
// for-top-nav
function openNav() {
  document.querySelector('.mobile-menu').classList.add('active');
  toggleMenu.classList.add('invisible');
  document.body.style.overflow = 'hidden';
}

toggleMenu.addEventListener('click', openNav);

function closeNav() {
  document.querySelector('.mobile-menu').classList.remove('active');
  toggleMenu.classList.remove('invisible');
  document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeNav);

menuItems.forEach((item) => {
  item.addEventListener('click', closeNav);
});

// the developers
const developers = [
  {
    image: './assets/Jordan-Matter-image.jpeg',
    name: 'Name',
    developerFollowers: 'A brief introduction about the qualification and experience of Dev.',
    description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, ad!',
  },
  {
    image: './assets/Jordan-Matter-image.jpeg',
    name: 'Name',
    developerFollowers: 'A brief introduction about the qualification and experience of Dev.',
    description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, ad!',
  },
  {
    image: './assets/Jordan-Matter-image.jpeg',
    name: 'Name',
    developerFollowers: 'A brief introduction about the qualification and experience of Dev.',
    description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, ad!',
  },
  {
    image: './assets/Jordan-Matter-image.jpeg',
    name: 'Casey Neistat',
    developerFollowers: 'A brief introduction about the qualification and experience of Dev.',
    description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, ad!',
  },
  {
    image: './assets/Jordan-Matter-image.jpeg',
    name: 'Name',
    developerFollowers: 'A brief introduction about the qualification and experience of Dev.',
    description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, ad!',
  },
  {
    image: './assets/Jordan-Matter-image.jpeg',
    name: 'Name',
    developerFollowers: 'A brief introduction about the qualification and experience of Dev.',
    description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, ad!',
  },
];

const developersSection = document.querySelector('.developers');

function adddevelopers(n) {
  for (let i = 0; i < n; i += 1) {
    const developerCard = `
    <div class="developer">
      <div>
        <img src="./assets/tiles.svg" class="dev-bg-tiles" alt="">
        <img src='' alt="" class="developer-image">
      </div>
      <div class="developer-info">
        <h3 class="developer-name"></h3>
        <p class="developer-followers">
          
        </p><hr class="divider">
        <p class="developer-details">
        </p>
      </div>`;
    developersSection.innerHTML += developerCard;

    const {
      image,
      name,
      developerFollowers,
      description,
    } = developers[i];

    const img = document.querySelectorAll('.developer-image');
    const developerName = document.querySelectorAll('.developer-name');
    const followers = document.querySelectorAll('.developer-followers');
    const details = document.querySelectorAll('.developer-details');

    img[i].setAttribute('src', image);
    developerName[i].innerHTML = name;
    followers[i].innerHTML = developerFollowers;
    details[i].innerHTML = description;
  }
}

const showMore = document.querySelector('#more-less');

function btnValid() {
  if (showMore.innerHTML === 'More ') {
    return false;
  }
  return true;
}

function widthTeller() {
  if (btnValid() || window.innerWidth > 768) {
    developersSection.innerHTML = '';
    adddevelopers(developers.length);
  } else {
    developersSection.innerHTML = '';
    adddevelopers(2);
  }
}

function toggleSpeakers() {
  const btnValue = showMore.innerHTML;
  if (btnValue === 'More ') {
    showMore.innerHTML = 'Less ';
    document.getElementById('chevron').classList.replace('bi-arrow-down-circle-fill', 'bi-arrow-up-circle-fill');
    return widthTeller();
  }
  showMore.innerHTML = 'More ';
  document.getElementById('chevron').classList.replace('bi-arrow-down-circle-fill', 'bi-arrow-up-circle-fill');
  return widthTeller();
}

const showMoreBtn = document.querySelector('.show-more-less');
window.addEventListener('resize', () => {
  widthTeller();
});

showMoreBtn.addEventListener('click', () => {
  toggleSpeakers();
});

widthTeller();