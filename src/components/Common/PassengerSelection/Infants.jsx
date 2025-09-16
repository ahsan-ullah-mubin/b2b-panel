"use client";

import { BabyIcon } from "lucide-react";

const Infants = () => {
const travelers_infants_age = [1]; // Example ages, replace with actual state or props
  return (
    <>
      <div className="flex items-center justify-between gap-4 infants-container">
        <div className="flex items-center gap-2">
          <span className="pb-3 text-xl text-neutral/70">
            <i className="fa-solid fa-hands-holding-child"></i>
            <i className="inline-block align-middle">
              <BabyIcon />
            </i>
          </span>
          <div>
            <h6 className="font-medium">Infants</h6>
            <p className="text-xs">&lt;2 Years</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded minusBtn btn btn-xs btn-primary"
          >
            -
          </button>
          <span className="value">12</span>
          <button
            type="button"
            className="rounded plusBtn btn btn-xs btn-primary"
          >
            +
          </button>
        </div>
      </div>

      {/* Infants age select */}
      {travelers_infants_age?.length > 0 && (
        <div className={`grid grid-cols-2 gap-2 mt-1`}>
          {travelers_infants_age.map((age, id) => (
            <select
              key={id}
              className="select select-xs w-full focus:outline-0 font-normal !text-xs rounded"
              defaultValue={age}
            >
              <option value="1">1 Years Old</option>
              <option value="0">Below 1 Year</option>
            </select>
          ))}
        </div>
      )}
    </>
  );
};

export default Infants;
