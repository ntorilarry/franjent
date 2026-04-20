"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsPlayFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import {
  LuFilm,
  LuBookOpen,
  LuTicket,
  LuHeadphones,
  LuMic,
  LuCamera,
} from "react-icons/lu";
import MainLayout from "@/shared/mainLayout";

const pillars = [
  {
    tag: "Films",
    icon: LuFilm,
    title: "Short films, from places worth watching",
    body: "Hand-crafted documentaries about the hoteliers, chefs, and craftspeople behind every Journey stay.",
    count: "12 releases",
  },
  {
    tag: "Journal",
    icon: LuBookOpen,
    title: "Long-form travel writing, slowly made",
    body: "Essays, interviews, and field notes — reported from the ground, not the inbox. Published monthly.",
    count: "48 essays",
  },
  {
    tag: "Experiences",
    icon: LuTicket,
    title: "On-property happenings, by invitation",
    body: "Private screenings, chef residencies, author nights. We host the kind of events we'd want to attend.",
    count: "6 per season",
  },
];

const featured = {
  title: "Nihi, at Sunrise",
  chapter: "Chapter 04",
  location: "East Nusa Tenggara, Indonesia",
  duration: "23:14",
  synopsis:
    "A week at Nihi Sumba, in the language of the people who actually run it — stable hands, surf guides, and a general manager who hasn't missed a sunrise in nine years.",
  image:
    "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1800&h=1100&fit=crop",
};

const films = [
  {
    title: "The Last Cold Pour",
    place: "Kyoto, Japan",
    duration: "14:02",
    tag: "Documentary",
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=1000&fit=crop",
  },
  {
    title: "Courtyards",
    place: "Marrakesh, Morocco",
    duration: "08:40",
    tag: "Short",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=1000&fit=crop",
  },
  {
    title: "Off-Season",
    place: "Cornwall, England",
    duration: "11:25",
    tag: "Short",
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&h=1000&fit=crop",
  },
  {
    title: "After Service",
    place: "Copenhagen, Denmark",
    duration: "19:55",
    tag: "Documentary",
    image:
      "https://images.unsplash.com/photo-1504672281656-e4981d70414b?w=800&h=1000&fit=crop",
  },
];

const journal = [
  {
    kicker: "Essay",
    title: "The quiet art of the returning guest",
    author: "Amara Okafor",
    read: "9 min read",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&h=700&fit=crop",
  },
  {
    kicker: "Interview",
    title: "Ten questions for a third-generation innkeeper",
    author: "Lila Mercier",
    read: "14 min read",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=900&h=700&fit=crop",
  },
  {
    kicker: "Field Notes",
    title: "What hotel breakfasts say about the country they're in",
    author: "Tomás Reyes",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&h=700&fit=crop",
  },
];

const experiences = [
  {
    name: "Chef Residency · Kasai",
    place: "The Barn at Cotswolds",
    dates: "18 — 22 May",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&h=900&fit=crop",
  },
  {
    name: "A Private Screening: Off-Season",
    place: "Hotel Le Marais, Paris",
    dates: "03 June",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=700&h=900&fit=crop",
  },
  {
    name: "An Evening With the Journal",
    place: "Claridge's Library",
    dates: "11 June",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=700&h=900&fit=crop",
  },
];

const formats = [
  { icon: LuCamera, name: "Film" },
  { icon: LuBookOpen, name: "Journal" },
  { icon: LuMic, name: "Podcast" },
  { icon: LuHeadphones, name: "Audio Walks" },
];

