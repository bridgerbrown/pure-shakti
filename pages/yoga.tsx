import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function yoga() {
  return (
    <div>
      <Navbar />
        <header className='h-36 mb-4 flex justify-center items-center'>
            <h1 className='w-11/12 xl:w-[1200px] text-3xl font-serif text-stone-400 italic'>Yoga</h1>
        </header>
        <section className='flex flex-col justify-center items-center'>
            <div className='w-11/12 xl:w-[1200px] '>

            </div>
        </section>
      <Footer />
    </div>
  )
}
