import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3.5px] origin-left bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]"
    />
  )
}

