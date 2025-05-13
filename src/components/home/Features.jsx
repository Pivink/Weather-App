import { FaClock, FaGlobeAmericas, FaThermometerHalf } from 'react-icons/fa'

const Features = () => {
  const features = [
    {
      icon: <FaClock className="text-4xl text-accent-500" />,
      title: "Real-Time Updates",
      description: "Get the most current weather information with our real-time data updates."
    },
    {
      icon: <FaGlobeAmericas className="text-4xl text-accent-500" />,
      title: "Global Coverage",
      description: "Access weather data for any location worldwide with our comprehensive coverage."
    },
    {
      icon: <FaThermometerHalf className="text-4xl text-accent-500" />,
      title: "Detailed Metrics",
      description: "View comprehensive weather metrics including temperature, humidity, and more."
    }
  ]
  
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why Choose Our <span className="gradient-text">Weather App?</span></h2>
          <p className="text-lg max-w-2xl mx-auto text-neutral-600">
            WeatherCast provides accurate, timely, and comprehensive weather information to help you plan your activities with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card text-center p-8 hover:translate-y-[-5px] transition-transform"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl mb-4">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features