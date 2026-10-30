import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Tag, MapPin, Check, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  onOrderPlaced: (orderDetails: any) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOrderPlaced }) => {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    couponCode,
    applyCoupon,
    removeCoupon,
    tipAmount,
    setTipAmount,
    subtotal,
    discount,
    deliveryFee,
    taxAmount,
    grandTotal,
    selectedOutlet
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Delivery details form
  const [address, setAddress] = useState('Flat 402, Sunshine Residency, 100ft Road');
  const [phone, setPhone] = useState('+91 98765 12345');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    if (res.success) {
      setCouponFeedback({ type: 'success', text: res.message });
      setInputCoupon('');
    } else {
      setCouponFeedback({ type: 'error', text: res.message });
    }
  };

  const handleCheckout = () => {
    if (!address.trim() || !phone.trim() || items.length === 0) return;

    const orderDetails = {
      orderId: `FB-${Math.floor(100000 + Math.random() * 900000)}`,
      items: [...items],
      subtotal,
      discount,
      deliveryFee,
      taxAmount,
      grandTotal,
      outlet: selectedOutlet,
      address,
      phone,
      paymentMethod,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    onOrderPlaced(orderDetails);
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0f1b3f] border-l border-slate-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#0b1329]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold text-white font-display">Your Dessert Bag</h2>
              <span className="text-xs font-mono text-slate-400">({items.length} items)</span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Store info banner */}
          <div className="px-5 py-2.5 bg-[#142352] border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">{selectedOutlet}</span>
            </div>
            <a 
              href="#stores" 
              onClick={() => setIsCartOpen(false)}
              className="text-amber-400 font-semibold hover:underline shrink-0 ml-2"
            >
              Change
            </a>
          </div>

          {/* Body */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-800/60 flex items-center justify-center text-slate-500">
                <ShoppingBag className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Your Bag is Empty</h3>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                Explore our signature thickshakes, Gudbud sundaes, and chewy boba teas to fill your bag.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow cursor-pointer hover:bg-amber-300"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
              {/* Itemized List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="p-3 bg-[#121f47] border border-slate-800 rounded-xl space-y-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          className="w-14 h-14 rounded-lg object-cover shrink-0 bg-slate-900 border border-slate-700"
                        />
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-bold text-white font-display leading-snug">
                            {item.menuItem.name}
                          </h4>
                          <p className="text-[11px] text-amber-400 font-medium">
                            {item.customization.size}
                          </p>
                          {item.customization.toppings.length > 0 && (
                            <p className="text-[10px] text-slate-400">
                              + {item.customization.toppings.map(t => t.name).join(', ')}
                            </p>
                          )}
                          {item.customization.specialInstructions && (
                            <p className="text-[10px] text-slate-400 italic">
                              "{item.customization.specialInstructions}"
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-mono font-bold text-sm text-white tabular-nums">
                          ₹{item.totalUnitPrice * item.quantity}
                        </span>
                        <div className="text-[10px] text-slate-400 font-mono">
                          ₹{item.totalUnitPrice} each
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
                      <button
                        onClick={() => removeItem(item.cartItemId)}
                        className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Remove</span>
                      </button>

                      <div className="flex items-center border border-slate-700 rounded-lg bg-[#0b1329] p-0.5">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1 text-slate-300 hover:text-white"
                          aria-label="Decrease item quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-bold text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1 text-slate-300 hover:text-white"
                          aria-label="Increase item quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code Box */}
              <div className="bg-[#121f47] p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-amber-400" />
                    Promo Coupon
                  </span>
                  {couponCode && (
                    <button
                      onClick={removeCoupon}
                      className="text-rose-400 hover:underline text-[11px]"
                    >
                      Remove ({couponCode})
                    </button>
                  )}
                </div>

                {!couponCode ? (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      placeholder="Try FROZEN50 or SWEET20"
                      className="flex-1 bg-[#14224d] border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white uppercase placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                ) : (
                  <div className="p-2 bg-emerald-950/40 border border-emerald-800 rounded-lg flex items-center justify-between text-xs text-emerald-400">
                    <span className="font-semibold">{couponCode} applied</span>
                    <span className="font-mono font-bold">-₹{discount}</span>
                  </div>
                )}

                {couponFeedback && !couponCode && (
                  <p className={`text-[11px] ${couponFeedback.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {couponFeedback.text}
                  </p>
                )}
              </div>

              {/* Tip Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Tip Your Delivery Hero
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[10, 20, 30, 50].map((tip) => (
                    <button
                      key={tip}
                      type="button"
                      onClick={() => setTipAmount(tipAmount === tip ? 0 : tip)}
                      className={`py-1.5 rounded-lg border text-xs font-mono transition-colors cursor-pointer ${
                        tipAmount === tip
                          ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                          : 'bg-[#121f47] text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      ₹{tip}
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Details Form */}
              <div className="space-y-3 bg-[#121f47] p-3.5 rounded-xl border border-slate-800 text-xs">
                <span className="font-bold text-white block">Delivery Details</span>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Delivery Address *</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-[#14224d] border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Contact Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#14224d] border border-slate-700 rounded-lg px-2.5 py-1.5 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Payment Method</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'upi', label: 'UPI / GPay' },
                      { id: 'card', label: 'Card' },
                      { id: 'cod', label: 'Cash on Del.' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPaymentMethod(p.id as any)}
                        className={`py-1 rounded border text-[11px] transition-colors cursor-pointer ${
                          paymentMethod === p.id
                            ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                            : 'bg-[#14224d] text-slate-300 border-slate-700'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bill Details */}
              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span>Item Subtotal</span>
                  <span className="font-mono tabular-nums text-white">₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Coupon Discount</span>
                    <span className="font-mono tabular-nums">-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Partner Fee</span>
                  <span className="font-mono tabular-nums">
                    {deliveryFee === 0 ? <span className="text-emerald-400">FREE (Above ₹399)</span> : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>GST & Restaurant Taxes (5%)</span>
                  <span className="font-mono tabular-nums">₹{taxAmount}</span>
                </div>
                {tipAmount > 0 && (
                  <div className="flex justify-between text-slate-400">
                    <span>Delivery Tip</span>
                    <span className="font-mono tabular-nums">₹{tipAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-700">
                  <span>To Pay</span>
                  <span className="font-mono text-amber-400 text-lg tabular-nums">₹{grandTotal}</span>
                </div>
              </div>
            </div>
          )}

          {/* Footer Checkout Button */}
          {items.length > 0 && (
            <div className="p-4 bg-[#0a1226] border-t border-slate-800">
              <button
                onClick={handleCheckout}
                className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 active:scale-98 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-between shadow-xl cursor-pointer"
              >
                <div className="flex flex-col text-left">
                  <span className="text-xs uppercase tracking-wider text-slate-900 font-extrabold">Place Order</span>
                  <span className="text-[11px] text-slate-800 font-medium">Estimated 25–35 Mins</span>
                </div>
                <div className="flex items-center gap-1 text-base font-mono font-black">
                  <span>Pay ₹{grandTotal}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
