
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CartoonCharacters = () => {
  const characters = [
    {
      id: 1,
      name: "Hanuman",
      powers: ["Super Strength", "Flying", "Shape Shifting"],
      color: "from-orange-400 to-red-500",
      description: "The mighty monkey warrior with incredible powers"
    },
    {
      id: 2,
      name: "Durga",
      powers: ["Divine Weapons", "Fearless Combat", "Protection"],
      color: "from-red-400 to-pink-500",
      description: "The fierce goddess warrior protecting the innocent"
    },
    {
      id: 3,
      name: "Shiva",
      powers: ["Cosmic Dance", "Destruction", "Transformation"],
      color: "from-purple-400 to-blue-500",
      description: "The cosmic dancer controlling creation and destruction"
    },
    {
      id: 4,
      name: "Arjuna",
      powers: ["Perfect Aim", "Divine Weapons", "Strategic Mind"],
      color: "from-blue-400 to-cyan-500",
      description: "The greatest archer with unmatched precision"
    },
    {
      id: 5,
      name: "Ganesha",
      powers: ["Wisdom", "Obstacle Removal", "Good Fortune"],
      color: "from-green-400 to-teal-500",
      description: "The remover of obstacles and patron of arts"
    },
    {
      id: 6,
      name: "Krishna",
      powers: ["Divine Music", "Charm", "Wisdom"],
      color: "from-indigo-400 to-purple-500",
      description: "The divine musician spreading joy and wisdom"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-6">
            Meet Our Heroes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the amazing powers and stories of our beloved characters from Indian mythology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <Card key={character.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden">
              <div className={`bg-gradient-to-br ${character.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold">{character.name}</h3>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{character.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Special Powers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.powers.map((power, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {power}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-6">Choose Your Adventure Companion!</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {characters.slice(0, 4).map((character) => (
              <div key={character.id} className="text-center">
                <div className="text-lg font-semibold">{character.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartoonCharacters;
