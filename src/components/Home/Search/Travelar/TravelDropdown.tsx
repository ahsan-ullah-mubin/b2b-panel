/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Divider, Radio, Select } from "antd";
import { useState } from "react";
import { toast } from "sonner";

const { Option } = Select;

const PassengerSelector = ({
  passengers,
  setPassengers,
}: {
  passengers: any;
  setPassengers: any;
}) => {


  const handleChildAgeChange = (index: number, value: number) => {
    const newAges = [...passengers?.childAges];
    newAges[index] = value;
    // setChildAges(newAges);
    setPassengers((prev: any) => ({
      ...prev,
      childAges: newAges,
    }));
  };

  const handleDone = () => {
    if (
      passengers?.childAges.some(
        (age: any, idx: any) => idx < passengers?.children && age === undefined
      )
    ) {
      toast.error("Please add child age.");
      return;
    }
    console.log("this is the passenger======", passengers);
  };

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
      {/* Adults */}
      <div
        style={{ marginTop: 5, padding: "10px 15px" }}
        className="flex justify-between"
      >
        <div>
          <h3 style={{ margin: 0 }}>Adults</h3>
          <p style={{ fontSize: 12, color: "#888" }}>12 years and above</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="h-[22px] w-[22px] border rounded-full  flex items-center justify-center"
            onClick={() =>
              setPassengers((prev: any) => ({
                ...prev,
                adults: prev.adults - 1,
              }))
            }
            disabled={passengers?.adults === 1}
          >
            <span> -</span>
          </button>
          <span>{passengers?.adults}</span>
          <button
            className="h-[22px] w-[22px] border rounded-full  flex items-center justify-center"
            onClick={() =>
              setPassengers((prev: any) => ({
                ...prev,
                adults: prev.adults + 1,
              }))
            }
            disabled={passengers?.adults === 5}
          >
            +
          </button>
        </div>
      </div>
      <Divider style={{ margin: 0 }} />

      {/* Children */}
      <div style={{ padding: "10px 15px" }}>
        <div className="flex justify-between">
          <div>
            <h3 style={{ margin: 0 }}>Children</h3>
            <p style={{ fontSize: 12, color: "#888" }}>2-11 years</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="h-[22px] w-[22px] border rounded-full  flex items-center justify-center"
              // onClick={() => {
              //   setChildren(Math.max(children - 1, 0));
              //   setChildAges(childAges.slice(0, Math.max(children - 1, 0)));
              // }
              onClick={() =>
                setPassengers((prev: any) => ({
                  ...prev,
                  children: prev.children - 1,
                }))
              }
              disabled={passengers?.children === 0}
            >
              <span> -</span>
            </button>
            <span>{passengers?.children}</span>
            <button
              className="h-[22px] w-[22px] border rounded-full  flex items-center justify-center"
              onClick={() =>
                setPassengers((prev: any) => ({
                  ...prev,
                  children: prev.children + 1,
                }))
              }
              disabled={passengers?.children === 4}
            >
              +
            </button>
          </div>
        </div>

        {/* Child Ages */}
        <div
          style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}
        >
          {Array.from({ length: passengers?.children }).map((_, idx) => (
            <Select
              key={idx}
              placeholder={`Child ${idx + 1} Age`}
              value={passengers?.childAges[idx]}
              style={{ width: 60 }}
              onChange={(value) => handleChildAgeChange(idx, value)}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <Option key={i} value={i + 2}>
                  {i + 2}
                </Option>
              ))}
            </Select>
          ))}
        </div>
      </div>
      <Divider style={{ margin: 0 }} />
      {/* Infants */}
      <div style={{ padding: "10px 15px" }} className="flex justify-between">
        <div>
          <h3 style={{ margin: 0 }}>Infant</h3>
          <p style={{ fontSize: 12, color: "#888" }}>Below 2 years</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="h-[22px] w-[22px] border rounded-full  flex items-center justify-center"
            // onClick={() => setInfants(infants - 1)}
            onClick={() =>
              setPassengers((prev: any) => ({
                ...prev,
                infants: prev.infants - 1,
              }))
            }
            disabled={passengers?.infants === 0}
          >
            <span> -</span>
          </button>
          <span>{passengers?.infants}</span>
          <button
            className="h-[22px] w-[22px] border rounded-full  flex items-center justify-center"
            // onClick={() => setInfants(infants + 1)}
            onClick={() =>
              setPassengers((prev: any) => ({
                ...prev,
                infants: prev.infants + 1,
              }))
            }
            disabled={passengers?.infants == 4}
          >
            +
          </button>
        </div>
      </div>
      <Divider style={{ margin: 0 }} />
      {/* Class */}
      <div style={{ padding: "10px 15px" }}>
        <div>Class</div>
        <Radio.Group
          value={passengers?.travelClass}
          style={{ color: "red", borderColor: "red" }}
          onChange={(e) =>
            setPassengers((prev:any) => ({
              ...prev,
              travelClass: e.target.value, // just update travelClass
            }))
          }
        >
          <Radio defaultChecked value="Economy">
            Economy
          </Radio>
          <Radio value="Business">Business</Radio>
        </Radio.Group>
      </div>

      <div
        style={{ padding: "0 10px 15px 10px" }}
        className="flex justify-end "
      >
        <Button
          style={{ background: "#8E191C" }}
          type="primary"
          onClick={handleDone}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default PassengerSelector;
