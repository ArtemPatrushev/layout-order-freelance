'use strict';

let isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (!isScrolling) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);
let aboutBlock = document.querySelector('.additional-services__content');


function scrolling(event) {
    [...aboutBlock.children].forEach((elem, i) => {
        if (isPartiallyVisible(elem)) {
            setTimeout(() => {
                // elem.classList.add("scale-in-center");
                elem.style.opacity = '1';
            }, 400*i);
        }
    });
}

function isPartiallyVisible(elem) {
    let elementBoundary = elem.getBoundingClientRect();
    let top = elementBoundary.top;
    // let bottom = elementBoundary.bottom;
    // let height = elementBoundary.height;

    return top <= window.innerHeight;
    // return ((top + height >= -200) && (height + window.innerHeight >= bottom));
}