export default function FranjentStudiosPage() {
  const [activeFormat, setActiveFormat] = useState("Film");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative isolate min-h-[90vh] overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1800&h=1200&fit=crop"
          alt="Franjent Studios"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/85" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-8xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-16 lg:pb-28">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <div className="h-px w-16 bg-white" />
            <p className="text-sm font-medium text-white tracking-widest uppercase">
              Franjent Studios
            </p>
          </div>
          <h1 className="max-w-5xl text-6xl font-heading font-light text-white sm:text-7xl lg:text-8xl">
            The in-house studio behind the{" "}
            <span className="italic">stories we stay in.</span>
          </h1>
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-base font-body text-gray-200">
              We make the films, essays, and gatherings that give our
              properties a second language. A small team of writers,
              filmmakers, and producers — working from the hotels
              themselves.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#featured"
                className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-white/90 hover:gap-5"
              >
                <BsPlayFill className="h-5 w-5" />
                Watch Now
              </Link>
              <Link
                href="#journal"
                className="inline-flex items-center gap-4 rounded-full border border-white/60 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:gap-5"
              >
                Read The Journal
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              What We Make
            </p>
            <h2 className="text-5xl text-slate-900 sm:text-6xl lg:text-7xl">
              Three rooms,{" "}
              <span className="italic font-light">one studio.</span>
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.tag}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-900"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2eee6] transition-colors group-hover:bg-slate-900">
                      <Icon className="h-5 w-5 text-slate-800 transition-colors group-hover:text-white" />
                    </span>
                    <span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                      {p.count}
                    </span>
                  </div>
                  <p className="mb-3 text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                    {p.tag}
                  </p>
                  <h3 className="mb-5 text-2xl font-light leading-tight text-slate-900">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured film */}
      <section id="featured" className="bg-white px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Now Playing
              </p>
              <h2 className="text-4xl font-light text-slate-900 sm:text-5xl lg:text-6xl">
                This month&apos;s feature
              </h2>
            </div>
            <Link
              href="#films"
              className="text-xs font-semibold uppercase tracking-widest text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
            >
              All films
            </Link>
          </div>

          <div className="group relative overflow-hidden rounded-4xl bg-slate-900">
            <div className="relative aspect-[16/9]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/10" />

              {/* Play overlay */}
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play film"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-2xl transition-transform group-hover:scale-110 sm:h-24 sm:w-24">
                  <BsPlayFill className="h-8 w-8 sm:h-10 sm:w-10" />
                </span>
              </button>

              {/* Top badges */}
              <div className="absolute left-6 top-6 flex gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[10px] font-semibold tracking-widest text-slate-800 uppercase backdrop-blur-sm">
                  <LuFilm className="h-3.5 w-3.5" />
                  {featured.chapter}
                </span>
                <span className="inline-flex items-center rounded-full bg-black/60 px-3.5 py-1.5 text-[10px] font-semibold tracking-widest text-white uppercase backdrop-blur-sm">
                  {featured.duration}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white sm:p-12">
                <p className="mb-4 inline-flex items-center gap-1.5 text-xs text-white/70">
                  <IoLocationOutline className="h-3.5 w-3.5" />
                  {featured.location}
                </p>
                <h3 className="mb-4 max-w-2xl text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
                  {featured.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-white/80">
                  {featured.synopsis}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Films grid + filter */}
      <section id="films" className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Catalog
              </p>
              <h2 className="text-4xl font-light text-slate-900 sm:text-5xl lg:text-6xl">
                Recent releases
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {formats.map((f) => {
                const Icon = f.icon;
                const isActive = activeFormat === f.name;
                return (
                  <button
                    key={f.name}
                    onClick={() => setActiveFormat(f.name)}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "border border-slate-300 text-slate-700 hover:border-slate-900"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {f.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {films.map((f) => (
              <div key={f.title} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                  <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-white uppercase backdrop-blur-sm">
                    {f.duration}
                  </span>

                  <span className="absolute bottom-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 transition-transform group-hover:scale-110">
                    <BsPlayFill className="h-4 w-4" />
                  </span>

                  <span className="absolute bottom-4 right-4 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-slate-800 uppercase backdrop-blur-sm">
                    {f.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:underline decoration-slate-300 underline-offset-2">
                  {f.title}
                </h3>
                <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-500">
                  <IoLocationOutline className="h-3.5 w-3.5" />
                  {f.place}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="bg-white px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                The Journal
              </p>
              <h2 className="max-w-2xl text-4xl font-light text-slate-900 sm:text-5xl lg:text-6xl">
                Words from the road, slowly.
              </h2>
            </div>
            <Link
              href="#"
              className="inline-flex shrink-0 items-center gap-4 rounded-full border-2 border-slate-900 bg-transparent px-7 py-3 text-xs font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white hover:gap-5"
            >
              Browse Archive
              <BsArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {journal.map((j, i) => (
              <article
                key={j.title}
                className={`group flex flex-col overflow-hidden rounded-3xl border border-slate-200 transition-all hover:border-slate-900 ${
                  i === 0 ? "lg:col-span-3 lg:flex-row" : ""
                }`}
              >
                <div
                  className={`relative bg-slate-100 ${
                    i === 0
                      ? "aspect-[16/9] lg:aspect-auto lg:w-1/2"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={j.image}
                    alt={j.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center gap-4 p-7 sm:p-9 ${
                    i === 0 ? "lg:w-1/2 lg:p-14" : ""
                  }`}
                >
                  <p className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                    {j.kicker}
                  </p>
                  <h3
                    className={`font-light leading-tight text-slate-900 ${
                      i === 0
                        ? "text-3xl sm:text-4xl lg:text-5xl"
                        : "text-xl sm:text-2xl"
                    }`}
                  >
                    {j.title}
                  </h3>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                    <span className="font-semibold text-slate-900">
                      {j.author}
                    </span>
                    <span>{j.read}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Upcoming
              </p>
              <h2 className="max-w-2xl text-4xl font-light text-slate-900 sm:text-5xl lg:text-6xl">
                Happenings across the network.
              </h2>
            </div>
            <Link
              href="#"
              className="inline-flex shrink-0 items-center gap-4 rounded-full bg-slate-900 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-slate-800 hover:gap-5"
            >
              See All Events
              <BsArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((e) => (
              <div key={e.name} className="group relative overflow-hidden rounded-3xl bg-slate-900 h-[480px]">
                <Image
                  src={e.image}
                  alt={e.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 backdrop-blur-sm">
                  <LuTicket className="h-3.5 w-3.5 text-slate-800" />
                  <span className="text-[10px] font-semibold tracking-widest text-slate-800 uppercase">
                    {e.dates}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 p-7 text-white">
                  <h3 className="mb-3 text-2xl font-light leading-tight">
                    {e.name}
                  </h3>
                  <p className="mb-5 inline-flex items-center gap-1.5 text-xs text-white/70">
                    <IoLocationOutline className="h-3.5 w-3.5" />
                    {e.place}
                  </p>
                  <button className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white transition-all group-hover:gap-3">
                    Request Invitation
                    <BsArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
            Dispatches
          </p>
          <h2 className="mb-6 text-4xl font-light text-slate-900 sm:text-5xl lg:text-6xl">
            A quiet letter, once a month.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-slate-600">
            New films, the latest essay, one hotel worth flying for, and a
            single sentence we couldn&apos;t stop thinking about.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
            className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-slate-300 bg-white p-1.5"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-slate-800"
            >
              {subscribed ? "Subscribed" : "Subscribe"}
              {!subscribed && <BsArrowRight className="h-3.5 w-3.5" />}
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-400">
            We never share your address. Unsubscribe in one click.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#f2eee6] px-4 pb-24 sm:px-6 lg:px-16">
        <div className="relative mx-auto max-w-8xl overflow-hidden rounded-4xl bg-slate-900 px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
          <Image
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&h=900&fit=crop"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 text-xs font-semibold tracking-widest text-white/70 uppercase">
              Collaborate With Us
            </p>
            <h2 className="mb-6 text-4xl font-light text-white sm:text-5xl lg:text-6xl">
              Working on something good? So are we.
            </h2>
            <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/75">
              Studios commissions two outside projects a year — a film, a
              residency, an essay series. If yours belongs here, we&apos;d
              like to hear about it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:studios@franjent.com"
                className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-white/90 hover:gap-5"
              >
                Pitch The Studio
                <BsArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#featured"
                className="inline-flex items-center gap-4 rounded-full border border-white/60 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:gap-5"
              >
                Watch The Feature
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
