import React from 'react';
import { Star, Heart } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 'rev-1',
      name: 'Ananya Deshmukh',
      city: 'Bengaluru',
      favorite: 'Nutella Belgian Hazelnut Shake',
      rating: 5,
      date: 'Visited Koramangala outlet',
      review: 'The thickshake actually stays thick all the way down! Best part is the vintage glass bottle you get to bring home. My study table has 5 of these repurposed as flower planters.'
    },
    {
      id: 'rev-2',
      name: 'Vikramaditya Singhania',
      city: 'Mumbai',
      favorite: 'Brownie Delight Gudbud Jar',
      rating: 5,
      date: 'Ordered via Instant Delivery',
      review: 'Ordered 6 jars for our team sprint win. Arrived chilled with zero melting. Every spoon has layers of real brownie and fudge rather than just whipped cream. Phenomenal consistency.'
    },
    {
      id: 'rev-3',
      name: 'Pooja Reddy',
      city: 'Hyderabad',
      favorite: 'Strawberry Matcha Boba Cooler',
      rating: 5,
      date: 'Visited Jubilee Hills cafe',
      review: 'Finding 100% vegetarian boba with actual freshly cooked brown sugar tapioca is so rare in India. The two-tone look is gorgeous and it’s not sickeningly sweet. 10/10.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0b1329] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <Heart className="w-3.5 h-3.5 fill-amber-400" />
            <span>Serving Memories</span>
            <span aria-hidden="true">·</span>
            <span>4.8★ Across 50,000+ Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            Loved Across 30+ Indian Cities
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Real stories from milkshake connoisseurs, midnight dessert cravers, and celebration hosts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0f1b3f] border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">{rev.name}</h4>
                    <span className="text-[11px] text-slate-400">{rev.city} · {rev.date}</span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-mono font-medium bg-[#142352] px-2 py-0.5 rounded border border-slate-800">
                    {rev.favorite}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
