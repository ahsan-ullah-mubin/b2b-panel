import FlightSearch from "@/components/Home/Search/Search";
import SpecialOffer from "@/components/Home/SpecialOffer/SpecialOffer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <FlightSearch/>
       <SpecialOffer />
      </main>
    </div>
  );
}
