import Image from 'next/image'
import React from 'react'

export default function Gallery() {
    const titleStyle: string = `text-2xl font-sans text-center`
    const pStyle: string = ``
    const imgStyle: string = `opacity-90 h-[350px] w-[350px] object-cover rounded-md`
  return (
    <section className='flex justify-center py-28 bg-green-100'>
        <div className='flex justify-center space-x-8 w-11/12 xl:w-9/12'>
            <Image
                src='/woman-facial.jpg'
                alt='gallery filler image'
                width={1500}
                height={1114}
                className={imgStyle}
            />
            <Image
                src='/woman-facial.jpg'
                alt='gallery filler image'
                width={1500}
                height={1114}
                className={imgStyle}
            />
            <Image
                src='/woman-facial.jpg'
                alt='gallery filler image'
                width={1500}
                height={1114}
                className={imgStyle}
            />
        </div>
    </section>
  )
}
