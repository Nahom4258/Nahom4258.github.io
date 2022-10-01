const toggleDarkBtn = document.querySelector('#toggle-dark-mode-btn')
const htmlTag = document.getElementsByTagName('html')[0]

toggleDarkBtn.addEventListener('click', () => {
    htmlTag.classList.toggle('dark')
})

const responsiveMenuBtn = document.querySelector('#responsive-nav-menu-btn')
const navMenuContainer = document.querySelector('#nav-items-container')

responsiveMenuBtn.addEventListener('click', () => {
    navMenuContainer.classList.toggle('hidden')
})
