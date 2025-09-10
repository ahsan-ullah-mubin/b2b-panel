"use client";

import { useEffect, useRef, useState } from "react";
import AirportAutoSuggestion from "./AirportAutoSuggestion";

const DestinationInput = ({ label, fieldName, value }: {label: string, fieldName: string, value: string}) => {
  const [isActive, setIsActive] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const checkOutsideClick = (e: any) => {
      if (container.current && !container.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", checkOutsideClick);

    return () => {
      document.removeEventListener("click", checkOutsideClick);
    };
  }, []);

  return (

    <div
      ref={container}
      className={`sb-input-container group ${isActive ? "active" : ""}`}
    >
      <label className="sb-label">{label}</label>
      <input
        autoComplete="off"
        onClick={() => setIsActive(true)}
        type="text"
        className="sb-input"
        value={value}
        readOnly
      />
     <AirportAutoSuggestion />
    </div>
  );
};

export default DestinationInput;
