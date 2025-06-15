import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gamepad2, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100">
        {/* Floating Cultural Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-70">🏛️</div>
        <div className="absolute top-32 right-20 text-5xl animate-pulse opacity-60">🎭</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-spin opacity-50">🕉️</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-bounce opacity-70">🪔</div>
        <div className="absolute top-1/2 left-1/4 text-3xl animate-pulse opacity-40">📿</div>
        <div className="absolute top-1/3 right-1/3 text-4xl animate-spin opacity-50">⚔️</div>
        
        {/* Cartoon Characters Floating */}
        <div className="absolute top-10 left-1/3 text-7xl animate-bounce opacity-60">🐵</div>
        <div className="absolute bottom-32 right-1/4 text-6xl animate-pulse opacity-70">🦸‍♂️</div>
        <div className="absolute top-40 right-10 text-5xl animate-spin opacity-50">🧙‍♂️</div>
        <div className="absolute bottom-10 left-1/3 text-6xl animate-bounce opacity-60">👸</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Cartoon Game Characters Row */}
        <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
          {/* Hanuman Character */}
          <div className="relative group">
            <div className="text-8xl animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer filter drop-shadow-lg">
              🐒
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              Hanuman 🦸‍♂️
            </div>
          </div>

          {/* Arjuna Character */}
          <div className="relative group">
            <div className="text-8xl animate-pulse hover:scale-110 transition-transform duration-300 cursor-pointer filter drop-shadow-lg">
              🏹
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              Arjuna 🎯
            </div>
          </div>

          {/* Durga Character */}
          <div className="relative group">
            <div className="text-8xl animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer filter drop-shadow-lg">
              👸
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              Durga 👑
            </div>
          </div>

          {/* Shiva Character */}
          <div className="relative group">
            <div className="text-8xl animate-spin hover:scale-110 transition-transform duration-300 cursor-pointer filter drop-shadow-lg">
              🧙‍♂️
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              Shiva 🔱
            </div>
          </div>

          {/* Krishna Character */}
          <div className="relative group">
            <div className="text-8xl animate-pulse hover:scale-110 transition-transform duration-300 cursor-pointer filter drop-shadow-lg">
              🧙‍♂️
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              Krishna 🪈
            </div>
          </div>

          {/* Ganesha Character */}
          <div className="relative group">
            <div className="text-8xl animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer filter drop-shadow-lg">
              🐘
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              Ganesha 🙏
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 mb-6 animate-fade-in">
          🎮 Indic Game Engine
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Create immersive games celebrating India's rich cultural heritage. 
          From mythological adventures to cultural quests - bring ancient wisdom to modern gaming!
        </p>

        {/* Feature Highlights with Cartoon Graphics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-3">🦸‍♂️</div>
            <h3 className="font-semibold text-lg mb-2">Mythological Adventures</h3>
            <p className="text-gray-600 text-sm">Epic quests with legendary cartoon heroes</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-3">🎭</div>
            <h3 className="font-semibold text-lg mb-2">Cultural Learning</h3>
            <p className="text-gray-600 text-sm">Interactive cultural education with fun characters</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-semibold text-lg mb-2">Action Gameplay</h3>
            <p className="text-gray-600 text-sm">Fast-paced combat with cartoon warriors</p>
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

        {/* Stats Section with Cartoon Graphics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl mb-2">🎮</div>
            <div className="text-2xl font-bold text-orange-600">50+</div>
            <div className="text-sm text-gray-600">Game Templates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🦸‍♂️</div>
            <div className="text-2xl font-bold text-red-600">100+</div>
            <div className="text-sm text-gray-600">Cartoon Heroes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-purple-600">24/7</div>
            <div className="text-sm text-gray-600">Instant Play</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌟</div>
            <div className="text-2xl font-bold text-green-600">Free</div>
            <div className="text-sm text-gray-600">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
