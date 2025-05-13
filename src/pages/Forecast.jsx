import { useState, useEffect } from 'react'
import SearchForm from '../components/weather/SearchForm'
import ForecastDisplay from '../components/weather/ForecastDisplay'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import ErrorMessage from '../components/ui/ErrorMessage'
import { getForecast } from '../services/weatherService'

const Forecast = () => {
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const fetchForecast = async (city) => {
    try {
      setLoading(true)
      setError(null)
      
      const forecastData = await getForecast(city)
      setForecast(forecastData)
    } catch (err) {
      setError('Failed to fetch forecast data. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div>
      {/* Forecast search header */}
      <section className="relative py-14 bg-weather-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-70 to-black-500/60"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-white mb-6">5-Day Forecast</h1>
            <p className="text-white/90 text-lg mb-8">
              Enter a city name to get a detailed 5-day weather forecast
            </p>
            <SearchForm onSearch={fetchForecast} />
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
          ) : forecast ? (
            <ForecastDisplay forecast={forecast} />
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl mb-4">No Forecast Data</h2>
              <p className="text-neutral-600 mb-4">
                Search for a city above to display 5-day forecast information.
              </p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => fetchForecast('Paris')}
                  className="btn bg-primary/10 text-primary hover:bg-primary/20"
                >
                  Try Paris
                </button>
                <button 
                  onClick={() => fetchForecast('Sydney')}
                  className="btn bg-primary/10 text-primary hover:bg-primary/20"
                >
                  Try Sydney
                </button>
                <button 
                  onClick={() => fetchForecast('Dubai')}
                  className="btn bg-primary/10 text-primary hover:bg-primary/20"
                >
                  Try Dubai
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Forecast