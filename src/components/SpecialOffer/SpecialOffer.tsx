"use client"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import Image from "next/image";

export default function SpecialOffer() {
  const [activeTab, setActiveTab] = useState("All");
  const offers = [
    {
      id: 1,
      img: "/p1.png",
      category: "Flight",
    },
    {
      id: 2,
      img: "/p2.png",
      category: "Hotel",
    },
    {
      id: 3,
      img: "/p3.png",
      category: "Tour",
    },
    {
      id: 4,
      img: "/p2.png",
      category: "Flight",
    },
    {
      id: 5,
      img: "/p1.png",
      category: "Tour",
    },
    {
      id: 6,
      img: "/p2.png",
      category: "Flight",
    },
    {
      id: 7,
      img: "/p3.png",
      category: "Hotel",
    },
  ];

  const tabs = ["All", "Flight", "Hotel", "Tour"];
  const filteredOffers =
    activeTab === "All"
      ? offers
      : offers.filter((offer) => offer.category === activeTab);

  return (
    <div className="py-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-[32px] font-bold text-[#8E191C]">
          Special Offer <span className="text-[#292828]">Packages</span>
        </h1>

        {/* Tabs */}
        <div className="p-1 border border-[#CECECE] rounded-[8px] flex gap-4 items-center">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`py-[6px] px-3 text-sm font-medium ${activeTab === tab
                  ? "bg-[#F4E8E8] text-[#8E191C]"
                  : "text-[#616161]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        pagination={{ clickable: true }}
        className="!pt-8 !px-4"
      >
        {filteredOffers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div className="!pb-11 !overflow-visible">
              <Image
                src={offer.img}
                alt={offer.category}
                width={347}
                height={190}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
