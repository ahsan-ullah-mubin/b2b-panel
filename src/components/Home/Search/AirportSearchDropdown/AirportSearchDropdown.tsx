"use client";
import { FlightSearchFormNToType } from "@/types/FlightSearch";
import { Divider, Input } from "antd";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const AirportSearchDropdown = ({
  onSelect,
  trackingId = 1
}: {
  onSelect: (airport: FlightSearchFormNToType) => void;
  trackingId?: number
}) => {
  const [searchText, setSearchText] = useState("");

  // Airport data
  const airports = useMemo(
    () => [
      {
        city: "Dhaka",
        country: "Bangladesh",
        airport: "Hazrat Shahjalal International Airport",
        code: "DAC",
      },
      {
        city: "Cox's Bazar",
        country: "Bangladesh",
        airport: "Cox's Bazar Airport",
        code: "CXB",
      },
      {
        city: "Jessore",
        country: "Bangladesh",
        airport: "Jessore Airport",
        code: "JSR",
      },
      {
        city: "Chittagong",
        country: "Bangladesh",
        airport: "Shah Amanat International Airport",
        code: "CGP",
      },
      {
        city: "Saidpur",
        country: "Bangladesh",
        airport: "Saidpur Airport",
        code: "SPD",
      },
      {
        city: "Sylhet Osmani",
        country: "Bangladesh",
        airport: "Osmany International Airport",
        code: "ZYL",
      },
    ],
    []
  );

  // Filter airports based on search text
  const filteredAirports = useMemo(() => {
    if (!searchText) return airports;

    return airports.filter(
      (airport) =>
        airport.city.toLowerCase().includes(searchText.toLowerCase()) ||
        airport.airport.toLowerCase().includes(searchText.toLowerCase()) ||
        airport.code.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, airports]);

  return (
    <div
      style={{
        width: 400,
        background: "white",
        borderRadius: 4,
        boxShadow:
          "0 8px 12px rgba(51,65,80,.06),0 14px 44px rgba(51,65,80,.11)",
      }}
    >
      <Input
        className="!focus:ring-0"
        style={{ border: "none", outline: "none", padding: "10px" }}
        prefix={<Search className="size-3" />}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Divider style={{ margin: 0 }} />
      <div
        className=""
        style={{ maxHeight: 200, overflowY: "auto", borderRadius: 4 }}
      >
        {filteredAirports.map((airport) => (
          <div
            key={airport.code}
            //   value={airport.code}
            onClick={() =>
              onSelect({
                id: trackingId,
                ...airport,
              })
            }
            style={{
              padding: "8px 15px",
              borderBottom: "1px solid #f0f0f0",
            }}
            className="flex items-center justify-between cursor-pointer hover:bg-gray-500/10"
          >
            <div>
              <div
                className="text-[14px]"
                style={{ fontWeight: 600, color: "#00026e" }}
              >
                {airport.city}, {airport.country}
              </div>
              <p className="text-[#2e538a] font-normal text-[12px]">
                {airport.airport}
              </p>
            </div>
            <div
              style={{
                fontWeight: 600,
                color: "#728db6",
              }}
            >
              {airport.code}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirportSearchDropdown;
