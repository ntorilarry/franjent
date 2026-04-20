"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsArrowRight, BsStarFill } from "react-icons/bs";
import { FiHeart, FiShare2, FiChevronLeft } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { CgLock } from "react-icons/cg";
import {
  LuWifi,
  LuCar,
  LuUtensils,
  LuWaves,
  LuDumbbell,
  LuTreePine,
  LuWind,
  LuSparkles,
  LuUsers,
  LuBedDouble,
  LuMaximize,
} from "react-icons/lu";
import MainLayout from "@/shared/mainLayout";

const property = {
  name: "The Haymarket Hotel",
  collection: "Firmdale Properties",
  location: "1 Suffolk Place, London, England",
  rating: 4.9,
  reviews: 284,
  nonMemberPrice: 781,
  memberPrice: 612,
  heroImage:
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1600&h=1200&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&h=700&fit=crop",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&h=700&fit=crop",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&h=700&fit=crop",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&h=700&fit=crop",
  ],
  summary: [
    { label: "Guests", value: "2 Adults", icon: LuUsers },
    { label: "Bedrooms", value: "1 King", icon: LuBedDouble },
    { label: "Size", value: "540 sq ft", icon: LuMaximize },
    { label: "Style", value: "Boutique Hotel", icon: LuSparkles },
  ],
  description:
    "Tucked into the quiet charm of St James's, The Haymarket Hotel reimagines the English townhouse with bold contemporary art, hand-printed textiles, and a private 18-metre pool beneath the building. Rooms open to an inner courtyard garden, and the on-site Brumus restaurant pours what locals quietly agree is the city's best negroni.",
  highlights: [
    "Private 18-metre indoor pool with mood lighting",
    "Hand-curated art collection by Kit Kemp",
    "Michelin-noted Brumus restaurant on the ground floor",
    "Walking distance to Piccadilly, Soho, and the West End",
  ],
  amenities: [
    { label: "High-speed Wi-Fi", icon: LuWifi },
    { label: "Valet parking", icon: LuCar },
    { label: "Fine dining on-site", icon: LuUtensils },
    { label: "Indoor pool", icon: LuWaves },
    { label: "24-hour gym", icon: LuDumbbell },
    { label: "Courtyard garden", icon: LuTreePine },
    { label: "Climate control", icon: LuWind },
    { label: "Spa & wellness", icon: LuSparkles },
  ],
  rooms: [
    {
      id: "junior-suite",
      name: "Junior Suite",
      description:
        "A sunlit corner room with a walk-in closet, marble bath, and custom four-poster bed.",
      size: "540 sq ft",
      beds: "1 King",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&h=700&fit=crop",
      nonMember: 781,
      member: 612,
    },
    {
      id: "library-suite",
      name: "The Library Suite",
      description:
        "Two rooms, a working fireplace, and a private library of hand-picked first editions.",
      size: "820 sq ft",
      beds: "1 King + Sofa Bed",
      image:
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=900&h=700&fit=crop",
      nonMember: 1240,
      member: 990,
    },
    {
      id: "townhouse",
      name: "The Townhouse",
      description:
        "A four-bedroom residence with a private entrance, roof terrace, and kitchen.",
      size: "2,900 sq ft",
      beds: "4 Kings",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=700&fit=crop",
      nonMember: 4850,
      member: 4180,
    },
  ],
  reviews_list: [
    {
      name: "Priya S.",
      date: "March 2026",
      rating: 5,
      body: "The staff remembered how I take my coffee from a stay two years ago. That kind of thing is hard to fake.",
    },
    {
      name: "Marcus B.",
      date: "February 2026",
      rating: 5,
      body: "Quiet in a city that never is. The courtyard room was the best night of sleep I've had all year.",
    },
    {
      name: "Lena H.",
      date: "January 2026",
      rating: 4,
      body: "Stunning design. The pool alone is worth the stay. Breakfast was slightly slow on a Saturday but lovely.",
    },
  ],
  related: [
    {
      id: 4,
      name: "Claridge's",
      location: "London, England",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
      price: 890,
    },
    {
      id: 5,
      name: "The Savoy",
      location: "London, England",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      price: 725,
    },
    {
      id: 6,
      name: "Shangri-La The Shard",
      location: "London, England",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
      price: 650,
    },
  ],
};

