const artistsData = [
  {
    id: 1,
    name: 'Asake',
    title: 'Joha Master',
    about:
      'Ahmed Ololade, known professionally as Asake, is a Nigerian Afrobeats singer and songwriter. He is signed to YBNL Nation and Empire Distribution. His stage name pays homage to his mother, whose first name is Asake.',
    imgUrl: './images/asake.jpg',
  },
  {
    id: 2,
    name: 'P Square',
    title: 'Rude Boy',
    about:
      'P-Square is a Nigerian musical duo consisting of the twin brothers Peter Okoye and Paul Okoye. They produced and released their albums through Square Records. In December 2011, they signed a record deal with Akons Konvict Muzik label.',
    imgUrl: './images/p-square.jpeg',
  },
  {
    id: 3,
    name: 'Burna Boy',
    title: 'The Breakfast Cronner',
    about:
      'Damini Ebunoluwa Ogulu MFR, known professionally as Burna Boy, is a Nigerian singer, songwriter and record producer. He rose to stardom in 2012 after releasing "Like to Party", the lead single from his debut studio album L.I.F.E.',
    imgUrl: './images/burna.jpg',
  },
  {
    id: 4,
    name: 'Kizz Daniel',
    title: 'Buga , RTID',
    about:
      'Oluwatobiloba Daniel Anidugbe, better known by his stage name Kizz Daniel, is a Nigerian singer and songwriter. He rose to fame in 2014 with his debut single, "Woju".',
    imgUrl: './images/vadoo.jpeg',
  },
  {
    id: 5,
    name: 'Ayra Star',
    title: 'Sability Crooner',
    about:
      'Oyinkansola Sarah Aderibigbe, known professionally as Ayra Starr, is a Beninese-born Nigerian singer. She began a fashion career at the age of 16 with Quove Model Management before deciding to pursue a career in music.',
    imgUrl: './images/ayra.jpeg',
  },
  {
    id: 6,
    name: 'Buju',
    title: 'Gwagawalada',
    about:
      'Daniel Benson, known professionally as Bnxn and formerly known as Buju, is a Nigerian Afro-fusion singer, songwriter and record producer',
    imgUrl: './images/p-square.jpeg',
  },
];

// Get DOM elements
const menuIcon = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const overlay = document.querySelector('#overlay');
const guestArtist = document.getElementById('guest');
const viewAllBtn = document.querySelector('.see-more');
const hideBtn = document.querySelector('.see-less');
let browserWidth;

// Event listener
menuIcon.addEventListener('click', () => {
  overlay.style.display = 'block';
  menuIcon.style.visibility = 'hidden';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  menuIcon.style.visibility = 'visible';
});

// Toggle to show and hide guest performance list
if (viewAllBtn) {
  viewAllBtn.addEventListener('click', () => {
    const hide = document.querySelectorAll('.hide');
    for (let i = 0; i < hide.length; i += 1) {
      hide[i].style.display = 'flex';
    }
    viewAllBtn.style.display = 'none';
    hideBtn.style.display = 'block';
  });
}

if (hideBtn) {
  hideBtn.addEventListener('click', () => {
    const show = document.querySelectorAll('.hide');
    for (let i = 0; i < show.length; i += 1) {
      show[i].style.display = 'none';
    }
    hideBtn.style.display = 'none';
    viewAllBtn.style.display = 'block';
  });
}

// check screen size on load to display list
if (window.innerWidth !== undefined) {
  browserWidth = window.innerWidth;
} else {
  browserWidth = document.documentElement.clientWidth;
}

// Loop through dummy data to make web page page dynamic
if (guestArtist) {
  for (let i = 0; i < artistsData.length; i += 1) {
    // HTML Template for card in the guest section
    const cardSection = `
        <div class="card-bg-img">
            <div class="card-img">
                <img src="${artistsData[i].imgUrl}" alt="guest">
            </div>
        </div>
        <div class="card-details">
            <h3 class="card-name ft-24">${artistsData[i].name}</h3>
            <div class="card-title">${artistsData[i].title}</div>
            <hr class="card-breaker">
            <div class="card-info">
                <p>
                  ${artistsData[i].about}
                </p>
            </div>
        </div>
  `;
    // Create html tags and Append to the project section
    const card = document.createElement('div');
    if ((i >= 2) && (browserWidth < 768)) {
      card.classList.add('hide');
      card.innerHTML = cardSection;
      guestArtist.appendChild(card);
    } else {
      card.classList.add('card', 'd-flex');
      card.innerHTML = cardSection;
      guestArtist.appendChild(card);
    }
  }
}

// Load data dynamically on different screen
window.addEventListener('resize', () => {
  let newBrowserWidth;
  // Loop through dummy data to make web page page dynamic
  if (guestArtist) {
    if (window.innerWidth !== undefined) {
      newBrowserWidth = window.innerWidth;
    } else {
      newBrowserWidth = document.documentElement.clientWidth;
    }

    while (guestArtist.hasChildNodes()) {
      guestArtist.removeChild(guestArtist.firstChild);
    }
    for (let i = 0; i < artistsData.length; i += 1) {
      const cardSection = `
        <div class="card-bg-img">
            <div class="card-img">
                <img src="${artistsData[i].imgUrl}" alt="guest">
            </div>
        </div>
        <div class="card-details">
            <h3 class="card-name ft-24">${artistsData[i].name}</h3>
            <div class="card-title">${artistsData[i].title}</div>
            <hr class="card-breaker">
            <div class="card-info">
                <p>
                  ${artistsData[i].about}
                </p>
            </div>
        </div>
  `;
      // Create html tags and Append to the project section
      const card = document.createElement('div');
      // const way = newBrowserWidth;
      if ((newBrowserWidth < 768) && (i >= 2)) {
        card.classList.add('hide');
        card.innerHTML = cardSection;
        guestArtist.appendChild(card);
      } else {
        card.classList.add('card', 'd-flex');
        card.innerHTML = cardSection;
        guestArtist.appendChild(card);
      }
    }
  }
});
