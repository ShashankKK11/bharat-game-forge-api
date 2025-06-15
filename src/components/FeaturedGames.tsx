
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Star } from 'lucide-react';

const FeaturedGames = () => {
  const featuredGames = [
    {
      id: 1,
      title: "Ramayana Quest",
      character: "🏹",
      theme: "Epic Adventure",
      description: "Join Rama on his legendary journey to rescue Sita",
      genre: "RPG",
      rating: 4.8,
      players: "1.2K",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Hanuman's Flight",
      character: "🐒",
      theme: "Action Adventure", 
      description: "Soar through the skies with the mighty Hanuman",
      genre: "Action",
      rating: 4.9,
      players: "856",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 3,
      title: "Durga's Conquest",
      character: "⚔️",
      theme: "Warrior Battle",
      description: "Battle demons alongside the fierce goddess Durga",
      genre: "Combat",
      rating: 4.7,
      players: "2.1K",
      color: "from-red-500 to-pink-600"
    },
    {
      id: 4,
      title: "Krishna's Wisdom",
      character: "🪈",
      theme: "Philosophical Quest",
      description: "Learn ancient wisdom through interactive stories",
      genre: "Educational",
      rating: 4.6,
      players: "945",
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 5,
      title: "Shiva's Dance",
      character: "🕉️",
      theme: "Cosmic Adventure",
      description: "Experience the cosmic dance of creation and destruction",
      genre: "Rhythm",
      rating: 4.8,
      players: "1.5K",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 6,
      title: "Temple Builder",
      character: "🏛️",
      theme: "Architecture",
      description: "Design and build magnificent Indian temples",
      genre: "Strategy",
      rating: 4.5,
      players: "678",
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 animate-spin">⚡</div>
      <div className="absolute top-20 right-20 text-5xl opacity-10 animate-bounce">🎭</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-10 animate-pulse">🪔</div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="text-5xl animate-bounce">🌟</div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Featured Games
            </h2>
            <div className="text-5xl animate-bounce">🌟</div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular cultural games, each featuring unique characters and immersive storytelling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game) => (
            <Card key={game.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden">
              {/* Game Header with Character */}
              <div className={`bg-gradient-to-r ${game.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-2 right-2 text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                  {game.character}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-4xl group-hover:animate-bounce">
                      {game.character}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{game.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {game.theme}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {game.description}
                </p>

                {/* Game Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">{game.rating}</span>
                  </div>
                  <Badge variant="outline">{game.genre}</Badge>
                  <div className="text-sm text-gray-500">
                    👥 {game.players} players
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                    <Play className="w-4 h-4 mr-2" />
                    Play Now
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-3xl animate-bounce">🎮</span>
              <span className="text-3xl animate-pulse">⚡</span>
              <span className="text-3xl animate-bounce">🚀</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Own?</h3>
            <p className="text-gray-600 mb-6">
              Use our game generator to create custom cultural games with your favorite characters and themes
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              🎨 Start Creating
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
