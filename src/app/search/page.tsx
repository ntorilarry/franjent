"use client";

import SearchBar from "./components/searchBar";
import FilterBar from "./components/filterBar";
import PropertyCard from "./components/propertyCard";
import MapView from "./components/mapView";
import type { Property } from "./components/propertyCard";
import MainLayout from "@/shared/mainLayout";

const properties: Property[] = [
  {
    id: 1,
    name: "37US Residences",
    location: "London, England",
    image:
      "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800&h=600&fit=crop",
    price: "$611",
    badge: "Residences",
  },
  {
    id: 2,
    name: "Haymarket Hotel, Firmdale Hotels",
    location: "London, England",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
    price: "$781",
    badge: "Firmdale Properties",
  },
  {
    id: 3,
    name: "The Ned, London",
    location: "London, England",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
    price: "$520",
    badge: "Hotels",
  },
  {
    id: 4,
    name: "Claridge's",
    location: "London, England",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
    price: "$890",
    badge: "Hotels",
  },
  {
    id: 5,
    name: "The Savoy",
    location: "London, England",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    price: "$725",
  },
  {
    id: 6,
    name: "Shangri-La The Shard",
    location: "London, England",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
    price: "$650",
    badge: "Unique Stays",
  },
];

export default function SearchPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white py-36">
        {/* Search Bar */}
        <SearchBar />

        {/* Filter Bar */}
        <div className="mx-auto max-w-[1600px]">
          <FilterBar count={27} />
        </div>

        {/* Main Content: Cards + Map */}
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            {/* Property Grid */}
            <div className="w-full pb-12 lg:w-[55%]">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="hidden lg:block lg:w-[45%]">
              <MapView />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
