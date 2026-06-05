import React, { useState } from 'react';
import { Navigation, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';

export default function App() {
  const [page, setPage] = useState('home');

  // Checkout page has a completely isolated layout (per mockups)
  if (page === 'checkout') {
    return <Checkout setPage={setPage} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-body text-on-surface bg-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Navigation page={page} setPage={setPage} />
      <main className="flex-grow flex flex-col items-center">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'shop' && <Shop setPage={setPage} />}
        {page === 'product' && <Product setPage={setPage} />}
        {page === 'cart' && <Cart setPage={setPage} />}
      </main>
      <Footer />
    </div>
  );
}
