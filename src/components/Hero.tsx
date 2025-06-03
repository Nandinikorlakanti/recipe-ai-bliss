
import React from 'react';
import { Camera, Sparkles, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-10 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <ChefHat className="relative w-20 h-20 text-emerald-600 mx-auto" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-orange-600 bg-clip-text text-transparent mb-6 animate-fade-in">
          RecipeSnap
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your ingredients into culinary masterpieces with AI-powered recipe generation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Camera className="mr-2" />
            Snap Your Ingredients
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="mr-2" />
            Explore Recipes
          </Button>
        </div>

        {/* Floating ingredient icons */}
        <div className="absolute top-20 left-10 animate-bounce delay-300">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shadow-lg">
            🍅
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-700">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
            🥬
          </div>
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-1000">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg">
            🧄
          </div>
        </div>
        <div className="absolute bottom-40 right-10 animate-bounce delay-500">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
            🍆
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
