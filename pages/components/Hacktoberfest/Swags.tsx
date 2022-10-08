import Link from 'next/link'
import React from 'react'

const Swags = () => {
    return (
        <div>
            <div className='justify-center items-center space-x-5 space-y-3 md:grid lg:grid-cols-2 mx-10 md:mx-40 flex flex-col text-center lg:text-left py-[28px] px-[20px] sm:px-[91px]'>
                <div className=''>
                    <h1 className='text-[24px] lg:text-3xl xl:text-4xl'>How to get SWAGS ❓🤔</h1>
                    <p className='text-[14px] mt-5 mb-2'><b>If your PR got merged.</b></p>
                    <ol className='list-disc text-[14px] sm:text-lg lg:text-2xl space-y-1 md:space-y-3 my-auto'>
                        <li>SignIn/SignUp in clueless.tech</li>
                        <li>Go to Profile section from top-right corner</li>
                        <li>Comment your profile url</li>
                    </ol>
                    <Link href='https://www.linkedin.com/feed/update/urn:li:activity:6982151802993414144/'>
                        <a target='_blank'>
                            <button className='btn-blue mt-6'>Read More</button>
                        </a>
                    </Link>
                </div>
                <Link href='#' passHref>
                    <img src='/contribute.png' className='mx-auto ' />
                </Link>
            </div>
        </div>
    )
}

export default Swags