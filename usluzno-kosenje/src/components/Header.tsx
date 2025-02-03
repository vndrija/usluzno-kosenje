"use client"

import { Leaf } from "lucide-react"
import { useActiveSection } from "@/hooks/useActiveSection"

export default function Header() {
  const activeSection = useActiveSection()

  const navItems = [
    { href: "#about", label: "O nama" },
    { href: "#services", label: "Usluge" },
    { href: "#experience", label: "Iskustvo" },
    { href: "#contact", label: "Kontakt" },
  ]

  return (
    <header className="bg-green-600 text-white p-3 sm:p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <Leaf className="h-6 w-6 sm:h-8 sm:w-8 mr-2" />
          <h1 className="text-lg sm:text-2xl font-bold">Uslužno košenje Lazarevac</h1>
        </div>
        <nav className="w-full sm:w-auto">
          <ul className="flex justify-center space-x-3 sm:space-x-4 text-xs sm:text-base">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`hover:underline whitespace-nowrap py-1 px-2 rounded transition-colors relative ${
                    activeSection === item.href.slice(1)
                      ? "bg-green-700/50"
                      : "hover:bg-green-700/30"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}