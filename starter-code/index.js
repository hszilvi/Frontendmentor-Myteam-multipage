
// hamburger menu for mobile view
const hamburgerMenuBtn = document.querySelector('.hamburger__dropdown');
const hamburgerMenuDropdown = document.querySelector('.primary-navigation');
const overlay = document.querySelector('.overlay');
const viewWidth = window.innerWidth;

const homeBtn = document.querySelectorAll('.active-home');
const homeSite = document.querySelector('#home');
const aboutBtn = document.querySelectorAll('.active-about');
const aboutSite = document.querySelector('#about');

const cardOpenBtn = document.querySelectorAll('.card-open-button');

hamburgerMenuBtn.addEventListener('click', () => {
    if (!hamburgerMenuBtn.classList.contains('open')) {     
        hamburgerMenuBtn.classList.add('open');
        hamburgerMenuDropdown.style.display = 'block';
        overlay.style.display = 'block';
    } else {
        hamburgerMenuBtn.classList.remove('open');
        hamburgerMenuDropdown.style.display = 'none';
        overlay.style.display = 'none';
    } 
});
// opens contact site
const contactBtn = document.querySelectorAll('.button');
contactBtn.forEach((item) => {
    item.addEventListener('click', () => {
        document.location = 'contact.html';
    }) 
});

// manipulate card content on about site
cardOpenBtn.forEach((item) => {
    item.addEventListener('click', () => {
if (!item.classList.contains('active')) {
    item.previousElementSibling.style.display = 'block';
    item.previousElementSibling.previousElementSibling.style.display = 'none';
} else {
    item.previousElementSibling.style.display = 'none';
    item.previousElementSibling.previousElementSibling.style.display = 'block';  
}
        // turn the + button to x
        item.classList.toggle('active');
    });
});



