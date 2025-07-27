import ProjectForm from '@/components/ProjectForm'
import React from 'react'

const Create = () => {
  return (
    <>
    <section className='w-full bg-primary min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6'>
        <h1 className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5'>
            Submit Your Project
        </h1>
    </section>
    <ProjectForm />
    </>
  )
}

export default Create