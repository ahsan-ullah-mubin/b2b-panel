// "use client"
// export default function SpecialOffer() {
//     return (
//         <div className="py-6 ">
//             <div className="flex justify-between items-center">
//                 <h1 className="text-[32px] font-bold text-[#8E191C] line-[38.8px]">Special Offer <span className="text-[#292828]">Packages</span></h1>
//                 {/* Tabs */}
//                 <div className="p-1 border border-[#CECECE] rounded-[8px] flex gap-4 items-center">
//                     <button className="py-[6px] px-3 bg-[#F4E8E8] text-sm font-medium text-[#8E191C] cursor-pointer">
//                         All
//                     </button>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="2" height="20" viewBox="0 0 2 20" fill="none">
//                         <path d="M1 0V20" stroke="#CECECE" />
//                     </svg>
//                     <button className="py-[6px] px-3 text-sm font-medium text-[#616161] cursor-pointer">
//                         Flight
//                     </button>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="2" height="20" viewBox="0 0 2 20" fill="none">
//                         <path d="M1 0V20" stroke="#CECECE" />
//                     </svg>
//                     <button className="py-[6px] px-3 text-sm font-medium text-[#616161] cursor-pointer">
//                         Hotel
//                     </button>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="2" height="20" viewBox="0 0 2 20" fill="none">
//                         <path d="M1 0V20" stroke="#CECECE" />
//                     </svg>
//                     <button className="py-[6px] px-3 text-sm font-medium text-[#616161] cursor-pointer">
//                         Tour
//                     </button>
//                 </div>
//             </div>
//             {/* show content acording to the button selected */}
            
//         </div>
//     )
// }


"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
      id: 4,
      img: "/p2.png",
      category: "Flight",
    },
    {
      id: 4,
      img: "/p2.png",
      category: "Flight",
    },
    {
      id: 4,
      img: "/p2.png",
      category: "Flight",
    },
  ];

  const tabs = ["All", "Flight", "Hotel", "Tour"];
  const filteredOffers =
    activeTab === "All"
      ? offers
      : offers.filter((offer) => offer.category === activeTab);

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[32px] font-bold text-[#8E191C]">
          Special Offer <span className="text-[#292828]">Packages</span>
        </h1>

        {/* Tabs */}
        <div className="p-1 border border-[#CECECE] rounded-[8px] flex gap-4 items-center">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`py-[6px] px-3 text-sm font-medium rounded ${
                activeTab === tab
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
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
      >
        {filteredOffers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div className="">
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
