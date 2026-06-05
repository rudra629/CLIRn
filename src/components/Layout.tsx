import React, { useState } from 'react';

export function Navigation({ page, setPage }: { page: string, setPage: (p: string) => void }) {
  // Add state to control the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to change page and close mobile menu
  const handlePageChange = (newPage: string) => {
    setPage(newPage);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="bg-surface border-b-4 border-black shadow-[8px_8px_0px_0px_#1a1c1c] flex justify-between items-center w-full px-4 md:px-16 py-4 relative z-50 bg-white">
        <div className="flex items-center gap-8">
          <button onClick={() => handlePageChange('home')} className="text-2xl font-display font-black italic tracking-tighter text-on-surface uppercase hover:text-secondary-fixed transition-colors duration-100">
            BOLT_STORE
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <button onClick={() => handlePageChange('home')} className={`font-bold uppercase px-2 py-1 transition-colors duration-100 ${page === 'home' ? 'text-primary font-black underline decoration-4 underline-offset-8' : 'text-on-surface hover:bg-secondary-fixed hover:text-on-secondary-fixed'}`}>Home</button>
            <button onClick={() => handlePageChange('shop')} className={`font-bold uppercase px-2 py-1 transition-colors duration-100 ${page === 'shop' || page === 'product' ? 'text-primary font-black underline decoration-4 underline-offset-8' : 'text-on-surface hover:bg-secondary-fixed hover:text-on-secondary-fixed'}`}>Shop</button>
            <button onClick={() => handlePageChange('cart')} className={`font-bold uppercase px-2 py-1 transition-colors duration-100 ${page === 'cart' ? 'text-primary font-black underline decoration-4 underline-offset-8' : 'text-on-surface hover:bg-secondary-fixed hover:text-on-secondary-fixed'}`}>Cart</button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {(page === 'shop' || page === 'product') && (
            <div className="hidden md:flex relative">
              <input type="text" placeholder="SEARCH..." className="bg-surface neo-border px-4 py-2 font-body font-bold text-sm focus:outline-none focus:ring-4 focus:ring-secondary-fixed placeholder:text-on-surface-variant w-48 transition-all" />
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface pointer-events-none">search</span>
            </div>
          )}
          <button onClick={() => handlePageChange('checkout')} className="bg-primary text-on-primary neo-border neo-shadow-sm neo-interactive-sm px-4 py-2 font-display font-bold uppercase hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors duration-100 flex items-center gap-2">
            <span>Checkout</span>
            <span className="material-symbols-outlined hidden sm:inline" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
          </button>
          
          {/* Mobile menu trigger with toggle logic */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden border-4 border-black p-1 active:translate-x-1 active:translate-y-1 bg-surface flex items-center justify-center z-50 relative"
          >
            <span className="material-symbols-outlined block text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu - Animated */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-surface border-b-4 border-black shadow-[8px_8px_0px_0px_#1a1c1c] flex flex-col z-40 transform origin-top transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'scale-y-100 opacity-100' 
            : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <button onClick={() => handlePageChange('home')} className={`text-left font-display font-bold uppercase p-4 border-b-2 border-black transition-colors ${page === 'home' ? 'bg-primary text-on-primary' : 'text-on-surface hover:bg-secondary-fixed hover:text-on-secondary-fixed'}`}>
          Home
        </button>
        <button onClick={() => handlePageChange('shop')} className={`text-left font-display font-bold uppercase p-4 border-b-2 border-black transition-colors ${page === 'shop' || page === 'product' ? 'bg-primary text-on-primary' : 'text-on-surface hover:bg-secondary-fixed hover:text-on-secondary-fixed'}`}>
          Shop
        </button>
        <button onClick={() => handlePageChange('cart')} className={`text-left font-display font-bold uppercase p-4 transition-colors ${page === 'cart' ? 'bg-primary text-on-primary' : 'text-on-surface hover:bg-secondary-fixed hover:text-on-secondary-fixed'}`}>
          Cart
        </button>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-inverse-surface text-secondary-fixed border-t-4 border-black flex flex-col gap-10 w-full px-4 md:px-16 py-10 mt-auto z-10 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <span className="text-4xl md:text-6xl font-display font-black text-secondary-fixed uppercase leading-none">
          BOLT_STORE
        </span>
        <ul className="flex flex-wrap gap-4 md:gap-8">
          {['Privacy', 'Terms', 'Shipping', 'Returns', 'Contact'].map(item => (
            <li key={item}>
              <a href="#" className="text-[#f0f1f1] font-medium uppercase hover:text-primary transition-colors hover:skew-x-2 inline-block">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-1 bg-black"></div>
      <div>
        <p className="text-lg font-body font-bold uppercase tracking-widest text-secondary-fixed">
          © {new Date().getFullYear()} BOLT_STORE. NO REGRETS.
        </p>
      </div>
    </footer>
  );
}