/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface dataProps {
  eventposter: string;
  heading: string;
  Time: string;
  instructorOrspeaker: string;
  desc: string;
  eventId: string;
  date: string;
}

const UpcomingEventCard: React.FC<dataProps> = ({
  eventposter,
  heading,
  Time,
  instructorOrspeaker,
  desc,
  eventId,
  date,
}) => {
  return (
    <div className=" bg-[#282e36f7] xl:flex-row flex-col flex xl:justify-between rounded-[46px] relative xl:h-[232px] mb-[50px]">
      <div className="xl:h-[231px] xl:w-[515px] h-[293px]">
        <img
          src={eventposter}
          className="xl:w-[515px] xl:h-[231px] xl:rounded-l-[44px] xl:rounded-tr-[0px] rounded-t-[19px] h-[293px] w-full"
          alt="event poster"
        />
      </div>
      <section className="flex xl:justify-start xl:space-x-8 space-x-4 xl:w-[1194px] pl-[39px] border-slate-400 xl:border-y-[0.1px] border-x-[0.1px] xl:border-x-[0px] pr-[39px]">
        <div className="flex flex-col xl:justify-center space-y-16 xl:text-xl xl:pr-[200px]">
          <div className={`flex flex-col xl:justify-center `}>
            <h1 className="font-[550] xl:text-3xl text-[28px] text-[#B6F5BB] xl:leading-[40px] pb-[10px] leading-[70.5px] pt-[10px] xl:pt-[0px]">
              {' '}
              {heading}
            </h1>
            <div
              className={`flex md:flex-row flex-col flex-wrap xl:justify-start md:child:mr-8 h-full md:space-y-0 space-y-4 child:mb-4`}
            >
              <div
                className={`flex 2xl:flex-row flex-col 2xl:space-x-2 justify-start xl:pb-2`}
              >
                <h1 className=" text-[#E2E2E2] text-base font-light">{desc}</h1>
              </div>
              <div
                className={`flex 2xl:flex-row flex-row space-x-2 justify-start`}
              >
                <h1 className="font-bold text-[#E2E2E2] text-base">
                  Timeline :
                </h1>
                <h1 className="flex flex-col text-[#E2E2E2] text-base font-light xl:pr-[80px]">
                  {date}
                </h1>
              </div>
              <div className={`flex flex-row space-x-2 justify-start`}>
                <h1 className="font-bold text-[#E2E2E2] text-base">Time :</h1>
                <h1 className=" text-[#E2E2E2] text-base font-light pb-[10px]">
                  {Time}
                </h1>
              </div>
            </div>
            <div className="md:block xl:space-y-4 pb-[20px] xl:pb-[0px] pt-[5px] xl:pt-[0px]">
              <div className={`flex flex-row space-x-2`}>
                <h1 className="pb-2 text-[#E2E2E2] text-base">
                  Instructor / speaker :
                </h1>
                <h1 className="text-[#E2E2E2] text-base font-light">
                  {instructorOrspeaker}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-right flex items-center space-x-4 h-fit">
        {/* <Link href={`/events/[event_id]`} as={`/events/${eventId}`} passHref> */}
        <button className="bg-[#7EE787] xl:rounded-r-[44px] text-[#272D35] xl:w-[111px] xl:h-[231px] text-10xl xl:rounded-bl-[0px] rounded-b-[19px] h-[100px] w-full">
          <ArrowForwardIosIcon className="text-[42px] font-bold" />
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default UpcomingEventCard;
