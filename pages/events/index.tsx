import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../lib/clientApp';
import PreviousEventCard from '../components/Home/Events/PreviousEventCard';

const index = () => {
    const [eventData, seteventData] = React.useState([])
    React.useEffect(() => {
        getDocs(collection(db, 'events')).then((snapshot) => {
            snapshot.docs.map((doc) => {
                // eventData.push({ ...doc.data(), id: doc.id })
                // seteventData()
            })

        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            {/* {eventData.map((data, i) => {
                return <PreviousEventCard eventposter={data.event_name} heading={''} venue={''} startingTime={''} endingTime={''} instructorOrspeaker={{ profileURL: '' }} agenda={[]} />
            })} */}
        </div>
    )
}

export default index