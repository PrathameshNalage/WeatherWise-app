import React, { useState } from "react";
import "./App.css";

function WeatherApp() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const apiKey = "a9a4e0291ee51be85617aff67a3db48d"; // Replace with your API key
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setWeather(data);
    };

    return (
        <div className="container">
            <h1>Weather Forecast</h1>
            <input
                type="text"
                placeholder="Enter city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather}>Search</button>

            {weather && weather.main ? (
                <div className="weather-info">
                    <h2>{weather.name}, {weather.sys.country}</h2>
                    <p>{weather.weather[0].description}</p>
                    <p>🌡 {weather.main.temp}°C</p>
                    <p>💧 Humidity: {weather.main.humidity}%</p>
                    <p>🌬 Wind: {weather.wind.speed} m/s</p>
                </div>
            ) : (
                weather && <p>City not found 😞</p>
            )}
        </div>
    );
}

export default WeatherApp;
