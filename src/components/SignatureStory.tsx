import React from 'react';
import { Wine, ShieldCheck, Layers, Snowflake } from 'lucide-react';

export const SignatureStory: React.FC = () => {
  const pillars = [
    {
      icon: Wine,
      title: 'Iconic Keepsake Bottles',
      desc: 'Every thickshake is served in our heavyweight branded glass bottle. Reusable, eco-conscious, and yours to keep forever.'
    },
    {
      icon: ShieldCheck,
      title: '100% Pure Vegetarian',
      desc: 'All our desserts, ice cream scoops, and waffles are strictly vegetarian, gelatin-free, and prepared in dedicated clean spaces.'
    },
    {
      icon: Layers,
      title: 'Layered Gudbud Jars',
      desc: 'Our signature dessert jars are layered by hand with brownie crumbs, berry coulis, Belgian fudge, and velvety ice cream.'
    },
    {
      icon: Snowflake,
      title: 'Chilled Insulated Delivery',
      desc: 'Shipped in custom thermal chill-packs so your milkshake arrives thick, frosty, and spoon-ready at your doorstep.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0d1633] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <span>Our Craft & Promise</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2017</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            The Frozen Bottle Standard
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            We started with a simple belief: milkshakes shouldn't be runny drinks, and sundaes shouldn't be ordinary. Here is why over 5 million dessert lovers celebrate with Frozen Bottle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#121f47] border border-slate-800/80 rounded-2xl p-6 space-y-3 relative hover:border-slate-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs text-slate-400 font-mono">0{idx + 1}.</div>
                <h3 className="text-base font-bold text-white font-display">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
