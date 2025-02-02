import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-green-800">O nama</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/about-us.jpg"
              width={400}
              height={300}
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto"

            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              Uslužno košenje Lazarevac već par godina pruža vrhunsku negu travnjaka našoj zajednici. Moje ime je
              Nikola i posvećen sam tome da vaš travnjak bude zdrav, zelen i prelep tokom cele godine.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Ponosimo se pažnjom na detalje i posvećenošću zadovoljstvu naših klijenata. Kada izaberete Uslužno
              košenje Lazarevac, ne dobijate samo uslugu, već i partnera u nezi travnjaka koji zaista brine o zdravlju
              i izgledu vašeg dvorišta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}