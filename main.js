// active class navigation menu
let menuButtons = document.querySelectorAll('.navigation-link');

// loop through all navigation link 
menuButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        menuButtons.forEach((btn)=> {
            btn.classList.remove('active');
            this.classList.add('active');
        });
    });
});

// image sliders / carousel
let slideIndex = 0;

function controller(x) {
    slideIndex = slideIndex + x;
    slideShow(slideIndex);
}   

slideShow(slideIndex);

function slideShow(num) {
    const slides = document.getElementsByClassName('slider-box');

    if(num == slides.length) {
        slideIndex = 0;
        num = 0;
    } else if (num < 0) {
        slideIndex = slides.length - 1;
        num = slides.length - 1;
    }

    for(let i of slides) {
        i.style.display = 'none';
    }

    slides[num].style.display = 'block';
}


