'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let animFrame: number
    const raf = (time: number) => {
      lenis.raf(time)
      animFrame = requestAnimationFrame(raf)
    }
    animFrame = requestAnimationFrame(raf)

    const stop = () => lenis.stop()
    const start = () => lenis.start()
    window.addEventListener('modal-open', stop)
    window.addEventListener('modal-close', start)

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('modal-open', stop)
      window.removeEventListener('modal-close', start)
      lenis.destroy()
    }
  }, [])

  return null
}
