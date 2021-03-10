const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=6dc037b176bf45f10d9b47e146e18667";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let ptemp = Math.round((jsObject.main.temp - 273.15) * (9 / 5) + 32)
        document.getElementById('current-temp').textContent = ptemp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    });