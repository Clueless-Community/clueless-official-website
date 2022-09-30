import React from 'react'

const Clueless_Hacktoberfest = () => {
    return (
        <div className='bg-gradient-to-r from-black via-black to-neutral-400 md:grid lg:grid-cols-2 m-10 md:mx-40 flex flex-col text-center lg:text-left rounded-3xl py-[28px] px-[20px] sm:px-[91px]'>
            <img src='/hacktoberfest_logo.png' className='mx-auto mb-2 lg:mx-0 lg:mb-0' />
            <div className='my-auto space-y-3'>
                <h1 className='text-white text-[24px] lg:text-3xl xl:text-4xl'>ClueLess <span className='text-blue-700'>X</span> Hacktoberfest</h1>
                <p className='text-white text-[14px] '>Clueless is a student community built with the vision to encourage open-source enthusiasts!
                    We provide the best resources, conducts weekly contests to test your skills, a guide to Open-source, and help you build projects.</p>
            </div>
        </div>
    )
}

export default Clueless_Hacktoberfest