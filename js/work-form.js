'use strict';

'use strict';

const subscribeBtn = document.querySelector('.b-footer__text-button');
const subForm = document.querySelector('.subscription');
const blackout = document.querySelector('.blackout');
const workBtn = document.querySelector('#work-link');
const workForm = document.querySelector('.work');

const getSubForm = (btn) => {
    const clickedFormBtn = btm.id;
    if (clickedFormBtn === 'work-link') {
        workForm.style.display = 'block';
        blackout.style.display = 'block';
    } else
        subForm.style.display = 'block';
        blackout.style.display = 'block';
}

document.addEventListener('click', (e) => {
    let elem = e.target;
    let its_menu = elem == subForm || subForm.contains(elem);
    let its_btnMenu = elem == subscribeBtn;

    if (!its_menu && !its_btnMenu) {
        subForm.style.display = 'none';
        blackout.style.display = 'none';
    }
});

subscribeBtn.addEventListener('click', getSubForm);
workBtn.addEventListener('click', getSubForm);