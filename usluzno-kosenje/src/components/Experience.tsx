import Image from "next/image"

export default function Experience() {
  const images = [
    {
      src: "/before-and-after-lawn-maintenance.jpg",
      alt: "Before and after lawn maintenance"
    },
    {
      src: "/professional-lawn-maintenance.jpg",
      alt: "Professional lawn maintenance"
    },
    {
      src: "/before-and-after-lawn-service.jpg",
      alt: "Before and after lawn service"
    }
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-green-800">Iskustvo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              width={1000}
              height={800}
              alt={image.alt}
              className="rounded-lg shadow-lg w-full h-[250px] object-cover"
            />
          ))}
        </div>
        <p className="text-center mt-8 text-base sm:text-lg text-gray-700">
          Sa više godina iskustva, ulepšali smo bezbroj travnjaka u našoj zajednici. Naš portfolio prikazuje kvalitet
          i pažnju koju ulažemo u svaki projekat.
        </p>
      </div>
    </section>
  )
}