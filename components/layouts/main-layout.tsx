"use client"

import * as React from "react"
import { Sidebar } from "../navigation"
import { cn } from "../../lib/utils"

interface MainLayoutProps {
  children: React.ReactNode
  className?: string
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen flex">
      <Sidebar />
      <main className={cn(
        "flex-1 pl-0 lg:pl-64",
        className
      )}>
        <div className="container p-6 mx-auto max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  )
} 