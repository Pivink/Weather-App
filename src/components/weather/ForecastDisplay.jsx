import { FaTemperatureHigh, FaTint, FaWind } from 'react-icons/fa'
import { formatTemp, formatDate, getWeatherIconUrl } from '../../utils/weatherUtils'

const ForecastDisplay = ({ forecast }) => {
  // Group forecast data by day
  const groupedForecasts = {}
  
  forecast.list.forEach(item => {
    const date = formatDate(item.dt)
    if (!groupedForecasts[date]) {
      groupedForecasts[date] = []
    }
    groupedForecasts[date].push(item)
  })
  
  // Get daily summaries (average of day values)
  const dailySummaries = Object.keys(groupedForecasts).map(date => {
    const dayForecasts = groupedForecasts[date]
    
    // Find min and max temperature
    let minTemp = Infinity
    let maxTemp = -Infinity
    let totalTemp = 0
    let totalHumidity = 0
    let totalWindSpeed = 0
    
    // Use noon forecast for the icon (or the middle of the day's forecasts)
    const middleIndex = Math.floor(dayForecasts.length / 2)
    const icon = dayForecasts[middleIndex].weather[0].icon
    const description = dayForecasts[middleIndex].weather[0].description
    
    dayForecasts.forEach(forecast => {
      const temp = forecast.main.temp
      totalTemp += temp
      totalHumidity += forecast.main.humidity
      totalWindSpeed += forecast.wind.speed
      
      if (temp < minTemp) minTemp = temp
      if (temp > maxTemp) maxTemp = temp
    })
    
    return {
      date,
      icon,
      description,
      avgTemp: totalTemp / dayForecasts.length,
      minTemp,
      maxTemp,
      avgHumidity: totalHumidity / dayForecasts.length,
      avgWindSpeed: totalWindSpeed / dayForecasts.length,
      forecasts: dayForecasts,
    }
  })
  
  return (
    <div className="slide-up">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          {forecast.city}, {forecast.country}
        </h2>
        <p className="text-neutral-600">5-day weather forecast</p>
      </div>
      
      {/* Daily forecast cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
        {dailySummaries.map((day, index) => (
          <div key={index} className="card hover:shadow-lg transition-shadow">
            <div className="p-4 border-b text-center">
              <h3 className="font-semibold text-lg">{day.date}</h3>
            </div>
            <div className="p-6 text-center">
              <img 
                src={getWeatherIconUrl(day.icon)} 
                alt={day.description} 
                className="w-16 h-16 mx-auto"
              />
              <p className="capitalize text-neutral-600 mb-3">{day.description}</p>
              
              <div className="flex justify-center items-center gap-3 mb-4">
                <span className="text-sm text-blue-600">
                  {formatTemp(day.minTemp)}°
                </span>
                <div className="w-20 bg-neutral-200 h-1 rounded-full">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-accent-500 h-1 rounded-full"
                    style={{ width: '100%' }}
                  ></div>
                </div>
                <span className="text-sm text-accent-600">
                  {formatTemp(day.maxTemp)}°
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <FaTint className="text-blue-500" />
                  <span>{Math.round(day.avgHumidity)}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaWind className="text-neutral-500" />
                  <span>{day.avgWindSpeed.toFixed(1)} m/s</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Hourly forecast for first day */}
      {dailySummaries.length > 0 && (
        <div className="card p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Hourly Forecast for {dailySummaries[0].date}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dailySummaries[0].forecasts.map((forecast, index) => {
              const time = new Date(forecast.dt * 1000).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              })
              
              return (
                <div key={index} className="border rounded-lg p-3 flex items-center gap-3">
                  <div className="text-center">
                    <p className="font-medium">{time}</p>
                    <img 
                      src={getWeatherIconUrl(forecast.weather[0].icon)} 
                      alt={forecast.weather[0].main} 
                      className="w-10 h-10 mx-auto"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{formatTemp(forecast.main.temp)}°C</p>
                    <p className="text-sm text-neutral-500 capitalize">{forecast.weather[0].description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
      
      {/* Weather information */}
      <div className="card p-6">
        <h3 className="text-xl font-semibold mb-4">Weather Information</h3>
        <p className="text-neutral-700 mb-4">
          The 5-day forecast for {forecast.city}, {forecast.country} shows 
          {dailySummaries.length > 0 ? 
            ` temperatures ranging from ${formatTemp(Math.min(...dailySummaries.map(d => d.minTemp)))}°C to 
            ${formatTemp(Math.max(...dailySummaries.map(d => d.maxTemp)))}°C.` : 
            ' varying weather conditions.'}
        </p>
        <p className="text-neutral-700">
          This forecast is updated regularly based on the latest meteorological data. 
          Plan your activities accordingly based on the predicted weather conditions.
        </p>
      </div>
    </div>
  )
}

export default ForecastDisplay