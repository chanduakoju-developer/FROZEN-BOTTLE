import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { MenuItem } from '../types';

interface BobaSpotlightProps {
  onOpenCustomizer: (item: MenuItem) => void;
  bobaItem: MenuItem;
  jarItem: MenuItem;
}

export const BobaSpotlight: React.FC<BobaSpotlightProps> = ({ onOpenCustomizer, bobaItem, jarItem }) => {
  return (
    <div className="space-y-16">
      {/* Boba Bar Spotlight */}
      <section id="boba-bar" className="py-16 sm:py-20 bg-gradient-to-r from-[#0b1329] via-[#101e46] to-[#0b1329] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual with 4:3 ratio */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
                <img
                  src={bobaItem.image}
                  alt="Frozen Bottle Boba Bar"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-amber-400 font-bold">Featured Boba</span>
                    <h4 className="text-sm font-bold text-white font-display">{bobaItem.name}</h4>
                  </div>
                  <button
                    onClick={() => onOpenCustomizer(bobaItem)}
                    className="px-3 py-1.5 bg-amber-400 text-slate-950 font-bold rounded-lg text-xs cursor-pointer hover:bg-amber-300"
                  >
                    Try Boba ₹{bobaItem.price}
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase">
                <span>The Boba Revolution</span>
                <span aria-hidden="true">·</span>
                <span>Freshly Cooked Tapioca</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                Step into the Frozen Bottle <span className="text-sky-400">Boba Bar</span>.
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Chewy, popping, and endlessly refreshing. Our boba teas are crafted daily with authentic slow-steeped loose leaves, whole fresh milk, creamy fruit blends, and imported slow-simmered Taiwanese tapioca pearls.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-200">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#14224d] border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Chewy Brown Sugar Tapioca</strong>
                    <span className="text-slate-400">Slow-simmered in dark caramelized jaggery syrup.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#14224d] border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Bursting Juice Boba</strong>
                    <span className="text-slate-400">Popping mango, strawberry, and blueberry juice pearls.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenCustomizer(bobaItem)}
                  className="px-6 py-3 bg-sky-400 hover:bg-sky-300 active:scale-95 text-slate-950 font-bold rounded-xl transition-all flex items-center gap-2 text-xs cursor-pointer shadow-lg"
                >
                  <span>Explore Boba Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dessert Jars Spotlight */}
      <section id="dessert-jars" className="py-16 sm:py-20 bg-[#0b1329] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
                <span>Layers of Decadence</span>
                <span aria-hidden="true">·</span>
                <span>Original Gudbud Jars</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                Handcrafted <span className="text-amber-400">Gudbud & Dessert Jars</span>.
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                No single spoon is like the other. Every jar is an edible architectural masterpiece layered with fudgy brownies, roasted dry fruits, molten chocolate ganache, and premium vegetarian churned gelato.
              </p>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Served in heavy crystal mason jars you take home.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Zero gelatin, zero artificial preservatives, 100% vegetarian.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Perfect for party dessert tables and gift celebrations.</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenCustomizer(jarItem)}
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-bold rounded-xl transition-all flex items-center gap-2 text-xs cursor-pointer shadow-lg"
                >
                  <span>Order Dessert Jar (₹{jarItem.price})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
                <img
                  src={jarItem.image}
                  alt="Frozen Bottle Dessert Jar"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-amber-400 font-bold">Chef's Signature</span>
                    <h4 className="text-sm font-bold text-white font-display">{jarItem.name}</h4>
                  </div>
                  <span className="font-mono text-amber-400 font-bold text-sm">₹{jarItem.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
