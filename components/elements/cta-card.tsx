/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const CtaCard = () => {
  return (
    <div className='rounded-md bg-slate-100 py-10 px-6 relative overflow-hidden'>
        <div className='absolute z-10 inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/30'>

        </div>
        {/* image */}
        <Image
        fill
        alt="CTA Card Image"
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
      />
        {/* content */}
        <div className='relative z-20'>
            <div className='font-medium text-lg'>#exploretheworld </div>
            <h3 className='text-4xl font-semibold mt-3'>Explore the world with me</h3>
            <p className='max-w-lg mt-2 text-lg'>Explore the world with me! I'm travelling around the 🌍. I've visited most of the great cities of ⛳ and currently I'm travelliong to 🌍 Join me!</p>
        {/* Form */}
        <form className='mt-6 flex items-center gap-2 w-full'>
            <input className='bg-white/80 text-base rounded-md py-3 px-3 placeholder:text-sm outline-none md:w-auto focus:ring-2 ring-neutral-600 w-full' placeholder='write your email'/>
            <button className='bg-neutral-900 rounded-md py-2 px-3 text-neutral-200 whitespace-nowrap'>Sign Up</button>
        </form>
        </div>
    </div>
  )
}

export default CtaCard