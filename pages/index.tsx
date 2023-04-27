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
      <Categories />
      <Socials />
      <div className='pb-20'></div>
      <Footer />
    </div>
  )
}
