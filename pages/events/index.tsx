import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../lib/clientApp';
import Swag from '../components/events/Swag';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar/Navbar';
import UpcomingEventCard from '../components/Home/Events/UpcomingEventCard';
import PreviousEventCard from '../components/Home/Events/PreviousEventCard';
import { useSession } from "next-auth/react";


const index = () => {


    const [eventData, seteventData] = React.useState<any[]>([])
    console.log(eventData);

    const getEventData = async () => {
        const data: ((prevState: never[]) => never[]) | { id: string; }[] = []
        getDocs(collection(db, 'events')).then((snapshot) => {
            snapshot.docs.map((doc) => {
                data?.push({ ...doc.data(), id: doc.id })
            })
            console.log(eventData);
            seteventData(data)

        }).catch((err) => {
            console.log(err);
        })
    }

    React.useEffect(() => {
        getEventData()
    }, [])

    return (
        <div>
            <Navbar />
            <Swag />
            <div className='xl:my-20 my-4 md:mx-40 mx-4'>
                <h1 className='text-4xl text-center py-8 font-semibold' >Upcoming Events </h1>
                <div className='space-y-4'>
                    {eventData.length > 0 && eventData.map((data, i) => {
                        return <UpcomingEventCard eventposter={data.event_icon_image} heading={data.event_name} venue={data.venue_name} Time={data.time_period} instructorOrspeaker={data.instructorOrspeaker}
                            attractions={data.attractions} agenda={data.agenda} />
                    })}
                </div>
                {/* <div className=''>
                    <h1 className='text-4xl text-center py-8 font-semibold' >Previous Events </h1>
                    <div className=''>
                        {eventData.map((data, i) => {
                            return <PreviousEventCard eventposter={data.eventposter} heading={data.heading} venue={data.venue} startingTime={data.startingTime} endingTime={data.endingTime} instructorOrspeaker={data.instructorOrspeaker}
                                participants={data.participants} agenda={data.agenda} winners={data.eventWinners} key={i} />
                        })}
                    </div>
                    <SvgButton className='max-w-fit mx-auto mt-10'><span className=' font-nunito font-bold'>Explore All</span> </SvgButton>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default index