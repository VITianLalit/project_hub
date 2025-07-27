import { Boxes } from '@/components/ui/background-boxes'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="h-[396px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <p className='bg-secondary px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative tag-tri'>15th June 2025</p>
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5 relative">
          This is our great master project title
        </h1>
        <p className="font-medium text-[20px] text-white text-center break-words !max-w-5xl relative">
          This is our nice project description.
        </p>
      </div>
      <section className='px-6 py-10 max-w-7xl mx-auto'>
        <img src="https://images.unsplash.com/photo-1709884732297-4b3c1a3f725b?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project Image" className="w-full h-auto rounded-xl" />
        <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
          <div className='flex flex-row gap-5 justify-between'>
            <Link href='/' className='flex gap-2 items-center mb-3'>
            <Image src="https://placehold.co/100" alt="" width={64} height={64} className='rounded-full drop-shadow-lg'/>
            <div>
              <p className='text-20-medium'>AUTHOR NAME</p>
              <p className='text-16-medium !text-black-300'>@USERNAME</p>
            </div>
            </Link>
            <p className='bg-green-100 font-medium text-[16px] bg-primary-100 px-4 py-2 justify-center items-center rounded-full'>Electronics</p>
          </div>
          <h3 className='text-30-bold'>Project Details</h3>
          <p className='no-result'>No Details Provided</p>
        </div>
        <hr className='border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto' />
      </section>
    </>
  )
}

export default page