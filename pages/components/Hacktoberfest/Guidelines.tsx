import React from 'react'
import Link from "next/link";

const Guidelines = () => {
    return (
        <div className=''>
            <h1 className='text-center text-[24px] lg:text-3xl xl:text-4xl'>Guidelines ✅</h1>
            <div className='space-x-5 space-y-3 md:grid lg:grid-cols-2 mt-2 m-10 md:mx-40 flex flex-col text-center lg:text-left py-[28px] px-[20px] sm:px-[91px]'>
                <div className=''>
                    <ol className='list-disc text-[14px] sm:text-lg lg:text-2xl space-y-1 md:space-y-3'>
                        <li>Top Contributor will get Exclusive t-shirts for free</li>
                        <li>All contributors will receive certificate for contributing</li>
                        <li>Contribute to open-source and be the part of the revolution</li>
                    </ol>
                    <a href="https://github.com/Clueless-Community/clueless-official-website/blob/main/CODE_OF_CONDUCT.md" target='_blank' rel="noreferrer">
                    <button className='btn-blue mt-6'>Read More</button>
                    </a>
                </div>
                <img src="/guidelines3.png" className="mx-auto md:mx-0 max-w-[70%] ml-[175px]" />
            </div>
        </div>
    )
}

export default Guidelines
