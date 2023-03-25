const artistsData = [
  {
    id: 1,
    name: 'P Square',
    title: 'Lopre sum fantiel lovrem datu',
    about:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    imgUrl: './images/p-square.jpeg',
  },
  {
    id: 2,
    name: 'P Square',
    title: 'Lopre sum fantiel lovrem datu',
    about:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    imgUrl: './images/p-square.jpeg',
  },
  {
    id: 3,
    name: 'P Square',
    title: 'Lopre sum fantiel lovrem datu',
    about:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    imgUrl: './images/p-square.jpeg',
  },
  {
    id: 4,
    name: 'P Square',
    title: 'Lopre sum fantiel lovrem datu',
    about:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    imgUrl: './images/p-square.jpeg',
  },
  {
    id: 5,
    name: 'P Square',
    title: 'Lopre sum fantiel lovrem datu',
    about:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    imgUrl: './images/p-square.jpeg',
  },
  {
    id: 6,
    name: 'P Square',
    title: 'Lopre sum fantiel lovrem datu',
    about:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
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
    }
    card.classList.add('card');
    card.innerHTML = cardSection;
    guestArtist.appendChild(card);
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
      }
      card.classList.add('card');
      card.innerHTML = cardSection;
      guestArtist.appendChild(card);
    }
  }
});
