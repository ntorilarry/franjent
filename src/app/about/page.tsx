"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { LuCompass, LuHandshake, LuHeart, LuLeaf } from "react-icons/lu";
import MainLayout from "@/shared/mainLayout";

const numbers = [
  { value: "184", label: "Independent properties" },
  { value: "42", label: "Countries represented" },
  { value: "9", label: "In-house editors & filmmakers" },
  { value: "2019", label: "Year we opened the door" },
];

const principles = [
  {
    icon: LuCompass,
    title: "Character over chains",
    body: "We never list a property we wouldn't return to ourselves. Every hotel, residence, and retreat is hand-chosen by a team that has slept there.",
  },
  {
    icon: LuHandshake,
    title: "Hospitality is a promise",
    body: "Our members aren't a segment. They're guests whose preferences we remember, whose birthdays we know, and whose trust we work to keep.",
  },
  {
    icon: LuLeaf,
    title: "Local first, always",
    body: "Every partner commits to locally-owned operations, responsible sourcing, and staff who live within driving distance of the front desk.",
  },
  {
    icon: LuHeart,
    title: "Quiet, not loud",
    body: "We'd rather be the program you recommend in conversation than the one shouting from a banner ad. Restraint is part of the service.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "A letter, not a pitch deck",
    body: "Founded over a long dinner in Lisbon by three friends who were tired of 400-property chain loyalty. The first list had eight hotels.",
  },
  {
    year: "2021",
    title: "The first collection",
    body: "Coastal Serenity launched with 24 independent stays. Members joined by referral only for the first six months.",
  },
  {
    year: "2023",
    title: "Franjent Studios",
    body: "Our editorial arm ships its first short film and quarterly journal. Writers and filmmakers join the team full-time.",
  },
  {
    year: "2026",
    title: "Today",
    body: "184 properties, three tiers of membership, and a small team still writing most of the onboarding emails themselves.",
  },
];

const team = [
  {
    name: "Amara Okafor",
    role: "Head of Curation",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop",
  },
  {
    name: "Tomás Reyes",
    role: "Editor-in-Chief, Journal",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
  },
  {
    name: "Lila Mercier",
    role: "Director, Member Services",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop",
  },
  {
    name: "Kenji Watanabe",
    role: "Studios, Film",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop",
  },
  {
    name: "Priya Shankar",
    role: "Partnerships",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
  },
  {
    name: "Marcus Bell",
    role: "Product & Technology",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop",
  },
];

