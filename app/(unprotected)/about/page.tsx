'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AboutContact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message })
    alert('Message sent!')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="container mx-auto px-12 py-8">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">About AI Travel Planner</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                AI Travel Planner was born from a passion for travel and a belief in the power of artificial intelligence to enhance the travel planning experience. Our mission is to make personalized travel itineraries accessible to everyone, combining the efficiency of AI with the personal touch that makes each journey unique.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2024, our team of travel enthusiasts and AI experts have been working tirelessly to create an intelligent system that understands the nuances of travel preferences and crafts itineraries that feel tailor-made for each user.
              </p>
              <p className="text-gray-600">
                We&apos;re committed to continually improving our AI algorithms, expanding our database of destinations and activities, and providing an unparalleled service to wanderlust-filled souls around the globe.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/about.webp"
                alt="AI Travel Planner Team"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 text-center text-lg">
              To revolutionize travel planning by harnessing the power of AI, making it easier for everyone to discover, plan, and embark on their dream adventures.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Have questions, suggestions, or just want to say hello? We&apos;d love to hear from you! Fill out the form, and we&apos;ll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#fc5071] mr-2" />
                  <span className="text-gray-600">123 AI Avenue, Tech City, TC 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#fc5071] mr-2" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#fc5071] mr-2" />
                  <span className="text-gray-600">info@aitravelplanner.com</span>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Your message here..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-[#fc5071] hover:bg-[#e0365c] text-white">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}
