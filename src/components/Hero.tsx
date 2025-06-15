
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gamepad2, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 mb-6">
          Indic Game Engine
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Create immersive games celebrating India's rich cultural heritage. 
          From mythological adventures to cultural quests - bring ancient wisdom to modern gaming!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <h3 className="font-semibold text-lg mb-2">Mythological Adventures</h3>
            <p className="text-gray-600 text-sm">Epic quests with legendary heroes</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <h3 className="font-semibold text-lg mb-2">Cultural Learning</h3>
            <p className="text-gray-600 text-sm">Interactive cultural education</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <h3 className="font-semibold text-lg mb-2">Action Gameplay</h3>
            <p className="text-gray-600 text-sm">Fast-paced combat experiences</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Gamepad2 className="w-6 h-6 mr-2" />
            Start Creating Games
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Sparkles className="w-6 h-6 mr-2" />
            Explore Games
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">50+</div>
            <div className="text-sm text-gray-600">Game Templates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">100+</div>
            <div className="text-sm text-gray-600">Heroes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">24/7</div>
            <div className="text-sm text-gray-600">Instant Play</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">Free</div>
            <div className="text-sm text-gray-600">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
