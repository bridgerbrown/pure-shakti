import React from 'react'
import Image from 'next/image'

export default function Landing() {
  return (
    <section className='bg-primaryTwo h-[1000px] w-full flex items-center justify-end'>
      <div className='w-[500px] h-[500px] mt-24 mr-12 flex flex-col items-end justify-start'>
        <div className='text-center flex flex-col items-center justify-center'>

          <h1 className='font-cormorant text-h3Two font-semibold text-6xl mb-3'>
            Mind. Body. Spirit.
          </h1>
          <h2 className='text-lg font-cormorant font-light max-w-[25rem] mr-2'>
            We are a community of people who are passionate about living a life of wellness and balance.
          </h2>
          
        </div>
      </div>
      <div className='flex justify-start items-center w-1/2'>
        <Image
          src='/vectorwoman-g.png'
          alt='logo of woman in fetal position with moon and stars'
          width={2954}
          height={3330}
          className='w-[500px] ml-24'
        />
      </div>
    </section>
  )
}
