"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsStarFill } from "react-icons/bs";
import { FiEdit2, FiMail, FiPhone, FiShield } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import {
  LuCrown,
  LuCalendar,
  LuMapPin,
  LuHeart,
  LuSparkles,
  LuHeadphones,
  LuGift,
  LuBedDouble,
  LuCoffee,
  LuCigarette,
  LuUtensils,
} from "react-icons/lu";
import MainLayout from "@/shared/mainLayout";

const tabs = [
  "Overview",
  "Upcoming",
  "Past Stays",
  "Saved",
  "Rewards",
  "Account",
] as const;

const member = {
  firstName: "Priya",
  lastName: "Shankar",
  email: "priya.shankar@example.com",
  phone: "+44 7700 900 123",
  avatar:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  cover:
    "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1800&h=900&fit=crop",
  tier: "Voyager",
  memberSince: "March 2021",
  memberId: "JRNY-018244",
  points: 38420,
  pointsToNext: 50000,
  tierToNext: "Ambassador",
  nightsYtd: 14,
  nightsForNext: 25,
};

const stats = [
  { label: "Nights This Year", value: "14", hint: "11 to Ambassador" },
  { label: "Points Balance", value: "38,420", hint: "Expires never" },
  { label: "Collections Saved", value: "7", hint: "Across 4 regions" },
  { label: "Lifetime Stays", value: "42", hint: "Since 2021" },
];

const upcomingTrip = {
  name: "Claridge's",
  location: "Mayfair, London",
  image:
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=800&fit=crop",
  checkIn: "May 18",
  checkOut: "May 22",
  nights: 4,
  confirmation: "JRN-88204",
  room: "Library Suite",
};

