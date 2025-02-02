export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-4 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base mb-1">&copy; 2025 Usluzno Košenje Lazarevac. Sva prava sadrzava.</p>
        <p className="text-xs sm:text-sm text-gray-200">
          Made by{" "}
          <a 
            href="https://www.linkedin.com/in/andrija-matijasevic-b9382825a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline text-white font-medium"
          >
            Vndrija ❤️
          </a>
        </p>
      </div>
    </footer>
  )
}