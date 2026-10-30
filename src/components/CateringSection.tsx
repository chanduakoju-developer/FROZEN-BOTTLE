import React, { useState } from 'react';
import { Gift, PartyPopper, CheckCircle2, Send } from 'lucide-react';

export const CateringSection: React.FC = () => {
  const [eventType, setEventType] = useState<'birthday' | 'corporate' | 'wedding'>('corporate');
  const [guestCount, setGuestCount] = useState<number>(50);
  const [submitted, setSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const perHeadCost = eventType === 'birthday' ? 220 : eventType === 'corporate' ? 260 : 310;
  const estimatedTotal = guestCount * perHeadCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0d1633] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#121f47] via-[#101b3d] to-[#0b1329] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
                <PartyPopper className="w-4 h-4" />
                <span>Bulk Gifting & Event Catering</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                Live Shake Bars & Custom Dessert Gifting
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Make your celebrations unforgettable with a live Frozen Bottle milkshake bar, hot Belgian waffle live counters, and personalized dessert jars for weddings, corporate offsites, and birthdays.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-2">
                <div className="bg-[#142352] p-3 rounded-xl border border-slate-800">
                  <strong className="block text-white mb-0.5">Live Shake Bar</strong>
                  <span className="text-slate-400">Blended live on-site with customizable toppings.</span>
                </div>
                <div className="bg-[#142352] p-3 rounded-xl border border-slate-800">
                  <strong className="block text-white mb-0.5">Custom Jars Gifting</strong>
                  <span className="text-slate-400">Personalized branded glass jars with custom labels.</span>
                </div>
                <div className="bg-[#142352] p-3 rounded-xl border border-slate-800">
                  <strong className="block text-white mb-0.5">Cold Chain Setup</strong>
                  <span className="text-slate-400">Commercial chillers provided for large gatherings.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Instant Event Quote Estimator */}
            <div className="lg:col-span-5 bg-[#0b1329] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                <Gift className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white font-display">Instant Party Quote</h3>
              </div>

              {submitted ? (
                <div className="py-6 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white font-display">Quote Requested!</h4>
                  <p className="text-xs text-slate-300">
                    Our events team will contact {contactPhone} with the complete menu tasting kit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-amber-400 underline mt-2"
                  >
                    Calculate another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1">Occasion Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'birthday', label: 'Birthday' },
                        { id: 'corporate', label: 'Corporate' },
                        { id: 'wedding', label: 'Wedding' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setEventType(t.id as any)}
                          className={`py-1.5 rounded-lg border transition-colors cursor-pointer ${
                            eventType === t.id
                              ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                              : 'bg-[#14224d] text-slate-300 border-slate-800'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-slate-400">Guest Count</label>
                      <span className="font-mono font-bold text-amber-400">{guestCount} Guests</span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={500}
                      step={10}
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full accent-amber-400"
                    />
                  </div>

                  <div className="bg-[#14224d] p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Estimated Package</span>
                      <span className="text-xs text-slate-300">₹{perHeadCost} / guest</span>
                    </div>
                    <span className="text-lg font-mono font-black text-amber-400">
                      ₹{estimatedTotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="bg-[#14224d] border border-slate-700 rounded-lg px-2.5 py-1.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="bg-[#14224d] border border-slate-700 rounded-lg px-2.5 py-1.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Get Event Catering Proposal</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
