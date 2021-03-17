// weather summary
const currentApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=6dc037b176bf45f10d9b47e146e18667";
fetch(currentApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

   
    let prestonTemp = jsObject.main.temp;
    let prestonHigh = jsObject.main.temp_max;


    document.getElementById('current-description').textContent = jsObject.weather[0].description;
    document.getElementById('current').textContent = prestonTemp.toFixed(0);
    document.getElementById('high').textContent = prestonHigh.toFixed(0);

    var speed = jsObject.wind.speed;
    var chill = 35.74 + (0.6215 * prestonTemp) - (35.75 * Math.pow(speed,0.16)) + (0.4275 * prestonTemp * Math.pow(speed,0.16));

    document.getElementById('wind-chill').textContent = chill.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;

  
  });
//5-day forecast
const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=6dc037b176bf45f10d9b47e146e18667";
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsForecast) => {
    console.log(jsForecast);

  
    var i = 1;
    for(var x=0; x<jsForecast.list.length; x++){
      var temp = "five-day-temp" + i;
      var icon = "five-day-icon" + i;
      if(jsForecast.list[x].dt_txt.includes("18:00:00")){
        document.getElementById(temp).textContent = jsForecast.list[x].main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsForecast.list[x].weather[0].icon + '.png';  
        const desc = jsForecast.list[x].weather[0].description;  
        document.getElementById(icon).setAttribute('src', imagesrc);  
        
        i++; 
      }
      
    }
    
    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsForecast.list[6].weather[0].icon + '.png';  
    const desc = jsForecast.list[6].weather.description;  
    document.getElementById('five-day-icon1').setAttribute('src', imagesrc); 
    document.getElementById('five-day-icon1').setAttribute('alt', desc);

  });