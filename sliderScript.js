VANTA.NET({
    el: "#animate-Bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: "#f5efeb",
    backgroundColor: "#030512",
    maxDistance: 30.00,
    spacing: 30.00
});

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