import { useState } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      quote: "I use WeatherCast every day before heading out. It's incredibly accurate and helps me prepare for the day ahead.",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=120",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      quote: "The 5-day forecast feature is a game-changer for planning weekend activities. Highly recommended!",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120",
      rating: 5
    },
    {
      name: "Emma Williams",
      location: "London, UK",
      quote: "As someone who travels frequently, the global coverage of WeatherCast has been invaluable for my trip planning.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120",
      rating: 5
    }
  ])
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [newFeedback, setNewFeedback] = useState({
    name: '',
    location: '',
    quote: '',
    rating: 5
  })
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleSubmitFeedback = (e) => {
    e.preventDefault()
    const defaultAvatar = "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=120"
    
    setTestimonials([...testimonials, {
      ...newFeedback,
      avatar: defaultAvatar
    }])
    
    setNewFeedback({
      name: '',
      location: '',
      quote: '',
      rating: 5
    })
  }
  
  return (
    <section className="section bg-gradient-to-r from-primary to-black text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">What Users Are Saying</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Discover how WeatherCast is helping people plan their days and activities with confidence.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative px-4">
          {/* Testimonial card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center relative fade-in">
            <div className="absolute top-6 left-6 text-accent-500 opacity-50">
              <FaQuoteLeft size={32} />
            </div>
            
            <div className="mb-6 flex justify-center">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name} 
                className="w-20 h-20 rounded-full object-cover border-4 border-accent-500"
              />
            </div>
            
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-accent-500" />
              ))}
            </div>
            
            <p className="text-lg mb-6 text-white/90">
              "{testimonials[currentIndex].quote}"
            </p>
            
            <div>
              <h4 className="text-xl font-semibold">{testimonials[currentIndex].name}</h4>
              <p className="text-neutral-300">{testimonials[currentIndex].location}</p>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial} 
              className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-accent-500 w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Add Feedback Form */}
        <div className="max-w-2xl mx-auto mt-16 bg-white/10 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Share Your Experience</h3>
          <form onSubmit={handleSubmitFeedback}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={newFeedback.name}
                  onChange={(e) => setNewFeedback({...newFeedback, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  value={newFeedback.location}
                  onChange={(e) => setNewFeedback({...newFeedback, location: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Your Feedback</label>
              <textarea
                value={newFeedback.quote}
                onChange={(e) => setNewFeedback({...newFeedback, quote: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setNewFeedback({...newFeedback, rating})}
                    className={`text-2xl ${rating <= newFeedback.rating ? 'text-accent-500' : 'text-white/30'}`}
                  >
                    <FaStar />
                  </button>
                ))}
              </div>
            </div>
            <button type="submit" className="w-full btn btn-primary">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Testimonials