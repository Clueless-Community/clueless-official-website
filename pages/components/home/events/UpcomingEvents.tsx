import React from 'react';
import UpcomingEventCard from './UpcomingEventCard';
import eventData from '../../../../database/eventData';

const UpcomingEvents = () => {
  return (
    <div className="my-[150px] xl:ml-[105px] md:mx-20 mx-[20px] sm:px-[100px] md:px-[90px] lg:px-[130px] xl:px-0">
      <h1 className="text-[#7EE787] xl:text-[55px] font-semibold xl:leading-[70.5px] leading-[30.5px] my-[55px] text-[36px] mt-[500px] sm:mt-0">
        Ongoing Events{' '}
      </h1>
      <div>
        {eventData.map((data: any, i: number) => {
          return (
            <div key={i} className="my-10">
              <UpcomingEventCard
                eventposter={data.event_icon_image}
                heading={data.event_name}
                Time={data.time_period}
                instructorOrspeaker={data.speakers_info}
                desc={data.desc}
                eventId={data.project_id}
                date={data.date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;
