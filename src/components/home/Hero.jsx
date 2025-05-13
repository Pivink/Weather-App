import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
        style={{ filter: 'brightness(0.7)' }}
      ></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-black"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-2xl slide-up">
          <h1 className="text-white mb-4">
            Weather Forecast
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Get accurate weather updates for any location worldwide. 
            Plan your day with confidence using real-time weather data.
          </p>
          <Link 
            to="/weather" 
            className="btn btn-primary flex items-center gap-2 w-fit"
          >
            Check Weather Now
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero