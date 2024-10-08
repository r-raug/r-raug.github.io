import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./Weather.module.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  
  
  const apiKey = '3b1297ed0a2f41c3a8a171443240710'; 

  
  const fetchLocation = async () => {
    try {
      const response = await axios.get('https://ipapi.co/json/');
      const city = response.data.city;
      fetchWeather(city);
    } catch (err) {
      setError('Unable to get location. Please try again.');
    }
  };

  
  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('Weather data not found. Please try again.');
      setWeatherData(null);
    }
  };

  
  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className={styles.container}>   

      {error && <p>{error}</p>}

      {weatherData && (
        <div>
          <h2>Weather in {weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <img src={weatherData.current.condition.icon} alt="Weather Icon" />
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
