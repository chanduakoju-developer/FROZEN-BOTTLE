import React, { useState } from 'react';
import { Briefcase, TrendingUp, DollarSign, CheckCircle2, Send, Download } from 'lucide-react';

export const FranchiseSection: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<'kiosk' | 'cafe' | 'drive_thru'>('cafe');
  const [dailyOrders, setDailyOrders] = useState<number>(120);
  
  // Inquiry form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: 'no'
  });
  const [submitted, setSubmitted] = useState(false);

  // Financial calculations
  const avgTicket = 275; // INR
  const monthlyRevenue = dailyOrders * avgTicket * 30;
  const foodCostMargin = 0.32; // 32% food cost -> 68% gross margin
  const grossProfit = monthlyRevenue * (1 - foodCostMargin);
  const estimatedRentStaff = selectedFormat === 'kiosk' ? 70000 : selectedFormat === 'cafe' ? 140000 : 90000;
  const netOperatingProfit = Math.max(0, grossProfit - estimatedRentStaff);
  
  const initialCapEx = selectedFormat === 'kiosk' ? 1900000 : selectedFormat === 'cafe' ? 3200000 : 2400000;
  const paybackMonths = netOperatingProfit > 0 ? Math.ceil(initialCapEx / netOperatingProfit) : 24;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.city) return;
    setSubmitted(true);
  };

  const handleDownloadBrochure = () => {
    const textContent = `FROZEN BOTTLE FRANCHISE PROSPECTUS 2026
---------------------------------------------
India's Premier 100% Vegetarian Dessert Cafe Chain
200+ Outlets across 30+ Cities

Formats Available:
1. Kiosk Model (150 - 250 sq.ft) - Approx Investment: ₹18L - ₹22L
2. High-Street Cafe (350 - 600 sq.ft) - Approx Investment: ₹28L - ₹35L
3. Cloud / Drive-Thru Hub (200 - 400 sq.ft) - Approx Investment: ₹22L - ₹26L

Gross Margins: ~65% - 68%
Average Payback: 12 - 16 months

Corporate Contact: franchise@frozenbottle.com | +91 80 4000 8899
HQ: Bengaluru, Karnataka, India.`;

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Frozen_Bottle_Franchise_Brochure_2026.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="franchise" className="py-16 sm:py-20 bg-[#0b1329] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <span>Franchise Opportunities</span>
            <span aria-hidden="true">·</span>
            <span>High ROI Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            Partner with Frozen Bottle
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Join one of India's fastest-growing quick-service dessert brands. Low setup turnaround, strong 65%+ gross margins, centralized supply chain, and continuous brand marketing.
          </p>
        </div>

        {/* 2-Column Split: Interactive Calculator & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive ROI Estimator */}
          <div className="lg:col-span-7 bg-[#0f1b3f] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-white font-display">
                  Interactive Unit Economics Estimator
                </h3>
              </div>
              <button
                onClick={handleDownloadBrochure}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Brochure</span>
              </button>
            </div>

            {/* Select Format Tabs */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                1. Select Store Format
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'kiosk', label: 'Mall Kiosk', space: '150-250 sq.ft' },
                  { id: 'cafe', label: 'High-Street Cafe', space: '350-600 sq.ft' },
                  { id: 'drive_thru', label: 'Cloud / Hub', space: '200-400 sq.ft' },
                ].map((fmt) => (
                  <button
                    key={fmt.id}
                    type="button"
                    onClick={() => setSelectedFormat(fmt.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedFormat === fmt.id
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-slate-800 bg-[#121f47] text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <p className="font-bold text-xs">{fmt.label}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{fmt.space}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Daily Order Volume Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  2. Projected Daily Orders
                </label>
                <span className="text-base font-mono font-bold text-amber-400">
                  {dailyOrders} orders / day
                </span>
              </div>
              <input
                type="range"
                min={40}
                max={280}
                step={10}
                value={dailyOrders}
                onChange={(e) => setDailyOrders(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>40 (Modest)</span>
                <span>120 (Avg Mall)</span>
                <span>280 (High Footfall)</span>
              </div>
            </div>

            {/* Calculated Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="bg-[#142352] p-4 rounded-xl border border-slate-800/80">
                <span className="text-xs text-slate-400 block">Est. Monthly Sales</span>
                <span className="text-xl font-bold font-mono text-white tabular-nums">
                  ₹{(monthlyRevenue / 100000).toFixed(1)} Lakhs
                </span>
                <span className="text-[10px] text-slate-400 mt-1 block">At ₹{avgTicket} avg ticket</span>
              </div>

              <div className="bg-[#142352] p-4 rounded-xl border border-slate-800/80">
                <span className="text-xs text-slate-400 block">Est. Net Profit / Mo</span>
                <span className="text-xl font-bold font-mono text-emerald-400 tabular-nums">
                  ₹{(netOperatingProfit / 100000).toFixed(1)} Lakhs
                </span>
                <span className="text-[10px] text-emerald-400 mt-1 block">~68% gross margin</span>
              </div>

              <div className="bg-[#142352] p-4 rounded-xl border border-slate-800/80 col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-400 block">Est. Payback Period</span>
                <span className="text-xl font-bold font-mono text-amber-400 tabular-nums">
                  {paybackMonths} Months
                </span>
                <span className="text-[10px] text-slate-400 mt-1 block">CapEx ₹{(initialCapEx / 100000).toFixed(0)}L</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Application Form */}
          <div className="lg:col-span-5 bg-[#0f1b3f] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <Briefcase className="w-5 h-5 text-sky-400" />
              <h3 className="text-lg font-bold text-white font-display">
                Franchise Expression of Interest
              </h3>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white font-display">Inquiry Received!</h4>
                <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our franchise business development team for <strong className="text-white">{formData.city}</strong> will contact you at {formData.phone} within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', city: '', experience: 'no' });
                  }}
                  className="mt-4 px-4 py-2 bg-slate-800 text-slate-200 text-xs rounded-lg hover:bg-slate-700"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#14224d] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#14224d] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full bg-[#14224d] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Target City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Pune / Mumbai"
                      className="w-full bg-[#14224d] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Prior F&B Experience?
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-[#14224d] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="no">First-time Entrepreneur</option>
                      <option value="yes">1-3 Years in F&B</option>
                      <option value="veteran">Multi-unit Operator</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-400 hover:bg-amber-300 active:scale-98 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-xs cursor-pointer shadow-lg mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Franchise Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
