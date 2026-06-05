import React from 'react';

export function Shop({ setPage }: { setPage: (p: string) => void }) {
  return (
    <div className="flex-grow flex flex-col w-full max-w-[1440px] px-4 md:px-16 py-10 gap-10">
      <header className="w-full flex flex-col md:flex-row justify-between items-start md:items-end neo-border-b pb-4 gap-4">
        <h1 className="text-5xl md:text-[80px] font-display font-black text-on-surface uppercase tracking-tighter leading-none">
          NATURE.<br />NO EXCUSES.
        </h1>
        <div className="flex gap-2">
          <span className="bg-secondary-fixed text-on-surface text-sm font-body font-bold px-3 py-1 neo-border uppercase">Fresh Drops</span>
          <span className="bg-primary text-on-primary text-sm font-body font-bold px-3 py-1 neo-border uppercase">Limited</span>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 relative">
        <aside className="w-full lg:w-1/4 flex flex-col gap-4 lg:sticky lg:top-[120px] h-fit">
          <div className="bg-[#ffffff] neo-border p-4 neo-shadow">
            <h2 className="text-2xl font-display font-bold uppercase mb-4 neo-border-b pb-2">Category</h2>
            <ul className="flex flex-col gap-2 relative">
              {['All Nuts', 'Dried Fruits', 'Mixes'].map((cat, i) => (
                <li key={cat}>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="category" defaultChecked={i === 0} className="peer sr-only" />
                    <div className="w-6 h-6 neo-border bg-[#ffffff] peer-checked:bg-secondary-fixed flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-sm opacity-0 peer-checked:opacity-100 font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                    <span className="text-lg font-body uppercase group-hover:text-primary transition-colors">{cat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#ffffff] neo-border p-4 neo-shadow mt-4">
            <h2 className="text-2xl font-display font-bold uppercase mb-4 neo-border-b pb-2">Price</h2>
            <div className="flex flex-wrap gap-2">
              {['$0 - $50', '$50 - $100', '$100+'].map((price, i) => (
                <button key={price} className={`${i === 1 ? 'bg-secondary-fixed' : 'bg-[#ffffff]'} text-on-surface font-body font-bold text-sm px-3 py-2 neo-border hover:bg-primary hover:text-on-primary transition-colors uppercase`}>
                  {price}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            { tag: "NEW", title: "VOLT PISTACHIOS", price: "$14.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxGt0vFb4Pq0HtLKAFQZ9NbXBd2XG_cnrpbBKG5RXD1833bm17hiYW4ore2cONOSPAbGyW8PUA7Qxj4FbJHW7Jip1RlCDiEWstClVk1Br9d6t_mPrL_aApw9ag4xJcDke4fMZ6xBEuyPyYSnScur8ote5ZB2-6rTghd4zqyJ5O6AZzUEyuxIHkw5UXFW90rK3R31V2aAI3Y8_FdSX4hETTE_v6DKWbKukxMuN4a831qBUUg-p1Qh6a3nlNEXa-dJsry4bvsXm37HU" },
            { tag: null, title: "VOID DATES", price: "$8.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAekL2KAMNVz4u6KUyQgHS0P55QApk8JMLpbKp2XAnWx08A9I_XU47d_mYXxCd9icJAzXEXZuAINL2sraItYgihFFcusmN60NeGlBNRh47uUFpJadFnqbywdSYRTJ86WFro0Ygx7jh2snTys15iefrKf6S9R7PEv7i-BxY36alGI01rtD2nUTHGf7dVQaxYBMwTutLRmZWlcr7nPge2YoNG7pOgVTMOF2zRUE3isfOwRenEAOqZosYrPBMnTcrT0ci5WbypjIcOaSo" },
            { tag: null, title: "BOLT ALMONDS", price: "$12.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ0Qe9Kf67i3z4W35PL2TFRYVUPBcvxupcBN5Xlpabb44QsDX9lFmjdU7jMz1W7ZdEtQeolC5FjbGcdcoLX4jVIfHY1rKbmdS2Hiw_X3N_vsSSdjqMnPXtChX1-SGeiacA48l-6NeKV5bF7xzq1FxPG2PtgGgd8HB0R1G8MArBgQpx2PeiE8fsM23IvjCQub5diZOwnuHbO6kD3fKmj1dDKL0mHCtme1k7CxCt7L6KRqKOnqckG8NR9_gsReN6iqBe1XaPpOkp9OQ" }
          ].map((prod, idx) => (
            <article key={idx} className="bg-[#ffffff] neo-border flex flex-col neo-shadow hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#1a1c1c] transition-all duration-200 group cursor-pointer" onClick={() => setPage('product')}>
              <div className="w-full aspect-[4/5] bg-[#e2e2e2] neo-border-b relative overflow-hidden">
                {prod.tag && <div className="absolute top-2 left-2 z-10"><span className="bg-secondary-fixed text-on-surface font-body font-bold text-sm px-2 py-1 neo-border uppercase">{prod.tag}</span></div>}
                <img src={prod.img} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0" />
              </div>
              <div className="p-4 flex flex-col flex-grow gap-2 bg-[#ffffff] group-hover:bg-primary group-hover:text-on-primary transition-colors duration-200">
                <h3 className="text-2xl font-display font-bold uppercase leading-tight line-clamp-2">{prod.title}</h3>
                <p className="text-xl font-body font-bold mt-auto">{prod.price}</p>
                <button onClick={(e) => { e.stopPropagation(); setPage('cart'); }} className={`w-full font-display font-bold text-lg py-3 neo-border neo-shadow-sm mt-2 transition-all uppercase ${idx === 0 ? 'bg-secondary-fixed text-on-surface hover:bg-[#ffffff]' : 'bg-[#ffffff] text-on-surface group-hover:border-black group-hover:text-on-surface'}`}>
                  Quick Add
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
