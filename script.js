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
    backgroundColor: "#0e1527",
    maxDistance: 30.00,
    spacing: 30.00
});


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

let skillBars = document.querySelectorAll('.bar .inner');
if (skillBars.length > 0) {
    skillBars.forEach(bar => {
       bar.classList.remove('no-width');
    });
}