import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';

function ExploreCard(props: any) {
  return (
    <div className="text-white md:flex border-[1px] border-white w-full rounded-[36px] overflow-hidden z-10">
      <div className="flex-1 bg-[#282E36]/[0.97] md:px-10 px-6 md:py-6 py-4">
        <div className="flex items-center md:flex-row flex-col-reverse">
          <div className="flex-1">
            <h3 className="md:text-[36px] text-[20px] font-[400] text-center md:text-left">
              {props?.data?.title}
            </h3>
            <div className="flex gap-2 mt-3 justify-center md:justify-start">
              {props?.data?.tags.map((item: any, index: any) => (
                <div
                  className="bg-[#7EE787] px-4 py-1 text-[#1b1b1b] rounded-full md:text-[16px] text-[12px] text-center"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-3 md:mb-0">
            <Image
              width={100}
              height={100}
              src="/ClueLess Logo.png"
              alt="Logo"
              className="md:w-12 md:h-12 w-[22px] h-[20px] mix-blend-luminosity invert brightness-0"
            />
          </div>
        </div>
        <div className="border-t md:mt-8 mt-4" />
        <div className="md:text-[20px] text-[12px] font-[400] text-[#e2e2e2] md:mt-3 mt-2 leading-7 md:text-left text-center">
          {props?.data?.desc}
        </div>
      </div>
      <div className="md:w-10 bg-[#7EE787] flex justify-center items-center p-1">
        <FaAngleRight className="w-6 h-6 text-black" />
      </div>
    </div>
  );
}

export default ExploreCard;
