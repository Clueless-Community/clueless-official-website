import React from 'react'
import ChallengeCardActive from '../cards/ChallengeCardActive'
import FilterButton from "./FilterButton"

type Props ={
    type: string,
}

const FilteredWeeklyActiveChallenge: React.FC<Props>= ({type}) => {


    return (
        <div className='xl:px-28 pb-28 pt-10 w-11/12 xl:w-full mx-auto'>
            <div className='pb-12 px-0 md:px-8 xl:px-0 flex justify-between flex-col sm:flex-row items-center'>
                <h2 className='text-4xl font-semibold text-center sm:text-left'>⭐{type} Active Challenges</h2>
                <FilterButton 
                type={type}
                />
            </div>
            <div className='flex md:justify-between justify-center'>
                <ChallengeCardActive
                    title="Web-development CSS Challenge"
                    xp={500}
                    time='27jun-30jun'
                    img="https://miro.medium.com/max/750/1*3T7J7csXY8u36acofw5N8g.jpeg"
                />
            <img src="/filtered weekly challenge.png" alt="" className='w-96 h-96 hidden md:block' />
            </div>
        </div>
    )
}

export default FilteredWeeklyActiveChallenge