import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Mission from '@/components/Home/Mission'
import Skincare from '@/components/Home/Specialties'

export default function Home() {
  return (
    <div className='min-h-screen w-full'>
      <Navbar />
      <Image 
        src="/white-bg.jpg"
        alt="White background"
        width={3700}
        height={2220}
        className='h-[600px]'
      />
      <Mission />
      <Skincare />
    </div>
  )
}