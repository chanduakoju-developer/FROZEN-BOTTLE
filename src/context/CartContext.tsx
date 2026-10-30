import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem, CartCustomization } from '../types';

interface CartContextType {
  items: CartItem[];
  addItem: (menuItem: MenuItem, customization: CartCustomization, quantity: number) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  couponCode: string;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  tipAmount: number;
  setTipAmount: (tip: number) => void;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  taxAmount: number;
  grandTotal: number;
  totalItemCount: number;
  selectedOutlet: string;
  setSelectedOutlet: (outlet: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('fb_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState<string>('');
  const [tipAmount, setTipAmount] = useState<number>(20);
  const [selectedOutlet, setSelectedOutlet] = useState<string>('Frozen Bottle - Koramangala 5th Block');

  useEffect(() => {
    try {
      localStorage.setItem('fb_cart', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const addItem = (menuItem: MenuItem, customization: CartCustomization, quantity: number) => {
    const toppingsExtra = customization.toppings.reduce((sum, t) => sum + t.price, 0);
    const totalUnitPrice = menuItem.price + customization.sizeExtraPrice + toppingsExtra;

    // Check if identical item with same toppings exists
    const toppingsKey = customization.toppings.map(t => t.name).sort().join('|');
    const signature = `${menuItem.id}-${customization.size}-${toppingsKey}`;

    setItems(prevItems => {
      const existingIndex = prevItems.findIndex(i => {
        const itemToppingsKey = i.customization.toppings.map(t => t.name).sort().join('|');
        const itemSig = `${i.menuItem.id}-${i.customization.size}-${itemToppingsKey}`;
        return itemSig === signature;
      });

      if (existingIndex > -1) {
        const next = [...prevItems];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }

      return [
        ...prevItems,
        {
          cartItemId: `cart-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          menuItem,
          customization,
          quantity,
          totalUnitPrice
        }
      ];
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(cartItemId);
      return;
    }
    setItems(prev => prev.map(item => item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item));
  };

  const removeItem = (cartItemId: string) => {
    setItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setItems([]);
    setCouponCode('');
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'FROZEN50') {
      setCouponCode('FROZEN50');
      return { success: true, message: 'FROZEN50 applied! 50% discount up to ₹150.' };
    } else if (clean === 'SWEET20') {
      setCouponCode('SWEET20');
      return { success: true, message: 'SWEET20 applied! Flat ₹20 off.' };
    }
    return { success: false, message: 'Invalid promo code. Try FROZEN50 or SWEET20' };
  };

  const removeCoupon = () => {
    setCouponCode('');
  };

  const subtotal = items.reduce((sum, item) => sum + (item.totalUnitPrice * item.quantity), 0);

  let discount = 0;
  if (couponCode === 'FROZEN50') {
    discount = Math.min(Math.round(subtotal * 0.5), 150);
  } else if (couponCode === 'SWEET20') {
    discount = Math.min(20, subtotal);
  }

  const deliveryFee = subtotal === 0 ? 0 : (subtotal >= 399 ? 0 : 40);
  const taxableAmount = Math.max(0, subtotal - discount);
  const taxAmount = Math.round(taxableAmount * 0.05); // 5% GST
  const grandTotal = subtotal === 0 ? 0 : taxableAmount + deliveryFee + taxAmount + tipAmount;

  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
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
        totalItemCount,
        selectedOutlet,
        setSelectedOutlet
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
