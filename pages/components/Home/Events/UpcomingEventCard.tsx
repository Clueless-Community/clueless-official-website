import React from 'react'
import Link from 'next/link'
import { useSession } from "next-auth/react";
import SignInRequired from '../../Modals/SignInRequired'

interface agenda {
    startTime: string,
    endingTime: string,
    amOrpm: string,
    subject: string,
}
interface dataProps {
    eventposter: string,
    heading: string,
    venue: string,
    Time: string,
    instructorOrspeaker: {
        name: string,
        image: string,
        linkedinLink: string,
        githubLink: string,
        twitterLink: string,
    }[]
    attractions: string,
    agenda: Array<agenda>
}




const UpcomingEventCard: React.FC<dataProps> = ({ eventposter, heading, venue, Time, instructorOrspeaker, attractions, agenda }) => {
    const { data: session } = useSession();
    const allSpeakerNames = instructorOrspeaker?.map(key => key.name)
    console.log(allSpeakerNames);

    return (
        <div className=' bg-[#1954ca25] border-dashed border-2 border-opacity-30 border-black font-nunito xl:flex-row flex-col flex xl:justify-between xl:p-8 p-3 rounded-xl relative space-y-3 xl:space-y-0'>
            <section className={`flex xl:justify-start xl:space-x-8 space-x-4  pb-4 xl:pb-0 w-full`}>
                <div>
                    <img src={eventposter} className="rounded-xl h-auto w-36 object-cover xl:h-[200px] xl:w-[200px]" />
                </div>
                <div className='flex flex-col xl:justify-center  space-y-16 xl:text-xl'>
                    <div className={`flex flex-col xl:justify-center justify-between xl:space-y-4`}>
                        <h1 className='xl:text-4xl text-2xl hidden xl:block'> {heading}</h1>
                        <div className={`flex xl:flex-row flex-col xl:justify-start justify-evenly xl:space-x-8 h-full xl:space-y-0 space-y-4`}>
                            <div className={`flex xl:flex-row flex-col xl:space-x-2 justify-start`}>
                                <h1 className='font-semibold'>Venue :</h1>
                                <h1>{venue}</h1>
                            </div>
                            <div className={`flex space-x-2 justify-start`}>
                                <h1 className='font-semibold'>Time :</h1>
                                <h1>{Time}</h1>
                            </div>
                        </div>
                        <div className='hidden xl:block xl:space-y-4'>
                            <div className={`flex xl:flex-row flex-col space-x-2`}>
                                <h1 className='font-semibold'>Instructor / speaker :</h1>
                                {allSpeakerNames?.map((item, i) => {
                                    return <h1 key={i}>{item}</h1>
                                })}
                            </div>
                            <h1 className='text-xl font-semibold'>{attractions}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <h1 className='xl:text-4xl text-2xl xl:hidden font-semibold'> {heading}</h1>
            <div className={`flex flex-col  xl:hidden text-xl`}>
                <h1 className='font-semibold'>Instructor / speaker :</h1>
                <h1>{instructorOrspeaker[0].name}</h1>
            </div>
            <div>
                {session ? <Link href={`/events/${heading}`}>
                    <button className='bg-skin-main px-4 xl:py-3 py-2 rounded-md text-white font-semibold xl:text-xl text-lg'>View</button>
                </Link> : <SignInRequired />}

            </div>

        </div>
    )
}

export default UpcomingEventCard