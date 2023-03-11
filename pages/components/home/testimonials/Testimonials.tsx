import React from 'react';
import Image from 'next/image';
function Testimonials() {
  return (
    <>
      <div className="my-[48px] container mx-auto">
        <h1 className="text-[#7EE787] xl:text-[55px] font-semibold xl:leading-[70.5px] leading-[30.5px] my-[55px] text-[36px] mt-0 text-center">
          Testimonials
        </h1>
        <div className="lg:mx-20 my-4 flex justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div className="p-6 flex justify-center bg-gradient-to-r from-teal-500 to-teal-800 h-fit rounded-2xl">
              <Image
                src="/testimonial1.svg"
                width={800}
                height={300}
                alt="Testimonial 1"
              />
            </div>
            <div className="px-6 py-4 flex justify-center bg-gradient-to-r from-teal-500 to-teal-800 h-fit rounded-2xl">
              <Image
                src="/testimonial2.svg"
                width={300}
                height={100}
                alt="Testimonial 1"
              />
            </div>
            <div className="p-6 flex justify-center bg-gradient-to-r from-teal-500 to-teal-800 h-fit rounded-2xl">
              <Image
                src="/testimonial1.svg"
                width={800}
                height={300}
                alt="Testimonial 1"
              />
            </div>
            <div className="p-6 flex justify-center bg-gradient-to-r from-teal-500 to-teal-800 h-fit rounded-2xl">
              <Image
                src="/testimonial3.svg"
                width={400}
                height={300}
                alt="Testimonial 1"
              />
            </div>
            <div className="p-6 flex justify-center bg-gradient-to-r from-teal-500 to-teal-800 h-fit rounded-2xl">
              <Image
                src="/testimonial1.svg"
                width={800}
                height={300}
                alt="Testimonial 1"
              />
            </div>
            <div className="p-6 flex justify-center bg-gradient-to-r from-teal-500 to-teal-800 h-fit rounded-2xl">
              <Image
                src="/testimonial3.svg"
                width={400}
                height={300}
                alt="Testimonial 1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
