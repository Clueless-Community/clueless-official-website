/* eslint-disable @next/next/no-img-element */
const contact = () => {
  return (
    <div className=" mb-12">
      <div className=" flex flex-col md:hidden items-start justify-start px-0 ">
        <h1 className="text-white text-4xl font-semibold sm:text-3xl sm:font-semibold md:text-5xl md:font-bold pt-7">
          Contact Us
        </h1>
        <p className="text-green-400 font-normal text-[18px] sm:text-xl mt-5 mb-[13%]">
          Have any questions? We would love to hear from you
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center w-full justify-between pt-[4%]">
        <div className=" w-full md:w-[50%] lg:w-[35%]">
          <h1 className="hidden md:block text-white text-2xl font-semibold md:text-3xl sm:font-semibold lg:text-5xl md:font-bold">
            Contact Us
          </h1>
          <p className="hidden md:block text-green-400 font-normal md:text-base lg:text-xl mt-5 mb-[7%] ">
            Have any questions? We would love to hear from you
          </p>
          <div className="flex flex-col w-full md:w-[80%] lg:w-full">
            <input
              className="border-solid border-[1px] border-green-400 bg-transparent mt-[5%] pt-2 pb-2 md:pt-1 md:pb-1 lg:pt-2 lg:pb-2 pl-3 rounded-md text-white"
              type="email"
              placeholder="Write your Email"
            />

            <input
              className="border-solid border-[1px] border-green-400 bg-transparent mt-[8%] pt-2 pb-2 md:pt-1 md:pb-1 lg:pt-2 lg:pb-2 pl-3 rounded-md text-white"
              type="text"
              placeholder="Enter the subject"
              id=""
            />

            <textarea
              className="border-solid border-[1px] border-green-400 bg-transparent mt-[8%] pt-2 pb-2 md:pt-1 md:pb-1 lg:pt-2 lg:pb-2 pl-3 rounded-md text-white resize-none"
              rows={7}
              placeholder="How can we help you?"
              id=""
            />
            <div className="flex items-center justify-center md:block">
              <button className="h-[40px] w-40 text-base items-center font-semibold mt-6 bg-green-400 hover:bg-green-500 rounded-md ">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* <div className='flex  justify-center mb-[70px] md:mb-0 md:w-[70%] '> */}

        <img
          className="w-[80%] sm:w-[70%] mb-[70px] md:mt-[7.75rem] md:w-[45%] mr-[0] lg:mr-[35px] lg:w-[40%] "
          src="/LandingPage/Contact/contact.png"
          alt=""
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default contact;
