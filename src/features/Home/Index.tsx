import FlightSearch from '@/components/Home/Search/Search'
import SpecialOffer from '@/components/Home/SpecialOffer/SpecialOffer'
import SearchResult from '@/components/SearchResult/SearchResult'

export default function Home() {
  return (
    <div className='my-12'>
      <FlightSearch />
      <SpecialOffer />
      <SearchResult />
    </div>
  )
}
