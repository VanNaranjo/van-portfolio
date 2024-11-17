const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    changeSlide(currentIndex + 1);
});

document.getElementById('prev').addEventListener('click', () => {
    changeSlide(currentIndex - 1);
});

function changeSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}

let header = document.querySelector('#header');
let headerPos = header.getBoundingClientRect().top;
document.addEventListener('scroll', () => {
    let windowPos = window.scrollY;
    if (windowPos >= headerPos && !header.classList.contains('scrolled')) {
        header.classList.add("scrolled");
    } else if( windowPos <= headerPos && header.classList.contains('scrolled')) {
        header.classList.remove("scrolled");
    }
});