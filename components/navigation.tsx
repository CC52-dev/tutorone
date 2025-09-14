"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/subjects", label: "SUBJECTS" },
  { href: "/tutors", label: "TUTORS" },
  { href: "/book", label: "BOOK" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "CONTACT" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="border-b-4 border-black bg-white sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold tracking-wider hover:bg-black hover:text-white px-2 py-1 transition-colors"
        >
          [TUTORONE]
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-4 xl:space-x-8 text-base xl:text-lg">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:bg-black hover:text-white px-2 xl:px-3 py-1 transition-colors duration-100 ${
                pathname === item.href ? "bg-black text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:flex lg:hidden space-x-2 text-sm">
          {navItems.slice(1, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:bg-black hover:text-white px-2 py-1 transition-colors duration-100 ${
                pathname === item.href ? "bg-black text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-black text-white hover:bg-gray-800 px-3 sm:px-4 py-2 font-bold tracking-wider border-2 sm:border-4 border-black rounded-none text-sm sm:text-base"
          >
            {isOpen ? "[CLOSE]" : "[MENU]"}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-black px-4 sm:px-6 py-4">
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-col sm:space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-base sm:text-lg font-bold hover:bg-black hover:text-white px-3 py-2 transition-colors text-center sm:text-left ${
                  pathname === item.href ? "bg-black text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
