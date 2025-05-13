import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  })
  
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    setFormStatus({
      message: '',
      isError: false,
      isSubmitting: true
    })
    
    emailjs
      .sendForm(
        "service_u8pmf6e", // Your Service ID
        "template_l0z81v4", // Your Template ID
        form.current,
        "oPZwqKv6RKVDb69f_" // Your Public Key
      )
      .then(
        () => {
          setFormStatus({
            message: 'Email sent successfully! We\'ll get back to you soon.',
            isError: false,
            isSubmitting: false
          })
          
          // Reset form
          setFormData({
            user_name: '',
            user_email: '',
            subject: '',
            message: ''
          })
        },
        () => {
          setFormStatus({
            message: 'Failed to send email. Please try again later.',
            isError: true,
            isSubmitting: false
          })
        }
      )
  }
  
  return (
    <div>
      {/* Header */}
      <section className="relative py-14 bg-weather-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-black-500/60"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-white mb-6">Contact Us</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>
      </section>
      
      {/* Contact section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="mb-6">Get In <span className="gradient-text">Touch</span></h2>
              <p className="mb-8 text-neutral-600">
                Have questions, suggestions, or feedback about WeatherCast? We'd love to hear from you! Fill out the form, and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-lg">
                    <FaEnvelope className="text-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-neutral-600">pivink8791@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-lg">
                    <FaPhone className="text-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-neutral-600">+91 7078346441</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-neutral-600">Greater Noida,India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                
                {formStatus.message && (
                  <div className={`p-4 mb-6 rounded-lg ${formStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="user_name" className="block mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="user_email" className="block mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="input"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="btn btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {formStatus.isSubmitting ? 'Sending...' : (
                      <>
                        Send Message
                        <FaPaperPlane />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="text-lg max-w-2xl mx-auto text-neutral-600">
              Find answers to common questions about WeatherCast
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-2">How accurate is the weather data?</h3>
                <p className="text-neutral-600">
                  WeatherCast uses data from OpenWeatherMap, one of the leading providers of weather data. While we strive for maximum accuracy, weather forecasting inherently involves some uncertainty, especially for longer-term predictions.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-2">How often is the weather data updated?</h3>
                <p className="text-neutral-600">
                  Current weather data is updated in real-time when you search for a location. The 5-day forecast is updated regularly throughout the day based on the latest meteorological data.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-2">Is WeatherCast available as a mobile app?</h3>
                <p className="text-neutral-600">
                  Currently, WeatherCast is available as a web application optimized for both desktop and mobile devices. A dedicated mobile app is in our development roadmap.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-2">Can I save my favorite locations?</h3>
                <p className="text-neutral-600">
                  This feature is coming soon! We're working on implementing the ability to save favorite locations for quick access to their weather information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact