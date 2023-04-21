import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const linkStyle = 'text-stone-800 text-sm font-light hover:text-gray-500'
  return (
    <nav className='mb-12 border-b pt-20 w-full flex flex-col items-center'>
        <h1 className='text-stone-900 pb-12 text-4xl'>
        Pure Shakti
        </h1>
        <div className='pb-6 flex space-x-16 uppercase'>   
            <Link href='/' className={linkStyle}>
                Home
            </Link>
            <Link href='/' className={linkStyle}>
                Skincare
            </Link>
            <Link href='/' className={linkStyle}>
                Yoga
            </Link>
            <Link href='/' className={linkStyle}>
                About
            </Link>
            <Link href='/' className={linkStyle}>
                Contact
            </Link>
        </div>
    </nav>
  )
}
