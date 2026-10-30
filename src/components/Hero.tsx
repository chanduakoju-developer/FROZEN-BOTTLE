import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1329] via-[#0f1c42] to-[#0b1329] pt-8 pb-16 lg:py-20 border-b border-slate-800">
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed natural kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span>India’s Leading 100% Vegetarian Dessert Destination</span>
              <span aria-hidden="true">·</span>
              <span>Serving Memories</span>
            </div>

            {/* Display headline with text-wrap: balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-display" style={{ textWrap: 'balance' }}>
              Memories Served in Every <span className="text-amber-400 underline decoration-amber-400/30 decoration-wavy">Sip & Scoop</span>.
            </h1>

            {/* Prose description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Indulge in ultra-thick gourmet milkshakes served in signature keepsake glass bottles, layered artisan dessert jars, popping boba coolers, and warm Belgian waffles across 200+ outlets.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm whitespace-nowrap cursor-pointer"
              >
                <span>Order Dessert Online</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#stores"
                className="px-6 py-3.5 bg-slate-800/90 hover:bg-slate-700 active:scale-95 text-slate-200 hover:text-white font-semibold rounded-xl border border-slate-700 transition-all text-sm whitespace-nowrap"
              >
                Find 200+ Outlets
              </a>
            </div>

            {/* Trust and Claims Adjacent */}
            <div className="pt-6 border-t border-slate-800/90 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                <span>100% Pure Vegetarian</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Keepsake Glass Bottles</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Over 200 Outlets</span>
              </div>
            </div>

            {/* Quick Delivery platforms */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span>Fast Doorstep Delivery via:</span>
              <span className="px-2.5 py-1 bg-[#152347] border border-slate-700 rounded text-slate-200 font-medium">
                Official Web Instant
              </span>
              <span className="px-2.5 py-1 bg-[#152347] border border-slate-700 rounded text-slate-200 font-medium">
                Swiggy
              </span>
              <span className="px-2.5 py-1 bg-[#152347] border border-slate-700 rounded text-slate-200 font-medium">
                Zomato
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/hero_frozen_bottle_desserts_1793357059216.jpg"
                alt="Signature Frozen Bottle Thickshakes and Gudbud Jars"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Product caption strip */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <p className="text-white font-bold font-display">Signature Thickshakes & Gudbud Jars</p>
                  <p className="text-slate-400">Crafted with pure dairy & Belgian chocolate</p>
                </div>
                <div className="text-right">
                  <span className="text-amber-400 font-bold font-mono text-sm">₹249</span>
                  <p className="text-[10px] text-emerald-400">100% Veg Certified</p>
                </div>
              </div>
            </div>

            {/* Floating feature note */}
            <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg border border-amber-300">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Served Fresh Daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
