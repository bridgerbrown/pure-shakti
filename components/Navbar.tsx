import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const linkStyle = 'font-sans text-stone-500 text-base font-light hover:text-gray-500'
  return (
    <nav className='font-lato border-b px-8 py-8 w-full flex items-center justify-between'>
        <Image
            src='/logo-nosub.png'
            alt='Logo'
            width={1000}
            height={197}
            className='w-[250px]'
        />
        <div className='flex space-x-10'>   
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
