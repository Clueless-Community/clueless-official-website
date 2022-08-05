import Link from 'next/link'
import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import Navbar from '../components/shared/Navbar/Navbar'
import eventData from '../../dummyEventData'
import Footer from '../components/shared/Footer'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { doc, getDoc, getDocs, query, collection } from 'firebase/firestore'
import { db } from '../../lib/clientApp'
import { IEvent } from '../../interfaces/event-interface'


const dynamicupcomig: React.FC = () => {
    const router = useRouter();

    const { data: session } = useSession();
    const userId = session?.user?.id;

    const [event, setEvent] = React.useState<any | undefined>();
    console.log(event);


    const fetchEvent = async () => {
        const { event_id } = router.query;
        const eventRef = doc(db, 'events', event_id as string);

        const eventsnap = await getDoc(eventRef);
        if (eventsnap.exists()) {
            const data = eventsnap.data() as any;
            setEvent(data);
        } else {
            router.push(`/404`);
        }
    }

    React.useEffect(() => {
        if (!router.isReady) return;
        fetchEvent();
    }, [router.isReady])

    return (
        event ? <div>
            <Navbar />
            <img src={event.event_banner_image} className="w-full h-[150px] md:h-[250px] xl:h-[410px] object-cover absolute" />
            <div className="relative z-1 top-10 md:top-20 xl:top-52">
                <div className='flex flex-col justify-center xl:px-24 px-8 my-20 space-y-8 xl:space-y-3'>
                    <div className='w-full flex justify-between items-start space-x-4'>
                        <img src={event.event_icon_image} className='w-28 md:w-36 xl:w-56 rounded-full' />
                        {/* <button className='bg-skin-main font-semibold text-white px-4 py-3 rounded-md text-lg'>
                            Register
                        </button> */}
                    </div>
                    <div className='xl:ml-60 ' >
                        <div className='xl:space-y-6 space-y-3 xl:-mt-12'>
                            <div className='flex justify-between'>

                                <div className='space-y-3'>
                                    <span className='bg-[#1954ca4b] rounded-full py-2 px-3 font-semibold xl:text-xl text-lg'>offline</span>
                                    <h1 className='xl:text-4xl text-3xl font-semibold '>
                                        {event.event_name}
                                    </h1>
                                </div>
                                <div>
                                    <button className='bg-skin-main font-semibold text-white px-4 py-3 rounded-md xl:text-xl text-lg'>
                                        Register
                                    </button>
                                </div>
                            </div>
                            <div className={`text-xl xl:space-y-6 space-y-3`}>
                                <div className={`flex flex-col xl:flex-row xl:space-x-2 xl:items-center`}>
                                    <h1 className='font-semibold text-skin-main'>Venue :</h1>
                                    <h1> {event.venue_name}</h1>
                                </div>
                                <div className={`flex flex-col xl:flex-row xl:items-center xl:space-x-2 xl:w-fit w-full`}>
                                    <h1 className='font-semibold text-skin-main'>Date & Time :</h1>
                                    <h1>{event.time_period}</h1>
                                </div>
                            </div>
                            <div className='space-y-4'>
                                <h1 className='xl:text-3xl text-2xl font-semibold text-skin-main'>Instructor / speaker </h1>
                                <div className='flex justify-start max-w-fit flex-wrap'>
                                    {event.speakers_info.map((speaker: any) => {
                                        return <section className='flex justify-start space-x-4'>
                                            <img src={speaker.image} className='xl:w-28 w-20 rounded-full border-dashed border-2 border-[#1955CA] m-auto' />
                                            <div className='flex flex-col items-start justify-center space-y-2'>
                                                <h1 className='xl:text-xl text-lg'>{speaker.name}</h1>
                                                <div className='flex justify-center space-x-2 child:text-[#7D7D7D] child:text-3xl'>
                                                    {speaker.linkedinUrl && <a href={speaker.linkedinUrl} target="_blank"><AiFillLinkedin /></a>}
                                                    {speaker.gitHubURL && <a href={speaker.gitHubURL} target="_blank"><AiOutlineGithub /></a>}
                                                    {speaker.twitterURL && <a href={speaker.twitterURL} target="_blank"><AiOutlineTwitter /></a>}
                                                </div>
                                            </div>
                                        </section>
                                    })}


                                </div>

                            </div>
                            <div className='space-y-4'>
                                <h1 className='text-3xl font-semibold'>Agenda</h1>
                                <div className='space-y-6'>
                                    {event.agenda?.map((agenda: any, i: number) => {
                                        return (
                                            <div className='flex flex-col xl:flex-row justify-start xl:items-center xl:text-xl text-lg' key={i}>
                                                <div className='flex xl:items-center justify-start space-x-2 xl:w-80'>
                                                    <GoPrimitiveDot className='text-2xl' />
                                                    <h1 className=''>{agenda.time}</h1>
                                                </div>
                                                <h1 className='w-full ml-2 xl:ml-0'>{agenda.description}</h1>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div> : <></>
    )
}

export default dynamicupcomig