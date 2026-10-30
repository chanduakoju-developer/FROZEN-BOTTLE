import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#070d1c] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-lg">
                FB
              </span>
              <span className="text-xl font-black text-white font-display tracking-tight">
                FROZEN BOTTLE
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              India's leading 100% vegetarian dessert cafe chain. Serving iconic thick milkshakes in collectible glass bottles, artisanal dessert jars, boba sundaes, and warm Belgian waffles across 200+ outlets.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span className="font-semibold">100% Pure Vegetarian · FSSAI Lic. No. 11217333000842</span>
            </div>
          </div>

          {/* Menu Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Treats & Menu</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Signature Thickshakes</a></li>
              <li><a href="#dessert-jars" className="hover:text-amber-400 transition-colors">Gudbud Sundae Jars</a></li>
              <li><a href="#boba-bar" className="hover:text-amber-400 transition-colors">Boba Bar & Teas</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Crisp Belgian Waffles</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Gourmet Scoops & Tubs</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#stores" className="hover:text-amber-400 transition-colors">Find 200+ Outlets</a></li>
              <li><a href="#franchise" className="hover:text-amber-400 transition-colors">Franchise Opportunities</a></li>
              <li><a href="#catering" className="hover:text-amber-400 transition-colors">Corporate & Party Catering</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Our Story & Ingredients</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Customer Support</a></li>
            </ul>
          </div>

          {/* Newsletter / Sweet Club */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Frozen Bottle Club</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Get secret menu drops, free topping coupons, and birthday treat vouchers.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You're in! Welcome to the club.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-[#121f47] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Join Sweet Club
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Frozen Bottle Pvt. Ltd. All rights reserved. Serving Memories.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-300 cursor-pointer">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
