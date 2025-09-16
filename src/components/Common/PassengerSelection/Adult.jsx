"use client";

import { User } from "lucide-react";

const Adult = () => {
  return (
    <div className="flex items-center justify-between gap-4 mb-2">
      <div className="flex items-center gap-2">
        <span className="text text-neutral/70">
          <i className="inline-block alight-middle">
            <User />
          </i>
        </span>
        <div>
          <h6 className="font-medium">Adults</h6>
          <p className="text-[10px] text-neutral leading-3">
            &gt;12 Years
          </p>
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
  );
};

export default Adult;
