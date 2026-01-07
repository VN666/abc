import React from 'react';
import { Star, Clock, DollarSign } from 'lucide-react';
import { Restaurant } from '../types';

interface RestaurantListProps {
  restaurants: Restaurant[];
  onSelect: (r: Restaurant) => void;
}

export const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map((restaurant) => (
        <div 
          key={restaurant.id} 
          onClick={() => onSelect(restaurant)}
          className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src={restaurant.image} 
              alt={restaurant.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-bold shadow-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              {restaurant.rating}
            </div>
            {restaurant.deliveryFee === 0 && (
              <div className="absolute bottom-3 left-3 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                Free Delivery
              </div>
            )}
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
              {restaurant.name}
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-3">
              {restaurant.tags.map(tag => (
                <span key={tag} className="bg-gray-100 px-2 py-0.5 rounded-md text-xs font-medium text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {restaurant.deliveryTime}
              </div>
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4" />
                {restaurant.deliveryFee === 0 ? 'Free' : `$${restaurant.deliveryFee.toFixed(2)}`} Delivery
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
