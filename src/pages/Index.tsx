
import React from 'react';
import Hero from '@/components/Hero';
import ImageUpload from '@/components/ImageUpload';
import FeatureCards from '@/components/FeatureCards';
import RecipeGrid from '@/components/RecipeGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-emerald-50">
      <Hero />
      <ImageUpload />
      <FeatureCards />
      <RecipeGrid />
    </div>
  );
};

export default Index;
