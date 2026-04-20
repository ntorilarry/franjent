"use client";

import { useState } from "react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FiHeart, FiInfo } from "react-icons/fi";
import { CgLock } from "react-icons/cg";
import Link from "next/link";

export type Property = {
  id: number;
  name: string;
  location: string;
  image: string;
  price: string;
  badge?: string;
};

const PropertyCard = ({ property }: { property: Property }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group">
      {/* Image */}
      <Link
        href={`/search/${property.id}`}
        className="relative block aspect-4/3 overflow-hidden rounded-xl bg-gray-100"
      >
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Heart */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setLiked((prev) => !prev);
          }}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white"
        >
          <FiHeart
            className={`h-4 w-4 ${liked ? "fill-red-500 text-red-500" : "text-gray-600"}`}
          />
        </button>

        {/* Badge */}
        {property.badge && (
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1">
            <span className="text-[10px] font-medium text-gray-700">
              {property.badge}
            </span>
          </div>
        )}
      </Link>

      {/* Info */}
      <Link href={`/search/${property.id}`} className="mt-3 block">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:underline decoration-gray-300 underline-offset-2">
          {property.name}
        </h3>
        <div className="mt-0.5 flex items-center gap-1 text-xs text-gray-500">
          <IoLocationOutline className="h-3.5 w-3.5" />
          <span>{property.location}</span>
        </div>
      </Link>

      {/* Pricing */}
      <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
        <span>Starting at</span>
        <FiInfo className="h-3 w-3" />
      </div>

      <div className="mt-1.5 flex items-start gap-6">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
            Non-Member Price
          </p>
          <p className="text-sm font-semibold text-gray-900">
            {property.price}
            <span className="font-normal text-gray-500">/night</span>
          </p>
        </div>

        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
            Member Price
          </p>
          <Link
            href="/auth/sign-in"
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 transition-colors"
          >
            <CgLock className="h-3.5 w-3.5" />
            Login to view
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
