"use client";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import dayjs from "dayjs";
import { useState } from "react";

export default function FlightSearch() {
    const [activeTab, setActiveTab] = useState("All");
    const [tripType, setTripType] = useState("round");
    const [from, setFrom] = useState("DAC, Hazrat Shahjalal Intl");
    const [to, setTo] = useState("DXB, Dubai International");
    const [journeyDate, setJourneyDate] = useState(dayjs("2025-05-24"));
    const [returnDate, setReturnDate] = useState(dayjs("2025-05-26"));
    const [traveler, setTraveler] = useState(1);
    const [classType, setClassType] = useState("Economy Class");
    const [airlineCode, setAirlineCode] = useState("");

    // Swap From <-> To
    const handleSwap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    const handleSearch = () => {
        console.log({
            tripType,
            from,
            to,
            journeyDate: journeyDate.format("DD MMM, YYYY"),
            returnDate: returnDate?.format("DD MMM, YYYY"),
            traveler,
            classType,
            airlineCode,
        });
    };

    const tabs = ["All", "Flight", "Hotel", "Tour"];

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
                            className={`py-[16px] px-6 text-sm font-medium flex items-center gap-2 ${activeTab === tab
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
                    <RadioGroup defaultValue="option-one" className="flex gap-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="option-one" />
                            <Label htmlFor="option-one">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-two" />
                            <Label htmlFor="option-two">Option Two</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="flex gap-[21.79px]">
                    <div className="flex items-center gap-[21.79px] relative">
                        <div
                            style={{
                                borderRadius: " 7.07px",
                                border: "0.442px solid var(--ccc, #CCC)",
                                background: "var(--FFFFFF---pure-white, #FFF)",
                              
                            }}
                            className="px-[17.08px] py-[10.64px]  min-w-[198px]"
                        >
                            <h5 className="text-[#616060] text-sm">From</h5>
                            <h2 className="text-[#292828] text-[18px] font-bold ">Dhaka </h2>
                            <h4 className="text-[#616060] text-base line-clamp-1">
                            {from}
                            </h4>
                        </div>
                        {/* Swap Button */}
                        <button
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
                   >
                    icon
                   </button>
                        <div
                            style={{
                                borderRadius: " 7.07px",
                                border: "0.442px solid var(--ccc, #CCC)",
                                background: "var(--FFFFFF---pure-white, #FFF)",
                              
                            }}
                            className="px-[17.08px] py-[10.64px]  min-w-[198px]"
                        >
                            <h5 className="text-[#616060] text-sm">To</h5>
                            <h2 className="text-[#292828] text-[18px] font-bold ">Dhaka </h2>
                            <h4 className="text-[#616060] text-[16px] line-clamp-1">
                             {to}
                            </h4>
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <div
                            style={{

                                border: "0.442px solid var(--ccc, #CCC)",
                                background: "var(--FFFFFF---pure-white, #FFF)",
                              
                            }}
                            className="px-[17.08px] py-[10.64px] min-w-[179.294px] rounded-s-[7.07px] "
                        >
                            <h5 className="text-[#616060] text-sm">Journey Date</h5>
                            <h2 className="text-[#292828] text-[18px] font-bold ">
                                24 May, 2025
                            </h2>
                            <h4 className="text-[#616060] text-base line-clamp-1">
                                Saturday
                            </h4>
                        </div>

                        <div
                            style={{

                                border: "0.442px solid var(--ccc, #CCC)",
                                background: "var(--FFFFFF---pure-white, #FFF)",
                              
                            }}
                            className="px-[17.08px] py-[10.64px] min-w-[179.294px] rounded-r-[7.07px] "
                        >
                            <h5 className="text-[#616060] text-sm">Return Date</h5>
                            <h2 className="text-[#292828] text-[18px] font-bold ">
                                26 May, 2025
                            </h2>
                            <h4 className="text-[#616060] text-base line-clamp-1">
                                Saturday
                            </h4>
                        </div>
                    </div>
                    <div
                        style={{
                            borderRadius: " 7.07px",
                            border: "0.442px solid var(--ccc, #CCC)",
                            background: "var(--FFFFFF---pure-white, #FFF)",
                          
                        }}
                        className="px-[17.08px] py-[10.64px] min-w-[197.437px] "
                    >
                        <h5 className="text-[#616060] text-sm">Traveler, Class</h5>
                        <h2 className="text-[#292828] text-[18px] font-bold ">
                            1 Travelers{" "}
                        </h2>
                        <h4 className="text-[#616060] text-base line-clamp-1">
                            Economy Class
                        </h4>
                    </div>
                </div>

                {/* Search Button */}

                <div style={{ textAlign: "center", marginTop: 24 }}>
                    <button
                        style={{
                            background: "#8B1C1C",
                            borderRadius: 8,
                            padding: "0 40px",
                            height: 45,
                            fontSize: 16,
                            color: "white",
                        }}
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </Card>
        </div>
    );
}
