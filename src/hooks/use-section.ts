'use client'

import { useEffect, useState } from 'react'

interface UseScrollSpyOptions {
  sectionIds: string[]
  rootMargin?: string
  threshold?: number
}

export function useActiveSection({
  sectionIds,
  rootMargin = '-100px 0px -300px 0px',
  threshold = 0.1
}: UseScrollSpyOptions): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '')

  useEffect(() => {
    if (typeof window === 'undefined' || sectionIds.length === 0) {
      return
    }

    // Create an intersection observer
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin, // Adjust margins to control when sections are considered "visible"
      threshold // Trigger when at least 10% of the section is visible
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find sections that are intersecting
      const visibleSections = entries.filter(entry => entry.isIntersecting)

      if (visibleSections.length > 0) {
        // Sort by their position in the viewport (top to bottom)
        visibleSections.sort((a, b) => {
          const rectA = a.boundingClientRect
          const rectB = b.boundingClientRect
          return rectA.top - rectB.top
        })

        // Set the active section to the first visible one
        setActiveSection(visibleSections[0].target.id)
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    // Cleanup function
    return () => {
      observer.disconnect()
    }
  }, [sectionIds, rootMargin, threshold])

  return activeSection
}
