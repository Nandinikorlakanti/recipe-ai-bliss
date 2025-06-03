
import React from 'react';
import { Clock, Users, Star, Bookmark } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const sampleRecipes = [
  {
    id: 1,
    title: 'Mediterranean Veggie Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    cookTime: 25,
    servings: 4,
    difficulty: 'Easy',
    rating: 4.8,
    description: 'Fresh vegetables with herbs and olive oil',
    ingredients: ['Tomatoes', 'Lettuce', 'Onions', 'Bell Peppers']
  },
  {
    id: 2,
    title: 'Roasted Vegetable Pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop',
    cookTime: 35,
    servings: 6,
    difficulty: 'Medium',
    rating: 4.6,
    description: 'Hearty pasta with seasonal roasted vegetables',
    ingredients: ['Carrots', 'Bell Peppers', 'Onions']
  },
  {
    id: 3,
    title: 'Fresh Garden Salad',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    rating: 4.9,
    description: 'Crisp lettuce with fresh vegetables and vinaigrette',
    ingredients: ['Lettuce', 'Tomatoes', 'Carrots']
  },
  {
    id: 4,
    title: 'Stuffed Bell Peppers',
    image: 'https://images.unsplash.com/photo-1606490897013-38d5c27b3d0a?w=400&h=300&fit=crop',
    cookTime: 45,
    servings: 4,
    difficulty: 'Medium',
    rating: 4.7,
    description: 'Bell peppers stuffed with savory rice and vegetables',
    ingredients: ['Bell Peppers', 'Onions', 'Tomatoes']
  }
];

const RecipeGrid = () => {
  return (
    <section className="py-20 px-6 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
            Recipe Suggestions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based on your detected ingredients, here are some delicious recipes you can make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sampleRecipes.map((recipe, index) => (
            <Card 
              key={recipe.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white text-gray-600 rounded-full p-2">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    recipe.difficulty === 'Easy' 
                      ? 'bg-green-100 text-green-700' 
                      : recipe.difficulty === 'Medium'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {recipe.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {recipe.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {recipe.cookTime}min
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {recipe.servings} servings
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                    {recipe.rating}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Main ingredients:</p>
                  <div className="flex flex-wrap gap-1">
                    {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs"
                      >
                        {ingredient}
                      </span>
                    ))}
                    {recipe.ingredients.length > 3 && (
                      <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded-full text-xs">
                        +{recipe.ingredients.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Recipe
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeGrid;
