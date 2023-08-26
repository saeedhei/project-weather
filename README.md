# project-weather

The Weather App is a simple command-line application that fetches and displays current weather information using the OpenWeatherMap API.

## Features

- Displays temperature, weather description, humidity, and wind speed for a specified city.
- Defaults to New York if no city name is provided as an argument.

## Setup

1. Clone the repository or download the `weather.js` file.

2. Sign up for a free API key from [OpenWeatherMap](https://openweathermap.org/appid) if you don't have one.

3. Replace `'YOUR_API_KEY'` in the `weather.js` file with your OpenWeatherMap API key.

4. Open a terminal and navigate to the directory containing `weather.js`.

5. Run the Weather App:

node weather.js

To specify a different city, provide the city name as an argument:

node weather.js London

## Note

- The default temperature unit is Celsius. You can customize the units in the API request URL by modifying the `units` parameter.

## Attribution

- This project uses the [OpenWeatherMap API](https://openweathermap.org/api) to retrieve weather data.

---

Feel free to enhance this README with additional information, screenshots, or any other relevant details. Make sure to keep your API key secure and consider using environment variables to store sensitive information.

