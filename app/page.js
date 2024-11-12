"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Zap,
  Users,
  BookOpen,
  Calendar,
  Mic2,
} from "lucide-react";
import Link from "next/link";
import Timeline from "./_components/Timeline";
import About from "./_components/About";
import Sponsors from "./_components/Sponsors";
import Speakers from "./_components/Speakers"
import Footer from "./_components/Footer"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Navbar */}
      <nav className="bg-black bg-opacity-30 backdrop-blur-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Zap className="h-8 w-8 text-yellow-400" />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="#about"
                    className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    href="#timeline"
                    className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Timeline
                  </Link>
                  <Link
                    href="#sponsors"
                    className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sponsors
                  </Link>
                  <Link
                    href="#speakers"
                    className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Speakers
                  </Link>
                  <Link
                    href="/blog"
                    className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/team"
                    className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Button
                variant="outline"
                className="mr-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                Register
              </Button>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                Become IEEE Member
              </Button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-yellow-400 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#about"
                className="hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <Link
                href="#timeline"
                className="hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Timeline
              </Link>
              <Link
                href="#sponsors"
                className="hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Sponsors
              </Link>
              <Link
                href="#speakers"
                className="hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Speakers
              </Link>
              <Link
                href="/blog"
                className="hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Blog
              </Link>
              <Link
                href="/team"
                className="hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-purple-700">
              <div className="flex items-center px-5">
                <Button
                  variant="outline"
                  className="mr-2 w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  Register
                </Button>
                <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                  Become IEEE Member
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">IEEE Tech Event 2024:</span>
                  <span className="block text-yellow-400">
                    Innovate, Inspire, Impact
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Join us for a groundbreaking online tech event that brings
                  together innovators, thought leaders, and tech enthusiasts
                  from around the globe.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10">
                      Register Now
                    </Button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-400 bg-purple-800 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                    >
                      Join Discord
                    </Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/placeholder.svg?height=600&width=800"
            alt="Tech event illustration"
          />
        </div>
      </div>

      {/* Timeline */}
      <Timeline />
  {/* About IEEE  */}
  <About />
     {/* Sponsors Section */}
    <Sponsors />
    {/* Speakers and Judges Section */}
    <Speakers/>
{/* Footer */}
    <Footer />
    </div>
  );
}
