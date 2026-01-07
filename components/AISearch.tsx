import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getFoodRecommendation } from '../services/geminiService';

export const AISearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    const result = await getFoodRecommendation(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="w-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white shadow-xl mb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
        <Sparkles className="w-48 h-48" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-yellow-300" />
          Can't decide? Ask AI!
        </h2>
        <p className="text-orange-100 mb-6 text-sm md:text-base">
          Tell us your mood (e.g., "I want something spicy and cheap" or "Healthy lunch for a workout").
        </p>

        <form onSubmit={handleSearch} className="relative flex items-center mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you craving today?"
            className="w-full py-4 px-6 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-300/50 shadow-lg pr-14"
          />
          <button 
            type="button" 
            onClick={handleSearch}
            disabled={loading}
            className="absolute right-2 p-2 bg-orange-600 rounded-full hover:bg-orange-700 transition-colors disabled:bg-gray-300"
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
          </button>
        </form>

        {response && (
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <p className="text-white font-medium leading-relaxed">
              "{response}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
