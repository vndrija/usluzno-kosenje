export default function Services() {
  const services = [
    {
      title: "Kosenje trave trimerom",
      price: "800rsd/ar",
      description: "Profesionalno košenje trave trimerom za teško pristupačna mesta i strme terene.",
    },
    {
      title: "Kosenje trave kosacicom",
      price: "600rsd/ar",
      description: "Održavanje travnjaka profesionalnom opremom za najbolje rezultate.",
    },
    {
      title: "Kosenje trave sa skupljanjem trave",
      price: "800rsd/ar",
      description: "Temeljno košenje sa kompletnim čišćenjem i odnošenjem pokošene trave.",
    },
    {
      title: "Izbacivanje trave iz dvorista dzakovima 160L",
      price: "350rsd/dzak",
      description: "Temeljno košenje sa kompletnim čišćenjem i odnošenjem pokošene trave.",
    },
  ]

  return (
    <section id="services" className="bg-green-100 py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-green-800 drop-shadow-md">Nase Usluge</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-600 drop-shadow-sm">{service.title}</h3>
              <h5 className="text-lg sm:text-xl font-semibold mb-4 text-green-600">{service.price}</h5>
              <p className="text-sm sm:text-base text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}