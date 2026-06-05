import React, { useState } from 'react';
import { Navigation, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    // Top-level AnimatePresence handles the switch between Main UI and Checkout
    <AnimatePresence mode="wait">
      {page === 'checkout' ? (
        // --- CHECKOUT LAYOUT ---
        // Slides up dramatically from the bottom of the screen
        <motion.div
          key="checkout-layout"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="min-h-screen bg-surface"
        >
          <Checkout setPage={setPage} />
        </motion.div>
      ) : (
        // --- MAIN LAYOUT ---
        // Simply fades out when checkout takes over
        <motion.div
          key="main-layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen flex flex-col font-body text-on-surface bg-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed overflow-x-hidden"
        >
          <Navigation page={page} setPage={setPage} />
          
          <main className="flex-grow flex flex-col items-center w-full relative">
            {/* Inner AnimatePresence handles the page-to-page transitions inside the main layout */}
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                // Cart slides from the right. Home/Shop slide up.
                initial={page === 'cart' ? { opacity: 0, x: 50, y: 0 } : { opacity: 0, x: 0, y: 15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={page === 'cart' ? { opacity: 0, x: 50, y: 0 } : { opacity: 0, x: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full flex-grow flex flex-col items-center"
              >
                {page === 'home' && <Home setPage={setPage} />}
                {page === 'shop' && <Shop setPage={setPage} />}
                {page === 'product' && <Product setPage={setPage} />}
                {page === 'cart' && <Cart setPage={setPage} />}
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}