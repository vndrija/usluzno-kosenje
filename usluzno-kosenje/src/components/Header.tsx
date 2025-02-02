import { Leaf } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-green-600 text-white p-3 sm:p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <Leaf className="h-6 w-6 sm:h-8 sm:w-8 mr-2" />
          <h1 className="text-lg sm:text-2xl font-bold">Usluzno kosenje Lazarevac</h1>
        </div>
        <nav className="w-full sm:w-auto">
          <ul className="flex justify-center space-x-3 sm:space-x-4 text-xs sm:text-base">
            <li>
              <a href="#about" className="hover:underline whitespace-nowrap py-1">
                O nama
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline whitespace-nowrap py-1">
                Usluge
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:underline whitespace-nowrap py-1">
                Iskustvo
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline whitespace-nowrap py-1">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}