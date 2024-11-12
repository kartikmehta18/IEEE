import React from 'react'
import { Zap, Users, BookOpen } from 'lucide-react'


function About() {
    return (
        <div>
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
        </div>
    )
}

export default About
