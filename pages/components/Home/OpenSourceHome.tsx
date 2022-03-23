import React from 'react'
import ChallengeCardActive from '../cards/ChallengeCardActive'

const OpenSourceHome: React.FC = () => {
    return (
        <div className='relative'>
            <div className=' blur'>
                <p className='sm:px-28 px-5 text-4xl mt-20 text-center md:text-left'>❤️ Start Contributing to Open Source </p>
                <div className='flex p-28 items-center justify-between flex-col lg:flex-row'>
                    <div className='lg:mr-10'>
                        <img src="/Open-source Home.png" alt="" />
                    </div>
                    <div className='grid 2xl:grid-cols-2 gap-10 mt-20'>
                        <ChallengeCardActive
                            title="Web-development JS Challenge"
                            xp={600}
                            time='2jun-10jun'
                            img="https://miro.medium.com/max/750/1*3T7J7csXY8u36acofw5N8g.jpeg"
                        />
                        <div className='block lg:hidden 2xl:block'>
                            <ChallengeCardActive
                                title="Web-development JS Challenge"
                                xp={600}
                                time='2jun-10jun'
                                img="https://miro.medium.com/max/750/1*3T7J7csXY8u36acofw5N8g.jpeg" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className='btn-blue absolute top-[50%] xl:left-[40%] w-full md:w-auto  md:left-[25%] mx-auto text-5xl'>Coming Soon...</button>
            </div>
        </div>
    )
}

export default OpenSourceHome