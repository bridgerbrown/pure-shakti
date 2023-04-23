import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const linkStyle = 'text-stone-500 text-sm font-light hover:text-gray-500'
  return (
    <nav className='font-lato border-b pt-12 w-full flex flex-col items-center '>
        <Image
            src='/logo-nosub.png'
            alt='Logo'
            width={1000}
            height={197}
            className='w-[350px] mb-8'
        />
        <div className='pb-6 flex space-x-20'>   
            <Link href='/' className={linkStyle}>
                Home
            </Link>
            <Link href='/skincare' className={linkStyle}>
                Skincare
            </Link>
            <Link href='/yoga' className={linkStyle}>
                Yoga
            </Link>
            <Link href='/ayurveda' className={linkStyle}>
                Ayurveda
            </Link>
            <Link href='/about' className={linkStyle}>
                About Me
            </Link>
        </div>
    </nav>
  )
}
