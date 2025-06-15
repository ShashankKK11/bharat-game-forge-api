
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wand2, Sparkles, Play } from 'lucide-react';
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
    'Action', 'Action-Adventure', 'Action-RPG', 'Simulation', 'Card Game', 'Board Game', 'Quiz'
  ];

  const themes = [
    'Mythology - Ramayana', 'Mythology - Mahabharata', 'Mythology - Bhagavad Gita',
    'Mythology - Hanuman Chalisa', 'Mythology - Krishna Leela', 'Mythology - Shiva Purana',
    'Historical - Mughal Era', 'Historical - Maratha Empire', 'Historical - Chola Dynasty',
    'Historical - Gupta Empire', 'Historical - Mauryan Empire', 'Historical - Vijayanagara',
    'Festival - Diwali', 'Festival - Holi', 'Festival - Dussehra',
    'Festival - Karva Chauth', 'Festival - Ganesh Chaturthi', 'Festival - Navratri',
    'Culture - Classical Dance', 'Culture - Folk Tales', 'Culture - Ayurveda',
    'Culture - Yoga Traditions', 'Culture - Sanskrit Literature', 'Culture - Vedic Wisdom',
    'Geography - Indian States', 'Geography - Sacred Rivers', 'Geography - Mountain Ranges',
    'Literature - Sanskrit Poetry', 'Literature - Tamil Classics', 'Literature - Vedic Texts',
    'Architecture - Temples', 'Architecture - Forts', 'Architecture - Palaces',
    'Cuisine - Regional Foods', 'Cuisine - Spices & Herbs', 'Cuisine - Festival Foods',
    'Music - Classical Ragas', 'Music - Folk Songs', 'Music - Devotional Music',
    'Art - Madhubani', 'Art - Warli', 'Art - Tanjore Painting'
  ];

  // Pre-built games including action games
  const preBuiltGames = [
    {
      title: "Hanuman's Battle",
      genre: "action",
      theme: "mythology - ramayana",
      description: "Fast-paced action game where you play as Hanuman fighting demons to save Sita.",
      mechanics: ['Real-time Combat', 'Power-ups', 'Enemy Waves', 'Boss Battles'],
      features: ['Combo System', 'Special Abilities', 'Multiple Levels', 'Achievement System']
    },
    {
      title: "Arjuna's Arrow Rush",
      genre: "action",
      theme: "mythology - mahabharata",
      description: "Action-packed archery game where you must hit moving targets in the Kurukshetra battlefield.",
      mechanics: ['Precision Shooting', 'Moving Targets', 'Time Pressure', 'Weapon Upgrades'],
      features: ['Slow Motion', 'Multiplier System', 'Boss Encounters', 'Skill Progression']
    },
    {
      title: "Temple Run Defender",
      genre: "action",
      theme: "architecture - temples",
      description: "Defend ancient temples from invaders using mystical powers and strategic combat.",
      mechanics: ['Tower Defense', 'Resource Management', 'Wave Defense', 'Special Powers'],
      features: ['Multiple Towers', 'Upgrade System', 'Spell Casting', 'Epic Boss Fights']
    },
    {
      title: "Ramayana Quest",
      genre: "adventure",
      theme: "mythology - ramayana",
      description: "Join Prince Rama on his epic journey through exile, the search for Sita, and the battle against Ravana.",
      mechanics: ['Story Progression', 'Character Development', 'Battle System', 'Quest Management'],
      features: ['Voice Narration', 'Interactive Choices', 'Cultural Learning', 'Achievement System']
    },
    {
      title: "Mahabharata Legends",
      genre: "strategy",
      theme: "mythology - mahabharata",
      description: "Experience the great war of Kurukshetra and make crucial decisions that shape the destiny of kingdoms.",
      mechanics: ['Strategic Combat', 'Diplomatic Choices', 'Resource Management', 'Alliance Building'],
      features: ['Multiple Endings', 'Historical Accuracy', 'Character Relationships', 'Moral Dilemmas']
    },
    {
      title: "Festival Celebrations",
      genre: "simulation",
      theme: "festival - diwali",
      description: "Plan and organize traditional Indian festivals, learn customs, and spread joy in the community.",
      mechanics: ['Event Planning', 'Resource Management', 'Community Building', 'Cultural Learning'],
      features: ['Regional Variations', 'Recipe Collection', 'Decoration Crafting', 'Social Sharing']
    }
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
    
    // Enhanced generation for action games
    setTimeout(() => {
      const isActionGame = gameGenre.toLowerCase().includes('action');
      
      const baseMechanics = isActionGame ? [
        'Real-time Combat',
        'Health & Energy System',
        'Power-ups Collection',
        'Enemy Encounters',
        'Level Progression'
      ] : [
        'Turn-based gameplay',
        'Story-driven progression',
        'Cultural quiz elements',
        'Achievement system',
        'Multiplayer support'
      ];

      const baseFeatures = isActionGame ? [
        'Combo System',
        'Special Abilities',
        'Boss Battles',
        'Weapon Upgrades',
        'Leaderboard'
      ] : [
        'Voice narration in selected language',
        'Authentic cultural graphics',
        'Educational content integration',
        'Leaderboard system',
        'Offline play support'
      ];

      const mockGame = {
        title: gameTitle,
        genre: gameGenre,
        theme: gameTheme,
        description: gameDescription || `An immersive ${gameGenre} game exploring ${gameTheme}`,
        mechanics: baseMechanics,
        features: baseFeatures,
        codeSnippet: `// Generated ${gameGenre} Game
const ${gameTitle.replace(/\s+/g, '')}Game = {
  title: "${gameTitle}",
  genre: "${gameGenre}",
  theme: "${gameTheme}",
  language: "hindi",
  gameType: "${isActionGame ? 'action' : 'traditional'}",
  mechanics: [
    ${baseMechanics.map(m => `"${m.toLowerCase().replace(/\s+/g, '')}"`).join(',\n    ')}
  ],
  features: [
    ${baseFeatures.map(f => `"${f.toLowerCase().replace(/\s+/g, '')}"`).join(',\n    ')}
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
        description: `Your ${gameGenre} game is ready to play and download`,
      });
    }, 3000);
  };

  const playPreBuiltGame = (game) => {
    const isActionGame = game.genre.toLowerCase().includes('action');
    
    setGeneratedGame({
      ...game,
      codeSnippet: `// Pre-built ${game.genre} Game: ${game.title}
const ${game.title.replace(/\s+/g, '')}Game = {
  title: "${game.title}",
  genre: "${game.genre}",
  theme: "${game.theme}",
  gameType: "${isActionGame ? 'action' : 'traditional'}",
  preBuilt: true,
  fullyFunctional: true,
  actionMechanics: ${isActionGame ? 'true' : 'false'}
};`,
      downloadUrl: '#'
    });
    
    toast({
      title: `${game.title} Loaded!`,
      description: `${game.genre} game ready to play`,
    });
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
            Use our AI-powered generator to create culturally rich games including action-packed adventures
          </p>
        </div>

        {/* Pre-built Games Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-purple-800">Ready-to-Play Games</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {preBuiltGames.map((game, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-purple-800">{game.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{game.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className={`text-xs px-2 py-1 rounded ${
                      game.genre.toLowerCase().includes('action') 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {game.genre}
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{game.theme}</span>
                  </div>
                  <Button 
                    onClick={() => playPreBuiltGame(game)}
                    className={`w-full ${
                      game.genre.toLowerCase().includes('action')
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    }`}
                    size="sm"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Form */}
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="w-6 h-6 text-purple-600" />
                Create Custom Game
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Game Title *
                </label>
                <Input
                  placeholder="e.g., Hanuman's Adventure, Arjuna's Quest"
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
                        {genre} {genre.toLowerCase().includes('action') && '⚔️'}
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
                {gameGenre.toLowerCase().includes('action') && (
                  <p className="text-sm text-orange-600 mt-2">
                    ⚔️ Action game selected! Your game will include combat mechanics, power-ups, and real-time gameplay.
                  </p>
                )}
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
                    Generate Custom Game
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
                    <p className="text-gray-500 mt-2">Choose from ready-to-play games above or create your custom game</p>
                    <p className="text-gray-500 mt-1 text-sm">Try selecting "Action" genre for combat-based games!</p>
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
