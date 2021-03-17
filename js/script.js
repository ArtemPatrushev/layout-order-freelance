'use strict';

// Опредиление города и работат с pop-up
window.onload = function () {
    const city = document.querySelectorAll(".user-city");
    city.forEach(city => city.innerText = `${ymaps.geolocation.city}`)
}

const popUp = document.querySelector('.drop-popup');
const cityCatalog = document.querySelector('.drop-city');

const popUpMob = document.querySelector('.drop-popup.mobile');
const cityCatalogMob = document.querySelector('.drop-city.mobile');

function popUpWorks() {
    popUp.classList.add('activ-pop');
}
setTimeout(popUpWorks, 1000);

function popUpWorksmob() {
    popUpMob.classList.add('activ-pop');
}
setTimeout(popUpWorksmob, 1000);

const closePop = document.querySelectorAll(".close-pop");
const dropCity = document.querySelector(".drop-city");
const dropCityMob = document.querySelector(".drop-city.mobile");
const openCityMain = document.querySelector(".city-href");
const openCityMainMob = document.querySelector(".city-href.mob");
const openCityMainPop = document.querySelector(".open-city");
const openCityPop = document.querySelector(".open-city.mob");
// Кнопка закрытия окон с городами
const closeCityXBtn = document.querySelectorAll(".close-city");

//Открытие городов. Нажатие на ссылку мобилка
openCityMainMob.addEventListener('click', () => {
    dropCityMob.classList.toggle('activ-city');
    if (dropCityMob.classList[2] == 'activ-city') {
        popUpMob.classList.remove('activ-pop');
    }
});

//Открытие городов. Нажатие на кнопку в pop-up мобилка
openCityPop.addEventListener('click', () => {
    dropCityMob.classList.toggle('activ-city');
    popUpMob.classList.remove('activ-pop');
});

//Открытие городов. Нажатие на ссылку
openCityMain.addEventListener('click', () => {
    dropCity.classList.toggle('activ-city');
    if (dropCity.classList[1] == 'activ-city') {
        popUp.classList.remove('activ-pop');
    }

});
//Открытие городов. Нажатие на кнопку в pop-up 
openCityMainPop.addEventListener('click', () => {
    dropCity.classList.toggle('activ-city');
    popUp.classList.remove('activ-pop');
});

// Закрытие всех Городов по кнопке Х
closeCityXBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        dropCity.classList.remove('activ-city');
        dropCityMob.classList.remove('activ-city');
    })
});


// Закрытие всех pop-up
closePop.forEach(btn => {
    btn.addEventListener('click', () => {
        popUp.classList.remove('activ-pop');
        popUpMob.classList.remove('activ-pop');
    })
});



// Кнопки меню и работа с ними

const mask = document.querySelector('.masc');

function height(arg) {
    mask.style.height = String(arg) + 'px';
};


let buttonOther = document.querySelector('#burger');
let buttonOtherMobile = document.querySelector('#burger-mobile');
let buttonStock = document.querySelector('#shares');
let buttonTours = document.querySelector('#tur');
let buttonPopular = document.querySelector('#popular');
let buttonTourists = document.querySelector('#turests');
let buttonCompany = document.querySelector('#about');

let blockOther = document.querySelector('.burger-menu-drop');
let blockOtherMobile = document.querySelector('.burger-menu-drop-mobile');
let blockStock = document.querySelector('.item5-drop');
let blockTours = document.querySelector('.tur-drop');
let blockPopular = document.querySelector('.popular-drop');
let blockTourists = document.querySelector('.turests-drop');
let blockCompany = document.querySelector('.about-company-drop');

let arrow2 = document.querySelector('.arrow1');
let arrow3 = document.querySelector('.arrow2');
let arrow4 = document.querySelector('.arrow3');
let arrow5 = document.querySelector('.arrow4');
let arrow6 = document.querySelector('.arrow5');


