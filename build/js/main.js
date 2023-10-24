const toggleButton = document.getElementById('toggle-btn')
const navbarLinks = document.getElementById("navbar-links")
const navbarIcon = document.getElementsByClassName("navbarIcon")

toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('hidden')
    navbarIcon[0].classList.toggle('hidden')
    navbarIcon[1].classList.toggle('hidden')
})