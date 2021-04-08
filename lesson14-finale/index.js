//drop menu
const hambutton = document.querySelector('.menu');
const mainnav = document.querySelector('.nav-bar');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('t')}, false);

window.onresize = () => {if (window.innerWidth > 592) mainnav.classList.remove('t')};

//DoW
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
  