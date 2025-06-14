import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wand2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import GamePreview from './GamePreview';

const GameGenerator = () => {
  const [gameTitle, setGameTitle] = useState('');
  const [gameGenre, setGameGenre] = useState('');
  const [gameTheme, setGameTheme] = useState('');
  const [gameDescription, setGameDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedGame, setGeneratedGame] = useState(null);
  const { toast } = useToast();

  const genres = [
    'Adventure', 'Puzzle', 'Strategy', 'Educational', 'RPG', 
    'Action', 'Simulation', 'Card Game', 'Board Game', 'Quiz'
  ];

  const themes = [
    'Mythology - Ramayana', 'Mythology - Mahabharata', 'Historical - Mughal Era',
    'Historical - Maratha Empire', 'Festival - Diwali', 'Festival - Holi',
    'Culture - Classical Dance', 'Culture - Folk Tales', 'Geography - Indian States',
    'Literature - Sanskrit Poetry', 'Architecture - Temples', 'Cuisine - Regional Foods'
  ];

  const handleGenerate = async () => {
    if (!gameTitle || !gameGenre || !gameTheme) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const mockGame = {
        title: gameTitle,
        genre: gameGenre,
        theme: gameTheme,
        description: gameDescription,
        mechanics: [
          'Turn-based gameplay',
          'Story-driven progression',
          'Cultural quiz elements',
          'Achievement system',
          'Multiplayer support'
        ],
        features: [
          'Voice narration in selected language',
          'Authentic cultural graphics',
          'Educational content integration',
          'Leaderboard system',
          'Offline play support'
        ],
        codeSnippet: `// Generated Game Structure
const ${gameTitle.replace(/\s+/g, '')}Game = {
  title: "${gameTitle}",
  genre: "${gameGenre}",
  theme: "${gameTheme}",
  language: "hindi", // Selected language
  mechanics: [
    "turnBasedGameplay",
    "storyProgression",
    "quizElements"
  ],
  assets: {
    graphics: "cultural_authentic",
    audio: "indic_traditional",
    fonts: "devanagari_unicode"
  }
};`,
        downloadUrl: '#'
      };
      
      setGeneratedGame(mockGame);
      setIsGenerating(false);
      
      toast({
        title: "Game Generated Successfully!",
        description: "Your Indic game is ready to play and download",
      });
    }, 3000);
  };

  return (
    <section id="generator" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Wand2 className="w-12 h-12 text-purple-600 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Generate Your Game</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Use our AI-powered generator to create culturally rich games in minutes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Form */}
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="w-6 h-6 text-purple-600" />
                Game Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Game Title *
                </label>
                <Input
                  placeholder="e.g., Arjuna's Quest"
                  value={gameTitle}
                  onChange={(e) => setGameTitle(e.target.value)}
                  className="border-2 border-purple-200 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Genre *
                </label>
                <Select value={gameGenre} onValueChange={setGameGenre}>
                  <SelectTrigger className="border-2 border-purple-200 focus:border-purple-500">
                    <SelectValue placeholder="Select game genre" />
                  </SelectTrigger>
                  <SelectContent>
                    {genres.map((genre) => (
                      <SelectItem key={genre} value={genre.toLowerCase()}>
                        {genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cultural Theme *
                </label>
                <Select value={gameTheme} onValueChange={setGameTheme}>
                  <SelectTrigger className="border-2 border-purple-200 focus:border-purple-500">
                    <SelectValue placeholder="Select cultural theme" />
                  </SelectTrigger>
                  <SelectContent>
                    {themes.map((theme) => (
                      <SelectItem key={theme} value={theme.toLowerCase()}>
                        {theme}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Description
                </label>
                <Textarea
                  placeholder="Describe your game concept, special features, or target audience..."
                  value={gameDescription}
                  onChange={(e) => setGameDescription(e.target.value)}
                  className="border-2 border-purple-200 focus:border-purple-500 min-h-[100px]"
                />
              </div>

              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Generating Game...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Wand2 className="w-5 h-5" />
                    Generate Game
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Game Display */}
          <div className="space-y-6">
            {generatedGame ? (
              <GamePreview game={generatedGame} />
            ) : (
              <Card className="shadow-xl border-0 bg-gray-50 border-dashed border-2 border-gray-300">
                <CardContent className="py-16 text-center">
                  <div className="text-gray-400 mb-4">
                    <div className="relative inline-block">
                      <Wand2 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <div className="absolute top-0 right-0 w-6 h-6 bg-purple-200 rounded-full animate-bounce"></div>
                    </div>
                    <h3 className="text-xl font-semibold">Your Generated Game Will Appear Here</h3>
                    <p className="text-gray-500 mt-2">Fill in the details and click generate to create your playable game</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameGenerator;
