import Image from "next/image"
import { Suspense } from "react"
import ImageSkeleton from "./ImageSkeleton"

export default function Experience() {
  const images = [
    {
      src: "/iskustvo_1.jpeg",
      alt: "Experience picture"
    },
    {
      src: "/iskustvo_2.jpeg",
      alt: "Experience picture"
    },
    {
      src: "/iskustvo_3.jpeg",
      alt: "Experience picture"
    },
    {
      src: "/iskustvo_4.jpeg",
      alt: "Experience picture"
    }
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-green-800 drop-shadow-md">Iskustvo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Suspense key={index} fallback={<ImageSkeleton className="w-full h-[350px]" />}>
              <Image
                src={image.src}
                width={1000}
                height={800}
                alt={image.alt}
                className="rounded-lg shadow-lg w-full h-[350px] object-cover border-4 border-green-600 hover:border-green-500 transition-all duration-300 hover:scale-105"
                loading="lazy"
              />
            </Suspense>
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