import { Bell, DollarSign, Search, User } from "lucide-react";
export function NavBar() {
  return (
    <div style={{ height: '64px' }} >
      <div style={{ padding: "12px 24px", width: "100%", background: "#353535" }}>
        <div className='flex justify-between items-center w-full h-full'>
          {/* Search */}
          <div className='bg-[#FAFAFA40] rounded-lg px-4 py-3 flex items-center gap-2 h-full flex-1 max-w-md'>
            <Search className='text-white' />
            <input type="text" placeholder='Search...' className='bg-transparent border-none outline-none text-white placeholder:text-white' />
          </div>

          {/* Balance */}
          <div className='bg-white rounded-lg px-3 py-2 text-center text-sm font-normal text-[#292828]'>
            <h1>Current Balance (USD)</h1>
          </div>

          {/* menu */}
          <div className='flex gap-5 items-center'>
            <div className='p-2 bg-white rounded-full text-[#616060]'>
              <User />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="24" viewBox="0 0 2 24" fill="none">
              <path d="M1 0V24" stroke="white" />
            </svg>
            <div className='p-2 bg-white rounded-full text-[#616060]'>
              <DollarSign />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="24" viewBox="0 0 2 24" fill="none">
              <path d="M1 0V24" stroke="white" />
            </svg>
            <div className='p-2 bg-white rounded-full text-[#616060] relative'>
              <Bell />
              <div className='absolute -top-3 right-2'>
                <span className='text-[10px] font-bold  text-white  p-1 bg-[#8E191C] rounded-full'>12</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="24" viewBox="0 0 2 24" fill="none">
              <path d="M1 0V24" stroke="white" />
            </svg>
            {/* User */}
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-2">
                <div className='relative'>
                  <img src="/user.png" alt="" />
                  <div className='absolute -bottom-1 -right-1 p-[2px] bg-white rounded-full'>
                    <p className='size-[8px] bg-[#14CB74] rounded-full'></p>
                  </div>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Bryan Adams</div>
                  <div className="text-white text-xs">Manager</div>
                </div>
              </div>
              <button className='pt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5893 0.910825C11.2639 0.585389 10.7363 0.585389 10.4108 0.910825L6.00008 5.32157L1.58934 0.910825C1.2639 0.585389 0.736263 0.585389 0.410826 0.910825C0.0853887 1.23626 0.0853887 1.7639 0.410826 2.08934L5.70545 7.38397C5.86817 7.54668 6.13199 7.54668 6.29471 7.38397L11.5893 2.08934C11.9148 1.7639 11.9148 1.23626 11.5893 0.910825Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
