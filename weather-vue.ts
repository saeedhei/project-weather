<template>
  <div>
    <h1>Weather App</h1>
    <label for="cityInput">Enter City: </label>
    <input id="cityInput" v-model="cityName" @input="clearWeatherData" />
    <button @click="getWeatherData">Get Weather</button>

    <div v-if="weatherData">
      <p>City: {{ weatherData.name }}, {{ weatherData.sys.country }}</p>
      <p>Temperature: {{ weatherData.main.temp }}°C</p>
      <p>Description: {{ weatherData.weather[0].description }}</p>
      <p>Humidity: {{ weatherData.main.humidity }}%</p>
      <p>Wind Speed: {{ weatherData.wind.speed }} m/s</p>
    </div>

    <p v-if="errorMessage">An error occurred: {{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

const cityName = ref(''); // Use ref for cityName
const weatherData = ref<WeatherData | null>(null); // Use ref for weatherData
const errorMessage = ref<string | null>(null); // Use ref for errorMessage

const clearWeatherData = () => {
  weatherData.value = null; // Update using .value
  errorMessage.value = null; // Update using .value
};

const getWeatherData = () => {
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API_KEY}&units=metric`;

  axios
    .get(weatherURL)
    .then((response) => {
      // console.log(response.data);
      weatherData.value = response.data; // Update using .value
    })
    .catch((error) => {
      errorMessage.value = error.response?.data?.message || 'An error occurred'; // Update using .value
    });
};

// Define the type for the weather data
interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}
</script>

<style scoped lang="scss">
/* Container styles */
div {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

/* Title styles */
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

/* Input and button styles */
label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Weather data styles */
div {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

p {
  margin: 5px 0;
}

/* Error message styles */
p.error {
  color: red;
  font-weight: bold;
}
</style>
