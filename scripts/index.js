const navbar = document.querySelector('#moving-navbar')
const logo = document.querySelector('#logo')

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
})