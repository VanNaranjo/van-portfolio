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
