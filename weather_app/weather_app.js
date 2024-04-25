
const input = document.querySelector('.text');

const clickBtn = document.querySelector('.btn')
clickBtn.addEventListener('click', () => {
    checkWeather(input.value);
}, false)



const apiKey = "08758ff2f2556d9717a6faa6fae6255b";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city) {
    const reponse = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (reponse.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        let data = await reponse.json();
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = data.main.temp + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/hr';

        if (data.weather[0].main === 'Clouds') {
            document.querySelector('.weather-icon').src = 'images/clouds.png'
        }
        else if (data.weather[0].main === 'Clear') {
            document.querySelector('.weather-icon').src = 'images/clear.png'
        }
        else if (data.weather[0].main === 'Drizzle') {
            document.querySelector('.weather-icon').src = 'images/drizzle.png'
        }
        else if (data.weather[0].main === 'Mist') {
            document.querySelector('.weather-icon').src = 'images/mist.png'
        }
        else if (data.weather[0].main === 'Rain') {
            document.querySelector('.weather-icon').src = 'images/rain.png'
        }
        else if (data.weather[0].main === 'Snow') {
            document.querySelector('.weather-icon').src = 'images/snow.png'
        }
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }
}




