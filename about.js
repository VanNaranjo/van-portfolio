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