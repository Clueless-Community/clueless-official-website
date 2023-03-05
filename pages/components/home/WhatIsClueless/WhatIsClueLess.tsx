const WhatIsClueLess = () => {
  return (
    <div className="mt-[14.5rem] flex flex-col card items-center gap-[5rem] m-auto sm:flex-row sm:mt-[26.5rem] sm:gap-[2rem] sm:px-[2rem] sm:py-[2rem]">
      <div className="flex flex-col ml-10 mt-[1rem] sm:w-[60%]">
        <h1 className="text-[2rem] text-[#7EE787] pb-8 align-center sm:text-[2.5rem] w-[90%]">
          ClueLess is a student community
        </h1>
        <p className="text-[#E2E2E2] w-[14rem] justify-center sm:text-[1.2rem] sm:w-[80%]">
          Built with the vision to encourage open-source enthusiasts! We provide
          the best resources, conducts weekly contests to test your skills, a
          guide to Open-source, and help you build projects.
        </p>
      </div>
      <div>
        <img src="/whatisclueless.png" alt="" className="w-[80%] m-auto" />
      </div>
    </div>
  );
};

export default WhatIsClueLess;
