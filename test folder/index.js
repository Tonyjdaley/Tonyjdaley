//drop menu
const hambutton = document.querySelector('.menu');
const mainnav = document.querySelector('.nav-bar');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('t')}, false);

window.onresize = () => {if (window.innerWidth > 592) mainnav.classList.remove('t')};

//dates
function lastModified() {
  var d = new Date();

  var dOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var date = `${dOfWeek[d.getDay()]}, ${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`;
  var cYear = d.getFullYear();
  var yearOutput = "&#169; " + cYear + " | Anthony J Daley | Soldotna, AK | " + '<a href="C:\Users\tonyj\Documents\Class 6 Web Fronted Development\GitHub\Tonyjdaley\index.html">Assignment Portal  |</a>' + '<a href="https://www.byui.edu/online" target="_blank">BYUI Online Learning</a>';

  document.getElementById('cYear').innerHTML = yearOutput;
  document.getElementById('mod').innerHTML = date;
}

function fiveWeekDays(){
  var d = new Date();
  var dOfWeek_abrev = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  for(let i=1; i<6; i++){
    let day = "today" + i;
    let weekday = d.getDay()+i;

    if(weekday > 6){
      weekday = weekday - 7;
      document.getElementById(day).innerHTML = dOfWeek_abrev[weekday];
    }else{
      document.getElementById(day).innerHTML = dOfWeek_abrev[weekday];
    }
  }
}

// friday date special
function showFri() {
  var d = new Date();

  if (d.getDay()==5){
      document.getElementById("show-fri").style.display = "block";
  }else{
      document.getElementById("show-fri").style.display = "none";
  }
}

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
  //rating
  function adjustRating(rating) {
    document.getElementById("ratevalue").innerHTML = rating;
  };





  


