const weatherDisplay = document.querySelector('#weather-display');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=14.15&lon=122.83&units=metric&appid=af8ca5862ad2b8a525dfd05a79d2ec56';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    
    weatherDisplay.innerHTML = `
        <img src="${iconsrc}" alt="${desc}" style="width: 50px; vertical-align: middle;">
        <span class="temp">${data.main.temp.toFixed(0)}°C</span>
        <p style="font-size: 0.8rem; text-transform: capitalize; margin-top: 5px;">${desc}</p>
    `;
}

apiFetch();