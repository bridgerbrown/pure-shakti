import Image from 'next/image'
import React from 'react'

export default function Specialties() {
    const itemSectionStyle = 'mb-10 w-10/12 flex'
    const itemHeaderStyle = 'text-stone-900 text-xl font-semibold pb-4'
    const itemPStyle = 'pb-4 text-stone-800 text-base font-light'
    const itemImgStyle = 'object-cover'

    return (
    <section className='bg-stone-100 py-16 w-full flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-10/12 pb-8'>
                <h2 className='text-2xl'>
                    Skincare
                </h2>
            </div>
            <div className={itemSectionStyle}>
                <Image 
                    src="/white-bg.jpg"
                    alt="White background"
                    height={400}
                    width={400}
                    className={itemImgStyle}
                />
                <div className='pl-16 flex flex-col'>
                    <h3 className={itemHeaderStyle}>
                        Lorem Ipsum
                    </h3>
                    <p className={itemPStyle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam praesentium facilis eius provident fuga libero aut quasi, quam veniam labore aliquam iusto totam earum unde incidunt explicabo non consequuntur, consequatur error. Aut ipsum officia cumque blanditiis sapiente earum. Obcaecati.
                    </p>
                    <p className={itemPStyle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos debitis quis tenetur sint sed consequuntur?
                    </p>
                </div>
            </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-10/12 pb-8'>
                <h2 className='text-2xl'>
                    Ayurveda
                </h2>
            </div>
            <div className={itemSectionStyle}>
                <Image 
                    src="/white-bg.jpg"
                    alt="White background"
                    height={400}
                    width={400}
                    className={itemImgStyle}
                />
                <div className='pl-16 flex flex-col'>
                    <h3 className={itemHeaderStyle}>
                        Lorem Ipsum
                    </h3>
                    <p className={itemPStyle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam praesentium facilis eius provident fuga libero aut quasi, quam veniam labore aliquam iusto totam earum unde incidunt explicabo non consequuntur, consequatur error. Aut ipsum officia cumque blanditiis sapiente earum. Obcaecati.
                    </p>
                    <p className={itemPStyle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos debitis quis tenetur sint sed consequuntur?
                    </p>
                </div>
            </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-10/12 pb-8'>
                <h2 className='text-2xl'>
                    Yoga
                </h2>
            </div>
            <div className={itemSectionStyle}>
                <Image 
                    src="/white-bg.jpg"
                    alt="White background"
                    height={400}
                    width={400}
                    className={itemImgStyle}
                />
                <div className='pl-16 flex flex-col'>
                    <h3 className={itemHeaderStyle}>
                        Lorem Ipsum
                    </h3>
                    <p className={itemPStyle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam praesentium facilis eius provident fuga libero aut quasi, quam veniam labore aliquam iusto totam earum unde incidunt explicabo non consequuntur, consequatur error. Aut ipsum officia cumque blanditiis sapiente earum. Obcaecati.
                    </p>
                    <p className={itemPStyle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos debitis quis tenetur sint sed consequuntur?
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
