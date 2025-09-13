"use client";

import { SearchConfig } from "@/config/SearchConfig/search.config";
import { FlightSearchFormNToType, Passengers } from "@/types/FlightSearch";
import {
  CloseCircleFilled,
  SearchOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { Button, Card, DatePicker, Dropdown, Radio } from "antd";
import dayjs, { Dayjs } from "dayjs";
import lodash from "lodash";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import AirportSearchDropdown from "./AirportSearchDropdown/AirportSearchDropdown";
import PassengerSelector from "./PassengerSelector/PassengerSelector";
import "./Search.css";

interface JourneyDate {
  id: number;
  date: Dayjs | null;
}
export default function FlightSearch() {
  const [activeTab, setActiveTab] = useState("All");
  const [tripType, setTripType] = useState<
    "oneWay" | "roundTrip" | "multiCity"
  >("oneWay");
  const [from, setFrom] = useState<FlightSearchFormNToType[]>([
    {
      id: 1,
      city: "Dhaka",
      country: "Bangladesh",
      airport: "Hazrat Shahjalal International Airport",
      code: "DAC",
    },
  ]);
  const [to, setTo] = useState<FlightSearchFormNToType[]>([
    {
      id: 1,
      city: "Cox",
      country: "Bangladesh",
      airport: "Hazrat Shahjalal International Airport",
      code: "DAC",
    },
  ]);

  const [multicityRowLength, setMulticityRowLength] = useState<number>(1);
  const [journeyDates, setJourneyDates] = useState<JourneyDate[]>([
    { id: 1, date: dayjs() },
  ]);

  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [passengers, setPassengers] = useState<Passengers>({
    adults: 1,
    children: 0,
    childAges: [undefined, undefined, undefined, undefined] as (
      | number
      | undefined
    )[],
    infants: 0,
    travelClass: "Economy",
  });

  // Swap From <-> To
  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };
  const handleSelectFrom = (airport: {
    id: number;
    city: string;
    country: string;
    airport: string;
    code: string;
  }) => {
    setFrom((prev) => {
      const newFrom = [...prev];

      for (let i = 1; i < airport.id; i++) {
        if (!newFrom.find((item) => item.id === i)) {
          newFrom.push({ id: i, city: "", country: "", airport: "", code: "" });
        }
      }
      const exists = newFrom.find((item) => item.id === airport.id);
      if (exists) {
        return newFrom.map((item) => (item.id === airport.id ? airport : item));
      } else {
        return [...newFrom, airport];
      }
    });

    const findInTo = to?.find((item) => item?.id === airport?.id);

    if (lodash.isEqual(findInTo, airport)) {
      setTo((prev) =>
        prev.map((item) =>
          item.id === airport.id
            ? { ...item, city: "", country: "", airport: "", code: "" }
            : item
        )
      );
    }
  };

  const handleSelectedTo = (airport: {
    id: number;
    city: string;
    country: string;
    airport: string;
    code: string;
  }) => {
    setTo((prev) => {
      const newFrom = [...prev];

      for (let i = 1; i < airport.id; i++) {
        if (!newFrom.find((item) => item.id === i)) {
          newFrom.push({ id: i, city: "", country: "", airport: "", code: "" });
        }
      }
      const exists = newFrom.find((item) => item.id === airport.id);
      if (exists) {
        return newFrom.map((item) => (item.id === airport.id ? airport : item));
      } else {
        return [...newFrom, airport];
      }
    });
    const findInForm = from?.find((item) => item?.id === airport?.id);

    if (lodash.isEqual(findInForm, airport)) {
      setFrom((prev) =>
        prev.map((item) =>
          item.id === airport.id
            ? { ...item, city: "", country: "", airport: "", code: "" }
            : item
        )
      );
    }
  };

  const handleJourneyDateChange = (id: number, date: Dayjs) => {
    setJourneyDates((prev) => {
      const newDates = [...prev];

      for (let i = 1; i < id; i++) {
        if (!newDates.find((d) => d.id === i)) {
          newDates.push({ id: i, date: null });
        }
      }

      const exists = newDates.find((d) => d.id === id);
      if (exists) {
        return newDates.map((d) => (d.id === id ? { ...d, date } : d));
      } else {
        // add new
        return [...newDates, { id, date }];
      }
    });
  };

  const router = useRouter();

  const handleSearch = () => {
    if (tripType === "multiCity") {
      const maxRow = multicityRowLength;

      for (let i = 1; i <= maxRow; i++) {
        if (!from[i]?.code) {
          return toast.warning("Please select a From destination");
        }
        if (!to[i]?.code) {
          return toast.warning("Please select a To destination");
        }
        if (!journeyDates[i]?.date) {
          return toast.warning("Please select a Journey date");
        }
      }
    }

    const { adults, children, childAges, infants, travelClass } = passengers;
    const trips =
      tripType === "roundTrip"
        ? `${from[0].code},${to[0].code},${journeyDates[0]?.date?.format(
            "YYYY-MM-DD"
          )},${to[0].code},${from[0].code},${returnDate?.format("YYYY-MM-DD")}`
        : tripType === "multiCity"
        ? from
            .map((f, i) => {
              const t = to[i];
              const jd = journeyDates[i];
              return `${f.code},${t?.code},${jd?.date?.format("YYYY-MM-DD")}`;
            })
            .join(",")
        : `${from[0].code},${to[0].code},${journeyDates[0]?.date?.format(
            "YYYY-MM-DD"
          )}`;

    const childAgesStr = childAges.slice(0, children).join(",");

    const params = new URLSearchParams({
      adult: adults.toString(),
      child: children.toString(),
      child_age: childAgesStr,
      infant: infants.toString(),
      cabin_class: travelClass,
      trips: trips,
    });

    router.replace(`/?${params.toString()}`);
  };

  const tabs = ["Flight", "Hotel", "Package", "Visa", "Umrah"];

  const handleRemoveRow = (index: number) => {
    // Remove current index from all arrays
    setFrom((prev) => prev.filter((_, i) => i !== index));
    setTo((prev) => prev.filter((_, i) => i !== index));
    setJourneyDates((prev) => prev.filter((_, i) => i !== index));

    // Reduce total row length
    setMulticityRowLength((prev) => prev - 1);
  };

  return (
    <div
      style={{
        borderRadius: 16,
        boxShadow: "0 4px 30px 0 rgba(26, 28, 33, 0.05)",
        padding: "68px 24px 24px 24px",
        background: "#B36567",
      }}
    >
      <Card
        style={{
          // maxWidth: 950,
          // margin: "30px auto",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          padding: "40px 32px 32px 32px",
          position: "relative",
        }}
        bodyStyle={{
          padding: 0,
        }}
      >
        <div
          style={{
            borderRadius: 8,
            background: " #FFF",
            boxShadow: "0 8.837px 35.349px 0 rgba(0, 0, 0, 0.10)",
            height: 66,
            padding: "0 8px",
          }}
          className=" flex gap-4 items-center w-fit  mx-auto absolute inset-0 -top-12 "
        >
          {tabs.map((tab, i) => (
            <button
              key={i}
              style={{
                borderRadius: 8,
              }}
              onClick={() => setActiveTab(tab)}
              className={`py-[16px] px-6 text-sm font-medium flex items-center gap-2 ${
                activeTab === tab
                  ? "bg-[#F4E8E8] text-[#8E191C] border-r border-l border-x-[#A54749]"
                  : "text-[#616161]"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.0757 3.40329C15.1998 2.91085 16.2376 3.16114 17.1463 3.41492C17.5272 3.52065 17.9535 3.63904 18.2159 3.82854C18.6259 4.12464 18.8944 4.58127 18.9498 5.08466C18.9917 5.46542 18.8709 5.84794 18.7774 6.21245C18.5454 7.11723 18.2446 8.13452 17.2469 8.85144C16.8721 9.12078 16.2943 9.41719 15.8323 9.63919C15.3575 9.86736 14.9539 10.0409 14.9004 10.0638L8.89468 12.6434C8.18708 12.9467 8.03037 13.0304 7.92603 13.1524C7.44029 13.7203 7.44852 14.6681 7.27142 15.3589C7.18238 15.7062 6.93447 16.0874 6.64994 16.3643C6.38467 16.6225 5.90122 16.9669 5.3233 16.8469C4.72823 16.7234 4.53545 16.1753 4.46939 15.6444L4.06237 13.0912C4.03718 12.9337 4.02459 12.8549 3.98536 12.7877C3.94612 12.7204 3.88378 12.6707 3.75909 12.5713L1.71695 10.9425C1.28701 10.6228 0.899275 10.1829 1.09165 9.60269C1.2784 9.03936 1.82826 8.79911 2.18246 8.70294C2.56663 8.59861 3.02149 8.57803 3.36592 8.67419C4.06556 8.86961 4.89029 9.35103 5.6384 9.21869C5.80011 9.19003 5.95249 9.09719 6.57155 8.64486L11.8384 4.80239C11.8854 4.76795 12.2395 4.50978 12.6772 4.2181C13.1032 3.93424 13.6521 3.58882 14.0757 3.40329Z"
                  fill="#8E191C"
                />
                <g opacity="0.4">
                  <path
                    d="M11.0062 12.871C10.6786 13.0118 10.5147 13.0822 10.4477 13.2274C10.3807 13.3725 10.4336 13.5429 10.5392 13.8835L11.5797 17.2395C11.669 17.5275 11.849 17.8991 12.2503 18.0559C12.6508 18.2123 13.0301 18.06 13.2757 17.9192C13.7017 17.6749 14.0561 17.3799 14.2975 16.9728C14.5387 16.5662 14.6312 16.1085 14.6427 15.6028L14.7291 11.7854C14.7343 11.552 14.737 11.4353 14.6616 11.3844C14.5862 11.3334 14.4788 11.3795 14.2642 11.4717L11.0062 12.871Z"
                    fill="#8E191C"
                  />
                  <path
                    d="M7.00585 2.27741C6.54081 2.0222 6.07997 1.86692 5.58947 1.87118C5.09803 1.87545 4.64766 2.03926 4.20306 2.29643C3.94777 2.4441 3.61889 2.70309 3.55388 3.13723C3.48899 3.57059 3.72573 3.9203 3.93934 4.15071L6.29441 6.65517C6.53437 6.91035 6.65434 7.03793 6.81127 7.05255C6.96818 7.06718 7.10967 6.96395 7.39264 6.75751L10.3074 4.63099C10.498 4.49196 10.5933 4.42245 10.5874 4.33108C10.5816 4.23971 10.4782 4.18297 10.2713 4.06949L7.00585 2.27741Z"
                    fill="#8E191C"
                  />
                </g>
              </svg>
              {tab}
            </button>
          ))}
        </div>
        <div style={{ marginBottom: 10 }}>
          <Radio.Group
            value={tripType}
            onChange={(e) => {
              const value = e.target.value;
              setTripType(value);
              setMulticityRowLength(1);
              if (value === "oneWay") {
                setReturnDate(null);
              } else if (value === "roundTrip") {
                const journeyDate = journeyDates[0]?.date;
                setReturnDate(
                  journeyDate
                    ? journeyDate.add(SearchConfig.returnDateGap, "day")
                    : null
                );
              }

              if (value === "oneWay" || value === "roundTrip") {
                setFrom((prev) => (prev.length > 0 ? [prev[0]] : []));
                setTo((prev) => (prev.length > 0 ? [prev[0]] : []));
                setJourneyDates((prev) => (prev.length > 0 ? [prev[0]] : []));
              }
            }}
          >
            <Radio value="oneWay">One Way</Radio>
            <Radio value="roundTrip">Round Trip</Radio>
            <Radio value="multiCity">Multi-City</Radio>
          </Radio.Group>
        </div>

        <div
          className={`${
            tripType === "multiCity" ? "hidden" : "flex"
          }     gap-[21.79px]`}
        >
          <div className="flex items-center gap-[21.79px] relative  basis-2/5">
            <Dropdown
              popupRender={() => (
                <AirportSearchDropdown onSelect={handleSelectFrom} />
              )}
              trigger={["click"]}
            >
              <div
                style={{
                  borderRadius: " 7.07px",
                  border: "0.442px solid var(--ccc, #CCC)",
                  background: "var(--FFFFFF---pure-white, #FFF)",
                  // height: "88.372px",
                }}
                className="px-[17.08px] py-[10.64px] space-y-3  w-full min-w-[198px]"
              >
                <h5 className="text-[#616060] text-[14px]">From</h5>
                <h2 className="text-[#292828] text-[18px] font-bold ">
                  {from[0]?.city || "Select a city"}{" "}
                </h2>
                <p className="text-[#616060] text-[16px]  line-clamp-1">
                  {from[0]?.airport || "Click to choose an airport"}
                </p>
              </div>
            </Dropdown>

            {/* Swap Button */}
            <Button
              icon={<SwapOutlined />}
              onClick={handleSwap}
              style={{
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                margin: " auto",
                justifyContent: "center",
                alignItems: "center",
                background: "#8E191C",
                color: "white",
              }}
              className="!absolute !inset-0"
            />
            <Dropdown
              // open={isOpen("from")}
              // onOpenChange={(flag) => setOpenDropdownId(flag ? "from" : null)}
              popupRender={() => (
                <AirportSearchDropdown onSelect={handleSelectedTo} />
              )}
              trigger={["click"]}
            >
              <div
                style={{
                  borderRadius: " 7.07px",
                  border: "0.442px solid var(--ccc, #CCC)",
                  background: "var(--FFFFFF---pure-white, #FFF)",
                  // height: "88.372px",
                }}
                className="px-[17.08px] py-[10.64px] space-y-3  w-full min-w-[198px]"
              >
                <h5 className="text-[#616060] text-sm">To</h5>
                <h2 className="text-[#292828] text-[18px] font-bold ">
                  {to[0]?.city || "Select a city"}{" "}
                </h2>
                <p className="text-[#616060] text-base  line-clamp-1">
                  {to[0]?.airport || "Click to choose an airport"}
                </p>
              </div>
            </Dropdown>
          </div>
          <div className="flex items-center basis-2/5  ">
            <button
              style={{
                border: "0.442px solid var(--ccc, #CCC)",
                background: "var(--FFFFFF---pure-white, #FFF)",
                height: "100%",
              }}
              className="px-[17.08px] text-start relative space flex justify-between flex-col py-[10.64px] w-full min-w-[179.294px] rounded-s-[7.07px] "
            >
              <h5 className="text-[#616060] text-sm">Journey Date</h5>
              {/* <h2 className="text-[#292828] text-[18px] font-bold ">
                24 May, 2025
              </h2> */}
              <DatePicker
                // open={open}
                format="DD MMM, YYYY"
                defaultValue={journeyDates[0]?.date}
                value={journeyDates[0]?.date}
                onChange={(date) => {
                  if (date) {
                    handleJourneyDateChange(1, date);
                    setReturnDate(null);
                  }
                }}
                renderExtraFooter={() => null}
                suffixIcon={null}
                disabledDate={(current) => {
                  return current && current < dayjs().startOf("day");
                }}
                style={{ border: "none", padding: 0 }}
                className="font-bold "
              />
              <h4 className="text-[#616060] text-base line-clamp-1">
                {/* Saturday */}
                {journeyDates[0].date
                  ? journeyDates[0]?.date.format("dddd")
                  : ""}
              </h4>
            </button>

            <button
              style={{
                border: "0.442px solid var(--ccc, #CCC)",
                background: "var(--FFFFFF---pure-white, #FFF)",
                height: "100%",
              }}
              disabled={tripType === "oneWay"}
              className="px-[17.08px] py-[10.64px] text-start relative flex justify-between flex-col w-full min-w-[179.294px] rounded-r-[7.07px] "
            >
              <>
                <h5 className="text-[#616060] text-sm">Return Date</h5>
                <DatePicker
                  format="DD MMM, YYYY"
                  defaultValue={returnDate}
                  value={returnDate}
                  onChange={(date) => {
                    if (date) {
                      setReturnDate(date);
                    }
                  }}
                  renderExtraFooter={() => null}
                  suffixIcon={null}
                  placeholder="Save more on return flight"
                  style={{ border: "none", padding: 0 }}
                  disabledDate={(current) =>
                    current && current < journeyDates[0]!.date!.startOf("day")
                  }
                  className="font-bold"
                />
                <h4 className="text-[#616060] text-base line-clamp-1">
                  {returnDate ? returnDate.format("dddd") : ""}
                </h4>
              </>
            </button>
          </div>

          <Dropdown
            popupRender={() => (
              <PassengerSelector
                setPassengers={setPassengers}
                passengers={passengers}
              />
            )}
            trigger={["click"]}
            className="basis-1/5"
          >
            <div
              style={{
                borderRadius: " 7.07px",
                border: "0.442px solid var(--ccc, #CCC)",
                background: "var(--FFFFFF---pure-white, #FFF)",
                // height: " 88.372px",
              }}
              className="px-[17.08px] py-[10.64px] space-y-3  min-w-[197.437px] "
            >
              <h5 className="text-[#616060] text-sm">Traveler, Class</h5>
              <h2 className="text-[#292828] text-[18px] font-bold ">
                {/* 1 Travelers{" "} */}
                {passengers?.adults +
                  passengers?.children +
                  passengers?.infants}{" "}
                Travelers
              </h2>
              <h4 className="text-[#616060] text-base line-clamp-1">
                {passengers?.travelClass}
              </h4>
            </div>
          </Dropdown>
        </div>
        <div
          className={` ${
            tripType !== "multiCity" && "hidden"
          } space-y-[21.79px] `}
        >
          {/* row 1  */}
          <div className=" grid grid-cols-4    gap-[21.79px]">
            <Dropdown
              popupRender={() => (
                <AirportSearchDropdown onSelect={handleSelectFrom} />
              )}
              trigger={["click"]}
            >
              <div
                style={{
                  borderRadius: " 7.07px",
                  border: "0.442px solid var(--ccc, #CCC)",
                  background: "var(--FFFFFF---pure-white, #FFF)",
                  // height: "88.372px",
                }}
                className="px-[17.08px] py-[10.64px] space-y-3  w-full min-w-[198px]"
              >
                <h5 className="text-[#616060] text-[14px]">From</h5>
                <h2 className="text-[#292828] text-[18px] font-bold ">
                  {from[0]?.city || "Select a city"}{" "}
                </h2>
                <p className="text-[#616060] text-[16px]  line-clamp-1">
                  {from[0]?.airport || "Click to choose an airport"}
                </p>
              </div>
            </Dropdown>

            <Dropdown
              // open={isOpen("from")}
              // onOpenChange={(flag) => setOpenDropdownId(flag ? "from" : null)}
              popupRender={() => (
                <AirportSearchDropdown onSelect={handleSelectedTo} />
              )}
              trigger={["click"]}
            >
              <div
                style={{
                  borderRadius: " 7.07px",
                  border: "0.442px solid var(--ccc, #CCC)",
                  background: "var(--FFFFFF---pure-white, #FFF)",
                  // height: "88.372px",
                }}
                className="px-[17.08px] py-[10.64px] space-y-3  w-full min-w-[198px]"
              >
                <h5 className="text-[#616060] text-sm">To</h5>
                <h2 className="text-[#292828] text-[18px] font-bold ">
                  {to[0]?.city || "Select a city"}{" "}
                </h2>
                <p className="text-[#616060] text-base  line-clamp-1">
                  {to[0]?.airport || "Click to choose an airport"}
                </p>
              </div>
            </Dropdown>
            <button
              style={{
                border: "0.442px solid var(--ccc, #CCC)",
                background: "var(--FFFFFF---pure-white, #FFF)",
                height: "100%",
              }}
              className="px-[17.08px] text-start relative space flex justify-between flex-col py-[10.64px] w-full min-w-[179.294px] rounded-s-[7.07px] "
            >
              <h5 className="text-[#616060] text-sm">Journey Date</h5>
              {/* <h2 className="text-[#292828] text-[18px] font-bold ">
                24 May, 2025
              </h2> */}
              <DatePicker
                // open={open}
                format="DD MMM, YYYY"
                defaultValue={journeyDates[0]?.date}
                value={journeyDates[0]?.date}
                onChange={(date) => {
                  if (date) {
                    handleJourneyDateChange(1, date);
                  }
                }}
                renderExtraFooter={() => null}
                suffixIcon={null}
                style={{ border: "none", padding: 0 }}
                className="font-bold "
                disabledDate={(current) => {
                  return current && current < dayjs().startOf("day");
                }}
              />
              <h4 className="text-[#616060] text-base line-clamp-1">
                {/* Saturday */}
                {journeyDates[0].date
                  ? journeyDates[0]?.date.format("dddd")
                  : ""}
              </h4>
            </button>

            <Dropdown
              popupRender={() => (
                <PassengerSelector
                  setPassengers={setPassengers}
                  passengers={passengers}
                />
              )}
              trigger={["click"]}
              className=""
            >
              <div
                style={{
                  borderRadius: " 7.07px",
                  border: "0.442px solid var(--ccc, #CCC)",
                  background: "var(--FFFFFF---pure-white, #FFF)",
                  // height: " 88.372px",
                }}
                className="px-[17.08px] py-[10.64px] space-y-3  min-w-[197.437px] "
              >
                <h5 className="text-[#616060] text-sm">Traveler, Class</h5>
                <h2 className="text-[#292828] text-[18px] font-bold ">
                  {/* 1 Travelers{" "} */}
                  {passengers?.adults +
                    passengers?.children +
                    passengers?.infants}{" "}
                  Travelers
                </h2>
                <h4 className="text-[#616060] text-base line-clamp-1">
                  {passengers?.travelClass}
                </h4>
              </div>
            </Dropdown>
          </div>

          {Array?.from({ length: multicityRowLength }).map((_, index) => {
            const isFirstIndex = index === 0;

            const isLastIndex = index === multicityRowLength - 1;
            const startingIndex = index + 2;
            const fromValue = from[index + 1];
            const toValue = to[index + 1];
            const journeyDateValue = journeyDates[index + 1];
            const lastJourneyDate = journeyDates[index];

            return (
              <div key={index} className="grid grid-cols-4 gap-[21.79px]">
                <Dropdown
                  // onOpenChange={(flag) => console.log("ata flag--------", flag)}
                  popupRender={() => (
                    <AirportSearchDropdown
                      onSelect={handleSelectFrom}
                      trackingId={index + 2}
                    />
                  )}
                  trigger={["click"]}
                >
                  <div
                    style={{
                      borderRadius: " 7.07px",
                      border: "0.442px solid var(--ccc, #CCC)",
                      background: "var(--FFFFFF---pure-white, #FFF)",
                      // height: "88.372px",
                    }}
                    className="px-[17.08px] py-[10.64px] space-y-3  w-full min-w-[198px]"
                  >
                    <h5 className="text-[#616060] text-[14px]">From</h5>
                    <h2 className="text-[#292828] text-[18px] font-bold ">
                      {fromValue?.city ? fromValue.city : "Select a city"}
                    </h2>
                    <p className="text-[#616060] text-[16px]  line-clamp-1">
                      {fromValue?.airport
                        ? fromValue.airport
                        : "Click to choose an airport"}
                    </p>
                  </div>
                </Dropdown>

                <Dropdown
                  // open={isOpen("from")}
                  // onOpenChange={(flag) => setOpenDropdownId(flag ? "from" : null)}
                  popupRender={() => (
                    <AirportSearchDropdown
                      onSelect={handleSelectedTo}
                      trackingId={index + 2}
                    />
                  )}
                  trigger={["click"]}
                >
                  <div
                    style={{
                      borderRadius: " 7.07px",
                      border: "0.442px solid var(--ccc, #CCC)",
                      background: "var(--FFFFFF---pure-white, #FFF)",
                      // height: "88.372px",
                    }}
                    className="px-[17.08px] py-[10.64px] space-y-3  w-full min-w-[198px]"
                  >
                    <h5 className="text-[#616060] text-sm">To</h5>
                    <h2 className="text-[#292828] text-[18px] font-bold ">
                      {toValue?.city ? toValue.city : "Select a city"}
                    </h2>
                    <p className="text-[#616060] text-base  line-clamp-1">
                      {toValue?.airport
                        ? toValue.airport
                        : "Click to choose an airport"}
                    </p>
                  </div>
                </Dropdown>
                <button
                  style={{
                    border: "0.442px solid var(--ccc, #CCC)",
                    background: "var(--FFFFFF---pure-white, #FFF)",
                    height: "100%",
                  }}
                  className="px-[17.08px] text-start relative space flex justify-between flex-col py-[10.64px] w-full min-w-[179.294px] rounded-s-[7.07px] "
                >
                  <h5 className="text-[#616060] text-sm">Journey Date</h5>
                  <DatePicker
                    // open={open}
                    format="DD MMM, YYYY"
                    defaultValue={journeyDateValue?.date}
                    value={journeyDateValue?.date}
                    onChange={(date) => {
                      if (date) {
                        handleJourneyDateChange(startingIndex, date);
                      }
                    }}
                    renderExtraFooter={() => null}
                    suffixIcon={null}
                    style={{ border: "none", padding: 0 }}
                    className="font-bold "
                    disabledDate={(current) => {
                      const baseDate =
                        lastJourneyDate?.date?.startOf("day") ||
                        dayjs().startOf("day");
                      return current && current < baseDate;
                    }}
                  />
                  <h4 className="text-[#616060] text-base line-clamp-1">
                    {/* Saturday */}
                    {journeyDateValue?.date
                      ? journeyDateValue?.date.format("dddd")
                      : ""}
                  </h4>
                </button>

                <div
                  style={{
                    borderRadius: " 7.07px",
                    border: "0.442px solid var(--ccc, #CCC)",
                    background: "var(--FFFFFF---pure-white, #FFF)",
                    // height: " 88.372px",
                  }}
                  className="   min-w-[197.437px] "
                >
                  {isLastIndex ? (
                    <div className="flex items-center w-full h-full text-center">
                      <button
                        disabled={multicityRowLength === 4}
                        onClick={() => {
                          setMulticityRowLength(multicityRowLength + 1);
                        }}
                        className="text-[#292828] disabled:text-[#a1a1aa] basis-[70%] h-full cursor-pointer text-xs font-bold"
                      >
                        Add Another City
                      </button>

                      <button
                        disabled={isFirstIndex}
                        onClick={() => handleRemoveRow(multicityRowLength)}
                        className="basis-[30%] border-l border-[#CCC] h-full cursor-pointer "
                      >
                        <CloseCircleFilled
                          style={{
                            color: isFirstIndex ? "#a1a1aa" : "#292828",
                          }}
                        />
                      </button>
                    </div>
                  ) : (
                    <div className="w-full h-full"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Search Button */}

        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            style={{
              background: "#8B1C1C",
              borderRadius: 8,
              padding: "0 40px",
              height: 45,
              fontSize: 16,
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </Card>
    </div>
  );
}
