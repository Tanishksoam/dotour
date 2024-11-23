

import { Suspense } from 'react'
import MyComponent from './component/form'

export default function Form() {
  return (
    <div className="min-h-[60vh] bg-gray-100">
      

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
