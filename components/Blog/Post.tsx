import Image from 'next/image'
import React from 'react'

export default function Post() {
  return (
    <div className='w-[1000px] flex justify-center items-center'>
            <Image
                src='/white-bg.jpg'
                alt='White background'
                width={500}
                height={500}
                className='h-[400px] w-[400px]'
            />
            <div>
              <h1 className='text-4xl font-bold text-center'>Blog Post</h1>
              <h2 className='text-xl'>Subtitle</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta laudantium fugiat possimus illum id temporibus nesciunt repellendus est harum!</p>
            </div>
    </div>
  )
}
