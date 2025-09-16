"use client"
import { Button } from "antd";
import { Clock } from "lucide-react";
import { useState } from "react";

export default function ResultCardDetails() {
  const [activeTab, setActiveTab] = useState("baggage");
  return (
    <div className="bg-white p-4 rounded-b-lg">
      <div className="flex gap-3 p-4 bg-[#f8f8f8]">
        {/* Left side – Trip details */}
        <div className="flex-1 bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold text-[#292828]">
            Trip to Kathmandu (DAC - KTM)
          </h2>
          <div className="flex gap-4 mt-4">
            <Button>
              Depart
            </Button>
            <div className="flex gap-2 items-center">
              <p className="text-base font-bold text-[#616060]">Sat, Apr 6</p>
              <div className="h-[10px] w-[2px] bg-[#666]" />
              <p className="text-base font-bold text-[#616060]">Duration 5h 35m</p>
            </div>
          </div>
          {/* Route Container*/}
          <div className="mt-4">
            <div className="flex gap-2 items-center">
              <h1 className="text-base font-bold text-[#333]">DAC - KTM</h1>
              <div className="flex gap-2 text-[#767676] text-base font-bold">
                <Clock />
                <h1>DAC - KTM</h1>
              </div>
              <div className="h-[10px] w-[2px] bg-[#666]" />
              <h1 className="text-base font-bold text-[#8E191C]">Non - Stop</h1>
            </div>
            {/* Route  */}
            <div className="flex gap-4 justify-start items-center">
              <div className="flex-1">
                <h1 className="text-lg font-bold text-[#333333]">8:15 - DAC</h1>
                <h3 className="text-sm font-medium text-[#333]">Jan 26 , Sunday</h3>
                <h4 className="text-sm font-normal text-[#616060] mt-1">BG-454 I K I Boeing-879</h4>
                <h5 className="text-sm font-medium text-[#616060] mt-2">BG-454 I K I Boeing-879</h5>
              </div>
              <div className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="162" height="16" viewBox="0 0 162 16" fill="none">
                  <path d="M2 8C57.0606 8 97.8193 7.99999 160 7.99999" stroke="#DCB8B9" stroke-dasharray="3 3" />
                  <path d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z" fill="#8E191C" />
                  <path d="M4 5C5.65685 5 7 6.34315 7 8C7 9.65685 5.65685 11 4 11C2.34315 11 1 9.65685 1 8C1 6.34315 2.34315 5 4 5Z" stroke="#8E191C" stroke-opacity="0.3" stroke-width="2" />
                  <path d="M158 10C159.105 10 160 9.10457 160 8C160 6.89543 159.105 6 158 6C156.895 6 156 6.89543 156 8C156 9.10457 156.895 10 158 10Z" fill="#8E191C" />
                  <path d="M158 5C159.657 5 161 6.34315 161 8C161 9.65685 159.657 11 158 11C156.343 11 155 9.65685 155 8C155 6.34315 156.343 5 158 5Z" stroke="#8E191C" stroke-opacity="0.3" stroke-width="2" />
                  <path d="M79.5 16H81L84.75 9.26316H88.875C89.4975 9.26316 90 8.69895 90 8C90 7.30105 89.4975 6.73684 88.875 6.73684H84.75L81 7.36186e-08L79.5 0L81.375 6.73684H77.25L76.125 5.05263H75L75.75 8L75 10.9474H76.125L77.25 9.26316H81.375L79.5 16Z" fill="#8E191C" />
                </svg>
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-bold text-[#333333]">8:15 - DAC</h1>
                <h3 className="text-sm font-medium text-[#333]">Jan 26 , Sunday</h3>
                <h4 className="text-sm font-normal text-[#616060] mt-1">BG-454 I K I Boeing-879</h4>
                <h5 className="text-sm font-medium text-[#616060] mt-2">BG-454 I K I Boeing-879</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Right side – Tabs */}
        <div className="w-[285px] bg-white rounded-lg shadow px-3 py-4">
          {/* Tabs */}
          <div className="border border-[#DB001112] rounded-[8px] flex gap-4 items-center mb-4">
            {["baggage", "fare", "policy"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-[10px] px-2 text-sm font-bold ${activeTab === tab
                  ? "bg-[#F4E8E8] text-[#8E191C]"
                  : "text-[#616060]"
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "baggage" && (
            <div className="space-y-4">
              {/* First Segment */}
              <div>
                <div className="flex justify-between font-medium text-[#616060] text-sm px-2 py-1 bg-[#33333312] rounded">
                  <div className="flex gap-2 items-center">
                    <p>DAC</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                      <path d="M3.9 14H5.2L8.45 8.10526H12.025C12.5645 8.10526 13 7.61158 13 7C13 6.38842 12.5645 5.89474 12.025 5.89474H8.45L5.2 6.44162e-08L3.9 0L5.525 5.89474H1.95L0.975 4.42105H0L0.65 7L0 9.57895H0.975L1.95 8.10526H5.525L3.9 14Z" fill="#8E191C" />
                    </svg>
                    <p>CXB</p>
                  </div>
                  <button className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="8.99984" cy="8.99984" r="8.33333" stroke="#616060" stroke-width="1.25" stroke-linejoin="round" />
                      <path d="M13.1663 8.16652L8.99965 11.4998L4.83301 8.1665" stroke="#616060" stroke-width="1.25" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2 space-y-3">
                  <div className="flex justify-between">
                    <div className="flex gap-2 text-[#292828] text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12.6953 7.10938H12.1094V2.42188H12.6953C13.0189 2.42188 13.2812 2.15953 13.2812 1.83594C13.2812 1.51234 13.0189 1.25 12.6953 1.25H8.00781C7.68422 1.25 7.42188 1.51234 7.42188 1.83594C7.42188 2.15953 7.68422 2.42188 8.00781 2.42188H8.59375V7.10938H8.00781C7.03855 7.10938 6.25 7.89793 6.25 8.86719V15.8984C6.25 16.6623 6.73988 17.3136 7.42188 17.5555V18.2422C7.42188 18.5658 7.68422 18.8281 8.00781 18.8281C8.33141 18.8281 8.59375 18.5658 8.59375 18.2422V17.6562H12.1094V18.2422C12.1094 18.5658 12.3717 18.8281 12.6953 18.8281C13.0189 18.8281 13.2812 18.5658 13.2812 18.2422V17.5555C13.9632 17.3136 14.4531 16.6623 14.4531 15.8984V8.86719C14.4531 7.89793 13.6646 7.10938 12.6953 7.10938ZM9.76562 2.42188H10.9375V7.10938H9.76562V2.42188ZM13.2812 15.8984C13.2812 16.2215 13.0184 16.4844 12.6953 16.4844H8.00781C7.68473 16.4844 7.42188 16.2215 7.42188 15.8984V8.86719C7.42188 8.5441 7.68473 8.28125 8.00781 8.28125H12.6953C13.0184 8.28125 13.2812 8.5441 13.2812 8.86719V15.8984Z" fill="#333333" />
                        <path d="M9.17969 9.45312C8.85609 9.45312 8.59375 9.71547 8.59375 10.0391V14.7266C8.59375 15.0502 8.85609 15.3125 9.17969 15.3125C9.50328 15.3125 9.76562 15.0502 9.76562 14.7266V10.0391C9.76562 9.71547 9.50328 9.45312 9.17969 9.45312Z" fill="#333333" />
                        <path d="M11.5234 9.45312C11.1998 9.45312 10.9375 9.71547 10.9375 10.0391V14.7266C10.9375 15.0502 11.1998 15.3125 11.5234 15.3125C11.847 15.3125 12.1094 15.0502 12.1094 14.7266V10.0391C12.1094 9.71547 11.847 9.45312 11.5234 9.45312Z" fill="#333333" />
                      </svg>
                      <p>Carry-on Baggage:</p>
                    </div>
                    <p className="font-bold">1 × 7 kg/Adult</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2 text-[#292828] text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12.6953 7.10938H12.1094V2.42188H12.6953C13.0189 2.42188 13.2812 2.15953 13.2812 1.83594C13.2812 1.51234 13.0189 1.25 12.6953 1.25H8.00781C7.68422 1.25 7.42188 1.51234 7.42188 1.83594C7.42188 2.15953 7.68422 2.42188 8.00781 2.42188H8.59375V7.10938H8.00781C7.03855 7.10938 6.25 7.89793 6.25 8.86719V15.8984C6.25 16.6623 6.73988 17.3136 7.42188 17.5555V18.2422C7.42188 18.5658 7.68422 18.8281 8.00781 18.8281C8.33141 18.8281 8.59375 18.5658 8.59375 18.2422V17.6562H12.1094V18.2422C12.1094 18.5658 12.3717 18.8281 12.6953 18.8281C13.0189 18.8281 13.2812 18.5658 13.2812 18.2422V17.5555C13.9632 17.3136 14.4531 16.6623 14.4531 15.8984V8.86719C14.4531 7.89793 13.6646 7.10938 12.6953 7.10938ZM9.76562 2.42188H10.9375V7.10938H9.76562V2.42188ZM13.2812 15.8984C13.2812 16.2215 13.0184 16.4844 12.6953 16.4844H8.00781C7.68473 16.4844 7.42188 16.2215 7.42188 15.8984V8.86719C7.42188 8.5441 7.68473 8.28125 8.00781 8.28125H12.6953C13.0184 8.28125 13.2812 8.5441 13.2812 8.86719V15.8984Z" fill="#333333" />
                        <path d="M9.17969 9.45312C8.85609 9.45312 8.59375 9.71547 8.59375 10.0391V14.7266C8.59375 15.0502 8.85609 15.3125 9.17969 15.3125C9.50328 15.3125 9.76562 15.0502 9.76562 14.7266V10.0391C9.76562 9.71547 9.50328 9.45312 9.17969 9.45312Z" fill="#333333" />
                        <path d="M11.5234 9.45312C11.1998 9.45312 10.9375 9.71547 10.9375 10.0391V14.7266C10.9375 15.0502 11.1998 15.3125 11.5234 15.3125C11.847 15.3125 12.1094 15.0502 12.1094 14.7266V10.0391C12.1094 9.71547 11.847 9.45312 11.5234 9.45312Z" fill="#333333" />
                      </svg>
                      <p>Carry-on Baggage:</p>
                    </div>
                    <p className="font-bold">1 × 7 kg/Adult</p>
                  </div>
                </div>
              </div>
              {/* Second Segment */}
              <div>
                <div className="flex justify-between font-medium text-[#616060] text-sm px-2 py-1 bg-[#33333312] rounded">
                  <div className="flex gap-2 items-center">
                    <p>DAC</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                      <path d="M3.9 14H5.2L8.45 8.10526H12.025C12.5645 8.10526 13 7.61158 13 7C13 6.38842 12.5645 5.89474 12.025 5.89474H8.45L5.2 6.44162e-08L3.9 0L5.525 5.89474H1.95L0.975 4.42105H0L0.65 7L0 9.57895H0.975L1.95 8.10526H5.525L3.9 14Z" fill="#8E191C" />
                    </svg>
                    <p>CXB</p>
                  </div>
                  <button className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="8.99984" cy="8.99984" r="8.33333" stroke="#616060" stroke-width="1.25" stroke-linejoin="round" />
                      <path d="M13.1663 8.16652L8.99965 11.4998L4.83301 8.1665" stroke="#616060" stroke-width="1.25" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2 space-y-3">
                  <div className="flex justify-between">
                    <div className="flex gap-2 text-[#292828] text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12.6953 7.10938H12.1094V2.42188H12.6953C13.0189 2.42188 13.2812 2.15953 13.2812 1.83594C13.2812 1.51234 13.0189 1.25 12.6953 1.25H8.00781C7.68422 1.25 7.42188 1.51234 7.42188 1.83594C7.42188 2.15953 7.68422 2.42188 8.00781 2.42188H8.59375V7.10938H8.00781C7.03855 7.10938 6.25 7.89793 6.25 8.86719V15.8984C6.25 16.6623 6.73988 17.3136 7.42188 17.5555V18.2422C7.42188 18.5658 7.68422 18.8281 8.00781 18.8281C8.33141 18.8281 8.59375 18.5658 8.59375 18.2422V17.6562H12.1094V18.2422C12.1094 18.5658 12.3717 18.8281 12.6953 18.8281C13.0189 18.8281 13.2812 18.5658 13.2812 18.2422V17.5555C13.9632 17.3136 14.4531 16.6623 14.4531 15.8984V8.86719C14.4531 7.89793 13.6646 7.10938 12.6953 7.10938ZM9.76562 2.42188H10.9375V7.10938H9.76562V2.42188ZM13.2812 15.8984C13.2812 16.2215 13.0184 16.4844 12.6953 16.4844H8.00781C7.68473 16.4844 7.42188 16.2215 7.42188 15.8984V8.86719C7.42188 8.5441 7.68473 8.28125 8.00781 8.28125H12.6953C13.0184 8.28125 13.2812 8.5441 13.2812 8.86719V15.8984Z" fill="#333333" />
                        <path d="M9.17969 9.45312C8.85609 9.45312 8.59375 9.71547 8.59375 10.0391V14.7266C8.59375 15.0502 8.85609 15.3125 9.17969 15.3125C9.50328 15.3125 9.76562 15.0502 9.76562 14.7266V10.0391C9.76562 9.71547 9.50328 9.45312 9.17969 9.45312Z" fill="#333333" />
                        <path d="M11.5234 9.45312C11.1998 9.45312 10.9375 9.71547 10.9375 10.0391V14.7266C10.9375 15.0502 11.1998 15.3125 11.5234 15.3125C11.847 15.3125 12.1094 15.0502 12.1094 14.7266V10.0391C12.1094 9.71547 11.847 9.45312 11.5234 9.45312Z" fill="#333333" />
                      </svg>
                      <p>Carry-on Baggage:</p>
                    </div>
                    <p className="font-bold">1 × 7 kg/Adult</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2 text-[#292828] text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12.6953 7.10938H12.1094V2.42188H12.6953C13.0189 2.42188 13.2812 2.15953 13.2812 1.83594C13.2812 1.51234 13.0189 1.25 12.6953 1.25H8.00781C7.68422 1.25 7.42188 1.51234 7.42188 1.83594C7.42188 2.15953 7.68422 2.42188 8.00781 2.42188H8.59375V7.10938H8.00781C7.03855 7.10938 6.25 7.89793 6.25 8.86719V15.8984C6.25 16.6623 6.73988 17.3136 7.42188 17.5555V18.2422C7.42188 18.5658 7.68422 18.8281 8.00781 18.8281C8.33141 18.8281 8.59375 18.5658 8.59375 18.2422V17.6562H12.1094V18.2422C12.1094 18.5658 12.3717 18.8281 12.6953 18.8281C13.0189 18.8281 13.2812 18.5658 13.2812 18.2422V17.5555C13.9632 17.3136 14.4531 16.6623 14.4531 15.8984V8.86719C14.4531 7.89793 13.6646 7.10938 12.6953 7.10938ZM9.76562 2.42188H10.9375V7.10938H9.76562V2.42188ZM13.2812 15.8984C13.2812 16.2215 13.0184 16.4844 12.6953 16.4844H8.00781C7.68473 16.4844 7.42188 16.2215 7.42188 15.8984V8.86719C7.42188 8.5441 7.68473 8.28125 8.00781 8.28125H12.6953C13.0184 8.28125 13.2812 8.5441 13.2812 8.86719V15.8984Z" fill="#333333" />
                        <path d="M9.17969 9.45312C8.85609 9.45312 8.59375 9.71547 8.59375 10.0391V14.7266C8.59375 15.0502 8.85609 15.3125 9.17969 15.3125C9.50328 15.3125 9.76562 15.0502 9.76562 14.7266V10.0391C9.76562 9.71547 9.50328 9.45312 9.17969 9.45312Z" fill="#333333" />
                        <path d="M11.5234 9.45312C11.1998 9.45312 10.9375 9.71547 10.9375 10.0391V14.7266C10.9375 15.0502 11.1998 15.3125 11.5234 15.3125C11.847 15.3125 12.1094 15.0502 12.1094 14.7266V10.0391C12.1094 9.71547 11.847 9.45312 11.5234 9.45312Z" fill="#333333" />
                      </svg>
                      <p>Carry-on Baggage:</p>
                    </div>
                    <p className="font-bold">1 × 7 kg/Adult</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "fare" && (
            <div className="text-sm text-gray-600">
              <p>Fare details will go here...</p>
            </div>
          )}
          {activeTab === "policy" && (
            <div className="text-sm text-gray-600">
              <p>Policy information will go here...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
