import React from 'react'
import weeklyChallengePrevious from '../../../database/dummyDB/dummyPreviousChallenges'
import ChallengeCardPrevious from '../cards/ChallengeCardPrevious'
import Link from 'next/link'

const PreviousWeeklyChallenges: React.FC = () => {
    return (
        <div className='xl:px-28 pb-28 w-11/12 xl:w-full mx-auto'>
            <div className='pb-16 px-0 md:px-8 xl:px-0 flex justify-between flex-col sm:flex-row items-center'>
                <h2 className='text-4xl font-semibold text-center sm:text-left'>⭐ Previous Challenges</h2>
            </div>
            <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[130px] gap-16 rounded-2xl'>
                {weeklyChallengePrevious.map((challenge) => {
                    return (
                        <div className='mx-auto'>
                            <ChallengeCardPrevious
                                img={challenge.img}
                                title={challenge.title}
                                description={challenge.description}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PreviousWeeklyChallenges