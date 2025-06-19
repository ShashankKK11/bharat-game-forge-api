import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wand2, Sparkles, Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { translateText, translateGameContent } from '@/utils/languageTranslation';
import GamePreview from './GamePreview';

const GameGenerator = () => {
  const [gameTitle, setGameTitle] = useState('');
  const [gameGenre, setGameGenre] = useState('');
  const [gameTheme, setGameTheme] = useState('');
  const [gameDescription, setGameDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedGame, setGeneratedGame] = useState(null);
  const { toast } = useToast();
  const { selectedLanguage } = useLanguage();

  const genres = [
    'Adventure', 'Puzzle', 'Strategy', 'Educational', 'RPG', 
    'Action', 'Simulation', 'Card Game', 'Board Game', 'Quiz'
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

  // 3D Game Icon Component
  const GameIcon3D = ({ gameType, size = "w-16 h-16" }) => {
    const getIconContent = (type) => {
      const iconMap = {
        'ramayana': { emoji: '🏹', color: 'from-orange-400 to-red-500' },
        'mahabharata': { emoji: '⚔️', color: 'from-blue-400 to-purple-500' },
        'diwali': { emoji: '🪔', color: 'from-yellow-400 to-orange-500' },
        'dance': { emoji: '💃', color: 'from-pink-400 to-purple-500' },
        'spice': { emoji: '🌶️', color: 'from-green-400 to-yellow-500' },
        'temple': { emoji: '🏛️', color: 'from-amber-400 to-orange-500' },
        'warrior': { emoji: '🛡️', color: 'from-red-400 to-orange-500' },
        'hanuman': { emoji: '🐵', color: 'from-orange-400 to-red-500' },
        'martial': { emoji: '🥋', color: 'from-blue-400 to-green-500' },
        'durga': { emoji: '👸', color: 'from-purple-400 to-pink-500' },
        'shiva': { emoji: '🕉️', color: 'from-blue-400 to-purple-500' },
        'default': { emoji: '🎮', color: 'from-purple-400 to-blue-500' }
      };
      
      return iconMap[type] || iconMap.default;
    };

    const { emoji, color } = getIconContent(gameType);

    return (
      <div className={`${size} relative`}>
        <div 
          className={`${size} bg-gradient-to-br ${color} rounded-xl shadow-2xl transform-gpu transition-all duration-300 hover:scale-110 hover:rotate-y-12 flex items-center justify-center text-white text-2xl font-bold cursor-pointer`}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            animation: 'float 3s ease-in-out infinite'
          }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-xl transform translate-z-2"></div>
          <span className="relative z-10 text-3xl drop-shadow-lg transform hover:scale-125 transition-transform duration-200">
            {emoji}
          </span>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotateY(0deg); }
            33% { transform: translateY(-10px) rotateY(5deg); }
            66% { transform: translateY(-5px) rotateY(-5deg); }
          }
          .hover\\:rotate-y-12:hover {
            transform: rotateY(12deg) scale(1.1);
          }
        `}</style>
      </div>
    );
  };

  const preBuiltGames = [
    {
      title: "Ramayana Quest",
      genre: "adventure",
      theme: "mythology - ramayana",
      description: "Join Prince Rama on his epic journey through exile, the search for Sita, and the battle against Ravana.",
      mechanics: ['Story Progression', 'Character Development', 'Battle System', 'Quest Management'],
      features: ['Voice Narration', 'Interactive Choices', 'Cultural Learning', 'Achievement System'],
      iconType: 'ramayana'
    },
    {
      title: "Mahabharata Legends",
      genre: "strategy",
      theme: "mythology - mahabharata",
      description: "Experience the great war of Kurukshetra and make crucial decisions that shape the destiny of kingdoms.",
      mechanics: ['Strategic Combat', 'Diplomatic Choices', 'Resource Management', 'Alliance Building'],
      features: ['Multiple Endings', 'Historical Accuracy', 'Character Relationships', 'Moral Dilemmas'],
      iconType: 'mahabharata'
    },
    {
      title: "Festival Celebrations",
      genre: "simulation",
      theme: "festival - diwali",
      description: "Plan and organize traditional Indian festivals, learn customs, and spread joy in the community.",
      mechanics: ['Event Planning', 'Resource Management', 'Community Building', 'Cultural Learning'],
      features: ['Regional Variations', 'Recipe Collection', 'Decoration Crafting', 'Social Sharing'],
      iconType: 'diwali'
    },
    {
      title: "Classical Dance Academy",
      genre: "educational",
      theme: "culture - classical dance",
      description: "Learn and master traditional Indian dance forms through interactive gameplay and cultural education.",
      mechanics: ['Rhythm Matching', 'Pose Recognition', 'Story Interpretation', 'Performance Scoring'],
      features: ['Multiple Dance Forms', 'Cultural Context', 'Progressive Learning', 'Performance Mode'],
      iconType: 'dance'
    },
    {
      title: "Spice Route Trader",
      genre: "strategy",
      theme: "cuisine - spices & herbs",
      description: "Navigate ancient trade routes, discover exotic spices, and build your trading empire across India.",
      mechanics: ['Trade Management', 'Route Planning', 'Market Analysis', 'Cultural Exchange'],
      features: ['Historical Accuracy', 'Recipe Discovery', 'Economic Strategy', 'Cultural Learning'],
      iconType: 'spice'
    },
    {
      title: "Temple Architecture Builder",
      genre: "simulation",
      theme: "architecture - temples",
      description: "Design and construct magnificent Indian temples while learning about architectural principles and cultural significance.",
      mechanics: ['Building Design', 'Resource Management', 'Historical Accuracy', 'Cultural Integration'],
      features: ['Authentic Styles', 'Educational Content', 'Visual Showcase', 'Historical Context'],
      iconType: 'temple'
    },
    {
      title: "Warrior's Path: Arjuna",
      genre: "action",
      theme: "mythology - mahabharata",
      description: "Master archery skills as Arjuna in fast-paced action sequences. Defend dharma through precise combat.",
      mechanics: ['Real-time Combat', 'Archery System', 'Combo Attacks', 'Enemy Waves'],
      features: ['Fast-paced Action', 'Skill Progression', 'Epic Boss Battles', 'Mythological Weapons'],
      iconType: 'warrior'
    },
    {
      title: "Hanuman's Flight",
      genre: "action",
      theme: "mythology - hanuman chalisa",
      description: "Soar through the skies as Hanuman, collecting sacred items and battling demons in aerial combat.",
      mechanics: ['Flying Mechanics', 'Aerial Combat', 'Item Collection', 'Power-ups'],
      features: ['Flight Controls', 'Divine Powers', 'Obstacle Courses', 'Time Challenges'],
      iconType: 'hanuman'
    },
    {
      title: "Kalaripayattu Master",
      genre: "action",
      theme: "culture - martial arts",
      description: "Learn and master the ancient martial art of Kalaripayattu through intense training and combat challenges.",
      mechanics: ['Combo System', 'Weapon Mastery', 'Training Modes', 'Tournament Battles'],
      features: ['Authentic Techniques', 'Progressive Difficulty', 'Master Classes', 'Cultural History'],
      iconType: 'martial'
    },
    {
      title: "Durga's Conquest",
      genre: "action",
      theme: "mythology - goddess durga",
      description: "Channel the power of Goddess Durga to defeat evil forces in epic battle sequences.",
      mechanics: ['Multi-weapon Combat', 'Divine Powers', 'Boss Battles', 'Transformation System'],
      features: ['Multiple Weapons', 'Special Abilities', 'Epic Storyline', 'Visual Effects'],
      iconType: 'durga'
    },
    {
      title: "Shiva's Dance Warrior",
      genre: "action",
      theme: "mythology - shiva purana",
      description: "Perform the cosmic dance of destruction and creation while battling cosmic forces.",
      mechanics: ['Rhythm-based Combat', 'Dance Combinations', 'Elemental Powers', 'Cosmic Battles'],
      features: ['Unique Combat Style', 'Cosmic Powers', 'Rhythm Gameplay', 'Spiritual Journey'],
      iconType: 'shiva'
    }
  ];

  const translatedPreBuiltGames = preBuiltGames.map(game => translateGameContent(game, selectedLanguage));

  const quickTranslateGameMechanics = (mechanics, targetLanguage) => {
    if (targetLanguage === 'english') return mechanics;
    
    const quickTranslations = {
      'Turn-based gameplay': selectedLanguage === 'hindi' ? 'बारी-बारी से खेल' : 'Turn-based gameplay',
      'Story-driven progression': selectedLanguage === 'hindi' ? 'कहानी-संचालित प्रगति' : 'Story-driven progression',
      'Cultural quiz elements': selectedLanguage === 'hindi' ? 'सांस्कृतिक प्रश्नोत्तरी तत्व' : 'Cultural quiz elements',
      'Achievement system': selectedLanguage === 'hindi' ? 'उपलब्धि प्रणाली' : 'Achievement system',
      'Multiplayer support': selectedLanguage === 'hindi' ? 'मल्टीप्लेयर समर्थन' : 'Multiplayer support'
    };
    
    return mechanics.map(mechanic => quickTranslations[mechanic] || mechanic);
  };

  const quickTranslateGameFeatures = (features, targetLanguage) => {
    if (targetLanguage === 'english') return features;
    
    const quickTranslations = {
      'Voice narration in selected language': selectedLanguage === 'hindi' ? 'चयनित भाषा में आवाज़ वर्णन' : 'Voice narration in selected language',
      'Authentic cultural graphics': selectedLanguage === 'hindi' ? 'प्रामाणिक सांस्कृतिक ग्राफिक्स' : 'Authentic cultural graphics',
      'Educational content integration': selectedLanguage === 'hindi' ? 'शैक्षिक सामग्री एकीकरण' : 'Educational content integration',
      'Leaderboard system': selectedLanguage === 'hindi' ? 'लीडरबोर्ड प्रणाली' : 'Leaderboard system',
      'Offline play support': selectedLanguage === 'hindi' ? 'ऑफलाइन खेल समर्थन' : 'Offline play support'
    };
    
    return features.map(feature => quickTranslations[feature] || feature);
  };

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
    
    setTimeout(() => {
      const mockGame = {
        title: gameTitle,
        genre: gameGenre,
        theme: gameTheme,
        description: gameDescription || `An immersive ${gameGenre} game exploring ${gameTheme}`,
        mechanics: quickTranslateGameMechanics([
          'Turn-based gameplay',
          'Story-driven progression',
          'Cultural quiz elements',
          'Achievement system',
          'Multiplayer support'
        ], selectedLanguage),
        features: quickTranslateGameFeatures([
          'Voice narration in selected language',
          'Authentic cultural graphics',
          'Educational content integration',
          'Leaderboard system',
          'Offline play support'
        ], selectedLanguage),
        codeSnippet: `// Generated Game Structure
const ${gameTitle.replace(/\s+/g, '')}Game = {
  title: "${gameTitle}",
  genre: "${gameGenre}",
  theme: "${gameTheme}",
  language: "${selectedLanguage}",
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
    }, 200);
  };

  const playPreBuiltGame = (game) => {
    const translatedGame = translateGameContent(game, selectedLanguage);
    setGeneratedGame({
      ...translatedGame,
      codeSnippet: `// Pre-built Game: ${translatedGame.title}
const ${translatedGame.title.replace(/\s+/g, '')}Game = {
  title: "${translatedGame.title}",
  genre: "${translatedGame.genre}",
  theme: "${translatedGame.theme}",
  language: "${selectedLanguage}",
  preBuilt: true,
  fullyFunctional: true
};`,
      downloadUrl: '#'
    });
    
    toast({
      title: `${translatedGame.title} Loaded!`,
      description: "Pre-built game ready to play",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{translateText('Generate Your Game', selectedLanguage)}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Use our AI-powered generator to create culturally rich games in minutes
          </p>
        </div>

        {/* Pre-built Games Section with 3D Icons */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-purple-800">🎮 Ready-to-Play Games</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {translatedPreBuiltGames.map((game, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <GameIcon3D gameType={preBuiltGames[index].iconType} size="w-12 h-12" />
                    <CardTitle className="text-lg text-purple-800">{game.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{game.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className={`text-xs px-2 py-1 rounded ${
                      game.genre === 'action' || translateText('action', selectedLanguage) === game.genre
                        ? 'bg-red-100 text-red-800' 
                        : game.genre === 'strategy' || translateText('strategy', selectedLanguage) === game.genre
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {game.genre}
                    </span>
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                      {game.theme.split(' - ')[0]}
                    </span>
                  </div>
                  <Button 
                    onClick={() => playPreBuiltGame(preBuiltGames[index])}
                    className={`w-full ${
                      game.genre === 'action' || translateText('action', selectedLanguage) === game.genre
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    }`}
                    size="sm"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {game.genre === 'action' || translateText('action', selectedLanguage) === game.genre
                      ? translateText('Battle Now', selectedLanguage)
                      : translateText('Play Now', selectedLanguage)}
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
                    {translateText('Generate Game', selectedLanguage)}
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Game Display with 3D Icon */}
          <div className="space-y-6">
            {generatedGame ? (
              <GamePreview game={generatedGame} />
            ) : (
              <Card className="shadow-xl border-0 bg-gray-50 border-dashed border-2 border-gray-300">
                <CardContent className="py-16 text-center">
                  <div className="text-gray-400 mb-4">
                    <div className="relative inline-block">
                      <GameIcon3D gameType="default" size="w-20 h-20" />
                    </div>
                    <h3 className="text-xl font-semibold mt-4">Your Generated Game Will Appear Here</h3>
                    <p className="text-gray-500 mt-2">Choose from ready-to-play games above or create your custom game</p>
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
