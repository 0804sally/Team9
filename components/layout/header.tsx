"use client"

import Link from "next/link"
import { Search, ShoppingCart, User, Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green text-white font-bold">
              농
            </div>
            <span className="text-xl font-bold text-brand-green hidden sm:inline-block">
              농장직송
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="산지 직송 신선 식품 검색..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
            />
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-gray-600 hover:text-brand-green transition-colors">
            <Search className="h-5 w-5 md:hidden" />
          </button>
          <Link href="/cart" className="relative p-2 text-gray-600 hover:text-brand-green transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white">
              0
            </span>
          </Link>
          <Link href="/mypage" className="p-2 text-gray-600 hover:text-brand-green transition-colors">
            <User className="h-5 w-5" />
          </Link>
          <button className="p-2 text-gray-600 hover:text-brand-green transition-colors lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
