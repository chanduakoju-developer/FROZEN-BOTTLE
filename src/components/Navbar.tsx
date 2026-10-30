import React, { useState } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalItemCount, setIsCartOpen, selectedOutlet } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Boba Bar', href: '#boba-bar' },
    { label: 'Dessert Jars', href: '#dessert-jars' },
    { label: 'Store Locator', href: '#stores' },
    { label: 'Franchise', href: '#franchise' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0b1329]/95 backdrop-blur-md border-b border-slate-800">
      {/* 3-Zone Contract Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single element, whitespace-nowrap, display face) */}
        <a 
          href="/" 
          className="text-2xl font-black tracking-tight text-white whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors font-display flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-lg shadow-sm">
            FB
          </span>
          <span>FROZEN BOTTLE</span>
        </a>

        {/* Zone 2: 4–5 single-line nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-lg shadow-md whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-4 h-4 text-slate-950" />
            <span>Bag</span>
            {totalItemCount > 0 && (
              <span className="bg-slate-950 text-amber-400 text-xs px-2 py-0.5 rounded font-mono font-bold">
                {totalItemCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle mobile navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sub-bar showing selected store location */}
      <div className="bg-[#0f1b3f]/70 border-t border-slate-800/80 px-4 sm:px-6 lg:px-8 py-1.5 text-xs text-slate-400 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-slate-300 font-medium truncate">Delivering from: {selectedOutlet}</span>
          </div>
          <a href="#stores" className="text-amber-400 hover:underline shrink-0 text-xs font-semibold ml-4">
            Change Store
          </a>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1633] border-b border-slate-800 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800/60"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="w-full py-3 bg-amber-400 text-slate-950 font-bold rounded-lg text-center"
            >
              View Order Bag ({totalItemCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
