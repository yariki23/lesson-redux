import { getUserData } from './weather.gateway';

export const SHOW_DATA_RECIEVED = 'SHOW_DATA_RECIEVED';

export const weatherDataRecieved = weatherData => {
  return {
    type: SHOW_DATA_RECIEVED,
    payload: {
      weatherData,
    },
  };
};

export const fetchWeatherData = () => {
  return function (dispatch) {
    fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities')
      .then(response => response.json())
      .then(cityData => {
        dispatch(weatherDataRecieved(cityData));
      });
  };
};
