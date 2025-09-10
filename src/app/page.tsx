import FlightBooking from "@/components/Common/FlightBooking/FlightBooking";
import SpecialOffer from "@/components/SpecialOffer/SpecialOffer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <FlightBooking />
       <SpecialOffer />
      </main>
    </div>
  );
}
