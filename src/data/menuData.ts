import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'shake-belgian-choc',
    name: 'Belgian Chocolate Hazelnut Thickshake',
    category: 'thickshakes',
    price: 249,
    description: 'Our iconic best-seller thickshake crafted with 100% Belgian cocoa, roasted hazelnut spread, and pure whole dairy in a collectible chilled glass bottle.',
    image: '/src/assets/images/thickshake_nutella_belgian_1793357059636.jpg',
    badge: 'Legendary Best-Seller',
    flavorProfile: 'chocolate',
    isBestSeller: true,
    calories: '420 kcal',
    servingSize: '350ml glass bottle'
  },
  {
    id: 'jar-fudgy-brownie',
    name: 'Brownie Delight Dessert Jar',
    category: 'dessert_jars',
    price: 269,
    description: 'Decadent multi-layered mason jar packed with fudgy brownie cubes, velvety chocolate mousse, vanilla bean gelato, and crunchy roasted almonds.',
    image: '/src/assets/images/dessert_jar_gudbud_sundae_1793357060035.jpg',
    badge: 'Chef Signature',
    flavorProfile: 'chocolate',
    isBestSeller: true,
    calories: '480 kcal',
    servingSize: '300g keepsake jar'
  },
  {
    id: 'boba-strawberry-matcha',
    name: 'Strawberry Matcha Boba Cooler',
    category: 'boba_bar',
    price: 229,
    description: 'Handcrafted Japanese Uji matcha poured over chilled berry compote and brown sugar chewy tapioca boba pearls. Bursting with fresh sweetness.',
    image: '/src/assets/images/boba_beverage_strawberry_matcha_1793357061731.jpg',
    badge: 'Trending Boba',
    flavorProfile: 'fruit',
    isBestSeller: true,
    calories: '290 kcal',
    servingSize: '400ml bottle'
  },
  {
    id: 'waffle-belgian-supreme',
    name: 'Crisp Belgian Chocolate Berry Waffle',
    category: 'waffles',
    price: 239,
    description: 'Golden, crispy-edged Belgian waffle topped with warm melted dark chocolate drizzle, ripe strawberry slices, and a luscious vanilla bean ice cream scoop.',
    image: '/src/assets/images/belgian_waffle_crisp_delight_1793357061612.jpg',
    badge: 'Warm & Crispy',
    flavorProfile: 'chocolate',
    isBestSeller: true,
    calories: '460 kcal',
    servingSize: '1 fresh waffle quad'
  },
  {
    id: 'shake-berry-blast',
    name: 'Wild Berry Blast Thickshake',
    category: 'thickshakes',
    price: 239,
    description: 'A creamy, velvety infusion of handpicked strawberries, blueberries, and cranberries blended into a thick milkshake that cools your palate.',
    image: '/src/assets/images/hero_frozen_bottle_desserts_1793357059216.jpg',
    badge: 'Refreshing Choice',
    flavorProfile: 'fruit',
    calories: '340 kcal',
    servingSize: '350ml glass bottle'
  },
  {
    id: 'shake-kesar-badam',
    name: 'Royal Kesar Pista Badam Shake',
    category: 'thickshakes',
    price: 259,
    description: 'Heritage royal thickshake infused with authentic Kashmiri saffron strands, crushed pistachios, and slivered California almonds.',
    image: '/src/assets/images/thickshake_nutella_belgian_1793357059636.jpg',
    badge: 'Traditional Royal',
    flavorProfile: 'nutty',
    calories: '410 kcal',
    servingSize: '350ml glass bottle'
  },
  {
    id: 'jar-gudbud-heritage',
    name: 'Original Gudbud Sundae Jar',
    category: 'dessert_jars',
    price: 289,
    description: 'The vintage coastal Indian dessert reinvented: 3 ice cream scoops, tutti frutti, crushed cashews, mixed fruit compote, and golden rose syrup in a jar.',
    image: '/src/assets/images/dessert_jar_gudbud_sundae_1793357060035.jpg',
    badge: 'Heritage Classic',
    flavorProfile: 'fruit',
    calories: '495 kcal',
    servingSize: '320g jar'
  },
  {
    id: 'boba-brown-sugar-tiger',
    name: 'Brown Sugar Tiger Milk Boba',
    category: 'boba_bar',
    price: 239,
    description: 'Rich Taiwanese brown sugar syrup flame-streaked along chilled organic milk with warm slow-cooked chewy black tapioca pearls.',
    image: '/src/assets/images/boba_beverage_strawberry_matcha_1793357061731.jpg',
    badge: 'Crowd Favorite',
    flavorProfile: 'classic',
    calories: '360 kcal',
    servingSize: '400ml bottle'
  },
  {
    id: 'waffle-nutella-crunch',
    name: 'Nutella Hazelnut Crunch Waffle',
    category: 'waffles',
    price: 249,
    description: 'Warm artisan waffle smothered with authentic Nutella spread, toasted hazelnut praline, and a side shot of warm chocolate sauce.',
    image: '/src/assets/images/belgian_waffle_crisp_delight_1793357061612.jpg',
    flavorProfile: 'nutty',
    calories: '510 kcal',
    servingSize: '1 waffle quad'
  },
  {
    id: 'scoop-roasted-almond',
    name: 'Roasted Almond Fudge Gelato Scoop',
    category: 'ice_cream_scoops',
    price: 139,
    description: 'Double scoop of slow-churned gourmet roasted almond ice cream drizzled with hot melted fudge in an edible waffle cup.',
    image: '/src/assets/images/hero_frozen_bottle_desserts_1793357059216.jpg',
    badge: '100% Vegetarian',
    flavorProfile: 'nutty',
    calories: '220 kcal',
    servingSize: '2 scoops'
  },
  {
    id: 'shake-filter-coffee',
    name: 'South Indian Filter Coffee Frappe',
    category: 'thickshakes',
    price: 219,
    description: 'A bold, aromatic decoction of freshly roasted Chikmagalur coffee beans whipped into an ultra-thick, creamy chilled milkshake.',
    image: '/src/assets/images/thickshake_nutella_belgian_1793357059636.jpg',
    flavorProfile: 'coffee',
    calories: '310 kcal',
    servingSize: '350ml glass bottle'
  },
  {
    id: 'savory-peri-peri-sandwich',
    name: 'Peri-Peri Cheesy Grilled Sandwich',
    category: 'savory_bites',
    price: 189,
    description: 'Crisp multigrain sourdough toasted with melted mozzarella, sweet corn, bell peppers, and fiery peri-peri spiced dressing. Perfect pairing with thickshakes.',
    image: '/src/assets/images/belgian_waffle_crisp_delight_1793357061612.jpg',
    badge: 'Quick Bite',
    flavorProfile: 'classic',
    calories: '380 kcal',
    servingSize: '2 grilled halves'
  }
];

export const CATEGORY_LABELS: { id: MenuItem['category'] | 'all'; label: string }[] = [
  { id: 'all', label: 'All Treats' },
  { id: 'thickshakes', label: 'Signature Thickshakes' },
  { id: 'dessert_jars', label: 'Gudbud & Dessert Jars' },
  { id: 'boba_bar', label: 'Boba Bar & Teas' },
  { id: 'waffles', label: 'Belgian Waffles' },
  { id: 'ice_cream_scoops', label: 'Gourmet Scoops' },
  { id: 'savory_bites', label: 'Savory Quick Bites' },
];

export const TOPPING_OPTIONS = [
  { name: 'Chewy Tapioca Boba Pearls', price: 40 },
  { name: 'Bursting Mango Popping Boba', price: 45 },
  { name: 'Roasted Almond Slivers', price: 35 },
  { name: 'Dark Chocolate Chips', price: 30 },
  { name: 'Extra Belgian Fudge Drizzle', price: 25 },
  { name: 'Crushed KitKat Chunks', price: 35 }
];
