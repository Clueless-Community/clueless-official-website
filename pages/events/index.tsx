import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../lib/clientApp';
import Swag from '../components/events/Swag';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar/Navbar';
import UpcomingEventCard from '../components/Home/Events/UpcomingEventCard';
import { CircularProgress } from '@mui/material';
import { format } from 'date-fns';
import Head from 'next/head';


const Events = () => {
    const [eventData, seteventData] = React.useState<any[]>([])
    const [isFetched, setisFetched] = React.useState<boolean>(false)

    const getEventData = React.useCallback(async () => {
        const data: ((prevState: never[]) => never[]) | { id: string; }[] = []
        await getDocs(collection(db, 'events')).then((snapshot: { docs: any[]; }) => {
            snapshot.docs.map((doc) => {
                data?.push({ ...doc.data(), id: doc.id })
            })
            seteventData(data)
            setisFetched(true)
        }).catch((err: any) => {
            console.log(err);
        })
    }, [])

    React.useEffect(() => {
        getEventData()
    }, [getEventData])
    return (
        <div>
            {isFetched ? (
                <Head>
                    <title>
                        ClueLess | Events</title>
                    <meta name="description" content="A virtual Open source and development community" />
                </Head>
            ) : (
                <Head>
                    <title>
                        Loading...</title>
                    <meta name="description" content="A virtual Open source and development community" />
                </Head>
            )}
            {isFetched ?
                <div>
                    <Navbar />
                    <Swag />

                    <div className='xl:my-20 my-4 md:mx-40 mx-4'>
                        <h1 className='text-4xl text-center py-8 font-semibold' >Upcoming Events </h1>
                        {eventData.length > 0 ? <div>

                            <div className='space-y-4'>
                                {eventData.map((data, i) => {
                                    const date = format(new Date(data.date.seconds * 1000), 'do LLLLLL, yyyy')
                                    return <UpcomingEventCard key={i} eventposter={data.event_icon_image} heading={data.event_name} venue={data.venue_name} Time={data.time_period} instructorOrspeaker={data.speakers_info}
                                        attractions="Win T-shirts, swags and free food. 🚀 " agenda={data.agenda} eventId={data.id} date={date} />
                                })}
                            </div>
                        </div> :
                            <div className="flex flex-col justify-center items-center">
                                <img src="/Calendar.svg" alt="" className="w-[250px] md:w-[400px] mt-8" />
                                <h1 className="text-center text-lg md:text-2xl text-[#908A8A] mt-8">No Upcoming Events listed for now!</h1>
                            </div>
                        }
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
                </div> : (
                    <div className='flex justify-center items-center h-screen'>
                        <CircularProgress />
                    </div>
                )}
            <Footer />
        </div>
    )
}

export default Events