const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 592) mainnav.classList.remove('responsive')};

