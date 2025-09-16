"use client";

import { useEffect, useRef, useState } from "react";
import Adult from "./Adult";
import Child from "./Child";
import Infants from "./Infants";

const PassengerSelection = () => {
  const [isActive, setIsActive] = useState(false);
  const container = useRef();
  useEffect(() => {
    const checkOutsideClick = (e) => {
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
      className={`relative max-w-[300px] group ${
        isActive ? "active" : ""
      }`}
    >
      <button
        onClick={() => setIsActive(!isActive)}
        type="button"
        className="w-full px-4 py-2 text-xs rounded-xl hover:bg-neutral/10 text-start lg:text-sm"
      >
        Demo
      </button>

      <div
        className="absolute top-full right-0 z-10 w-64 min-w-full py-1 origin-['50%_0'] border rounded-lg mt-0.5 shadow-[0_4px_16px_0_rgba(69,88,115,.2)] max-w-max lists bg-base-200 transition-all scale-90 -translate-y-8 opacity-0 pointer-events-none group-[.active]:pointer-events-auto group-[.active]:scale-100 group-[.active]:translate-y-0 group-[.active]:opacity-100"
        style={{
          transition:
            "all .2s cubic-bezier(.5,0,0,1.25), opacity .15s ease-out",
        }}
      >
        <div className="p-5">
          {/* adult */}
          <Adult />
          <Child />
          {/* infants */}
          <Infants />
        </div>

        <hr className="mb-2" />
        <div className="px-2">
          <button
            onClick={() => {
              setIsActive(false);
            }}
            type="button"
            className="w-full h-10 min-h-0 normal-case rounded-md btn btn-primary"
          >
           Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassengerSelection;
