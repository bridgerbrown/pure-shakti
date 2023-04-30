import React from 'react'
import Image from 'next/image'

export default function Landing() {
  return (
    <section className='h-[1000px] bg-[#ceead6] w-full flex items-center justify-end'>
      <div className='w-[500px] h-[500px] mt-24 mr-12 flex flex-col items-end justify-start'>
        <div className='text-center flex flex-col items-center justify-center'>
          <h1 className='font-svarga text-5xl mb-2'>
            Mind. Body. Spirit.
          </h1>
          <h2 className='text-lg font-sans font-light w-[30rem]'>
            Yoga is the journey of the self, through the self, to the self. Coffee is the journey of the self, through the self, to the self.
          </h2>
        </div>
      </div>
      <div className='flex justify-start items-center w-1/2'>
        <Image
          src='/vectorwoman.png'
          alt='logo of woman in fetal position with moon and stars'
          width={2954}
          height={3330}
          className='w-[500px] ml-24'
        />
      </div>
    </section>
  )
}
