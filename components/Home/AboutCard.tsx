import React from 'react'
import Image from 'next/image'

export default function AboutCard() {
  return (
    <section className='pt-48 pb-52 space-y-20 flex flex-col justify-center items-center'>
        <div className='w-11/12 xl:w-[900px] flex'>
            <div className='flex justify-start'>
                <Image
                    src='/woman-portrait.jpg'
                    alt='woman portrait filler image'
                    width={1000}
                    height={1000}
                    className='w-[500px] h-[500px] object-cover rounded-md opacity-95'
                />
            </div>
            <div className='font-cormorant w-2/3 text-stone-800 flex flex-col ml-10'>
                <h2 className='opacity-90 font-semibold text-5xl mb-2 text-h3Two'>
                    Kim Brown
                </h2>
                <h3 className='opacity-90 font-semibold uppercase mb-4'>
                    Esthetician, Yoga Instructor, Lover
                </h3>
                <p className='text-stone-600 font-light text-lg leading-7'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque magnam quidem unde perferendis quam dolorum consectetur inventore eum possimus nulla esse, fugiat illum, repellendus quaerat fugit temporibus magni neque? Beatae iure consectetur, nam impedit error aliquam ratione et? Laudantium modi architecto perspiciatis dolorem quia. Aliquid.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum suscipit expedita voluptate cumque accusamus est ea sequi ab voluptatibus.
                </p>
                <div className='mt-12 w-full h-full flex items-start justify-end'>
                    <button className='h-min text-white bg-green-500 py-3 px-6 rounded-md w-fit'>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}
