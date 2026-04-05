"use client";

import Image from "next/image";
import { HowItWorksImage } from "../../../../public";
import { BsArrowRight } from "react-icons/bs";
import { CgLock } from "react-icons/cg";

const HowItWorks = () => {
  return (
    <div>
      <div className="relative py-36 bg-[#f2eee6] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={HowItWorksImage}
            alt="How it works background"
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="relative z-10">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="text-center overflow-hidden">
              <h1 className="mt-3 text-4xl lg:text-8xl text-gray-900 font-medium">
                Good taste deserves to be rewarded
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 bg-[#f2eee6] px-4 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div className=" flex flex-col justify-center px-12 py-20 gap-1  rounded-4xl  bg-white">
          <div className="lg:max-w-lg mx-auto ">
            {/* Header */}
            <div className="mb-12 flex flex-wrap items-center gap-4">
              <h2 className="text-4xl font-light tracking-widest text-slate-400 italic">
                HOW IT
              </h2>
              <div className="flex-1 border-t border-slate-300"></div>
              <h1 className="text-4xl font-light tracking-widest text-slate-400 italic">
                WORKS
              </h1>
            </div>

            {/* Step Label */}
            <div className="mb-8 flex justify-center items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-400">
                <CgLock className="h-5 w-5 text-orange-500" />
              </div>
              <span className="text-xs font-semibold tracking-widest text-orange-500">
                STEP 01
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-5xl lg:text-6xl text-center  text-slate-900">
              Join With a Complimentary Membership
            </h1>

            {/* Description */}
            <p className="mb-12 text-center text-sm  text-slate-600">
              Join Journey, tell us more about how you like to travel, and gain
              access to curated stays and experiences across the globe.
            </p>

            {/* CTA Button */}
            <div className="text-center">
              <button className="inline-flex justify-center items-center gap-3 rounded-full bg-slate-800 px-8 py-3 font-semibold text-white transition-all hover:bg-slate-700 hover:gap-4">
                JOIN JOURNEY
                <BsArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Phone Mockup */}
        <div className="flex-[2] rounded-4xl relative flex items-center justify-center overflow-hidden bg-linear-to-br from-amber-900 via-amber-800 to-orange-900 p-12">
          {/* Blurred background decoration */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-10 h-48 w-48 rounded-full bg-green-700 blur-3xl"></div>
            <div className="absolute bottom-40 right-20 h-64 w-64 rounded-full bg-green-800 blur-3xl"></div>
          </div>

          {/* Phone Mockup */}
          <div className="relative z-10">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 rounded-3xl border-8 border-black bg-white shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-40 h-7 bg-black rounded-b-3xl flex items-center justify-between px-6">
                  <span className="text-white text-xs font-semibold">
                    11:16
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-3 bg-white rounded-sm"></div>
                    <span className="text-white text-xs">📶</span>
                  </div>
                </div>

                {/* Phone Content */}
                <div className="pt-10 pb-8 px-6 bg-white">
                  {/* Header Text */}
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    Columns for discovering in very beautiful design. service
                    and exceptional guest experience on a collection...
                  </p>

                  {/* Image Card */}
                  <div className="mb-6 rounded-2xl overflow-hidden border-2 border-black h-40 bg-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1578362996442-48f60103fc96?w=400&h=300&fit=crop"
                      alt="Luxury hotel"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Property Info */}
                  <h3 className="font-serif text-lg font-semibold mb-2 text-slate-900">
                    About this stay
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    Nestled beneath the century-old oaks of St. Charles Avenue,
                    this historic boutique hotel is a testament to New Orleans
                    timeless elegance. Housed in a meticulously restored
                    19th-century mansion, the property blends classic Southern
                    charm with modern sophistication, offering guests...
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6 text-xs text-slate-500">
                    <span>⭐ 4.9</span>
                    <span className="text-slate-400">from 8 reviews</span>
                  </div>

                  {/* Price and Benefits */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-slate-900">
                      $708
                      <span className="text-xs font-normal text-slate-500 ml-1">
                        per night, taxes included
                      </span>
                    </p>
                  </div>

                  {/* Member Benefits */}
                  <p className="text-xs text-slate-600 mb-4">
                    Member benefits at this property
                  </p>

                  {/* Book Now Button */}
                  <button className="w-full mb-3 py-2 px-4 bg-black text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-colors">
                    Book now
                  </button>

                  {/* Footer Text */}
                  <p className="text-xs text-slate-500 text-center">
                    Earn more. experience more.
                  </p>
                </div>
              </div>

              {/* Decorative Dot */}
              <div className="absolute -bottom-12 right-8 w-3 h-3 rounded-full bg-white opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
