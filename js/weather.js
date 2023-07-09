const API_KEYS = "cd08952cc692e06993fc1d5439d37457";

function GeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`
    fetch(url)
    .then(response =>response.json())
    .then(data => {
        const weather = document.querySelector("#weather div:nth-child(2)")
        const city = document.querySelector("#weather div:last-child")
        const weatherIconImg = document.querySelector("#weather .weatherIcon")
        const weatherIconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        city.innerText= data.name
        weather.innerText = Math.round(data.main.temp)+"º"
        weatherIconImg.setAttribute('src', weatherIconUrl);
    });
}
function GeoError(){
    alert("can't find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);