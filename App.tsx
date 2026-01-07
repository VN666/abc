import React, { useState } from 'react';
import { ShoppingBag, MapPin, Search } from 'lucide-react';
import { MOCK_RESTAURANTS, CATEGORIES } from './constants';
import { Restaurant, CartItem, MenuItem, ViewState } from './types';
import { RestaurantList } from './components/RestaurantList';
import { RestaurantDetail } from './components/RestaurantDetail';
import { CartDrawer } from './components/CartDrawer';
import { AISearch } from './components/AISearch';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('1');

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setView('RESTAURANT_DETAIL');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setView('HOME');
    setSelectedRestaurant(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 pb-20 md:pb-0">
      
      {/* Navbar - Only show mostly on Home, simplified on Detail */}
      <nav className={`sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all ${view === 'RESTAURANT_DETAIL' ? 'hidden md:block' : 'block'}`}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-black text-orange-500 tracking-tight">TastyFlow</div>
            {view === 'HOME' && (
              <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-600">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>123 Main St, New York</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingBag className="w-6 h-6 text-gray-700" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {view === 'HOME' ? (
          <div className="max-w-7xl mx-auto px-4 py-6">
            
            {/* AI Search Section */}
            <AISearch />

            {/* Categories */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Categories</h2>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex flex-col items-center min-w-[80px] p-3 rounded-2xl transition-all ${
                      activeCategory === cat.id 
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-200 scale-105' 
                      : 'bg-white text-gray-600 shadow-sm hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-2xl mb-1">{cat.icon}</span>
                    <span className="text-sm font-medium">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Restaurant List */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Featured Restaurants</h2>
              <RestaurantList 
                restaurants={MOCK_RESTAURANTS} 
                onSelect={handleRestaurantSelect}
              />
            </div>
          </div>
        ) : (
          selectedRestaurant && (
            <RestaurantDetail 
              restaurant={selectedRestaurant} 
              onBack={handleBackToHome}
              onAddToCart={addToCart}
            />
          )
        )}
      </main>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        updateQuantity={updateCartQuantity}
      />

    </div>
  );
};

export default App;
