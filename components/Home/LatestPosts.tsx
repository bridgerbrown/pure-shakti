import React from 'react'

export default function LatestPosts() {
    return (
        <section className='my-20 flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col w-11/12 xl:w-[900px]'>
                <h1 className='text-3xl uppercase font-svarga'>
                    Latest Posts
                </h1>  
                <div className='h-[800px]'></div>
                <button className='w-fit py-3 px-6 rounded-md bg-green-500 text-white'>
                    View All Posts
                </button>
            </div>
        </section>
    )
}
