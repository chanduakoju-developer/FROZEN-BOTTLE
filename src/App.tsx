/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { PromoBanner } from './components/PromoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { SignatureStory } from './components/SignatureStory';
import { BobaSpotlight } from './components/BobaSpotlight';
import { StoreLocator } from './components/StoreLocator';
import { FranchiseSection } from './components/FranchiseSection';
import { CateringSection } from './components/CateringSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ProductCustomizerModal } from './components/ProductCustomizerModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { MenuItem } from './types';
import { MENU_ITEMS } from './data/menuData';

export default function App() {
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [placedOrder, setPlacedOrder] = useState<any | null>(null);

  // Boba and Jar items for spotlight
  const bobaItem = MENU_ITEMS.find((i) => i.id === 'boba-strawberry-matcha') || MENU_ITEMS[2];
  const jarItem = MENU_ITEMS.find((i) => i.id === 'jar-fudgy-brownie') || MENU_ITEMS[1];

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0b1329] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
        {/* Slim Promo Banner */}
        <PromoBanner />

        {/* 3-Zone Top Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Interactive Menu Section */}
          <MenuSection onOpenCustomizer={(item) => setCustomizingItem(item)} />

          {/* Boba Bar & Dessert Jars Spotlight */}
          <BobaSpotlight
            onOpenCustomizer={(item) => setCustomizingItem(item)}
            bobaItem={bobaItem}
            jarItem={jarItem}
          />

          {/* Signature 4 Pillars */}
          <SignatureStory />

          {/* Interactive Store Locator */}
          <StoreLocator />

          {/* Franchise Opportunities with Unit Economics Estimator */}
          <FranchiseSection />

          {/* Bulk Orders & Event Catering */}
          <CateringSection />

          {/* Customer Reviews & Social Proof */}
          <ReviewsSection />
        </main>

        {/* Brand Footer */}
        <Footer />

        {/* Product Customizer Modal */}
        <ProductCustomizerModal
          item={customizingItem}
          onClose={() => setCustomizingItem(null)}
        />

        {/* Slide-over Cart Drawer */}
        <CartDrawer onOrderPlaced={(order) => setPlacedOrder(order)} />

        {/* Live Order Confirmation & Tracking Modal */}
        <OrderSuccessModal
          order={placedOrder}
          onClose={() => setPlacedOrder(null)}
        />
      </div>
    </CartProvider>
  );
}
