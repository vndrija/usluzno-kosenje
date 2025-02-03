"use client"

import Image from "next/image"
import { Suspense, useState } from "react"
import ImageSkeleton from "./ImageSkeleton"
import ImageModal from "./ImageModal"
import { MousePointerClick } from "lucide-react"

export default function Experience() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

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

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length))
  }

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    )
  }

  return (
    <section id="experience" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-green-800 drop-shadow-md">Iskustvo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <Suspense key={index} fallback={<ImageSkeleton className="w-full h-[350px]" />}>
              <div 
                onClick={() => setSelectedImageIndex(index)}
                className="cursor-pointer relative group"
              >
                <Image
                  src={image.src}
                  width={1000}
                  height={800}
                  alt={image.alt}
                  className="rounded-lg shadow-lg w-full h-[350px] object-cover border-4 border-green-600 hover:border-green-500 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center text-white">
                  <MousePointerClick className="w-8 h-8 mb-2" />
                  <span className="text-lg font-semibold">Otvori sliku</span>
                </div>
              </div>
            </Suspense>
          ))}
        </div>
        <p className="text-center mt-8 text-base sm:text-lg text-gray-700">
          Sa više godina iskustva, ulepšali smo bezbroj travnjaka u našoj zajednici. Naš portfolio prikazuje kvalitet
          i pažnju koju ulažemo u svaki projekat.
        </p>
      </div>

      {selectedImageIndex !== null && (
        <ImageModal
          images={images}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </section>
  )
}