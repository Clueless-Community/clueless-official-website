import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React from 'react'
import { db } from '../../../../lib/clientApp';
import UpcomingEventCard from './UpcomingEventCard';
import { format } from 'date-fns';
import { CircularProgress } from '@mui/material';
import eventData from '../../../../database/eventData'



const UpcomingEvents = () => {
  // const router = useRouter()
  // const [eventData, seteventData] = React.useState<any>([])

  // const getEventData = async () => {
  //   const eventRef = collection(db, 'events',)
  //   const eventSnap = await getDocs(eventRef);
  //   eventSnap.forEach(doc => {
  //     seteventData((event: any) => { return [{ project_id: doc.id, ...doc.data() }, ...event] })
  //   })
  // }

  // console.log(eventData);


  // React.useEffect(() => {
  //   if (!router.isReady) return;
  //   getEventData();
  // }, [router.isReady])

  return (

    <div className='xl:my-[300px] my-4 xl:ml-[105px] md:mx-20 mx-4'>
      <h1 className='text-[#7EE787] text-[55px] font-semibold leading-[70.5px] my-[55px]' >Ongoing Events </h1>
      <div>
        {eventData.map((data: any, i: number) => {
          // const date = format(new Date(data.date.seconds * 1000), 'do LLLLLL, yyyy')
          return (
            <div key={i} className="my-10">
              <UpcomingEventCard eventposter={data.event_icon_image} heading={data.event_name} venue={data.venue_name} Time={data.time_period} instructorOrspeaker={data.speakers_info} agenda={data.agenda} eventId={data.project_id} date={data.date} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UpcomingEvents