const press = [
  "Condé Nast Traveler",
  "Monocle",
  "The Financial Times",
  "Travel + Leisure",
  "Cereal",
];

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative isolate min-h-[90vh] overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1800&h=1200&fit=crop"
          alt="A room at a Journey property"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/85" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-8xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-16 lg:pb-28">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <div className="h-px w-16 bg-white" />
            <p className="text-sm font-medium text-white tracking-widest uppercase">
              About Journey
            </p>
          </div>
          <h1 className="max-w-5xl text-6xl font-heading font-light text-white sm:text-7xl lg:text-8xl">
            A small team.{" "}
            <span className="italic">A short list of hotels.</span>
          </h1>
          <p className="mt-10 max-w-xl text-base font-body text-gray-200">
            We started Journey for travelers who remember the names of front
            desk managers, who pack a book over a guidebook, and who&apos;d
            rather spend two nights somewhere remarkable than seven
            somewhere forgettable.
          </p>
        </div>
      </section>

      {/* Letter */}
      <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-8xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              A Letter From The Founders
            </p>
            <h2 className="text-5xl font-light text-slate-900 sm:text-6xl lg:text-7xl">
              Why we built{" "}
              <span className="italic">this, quietly.</span>
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-slate-700">
            <p>
              When we started Journey, we didn&apos;t want to build the
              biggest loyalty program. We wanted to build the one we&apos;d
              actually use. So we kept the list short — and we keep it short
              still. Every property is a place one of us has stayed,
              recommended to a friend, and returned to.
            </p>
            <p>
              The program is quietly excellent on purpose. No airport
              lounges. No plastic tier cards. No tier to fight your way
              into. Just a short list of genuinely good hotels, a staff
              that remembers your name, and a set of benefits we think are
              worth the name.
            </p>
            <p>
              If we&apos;ve done our job right, you&apos;ll forget that
              Journey is a membership at all. It&apos;ll feel like the
              place you go, and the people you know.
            </p>
            <div className="pt-4">
              <p className="text-sm font-semibold text-slate-900">
                Amara, Tomás & Lila
              </p>
              <p className="text-xs tracking-widest uppercase text-slate-500">
                Founders · Lisbon, 2019
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-8xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {numbers.map((n) => (
              <div
                key={n.label}
                className="border-t border-slate-200 pt-6"
              >
                <p className="text-5xl font-light text-slate-900 sm:text-6xl">
                  {n.value}
                </p>
                <p className="mt-3 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  {n.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              What We Stand On
            </p>
            <h2 className="text-5xl text-slate-900 sm:text-6xl lg:text-7xl">
              Four principles,{" "}
              <span className="italic font-light">kept honestly.</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-900"
                >
                  <span className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#f2eee6] transition-colors group-hover:bg-slate-900">
                    <Icon className="h-5 w-5 text-slate-800 transition-colors group-hover:text-white" />
                  </span>
                  <h3 className="mb-4 text-2xl font-light leading-tight text-slate-900">
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

      {/* Timeline */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                How We Got Here
              </p>
              <h2 className="text-5xl font-light text-slate-900 sm:text-6xl lg:text-7xl">
                Seven years, unhurried.
              </h2>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-slate-200 lg:block" />
            <div className="space-y-10 lg:space-y-16 lg:pl-12">
              {timeline.map((t) => (
                <div
                  key={t.year}
                  className="relative grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-[160px_1fr] sm:gap-10 lg:border-0 lg:pt-0"
                >
                  <span className="absolute -left-[49px] top-10 hidden h-3 w-3 rounded-full bg-slate-900 lg:block" />
                  <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
                    {t.year}
                  </p>
                  <div>
                    <h3 className="mb-3 text-3xl font-light leading-tight text-slate-900 sm:text-4xl">
                      {t.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
                      {t.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                The Team
              </p>
              <h2 className="max-w-2xl text-4xl font-light text-slate-900 sm:text-5xl lg:text-6xl">
                Thirty-one people, scattered across six cities.
              </h2>
            </div>
            <Link
              href="mailto:careers@franjent.com"
              className="inline-flex shrink-0 items-center gap-4 rounded-full border-2 border-slate-900 bg-transparent px-7 py-3 text-xs font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white hover:gap-5"
            >
              We&apos;re Hiring
              <BsArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  {m.name}
                </p>
                <p className="mt-0.5 text-xs tracking-widest text-slate-500 uppercase">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-8xl">
          <p className="mb-10 text-center text-xs font-semibold tracking-widest text-slate-500 uppercase">
            Kindly noted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {press.map((name) => (
              <span
                key={name}
                className="text-lg font-light tracking-tight text-slate-400 sm:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#f2eee6] px-4 pb-24 sm:px-6 lg:px-16">
        <div className="relative mx-auto max-w-8xl overflow-hidden rounded-4xl bg-slate-900 px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 flex items-center gap-2 text-xs font-semibold tracking-widest text-white/70 uppercase">
              <IoLocationOutline className="h-3.5 w-3.5" /> Lisbon · London ·
              Tokyo
            </p>
            <h2 className="mb-6 text-4xl font-light text-white sm:text-5xl lg:text-6xl">
              Come stay, or come work with us.
            </h2>
            <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/75">
              Our door is open to travelers, writers, hoteliers, and anyone
              who thinks hospitality is worth getting right.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/auth/sign-up"
                className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-white/90 hover:gap-5"
              >
                Join Journey
                <BsArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:hello@franjent.com"
                className="inline-flex items-center gap-4 rounded-full border border-white/60 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:gap-5"
              >
                Get In Touch
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
