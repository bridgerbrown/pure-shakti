import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Mission from '@/components/Home/Mission'
import Skincare from '@/components/Home/Specialties'
import Post from '@/components/Blog/Post'
import Footer from '@/components/Footer'
import AboutCard from '@/components/Home/AboutCard'
import Categories from '@/components/Home/Categories'
import LatestPosts from '@/components/Home/LatestPosts'
import Socials from '@/components/Home/Socials'
import Shakti from '@/components/Home/Shakti'
import Landing from '@/components/Home/Landing'

export default function Home() {
  return (
    <div className='bg-[#f3f7eb] relative min-h-screen w-screen'>
      <Navbar />
      {/* <Image 
        src="/white-bg.jpg"
        alt="White background"
        width={3700}
        height={2220}
        className='h-[1000px]'
      />  */}
      <Landing />
      {/* <Mission /> */}
      <Shakti />
      <section className='bg-cover opacity-80 bg-fixed h-[800px] object-cover bg-yogawoman'></section>
      <LatestPosts />
      <AboutCard />
      <section className='bg-cover opacity-80 bg-fixed h-[800px] object-cover bg-facialwoman'></section>
      <div className='pb-20'></div>
      <Footer />
    </div>
  )
}

// COLOR CHOICES
// #e9f5db Light green
// #ceead6 Paler green
// #ebe1cb Pinkish from woman logo
// #f3f7eb Off-white