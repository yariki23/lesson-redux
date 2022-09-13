import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather/weather.selectors';
import * as weatherActions from './weather/weather.actions';

const Weather = citiesWeather => {
  useEffect(() => {
    citiesWeather.fetchWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {citiesWeather.citiesWeather.map(city => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature} F</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    citiesWeather: weatherDataSelector(state),
  };
};

const mapDispatch = {
  fetchWeatherData: weatherActions.fetchWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
