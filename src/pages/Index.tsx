
import React from 'react';
import Hero from '@/components/Hero';
import GameGenerator from '@/components/GameGenerator';
import LanguageSelector from '@/components/LanguageSelector';
import ApiDocs from '@/components/ApiDocs';
import FeaturedGames from '@/components/FeaturedGames';
import CartoonCharacters from '@/components/CartoonCharacters';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Hero />
      <CartoonCharacters />
      <LanguageSelector />
      <GameGenerator />
      <FeaturedGames />
      <ApiDocs />
      <Footer />
    </div>
  );
};

export default Index;
