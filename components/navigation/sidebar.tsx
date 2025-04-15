"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserButton } from "@clerk/nextjs"
import { 
  LayoutDashboard, 
  Package, 
  Briefcase, 
  Users, 
  Settings,
  Menu,
  X
} from "lucide-react"

import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  
  const navigationItems = [
    { 
      name: "Dashboard", 
      href: "/dashboard", 
      icon: <LayoutDashboard className="h-5 w-5" /> 
    },
    { 
      name: "Inventory", 
      href: "/inventory", 
      icon: <Package className="h-5 w-5" /> 
    },
    { 
      name: "Jobs", 
      href: "/jobs", 
      icon: <Briefcase className="h-5 w-5" /> 
    },
    { 
      name: "Clients", 
      href: "/clients", 
      icon: <Users className="h-5 w-5" /> 
    },
    { 
      name: "Settings", 
      href: "/settings", 
      icon: <Settings className="h-5 w-5" /> 
    },
  ]

  // Mobile sidebar toggle
  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  return (
    <>
      {/* Mobile sidebar toggle button */}
      <Button 
        variant="ghost" 
        className="lg:hidden fixed top-4 left-4 z-50 p-2"
        onClick={toggleSidebar}
      >
        {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transition-transform duration-300 ease-in-out transform",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        className
      )}>
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="p-4 border-b border-border">
            <h2 className="text-xl font-semibold">BAKED</h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-2">
            <ul className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive 
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                      )}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Sidebar footer with user button */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">Account</p>
              <UserButton />
            </div>
          </div>
        </div>
      </aside>
    </>
  )
} 