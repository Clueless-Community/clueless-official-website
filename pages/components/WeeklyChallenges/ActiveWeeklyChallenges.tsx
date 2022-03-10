import React from 'react'
import ChallengeCardActive from '../cards/ChallengeCardActive'
import weeklyChallenge from '../../../database/dummyDB/dummyChallenge'
import Link from 'next/link'
import FilterButton from './FilterButton'

type Props = {
    type: string
}

const ActiveWeeklyChallenges: React.FC<Props> = ({type}) => {
    return (
        <div className='xl:px-28 pb-28 pt-10 w-11/12 xl:w-full mx-auto'>
            <div className='pb-16 px-0 md:px-8 xl:px-0 flex justify-between flex-col sm:flex-row items-center'>
                <h2 className='text-4xl font-semibold text-center sm:text-left'>⭐ Active Challenges</h2>
                <FilterButton 
                type={type}
                />
            </div>
            <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[130px] gap-16 rounded-2xl'>
                {weeklyChallenge.map((challenge) => {
                    return (
                        <div className='mx-auto'>
                            <ChallengeCardActive
                                img={challenge.img}
                                title={challenge.title}
                                time={challenge.time}
                                xp={challenge.xp}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ActiveWeeklyChallenges