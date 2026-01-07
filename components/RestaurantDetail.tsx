import React from 'react';
import { ArrowLeft, Star, Clock, Info, Plus } from 'lucide-react';
import { Restaurant, MenuItem } from '../types';

interface RestaurantDetailProps {
  restaurant: Restaurant;
  onBack: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ restaurant, onBack, onAddToCart }) => {
  return (
    <div className="animate-in slide-in-from-right duration-300">
      {/* Header Image */}
      <div className="relative h-64 md:h-80 w-full">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
          <div className="flex items-center gap-4 text-sm md:text-base font-medium">
            <span className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg backdrop-blur-md">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              {restaurant.rating}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {restaurant.deliveryTime}
            </span>
            <span>•</span>
            <span>
              {restaurant.tags.join(', ')}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          Menu <Info className="w-4 h-4 text-gray-400" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurant.menu.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 hover:border-orange-200 transition-colors">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-lg text-orange-600">${item.price.toFixed(2)}</span>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{item.calories} kcal</span>
                  </div>
                </div>
              </div>
              <div className="relative w-32 h-32 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover rounded-xl"
                />
                <button 
                  onClick={() => onAddToCart(item)}
                  className="absolute -bottom-3 -right-3 p-2 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 active:scale-95 transition-all"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
