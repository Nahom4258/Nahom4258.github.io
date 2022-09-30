const toggleDarkBtn = document.querySelector('#toggle-dark-mode-btn')
const htmlTag = document.getElementsByTagName('html')[0]

toggleDarkBtn.addEventListener('click', () => {
    htmlTag.classList.toggle('dark')
})