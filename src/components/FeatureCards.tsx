
import React from 'react';
import { Zap, Brain, Clock, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Recognition',
    description: 'Advanced computer vision identifies ingredients from your photos with remarkable accuracy',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Instant Recipe Generation',
    description: 'Get personalized recipes in seconds based on your available ingredients',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Clock,
    title: 'Smart Time Estimation',
    description: 'Accurate cooking times and difficulty levels tailored to your skill level',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Heart,
    title: 'Dietary Preferences',
    description: 'Recipes adapted to your dietary needs, allergies, and taste preferences',
    gradient: 'from-blue-500 to-indigo-500'
  }
];

const FeatureCards = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
            Why Choose RecipeSnap?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of cooking with our cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              <div className="p-8 relative z-10">
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Animated background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
