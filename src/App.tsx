import { Suspense, lazy, useLayoutEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Menu } from './components/Menu'
import { scrollToTop, useSmoothScroll } from './motion/motion'
import { Home } from './pages/Home'

// Only the home page ships in the first download; the rest load when visited.
const FigurePage = lazy(() => import('./pages/FigurePage').then((m) => ({ default: m.FigurePage })))
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Credits = lazy(() => import('./pages/Credits').then((m) => ({ default: m.Credits })))

function App() {
  const { pathname } = useLocation()
  useSmoothScroll()
  useLayoutEffect(scrollToTop, [pathname])

  return (
    <>
      <Menu />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/figures/:slug" element={<FigurePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
