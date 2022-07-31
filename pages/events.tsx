import React from 'react'
import Swag from './components/events/Swag'
import UpcomingEvents from './components/Home/Events/UpcomingEvents'
import PreviousEvents from './components/Home/Events/PreviousEvent'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar/Navbar'

const events = () => {
  return (
    <div>
      <Navbar />
      <Swag />
      <div className='xl:my-20 my-4 md:mx-40 mx-4'>
        <UpcomingEvents />
        <PreviousEvents />
      </div>
      <Footer />
    </div>
  )
}

export default events