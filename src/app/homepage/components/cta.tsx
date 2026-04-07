import Image from "next/image";
import { HowItWorksImage, LogoMain } from "../../../../public";
import { BsArrowRight } from "react-icons/bs";

const CTA = () => {
  return (
    <div>
      {" "}
      <div className="relative py-24 lg:py-28 bg-[#f2eee6] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={HowItWorksImage}
            alt="How it works background"
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="relative z-10">
          <div className="flex justify-center">
            <Image
              src={LogoMain}
              alt="Journey logo mark"
              className="w-48 h-auto object-contain"
              width={1000}
              height={1000}
            />
          </div>

          <div className="px-6 sm:px-8 lg:px-12 max-w-3xl mx-auto">
            <div className="text-center overflow-hidden">
              <h1 className="mt-3 text-4xl lg:text-7xl text-gray-900 font-medium">
                One membership. Thousands of stays. Rewards you want.
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center pt-14 gap-4">
            <button className="inline-flex items-center gap-4 rounded-full bg-slate-800 px-8 py-3 text-sm font-normal text-white transition-all hover:bg-slate-700 hover:gap-5 shrink-0">
              SEARCH FOR A STAY
              <BsArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-4 rounded-full bg-transparent border-2 px-8 py-3 text-sm font-normal text-brown-800 transition-all hover:bg-white hover:gap-5 shrink-0">
              BECOME A MEMBER
              <BsArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
