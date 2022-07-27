import React from 'react'
import UpcomingEventCard from './UpcomingEventCard'
import eventData from '../../../../dummyEventData'



const UpcomingEvents = () => {
  return (
    <div>
      <h1 className='text-4xl text-center py-8' >Upcoming Events </h1>
      <div className='md:mx-28 mt-10 flex flex-col lg:text-left sm:mb-32 '>
        {eventData.map((data, i) => {
          return <UpcomingEventCard eventposter={data.eventposter} heading={data.heading} venue={data.venue} startingTime={data.startingTime} endingTime={data.endingTime} instructorOrspeaker={data.instructorOrspeaker}
            attractions={data.attractions} agenda={data.agenda} />
        })}

      </div>
    </div>
  )
}

export default UpcomingEvents