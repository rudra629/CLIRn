import React from 'react';

export function Product({ setPage }: { setPage: (p: string) => void }) {
  return (
    <div className="flex-grow w-full max-w-[1440px] px-4 md:px-16 py-10 flex flex-col gap-10">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-7 flex flex-col gap-4 relative group">
          <div className="w-full aspect-square neo-border neo-shadow bg-white relative overflow-hidden flex items-center justify-center">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlcL4FHaYhQz32BrFBAODank9bpJRQ-47ICiUsTpXYQQevddE0fZ0ZjpZVtgp5Q1Tls7u_8JFNFiOTzQBWFB6ZIN9N--DmhYFG6hDunOqaZj8mBTJvxFjxhgs9alDcp5pbSPt-baXQNG-b94SOqRK2AjCz5UJD64BghompG9IDuONNGQ1aWUBmNpmDMBjC2MI_AZPPseimIoV51SPnSfuxIBclPCkEQP7QhhC6zucuuAbBhkhoeOsKUGDctCZa1a3-ifOXU0Wzxn0" alt="Mix" className="w-4/5 h-4/5 object-contain object-center z-10 transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary-fixed -skew-x-12 translate-x-1/4 z-0"></div>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white neo-border neo-shadow-sm neo-interactive-sm flex items-center justify-center z-20 hover:bg-secondary-fixed transition-colors">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_back</span>
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white neo-border neo-shadow-sm neo-interactive-sm flex items-center justify-center z-20 hover:bg-secondary-fixed transition-colors">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
            </button>
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
              <div className="bg-secondary-fixed text-on-secondary-fixed font-body font-bold text-sm uppercase px-4 py-1 neo-border">New Drop</div>
              <div className="bg-primary text-on-primary font-body font-bold text-sm uppercase px-4 py-1 neo-border">Limited</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="aspect-square bg-white border-4 border-secondary-fixed p-2 cursor-pointer shadow-[4px_4px_0px_0px_#c3f400] relative"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlcL4FHaYhQz32BrFBAODank9bpJRQ-47ICiUsTpXYQQevddE0fZ0ZjpZVtgp5Q1Tls7u_8JFNFiOTzQBWFB6ZIN9N--DmhYFG6hDunOqaZj8mBTJvxFjxhgs9alDcp5pbSPt-baXQNG-b94SOqRK2AjCz5UJD64BghompG9IDuONNGQ1aWUBmNpmDMBjC2MI_AZPPseimIoV51SPnSfuxIBclPCkEQP7QhhC6zucuuAbBhkhoeOsKUGDctCZa1a3-ifOXU0Wzxn0" alt="Thumb" className="w-full h-full object-contain" /></div>
            {[2,3,4].map(i => (
              <div key={i} className="aspect-square bg-[#e8e8e8] neo-border p-2 cursor-pointer hover:bg-secondary-fixed transition-colors opacity-70 hover:opacity-100 flex items-center justify-center">
                 <span className="material-symbols-outlined text-4xl text-[#7f7287]">image</span>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl md:text-[80px] leading-[1.1] font-display font-black text-on-surface uppercase break-words">HYPER<br/>CRUNCH MIX</h1>
            <p className="text-2xl font-display font-bold text-primary">$299.00 <span className="text-base font-body text-[#7f7287] line-through ml-2">$350.00</span></p>
          </div>
          <p className="text-xl font-body font-medium text-on-surface">
            Engineered for maximum energy. A violent mix of premium walnuts, almonds, and neon-grade pistachios. Fuel for the bold.
          </p>

          <div className="flex flex-col gap-2 mt-4">
            <span className="text-sm font-body font-bold uppercase">Colorway: <span className="text-primary">SALTED / RAW / SMOKED</span></span>
            <div className="flex gap-4">
              <button className="w-12 h-12 neo-border bg-black neo-shadow-sm neo-interactive-sm relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary-fixed opacity-80"></div></button>
              <button className="w-12 h-12 border-4 border-[#7f7287] bg-white hover:border-black transition-colors"></button>
              <button className="w-12 h-12 border-4 border-[#7f7287] bg-red-600 hover:border-black transition-colors"></button>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-body font-bold uppercase">Weight</span>
              <a href="#" className="text-sm font-body font-bold text-primary underline hover:text-secondary-fixed">Size Guide</a>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['250G', '500G', '1KG', '2KG'].map((w, i) => (
                <button key={w} className={`py-2 font-body font-bold text-sm transition-colors ${i === 2 ? 'bg-black text-white neo-border shadow-[4px_4px_0px_0px_#1a1c1c] -translate-y-1 -translate-x-1' : 'bg-white neo-border hover:bg-secondary-fixed'}`}>{w}</button>
              ))}
            </div>
          </div>

          <button onClick={() => setPage('cart')} className="mt-8 w-full bg-primary text-on-primary neo-border neo-shadow neo-interactive py-6 flex flex-col items-center justify-center gap-1 hover:bg-secondary-fixed hover:text-black transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary-fixed transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
            <span className="text-4xl font-display font-black uppercase z-10 relative">Add To Cart</span>
            <span className="text-sm font-body font-bold z-10 relative opacity-80">Free Shipping & Returns</span>
          </button>
        </div>
      </div>

      <div className="mt-10 pt-10 neo-border-b border-t-4 border-black">
        <h2 className="text-4xl md:text-[40px] font-display font-black uppercase mb-6">Hard Specs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'speed', title: 'PROTEIN LOAD', text: '98% energy return from our proprietary Neon-Core midsole foam. Bounce harder.', bg: 'bg-white', iconBg: 'bg-secondary-fixed' },
            { icon: 'shield', title: 'MEGA FIBER', text: 'Tear-resistant upper engineered from military-grade polymers. Indestructible style.', bg: 'bg-primary text-on-primary', iconBg: 'bg-black text-on-primary border-white border-2' },
            { icon: 'water_drop', title: 'SALT KICK', text: 'Teflon-coated exterior panels. Puddles are afraid of you, not the other way around.', bg: 'bg-white', iconBg: 'bg-secondary-fixed' }
          ].map((s, i) => (
            <div key={i} className={`${s.bg} neo-border neo-shadow-sm p-6 flex flex-col gap-4`}>
              <div className={`w-12 h-12 neo-border flex items-center justify-center ${s.iconBg}`}>
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
              </div>
              <h3 className="text-2xl font-display font-bold uppercase">{s.title}</h3>
              <p className="text-base font-body">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
