import React, { useState } from 'react';
import Weather from './components/Weather';
import './App.css'; 
const App = () => {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = 'YOUR_API_KEY_HERE'; 

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!query) return;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    setWeatherData(data);
    setQuery('');
  };

  return (
    <div className="App">
      <form onSubmit={fetchWeather}>
        <input
          type="text"
          className="search"
          placeholder="Enter city name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};

export default App;
