import React, { useState, useMemo } from 'react';
import { MapPin, Clock, Phone, Navigation, Check, Coffee, Car } from 'lucide-react';
import { STORE_OUTLETS, CITIES } from '../data/storesData';
import { useCart } from '../context/CartContext';

export const StoreLocator: React.FC = () => {
  const { selectedOutlet, setSelectedOutlet } = useCart();
  const [selectedCity, setSelectedCity] = useState<string>('All Cities');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedStoreId, setCopiedStoreId] = useState<string | null>(null);

  const filteredStores = useMemo(() => {
    return STORE_OUTLETS.filter((store) => {
      if (selectedCity !== 'All Cities' && store.city !== selectedCity) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          store.name.toLowerCase().includes(q) ||
          store.area.toLowerCase().includes(q) ||
          store.address.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedCity, searchQuery]);

  const handleSelectStore = (storeName: string, storeId: string) => {
    setSelectedOutlet(storeName);
    setCopiedStoreId(storeId);
    setTimeout(() => setCopiedStoreId(null), 2500);
  };

  return (
    <section id="stores" className="py-16 sm:py-20 bg-[#0d1633] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span>200+ Outlets Nationwide</span>
              <span aria-hidden="true">·</span>
              <span>Find Your Nearest Hangout</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Store Locator
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Visit our cozy dessert cafes for late-night cravings or order instant chilled delivery right to your door.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by area (e.g. Bandra, HSR)..."
              className="w-full bg-[#121f47] border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* City Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CITIES.map((city) => {
            const isActive = selectedCity === city;
            return (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                    : 'bg-[#121f47] text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => {
            const isSelected = selectedOutlet === store.name;
            const isJustSelected = copiedStoreId === store.id;

            return (
              <div
                key={store.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'bg-[#142352] border-amber-400/80 shadow-lg'
                    : 'bg-[#121f47] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-mono text-amber-400 font-semibold uppercase">
                        {store.city} · {store.area}
                      </span>
                      <h3 className="text-base font-bold text-white font-display mt-0.5">
                        {store.name}
                      </h3>
                    </div>
                    {isSelected && (
                      <span className="bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shrink-0">
                        Active Store
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{store.address}</span>
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-400 pt-1 border-t border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{store.timing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{store.phone}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                    {store.hasBobaBar && (
                      <span className="px-2 py-0.5 bg-slate-900/60 rounded border border-slate-700/60 text-sky-300 flex items-center gap-1">
                        <Coffee className="w-3 h-3" />
                        Boba Bar
                      </span>
                    )}
                    {store.hasDriveThru && (
                      <span className="px-2 py-0.5 bg-slate-900/60 rounded border border-slate-700/60 text-amber-300 flex items-center gap-1">
                        <Car className="w-3 h-3" />
                        Drive-Thru
                      </span>
                    )}
                    <span className="px-2 py-0.5 bg-slate-900/60 rounded border border-slate-700/60 text-slate-300">
                      Dine-in
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => handleSelectStore(store.name, store.id)}
                    className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    {isJustSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-slate-950" />
                        <span>Delivery Outlet Set</span>
                      </>
                    ) : isSelected ? (
                      'Selected for Delivery'
                    ) : (
                      'Deliver from Here'
                    )}
                  </button>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors border border-slate-700"
                    title="Get Directions"
                    aria-label={`Directions to ${store.name}`}
                  >
                    <Navigation className="w-4 h-4 text-amber-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
