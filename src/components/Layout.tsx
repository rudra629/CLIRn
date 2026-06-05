import React from 'react';

export function Navigation({ page, setPage }: { page: string, setPage: (p: string) => void }) {
  return (
    <nav className="bg-surface border-b-4 border-black shadow-[8px_8px_0px_0px_#1a1c1c] flex justify-between items-center w-full px-4 md:px-16 py-4 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <button onClick={() => setPage('home')} className="text-2xl font-display font-black italic tracking-tighter text-on-surface uppercase hover:text-secondary-fixed transition-colors duration-100">
          BOLT_STORE
        </button>
        <div className="hidden md:flex gap-6">
          <button onClick={() => setPage('home')} className={`font-bold uppercase px-2 py-1 transition-colors duration-100 ${page === 'home' ? 'text-primary font-black underline decoration-4 underline-offset-8' : 'text-on-surface hover:bg-secondary-fixed hover:text-on-secondary-fixed'}`}>Home</button>
          <button onClick={() => setPage('shop')} className={`font-bold uppercase px-2 py-1 transition-colors duration-100 ${page === 'shop' || page === 'product' ? 'text-primary font-black underline decoration-4 underline-offset-8' : 'text-on-surface hover:bg-secondary-fixed hover:text-on-secondary-fixed'}`}>Shop</button>
          <button onClick={() => setPage('cart')} className={`font-bold uppercase px-2 py-1 transition-colors duration-100 ${page === 'cart' ? 'text-primary font-black underline decoration-4 underline-offset-8' : 'text-on-surface hover:bg-secondary-fixed hover:text-on-secondary-fixed'}`}>Cart</button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {(page === 'shop' || page === 'product') && (
          <div className="hidden md:flex relative">
            <input type="text" placeholder="SEARCH..." className="bg-surface neo-border px-4 py-2 font-body font-bold text-sm focus:outline-none focus:ring-4 focus:ring-secondary-fixed placeholder:text-on-surface-variant w-48 transition-all" />
            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface pointer-events-none">search</span>
          </div>
        )}
        <button onClick={() => setPage('checkout')} className="bg-primary text-on-primary neo-border neo-shadow-sm neo-interactive-sm px-4 py-2 font-display font-bold uppercase hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors duration-100 flex items-center gap-2">
          <span>Checkout</span>
          <span className="material-symbols-outlined hidden sm:inline" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
        </button>
        {/* Mobile menu trigger */}
        <button className="md:hidden border-4 border-black p-1 active:translate-x-1 active:translate-y-1 bg-surface">
          <span className="material-symbols-outlined block text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-inverse-surface text-secondary-fixed border-t-4 border-black flex flex-col gap-10 w-full px-4 md:px-16 py-10 mt-auto">
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
