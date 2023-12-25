function toggleNav() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('open');

    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('active');
}

function closeNav() {
    const navList = document.querySelector('.nav-list');
    navList.classList.remove('open');

    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.remove('active');
}
