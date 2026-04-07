"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { LuPlane } from "react-icons/lu";

const benefits = [
  {
    tag: "EARN & SPEND POINTS",
    heading: "Earn 5-10x Points for every stay",
    description:
      "Use points for food & beverage offers, room upgrades, extra nights, and curated on-property experiences. You can even use your Pending Points during your stay.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=900&fit=crop",
    imageAlt: "Earning points on mobile",
    bullets: null,
  },
  {
    tag: "MEMBER RATES & OFFERS",
    heading: "Exclusive access, every time you book",
    description:
      "Unlock preferred member rates you won't find anywhere else. Access early promotions, curated offers, and exclusive pricing across Journey properties.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=900&fit=crop",
    imageAlt: "Luxury spa pool",
    bullets: null,
  },
  {
    tag: "UNLOCK ELEVATED BENEFITS",
    heading: "Earn status-based rewards as you travel more frequently",
    description:
      "Higher status unlocks more value, more often. Enjoy rewards like:",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=900&fit=crop",
    imageAlt: "Hotel concierge welcome",
    bullets: [
      "Guaranteed room upgrades",
      "Early check-in and late check-out",
      "Waived resort and pet fees",
      "Ongoing experience credits for dining, spa, and more",
    ],
  },
  {
    tag: "VIP TREATMENT",
    heading: "Personalized service and exclusive perks at every stay",
    description:
      "From the moment you book, our dedicated concierge team is at your service to ensure every aspect of your stay is seamless and unforgettable. Enjoy personalized recommendations, special amenities, and VIP treatment at every Journey property.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=900&fit=crop",
    imageAlt: "Hotel concierge service",
    bullets: [
      "Guaranteed room upgrades",
      "Early check-in and late check-out",
      "Waived resort and pet fees",
      "Ongoing experience credits for dining, spa, and more",
    ],
  },
];

const ExploreBenefits = () => {
  return (
    <section className="bg-[#f2eee6]  pb-20 ">
      {/* Header */}
      <div className="mb-10 max-w-8xl px-4 sm:px-6 lg:px-24 mx-auto lg:mb-14">
        {/* Divider with icons */}
        <div className="flex items-center gap-4 mb-8">
          <TbWorld className="h-7 w-7 text-slate-400 shrink-0" />
          <div className="flex-1 border-t border-slate-300" />
          <LuPlane className="h-7 w-7 text-slate-400 shrink-0" />
        </div>

        {/* Title + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl text-slate-900 max-w-2xl">
            The benefits of Journey Membership
          </h2>
          <button className="inline-flex items-center gap-4 rounded-full bg-slate-800 px-8 py-3 text-sm font-semibold tracking-widest text-white transition-all hover:bg-slate-700 hover:gap-5 shrink-0">
            EXPLORE ALL BENEFITS
            <BsArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="lg:ps-24 lg:pe-0">
        <Swiper
          slidesPerView={1.1}
          spaceBetween={12}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 14 },
            1024: { slidesPerView: 2.8, spaceBetween: 16 },
          }}
        >
          {benefits.map((benefit) => (
            <SwiperSlide key={benefit.tag} className="">
              <div className="relative rounded-3xl overflow-hidden h-140 sm:h-155 lg:h-170">
                {/* Background image */}
                <Image
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  fill
                  className="object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/60 uppercase">
                    {benefit.tag}
                  </p>
                  <h3 className="mb-4 text-3xl lg:text-4xl leading-tight">
                    {benefit.heading}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    {benefit.description}
                  </p>
                  {benefit.bullets && (
                    <ul className="mt-3 space-y-1">
                      {benefit.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-white/75"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/60 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExploreBenefits;
