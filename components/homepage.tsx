'use client'

import Link from 'next/link'
import { MapPin, Calendar, Briefcase } from 'lucide-react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

export function HomepageComponent() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">AI Travel Planner</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 hover:text-[#fc5071]">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#fc5071]">Destinations</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#fc5071]">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#fc5071]">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-6">Plan Your Dream Vacation with AI</h2>
          <p className="text-xl text-center text-gray-600 mb-8">Let our advanced AI create the perfect itinerary for you</p>
          <div className="flex justify-center">
            <Link href="/plan-trip">
              <Button className="bg-[#fc5071] hover:bg-[#e0365c] text-white font-bold py-3 px-6 rounded-full text-lg">
                Start Planning
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <div 
            className="relative w-full h-[400px] rounded-lg overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div 
              className={`absolute inset-0 transition-opacity duration-300 ${
                isHovering ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ backgroundColor: '#fc5071cc' }}
              aria-hidden="true"
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold z-10">Discover Amazing Destinations</h3>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MapPin className="text-[#fc5071] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Destination Matching</h3>
            <p className="text-gray-600">Our AI analyzes your preferences to suggest the perfect destinations for you.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar className="text-[#fc5071] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Itineraries</h3>
            <p className="text-gray-600">Get day-by-day plans tailored to your interests and travel style.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Briefcase className="text-[#fc5071] w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Budget Optimization</h3>
            <p className="text-gray-600">Our AI helps you make the most of your travel budget with smart recommendations.</p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI-Powered Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">Click below to begin planning your next adventure!</p>
          <Link href="/plan-trip">
            <Button className="bg-[#fc5071] hover:bg-[#e0365c] text-white font-bold py-3 px-6 rounded-full text-lg">
              Plan My Trip Now
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">AI Travel Planner</h3>
              <p className="text-gray-400">Your intelligent companion for unforgettable journeys.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="text-gray-400">
                <li><Link href="#" className="hover:text-[#fc5071]">About Us</Link></li>
                <li><Link href="#" className="hover:text-[#fc5071]">FAQs</Link></li>
                <li><Link href="#" className="hover:text-[#fc5071]">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#fc5071]">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
              <ul className="text-gray-400">
                <li><Link href="#" className="hover:text-[#fc5071]">Facebook</Link></li>
                <li><Link href="#" className="hover:text-[#fc5071]">Twitter</Link></li>
                <li><Link href="#" className="hover:text-[#fc5071]">Instagram</Link></li>
                <li><Link href="#" className="hover:text-[#fc5071]">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Travel Planner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}