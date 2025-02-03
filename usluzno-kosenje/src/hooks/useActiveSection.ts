"use client"

import { useState, useEffect } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "services", "experience", "contact"]
      
      // Find the section that is most visible in the viewport
      let maxVisibleSection = ""
      let maxVisibleHeight = 0

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (!element) return

        const rect = element.getBoundingClientRect()
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight
          maxVisibleSection = sectionId
        }
      })

      if (maxVisibleSection) {
        setActiveSection(maxVisibleSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Add a small delay for initial check to ensure all elements are rendered
    setTimeout(handleScroll, 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return activeSection
} 