const dropDownBtn = document.querySelector('.drop-btn');


dropDownBtn.addEventListener('click', ()=> {
    let dropDown = document.querySelector('.dropdown');

    if (dropDown.style.display == 'none') {
        dropDown.style.display == 'block';
    } else {
        dropDown.style.display == 'none';
    }
});
