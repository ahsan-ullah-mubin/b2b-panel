
import { AppSidebar } from "@/components/AppSidebar"
import FlightBooking from "@/components/Common/FlightBooking/FlightBooking"
import { NavBar } from "@/components/Common/Navbar/Navbar"
import SpecialOffer from "@/components/SpecialOffer/SpecialOffer"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-x-hidden">
        <NavBar />
        <div className="px-6 py-4">
          <FlightBooking />
          <SpecialOffer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
