
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translateText, translateGameContent } from '@/utils/languageTranslation';

const FeaturedGames = () => {
  const { selectedLanguage } = useLanguage();
  
  const featuredGames = [
    {
      title: "Rama's Journey",
      genre: "Adventure",
      language: "Hindi",
      theme: "Ramayana",
      rating: 4.8,
      plays: "10K+",
      description: "Follow Lord Rama's epic journey through forests and kingdoms",
      image: "🏹"
    },
    {
      title: "Bharata Trivia",
      genre: "Quiz",
      language: "Bengali",
      theme: "Indian History",
      rating: 4.6,
      plays: "8K+",
      description: "Test your knowledge of Indian history and culture",
      image: "📚"
    },
    {
      title: "Festival Puzzle",
      genre: "Puzzle",
      language: "Tamil",
      theme: "Indian Festivals",
      rating: 4.7,
      plays: "12K+",
      description: "Solve puzzles themed around colorful Indian festivals",
      image: "🎭"
    },
    {
      title: "Mahabharata Chess",
      genre: "Strategy",
      language: "Telugu",
      theme: "Mahabharata",
      rating: 4.9,
      plays: "15K+",
      description: "Strategic warfare game inspired by the great epic",
      image: "♟️"
    },
    {
      title: "Temple Runner",
      genre: "Action",
      language: "Marathi",
      theme: "Ancient Temples",
      rating: 4.5,
      plays: "20K+",
      description: "Run through mystical temple corridors collecting gems",
      image: "🏛️"
    },
    {
      title: "Raga Memory",
      genre: "Educational",
      language: "Gujarati",
      theme: "Classical Music",
      rating: 4.6,
      plays: "6K+",
      description: "Learn and memorize classical Indian ragas",
      image: "🎵"
    }
  ];

  // Translate featured games based on selected language
  const translatedFeaturedGames = featuredGames.map(game => translateGameContent(game, selectedLanguage));

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Games</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Popular games created with our Indic Game Generator
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {translatedFeaturedGames.map((game, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white group hover:scale-105">
              <CardHeader className="pb-4">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {game.image}
                  </div>
                  <CardTitle className="text-xl text-gray-800 mb-2">{game.title}</CardTitle>
                  <div className="flex justify-center gap-2 mb-3">
                    <Badge variant="secondary">{translateText(game.genre.toLowerCase(), selectedLanguage)}</Badge>
                    <Badge variant="outline">{game.language}</Badge>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{game.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="w-4 h-4" />
                      <span>{game.plays}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                  {game.description}
                </p>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                    <Play className="w-4 h-4 mr-2" />
                    {translateText('Play Now', selectedLanguage)}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
