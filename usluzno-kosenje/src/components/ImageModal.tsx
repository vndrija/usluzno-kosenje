"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface ImageModalProps {
  images: { src: string; alt: string }[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export default function ImageModal({ images, currentIndex, onClose, onNext, onPrevious }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrevious()
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose, onNext, onPrevious])

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      >
        <X className="h-8 w-8" />
      </button>
      
      <button
        onClick={onPrevious}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <div className="relative max-w-[90vw] max-h-[90vh]">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1200}
          height={800}
          className="object-contain max-h-[90vh]"
        />
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  )
} 