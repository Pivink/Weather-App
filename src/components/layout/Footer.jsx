import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter, FaSun } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-r from-primary to-black text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <FaSun className="text-accent-500 text-2xl" />
              <span className="text-xl font-bold">WeatherCast</span>
            </Link>
            <p className="mt-4 text-neutral-300">
              Get accurate real-time weather updates and forecasts for any location worldwide.
              Plan your day with confidence with our comprehensive weather data.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-accent-300 transition">Home</Link></li>
              <li><Link to="/weather" className="text-neutral-300 hover:text-accent-300 transition">Weather</Link></li>
              <li><Link to="/forecast" className="text-neutral-300 hover:text-accent-300 transition">5-Day Forecast</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-accent-300 transition">About</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-accent-300 transition">Contact</Link></li>
            </ul>
          </div>
          
          {/* Social links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Pivink" className="text-neutral-300 hover:text-accent-300 transition" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/pivink-kumar-a791b32b3/" className="text-neutral-300 hover:text-accent-300 transition" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-accent-300 transition" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
            </div>
            <p className="mt-4 text-neutral-300">
              Stay updated with our latest features and weather news
            </p>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400">
            &copy; {year} WeatherCast. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="#" className="text-neutral-400 hover:text-accent-300 transition">Privacy Policy</Link>
            <Link to="#" className="text-neutral-400 hover:text-accent-300 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer