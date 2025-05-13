import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const WEATHER_URL = import.meta.env.VITE_WEATHER_URL
const FORECAST_URL = import.meta.env.VITE_FORECAST_URL

export const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get(WEATHER_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    })
    
    const data = response.data
    
    return {
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      weather: data.weather[0].description,
      weatherIcon: data.weather[0].icon,
      weatherMain: data.weather[0].main,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      timezone: data.timezone
    }
  } catch (error) {
    console.error('Error fetching current weather:', error)
    throw new Error(error.response?.data?.message || 'Failed to fetch weather data')
  }
}

export const getForecast = async (city) => {
  try {
    const response = await axios.get(FORECAST_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    })
    
    const data = response.data
    
    return {
      city: data.city.name,
      country: data.city.country,
      timezone: data.city.timezone,
      list: data.list.map(item => ({
        dt: item.dt,
        main: {
          temp: item.main.temp,
          feels_like: item.main.feels_like,
          temp_min: item.main.temp_min,
          temp_max: item.main.temp_max,
          pressure: item.main.pressure,
          humidity: item.main.humidity
        },
        weather: item.weather,
        wind: {
          speed: item.wind.speed,
          deg: item.wind.deg
        },
        dt_txt: item.dt_txt
      }))
    }
  } catch (error) {
    console.error('Error fetching forecast:', error)
    throw new Error(error.response?.data?.message || 'Failed to fetch forecast data')
  }
}