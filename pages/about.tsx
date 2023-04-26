import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

export default function About() {
    const divStyle: string = ``
  return (
    <main className='font-lato relative min-h-screen w-screen'>
        <Navbar />
        <header className='h-36 mb-4 flex justify-center items-center'>
            <h1 className='w-11/12 xl:w-[1100px] text-3xl font-serif text-stone-400 italic'>About</h1>
        </header>
        <section className='mb-24 space-y-20 flex flex-col justify-center items-center'>
            <div className='w-11/12 xl:w-[1100px] flex'>
                <div className='w-1/3 flex justify-start'>
                    <Image
                        src='/woman-portrait.jpg'
                        alt='woman portrait filler image'
                        width={1000}
                        height={1000}
                        className='w-[350px] h-[350px] object-cover rounded-md opacity-95'
                    />
                </div>
                <div className='w-2/3 text-stone-700 flex flex-col ml-10'>
                    <h2 className='text-3xl font-serif mb-1'>
                        Kim Brown
                    </h2>
                    <h3 className='mb-4'>
                        Esthetician, Yoga Instructor, Lover
                    </h3>
                    <p className='leading-7'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eligendi facere explicabo nobis sint, eaque labore reprehenderit nulla rem laboriosam dolore quis iure vel quidem quia corporis odio provident repellat numquam quisquam qui quas hic sit! Veniam, quos eum dolor impedit illo voluptatem ut minus asperiores nostrum, laudantium, quas dignissimos vel similique? Accusamus, pariatur labore, nihil fuga odit ratione architecto in, cumque magni rerum sunt dicta deleniti corporis hic assumenda. Quasi omnis assumenda est quae.
                    </p>
                    <br/>
                    <p className='leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, qui. Consectetur nesciunt unde quia nulla pariatur iste molestiae. Sapiente, nihil?
                    </p>
                </div>
            </div>
            <div className='w-11/12 xl:w-[1100px] flex'>
                <div className='mr-10 w-2/3 text-stone-700 flex flex-col'>
                    <p className='leading-7'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eligendi facere explicabo nobis sint, eaque labore reprehenderit nulla rem laboriosam dolore quis iure vel quidem quia corporis odio provident repellat numquam quisquam qui quas hic sit! Veniam, quos eum dolor impedit illo voluptatem ut minus asperiores nostrum, laudantium, quas dignissimos vel similique? Accusamus, pariatur labore, nihil fuga odit ratione architecto in, cumque magni rerum sunt dicta deleniti corporis hic assumenda. Quasi omnis assumenda est quae.
                    </p>
                    
                </div>
                <div className='w-1/3 flex justify-end'>
                    <Image
                        src='/white-bg.jpg'
                        alt='White background'
                        width={3700}
                        height={2220}
                        className='w-[350px] h-[350px] object-cover rounded-md'
                    />
                </div>
            </div>
        </section>
        <section className='mb-24'>
            <div className='py-20 flex w-full justify-center bg-stone-100'>
                <div className='w-[70vw] text-center text-stone-600 flex flex-col mr-12'>
                    <p className='leading-9 text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta commodi culpa at accusantium. Repellendus excepturi sunt pariatur, velit itaque reprehenderit fugit molestiae dignissimos ratione! Dicta officia, minima enim officiis, velit qui obcaecati debitis incidunt, ut asperiores deleniti ex maxime?
                    </p>
                    <br />
                    <p>-Buddha</p>
                </div>
            </div>
        </section>
        <section className='pb-72 flex flex-col justify-center items-center'>
            <h2 className='text-2xl'>
                Contact Me
            </h2>
        </section>
        <Footer />
    </main>
  )
}
