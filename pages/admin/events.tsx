import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../lib/clientApp';
import Head from 'next/head';
import { CircularProgress } from '@mui/material';
import UpcomingEventCard from '../components/Home/Events/UpcomingEventCard';
import { format } from 'date-fns';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer';


const events = () => {

  const [eventData, seteventData] = React.useState<any[]>([])

  const getEventData = React.useCallback(async () => {
    const data: ((prevState: never[]) => never[]) | { id: string; }[] = []
    getDocs(collection(db, 'events')).then((snapshot: { docs: any[]; }) => {
      snapshot.docs.map((doc) => {
        data?.push({ ...doc.data(), id: doc.id })
      })
      seteventData(data)

    }).catch((err: any) => {
      console.log(err);
    })
  }, [])

  React.useEffect(() => {
    getEventData()
  }, [getEventData])

  console.log(eventData);

  return (
    <div>
      {eventData.length > 0 ? <div>
        <Navbar />
        <div className='xl:my-20 my-4 xl:mx-40 md:mx-20 mx-4'>
          <h1 className='text-4xl py-8 font-semibold' >Upcoming Events </h1>
          <div className='space-y-4'>
            {eventData.map((data, i) => {
              const date = format(new Date(data.date.seconds * 1000), 'do LLLLLL, yyyy')
              return <UpcomingEventCard key={i} eventposter={data.event_icon_image} heading={data.event_name} venue={data.venue_name} Time={data.time_period} instructorOrspeaker={data.speakers_info}
                attractions="Win T-shirts, swags and free food. 🚀 " agenda={data.agenda} eventId={data.id} date={date} />
            })}
          </div>
        </div>
        <Footer />
      </div> : (<>
        <Head>
          <title>Loading events...</title>
          <meta name="description" content="A virtual Open source and development community" />
          <meta property="og:image" content="https://i.ibb.co/WVBNFXB/Clueless-SS.png" />
          {/* <meta name="og:image" content={event.event_banner_image} /> */}
        </Head>
        <div className='flex justify-center items-center h-screen'>
          <CircularProgress />
        </div>
      </>)}
    </div>
  )
}

export default events