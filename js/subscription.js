'use strict';

const subscribeBtn = document.querySelector('.b-footer__text-button');
const subForm = document.querySelector('.subscription');
const blackout = document.querySelector('.blackout');
const workBtn = document.querySelector('#work-link');
const workForm = document.querySelector('.work');


const getSubForm = (formBtnId) => {
    blackout.style.display = 'block';
    if (formBtnId === 'work-link') {
        workForm.style.display = 'block';
    } else
        subForm.style.display = 'block';
}

document.addEventListener('click', (e) => {
    let elem = e.target;
    let its_menu = elem == subForm || subForm.contains(elem);
    let yet_menu = elem == workForm || workForm.contains(elem);
    let its_btnMenu = elem == subscribeBtn;
    let yet_btnMenu = elem == workBtn;

    if (!its_menu && !its_btnMenu && !yet_btnMenu && !yet_menu) {
        subForm.style.display = 'none';
        blackout.style.display = 'none';
        workForm.style.display = 'none';
    }
});

subscribeBtn.addEventListener('click', getSubForm);
workBtn.addEventListener('click', (e) => {
    getSubForm(e.target.getAttribute('id'));
});