import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, MapPin, Phone, Snowflake, Bike, X } from 'lucide-react';

interface OrderSuccessModalProps {
  order: any | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (!order) return;
    const t1 = setTimeout(() => setStep(2), 2500);
    const t2 = setTimeout(() => setStep(3), 5000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [order]);

  if (!order) return null;

  const steps = [
    { num: 1, title: 'Order Confirmed', desc: 'Sent to Frozen Bottle kitchen' },
    { num: 2, title: 'Freshly Blending & Scooping', desc: 'Chef preparing your order' },
    { num: 3, title: 'Packed in Chilled Bag', desc: 'Valet assigned for delivery' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#0f1b3f] border border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-950/60 to-[#0f1b3f] border-b border-slate-800 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-black text-white font-display">Order Confirmed!</h3>
          <p className="text-xs text-slate-300 mt-1">
            Order <strong className="font-mono text-amber-400">{order.orderId}</strong> · Estimated 25–35 Mins
          </p>
        </div>

        {/* Live Tracking Progress */}
        <div className="p-5 border-b border-slate-800 bg-[#0c142c] space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-slate-200">Live Kitchen Tracker</span>
            <span className="flex items-center gap-1 text-emerald-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>In Kitchen</span>
            </span>
          </div>

          <div className="space-y-3">
            {steps.map((st) => {
              const isDone = step >= st.num;
              const isCurrent = step === st.num;

              return (
                <div key={st.num} className="flex items-start gap-3 text-xs">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold shrink-0 transition-colors ${
                    isDone ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-500 border border-slate-700'
                  }`}>
                    {isDone ? '✓' : st.num}
                  </div>
                  <div>
                    <strong className={`block ${isCurrent ? 'text-amber-400 font-bold' : isDone ? 'text-white' : 'text-slate-500'}`}>
                      {st.title}
                    </strong>
                    <span className="text-[11px] text-slate-400">{st.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Details Summary */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs text-slate-300 flex-1">
          <div className="bg-[#142352] p-3 rounded-xl border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-white font-semibold">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Delivering To</span>
            </div>
            <p className="text-slate-300 pl-5">{order.address}</p>
            <p className="text-slate-400 pl-5 text-[11px]">Phone: {order.phone}</p>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-white uppercase text-[11px] tracking-wider block">
              Items Ordered
            </span>
            <div className="space-y-1.5">
              {order.items.map((it: any) => (
                <div key={it.cartItemId} className="flex justify-between items-center text-xs py-1 border-b border-slate-800/60">
                  <div className="flex items-center gap-2 truncate">
                    <span className="font-mono text-amber-400 font-bold">{it.quantity}x</span>
                    <span className="text-white truncate">{it.menuItem.name}</span>
                    <span className="text-[10px] text-slate-400">({it.customization.size})</span>
                  </div>
                  <span className="font-mono font-medium text-slate-200 shrink-0 ml-2">
                    ₹{it.totalUnitPrice * it.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#121f47] p-3 rounded-xl border border-slate-800 space-y-1 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Total Bill</span>
              <span className="font-mono text-white">₹{order.grandTotal}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Payment Mode</span>
              <span className="capitalize text-slate-300 font-mono">{order.paymentMethod.toUpperCase()}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Fulfilling Outlet</span>
              <span className="text-slate-300 truncate max-w-[180px]">{order.outlet}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-4 bg-[#0a1226] border-t border-slate-800 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs cursor-pointer shadow-lg transition-colors"
          >
            Done · Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};
