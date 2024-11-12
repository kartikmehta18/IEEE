import React from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Zap, Users, BookOpen, Calendar, Mic2, MapPin, Mail, Phone } from 'lucide-react'

function Footer() {
    return (
        <div>

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

export default Footer