export default function HotelDetailsPage() {
  const params = useParams<{ id: string }>();
  const [liked, setLiked] = useState(false);
  const [activeRoom, setActiveRoom] = useState(property.rooms[0].id);

  return (
    <MainLayout>
      <div className="bg-white pt-24">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-6 lg:px-8">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-600 transition-colors hover:text-slate-900"
          >
            <FiChevronLeft className="h-4 w-4" />
            Back to all stays
          </Link>
          <p className="mt-3 text-[11px] tracking-widest uppercase text-slate-400">
            Search · London · Stay #{params?.id ?? "—"}
          </p>
        </div>

        {/* Gallery */}
        <section className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-3 lg:h-[560px] lg:grid-cols-[1.6fr_1fr]">
            <div className="relative h-[360px] overflow-hidden rounded-3xl bg-slate-100 lg:h-full">
              <Image
                src={property.heroImage}
                alt={property.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 backdrop-blur-sm">
                <LuSparkles className="h-3.5 w-3.5 text-slate-800" />
                <span className="text-[10px] font-semibold tracking-widest text-slate-800 uppercase">
                  {property.collection}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-3">
              {property.gallery.map((src, i) => (
                <div
                  key={i}
                  className="relative h-[172px] overflow-hidden rounded-2xl bg-slate-100 lg:h-full"
                >
                  <Image
                    src={src}
                    alt={`${property.name} — view ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                  {i === 3 && (
                    <button className="absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-semibold uppercase tracking-widest text-white backdrop-blur-[2px] transition-opacity hover:bg-black/55">
                      View all photos
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Header */}
        <section className="mx-auto max-w-[1600px] px-4 pt-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <BsStarFill className="h-3.5 w-3.5 text-slate-900" />
                  <span className="text-sm font-semibold text-slate-900">
                    {property.rating}
                  </span>
                  <span className="text-sm text-slate-500">
                    ({property.reviews} reviews)
                  </span>
                </div>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <div className="flex items-center gap-1.5 text-sm text-slate-600">
                  <IoLocationOutline className="h-4 w-4" />
                  {property.location}
                </div>
              </div>
              <h1 className="max-w-3xl text-5xl font-light leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
                {property.name}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-slate-700 transition-colors hover:border-slate-900">
                <FiShare2 className="h-4 w-4" />
                Share
              </button>
              <button
                onClick={() => setLiked((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-slate-700 transition-colors hover:border-slate-900"
              >
                <FiHeart
                  className={`h-4 w-4 ${
                    liked ? "fill-red-500 text-red-500" : "text-slate-700"
                  }`}
                />
                {liked ? "Saved" : "Save"}
              </button>
            </div>
          </div>
        </section>

        {/* Body + Booking sidebar */}
        <section className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
            {/* Left column */}
            <div>
              {/* Summary stats */}
              <div className="grid grid-cols-2 gap-4 rounded-3xl border border-slate-200 p-6 sm:grid-cols-4">
                {property.summary.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2eee6]">
                        <Icon className="h-4 w-4 text-slate-800" />
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                          {s.label}
                        </p>
                        <p className="text-sm font-semibold text-slate-900">
                          {s.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* About */}
              <div className="mt-12">
                <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  About This Stay
                </p>
                <h2 className="mb-6 max-w-2xl text-3xl font-light leading-tight text-slate-900 sm:text-4xl">
                  A quiet townhouse in the center of{" "}
                  <span className="italic">everything.</span>
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-slate-700">
                  {property.description}
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {property.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-800" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities */}
              <div className="mt-14 border-t border-slate-200 pt-12">
                <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  What&apos;s Included
                </p>
                <h3 className="mb-8 text-3xl font-light text-slate-900 sm:text-4xl">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                  {property.amenities.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div
                        key={a.label}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition-colors hover:border-slate-900"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-slate-800" />
                        <span className="text-sm font-medium text-slate-800">
                          {a.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Rooms */}
              <div className="mt-14 border-t border-slate-200 pt-12">
                <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  Choose Your Room
                </p>
                <h3 className="mb-8 text-3xl font-light text-slate-900 sm:text-4xl">
                  Rooms & suites
                </h3>
                <div className="space-y-5">
                  {property.rooms.map((room) => {
                    const isActive = activeRoom === room.id;
                    return (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => setActiveRoom(room.id)}
                        className={`flex w-full flex-col items-stretch gap-5 rounded-3xl border p-4 text-left transition-all sm:flex-row sm:gap-6 ${
                          isActive
                            ? "border-slate-900 bg-[#f2eee6]"
                            : "border-slate-200 hover:border-slate-400"
                        }`}
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 sm:h-44 sm:w-60 sm:shrink-0">
                          <Image
                            src={room.image}
                            alt={room.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-4">
                          <div>
                            <h4 className="text-xl font-semibold text-slate-900">
                              {room.name}
                            </h4>
                            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                              <span className="inline-flex items-center gap-1.5">
                                <LuBedDouble className="h-3.5 w-3.5" />
                                {room.beds}
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <LuMaximize className="h-3.5 w-3.5" />
                                {room.size}
                              </span>
                            </div>
                            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                              {room.description}
                            </p>
                          </div>
                          <div className="flex items-end justify-between gap-4">
                            <div className="flex flex-wrap items-end gap-6">
                              <div>
                                <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                                  Non-Member
                                </p>
                                <p className="text-sm font-semibold text-slate-900">
                                  ${room.nonMember}
                                  <span className="font-normal text-slate-500">
                                    /night
                                  </span>
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                                  Member
                                </p>
                                <p className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900">
                                  <CgLock className="h-3.5 w-3.5" />$
                                  {room.member}
                                  <span className="font-normal text-slate-500">
                                    /night
                                  </span>
                                </p>
                              </div>
                            </div>
                            <span
                              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors ${
                                isActive
                                  ? "bg-slate-900 text-white"
                                  : "border border-slate-300 text-slate-800"
                              }`}
                            >
                              {isActive ? "Selected" : "Select"}
                              <BsArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location */}
              <div className="mt-14 border-t border-slate-200 pt-12">
                <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  Neighborhood
                </p>
                <h3 className="mb-8 text-3xl font-light text-slate-900 sm:text-4xl">
                  Where you&apos;ll be
                </h3>
                <div className="relative h-[360px] overflow-hidden rounded-3xl bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&h=900&fit=crop"
                    alt="Neighborhood map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white">
                    <div>
                      <p className="text-[10px] font-semibold tracking-widest text-white/70 uppercase">
                        St James&apos;s
                      </p>
                      <p className="text-lg font-light">{property.location}</p>
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-slate-900 transition-colors hover:bg-white/90">
                      Open Map
                      <BsArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="mt-14 border-t border-slate-200 pt-12">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="mb-3 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                      Member Reviews
                    </p>
                    <h3 className="text-3xl font-light text-slate-900 sm:text-4xl">
                      <span className="inline-flex items-center gap-2">
                        <BsStarFill className="h-5 w-5 text-slate-900" />
                        {property.rating}
                      </span>{" "}
                      · {property.reviews} verified stays
                    </h3>
                  </div>
                  <button className="text-xs font-semibold uppercase tracking-widest text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900">
                    Read all {property.reviews} reviews
                  </button>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {property.reviews_list.map((r) => (
                    <div
                      key={r.name + r.date}
                      className="rounded-3xl border border-slate-200 p-6"
                    >
                      <div className="mb-3 flex items-center gap-1">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <BsStarFill
                            key={i}
                            className="h-3 w-3 text-slate-800"
                          />
                        ))}
                      </div>
                      <p className="mb-5 text-sm leading-relaxed text-slate-700">
                        &ldquo;{r.body}&rdquo;
                      </p>
                      <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                        <span className="font-semibold text-slate-900">
                          {r.name}
                        </span>
                        <span className="text-slate-500">{r.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking sidebar */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.25)]">
                <div className="mb-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                      From
                    </p>
                    <p className="mt-1 text-3xl font-semibold text-slate-900">
                      ${property.nonMemberPrice}
                      <span className="text-sm font-normal text-slate-500">
                        /night
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <BsStarFill className="h-3.5 w-3.5 text-slate-900" />
                    <span className="font-semibold text-slate-900">
                      {property.rating}
                    </span>
                    <span className="text-slate-500">
                      ({property.reviews})
                    </span>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="grid grid-cols-2 divide-x divide-slate-200">
                    <label className="block px-4 py-3">
                      <span className="block text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                        Check-in
                      </span>
                      <input
                        type="date"
                        className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none"
                      />
                    </label>
                    <label className="block px-4 py-3">
                      <span className="block text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                        Check-out
                      </span>
                      <input
                        type="date"
                        className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none"
                      />
                    </label>
                  </div>
                  <label className="block border-t border-slate-200 px-4 py-3">
                    <span className="block text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                      Guests
                    </span>
                    <select className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                      <option>4 Adults</option>
                    </select>
                  </label>
                </div>

                <button className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-slate-800">
                  Reserve
                  <BsArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-xs text-slate-500">
                  You won&apos;t be charged yet
                </p>

                <div className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-700">
                  <div className="flex items-center justify-between">
                    <span>
                      ${property.nonMemberPrice} × 3 nights
                    </span>
                    <span>${property.nonMemberPrice * 3}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span>Service fee</span>
                    <span>$86</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3 font-semibold text-slate-900">
                    <span>Total</span>
                    <span>${property.nonMemberPrice * 3 + 86}</span>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#f2eee6] p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <CgLock className="h-4 w-4 text-slate-800" />
                    <p className="text-[10px] font-semibold tracking-widest text-slate-800 uppercase">
                      Members save ${property.nonMemberPrice - property.memberPrice}/night
                    </p>
                  </div>
                  <p className="mb-4 text-xs leading-relaxed text-slate-700">
                    Sign in or join Journey to unlock member rates, earn
                    points, and receive a complimentary room upgrade on
                    arrival.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="/auth/sign-in"
                      className="flex-1 rounded-full bg-slate-900 px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-slate-800"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/auth/sign-up"
                      className="flex-1 rounded-full border border-slate-900 bg-transparent px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-widest text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
                    >
                      Join
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related */}
        <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  You might also like
                </p>
                <h3 className="text-3xl text-slate-900 sm:text-4xl lg:text-5xl">
                  More stays in London
                </h3>
              </div>
              <Link
                href="/search"
                className="inline-flex shrink-0 items-center gap-4 rounded-full bg-slate-800 px-7 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-slate-700 hover:gap-5"
              >
                View All
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {property.related.map((r) => (
                <Link
                  key={r.id}
                  href={`/search/${r.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">
                        {r.name}
                      </h4>
                      <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-500">
                        <IoLocationOutline className="h-3.5 w-3.5" />
                        {r.location}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-slate-900">
                      ${r.price}
                      <span className="font-normal text-slate-500">/nt</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
