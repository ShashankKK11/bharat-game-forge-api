
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Characters */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl animate-spin">🕉️</div>
        <div className="absolute top-20 right-20 text-6xl animate-bounce">🏛️</div>
        <div className="absolute bottom-20 left-1/4 text-7xl animate-pulse">⚔️</div>
        <div className="absolute bottom-10 right-1/3 text-5xl animate-spin">🪔</div>
        <div className="absolute top-1/2 left-1/2 text-9xl animate-pulse transform -translate-x-1/2 -translate-y-1/2">🎭</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="text-4xl animate-bounce">🎮</div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
              Indic Game Engine
            </h2>
            <div className="text-4xl animate-bounce">🎮</div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Preserving and celebrating India's rich cultural heritage through interactive gaming experiences
          </p>
        </div>

        {/* Character Showcase */}
        <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
          <div className="group cursor-pointer">
            <div className="text-5xl group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">
              🐒
            </div>
            <div className="text-center text-sm mt-2 opacity-70">Hanuman</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-5xl group-hover:scale-125 transition-transform duration-300 group-hover:animate-pulse">
              🏹
            </div>
            <div className="text-center text-sm mt-2 opacity-70">Arjuna</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-5xl group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">
              ⚔️
            </div>
            <div className="text-center text-sm mt-2 opacity-70">Durga</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-5xl group-hover:scale-125 transition-transform duration-300 group-hover:animate-spin">
              🕉️
            </div>
            <div className="text-center text-sm mt-2 opacity-70">Shiva</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-5xl group-hover:scale-125 transition-transform duration-300 group-hover:animate-pulse">
              🪈
            </div>
            <div className="text-center text-sm mt-2 opacity-70">Krishna</div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              🎯 Games
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Action Games</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Quiz Games</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Adventure Games</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Educational Games</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              🏛️ Culture
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Mythology</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Festivals</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Classical Arts</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Architecture</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              🛠️ Tools
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Game Generator</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Character Creator</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Story Builder</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              📞 Connect
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-4">Follow Our Journey</h3>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-purple-600 hover:border-purple-600">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-pink-600 hover:border-pink-600">
              <Instagram className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-red-600 hover:border-red-600">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-2xl">🇮🇳</span>
            <p className="text-gray-400">
              Made with ❤️ for preserving Indian culture through gaming
            </p>
            <span className="text-2xl">🇮🇳</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Indic Game Engine. Celebrating India's timeless heritage through interactive experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
