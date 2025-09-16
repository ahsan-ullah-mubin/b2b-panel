import FlightBooking from "@/components/Common/FlightBooking/FlightBooking";
import SpecialOffer from "@/components/SpecialOffer/SpecialOffer";
import PassengerSelection from "../components/Common/PassengerSelection";

export default function Home() {
  return (
    <>
      <FlightBooking />
      <SpecialOffer />
      <PassengerSelection />
    </>
  );
}
