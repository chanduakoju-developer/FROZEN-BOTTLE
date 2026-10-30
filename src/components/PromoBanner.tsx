import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-amber-400 text-slate-950 text-xs font-semibold px-4 py-2 flex items-center justify-between border-b border-amber-500/30 tracking-tight">
      <div className="flex-1 flex items-center justify-center gap-2 text-center">
        <Sparkles className="w-3.5 h-3.5 shrink-0 text-amber-900" />
        <span>
          50% OFF first order with code <strong className="font-bold underline decoration-amber-950/40">FROZEN50</strong> · Free Chilled Delivery above ₹399 · 100% Pure Vegetarian
        </span>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="p-1 hover:bg-amber-500/40 rounded transition-colors ml-2 shrink-0 cursor-pointer text-slate-900"
        aria-label="Dismiss banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
