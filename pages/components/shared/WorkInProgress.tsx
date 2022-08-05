/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { SvgButton } from '../../../styles/Mui-styles/HoverFillButton'

const WorkInProgress: React.FC = () => {
    return (
        <div className='flex lg:p-28 p-10 justify-center items-center flex-col lg:flex-row'>
            <div>
                <h1 className='text-5xl font-semibold text-skin-main mb-5'>Work In Progress</h1>
                <p className='lg:pr-20 text-gray-700 mb-10'>We are working on this specific category and will soon publish.
                    If you want to Stay Updated, Please Join our Discord Server. We also host event, workshops there and you will find one of the best developer community there to help you out in different problems.</p>
                <a href="https://discord.gg/zrVMjGW8sB" target="_blank" rel="noreferrer">
                <SvgButton>Join Discord</SvgButton>
                </a>
            </div>
            <div>
                <img src="/construction.png" alt="" className='mt-10' />
            </div>
        </div>
    )
}

export default WorkInProgress