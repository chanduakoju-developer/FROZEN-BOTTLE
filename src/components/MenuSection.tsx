import React, { useState, useMemo } from 'react';
import { Search, Plus, Sparkles, Filter } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_ITEMS, CATEGORY_LABELS } from '../data/menuData';

interface MenuSectionProps {
  onOpenCustomizer: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenCustomizer }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('all');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Flavor filter
      if (selectedFlavor !== 'all' && item.flavorProfile !== selectedFlavor) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesFlavor = item.flavorProfile.toLowerCase().includes(q);
        return matchesName || matchesDesc || matchesFlavor;
      }
      return true;
    });
  }, [selectedCategory, selectedFlavor, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#0b1329] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span>Freshly Blended & Churned</span>
              <span aria-hidden="true">·</span>
              <span>100% Pure Vegetarian</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Signature Dessert Menu
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              From our famous glass-bottled thickshakes to decadent brownie jars and chewy bubble teas, crafted with wholesome ingredients and uncompromised taste.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search shakes, boba, jars..."
              className="w-full bg-[#121f47] border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Functional segmented buttons per §1.A) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORY_LABELS.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                    : 'bg-[#121f47] text-slate-300 hover:text-white hover:bg-[#18285c] border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Flavor Filters */}
        <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap pt-1">
          <span className="flex items-center gap-1 font-medium text-slate-300">
            <Filter className="w-3 h-3 text-amber-400" />
            Flavors:
          </span>
          {[
            { id: 'all', label: 'All Flavors' },
            { id: 'chocolate', label: 'Chocolate' },
            { id: 'fruit', label: 'Fruit & Berry' },
            { id: 'nutty', label: 'Nutty & Royal' },
            { id: 'coffee', label: 'Coffee & Brew' },
          ].map((flv) => (
            <button
              key={flv.id}
              onClick={() => setSelectedFlavor(flv.id)}
              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                selectedFlavor === flv.id
                  ? 'bg-slate-700 text-amber-300 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {flv.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: 3-column desktop */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#0f1b3f] rounded-2xl border border-slate-800 space-y-3">
            <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
            <h3 className="text-lg font-bold text-white font-display">No Treats Found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              We couldn't find any items matching "{searchQuery}". Try searching for chocolate, boba, or brownie.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedFlavor('all');
              }}
              className="px-4 py-2 text-xs bg-amber-400 text-slate-950 font-bold rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#0f1b3f] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Image Container with 4:3 Ratio */}
                  <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden cursor-pointer" onClick={() => onOpenCustomizer(item)}>
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b3f] via-transparent to-transparent pointer-events-none" />

                    {/* Subtle text badge */}
                    {item.badge && (
                      <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-sm border border-slate-800 text-[11px] font-semibold text-amber-300 px-2.5 py-1 rounded">
                        {item.badge}
                      </div>
                    )}

                    <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-sm border border-slate-800 p-1.5 rounded flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] text-emerald-400 font-bold">VEG</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="capitalize">{item.category.replace('_', ' ')}</span>
                      {item.servingSize && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{item.servingSize}</span>
                        </>
                      )}
                    </div>

                    <h3 
                      onClick={() => onOpenCustomizer(item)}
                      className="text-lg font-bold text-white font-display group-hover:text-amber-400 transition-colors cursor-pointer leading-snug line-clamp-1"
                    >
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Strip */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-800/80">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Price</span>
                    <span className="text-xl font-bold font-mono text-amber-400 tabular-nums">
                      ₹{item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenCustomizer(item)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Customize & Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
