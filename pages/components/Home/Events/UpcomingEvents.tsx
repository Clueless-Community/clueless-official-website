import React from 'react'
import UpcomingEventCard from './UpcomingEventCard'

const UpcomingEvents = () => {
  return (
    <div>
        <h1 className='text-4xl text-center py-8' >Upcoming Events </h1>
        <div className='px-16'>
        <UpcomingEventCard/>
        </div>
    </div>
  )
}

export default UpcomingEvents