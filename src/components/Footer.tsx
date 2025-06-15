
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Mail, Heart, Globe, Gamepad2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Indic Game Generator</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering creators to build culturally rich games in all Indian languages. 
              Preserve and celebrate India's diverse heritage through interactive gaming experiences.
            </p>
            <div className="flex gap-4">
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-white hover:text-gray-900">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Game Generator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Featured Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Language Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cultural Themes</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developer Tools</a></li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <Card className="mt-12 bg-white/10 backdrop-blur-sm border-white/20">
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400">22</div>
                <div className="text-sm text-gray-300">Languages Supported</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">10K+</div>
                <div className="text-sm text-gray-300">Games Generated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-300">Cultural Themes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">50K+</div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for Indian Culture</span>
              <Globe className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Indic Game Generator. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
