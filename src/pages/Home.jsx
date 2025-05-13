import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import About from '../components/home/About'
import Testimonials from '../components/home/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <section className="section bg-neutral-100">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to <span className="gradient-text">Get Started?</span></h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Experience accurate weather forecasts for any location worldwide.
            Plan your day with confidence using our comprehensive weather data.
          </p>
          <Link to="/weather" className="btn btn-primary">
            Check Weather Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home