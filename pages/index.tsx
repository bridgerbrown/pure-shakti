import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Mission from '@/components/Home/Mission'
import Skincare from '@/components/Home/Specialties'
import Post from '@/components/Blog/Post'
import Footer from '@/components/Footer'
import AboutCard from '@/components/Home/AboutCard'
import Gallery from '@/components/Home/Gallery'
import LatestPosts from '@/components/Home/LatestPosts'

export default function Home() {
  return (
    <div className='relative min-h-screen w-screen'>
      <Navbar />
      <Image 
        src="/white-bg.jpg"
        alt="White background"
        width={3700}
        height={2220}
        className='h-[800px]'
      /> 
      <Mission /> 
      <AboutCard />
      <LatestPosts />
      <Gallery />
      <div className='pb-72'></div>
      <Footer />
    </div>
  )
}
