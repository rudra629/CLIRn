import React from 'react';

export function Checkout({ setPage }: { setPage: (p: string) => void }) {
  return (
    <div className="min-h-screen flex flex-col font-body bg-surface text-on-surface">
      <header className="w-full neo-border-b bg-[#ffffff] py-6 px-4 md:px-16 flex justify-center sticky top-0 z-50">
        <button onClick={() => setPage('home')} className="text-3xl md:text-[40px] font-display font-black italic tracking-tighter uppercase hover:text-primary transition-colors">
          BOLT_STORE
        </button>
      </header>

      <main className="flex-grow w-full px-4 md:px-16 py-10 max-w-[1400px] mx-auto">
        <h1 className="text-5xl md:text-[80px] font-display font-black uppercase mb-10 neo-border-b pb-2 inline-block">Secure Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 flex flex-col gap-10">
            <form className="flex flex-col gap-10" onSubmit={e => { e.preventDefault(); alert('Order placed! Welcome to the revolution.'); setPage('home'); }}>
              <section className="bg-[#ffffff] neo-border p-4 md:p-6 neo-shadow">
                <h2 className="text-2xl font-display font-bold uppercase mb-6 flex items-center gap-2">
                  <span className="bg-primary text-on-primary w-8 h-8 flex items-center justify-center font-bold text-base">1</span> Contact Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-body font-bold uppercase">Email Address</label>
                    <input type="email" required className="neo-border bg-[#f9f9f9] p-2 text-base w-full focus:outline-none focus:ring-4 focus:ring-secondary-fixed" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-body font-bold uppercase">Phone Number</label>
                    <input type="tel" required className="neo-border bg-[#f9f9f9] p-2 text-base w-full focus:outline-none focus:ring-4 focus:ring-secondary-fixed" />
                  </div>
                </div>
              </section>

              <section className="bg-[#ffffff] neo-border p-4 md:p-6 neo-shadow">
                <h2 className="text-2xl font-display font-bold uppercase mb-6 flex items-center gap-2">
                  <span className="bg-primary text-on-primary w-8 h-8 flex items-center justify-center font-bold text-base">2</span> Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="text-sm font-body font-bold uppercase">Full Name</label>
                    <input type="text" required className="neo-border bg-[#f9f9f9] p-2 text-base w-full focus:outline-none focus:ring-4 focus:ring-secondary-fixed" />
                  </div>
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="text-sm font-body font-bold uppercase">Street Address</label>
                    <input type="text" required className="neo-border bg-[#f9f9f9] p-2 text-base w-full focus:outline-none focus:ring-4 focus:ring-secondary-fixed" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-body font-bold uppercase">City</label>
                    <input type="text" required className="neo-border bg-[#f9f9f9] p-2 text-base w-full focus:outline-none focus:ring-4 focus:ring-secondary-fixed" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-body font-bold uppercase">Postal Code</label>
                    <input type="text" required className="neo-border bg-[#f9f9f9] p-2 text-base w-full focus:outline-none focus:ring-4 focus:ring-secondary-fixed" />
                  </div>
                </div>
              </section>

              <section className="bg-[#ffffff] neo-border p-4 md:p-6 neo-shadow relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary-fixed rotate-45 neo-border z-0 opacity-50"></div>
                <h2 className="text-2xl font-display font-bold uppercase mb-6 flex items-center gap-2 relative z-10">
                  <span className="bg-primary text-on-primary w-8 h-8 flex items-center justify-center font-bold text-base">3</span> Payment Method
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
                  <div className="flex flex-col gap-1 md:col-span-4">
                    <label className="text-sm font-body font-bold uppercase">Card Number</label>
                    <div className="relative">
                      <input type="text" placeholder="XXXX XXXX XXXX XXXX" required className="neo-border bg-[#f9f9f9] p-2 pl-10 text-base w-full focus:outline-none focus:ring-4 focus:ring-secondary-fixed" />
                      <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2">credit_card</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="text-sm font-body font-bold uppercase">Expiry (MM/YY)</label>
                    <input type="text" placeholder="MM/YY" required className="neo-border bg-[#f9f9f9] p-2 text-base w-full focus:outline-none focus:ring-4 focus:ring-secondary-fixed" />
                  </div>
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="text-sm font-body font-bold uppercase">CVC</label>
                    <input type="text" placeholder="123" required className="neo-border bg-[#f9f9f9] p-2 text-base w-full focus:outline-none focus:ring-4 focus:ring-secondary-fixed" />
                  </div>
                </div>
              </section>
              <button id="submit-checkout" type="submit" className="hidden"></button>
            </form>
          </div>

          <aside className="lg:col-span-4 sticky top-[120px] flex flex-col gap-6">
            <div className="bg-secondary-fixed neo-border p-4 md:p-6 neo-shadow flex flex-col gap-4">
              <h3 className="text-2xl font-display font-bold uppercase neo-border-b pb-2">Order Summary</h3>
              <div className="flex flex-col gap-2 neo-border-b pb-4">
                {[
                  { title: "HYPER CRUNCH MIX", price: "$150", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlcL4FHaYhQz32BrFBAODank9bpJRQ-47ICiUsTpXYQQevddE0fZ0ZjpZVtgp5Q1Tls7u_8JFNFiOTzQBWFB6ZIN9N--DmhYFG6hDunOqaZj8mBTJvxFjxhgs9alDcp5pbSPt-baXQNG-b94SOqRK2AjCz5UJD64BghompG9IDuONNGQ1aWUBmNpmDMBjC2MI_AZPPseimIoV51SPnSfuxIBclPCkEQP7QhhC6zucuuAbBhkhoeOsKUGDctCZa1a3-ifOXU0Wzxn0" },
                  { title: "NEO-PISTACHIOS", price: "$220", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHRcZQ38y17zkKm7tOTWF31qlrz28zWCvsFvPnGWeK-NcrUxzIWjZHbX9dDOZDurCfgWNuC24jzMEL8aZUw0ntY1stV3OHw__3wzOo4RqopXABGBOQk-UgQR58_qt6q_CIsLgO2ldWoJDbBDmoLzJZj5ND2iqLadsP8oM_Hhkp9sAQRQTeciuKJ_YPEpe1fowlh-P3_1jCy_075_xzXq8CgjGR6TVARdDqUrBk52gDjfoatXWSeyTTKlKnY1I0OR0Ibhy1YgMHtSo" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 items-center bg-[#ffffff] border-2 border-black p-1">
                    <div className="w-16 h-16 border-r-2 border-black bg-[#e2e2e2] shrink-0 flex items-center justify-center overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex-grow flex flex-col overflow-hidden">
                      <span className="text-sm font-body font-bold uppercase leading-tight truncate">{item.title}</span>
                      <span className="text-base font-body">Qty: 1</span>
                    </div>
                    <div className="text-xl font-display font-bold pr-2">{item.price}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1 text-xl font-body font-bold uppercase">
                <div className="flex justify-between"><span>Subtotal</span><span>$370.00</span></div>
                <div className="flex justify-between"><span>Shipping</span><span className="text-primary">FREE</span></div>
                <div className="flex justify-between"><span>Tax</span><span>$31.45</span></div>
              </div>
              <div className="flex justify-between items-end border-t-4 border-black pt-2 mt-1">
                <span className="text-2xl font-display font-bold uppercase">Total</span>
                <span className="text-5xl font-display font-black leading-none">$401.45</span>
              </div>
            </div>
            <button onClick={() => document.getElementById('submit-checkout')?.click()} className="w-full bg-primary text-on-primary neo-border py-4 px-6 font-display font-bold text-lg uppercase tracking-widest neo-shadow hover:bg-secondary-fixed hover:text-black active:scale-[0.98] transition-all flex justify-center items-center gap-2 group">
              Place Order <span className="material-symbols-outlined font-bold group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <div className="text-center text-sm font-body font-bold text-[#4e4356] flex items-center justify-center gap-1 mt-2">
              <span className="material-symbols-outlined text-[16px]">lock</span> SECURE ENCRYPTED CHECKOUT
            </div>
          </aside>
        </div>
      </main>

      <footer className="w-full border-t-4 border-black bg-[#e2e2e2] py-4 px-16 text-center mt-auto">
        <p className="text-sm font-body font-bold uppercase text-[#4e4356]">© {new Date().getFullYear()} BOLT_STORE. NO REGRETS.</p>
      </footer>
    </div>
  );
}
