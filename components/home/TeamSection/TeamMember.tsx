// Swiper JS is used for this component
/* eslint-disable @next/next/no-img-element */

import Team from './Team';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay, Mousewheel, Keyboard } from 'swiper';

import teamMembers from '../../../database/teamMembers';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

export default function TeamMember() {
  return (
    <>
      <h1 className="text-[#7EE787] xl:text-[55px] text-center sm:text-start font-semibold xl:leading-[70.5px] leading-[30.5px] my-[55px] text-[36px]">
        Team behind this
      </h1>
      {/* for large Screen */}
      <div className="hidden pb-16 sm:block">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={0}
          loopedSlides={5}
          // keyboard={true}
          spaceBetween={-20}
          // mousewheel={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              // width: 640,
              slidesPerView: 4,
            },
            // when window width is >= 768px
            768: {
              // width: 768,
              slidesPerView: 9,
            },
          }}
          loop={true}
          speed={2500}
          autoplay={{
            delay: 200,
            disableOnInteraction: false,
            reverseDirection: true,
            waitForTransition: true,
          }}
          modules={[Autoplay, EffectCoverflow, Mousewheel, Keyboard]}
          className="mySwiper hidden"
        >
          {teamMembers.map((item, index) => (
            <SwiperSlide
              key={index}
              className="border-4 rounded-full border-[#7EE787]"
            >
              <Team photo_url={item.photo_url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* For Small Screen */}
      <div className="block pb-16 sm:hidden">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={0}
          loopedSlides={4}
          keyboard={true}
          spaceBetween={-20}
          mousewheel={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              // width: 640,
              slidesPerView: 4,
            },
            // when window width is >= 768px
            768: {
              // width: 768,
              slidesPerView: 7,
            },
          }}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow, Mousewheel, Keyboard]}
          className="mySwiper hidden"
        >
          {teamMembers.map((item, index) => (
            <SwiperSlide
              key={index}
              className="border-4 rounded-full border-[#7EE787]"
            >
              <Team photo_url={item.photo_url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
