import React from 'react';

function PcOpenSource() {
  return (
    <>
      <div className="bg-black flex h-[600px] box-border">
        <div className="p-3 w-1/3 h-[20rem] m-[5rem] space-y-10">
          <h1 className="leading-[3rem] text-[40px]">
            <span className="font-bold  text-[#7EE787]">
              Learn about some biggest
            </span>{' '}
            <span className="text-white">Open-source Programs</span>
          </h1>
          <button className="bg-[#7EE787] px-[3rem] py-[10px]  rounded-md">
            <a>Explore</a>
          </button>
        </div>
        <div className="m-6  h-[600px] text-[30px] relative">
          <div className="absolute z-7">
            <div className="bg-[#282E36] rounded-[4rem] h-[200px] space-y-6  w-[40rem] border border-white bg-blend-darken">
              <div className="flex mx-4 my-1 justify-between">
                <h3 className="ml-4 text-white h-[4rem] w-[16rem] my-2">
                  LFX Mentorship
                </h3>
                <img
                  className="h-[5rem]"
                  src="https://s3-alpha-sig.figma.com/img/e07e/292e/cf33fc0069acc75162c1ada73a19afb5?Expires=1677456000&Signature=Dh2u1xYWLqOStBhfuXimN1pSchIbiOp5pWIDYb9GqJ1FtdK7517XvYdFczJQcTm7aLsKd-s89g73TG426kdlthPESLn0mq3NCPhaP209MaPhUK6B6CmBYNgJG1tiR0bnFeHT2pwl8gKubsD~7-HUkv5-4rvN25RIF~x3ad3y7VkG90~uADe0n4Eldw3ynyIYixhwCvMDf133YURE5j8RMtpQEeys4bhkqZGFtoduOGj~E8FV0bfu~V2et9zNwTI6e2-PTbfbh9TwWqCyesvHSFl0CIpHMhCUwhGuIo-i8HqXH8yYVP-LIjqS6cmMFySjL0apLtsiRbamviJRPcZmVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </div>
              <div className="space-y-3 mx-4">
                <div className="h-1 max-w-[300px] bg-white mx-5"></div>
                <div className="h-1 max-w-[200px] bg-white mx-5"></div>
                <div className="h-1 max-w-[270px] bg-white mx-5"></div>
                <div className="h-1 max-w-[300px] bg-white mx-5"></div>
              </div>
            </div>
          </div>
          <div className="absolute -left-10 my-[6rem] z-8">
            <div className="bg-[#272D36] rounded-[4rem] h-[200px] space-y-6 right-15 shadow-green-900 w-[40rem] border border-white mr-4">
              <div className="flex mx-4 my-1 justify-between">
                <h3 className="ml-4 text-white h-[4rem] w-[16rem] my-2 mx-4">
                  MLH Fellowship
                </h3>
                <img
                  className="h-[4rem] m-[10px]"
                  src="https://s3-alpha-sig.figma.com/img/38b8/d974/eeb5461de05772329749aa6d58df9fa4?Expires=1677456000&Signature=LsPaZbQG30YmCIxXvjJLrirhjTZdcMqaq2WAyLvMVrI8Eochzkb18Nhr9hkby3oqNfuMy-E48x-50VflD2CcNpKEhjc9pF~aXRf3gQ-6doiIFcGL78rw4~oNVH1q3W~dpKnu-i7FyuG8noMcbLCG2fm59~4~L2~~FUJB6iT8GoNKdK7X6Kw-J6biUg0OduVsICom-vP-yGX4YR6P07DMKXhGoDJqHvCWfejAIxPhRcaR441uTxjJvLA0MmonqCrpH~mMP~c2vabE-O--oHvE7LNQUAzOa1DijFwAmksTeiV6MLIVudTuxqvmAK-FioIaKLySZQcaj8ZmoYSNWdbYTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </div>
              <div className="space-y-3 mx-4">
                <div className="h-1 max-w-[300px] bg-white mx-5"></div>
                <div className="h-1 max-w-[200px] bg-white mx-5"></div>
                <div className="h-1 max-w-[270px] bg-white mx-5"></div>
                <div className="h-1 max-w-[300px] bg-white mx-5"></div>
              </div>
            </div>
          </div>
          <div className="absolute -left-20 my-[12rem] z-10">
            <div className="bg-[#282E36F7] rounded-[4rem] h-[200px] space-y-6 right-20 shadow-green-900 w-[40rem] border border-white mr-4">
              <div className="flex mx-4 justify-between">
                <h3 className="ml-4 text-white h-[4rem] w-[45rem] my-1">
                  Google Summer Of Code
                </h3>
                <img
                  className="h-[5rem] left-[10rem]"
                  src="https://s3-alpha-sig.figma.com/img/89c1/dab1/f0ca5dbca20d3a525ee8a5462a22c75c?Expires=1677456000&Signature=L2zh-U-pufE~49nVlMkNLBIuVcLW0JRD8~In~zbTBZyBH5s90SFK8nGJLrNSDHBKH2rvoCdXG4M~8YBbHRl0G3~yHRpoU03J4PTU-Wxp6nGZ~KWUGptgnS8kntl4qzt-Qgg-M~W30nZrgRqoVScOX04~X9ZsgpaT-PmG7G34jECp48~BoGweFJhHNOqpmj3~Lr91Kx8yCdlgGZYYy608xmcHz0sZ5FHjBh~CrJzhsik7C0zkSaosNcwABUYwwQNSToEWYtSZoizPJ1taOdrpu6zVgdbNcEyq4NfPKRnS8PQx0n4dfGwvqJxOudrH4URIKUGEeLZGb7YAj3PI8V-cMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </div>
              <div className="space-y-3 mx-4">
                <div className="h-1 max-w-[380px] bg-white opacity-30 mx-5"></div>
                <div className="h-1 max-w-[290px] bg-white mx-5"></div>
                <div className="h-1 max-w-[330px] bg-white mx-5"></div>
                <div className="h-1 max-w-[380px] bg-white mx-5"></div>
              </div>
            </div>
          </div>
          <div className="absolute -left-20 top-15 w-[30rem] h-[20rem] bg-[#43ff64d9] rounded-full blur-[140px] opacity-40 z-5"></div>
        </div>
      </div>
    </>
  );
}

export default PcOpenSource;
