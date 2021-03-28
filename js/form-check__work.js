'use strict';

const checkBlock = document.querySelectorAll('.user-form__check__checked-block');
const checkRoundChecked = document.querySelectorAll('.user-form__check__on');

const handleClick = (clickEventBtn) => {
    const clickedBtn = clickEventBtn.target;
    const btnId = clickedBtn.id;
    getChecked(btnId);
}

const getChecked = (btnId) => {
    let firstChecked = document.querySelector('#first-check-on');
    let secondChecked = document.querySelector('#second-check-on');
    let thirdChecked = document.querySelector('#third-check-on');
    if (btnId === 'first-check') {
        if (firstChecked.style.display === 'none') {
            firstChecked.style.display = 'block';
        } else
            firstChecked.style.display = 'none';

    } else if (btnId === 'second-check') {
        if (secondChecked.style.display === 'none') {
            secondChecked.style.display = 'block';
        } else
            secondChecked.style.display = 'none';
    } else if (btnId === 'third-check') {
        if (thirdChecked.style.display === 'none') {
            thirdChecked.style.display = 'block';
        } else
            thirdChecked.style.display = 'none';
    }
}

checkBlock.forEach(elem => {
    elem.addEventListener('click', handleClick);
});