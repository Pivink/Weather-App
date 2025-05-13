import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city.trim())
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="input w-full shadow-lg"
          aria-label="City name"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent-500 text-white p-2 rounded-lg"
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  )
}

export default SearchForm