buttonOtherMobile.addEventListener('click', function (event) {
    blockOtherMobile.classList.toggle('activeat');
    if (blockOtherMobile.classList[1]) {
        height(blockOtherMobile.clientHeight)
    } else {
        height(0)
    }
});



buttonOther.addEventListener('click', function (event) {
    blockOther.classList.toggle('activeat');
    blockStock.classList.remove('activeat');
    blockTours.classList.remove('activeat');
    blockPopular.classList.remove('activeat');
    blockTourists.classList.remove('activeat');
    blockCompany.classList.remove('activeat');
    arrow2.classList.remove('transform');
    arrow3.classList.remove('transform');
    arrow4.classList.remove('transform');
    arrow5.classList.remove('transform');
    arrow6.classList.remove('transform');
    if (blockOther.classList[1]) {
        height(blockOther.clientHeight)
    } else {
        height(0)
    }

});

buttonStock.addEventListener('click', function (event) {
    blockOther.classList.remove('activeat');
    blockStock.classList.toggle('activeat');
    blockTours.classList.remove('activeat');
    blockPopular.classList.remove('activeat');
    blockTourists.classList.remove('activeat');
    blockCompany.classList.remove('activeat');
    arrow2.classList.toggle('transform');
    arrow3.classList.remove('transform');
    arrow4.classList.remove('transform');
    arrow5.classList.remove('transform');
    arrow6.classList.remove('transform');
    if (blockStock.classList[1]) {
        height(blockStock.clientHeight)
    } else {
        height(0)
    }
});

buttonTours.addEventListener('click', function (event) {
    blockOther.classList.remove('activeat');
    blockStock.classList.remove('activeat');
    blockTours.classList.toggle('activeat');
    blockPopular.classList.remove('activeat');
    blockTourists.classList.remove('activeat');
    blockCompany.classList.remove('activeat');
    arrow2.classList.remove('transform');
    arrow3.classList.toggle('transform');
    arrow4.classList.remove('transform');
    arrow5.classList.remove('transform');
    arrow6.classList.remove('transform');
    if (blockTours.classList[1]) {
        height(blockTours.clientHeight)
    } else {
        height(0)
    }
});

buttonPopular.addEventListener('click', function (event) {
    blockOther.classList.remove('activeat');
    blockStock.classList.remove('activeat');
    blockTours.classList.remove('activeat');
    blockPopular.classList.toggle('activeat');
    blockTourists.classList.remove('activeat');
    blockCompany.classList.remove('activeat');
    arrow2.classList.remove('transform');
    arrow3.classList.remove('transform');
    arrow4.classList.toggle('transform');
    arrow5.classList.remove('transform');
    arrow6.classList.remove('transform');
    if (blockPopular.classList[1]) {
        height(blockPopular.clientHeight)
    } else {
        height(0)
    }
});

buttonTourists.addEventListener('click', function (event) {
    blockOther.classList.remove('activeat');
    blockStock.classList.remove('activeat');
    blockTours.classList.remove('activeat');
    blockPopular.classList.remove('activeat');
    blockTourists.classList.toggle('activeat');
    blockCompany.classList.remove('activeat');
    arrow2.classList.remove('transform');
    arrow3.classList.remove('transform');
    arrow4.classList.remove('transform');
    arrow5.classList.toggle('transform');
    arrow6.classList.remove('transform');
    if (blockTourists.classList[1]) {
        height(blockTourists.clientHeight)
    } else {
        height(0)
    }
});

buttonCompany.addEventListener('click', function (event) {
    blockOther.classList.remove('activeat');
    blockStock.classList.remove('activeat');
    blockTours.classList.remove('activeat');
    blockPopular.classList.remove('activeat');
    blockTourists.classList.remove('activeat');
    blockCompany.classList.toggle('activeat');
    arrow2.classList.remove('transform');
    arrow3.classList.remove('transform');
    arrow4.classList.remove('transform');
    arrow5.classList.remove('transform');
    arrow6.classList.toggle('transform');
    if (blockCompany.classList[1]) {
        height(blockCompany.clientHeight)
    } else {
        height(0)
    }
});