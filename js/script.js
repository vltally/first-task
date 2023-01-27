// burger

const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.nav-mobile');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}