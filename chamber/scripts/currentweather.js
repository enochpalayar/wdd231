const weatherIcon = document.querySelector('#weather-icon');
const weatheru = document.querySelector('#weatheru');
const forecast = document.querySelector('#forecast');
//const url = `https://api.openweathermap.org/data/2.5/weather?lat=13.71&lon=123.21&units=metric&appid=af8ca5862ad2b8a525dfd05a79d2ec56`;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=13.71&lon=123.21&units=metric&appid=af8ca5862ad2b8a525dfd05a79d2ec56`;

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            //console.log(data);
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function unixtime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    let hours = date.getHours();
    if (hours > 12) hours -= 12;
    const minutes = "0" + date.getMinutes();
    return `${hours}:${minutes.slice(-2)}`;
}

function displayResults(data){
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    weatheru.innerHTML = "";

    const tempP = document.createElement('p');
    tempP.className = "temp";
    tempP.innerHTML = `<strong>${Math.round(data.list[0].main.temp)}&deg;C</strong>`;

    const descP = document.createElement('p');
    descP.style.textTransform = "capitalize";
    descP.textContent = data.list[0].weather[0].description;

    const highLowP = document.createElement('p');
    highLowP.innerHTML = `High: ${Math.round(data.list[0].main.temp_max)}&deg;C | Low: ${Math.round(data.list[0].main.temp_min)}&deg;C`;

    const humidityP = document.createElement('p');
    humidityP.textContent = `Humidity: ${data.list[0].main.humidity}%`;

    const sunriseP = document.createElement('p');
    sunriseP.textContent = `Sunrise: ${unixtime(data.city.sunrise)}`; 
    
    const sunsetP = document.createElement('p');
    sunsetP.textContent = `Sunset: ${unixtime(data.city.sunset)}`;


    weatheru.appendChild(tempP);
    weatheru.appendChild(descP);
    weatheru.appendChild(highLowP);
    weatheru.appendChild(humidityP);
    weatheru.appendChild(sunriseP);
    weatheru.appendChild(sunsetP);


    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();

    forecast.innerHTML = ""; 

    const todayForecast = document.createElement('p');
    todayForecast.innerHTML = `Today: <strong>${Math.round(data.list[0].main.temp)}&deg;C</strong>`;
    forecast.appendChild(todayForecast);

    const tomorrowForecast = document.createElement('p');
    const nextDay = dayNames[(currentDate.getDay() + 1) % 7];
    tomorrowForecast.innerHTML = `${nextDay}: <strong>${Math.round(data.list[8].main.temp)}&deg;C</strong>`;
    forecast.appendChild(tomorrowForecast);

    const dayAfterForecast = document.createElement('p');
    const thirdDay = dayNames[(currentDate.getDay() + 2) % 7];
    dayAfterForecast.innerHTML = `${thirdDay}: <strong>${Math.round(data.list[16].main.temp)}&deg;C</strong>`;
    forecast.appendChild(dayAfterForecast);
}