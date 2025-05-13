import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

const About = () => {
  const features = [
    "Accurate weather forecasting using the latest data",
    "Real-time updates from reliable meteorological sources",
    "Comprehensive 5-day forecasts for planning ahead",
    "Detailed weather metrics for informed decision-making",
    "User-friendly interface for easy navigation",
    "Global coverage for worldwide weather information"
  ]
  
  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Weather forecasting technology" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Content section */}
          <div>
            <h2 className="mb-6">About This <span className="gradient-text">Weather App</span></h2>
            <p className="mb-6 text-neutral-700">
              WeatherCast is designed to provide you with accurate and timely weather information for any location around the world. Our mission is to help you make informed decisions based on current and forecasted weather conditions.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl mb-4">Key Features</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-accent-500 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link to="/about" className="btn btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About