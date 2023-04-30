import React from 'react'

export default function LatestPosts() {
    return (
        <section className='bg-[#ceead6] py-20 flex flex-col justify-center items-center'>
            <div className='flex justify-center items-start flex-col w-11/12'>
                <h1 className='text-3xl uppercase font-svarga tracking-wide'>
                    Latest Posts
                </h1>  
                <div className='h-[800px]'></div>
            </div>
            <div className='flex justify-center items-center flex-col w-11/12'>
                <button className='w-fit py-3 px-6 rounded-md bg-green-500 text-white'>
                    View All Posts
                </button>
            </div>
        </section>
    )
}
