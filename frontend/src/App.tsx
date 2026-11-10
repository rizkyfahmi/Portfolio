import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { usePortfolio } from '@/hooks/usePortfolio'

export default function App() {
  const { data } = usePortfolio()
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-[#f5f5f7] text-slate-900 selection:bg-slate-200 selection:text-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home data={data} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
