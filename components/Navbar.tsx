import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const linkStyle = 'opacity-90 font-cormorant text-lg hover:opacity-100'
  return (
    <nav className='bg-secondaryTwo font-lato px-8 py-2 w-full flex items-center justify-between'>
        <Image
            src='/ps-logo-black.png'
            alt='Logo'
            width={1000}
            height={197}
            className='w-[200px] opacity-70 pt-4'
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
