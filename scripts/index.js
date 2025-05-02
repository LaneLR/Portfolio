const navbar = document.querySelector('#moving-navbar');
const logo = document.querySelector('#logo');
const contactMeBtn = document.querySelector('#contact-me')
const exitContactMe = document.querySelector('#exit-contact')
const contactMenu = document.querySelector('#contact-menu')

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
})

contactMeBtn.addEventListener('click', () => {
    contactMenu.classList.add('menu-pop')
})

exitContactMe.addEventListener('click', () => {
    contactMenu.classList.remove('menu-pop')
})