import { useState, useEffect } from 'react'
import SearchForm from '../components/weather/SearchForm'
import WeatherDisplay from '../components/weather/WeatherDisplay'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import ErrorMessage from '../components/ui/ErrorMessage'
import { getCurrentWeather } from '../services/weatherService'

const Weather = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [cityImage, setCityImage] = useState(null)
  
  const fetchWeather = async (city) => {
    try {
      setLoading(true)
      setError(null)
      
      const weatherData = await getCurrentWeather(city)
      setWeather(weatherData)
      
      // Get a city image (simulated with a generic city image)
      setCityImage(`https://source.unsplash.com/featured/1200x800/?${city},skyline`)
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div>
      {/* Weather search header */}
      <section className="relative py-24 bg-weather-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-white mb-6">Current Weather</h1>
            <p className="text-white/90 text-lg mb-8">
              Enter a city name to get detailed current weather information
            </p>
            <SearchForm onSearch={fetchWeather} />
          </div>
        </div>
      </section>
      
      {/* Results section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : weather ? (
            <WeatherDisplay weather={weather} cityImage={cityImage} />
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl mb-4">No Weather Data</h2>
              <p className="text-neutral-600 mb-4">
                Search for a city above to display current weather information.
              </p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => fetchWeather('London')}
                  className="btn bg-primary/10 text-primary hover:bg-primary/20"
                >
                  Try London
                </button>
                <button 
                  onClick={() => fetchWeather('Tokyo')}
                  className="btn bg-primary/10 text-primary hover:bg-primary/20"
                >
                  Try Tokyo
                </button>
                <button 
                  onClick={() => fetchWeather('New York')}
                  className="btn bg-primary/10 text-primary hover:bg-primary/20"
                >
                  Try New York
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Weather