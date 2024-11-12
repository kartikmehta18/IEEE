"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Zap, Users, BookOpen, Calendar, Mic2, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
// import styled from 'styled-components';

 function Timeline() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        // <StyledWrapper>
        <div className=" container min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
            {/* Timeline Section */}
            <section id="timeline" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center mb-12">Event Timeline</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400 hidden sm:block"></div>
                        {[
                            { date: "May 1, 2024", title: "Registration Opens" },
                            { date: "June 15, 2024", title: "Call for Papers Deadline" },
                            { date: "July 1, 2024", title: "Notification of Acceptance" },
                            { date: "August 1, 2024", title: "Early Bird Registration Ends" },
                            { date: "September 15-17, 2024", title: "IEEE Tech Event 2024" },
                        ].map((event, index) => (
                            <div key={index} className={`mb-8 flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} w-full`}>
                                <div className="order-1 w-full sm:w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-yellow-400 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-black">{index + 1}</h1>
                                </div>
                                <div className={`order-1 w-full sm:w-5/12 px-6 py-4 mt-4 sm:mt-0 ${index % 2 === 0 ? 'sm:ml-4' : 'sm:mr-4'} bg-purple-800 rounded-lg shadow-xl`}>
                                    <h3 className="mb-3 font-bold text-yellow-400 text-xl text-center sm:text-left">{event.title}</h3>
                                    <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 text-center sm:text-left">{event.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
        // </StyledWrapper>
    );
}
// const StyledWrapper = styled.div`
//   .container {
//     width: 100%;
//     height: 100%;
//     background: ;
//     position: relative;
//     overflow: hidden;
//   }

//   .container::before {
//     content: "";
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     width: 200%;
//     height: 200%;
//     background: radial-gradient(circle, #3498db 10%, transparent 20%),
//       radial-gradient(circle, transparent 10%, #3498db 20%);
//     background-size: 30px 30px; /* Adjust the size of the pattern */
//     animation: moveBackground 8s linear infinite; /* Adjust the animation duration and timing function */
//   }

//   @keyframes moveBackground {
//     0% {
//       transform: translate(0, 0);
//     }
//     100% {
//       transform: translate(20%, 20%);
//     }
//   }`;
  export default Timeline;