import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MobileSwipper = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    variableWidth: true,
  };
  return (
    <div className="">
      <div className=" flex justify-center mb-10">
        <h1 className="text-green-400 font-bold text-5xl">Testimonial</h1>
      </div>

      <Slider {...settings}>
        <div className="flex justify-center items-center m-4 p-4">
          <img src="./testimonial/1.png" className="h-80 " alt="" />
        </div>
        <div className="flex justify-center items-center m-4 p-3">
          <img src="./testimonial/2.png" className="h-80 " alt="" />
        </div>
        <div className="flex justify-center items-center m-4 p-2">
          <img src="./testimonial/3.png" className="h-80 " alt="" />
        </div>
        <div className="flex justify-center items-center m-4 p-3">
          <img src="./testimonial/4.png" className="h-80" alt="" />
        </div>
        <div className="flex justify-center items-center m-4 p-3">
          <img src="./testimonial/5.png" className="h-80" alt="" />
        </div>
        <div className="flex justify-center items-center m-4">
          <img src="./testimonial/6.png" className="h-80" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default MobileSwipper;
