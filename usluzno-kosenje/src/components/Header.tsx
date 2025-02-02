import { Leaf } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <Leaf className="h-8 w-8 mr-2" />
          <h1 className="text-xl sm:text-2xl font-bold">Usluzno kosenje Lazarevac</h1>
        </div>
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap justify-center sm:space-x-4">
            <li className="w-1/2 sm:w-auto text-center mb-2 sm:mb-0">
              <a href="#about" className="hover:underline block py-1">
                O nama
              </a>
            </li>
            <li className="w-1/2 sm:w-auto text-center mb-2 sm:mb-0">
              <a href="#services" className="hover:underline block py-1">
                Usluge
              </a>
            </li>
            <li className="w-1/2 sm:w-auto text-center mb-2 sm:mb-0">
              <a href="#experience" className="hover:underline block py-1">
                Iskustvo
              </a>
            </li>
            <li className="w-1/2 sm:w-auto text-center">
              <a href="#contact" className="hover:underline block py-1">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}