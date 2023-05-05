import Image from 'next/image'
import React from 'react'

export default function Footer() {
  const iconStyle = 'opacity-70 w-min h-6'

  return (
    <footer className='py-8 px-28 font-sans absolute bottom-0 w-screen flex justify-between text-center'>
      <h1 className='text-base font-light font-cormorant'>
        Copyright ©2023 Pure Shakti
      </h1>
      <div className='invert h-full justify-center items-center flex space-x-6'>
        <Image
          src='/socials/ig-icon.png'
          alt='instagram icon'
          width={571}
          height={572}
          className={iconStyle}
        />
        <Image
          src='/socials/fb-icon.png'
          alt='facebook icon'
          width={336}
          height={638}
          className={iconStyle}
        />
      </div>
    </footer>
  )
}
