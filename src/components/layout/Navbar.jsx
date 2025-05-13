import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaSun, FaBars, FaTimes, FaHome, FaCloudSun, FaCalendarAlt, FaInfoCircle, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navbarClass = isScrolled 
    ? "fixed w-full z-[100] transition-all duration-300 bg-gradient-to-r from-primary to-black shadow-md py-2"
    : "fixed w-full z-[100] transition-all duration-300 bg-gradient-to-r from-primary to-black py-4"

  const isActive = (path) => {
    return location.pathname === path ? "nav-link-active" : ""
  }

  return (
    <nav className={navbarClass}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-white">
          <FaSun className="text-accent-500 text-2xl animate-pulse-slow" />
          <span className="text-xl md:text-2xl font-bold">WeatherCast</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-1">
          <Link to="/" className={`nav-link ${isActive('/')} flex items-center gap-2`}>
            <FaHome /> Home
          </Link>
          <Link to="/weather" className={`nav-link ${isActive('/weather')} flex items-center gap-2`}>
            <FaCloudSun /> Weather
          </Link>
          <Link to="/forecast" className={`nav-link ${isActive('/forecast')} flex items-center gap-2`}>
            <FaCalendarAlt /> 5-Day Forecast
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')} flex items-center gap-2`}>
            <FaInfoCircle /> About
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')} flex items-center gap-2`}>
            <FaEnvelope /> Contact
          </Link>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary shadow-lg py-4 px-4 flex flex-col space-y-2 fade-in z-[100]">
            <Link to="/" onClick={toggleMenu} className={`nav-link ${isActive('/')} flex items-center gap-2`}>
              <FaHome /> Home
            </Link>
            <Link to="/weather" onClick={toggleMenu} className={`nav-link ${isActive('/weather')} flex items-center gap-2`}>
              <FaCloudSun /> Weather
            </Link>
            <Link to="/forecast" onClick={toggleMenu} className={`nav-link ${isActive('/forecast')} flex items-center gap-2`}>
              <FaCalendarAlt /> 5-Day Forecast
            </Link>
            <Link to="/about" onClick={toggleMenu} className={`nav-link ${isActive('/about')} flex items-center gap-2`}>
              <FaInfoCircle /> About
            </Link>
            <Link to="/contact" onClick={toggleMenu} className={`nav-link ${isActive('/contact')} flex items-center gap-2`}>
              <FaEnvelope /> Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar