import React from 'react';

export function Cart({ setPage }: { setPage: (p: string) => void }) {
  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-16 py-10 lg:py-20 w-full flex-grow">
      <h1 className="text-5xl md:text-[80px] font-display font-black uppercase mb-10 tracking-tighter">
        YOUR STUFF.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-6">
          {[
            { tag: "LIMITED EDITION", title: "HYPER CRUNCH MIX", weight: "500g", type: "Mixed Nuts", price: "$25.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlcL4FHaYhQz32BrFBAODank9bpJRQ-47ICiUsTpXYQQevddE0fZ0ZjpZVtgp5Q1Tls7u_8JFNFiOTzQBWFB6ZIN9N--DmhYFG6hDunOqaZj8mBTJvxFjxhgs9alDcp5pbSPt-baXQNG-b94SOqRK2AjCz5UJD64BghompG9IDuONNGQ1aWUBmNpmDMBjC2MI_AZPPseimIoV51SPnSfuxIBclPCkEQP7QhhC6zucuuAbBhkhoeOsKUGDctCZa1a3-ifOXU0Wzxn0", qty: 1 },
            { tag: null, title: "NEO-PISTACHIOS", weight: "250g", type: "Premium", price: "$28.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxGt0vFb4Pq0HtLKAFQZ9NbXBd2XG_cnrpbBKG5RXD1833bm17hiYW4ore2cONOSPAbGyW8PUA7Qxj4FbJHW7Jip1RlCDiEWstClVk1Br9d6t_mPrL_aApw9ag4xJcDke4fMZ6xBEuyPyYSnScur8ote5ZB2-6rTghd4zqyJ5O6AZzUEyuxIHkw5UXFW90rK3R31V2aAI3Y8_FdSX4hETTE_v6DKWbKukxMuN4a831qBUUg-p1Qh6a3nlNEXa-dJsry4bvsXm37HU", qty: 2 }
          ].map((item, i) => (
            <div key={i} className="bg-[#ffffff] neo-border flex flex-col md:flex-row neo-shadow transition-all group">
              <div className="w-full md:w-[240px] h-[240px] md:h-auto neo-border-b md:border-b-0 md:border-r-4 border-[#1a1c1c] bg-[#e2e2e2] flex-shrink-0 relative overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex flex-col md:flex-row flex-grow">
                <div className="p-6 flex-grow flex flex-col justify-center">
                  {item.tag && <div className="bg-secondary-fixed border-2 border-black inline-block px-2 py-1 text-sm font-body font-bold uppercase w-max mb-2">{item.tag}</div>}
                  <h2 className="text-2xl font-display font-black uppercase mb-1">{item.title}</h2>
                  <p className="text-base font-body text-[#4e4356] mb-4">Weight: {item.weight} / Type: {item.type}</p>
                  <div className="text-2xl font-display font-black">{item.price}</div>
                </div>
                <div className="border-t-4 md:border-t-0 md:border-l-4 border-[#1a1c1c] bg-[#eeeeee] p-6 flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 min-w-[160px]">
                  <div className="flex items-center neo-border bg-white">
                    <button className="w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border-r-4 border-black font-black text-xl active:bg-secondary-fixed active:text-black">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 700" }}>remove</span>
                    </button>
                    <div className="w-12 h-10 flex items-center justify-center font-display font-black">{item.qty}</div>
                    <button className="w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border-l-4 border-black font-black text-xl active:bg-secondary-fixed active:text-black">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 700" }}>add</span>
                    </button>
                  </div>
                  <button className="flex items-center gap-2 text-[#ba1a1a] font-body font-bold text-sm uppercase hover:bg-[#ba1a1a] hover:text-white border-2 border-transparent hover:border-black transition-colors px-3 py-2">
                    <span className="material-symbols-outlined">delete</span>
                    <span>Drop It</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 mt-10 lg:mt-0 lg:sticky lg:top-[120px]">
          <div className="bg-primary text-on-primary neo-border p-10 neo-shadow flex flex-col gap-6">
            <h3 className="text-3xl font-display font-black uppercase neo-border-b pb-4">FUEL SUMMARY</h3>
            <div className="flex flex-col gap-4 text-xl font-body">
              <div className="flex justify-between items-center"><span>Subtotal</span><span className="font-black">$81.00</span></div>
              <div className="flex justify-between items-center"><span>Shipping</span><span className="font-black text-secondary-fixed uppercase">Free!</span></div>
              <div className="flex justify-between items-center"><span>Taxes</span><span className="font-black">Calculated next</span></div>
            </div>
            <div className="border-t-4 border-black pt-6 flex justify-between items-end">
              <span className="text-2xl font-display font-bold uppercase">Total</span>
              <span className="text-5xl font-display font-black tracking-tighter leading-none">$81.00</span>
            </div>
            <button onClick={() => setPage('checkout')} className="mt-4 w-full bg-secondary-fixed text-[#1a1c1c] neo-border py-4 px-6 font-display font-black text-lg uppercase neo-shadow hover:bg-[#c1f100] transition-colors neo-interactive flex justify-center items-center gap-2">
              <span>Proceed to Checkout</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 700" }}>arrow_forward</span>
            </button>
            <div className="text-center text-sm font-body font-bold uppercase mt-2 opacity-80">
              Secure Checkout / No Regrets
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
