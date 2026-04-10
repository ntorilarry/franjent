"use client";

import Image from "next/image";
import Link from "next/link";
import { HowItWorksImage } from "../../../../public";
import { BsArrowRight } from "react-icons/bs";
import { CgLock, CgBell, CgShield, CgHeart } from "react-icons/cg";
import { PiStarFourBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Parallax } from "swiper/modules";
const steps = [
  {
    number: "01",
    icon: CgLock,
    heading: "Join With a Complimentary Membership",
    description:
      "Join Journey, tell us more about how you like to travel, and gain access to curated stays and experiences across the globe.",
    cta: "JOIN JOURNEY",
    href: "/auth/sign-up",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=900&fit=crop",
    imageAlt: "Luxury hotel lobby",
  },
  {
    number: "02",
    icon: PiStarFourBold,
    heading: "Discover Hand-Picked Properties",
    description:
      "Browse our curated collection of boutique hotels, private villas, and hidden retreats — each vetted for exceptional quality and character.",
    cta: "EXPLORE STAYS",
    href: "/search",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=900&fit=crop",
    imageAlt: "Boutique hotel pool",
  },
  {
    number: "03",
    icon: CgBell,
    heading: "Unlock Exclusive Member Benefits",
    description:
      "Enjoy complimentary room upgrades, early check-in, late check-out, and daily breakfast — privileges reserved for Journey members at every stay.",
    cta: "SEE BENEFITS",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=900&fit=crop",
    imageAlt: "Luxury hotel suite",
  },
  {
    number: "04",
    icon: CgShield,
    heading: "Book With Total Confidence",
    description:
      "Every reservation is backed by our best-rate guarantee and concierge support. If something isn't right, we make it right — always.",
    cta: "LEARN MORE",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=900&fit=crop",
    imageAlt: "Hotel concierge service",
  },
  {
    number: "05",
    icon: CgHeart,
    heading: "Earn Rewards on Every Stay",
    description:
      "Each night earns you Journey points redeemable for future stays, experiences, and exclusive partner offers — travel more, earn more.",
    cta: "VIEW REWARDS",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=900&fit=crop",
    imageAlt: "Scenic resort view",
  },
];

const HowItWorks = () => {
  return (
    <div>
      <div className="relative py-16 lg:py-24 bg-[#f2eee6] overflow-hidden">
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
              <h1 className="mt-3 text-4xl lg:text-7xl text-gray-900 font-medium">
                Good taste deserves to be rewarded
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2eee6] px-4 sm:px-6 lg:px-8 pb-8">
        <div className="h-155 sm:h-165 lg:h-170">
          <Swiper
            direction="vertical"
            slidesPerView={1}
            speed={800}
            parallax={true}

            mousewheel={{ forceToAxis: true, sensitivity: 1 }}
            keyboard={{ enabled: true }}
            modules={[Parallax, Mousewheel, Keyboard]}
            style={{ height: "100%" }}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <SwiperSlide key={step.number}>
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 h-full">
                    {/* Image — top on mobile, right on desktop */}
                    <div
                      className="order-1 lg:order-2 lg:flex-2 rounded-3xl lg:rounded-4xl relative overflow-hidden h-48 sm:h-56 lg:h-auto shrink-0"
                      data-swiper-parallax="-150"
                    >
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Left Section — content */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-6 lg:py-20 rounded-3xl lg:rounded-4xl bg-white flex-1 overflow-hidden">
                      <div className="max-w-lg mx-auto w-full">
                        {/* Header */}
                        <div
                          className="mb-6 lg:mb-12 flex flex-wrap items-center gap-3"
                          data-swiper-parallax="-50"
                          data-swiper-parallax-opacity="0"
                        >
                          <h2 className="text-2xl lg:text-4xl font-light tracking-widest text-slate-400 italic">
                            HOW IT
                          </h2>
                          <div className="flex-1 border-t border-slate-300"></div>
                          <h2 className="text-2xl lg:text-4xl font-light tracking-widest text-slate-400 italic">
                            WORKS
                          </h2>
                        </div>

                        {/* Step Label */}
                        <div
                          className="mb-4 lg:mb-8 flex justify-center items-center gap-3"
                          data-swiper-parallax="-200"
                          data-swiper-parallax-opacity="0"
                        >
                          <div className="flex h-9 w-9 lg:h-10 lg:w-10 items-center justify-center rounded-full border-2 border-orange-400">
                            <Icon className="h-4 w-4 lg:h-5 lg:w-5 text-orange-500" />
                          </div>
                          <span className="text-xs font-semibold tracking-widest text-orange-500">
                            STEP {step.number}
                          </span>
                        </div>

                        {/* Main Heading */}
                        <h1
                          className="mb-4 lg:mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center text-slate-900"
                          data-swiper-parallax="-350"
                          data-swiper-parallax-opacity="0"
                        >
                          {step.heading}
                        </h1>

                        {/* Description */}
                        <p
                          className="mb-6 lg:mb-12 text-center text-sm text-slate-600"
                          data-swiper-parallax="-450"
                          data-swiper-parallax-opacity="0"
                        >
                          {step.description}
                        </p>

                        {/* CTA Button */}
                        <div
                          className="text-center"
                          data-swiper-parallax="-550"
                          data-swiper-parallax-opacity="0"
                        >
                          <Link
                            href={step.href}
                            className="inline-flex justify-center items-center gap-3 rounded-full bg-slate-800 px-6 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base font-semibold text-white transition-all hover:bg-slate-700 hover:gap-4"
                          >
                            {step.cta}
                            <BsArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