const pastStays = [
  {
    name: "Nihi Sumba",
    location: "East Nusa Tenggara, Indonesia",
    dates: "Feb 2026 · 5 nights",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=400&fit=crop",
  },
  {
    name: "Hotel Le Marais",
    location: "Paris, France",
    dates: "Dec 2025 · 3 nights",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=400&fit=crop",
  },
  {
    name: "Cervo Mountain Resort",
    location: "Zermatt, Switzerland",
    dates: "Oct 2025 · 6 nights",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
];

const savedStays = [
  {
    name: "Kokomo Private Island",
    location: "Fiji Islands",
    price: "$1,180",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=700&fit=crop",
  },
  {
    name: "Aman Kyoto",
    location: "Kyoto, Japan",
    price: "$1,420",
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=700&fit=crop",
  },
  {
    name: "The Barn at Cotswolds",
    location: "Gloucestershire, England",
    price: "$540",
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=600&h=700&fit=crop",
  },
  {
    name: "Riad Yasmine",
    location: "Marrakesh, Morocco",
    price: "$310",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=700&fit=crop",
  },
];

const preferences = [
  { icon: LuBedDouble, label: "Bed", value: "King, firm pillows" },
  { icon: LuCoffee, label: "Morning", value: "Oat flat white, no sugar" },
  { icon: LuCigarette, label: "Room", value: "High floor, quiet side" },
  { icon: LuUtensils, label: "Diet", value: "Vegetarian, no shellfish" },
];

const activity = [
  {
    title: "Points earned",
    body: "+2,450 points from your stay at Hotel Le Marais",
    when: "3 days ago",
  },
  {
    title: "Upgrade confirmed",
    body: "Library Suite upgrade secured for your Claridge's stay",
    when: "1 week ago",
  },
  {
    title: "Collection saved",
    body: "You saved the Hidden Islands collection",
    when: "2 weeks ago",
  },
  {
    title: "New film",
    body: "Franjent Studios published Nihi, at Sunrise",
    when: "1 month ago",
  },
];

export default function ProfilePage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");

  const pctToNext = Math.round(
    (member.points / member.pointsToNext) * 100
  );
  const nightsPct = Math.round(
    (member.nightsYtd / member.nightsForNext) * 100
  );

  return (
    <MainLayout>
      {/* Cover + identity */}
      <section className="relative bg-slate-900 pt-24">
        <div className="relative h-[300px] overflow-hidden sm:h-[380px] lg:h-[440px]">
          <Image
            src={member.cover}
            alt="Profile cover"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-slate-900/90" />
          <button className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-slate-800 backdrop-blur-sm transition-colors hover:bg-white">
            <FiEdit2 className="h-3.5 w-3.5" />
            Change Cover
          </button>
        </div>

        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-16">
          <div className="-mt-24 flex flex-col items-start gap-6 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end">
              <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border-4 border-[#f2eee6] bg-slate-200 sm:h-44 sm:w-44">
                <Image
                  src={member.avatar}
                  alt={`${member.firstName} ${member.lastName}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pb-2 text-white sm:pb-4">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-semibold tracking-widest uppercase backdrop-blur-sm">
                  <LuCrown className="h-3.5 w-3.5" />
                  {member.tier} Member · Since {member.memberSince}
                </div>
                <h1 className="text-5xl font-light leading-tight sm:text-6xl">
                  {member.firstName}{" "}
                  <span className="italic">{member.lastName}</span>
                </h1>
                <p className="mt-2 text-sm text-white/70">
                  Member ID · {member.memberId}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-slate-900 transition-colors hover:bg-white/90"
              >
                <LuHeadphones className="h-4 w-4" />
                Concierge
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
              >
                <FiEdit2 className="h-4 w-4" />
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-0 z-20 border-b border-slate-200 bg-[#f2eee6]/95 backdrop-blur">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-16">
          <div className="flex items-center gap-1 overflow-x-auto py-3">
            {tabs.map((t) => {
              const isActive = tab === t;
              return (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-white"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="bg-[#f2eee6] px-4 pt-12 pb-6 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-8xl">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <p className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                  {s.label}
                </p>
                <p className="mt-3 text-4xl font-light text-slate-900 sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs text-slate-500">{s.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="bg-[#f2eee6] px-4 py-12 sm:px-6 lg:px-16 lg:py-16">
        <div className="mx-auto grid max-w-8xl gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Main column */}
          <div className="space-y-8">
            {/* Tier progress */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
              <Image
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1400&h=700&fit=crop"
                alt=""
                fill
                className="object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-white/70 uppercase">
                      Progress To {member.tierToNext}
                    </p>
                    <p className="mt-2 text-3xl font-light sm:text-4xl">
                      {(member.pointsToNext - member.points).toLocaleString()} points to go
                    </p>
                  </div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                    <LuCrown className="h-6 w-6 text-white" />
                  </span>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="mb-2 flex items-end justify-between text-xs">
                      <span className="text-white/70 tracking-widest uppercase">
                        Points
                      </span>
                      <span className="font-semibold">
                        {member.points.toLocaleString()} / {member.pointsToNext.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                      <div
                        className="h-full rounded-full bg-white transition-all"
                        style={{ width: `${pctToNext}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-end justify-between text-xs">
                      <span className="text-white/70 tracking-widest uppercase">
                        Nights This Year
                      </span>
                      <span className="font-semibold">
                        {member.nightsYtd} / {member.nightsForNext}
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                      <div
                        className="h-full rounded-full bg-white transition-all"
                        style={{ width: `${nightsPct}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/benefits"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-slate-900 transition-colors hover:bg-white/90"
                  >
                    See Tier Benefits
                    <BsArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-3 rounded-full border border-white/40 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
                  >
                    Redeem Points
                    <BsArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Upcoming trip */}
            <div>
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    Upcoming
                  </p>
                  <h2 className="mt-1 text-2xl font-light text-slate-900 sm:text-3xl">
                    Your next stay
                  </h2>
                </div>
                <Link
                  href="#"
                  className="text-[11px] font-semibold uppercase tracking-widest text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                >
                  All trips
                </Link>
              </div>

              <div className="grid gap-0 overflow-hidden rounded-3xl border border-slate-200 bg-white sm:grid-cols-[1.2fr_1fr]">
                <div className="relative aspect-[4/3] sm:aspect-auto">
                  <Image
                    src={upcomingTrip.image}
                    alt={upcomingTrip.name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold tracking-widest text-slate-800 uppercase backdrop-blur-sm">
                    Confirmation · {upcomingTrip.confirmation}
                  </span>
                </div>
                <div className="flex flex-col justify-between gap-6 p-7 sm:p-9">
                  <div>
                    <p className="inline-flex items-center gap-1.5 text-[11px] text-slate-500">
                      <IoLocationOutline className="h-3.5 w-3.5" />
                      {upcomingTrip.location}
                    </p>
                    <h3 className="mt-2 text-3xl font-light text-slate-900 sm:text-4xl">
                      {upcomingTrip.name}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">
                      {upcomingTrip.room} · {upcomingTrip.nights} nights
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                    <div>
                      <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                        Check-in
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        {upcomingTrip.checkIn}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                        Check-out
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        {upcomingTrip.checkOut}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-slate-800">
                      Manage
                      <BsArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-slate-800 transition-colors hover:border-slate-900">
                      Message Hotel
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Past stays */}
            <div>
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    History
                  </p>
                  <h2 className="mt-1 text-2xl font-light text-slate-900 sm:text-3xl">
                    Recent stays
                  </h2>
                </div>
                <Link
                  href="#"
                  className="text-[11px] font-semibold uppercase tracking-widest text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                >
                  View all 42
                </Link>
              </div>
              <div className="space-y-4">
                {pastStays.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-4"
                  >
                    <div className="relative aspect-[4/3] h-24 w-32 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-900">
                        {s.name}
                      </h3>
                      <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-500">
                        <IoLocationOutline className="h-3.5 w-3.5" />
                        {s.location}
                      </p>
                      <p className="mt-2 text-xs text-slate-500">{s.dates}</p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-3">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: s.rating }).map((_, i) => (
                          <BsStarFill
                            key={i}
                            className="h-3 w-3 text-slate-800"
                          />
                        ))}
                      </div>
                      <button className="text-[10px] font-semibold uppercase tracking-widest text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900">
                        Book Again
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved */}
            <div>
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                    Wishlist
                  </p>
                  <h2 className="mt-1 text-2xl font-light text-slate-900 sm:text-3xl">
                    Saved for later
                  </h2>
                </div>
                <Link
                  href="/collections"
                  className="text-[11px] font-semibold uppercase tracking-widest text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                >
                  See collections
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {savedStays.map((s) => (
                  <Link key={s.name} href="/search" className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                      <button
                        className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-red-500 backdrop-blur-sm transition-colors hover:bg-white"
                        aria-label="Remove from saved"
                      >
                        <LuHeart className="h-4 w-4 fill-red-500" />
                      </button>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-sm font-light">{s.name}</p>
                        <p className="mt-0.5 text-[10px] tracking-widest uppercase text-white/70">
                          {s.location}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-900">
                      From {s.price}
                      <span className="font-normal text-slate-500">/night</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Member card */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-7 text-white">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/5" />
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-[10px] font-semibold tracking-widest text-white/70 uppercase">
                    Member Card
                  </p>
                  <LuSparkles className="h-5 w-5 text-white/80" />
                </div>
                <p className="text-xs tracking-widest uppercase text-white/60">
                  Journey
                </p>
                <p className="mt-1 text-2xl font-light">
                  {member.firstName} {member.lastName}
                </p>
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-white/60 uppercase">
                      Tier
                    </p>
                    <p className="mt-1 text-base font-semibold">
                      {member.tier}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-semibold tracking-widest text-white/60 uppercase">
                      Member ID
                    </p>
                    <p className="mt-1 text-base font-semibold tracking-wider">
                      {member.memberId}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  Preferences
                </p>
                <button className="text-[10px] font-semibold uppercase tracking-widest text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900">
                  Edit
                </button>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                We send these to the front desk before you arrive. You can
                change them anytime.
              </p>
              <ul className="space-y-4">
                {preferences.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li
                      key={p.label}
                      className="flex items-start gap-3 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f2eee6]">
                        <Icon className="h-4 w-4 text-slate-800" />
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                          {p.label}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-800">
                          {p.value}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Activity */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7">
              <p className="mb-5 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Recent Activity
              </p>
              <ul className="space-y-5">
                {activity.map((a, i) => (
                  <li
                    key={a.title + i}
                    className="flex gap-4 border-b border-slate-100 pb-5 last:border-b-0 last:pb-0"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">
                        {a.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">
                        {a.body}
                      </p>
                      <p className="mt-2 text-[10px] tracking-widest uppercase text-slate-400">
                        {a.when}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact block */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7">
              <p className="mb-5 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                On File
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <FiMail className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-800">{member.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-800">{member.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiShield className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-800">
                    Two-factor authentication on
                  </span>
                </li>
              </ul>
              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-slate-800 transition-colors hover:border-slate-900">
                Account Settings
                <BsArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Refer */}
            <div className="relative overflow-hidden rounded-3xl bg-[#f2eee6] p-7">
              <LuGift className="mb-5 h-6 w-6 text-slate-800" />
              <h3 className="mb-3 text-2xl font-light leading-tight text-slate-900">
                Refer a friend. Earn 5,000 points.
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                When they complete their first stay, we credit both of your
                accounts.
              </p>
              <button className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-slate-800">
                <LuMapPin className="h-3.5 w-3.5" />
                Get Your Link
              </button>
            </div>

            {/* Quick nav */}
            <nav className="rounded-3xl border border-slate-200 bg-white p-4">
              <ul className="text-sm">
                {[
                  "Notifications",
                  "Billing & payment",
                  "Travel documents",
                  "Privacy",
                  "Sign out",
                ].map((item) => (
                  <li key={item}>
                    <button className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-slate-800 transition-colors hover:bg-[#f2eee6]">
                      {item}
                      <BsArrowRight className="h-3.5 w-3.5 text-slate-400" />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      {/* Plan your next CTA */}
      <section className="bg-[#f2eee6] px-4 pb-24 sm:px-6 lg:px-16">
        <div className="relative mx-auto max-w-8xl overflow-hidden rounded-4xl bg-slate-900 px-8 py-14 sm:px-14 sm:py-16 lg:px-20 lg:py-20">
          <Image
            src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&h=900&fit=crop"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-widest text-white/70 uppercase">
                <LuCalendar className="h-3.5 w-3.5" />
                Book Ahead
              </p>
              <h2 className="text-3xl font-light text-white sm:text-4xl lg:text-5xl">
                Plan the next one,{" "}
                <span className="italic">on us.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
                You&apos;ve got enough points for three free nights at any
                property in the Alliance.
              </p>
            </div>
            <Link
              href="/search"
              className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-white/90 hover:gap-5"
            >
              Find A Stay
              <BsArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
