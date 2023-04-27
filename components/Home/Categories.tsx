import Image from 'next/image'
import React from 'react'

export default function Categories() {
  const titleStyle: string = `mt-4 mb-3 text-2xl font-sans text-center`
  const pStyle: string = `font-sans font-light mb-4 w-[300px] text-center`
  const imgStyle: string = `hover:opacity-70 cursor-pointer opacity-90 h-[200px] w-[200px] object-cover rounded-full`
  const categoryContainerStyle: string = `flex flex-col items-center justify-center`
  const buttonStyle: string = `bg-green-500 text-white font-sans font-light py-2 px-4 rounded-full hover:bg-gray-500`

  return (
    <section className='py-32 flex flex-col items-center justify-center bg-green-100'>
        <div className='flex justify-between max-w-[1200px] w-11/12 xl:w-9/12'>
            <div className={categoryContainerStyle}>
                <Image
                    src='/woman-facial.jpg'
                    alt='Skincare'
                    width={350}
                    height={350}
                    className={imgStyle}
                />
                <h2 className={titleStyle}>Skincare</h2>
                <p className={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, elit nunc aliquet nunc, eget aliquam nisl nunc eu nunc. </p>
                <button className={buttonStyle}>
                    Read More
                </button>
            </div>
            <div className={categoryContainerStyle}>
                <Image
                    src='/woman-facial.jpg'
                    alt='Skincare'
                    width={350}
                    height={350}
                    className={imgStyle}
                />
                <h2 className={titleStyle}>Yoga</h2>
                <p className={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, elit nunc aliquet nunc, eget aliquam nisl nunc eu nunc. </p>
                <button className={buttonStyle}>
                    Read More
                </button>
            </div>
            <div className={categoryContainerStyle}>
                <Image
                    src='/woman-facial.jpg'
                    alt='Skincare'
                    width={350}
                    height={350}
                    className={imgStyle}
                />
                <h2 className={titleStyle}>Ayurveda</h2>
                <p className={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget fermentum aliquam, elit nunc aliquet nunc, eget aliquam nisl nunc eu nunc. </p>
                <button className={buttonStyle}>
                    Read More
                </button>
            </div>
        </div>
    </section>
  )
}
