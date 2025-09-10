'use client';
import {
  CalendarOutlined,
  DownOutlined,
  SwapOutlined,
  UserOutlined
} from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Dropdown,
  Radio,
  Select
} from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import DestinationInput from './DestinationInput';

export default function FlightBooking() {
  const [tripType, setTripType] = useState('round-trip');
  const [fromLocation, setFromLocation] = useState('DAC');
  const [toLocation, setToLocation] = useState('DXB');
  const [journeyDate, setJourneyDate] = useState(dayjs('2025-05-24'));
  const [returnDate, setReturnDate] = useState(dayjs('2025-05-26'));
  const [passengerCount, setPassengerCount] = useState(1);
  const [cabinClass, setCabinClass] = useState('economy');

  const locations = [
    { value: 'DAC', label: 'Dhaka - DAC, Hazrat Shahjalal International Airport' },
    { value: 'DXB', label: 'Dubai - DXB, Dubai International Airport' },
    { value: 'JFK', label: 'New York - JFK, John F. Kennedy International Airport' },
    { value: 'LHR', label: 'London - LHR, London Heathrow Airport' },
  ];

  const passengerOptions = [
    { value: 1, label: '1 Traveler' },
    { value: 2, label: '2 Travelers' },
    { value: 3, label: '3 Travelers' },
    { value: 4, label: '4 Travelers' },
  ];

  const classOptions = [
    { value: 'economy', label: 'Economy Class' },
    { value: 'premium', label: 'Premium Economy' },
    { value: 'business', label: 'Business Class' },
    { value: 'first', label: 'First Class' },
  ];

  const swapLocations = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  return (
    <div className="min-h-screen bg-[#B36567] py-8 px-4 rounded-2xl  mx-auto">
      <div>
        {/* Navigation Tabs */}
        <div className="flex justify-center -mb-4">
          <div className="bg-white rounded-lg shadow-md p-1 flex">
            {['Flight', 'Hotel', 'Package', 'Visa', 'Unrash'].map((item) => (
              <button
                key={item}
                className={`px-6 py-3 rounded-md font-medium ${item === 'Flight'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* Booking Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 pt-8">
          {/* Trip Type Selector */}
          <Radio.Group
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="mb-6 flex"
          >
            <Radio.Button value="one-way" className="flex-1 text-center py-3">
              One Way
            </Radio.Button>
            <Radio.Button
              value="round-trip"
              className="flex-1 text-center py-3 font-bold"
            >
              Round Trip
            </Radio.Button>
            <Radio.Button value="multi-city" className="flex-1 text-center py-3">
              Multi-City
            </Radio.Button>
          </Radio.Group>
          {/* Location Inputs */}
          <div className="flex items-center gap-4 my-4 justify-center">
            <div className="flex items-center gap-4 relative">
              <div className="flex-1 px-[17px] py-[10px] border rounded-lg border-[#CCC]">
              <DestinationInput fieldName='From' label='afs' value='HLJLKJ LKJ LKj ' />
              </div>

              <button
                onClick={swapLocations}
                className="p-2 rounded-full bg-[#8E191C] size-[39px] absolute left-[160px] text-white"
              >
                <SwapOutlined />
              </button>

              <div className="flex-1 px-[17px] py-[10px] border rounded-lg border-[#CCC]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  From
                </label>
                <h1 className='text-[#292828] font-bold text-lg'>Dhaka</h1>
                <p className='text-[#616060] text-base font-normal'>DAC, Hajrat Shahj...</p>
              </div>
            </div>
            <div className="flex">
              <div className='border pl-[17px] pr-[44px] py-[10px] rounded-s-lg border-[#CCC]'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  From
                </label>
                <h1 className='text-[#292828] font-bold text-lg'>Dhaka</h1>
                <p className='text-[#616060] text-base font-normal'>DAC, Hajrat Shahj...</p>
              </div>
              <div className='border pl-[17px] pr-[44px] rounded-r-lg border-[#CCC]'>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  From
                </label>
                <h1 className='text-[#292828] font-bold text-lg'>Dhaka</h1>
                <p className='text-[#616060] text-base font-normal'>DAC, Hajrat Shahj...</p>
              </div>
            </div>

            <div className="px-[17px] py-[10px] border rounded-lg border-[#CCC]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From
              </label>
              <h1 className='text-[#292828] font-bold text-lg'>Dhaka</h1>
              <p className='text-[#616060] text-base font-normal'>DAC, Hajrat Shahj...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}