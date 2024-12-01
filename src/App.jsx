import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar';
import WeatherService from './weatherService';

const API_KEY = 'e2cbf24aafdo2e69311a33etb41012ad'; 

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.get(`https://api.shecodes.io/weather/v1/current?query=${city}&key=${API_KEY}`);
      setWeather(response.data);
    } catch (err) {
      setError('City not found. Please try again.');setWeatherData(null);
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <div className="weather-app">
        <header>
          <div>
            <p className="forecasthub">ForecastHub</p>
            <p className="weather">Weather</p>
          </div>
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Enter a city.."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="search-input"
            />
            <button type="submit" value="Search" className="search-button">Search</button>
          </form>
          {error && <p>{error}</p>}
        </header>
        <main className="current-weather">
          <div className="blocks">
            <div className="left">
              <div className="current">
                {weather && (
                  <>
                    <div className="current-temperature">
                      <h1 className="current-city">{weather.city}</h1>
                      <span className="current-temperature-value">{weather.weather.description}</span>
                      <span className="current-temperature-unit">{weather.temperature.current}°C</span>
                    </div>
                    <div className="current-temperature-icon">
                      <img 
                        src={weather.weather.icon_url} 
                        alt={weather.weather.description} 
                      />
                    </div>
                    <p className="current-details">
                      Humidity: {weather.main.humidity}%<br />
                      Wind: {weather.wind.speed} km/h
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="forecast"></div>
          </div>
          <p className="subscribe">
            <u>Subscribe</u> to get regular weather updates, straight to your inbox. No spam, we promise!
          </p>
        </main>
        <footer>
          <p>
            This project was coded by{" "}
            <a href="https://github.com/hanna-8l" target="_blank" rel="noopener noreferrer">
              Hanna Liashuk
            </a>, is{" "}
            <a href="https://github.com/hanna-8l/ForecastHub" target="_blank" rel="noopener noreferrer">
              open-sourced on GitHub
            </a> and{" "}
            <a href="https://forecasthub.netlify.app/" target="_blank" rel="noopener noreferrer">
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
