import React from 'react'
import PreviousEventCard from './PreviousEventCard'
import { SvgButton } from '../../../../styles/Mui-styles/HoverFillButton'



const PreviousEvents = () => {
    return (
        <div className=''>
            <h1 className='text-4xl text-center py-8 font-semibold' >Previous Events </h1>
            {/* <div className=''>
                {eventData.map((data, i) => {
                    return <PreviousEventCard eventposter={data.eventposter} heading={data.heading} venue={data.venue} startingTime={data.startingTime} endingTime={data.endingTime} instructorOrspeaker={data.instructorOrspeaker}
                        participants={data.participants} agenda={data.agenda} winners={data.eventWinners} key={i} />
                })}
            </div> */}
            <SvgButton className='max-w-fit mx-auto mt-10'><span className=' font-nunito font-bold'>Explore All</span> </SvgButton>
        </div>
    )
}

export default PreviousEvents