'use strick';

const swiper1 = new Swiper('.slider1', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.pag1',
    },
    navigation: {
        nextEl: '.next1',
        prevEl: '.prev1',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 1,
        }
    }
});

const swiper2 = new Swiper('.slider2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.pag2',
    },
    navigation: {
        nextEl: '.next2',
        prevEl: '.prev2',
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 1,
        }
    }
});

let link = document.querySelectorAll('.link');
let popUp = document.querySelector('.b-pop-up');
let close = document.querySelector('.b-pop-up__close');
link.forEach(element => linkUp(element));
function linkUp(item) {
    item.addEventListener('click', function (event) {
        popUp.style.display = 'flex';
    });
}
close.addEventListener('click', function (event) {
    popUp.style.display = 'none';
});

const burgerMenu = document.querySelector('.b-header__burger-menu');
const burgerButton = document.querySelector('.b-header__button-burger');

burgerButton.addEventListener('click', function () {
    burgerMenu.classList.toggle('display_block');
})

var details = document.querySelectorAll(".b-city__details");
details[0].setAttribute('open', '');
for (i = 0; i < details.length; i++) {
    details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
    if (!event.target.open) return;
    var details = event.target.parentNode.children;
    for (i = 0; i < details.length; i++) {
        if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
        details[i].removeAttribute("open");
    }
}