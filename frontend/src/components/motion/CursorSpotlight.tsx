import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CursorSpotlight() {
  const [visible, setVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springX = useSpring(cursorX, { stiffness: 350, damping: 28 })
  const springY = useSpring(cursorY, { stiffness: 350, damping: 28 })

  useEffect(() => {
    // Only activate for non-touch fine pointers
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cursorX, cursorY, visible])

  if (!visible) return null

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.14)_0%,rgba(249,115,22,0.06)_40%,transparent_70%)] blur-2xl"
    />
  )
}

