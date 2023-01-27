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

//scroll

const menuLinks = document.querySelectorAll('.nav-element[data-goto]');

console.log(menuLinks);
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
}
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('.navbar-mobile').offsetHeight;

            if(iconMenu.classList.contains("_active")){
                document.body.classList.remove("_lock");
                iconMenu.classList.remove("_active");
                menuBody.classList.remove("_active");
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }