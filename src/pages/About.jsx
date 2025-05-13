import { FaGithub, FaLinkedin, FaBriefcase } from 'react-icons/fa'
import img from '../assets/pivink.jpg'

const About = () => {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 88 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Node.js", level: 95 },
    { name: "API Integration", level: 85 }
  ]

  return (
    <div>
      {/* Header */}
      <section className="relative py-14 bg-weather-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-white mb-6">About WeatherCast</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Learn more about the developer and technologies behind this weather application
          </p>
        </div>
      </section>

      {/* About the app */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">About The <span className="gradient-text">Application</span></h2>
            <p className="mb-4">
              WeatherCast is a modern weather application built using React.js and Tailwind CSS. It provides accurate, real-time weather information for locations worldwide, helping users make informed decisions based on current and forecasted weather conditions.
            </p>
            <p className="mb-4">
              The application leverages the OpenWeatherMap API to fetch comprehensive weather data, including current conditions, detailed metrics, and 5-day forecasts. With a clean, intuitive interface, WeatherCast makes it easy to access the weather information you need.
            </p>
            <p>
              Whether you're planning your day, a weekend getaway, or a vacation, WeatherCast provides the reliable weather data you need to prepare accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the developer */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full md:w-auto">
              <img
                src={img}
                alt="Developer portrait"
                className="rounded-xl shadow-xl w-full max-w-[400px] h-auto aspect-square object-cover mx-auto"
              />
            </div>

            <div>
              <h2 className="mb-6">Meet the <span className="gradient-text">Developer</span></h2>
              <p className="mb-4">
                Hello! I'm an experienced web developer passionate about creating intuitive, user-friendly applications that solve real-world problems. With expertise in React.js, JavaScript, and modern web technologies, I strive to build applications that combine functionality with aesthetic appeal.
              </p>
              <p className="mb-6">
                WeatherCast represents my commitment to developing practical applications that provide value to users. By combining reliable data sources with a clean, intuitive interface, I've created a tool that makes accessing weather information simple and straightforward.
              </p>

              <div className="flex space-x-4 mb-8">
                <a href="https://github.com/Pivink" className="bg-gradient-to-r from-primary to-black text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/pivink-kumar-a791b32b3/" className="bg-gradient-to-r from-primary to-black text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://portfolio-seven-iota-51.vercel.app/" className="bg-gradient-to-r from-primary to-black text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                  <FaBriefcase size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Technical <span className="gradient-text">Skills</span></h2>
            <p className="text-lg max-w-2xl mx-auto text-neutral-600">
              The technologies and skills used in developing WeatherCast
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-primary to-accent-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies used */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Technologies <span className="gradient-text">Used</span></h2>
            <p className="text-lg max-w-2xl mx-auto text-neutral-600">
              The key technologies and libraries that power WeatherCast
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center hover:translate-y-[-5px] transition-transform">
              <h3 className="text-xl mb-3">React.js</h3>
              <p className="text-neutral-600">
                A JavaScript library for building user interfaces with reusable components
              </p>
            </div>

            <div className="card p-6 text-center hover:translate-y-[-5px] transition-transform">
              <h3 className="text-xl mb-3">Tailwind CSS</h3>
              <p className="text-neutral-600">
                A utility-first CSS framework for rapidly building custom designs
              </p>
            </div>

            <div className="card p-6 text-center hover:translate-y-[-5px] transition-transform">
              <h3 className="text-xl mb-3">OpenWeatherMap API</h3>
              <p className="text-neutral-600">
                Provides comprehensive weather data for locations worldwide
              </p>
            </div>

            <div className="card p-6 text-center hover:translate-y-[-5px] transition-transform">
              <h3 className="text-xl mb-3">EmailJS</h3>
              <p className="text-neutral-600">
                Send emails directly from JavaScript without server code
              </p>
            </div>

            <div className="card p-6 text-center hover:translate-y-[-5px] transition-transform">
              <h3 className="text-xl mb-3">React Router</h3>
              <p className="text-neutral-600">
                Declarative routing for React.js applications
              </p>
            </div>

            <div className="card p-6 text-center hover:translate-y-[-5px] transition-transform">
              <h3 className="text-xl mb-3">React Icons</h3>
              <p className="text-neutral-600">
                Include popular icons in React projects easily
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About