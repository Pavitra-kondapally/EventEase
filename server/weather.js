const axios = require('axios');
require('dotenv').config(); 
const API_KEY = process.env.WEATHER_API_KEY; 

const getWeather = async (location) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${'019dd82efc88791ea4bbceb763fcddca'}`;
  try {
    const response = await axios.get(url);
    const { weather, main } = response.data;
    return `Weather: ${weather[0].description}, Temperature: ${main.temp}K`;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = getWeather;
