import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Zap, Users, BookOpen, Calendar, Mic2, MapPin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Timeline() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // ... (previous navbar and hero section code remains unchanged)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Navbar and Hero section (unchanged) */}

      {/* Timeline Section */}
      <section id="timeline" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Event Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400"></div>
            {[
              { date: "May 1, 2024", title: "Registration Opens" },
              { date: "June 15, 2024", title: "Call for Papers Deadline" },
              { date: "July 1, 2024", title: "Notification of Acceptance" },
              { date: "August 1, 2024", title: "Early Bird Registration Ends" },
              { date: "September 15-17, 2024", title: "IEEE Tech Event 2024" },
            ].map((event, index) => (
              <div key={index} className={`mb-8 flex justify-${index % 2 === 0 ? 'start' : 'end'} items-center w-full`}>
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-yellow-400 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-black">{index + 1}</h1>
                </div>
                <div className={`order-1 ${index % 2 === 0 ? 'ml-4' : 'mr-4'} w-5/12 px-6 py-4 bg-purple-800 rounded-lg shadow-xl`}>
                  <h3 className="mb-3 font-bold text-yellow-400 text-xl">{event.title}</h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">About IEEE Tech Event 2024</h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            IEEE Tech Event 2024 is a cutting-edge conference bringing together experts, researchers, and enthusiasts in the fields of artificial intelligence, computer vision, and smart systems. Our goal is to foster innovation, share knowledge, and create networking opportunities for professionals and students alike.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Users className="h-12 w-12 text-yellow-400" />, title: "Networking", description: "Connect with industry leaders and peers" },
              { icon: <BookOpen className="h-12 w-12 text-yellow-400" />, title: "Learning", description: "Gain insights from cutting-edge research and applications" },
              { icon: <Zap className="h-12 w-12 text-yellow-400" />, title: "Innovation", description: "Explore the latest advancements in technology" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Our Sponsors</h2>
          {["Gold", "Silver", "Bronze"].map((tier, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-6">{tier} Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-lg">
                    <img src={`/placeholder.svg?height=100&width=200&text=${tier} Sponsor`} alt={`${tier} Sponsor ${i + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speakers and Judges Section */}
      <section id="speakers" className="py-20 bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Speakers and Judges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-purple-800 rounded-lg shadow-xl p-6 flex flex-col items-center">
                <img src={`/placeholder.svg?height=150&width=150&text=Speaker ${index + 1}`} alt={`Speaker ${index + 1}`} className="w-32 h-32 rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">Dr. Jane Doe</h3>
                <p className="text-gray-300 text-center mb-4">Professor of AI at Tech University</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-yellow-400 hover:text-yellow-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">IEEE Tech Event 2024</h3>
              <p className="text-gray-300">Innovate. Inspire. Impact.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link href="#timeline" className="text-gray-300 hover:text-white">Timeline</Link></li>
                <li><Link href="#sponsors" className="text-gray-300 hover:text-white">Sponsors</Link></li>
                <li><Link href="#speakers" className="text-gray-300 hover:text-white">Speakers</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                <li><Link href="/team" className="text-gray-300 hover:text-white">Team</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
                  <span className="text-gray-300">123 Tech Street, City, Country</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-yellow-400" />
                  <a href="mailto:info@ieeetechevent.com" className="text-gray-300 hover:text-white">info@ieeetechevent.com</a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-yellow-400" />
                  <span className="text-gray-300">+1 (123) 456-7890</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">&copy; 2024 IEEE Tech Event. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}