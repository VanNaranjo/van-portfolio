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


let header = document.querySelector('#header');
let isScrolled = false;
document.addEventListener('scroll', () => {
    console.log(header.getBoundingClientRect().top , window.scrollY)
    if (header.getBoundingClientRect().top <= window.scrollY) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

