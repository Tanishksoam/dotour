"use client"

import Image from 'next/image'
import Link from 'next/link'
import {  MapPin, Calendar, Briefcase, ChevronRight } from 'lucide-react'
import { Button } from "../components/ui/button"
import ImageSection from './components/inagehomepage'

export default function Homepage() {
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">AI Travel Planner</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 hover:text-[#fc5071]">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-[#fc5071]">Plan a Trip</Link></li>
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
            <Link href="/form">
              <Button className="bg-[#fc5071] hover:bg-[#e0365c] text-white font-bold py-3 px-6 rounded-full text-lg">
                Start Planning
              </Button>
            </Link>
          </div>
        </section>

        <ImageSection />

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

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Sample Itineraries</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Romantic Paris Getaway", image: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                { title: "Adventure in Costa Rica", image: "https://images.pexels.com/photos/3836281/pexels-photo-3836281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
                { title: "Cultural Tour of Japan", image: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
              ].map((itinerary, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Image src={itinerary.image} alt={itinerary.title} width={300} height={200} className="w-full" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{itinerary.title}</h3>
                    <p className="text-gray-600 mb-4">Experience the best of {itinerary.title.split(' ').pop()} with our curated itinerary.</p>
                    <Link href={`/itineraries/${index + 1}`} className="text-[#fc5071] hover:underline">
                      View Itinerary <ChevronRight className="inline-block w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/itineraries">
                <Button className="bg-[#fc5071] hover:bg-[#e0365c] text-white">
                  See All Itineraries
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Sarah L.", quote: "The AI-generated itinerary was perfect for our family vacation. It saved us so much time and stress!" },
                { name: "Mike T.", quote: "I was skeptical at first, but the personalized recommendations were spot on. Best trip ever!" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-800 mb-4">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold text-[#fc5071]">{testimonial.name}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/testimonials">
                <Button variant="outline" className="border-[#fc5071] text-[#fc5071] hover:bg-[#fc5071] hover:text-white">
                  Read More Reviews
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI-Powered Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">Click below to begin planning your next adventure!</p>
          <Link href="/form">
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