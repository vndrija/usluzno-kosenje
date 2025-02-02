import { MapPin, Phone, Facebook, Instagram } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="bg-green-600 text-white py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Kontaktirajte nas</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Mozete se javiti na</h3>
            <div className="flex items-center mb-4">
              <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>(+381) 641449845</span>
            </div>
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>Lazarevac, Srbija</span>
            </div>
            <div className="flex items-center mb-4">
              <Facebook className="h-5 w-5 mr-2 flex-shrink-0" />
              <a
                href="https://m.facebook.com/100090498287289/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Usluzno Košenje Lazarevac
              </a>
            </div>
            <div className="flex items-center">
              <Instagram className="h-5 w-5 mr-2 flex-shrink-0" />
              <a
                href="https://www.instagram.com/usluzno__kosenje?igsh=MWJ6OXF4aWU0Z3IwNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Usluzno Košenje Lazarevac
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45573.30546814788!2d20.23495755!3d44.38375305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4750837aaf7e1e99%3A0x4c92f2a1d1e9d2d9!2sLazarevac%2C%20Serbia!5e0!3m2!1sen!2sus!4v1706733116899!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}