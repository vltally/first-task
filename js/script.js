// burger

const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.nav-list');

if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//scroll

const menuLinks = document.querySelectorAll('.nav-element[data-goto]');


if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
}
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('.nav').offsetHeight;


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


/* lazy load*/

const lazyImages = document.querySelectorAll("img[data-src]"); 
const windowHeight = document.documentElement.clientHeight;
let lazyImagesPositions = [];
if(lazyImages.length > 0){
    lazyImages.forEach(img =>{
        if(img.dataset.src){
            lazyImagesPositions.push(img.getBoundingClientRect().top + window.scrollY)
            
            lazyScrollCheck();
        }
    });
}
window.addEventListener("scroll", lazyScroll);
function lazyScroll(){
    if(document.querySelectorAll("img[data-src]").length > 0){
        lazyScrollCheck()
    }
}

function lazyScrollCheck(){
    let imgIndex = lazyImagesPositions.findIndex(
        item => window.scrollY > item - windowHeight
    );
    if(imgIndex >= 0){
        if(lazyImages[imgIndex].dataset.src){
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute('data-src');
        } 
        delete lazyImagesPositions[imgIndex];
    }
}