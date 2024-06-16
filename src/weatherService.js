import axios from 'axios';

const apiKey = 'e2cbf24aafdo2e69311a33etb41012ad';
const apiUrl = 'https://api.shecodes.io/weather/v1/current?query={query}&key={key}';

export const getWeatherData = async (cityName) => {
  try {
    const response = await axios.get(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch weather data');
  }
};