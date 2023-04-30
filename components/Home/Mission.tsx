import React from 'react'
import Image from 'next/image'

export default function Mission() {
  return (
    <section className='bg-green-100 w-full flex flex-col justify-center items-center'>
        <div className='font-sans py-44 w-9/12 flex flex-col justify-center items-center'>
            <Image
              src="/icons/flower-icon-g.png"
              alt="flower icon"
              width={500}
              height={348}
              className='w-20 mb-8 opacity-80'
            />
            <p className='font-light w-11/12 xl:w-[850px] mb-8 text-2xl leading-9 text-center'>
              &#34;When you listen to yourself, everything comes naturally. It comes from inside, like a kind of will to do something. Try to be sensitive. That is yoga.&#34;
            </p>
            <p className='text-lg text-gray-600 italic'>
              ― Petri Räisänen
            </p>
        </div>
    </section>
  )
}
