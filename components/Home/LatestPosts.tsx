import React from 'react'

export default function LatestPosts() {
    return (
        <section className='bg-primaryTwo py-20 flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center flex-col w-11/12'>
                <h1 className='text-h3Two font-semibold text-3xl font-cormorant tracking-wide'>
                    Latest Posts
                </h1>  
                <div className='h-[800px]'></div>
            </div>
            <div className='flex justify-center items-center flex-col w-11/12'>
                <button className='font-cormorant w-fit py-3 px-6 rounded-md bg-green-500 text-white'>
                    View All Posts
                </button>
            </div>
        </section>
    )
}
