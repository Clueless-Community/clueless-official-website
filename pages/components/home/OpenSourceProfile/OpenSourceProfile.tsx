import Link from 'next/link'
import React from 'react'
import { MdNavigateNext } from 'react-icons/md'

const opensrc = () => {
  return (
    <div className='px-[8%]'>
      <div className='flex flex-col lg:flex-row items-center w-full justify-between'>
        <div className=' w-full lg:w-1/2'>
          <h1 className='text-green-400 text-3xl font-semibold sm:text-3xl sm:font-semibold md:text-5xl md:font-bold'>Your{"'s"} truly</h1>
          <h1 className='text-white text-3xl font-semibold sm:text-3xl sm:font-semibold  md:text-5xl md:font-bold  mt-1'>Open-source Profile</h1>
          <br />
          <p className='text-[20px] sm:text-[25px] text-yellow-50'>Built with the vision to encourage open-source enthusiasts!</p>
          <br></br>
          <p className='text-[20px] sm:text-[25px] text-yellow-50'>Built with the vision to encourage open-source enthusiasts! Built with the vision to encourage open-source enthusiasts!</p>
          <br />
          <br />
          <Link href="/">
            <div className='text-green-400 text-[17px] flex justify-start cursor-pointer items-center'>
              <h1>Build your Profile </h1>
              <MdNavigateNext size={'22px'}/>
            </div>


          </Link>
          

        </div>
        <div className='flex items-center justify-center lg:justify-end mt-12 lg:mt-0 lg:w-2/5'>

          <img className='w-4/5' src="test.png" alt="" />
        </div>

      </div>

      <div className='flex items-center justify-center pt-3'>
        <img className=' w-[70vw] hidden rotate-180 items-center justify-center sm:block md:w-[35vw] md:block' src="true-design.png" alt="" />
        <img className='flex w-[70vw] items-center justify-center mt-3 sm:hidden' src="true-design2.png" alt="" />
      </div>






    </div>
  )
}

export default opensrc