import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <main className='relative min-h-screen w-screen'>
        <Navbar />
        <header className='w-full text-center h-36 mb-4 flex justify-center items-center'>
            <h1 className='text-3xl font-serif text-stone-600'>About</h1>
        </header>
        <section className='pb-72 space-y-32 flex flex-col justify-center items-center'>
            <div className='w-[85vw] flex'>
                <div className='w-1/2 flex justify-end'>
                    <Image
                        src='/white-bg.jpg'
                        alt='White background'
                        width={3700}
                        height={2220}
                        className='w-[500px] h-[450px] rounded-md'
                    />
                </div>
                <div className='w-1/2 text-stone-700 flex flex-col ml-12'>
                    <h2 className='text-4xl font-serif mb-1'>
                        Kim Brown
                    </h2>
                    <h3 className='mb-4'>
                        Esthetician, Yoga Instructor, Lover
                    </h3>
                    <p className='leading-7'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eligendi facere explicabo nobis sint, eaque labore reprehenderit nulla rem laboriosam dolore quis iure vel quidem quia corporis odio provident repellat numquam quisquam qui quas hic sit! Veniam, quos eum dolor impedit illo voluptatem ut minus asperiores nostrum, laudantium, quas dignissimos vel similique? Accusamus, pariatur labore, nihil fuga odit ratione architecto in, cumque magni rerum sunt dicta deleniti corporis hic assumenda. Quasi omnis assumenda est quae.
                    </p>
                </div>
            </div>
            <div className='w-[85vw] flex'>
                <div className='w-1/2 text-stone-700 flex flex-col mr-12'>
                    <p className='leading-7'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eligendi facere explicabo nobis sint, eaque labore reprehenderit nulla rem laboriosam dolore quis iure vel quidem quia corporis odio provident repellat numquam quisquam qui quas hic sit! Veniam, quos eum dolor impedit illo voluptatem ut minus asperiores nostrum, laudantium, quas dignissimos vel similique? Accusamus, pariatur labore, nihil fuga odit ratione architecto in, cumque magni rerum sunt dicta deleniti corporis hic assumenda. Quasi omnis assumenda est quae.
                    </p>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <Image
                        src='/white-bg.jpg'
                        alt='White background'
                        width={3700}
                        height={2220}
                        className='w-[500px] h-[450px] rounded-md'
                    />
                </div>
            </div>
            <div className='py-20 flex w-full justify-center bg-stone-100'>
                <div className='w-[85vw] text-center text-stone-600 flex flex-col mr-12'>
                    <p className='leading-9 text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta commodi culpa at accusantium. Repellendus excepturi sunt pariatur, velit itaque reprehenderit fugit molestiae dignissimos ratione! Dicta officia, minima enim officiis, velit qui obcaecati debitis incidunt, ut asperiores deleniti ex maxime?
                    </p>
                    <br />
                    <p>-Buddha</p>
                </div>
            </div>
        </section>
        <Footer />
    </main>
  )
}