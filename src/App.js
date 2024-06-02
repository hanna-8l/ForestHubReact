import "./app.css";

export default function App() {
  let weatherData = {
    city: "Madrid",
  };
  return (
    <div className="App">
      <div className="weather-app">
        <header>
          <div>
            <p className="forecasthub">ForecastHub</p>
            <p className="weather">Weather</p>
          </div>
          <form>
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="search-input"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </header>
        <main className="current-weather">
          <div className="blocks">
            <div className="left">
              <div className="current">
                <div className="current-temperature">
                  <h1 className="current-city">{weatherData.city}</h1>
                  <span className="current-temperature-value">20</span>
                  <span className="current-temperature-unit">°C</span>
                </div>
                <div className="current-temperature-icon"></div>
              </div>
              <p className="current-details">
                <span></span>
                <span></span>
                <br />
                Humidity: 80%<strong i></strong>, Wind: <strong>7.2km/h</strong>
              </p>
            </div>
            <div className="forecast"></div>
          </div>
          <p className="subscribe">
            <u>Subscribe</u> to get regular weather updates, straight to your
            inbox. No spam, we promise!
          </p>
        </main>
        <footer>
          <p>
            This project was coded by{" "}
            <a href="https://github.com/hanna-8l" target="_blank">
              {" "}
              Hanna Liashuk
            </a>
            , is open-sourced on{" "}
            <a href="https://github.com/hanna-8l/ForecastHub" target="_blank">
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a href="https://forecasthub.netlify.app/" target="_blank">
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
