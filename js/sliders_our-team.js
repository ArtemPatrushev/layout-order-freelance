'use strict';

const swiperManagers = new Swiper('.manager-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 10,
    grabCursor: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    slidesPerGroup: 1,
    pagination: {
        el: '.pag6',
        type: 'bullets',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true
    }
});

const swiperManagersOther = new Swiper('.managers__persons-slider1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 10,
    grabCursor: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    slidesPerGroup: 1,
    pagination: {
        el: '.pag7',
        type: 'bullets',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true
    }
});