import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Contact from './pages/Contact'
import { AnimatePresence, motion } from 'framer-motion'

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Page>
                <Home />
              </Page>
            }
          />

          <Route
            path="/cars"
            element={
              <Page>
                <Cars />
              </Page>
            }
          />

          <Route
            path="/contacts"
            element={
              <Page>
                <Contact />
              </Page>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App

