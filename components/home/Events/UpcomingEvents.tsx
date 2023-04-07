import React from 'react';
import eventData from '../../../database/eventData';
import UpcomingEventCard from './UpcomingEventCard';

const UpcomingEvents = () => {
  return (
    <div id="events" className="my-52 relative">
      <div className="green-gradient absolute z-0 top-0 opacity-70 -left-20 "></div>
      <h1 className="text-[#7EE787] xl:text-[55px] font-semibold xl:leading-[70.5px] leading-[30.5px] md:my-[55px] text-[36px]">
        Ongoing Events{' '}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-0 xl:grid-cols-1">
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
