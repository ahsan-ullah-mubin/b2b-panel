"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"

type SidebarItem = {
  title: string
  url: string
  icon?: React.ElementType
  items?: SidebarItem[]
}

interface SidebarProps {
  data: SidebarItem[]
}

export default function NavMenu({ data }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="w-60 p-4">
      {data.map((item) => {
        const isActive =
          pathname === item.url ||
          item.items?.some((sub) => pathname === sub.url)
        if (item.items) {
          return (
            <Collapsible key={item.title} defaultOpen={isActive}>
              <CollapsibleTrigger asChild>
                <div
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium hover:bg-white hover:text-[#8E191C]",
                    isActive && "!bg-white text-[#8E191C]"
                  )}
                >
                  <div className={cn("flex items-center gap-2 !bg-none", isActive && "!bg-white text-[#8E191C]")}>
                    {item.icon && <item.icon className={cn("h-4 w-4 !text-white !bg-none", isActive && "!bg-white !text-[#8E191C]")} />}
                    {item.title}
                  </div>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isActive && "rotate-90 !bg-white !text-[#8E191C]"
                    )}
                  />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="ml-6 mt-1 space-y-1">
                  {item.items.map((sub) => {
                    const isSubActive = pathname === sub.url
                    return (
                      <Link
                        key={sub.title}
                        href={sub.url}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm hover:bg-white hover:text-[#8E191C]",
                          isSubActive && "!bg-white text-[#8E191C]"
                        )}
                      >
                        {sub.title}
                      </Link>
                    )
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )
        }

        return (
          <Link
            key={item.title}
            href={item.url}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-white hover:text-[#8E191C]",
              isActive && "!bg-white text-[#8E191C]"
            )}
          >
            {item.icon && <item.icon className={cn("h-4 w-4 !text-white !bg-none", isActive && "!bg-white !text-[#8E191C]")} />}
            {item.title}
          </Link>
        )
      })}
    </div>

  )
}
