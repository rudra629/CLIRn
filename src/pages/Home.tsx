import React from 'react';

export function Home({ setPage }: { setPage: (p: string) => void }) {
  return (
    <div className="w-full flex flex-col max-w-[1440px]">
      {/* Hero */}
      {/* Added overflow-x-hidden to prevent horizontal scrolling */}
      <header className="w-full px-4 md:px-16 py-16 md:py-32 flex flex-col md:flex-row items-center gap-10 md:gap-8 overflow-x-hidden">
        <div className="flex-1 flex flex-col items-start w-full relative z-10 max-w-full">
          
          {/* Changed base mobile text from text-5xl to text-4xl. 
              Added 'flex flex-col items-start' to force stacking. */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-display font-black uppercase text-on-surface tracking-tighter leading-none relative w-full flex flex-col items-start">
            
            {/* Reduced horizontal padding on mobile to px-3.
                Added max-w-[85vw] on mobile to prevent stretching past screen edges.
                Added break-words and whitespace-normal. */}
            <span className="bg-secondary-fixed text-on-secondary-fixed px-3 sm:px-4 py-2 neo-border max-w-[85vw] md:max-w-max shadow-[4px_4px_0px_0px_#1a1c1c] md:shadow-[8px_8px_0px_0px_#1a1c1c] mb-6 transform -rotate-3 hover:rotate-0 transition-transform cursor-default whitespace-normal break-words">
              THE NEO-CRUNCH
            </span>
            <span>REVOLUTION</span>
          </h1>
          
          <p className="text-xl font-body font-medium text-on-surface-variant max-w-md mt-6 border-l-4 border-primary pl-4">
            Unapologetic snacks for the fearless. Plug into the new aesthetic. No minimalists allowed.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => setPage('shop')} className="bg-primary text-on-primary font-display font-bold text-lg neo-border px-8 py-4 shadow-[8px_8px_0px_0px_#1a1c1c] hover:bg-secondary-fixed hover:text-on-secondary-fixed active:translate-x-2 active:translate-y-2 active:shadow-none transition-all uppercase flex items-center gap-2 group">
              Shop Collection
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full relative mt-12 md:mt-0">
          <div className="aspect-[4/5] md:aspect-square bg-surface-variant neo-border shadow-[16px_16px_0px_0px_#7b00c9] relative overflow-hidden group cursor-pointer" onClick={() => setPage('product')}>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlcL4FHaYhQz32BrFBAODank9bpJRQ-47ICiUsTpXYQQevddE0fZ0ZjpZVtgp5Q1Tls7u_8JFNFiOTzQBWFB6ZIN9N--DmhYFG6hDunOqaZj8mBTJvxFjxhgs9alDcp5pbSPt-baXQNG-b94SOqRK2AjCz5UJD64BghompG9IDuONNGQ1aWUBmNpmDMBjC2MI_AZPPseimIoV51SPnSfuxIBclPCkEQP7QhhC6zucuuAbBhkhoeOsKUGDctCZa1a3-ifOXU0Wzxn0" alt="Mix" className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute bottom-4 left-4 bg-surface text-on-surface font-display font-bold text-xl neo-border px-4 py-2 uppercase shadow-[4px_4px_0px_0px_#1a1c1c]">
              FW/24
            </div>
          </div>
        </div>
      </header>

      {/* New Drops */}
      <section className="w-full px-4 md:px-16 py-10 bg-inverse-surface border-y-4 border-black">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-secondary-fixed">
            New Drops
          </h2>
          <button onClick={() => setPage('shop')} className="font-body font-bold text-sm uppercase text-[#f0f1f1] underline hover:text-primary transition-colors pb-1 hidden md:block">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'NEO-PISTACHIOS',
              price: '$45.00',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxGt0vFb4Pq0HtLKAFQZ9NbXBd2XG_cnrpbBKG5RXD1833bm17hiYW4ore2cONOSPAbGyW8PUA7Qxj4FbJHW7Jip1RlCDiEWstClVk1Br9d6t_mPrL_aApw9ag4xJcDke4fMZ6xBEuyPyYSnScur8ote5ZB2-6rTghd4zqyJ5O6AZzUEyuxIHkw5UXFW90rK3R31V2aAI3Y8_FdSX4hETTE_v6DKWbKukxMuN4a831qBUUg-p1Qh6a3nlNEXa-dJsry4bvsXm37HU',
              tag: 'NEW',
              shadow: 'shadow-[8px_8px_0px_0px_#c3f400]',
              hoverShadow: 'hover:shadow-[12px_12px_0px_0px_#c3f400]',
            },
            {
              title: 'GLITCH DATES',
              price: '$120.00',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAekL2KAMNVz4u6KUyQgHS0P55QApk8JMLpbKp2XAnWx08A9I_XU47d_mYXxCd9icJAzXEXZuAINL2sraItYgihFFcusmN60NeGlBNRh47uUFpJadFnqbywdSYRTJ86WFro0Ygx7jh2snTys15iefrKf6S9R7PEv7i-BxY36alGI01rtD2nUTHGf7dVQaxYBMwTutLRmZWlcr7nPge2YoNG7pOgVTMOF2zRUE3isfOwRenEAOqZosYrPBMnTcrT0ci5WbypjIcOaSo',
              tag: null,
              shadow: 'shadow-[8px_8px_0px_0px_#7b00c9]',
              hoverShadow: 'hover:shadow-[12px_12px_0px_0px_#7b00c9]',
            },
            {
              title: 'SMOKED BOLT ALMONDS',
              price: '$85.00',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ0Qe9Kf67i3z4W35PL2TFRYVUPBcvxupcBN5Xlpabb44QsDX9lFmjdU7jMz1W7ZdEtQeolC5FjbGcdcoLX4jVIfHY1rKbmdS2Hiw_X3N_vsSSdjqMnPXtChX1-SGeiacA48l-6NeKV5bF7xzq1FxPG2PtgGgd8HB0R1G8MArBgQpx2PeiE8fsM23IvjCQub5diZOwnuHbO6kD3fKmj1dDKL0mHCtme1k7CxCt7L6KRqKOnqckG8NR9_gsReN6iqBe1XaPpOkp9OQ',
              tag: null,
              shadow: 'shadow-[8px_8px_0px_0px_#c3f400]',
              hoverShadow: 'hover:shadow-[12px_12px_0px_0px_#c3f400]',
            }
          ].map((drop, idx) => (
            <article key={idx} className={`bg-surface neo-border flex flex-col ${drop.shadow} hover:-translate-y-2 ${drop.hoverShadow} transition-all duration-300`}>
              <div className="aspect-square border-b-4 border-black relative overflow-hidden bg-[#eeeeee] cursor-pointer" onClick={() => setPage('product')}>
                {drop.tag && <div className="absolute top-3 left-3 bg-secondary-fixed text-on-secondary-fixed font-body font-bold text-sm px-2 py-1 border-2 border-black uppercase z-10">{drop.tag}</div>}
                <img src={drop.img} alt={drop.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-display font-bold text-2xl uppercase text-on-surface mb-2">{drop.title}</h3>
                <p className="font-body text-base text-on-surface-variant flex-1">{drop.price}</p>
                <button onClick={() => setPage('cart')} className="mt-4 w-full bg-[#eeeeee] text-on-surface font-display font-bold text-lg neo-border py-3 shadow-[4px_4px_0px_0px_#1a1c1c] hover:bg-primary hover:text-on-primary active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase">
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 md:px-16 py-20 md:py-32">
        <div className="bg-primary neo-border p-6 md:p-16 shadow-[16px_16px_0px_0px_#1a1c1c] flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-secondary-fixed rounded-full neo-border mix-blend-multiply opacity-50 blur-3xl pointer-events-none"></div>
          <div className="flex-1 relative z-10 w-full text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-[48px] font-display font-black uppercase text-on-primary mb-4">
              Join the Circuit
            </h2>
            <p className="text-xl font-body font-medium text-[#f7e5ff] max-w-md mx-auto md:mx-0">
              Sign up for exclusive drops, violent colorways, and 10% off your first hit.
            </p>
          </div>
          <form className="flex-1 w-full relative z-10 flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="YOUR@EMAIL.COM" className="flex-1 bg-surface text-on-surface font-body text-base neo-border px-4 py-4 uppercase placeholder:text-[#7f7287] outline-none focus:border-secondary-fixed transition-all rounded-none" />
            <button type="submit" className="bg-secondary-fixed text-on-secondary-fixed font-display font-bold text-lg neo-border px-8 py-4 shadow-[6px_6px_0px_0px_#1a1c1c] hover:bg-surface hover:text-on-surface active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}