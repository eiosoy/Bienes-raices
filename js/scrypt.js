const toggleMenu = document.querySelector(".toggle-menu");
const navegacion = document.querySelector(".navegacion");

toggleMenu.addEventListener('click', () => {
    navegacion.classList.toggle('navegacion--show')
})