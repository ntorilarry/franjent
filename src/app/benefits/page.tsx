"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsCheck2 } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  LuBedDouble,
  LuUtensils,
  LuSparkles,
  LuGift,
  LuTicket,
  LuHeadphones,
  LuStar,
  LuCrown,
  LuGem,
} from "react-icons/lu";
import MainLayout from "@/shared/mainLayout";

type Tier = {
  key: "explorer" | "voyager" | "ambassador";
  name: string;
  nights: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  perks: string[];
  accent: string;
  badge: string;
};

const tiers: Tier[] = [
  {
    key: "explorer",
    name: "Explorer",
    nights: "0 – 9 nights/year",
    tagline: "The starting point — warm, generous, and never entry-level.",
    icon: LuStar,
    perks: [
      "Member-only rates across every Journey stay",
      "Welcome amenity at check-in",
      "Earn 5x points on every booking",
      "Early access to new collections",
    ],
    accent: "bg-white text-slate-900 border-slate-200",
    badge: "Included free",
  },
  {
    key: "voyager",
    name: "Voyager",
    nights: "10 – 24 nights/year",
    tagline: "For regulars. Upgrades become the rule, not the exception.",
    icon: LuCrown,
    perks: [
      "Everything in Explorer",
      "Guaranteed room upgrades when available",
      "Early check-in & late check-out",
      "Daily breakfast for two",
      "Earn 7x points on every booking",
    ],
    accent: "bg-slate-900 text-white border-slate-900",
    badge: "Most popular",
  },
  {
    key: "ambassador",
    name: "Ambassador",
    nights: "25+ nights/year",
    tagline: "A concierge on call, a suite held for you, and doors quietly opened.",
    icon: LuGem,
    perks: [
      "Everything in Voyager",
      "Suite upgrades when available",
      "Dedicated personal concierge",
      "$200 on-property credit per stay",
      "Waived resort & pet fees",
      "Earn 10x points on every booking",
    ],
    accent: "bg-[#f2eee6] text-slate-900 border-slate-200",
    badge: "By invitation",
  },
];

const categories = [
  {
    icon: LuBedDouble,
    tag: "Stays",
    title: "Rooms chosen, not allocated",
    body: "The front desk sees your history the moment you arrive. Upgrades, preferred floors, and the quiet corner you liked last time — on the house when available.",
  },
  {
    icon: LuUtensils,
    tag: "Dining",
    title: "A table that's already set",
    body: "Daily breakfast, restaurant credits, and priority reservations at on-property kitchens. Starting at Voyager, the bill quietly arranges itself.",
  },
  {
    icon: LuGift,
    tag: "Points & Rewards",
    title: "Points that actually spend",
    body: "Use them the way you want — future nights, room upgrades, experiences, or on-property credits. No blackout dates. Ever.",
  },
  {
    icon: LuSparkles,
    tag: "Recognition",
    title: "Preferences that travel with you",
    body: "How you take your coffee, the side of the bed you prefer, your allergy notes. Stored once, honored at every Journey property worldwide.",
  },
  {
    icon: LuTicket,
    tag: "Experiences",
    title: "First call on the good stuff",
    body: "Private tastings, behind-the-rope tours, and seasonal events we reserve for members before anyone else sees the invite.",
  },
  {
    icon: LuHeadphones,
    tag: "Service",
    title: "A real person, every time",
    body: "One number, 24 hours. Lost luggage at midnight, a reservation at a fully-booked restaurant, a surprise anniversary — our team solves it.",
  },
];

const comparison = [
  { row: "Member-only rates", non: false, member: true },
  { row: "Earn points on every stay", non: false, member: true },
  { row: "Free cancellation window", non: false, member: true },
  { row: "Welcome amenity on arrival", non: false, member: true },
  { row: "Room upgrades when available", non: false, member: true },
  { row: "Early check-in / late check-out", non: false, member: true },
  { row: "Daily breakfast for two", non: false, member: true },
  { row: "Dedicated concierge", non: false, member: true },
];

const faqs = [
  {
    q: "How much does Journey membership cost?",
    a: "Explorer is complimentary — always. Voyager and Ambassador are earned through nights stayed across any Journey property, not purchased.",
  },
  {
    q: "Do points expire?",
    a: "As long as you have at least one qualifying stay every 24 months, your points never expire. Members at Voyager and above never have expiring points.",
  },
  {
    q: "Can I use member rates on any stay?",
    a: "Yes. Every property in the Journey collection offers member-only rates, with no blackout dates. Special events and residences may have minimum-stay requirements.",
  },
  {
    q: "How do upgrades work?",
    a: "Upgrades are subject to availability at check-in. Voyager members receive upgrades within the standard room category; Ambassadors are considered for suite upgrades.",
  },
  {
    q: "Is Journey affiliated with any other loyalty program?",
    a: "Journey is independent, but members can convert points to and from select partner programs at favorable rates. The full list lives in your member dashboard.",
  },
];

