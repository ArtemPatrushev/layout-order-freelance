'use strict';

const swiper1 = new Swiper('.slider1', {
    direction: 'horizontal',
    grabCursor: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    loop: true,
    slidesPerView: 3,
    initialSlide: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    pagination: {
        el: '.pag1',
        clickable: true,
    },
    navigation: {
        nextEl: '.next1',
        prevEl: '.prev1',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 3,
        }
    }
});

const swiper2 = new Swiper('.slider2', {
    direction: 'horizontal',
    loop: false,
    autoHeight: false,
    slidesPerGroup: 1,
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 30,
    grabCursor: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    pagination: {
        el: '.pag2',
        clickable: true,
    },
    navigation: {
        nextEl: '.next2',
        prevEl: '.prev2',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    breakpoints: {
        10: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1361: {
            spaceBetween: 30
        }
    }
});

const swiper3 = new Swiper('.slider3', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 7,
    spaceBetween: 10,
    initialSlide: 3,
    slidesPerGroup: 1,
    centeredSlides: true,
    grabCursor: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    navigation: {
        nextEl: '.next3',
        prevEl: '.prev3',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
        },
        770
        : {
            slidesPerView: 5,
        },
        1282: {
            slidesPerView: 7
        }
    }
});

const swiper4 = new Swiper('.slider-additional', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 10,
    grabCursor: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    slidesPerGroup: 2,
    pagination: {
        el: '.pag4',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerColumn: 3,
            slidesPerGroup: 1,
            spaceBetween: 17,
        },
        479: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
        }
    }
});

const swiper5 = new Swiper('.tour-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 1,
    grabCursor: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    slidesPerGroup: 1,
    pagination: {
        el: '.pag5',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
})