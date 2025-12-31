export const getWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`);
    const data = response.json();
    return data?.weather[0];
  } catch (error) {
    console.error(error.message);
  }
};

export const getTemperature = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`);
    const data = response.json();
    return data?.main;
  } catch (error) {
    console.error(error.message);
  }
};

export const getWindData = async (lat, lon) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`);
    const data = response.json();
    return data?.wind;
  } catch (error) {
    console.error(error.message);
  }
};

export const getAQIData = async (lat, lon) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`);
    const data = response.json();
    return data?.list[0];
  } catch (error) {
    console.error(error.message);
  }
};