export default function BenefitsPage() {
  const [activeTier, setActiveTier] = useState<Tier["key"]>("voyager");
  const [nights, setNights] = useState(12);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pointsPerNight = 850;
  const earnRate = nights >= 25 ? 10 : nights >= 10 ? 7 : 5;
  const estimatedPoints = nights * pointsPerNight * earnRate;
  const freeNights = Math.floor(estimatedPoints / 45000);

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative isolate min-h-[85vh] overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1800&h=1200&fit=crop"
          alt="Concierge welcome"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/85" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-8xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-16 lg:pb-28">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <div className="h-px w-16 bg-white" />
            <p className="text-sm font-medium text-white tracking-widest uppercase">
              Journey Membership
            </p>
          </div>
          <h1 className="max-w-5xl text-6xl font-heading font-light text-white sm:text-7xl lg:text-8xl">
            Good taste,{" "}
            <span className="italic">quietly rewarded.</span>
          </h1>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-base font-body text-gray-200">
              Membership isn&apos;t a punch card. It&apos;s a short list of
              the things a good hotel used to do for its regulars — and the
              promise that every Journey property still does.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/auth/sign-up"
                className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-white/90 hover:gap-5"
              >
                Join Free
                <BsArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center gap-4 rounded-full border border-white/60 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:gap-5"
              >
                Browse Stays
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tier ladder */}
      <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              Three Tiers. No Fees.
            </p>
            <h2 className="text-5xl text-slate-900 sm:text-6xl lg:text-7xl">
              Stay more.{" "}
              <span className="italic font-light">Receive more.</span>
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              const isActive = activeTier === tier.key;
              return (
                <button
                  key={tier.key}
                  onClick={() => setActiveTier(tier.key)}
                  className={`group relative flex flex-col rounded-3xl border p-8 text-left transition-all ${tier.accent} ${
                    isActive
                      ? "shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)] scale-[1.015]"
                      : "hover:shadow-[0_20px_40px_-25px_rgba(15,23,42,0.25)]"
                  }`}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${
                        tier.key === "voyager"
                          ? "bg-white/10"
                          : "bg-[#f2eee6]"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          tier.key === "voyager"
                            ? "text-white"
                            : "text-slate-800"
                        }`}
                      />
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-widest ${
                        tier.key === "voyager"
                          ? "text-white/70"
                          : "text-slate-500"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <h3 className="text-3xl font-light">{tier.name}</h3>
                  <p
                    className={`mt-1 text-xs font-semibold uppercase tracking-widest ${
                      tier.key === "voyager"
                        ? "text-white/70"
                        : "text-slate-500"
                    }`}
                  >
                    {tier.nights}
                  </p>
                  <p
                    className={`mt-5 text-sm leading-relaxed ${
                      tier.key === "voyager"
                        ? "text-white/80"
                        : "text-slate-600"
                    }`}
                  >
                    {tier.tagline}
                  </p>

                  <div
                    className={`my-7 border-t ${
                      tier.key === "voyager"
                        ? "border-white/15"
                        : "border-slate-200"
                    }`}
                  />

                  <ul className="space-y-3">
                    {tier.perks.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-sm"
                      >
                        <BsCheck2
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            tier.key === "voyager"
                              ? "text-white"
                              : "text-slate-800"
                          }`}
                        />
                        <span
                          className={
                            tier.key === "voyager"
                              ? "text-white/90"
                              : "text-slate-700"
                          }
                        >
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefit categories */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                What You Actually Get
              </p>
              <h2 className="max-w-2xl text-4xl text-slate-900 sm:text-5xl lg:text-6xl">
                Six promises, kept at every stay.
              </h2>
            </div>
            <Link
              href="/search"
              className="inline-flex shrink-0 items-center gap-4 rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase transition-all hover:bg-slate-800 hover:gap-5"
            >
              Find A Stay
              <BsArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.tag}
                  className="group rounded-3xl border border-slate-200 p-8 transition-all hover:border-slate-900 hover:shadow-[0_20px_40px_-25px_rgba(15,23,42,0.2)]"
                >
                  <span className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f2eee6] transition-colors group-hover:bg-slate-900">
                    <Icon className="h-5 w-5 text-slate-800 transition-colors group-hover:text-white" />
                  </span>
                  <p className="mb-3 text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                    {c.tag}
                  </p>
                  <h3 className="mb-4 text-2xl font-light leading-tight text-slate-900">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {c.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-8xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              Members vs. Non-Members
            </p>
            <h2 className="mb-6 text-4xl font-light text-slate-900 sm:text-5xl lg:text-6xl">
              The short list of things you only get{" "}
              <span className="italic">with us.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-slate-600">
              Everything on the right is free the moment you join. No tier
              to qualify for, no fee to pay, no hoop to jump through — just
              a short, honest list.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-6 border-b border-slate-200 bg-[#f2eee6] px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600 sm:px-8">
              <span>Benefit</span>
              <span className="w-20 text-center sm:w-28">Non-Member</span>
              <span className="w-20 text-center sm:w-28">Member</span>
            </div>
            <ul>
              {comparison.map((row, i) => (
                <li
                  key={row.row}
                  className={`grid grid-cols-[1fr_auto_auto] items-center gap-6 px-6 py-4 text-sm sm:px-8 ${
                    i !== comparison.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  <span className="text-slate-800">{row.row}</span>
                  <span className="flex w-20 justify-center sm:w-28">
                    {row.non ? (
                      <BsCheck2 className="h-5 w-5 text-slate-800" />
                    ) : (
                      <span className="h-px w-4 bg-slate-300" />
                    )}
                  </span>
                  <span className="flex w-20 justify-center sm:w-28">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900">
                      <BsCheck2 className="h-3.5 w-3.5 text-white" />
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Points calculator */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="relative overflow-hidden rounded-4xl bg-slate-900 p-10 text-white sm:p-12 lg:p-16">
              <Image
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&h=900&fit=crop"
                alt=""
                fill
                className="object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-slate-900/75 to-transparent" />
              <div className="relative z-10">
                <p className="mb-4 text-xs font-semibold tracking-widest text-white/70 uppercase">
                  The Math
                </p>
                <h2 className="mb-8 text-4xl font-light sm:text-5xl lg:text-6xl">
                  See what{" "}
                  <span className="italic">{nights} nights</span> earns
                  you.
                </h2>

                <div className="mb-10">
                  <label className="mb-4 flex items-center justify-between text-xs font-semibold tracking-widest uppercase">
                    <span className="text-white/70">Nights per year</span>
                    <span className="text-white">{nights}</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={40}
                    value={nights}
                    onChange={(e) => setNights(Number(e.target.value))}
                    className="w-full accent-white"
                  />
                  <div className="mt-2 flex justify-between text-[10px] font-semibold tracking-widest text-white/50 uppercase">
                    <span>1</span>
                    <span>Voyager · 10</span>
                    <span>Ambassador · 25</span>
                    <span>40</span>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-white/60 uppercase">
                      Earn Rate
                    </p>
                    <p className="mt-1 text-3xl font-light">
                      {earnRate}x
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-white/60 uppercase">
                      Points Earned
                    </p>
                    <p className="mt-1 text-3xl font-light">
                      {estimatedPoints.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-white/60 uppercase">
                      Free Nights
                    </p>
                    <p className="mt-1 text-3xl font-light">
                      {freeNights}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Points That Spend Like Cash
              </p>
              <h3 className="mb-6 text-3xl font-light text-slate-900 sm:text-4xl lg:text-5xl">
                Redeem on your terms, not theirs.
              </h3>
              <ul className="space-y-4 text-sm text-slate-700">
                {[
                  "Free nights at any Journey property, no blackout dates",
                  "Room upgrades at the time of booking",
                  "On-property credit for dining, spa, and experiences",
                  "Partner conversions at favorable rates",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900">
                      <BsCheck2 className="h-3 w-3 text-white" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <Link
                href="/auth/sign-up"
                className="mt-10 inline-flex w-fit items-center gap-4 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-slate-800 hover:gap-5"
              >
                Start Earning
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-8xl gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              Frequently Asked
            </p>
            <h2 className="text-4xl font-light text-slate-900 sm:text-5xl lg:text-6xl">
              The fine print, without the fine print.
            </h2>
            <p className="mt-6 max-w-md text-sm text-slate-600 leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Our member services
              team is one call away, day or night.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={f.q}
                  className={
                    i !== faqs.length - 1 ? "border-b border-slate-100" : ""
                  }
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                  >
                    <span className="text-base font-medium text-slate-900 sm:text-lg">
                      {f.q}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700">
                      {isOpen ? (
                        <FiMinus className="h-3.5 w-3.5" />
                      ) : (
                        <FiPlus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-7 pb-7 text-sm leading-relaxed text-slate-600">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#f2eee6] px-4 pb-24 sm:px-6 lg:px-16">
        <div className="relative mx-auto max-w-8xl overflow-hidden rounded-4xl bg-slate-900 px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&h=900&fit=crop"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 text-xs font-semibold tracking-widest text-white/70 uppercase">
              Free to join, quietly excellent
            </p>
            <h2 className="mb-6 text-4xl font-light text-white sm:text-5xl lg:text-6xl">
              Your next stay is also your first benefit.
            </h2>
            <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/75">
              Explorer tier is complimentary, takes under a minute to
              activate, and starts paying for itself on the very next
              booking.
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
                href="/search"
                className="inline-flex items-center gap-4 rounded-full border border-white/60 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:gap-5"
              >
                Browse Stays
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
