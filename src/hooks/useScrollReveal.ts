import { useEffect } from 'react'

export function useScrollReveal(): void {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('show'), i * 90)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])
}