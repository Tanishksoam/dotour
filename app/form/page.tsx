"use client"

import Link from 'next/link'
import { Suspense } from 'react'
import MyComponent from './component/form'

export default function Form() {
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
        <Suspense fallback={<div className='w-full h-full flex justify-center items-center'><div
  className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"
></div></div>}>
          <MyComponent />
        </Suspense>
      </main>

      
    </div>
  )
}
