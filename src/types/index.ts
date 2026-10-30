export type MenuCategory = 
  | 'all'
  | 'thickshakes'
  | 'dessert_jars'
  | 'boba_bar'
  | 'waffles'
  | 'ice_cream_scoops'
  | 'savory_bites';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  image: string;
  badge?: string;
  flavorProfile: 'chocolate' | 'fruit' | 'coffee' | 'nutty' | 'classic';
  isBestSeller?: boolean;
  calories?: string;
  servingSize?: string;
}

export interface CartCustomization {
  size: 'Regular (350ml)' | 'Monster Bottle (500ml)';
  sizeExtraPrice: number;
  toppings: Array<{ name: string; price: number }>;
  specialInstructions?: string;
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  customization: CartCustomization;
  quantity: number;
  totalUnitPrice: number;
}

export interface StoreOutlet {
  id: string;
  name: string;
  city: string;
  area: string;
  address: string;
  timing: string;
  phone: string;
  hasBobaBar: boolean;
  hasDineIn: boolean;
  hasDriveThru: boolean;
  distanceKm?: number;
}

export interface FranchiseInquiry {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  format: 'kiosk' | 'cafe' | 'drive_thru';
  budgetTier: string;
  message?: string;
}
