"use client";

import { CloudHail } from "lucide-react";

const Child = () => {
const travelers_child_age = [5, 7]; // Example ages, replace with actual state or props
  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-1 child-container">
        <div className="flex items-center gap-2">
          <span className="pb-3 text-xl text-neutral/70">
            <i className="inline-block align-middle">
              <CloudHail />
            </i>
          </span>
          <div>
            <h6 className="font-medium">Child</h6>
            <p className="text-xs">2-12 Years</p>
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

      {/* children age select */}
      {travelers_child_age?.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mb-2">
          {travelers_child_age.map((age, id) => (
            <select
              key={id}
              className="select select-xs w-full focus:outline-0 font-normal !text-xs rounded"
              defaultValue={age}
            >
              <option value="12">12 Years</option>
              <option value="11">11 Years</option>
              <option value="10">10 Years</option>
              <option value="9">9 Years</option>
              <option value="8">8 Years</option>
              <option value="7">7 Years</option>
              <option value="6">6 Years</option>
              <option value="5">5 Years</option>
              <option value="4">4 Years</option>
              <option value="3">3 Years</option>
              <option value="2">2 Years</option>
            </select>
          ))}
        </div>
      )}
    </>
  );
};

export default Child;
