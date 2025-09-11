export type FlightSearchFormNToType = {
  id:number
  city: string;
  country: string;
  airport: string;
  code: string;
};

export interface Passengers {
  adults: number;
  children: number;
  childAges: (number | undefined)[];
  infants: number;
  travelClass: "Economy" | "Business" | string;
}