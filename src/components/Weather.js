import React from 'react';

const Weather = ({ data }) => {
  const { main, weather, name } = data;
  const temperature = Math.round(main.temp);
  const description = weather[0].description;
  const icon = weather[0].icon;

  return (
    <div className="weather">
      <h2>{name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Description: {description}</p>
      <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={description} />
    </div>
  );
};

export default Weather;
