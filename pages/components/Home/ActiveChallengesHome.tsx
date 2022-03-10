import React from 'react'
import ChallengeCardActive from '../cards/ChallengeCardActive'
import weeklyChallenge from '../../../database/dummyDB/dummyChallenge'
import Link from 'next/link'

const ActiveChallengesHome: React.FC = () => {
  return (
    <div className='xl:px-28 py-28 w-11/12 xl:w-full mx-auto'>
      <div className='pb-16 px-0 md:px-8 xl:px-0 flex justify-between flex-col sm:flex-row items-center'>
        <h2 className='text-4xl font-semibold text-center sm:text-left'>⭐ Active Weekly Challenges</h2>
        <Link href="/weekly-challenges">
        <button className='btn-blue mt-8 sm:mt-0'>View All</button>
        </Link>
      </div>
        <div  className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[130px] gap-16 rounded-2xl'>
        {weeklyChallenge.map((challenge) => {
            return(
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

export default ActiveChallengesHome