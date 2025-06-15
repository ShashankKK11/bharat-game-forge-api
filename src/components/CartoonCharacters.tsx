
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CartoonCharacters = () => {
  const characters = [
    {
      id: 1,
      name: "Cartoon Hanuman",
      emoji: "🐒",
      cartoon: "🦸‍♂️",
      powers: ["Super Strength", "Flying", "Shape Shifting"],
      color: "from-orange-400 to-red-500",
      description: "The mighty monkey warrior with incredible powers"
    },
    {
      id: 2,
      name: "Princess Durga",
      emoji: "👸",
      cartoon: "👑",
      powers: ["Divine Weapons", "Fearless Combat", "Protection"],
      color: "from-red-400 to-pink-500",
      description: "The fierce goddess warrior protecting the innocent"
    },
    {
      id: 3,
      name: "Wizard Shiva",
      emoji: "🧙‍♂️",
      cartoon: "🔱",
      powers: ["Cosmic Dance", "Destruction", "Transformation"],
      color: "from-purple-400 to-blue-500",
      description: "The cosmic dancer controlling creation and destruction"
    },
    {
      id: 4,
      name: "Noble Arjuna",
      emoji: "🏹",
      cartoon: "🎯",
      powers: ["Perfect Aim", "Divine Weapons", "Strategic Mind"],
      color: "from-blue-400 to-cyan-500",
      description: "The greatest archer with unmatched precision"
    },
    {
      id: 5,
      name: "Wise Ganesha",
      emoji: "🐘",
      cartoon: "🧠",
      powers: ["Wisdom", "Obstacle Removal", "Good Fortune"],
      color: "from-green-400 to-teal-500",
      description: "The remover of obstacles and patron of arts"
    },
    {
      id: 6,
      name: "Musical Krishna",
      emoji: "🧙‍♂️",
      cartoon: "🪈",
      powers: ["Divine Music", "Charm", "Wisdom"],
      color: "from-indigo-400 to-purple-500",
      description: "The divine musician spreading joy and wisdom"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Floating Character Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl animate-bounce">🦸‍♂️</div>
        <div className="absolute top-1/4 right-10 text-8xl animate-pulse">👸</div>
        <div className="absolute bottom-1/3 left-1/4 text-7xl animate-spin">🧙‍♂️</div>
        <div className="absolute bottom-10 right-1/3 text-6xl animate-bounce">🐘</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="text-5xl animate-bounce">🦸‍♂️</div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Meet Our Cartoon Heroes
            </h2>
            <div className="text-5xl animate-bounce">👸</div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the amazing powers and stories of our beloved cartoon characters from Indian mythology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <Card key={character.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden">
              <div className={`bg-gradient-to-br ${character.color} p-6 text-white relative`}>
                <div className="absolute top-2 right-2 text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                  {character.cartoon}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-6xl group-hover:animate-bounce filter drop-shadow-lg">
                      {character.emoji}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{character.name}</h3>
                      <div className="text-4xl opacity-70">{character.cartoon}</div>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{character.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Special Powers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.powers.map((power, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        ⚡ {power}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Character Showcase */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-6">Choose Your Adventure Companion!</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {characters.slice(0, 4).map((character) => (
              <div key={character.id} className="group cursor-pointer">
                <div className="text-7xl group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce filter drop-shadow-lg">
                  {character.emoji}
                </div>
                <div className="text-center mt-2">
                  <div className="text-2xl">{character.cartoon}</div>
                  <div className="text-sm text-gray-600">{character.name.split(' ')[1]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartoonCharacters;
