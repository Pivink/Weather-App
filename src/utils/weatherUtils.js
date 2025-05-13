// Convert temperature to integer
export const formatTemp = (temp) => {
  return Math.round(temp)
}

// Format Unix timestamp to time string
export const formatTime = (timestamp, timezone) => {
  // Create date object from Unix timestamp (in seconds)
  const date = new Date(timestamp * 1000)
  
  // Format time with the timezone offset
  const options = { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC'
  }
  
  // Add timezone offset (in seconds) to the date
  const localTime = new Date(date.getTime() + timezone * 1000)
  
  return localTime.toLocaleTimeString('en-US', options)
}

// Format date from Unix timestamp to a readable date
export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000)
  
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  })
}

// Get weather icon URL from icon code
export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}

// Convert wind direction in degrees to cardinal direction
export const getCardinalDirection = (degrees) => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N']
  return directions[Math.round(degrees / 45) % 8]
}