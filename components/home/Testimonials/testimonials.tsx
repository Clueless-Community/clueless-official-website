/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { TwitterTweetEmbed } from 'react-twitter-embed';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    variableWidth: true,
  };
  return (
    <div className="min-h-[45rem]">
      <div className=" flex justify-center mb-5">
        <h1 className="text-green-400 font-bold text-5xl">Testimonial</h1>
      </div>
      <div className="w-[95%] flex flex-col justify-center item-center">
        <Slider {...settings}>
          <div className="px-5">
            <TwitterTweetEmbed
              tweetId={'1581474030871191552'}
              options={{ theme: 'dark' }}
            />
          </div>
          <div className="px-5">
            <TwitterTweetEmbed
              tweetId={'1577849959944458240'}
              options={{ theme: 'dark' }}
            />
          </div>

          <div className="px-5">
            <TwitterTweetEmbed
              tweetId={'1576296798783610880'}
              options={{ theme: 'dark' }}
            />
          </div>

          <div className="px-5">
            <TwitterTweetEmbed
              tweetId={'1584548590025728000'}
              options={{ theme: 'dark' }}
            />
          </div>

          <div className="px-5">
            <TwitterTweetEmbed
              tweetId={'1577897524714737665'}
              options={{ theme: 'dark' }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
