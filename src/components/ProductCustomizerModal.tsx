import React, { useState } from 'react';
import { X, Plus, Minus, Check } from 'lucide-react';
import { MenuItem, CartCustomization } from '../types';
import { TOPPING_OPTIONS } from '../data/menuData';
import { useCart } from '../context/CartContext';

interface ProductCustomizerModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ProductCustomizerModal: React.FC<ProductCustomizerModalProps> = ({ item, onClose }) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<'Regular (350ml)' | 'Monster Bottle (500ml)'>('Regular (350ml)');
  const [selectedToppings, setSelectedToppings] = useState<Array<{ name: string; price: number }>>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  const sizeExtra = selectedSize === 'Monster Bottle (500ml)' ? 70 : 0;
  const toppingsTotal = selectedToppings.reduce((sum, t) => sum + t.price, 0);
  const unitPrice = item.price + sizeExtra + toppingsTotal;
  const totalPrice = unitPrice * quantity;

  const toggleTopping = (topping: { name: string; price: number }) => {
    if (selectedToppings.some(t => t.name === topping.name)) {
      setSelectedToppings(selectedToppings.filter(t => t.name !== topping.name));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const handleAddToCart = () => {
    const customization: CartCustomization = {
      size: selectedSize,
      sizeExtraPrice: sizeExtra,
      toppings: selectedToppings,
      specialInstructions: specialInstructions.trim() ? specialInstructions : undefined,
    };
    addItem(item, customization, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#0f1b3f] border border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image & close */}
        <div className="relative h-44 bg-slate-900 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b3f] via-[#0f1b3f]/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white rounded-full transition-colors cursor-pointer border border-slate-700"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 right-4">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>100% Veg</span>
              <span aria-hidden="true">·</span>
              <span>{item.servingSize || 'Freshly Prepared'}</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display leading-tight">{item.name}</h3>
          </div>
        </div>

        {/* Scrollable Customization Body */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1 text-sm text-slate-200">
          <p className="text-slate-300 text-xs leading-relaxed">{item.description}</p>

          {/* Size Choice */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              1. Choose Size
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedSize('Regular (350ml)')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedSize === 'Regular (350ml)'
                    ? 'border-amber-400 bg-amber-400/10 text-white'
                    : 'border-slate-800 bg-[#14224d] text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm">Regular (350ml)</span>
                  {selectedSize === 'Regular (350ml)' && <Check className="w-4 h-4 text-amber-400" />}
                </div>
                <span className="text-xs text-slate-400 font-mono">Included in base</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedSize('Monster Bottle (500ml)')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedSize === 'Monster Bottle (500ml)'
                    ? 'border-amber-400 bg-amber-400/10 text-white'
                    : 'border-slate-800 bg-[#14224d] text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm">Monster (500ml)</span>
                  {selectedSize === 'Monster Bottle (500ml)' && <Check className="w-4 h-4 text-amber-400" />}
                </div>
                <span className="text-xs text-amber-400 font-mono font-medium">+₹70</span>
              </button>
            </div>
          </div>

          {/* Add-ons & Toppings */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                2. Extra Add-ons & Boba
              </label>
              <span className="text-xs text-slate-400">Optional</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TOPPING_OPTIONS.map((topping) => {
                const isSelected = selectedToppings.some(t => t.name === topping.name);
                return (
                  <button
                    key={topping.name}
                    type="button"
                    onClick={() => toggleTopping(topping)}
                    className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-colors cursor-pointer text-xs ${
                      isSelected
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-slate-800 bg-[#121f47] text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isSelected ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-600'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="truncate max-w-[130px]">{topping.name}</span>
                    </div>
                    <span className="font-mono text-amber-400 shrink-0 font-medium">+₹{topping.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Special Preparation Notes
            </label>
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g., Less sweet, extra chilled straw..."
              className="w-full bg-[#14224d] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Footer with Quantity & Add Button */}
        <div className="p-4 bg-[#0a1226] border-t border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center border border-slate-700 rounded-lg bg-[#14224d] p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1 text-slate-300 hover:text-white rounded transition-colors cursor-pointer"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-3 font-mono font-bold text-sm text-white">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1 text-slate-300 hover:text-white rounded transition-colors cursor-pointer"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 py-3 px-4 bg-amber-400 hover:bg-amber-300 active:scale-98 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-between shadow-lg cursor-pointer"
          >
            <span>Add to Order Bag</span>
            <span className="font-mono text-base">₹{totalPrice}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
