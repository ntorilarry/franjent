"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogoMain } from "../../../../public";

export default function SigninPage() {
  const [usePhone, setUsePhone] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="flex w-full flex-col justify-between px-8 py-10 sm:px-16 lg:w-1/2 lg:px-24">
        <div className="mx-auto w-full max-w-md flex-1 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Link href="/">
              <Image
                src={LogoMain}
                alt="Journey Logo"
                width={80}
                height={80}
                style={{ width: "auto", height: "80px" }}
              />
            </Link>
          </div>

          {/* Heading */}
          <h1 className="text-center text-3xl font-light tracking-tight sm:text-4xl">
            Sign in to Franjent
          </h1>

          {/* Description */}
          <p className="mt-4 text-center text-sm leading-relaxed text-gray-600">
            Access member benefits and earn points toward free nights at top
            properties around the World
          </p>

          <p className="mt-4 text-center text-sm font-medium tracking-wide">
            Make it Worth the Trip.
          </p>

          {/* Form */}
          <form
            className="mt-10 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {usePhone ? (
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none placeholder:text-gray-400 focus:border-black transition-colors"
                />
              </div>
            ) : (
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-sm outline-none placeholder:text-gray-400 focus:border-black transition-colors"
                />
              </div>
            )}

            {/* Toggle input type */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setUsePhone((prev) => !prev)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
              >
                <span>📱</span>
                {usePhone ? "Use Email Address" : "Use Phone Number"}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-full bg-black py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-gray-800"
            >
              Continue
            </button>
          </form>

     
        </div>

        {/* Bottom link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/sign-up"
              className="font-medium text-black underline hover:text-gray-700"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Panel - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
            alt="Luxury resort"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
