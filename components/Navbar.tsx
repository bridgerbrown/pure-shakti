import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const linkStyle = 'font-sans text-base font-light hover:text-gray-500'
  return (
    <nav className='bg-secondaryTwo font-lato px-8 py-8 w-full flex items-center justify-between'>
        <Image
            src='/ps-logo-black.png'
            alt='Logo'
            width={1000}
            height={197}
            className='w-[275px]'
        />
        <div className='flex space-x-10 text-h3Two'>   
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
