//drop menu
const hambutton = document.querySelector('.menu');
const mainnav = document.querySelector('.nav-bar');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('t')}, false);

window.onresize = () => {if (window.innerWidth > 592) mainnav.classList.remove('t')};

//actuall names
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    
];
// give actuall names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + " " + todaysdate.getFullYear();

document.getElementById('currentDate').textContent = currentdate;

// Wind chill calculator
function windchill() {

    let t = parseFloat(document.getElementById('temp').innerText);
    let s = parseFloat(document.getElementById('wind').innerText);

    if (t < 50 && s > 3) {

        var f = parseInt(35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16)));
    }
    else {
        var f = "N/A";
    }
    return f;
}
document.getElementById("chill").innerHTML = windchill();

//Lazy Loads

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }