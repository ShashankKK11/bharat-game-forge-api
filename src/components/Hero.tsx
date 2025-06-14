
import React from 'react';
import { Gamepad2, Sparkles, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
              <Gamepad2 className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
            Indic Game Generator
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
            Create Amazing Games in All 22 Indian Languages with AI Power
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Sparkles className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">AI-Powered Generation</h3>
              <p className="text-sm text-orange-100">Generate unique games instantly with advanced AI</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Globe className="w-8 h-8 text-green-300 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">22 Indian Languages</h3>
              <p className="text-sm text-orange-100">Support for all official Indian languages</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Ready-to-Use API</h3>
              <p className="text-sm text-orange-100">Integrate with your apps instantly</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Generating Games
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
