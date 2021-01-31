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