
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 mb-6">
            Indic Game Engine
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Preserving and celebrating India's rich cultural heritage through interactive gaming experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Games</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Action Games</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Quiz Games</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Adventure Games</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Educational Games</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Culture</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Mythology</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Festivals</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Classical Arts</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Architecture</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Game Generator</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Character Creator</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Story Builder</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

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

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            Made with love for preserving Indian culture through gaming
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Indic Game Engine. Celebrating India's timeless heritage through interactive experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
