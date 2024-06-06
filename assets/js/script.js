document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-gallery img');

    const revealImage = (image) => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const imageTop = image.getBoundingClientRect().top + scrollTop;
        const imageHeight = image.height;

        if (scrollTop > imageTop + imageHeight - windowHeight) {
            image.classList.add('visible');
        }
    };

    const checkImages = () => {
        images.forEach(image => revealImage(image));
    };

    window.addEventListener('scroll', checkImages);
    window.addEventListener('resize', checkImages);
    checkImages();
});

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}