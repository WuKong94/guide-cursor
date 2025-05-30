import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/common/Header/Header';
import { Home } from '@/pages/Home/Home';
import { Cities } from '@/pages/Cities/Cities';
import { Policy } from '@/pages/Policy/Policy';
import { Tours } from '@/pages/Tours/Tours';
import { Contact } from '@/pages/Contact/Contact';
import { CityDetail } from '@/pages/CityDetail/CityDetail';
import { pageVariants, pageTransition } from './utils/animations';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={pageTransition}
                >
                  <Home />
                </motion.div>
              } 
            />
            <Route 
              path="/cities" 
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={pageTransition}
                >
                  <Cities />
                </motion.div>
              } 
            />
            <Route 
              path="/cities/:cityId" 
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={pageTransition}
                >
                  <CityDetail />
                </motion.div>
              } 
            />
            <Route 
              path="/policy" 
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={pageTransition}
                >
                  <Policy />
                </motion.div>
              } 
            />
            <Route 
              path="/tours" 
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={pageTransition}
                >
                  <Tours />
                </motion.div>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                  transition={pageTransition}
                >
                  <Contact />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App; 