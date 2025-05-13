import { FaTemperatureHigh, FaWind, FaCompass, FaCloud, FaTint, FaSun, FaMoon, FaThermometerHalf } from 'react-icons/fa'
import { formatTemp, formatTime, getWeatherIconUrl, getCardinalDirection } from '../../utils/weatherUtils'

const WeatherDisplay = ({ weather, cityImage }) => {
  return (
    <div className="slide-up">
      {/* City image and basic info */}
      <div className="bg-white rounded-xl overflow-hidden shadow-card mb-8">
        {/* <div className="h-48 md:h-64 overflow-hidden">
          <img 
            src={cityImage} 
            alt={`${weather.city}, ${weather.country}`} 
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div> */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                {weather.city}, {weather.country}
              </h2>
              <p className="text-neutral-600">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <img 
                src={getWeatherIconUrl(weather.weatherIcon)} 
                alt={weather.weatherMain} 
                className="w-16 h-16"
              />
              <div className="ml-2">
                <p className="text-3xl font-bold">{formatTemp(weather.temp)}°C</p>
                <p className="text-neutral-600 capitalize">{weather.weather}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Detailed weather metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Temperature */}
        <div className="card flex items-center gap-4">
          <div className="bg-accent-100 p-3 rounded-lg">
            <FaTemperatureHigh className="text-accent-500 text-2xl" />
          </div>
          <div>
            <h3 className="text-sm text-neutral-500">Temperature</h3>
            <div className="flex gap-2">
              <span className="text-lg font-semibold">{formatTemp(weather.temp)}°C</span>
              <span className="text-sm text-neutral-500">
                (Feels: {formatTemp(weather.feelsLike)}°C)
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span>Min: {formatTemp(weather.temp_min)}°C</span>
              <span>Max: {formatTemp(weather.temp_max)}°C</span>
            </div>
          </div>
        </div>
        
        {/* Wind */}
        <div className="card flex items-center gap-4">
          <div className="bg-accent-100 p-3 rounded-lg">
            <FaWind className="text-accent-500 text-2xl" />
          </div>
          <div>
            <h3 className="text-sm text-neutral-500">Wind</h3>
            <p className="text-lg font-semibold">{weather.windSpeed} m/s</p>
            <p className="text-sm text-neutral-500">
              Direction: {getCardinalDirection(weather.windSpeed)}
            </p>
          </div>
        </div>
        
        {/* Humidity & Pressure */}
        <div className="card flex items-center gap-4">
          <div className="bg-accent-100 p-3 rounded-lg">
            <FaTint className="text-accent-500 text-2xl" />
          </div>
          <div>
            <h3 className="text-sm text-neutral-500">Humidity</h3>
            <p className="text-lg font-semibold">{weather.humidity}%</p>
            <p className="text-sm text-neutral-500">
              Pressure: {weather.pressure} hPa
            </p>
          </div>
        </div>
        
        {/* Sunrise & Sunset */}
        <div className="card flex items-center gap-4">
          <div className="bg-accent-100 p-3 rounded-lg">
            <FaSun className="text-accent-500 text-2xl" />
          </div>
          <div>
            <h3 className="text-sm text-neutral-500">Sunrise & Sunset</h3>
            <p className="text-sm">
              <FaSun className="inline mr-1 text-accent-500" /> {formatTime(weather.sunrise, weather.timezone)}
            </p>
            <p className="text-sm">
              <FaMoon className="inline mr-1 text-primary" /> {formatTime(weather.sunset, weather.timezone)}
            </p>
          </div>
        </div>
      </div>
      
      {/* Weather description */}
      <div className="card p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Today's Weather</h3>
        <p className="text-neutral-700 mb-4">
          The weather in {weather.city} is currently {weather.weather.toLowerCase()} 
          with a temperature of {formatTemp(weather.temp)}°C. 
          It feels like {formatTemp(weather.feelsLike)}°C outside.
        </p>
        <p className="text-neutral-700">
          The humidity is {weather.humidity}% and wind speed is {weather.windSpeed} m/s.
          Today's minimum temperature is {formatTemp(weather.temp_min)}°C and maximum is {formatTemp(weather.temp_max)}°C.
        </p>
      </div>
    </div>
  )
}

export default WeatherDisplay