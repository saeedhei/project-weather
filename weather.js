const axios = require('axios');

const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const CITY_NAME = process.argv[2] || 'New York'; // Default to New York if no city name is provided

const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;

axios.get(weatherURL)
  .then(response => {
    const weatherData = response.data;
    console.log(`Weather in ${weatherData.name}, ${weatherData.sys.country}:`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);
  })
  .catch(error => {
    console.error('An error occurred:', error.response.data.message);
  });
