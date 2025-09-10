"use client";

import { AutoComplete, Input } from "antd";
import { useState } from "react";

const demo_airports = [
  {
    code: "DAC",
    city_name: "Dhaka",
    country_name: "Bangladesh",
    airport_name: "Hazrat Shahjalal International Airport",
  },
  {
    code: "CXB",
    city_name: "Cox’s Bazar",
    country_name: "Bangladesh",
    airport_name: "Cox’s Bazar Airport",
  },
  {
    code: "DEL",
    city_name: "Delhi",
    country_name: "India",
    airport_name: "Indira Gandhi International Airport",
  },
];

export default function AirportAutoSuggestion() {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    if (!value) {
      setOptions([]);
      return;
    }

    const filtered = demo_airports.filter(
      (item) =>
        item.city_name.toLowerCase().includes(value.toLowerCase()) ||
        item.airport_name.toLowerCase().includes(value.toLowerCase()) ||
        item.country_name.toLowerCase().includes(value.toLowerCase()) ||
        item.code.toLowerCase().includes(value.toLowerCase())
    );

    setOptions(
      filtered.map((item) => ({
        value: item.code,
        label: (
          <div className="flex items-center gap-2">
            {/* <IoMdAirplane className="text-blue-500" /> */}
            <div>
              <div className="font-medium">
                {item.city_name}, {item.country_name} ({item.code})
              </div>
              <div className="text-gray-500 text-xs">{item.airport_name}</div>
            </div>
          </div>
        ),
      }))
    );
  };

  const handleSelect = (value) => {
    const selected = demo_airports.find((a) => a.code === value);
    console.log("Selected Airport:", selected);
  };

  return (
    <AutoComplete
      style={{ width: 350 }}
      options={options}
      onSelect={handleSelect}
      onSearch={handleSearch}
    >
      <Input
        size="large"
        placeholder="Search city or airport..."
        // prefix={<MdOutlineLocationCity className="text-lg" />}
      />
    </AutoComplete>
  );
}
