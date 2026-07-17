import { useEffect, useRef, useState } from 'react'

export default function Section({ id, className = '', children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.intersectionRatio > 0.35),
      { threshold: [0, 0.35, 0.6, 1] }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`snap-start min-h-screen w-full flex items-center transition-all duration-700 ease-out ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full">{children}</div>
    </section>
  )
}