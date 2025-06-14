
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Award, 
  Star, 
  Heart, 
  Zap,
  Crown,
  Gamepad2,
  Trophy,
  Target,
  Sparkles
} from 'lucide-react';

interface GameState {
  currentLevel: number;
  score: number;
  lives: number;
  experience: number;
  achievements: string[];
  inventory: string[];
  currentQuest: string;
  gameTime: number;
  isPlaying: boolean;
  isPaused: boolean;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  points: number;
  category: string;
  explanation: string;
}

interface GameData {
  title: string;
  genre: string;
  theme: string;
  description: string;
}

interface FullGameEngineProps {
  gameData: GameData;
  onClose: () => void;
}

const FullGameEngine: React.FC<FullGameEngineProps> = ({ gameData, onClose }) => {
  const [gameState, setGameState] = useState<GameState>({
    currentLevel: 1,
    score: 0,
    lives: 3,
    experience: 0,
    achievements: [],
    inventory: [],
    currentQuest: "Begin your cultural journey",
    gameTime: 0,
    isPlaying: false,
    isPaused: false
  });

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gamePhase, setGamePhase] = useState<'menu' | 'playing' | 'quiz' | 'story' | 'completed'>('menu');
  const [storyText, setStoryText] = useState('');

  // Cultural questions database
  const questions: Question[] = [
    {
      id: 1,
      question: "In the Ramayana, who is the devoted brother of Lord Rama?",
      options: ["Bharata", "Lakshmana", "Shatrughna", "Hanuman"],
      correctAnswer: 1,
      points: 100,
      category: "Mythology",
      explanation: "Lakshmana was Rama's devoted younger brother who accompanied him during his 14-year exile."
    },
    {
      id: 2,
      question: "Which festival is known as the 'Festival of Lights'?",
      options: ["Holi", "Diwali", "Dussehra", "Karva Chauth"],
      correctAnswer: 1,
      points: 75,
      category: "Festivals",
      explanation: "Diwali symbolizes the victory of light over darkness and good over evil."
    },
    {
      id: 3,
      question: "Who was the founder of the Maurya Empire?",
      options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"],
      correctAnswer: 1,
      points: 150,
      category: "History",
      explanation: "Chandragupta Maurya founded the Maurya Empire around 321 BCE."
    },
    {
      id: 4,
      question: "Which classical dance form originated in Tamil Nadu?",
      options: ["Kathak", "Bharatanatyam", "Odissi", "Manipuri"],
      correctAnswer: 1,
      points: 125,
      category: "Culture",
      explanation: "Bharatanatyam is one of the oldest classical dance forms, originating in Tamil Nadu."
    },
    {
      id: 5,
      question: "What is the sacred river mentioned in many Hindu scriptures?",
      options: ["Yamuna", "Ganga", "Saraswati", "Narmada"],
      correctAnswer: 1,
      points: 100,
      category: "Geography",
      explanation: "The Ganga (Ganges) is considered the most sacred river in Hinduism."
    }
  ];

  // Story progression based on theme
  const getStoryProgression = useCallback((level: number) => {
    const stories = {
      'mythology - ramayana': [
        "🏹 Welcome to Ayodhya! Prince Rama has been chosen to inherit the throne, but fate has other plans...",
        "🌲 The forest exile begins. Rama, Sita, and Lakshmana enter the Dandaka forest, where new adventures await.",
        "👹 The golden deer appears! Sita's desire for the magical creature leads to unexpected consequences.",
        "🔥 The trial by fire! Sita proves her purity, and the epic reaches its climactic conclusion.",
        "👑 Victory and return! Rama is crowned king, and Ayodhya celebrates the return of righteousness."
      ],
      'mythology - mahabharata': [
        "⚔️ The great war approaches! The Pandavas and Kauravas prepare for the battle of Kurukshetra.",
        "🏹 Arjuna's dilemma! Krishna delivers the sacred Bhagavad Gita on the battlefield.",
        "🎯 The war begins! Great warriors clash in the ultimate battle between good and evil.",
        "🏆 Dharma prevails! The Pandavas emerge victorious, but at great cost.",
        "👑 The age of truth! Yudhishthira rules with justice and wisdom."
      ],
      'festival - diwali': [
        "🪔 The lamps are lit! Diwali celebrations begin with the story of Lord Rama's return.",
        "🎆 Fireworks light up the sky as families come together to celebrate the victory of light.",
        "🍬 Sweet exchanges and gift-giving spread joy throughout the community.",
        "🏠 Homes are decorated with rangoli and diyas, welcoming prosperity.",
        "✨ The festival concludes with prayers for happiness and success in the coming year."
      ]
    };
    
    const themeKey = gameData.theme.toLowerCase();
    const storyArray = stories[themeKey as keyof typeof stories] || stories['mythology - ramayana'];
    return storyArray[level - 1] || "Your cultural journey continues...";
  }, [gameData.theme]);

  // Game timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState.isPlaying && !gameState.isPaused) {
      interval = setInterval(() => {
        setGameState(prev => ({ ...prev, gameTime: prev.gameTime + 1 }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState.isPlaying, gameState.isPaused]);

  // Start game
  const startGame = () => {
    setGameState(prev => ({ ...prev, isPlaying: true }));
    setGamePhase('story');
    setStoryText(getStoryProgression(1));
  };

  // Pause/Resume game
  const togglePause = () => {
    setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
  };

  // Reset game
  const resetGame = () => {
    setGameState({
      currentLevel: 1,
      score: 0,
      lives: 3,
      experience: 0,
      achievements: [],
      inventory: [],
      currentQuest: "Begin your cultural journey",
      gameTime: 0,
      isPlaying: false,
      isPaused: false
    });
    setGamePhase('menu');
    setCurrentQuestion(null);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  // Start quiz phase
  const startQuiz = () => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(randomQuestion);
    setGamePhase('quiz');
    setSelectedAnswer(null);
    setShowResult(false);
  };

  // Handle answer selection
  const handleAnswerSubmit = () => {
    if (selectedAnswer === null || !currentQuestion) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setShowResult(true);

    if (isCorrect) {
      const newScore = gameState.score + currentQuestion.points;
      const newExperience = gameState.experience + 50;
      const newAchievements = [...gameState.achievements];
      
      // Check for achievements
      if (newScore >= 500 && !newAchievements.includes('Score Master')) {
        newAchievements.push('Score Master');
      }
      if (gameState.currentLevel >= 3 && !newAchievements.includes('Level Champion')) {
        newAchievements.push('Level Champion');
      }

      setGameState(prev => ({
        ...prev,
        score: newScore,
        experience: newExperience,
        achievements: newAchievements,
        inventory: [...prev.inventory, `Sacred Knowledge: ${currentQuestion.category}`]
      }));

      // Level progression
      setTimeout(() => {
        if (gameState.currentLevel < 5) {
          setGameState(prev => ({ ...prev, currentLevel: prev.currentLevel + 1 }));
          setStoryText(getStoryProgression(gameState.currentLevel + 1));
          setGamePhase('story');
        } else {
          setGamePhase('completed');
        }
      }, 3000);
    } else {
      const newLives = gameState.lives - 1;
      setGameState(prev => ({ ...prev, lives: newLives }));
      
      if (newLives <= 0) {
        setTimeout(() => {
          setGamePhase('completed');
        }, 2000);
      } else {
        setTimeout(() => {
          setGamePhase('story');
          setStoryText("Your journey continues, but be more careful...");
        }, 2000);
      }
    }
  };

  // Continue from story to quiz
  const continueToQuiz = () => {
    startQuiz();
  };

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Render game menu
  const renderMenu = () => (
    <div className="text-center space-y-6">
      <div className="relative">
        <div className="text-8xl mb-4 animate-bounce">🎮</div>
        <div className="absolute -top-2 -right-2 text-3xl animate-spin">⭐</div>
      </div>
      <h2 className="text-4xl font-bold text-purple-800 mb-2">{gameData.title}</h2>
      <p className="text-lg text-gray-600 mb-4">{gameData.description}</p>
      <div className="flex justify-center gap-2 mb-6">
        <Badge variant="secondary">{gameData.genre}</Badge>
        <Badge variant="outline">{gameData.theme}</Badge>
      </div>
      <Button 
        onClick={startGame}
        size="lg"
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 text-xl"
      >
        <Play className="w-6 h-6 mr-2" />
        Start Adventure
      </Button>
    </div>
  );

  // Render story phase
  const renderStory = () => (
    <div className="text-center space-y-6">
      <div className="text-6xl mb-4 animate-pulse">📜</div>
      <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-lg border-2 border-amber-200">
        <p className="text-xl text-gray-800 leading-relaxed">{storyText}</p>
      </div>
      <Button 
        onClick={continueToQuiz}
        size="lg"
        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
      >
        <Target className="w-5 h-5 mr-2" />
        Continue Quest
      </Button>
    </div>
  );

  // Render quiz phase
  const renderQuiz = () => {
    if (!currentQuestion) return null;

    return (
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-4">{currentQuestion.category}</Badge>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">{currentQuestion.question}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              className={`p-4 text-left h-auto ${
                selectedAnswer === index 
                  ? "bg-blue-600 text-white" 
                  : "hover:bg-blue-50"
              }`}
              onClick={() => setSelectedAnswer(index)}
              disabled={showResult}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
                {option}
              </div>
            </Button>
          ))}
        </div>

        {!showResult && selectedAnswer !== null && (
          <div className="text-center">
            <Button onClick={handleAnswerSubmit} size="lg">
              <Zap className="w-5 h-5 mr-2" />
              Submit Answer
            </Button>
          </div>
        )}

        {showResult && (
          <div className={`text-center p-6 rounded-lg ${
            selectedAnswer === currentQuestion.correctAnswer 
              ? "bg-green-50 border-2 border-green-200" 
              : "bg-red-50 border-2 border-red-200"
          }`}>
            <div className="text-4xl mb-2">
              {selectedAnswer === currentQuestion.correctAnswer ? "🎉" : "💔"}
            </div>
            <h4 className="text-xl font-bold mb-2">
              {selectedAnswer === currentQuestion.correctAnswer ? "Correct!" : "Incorrect!"}
            </h4>
            <p className="text-gray-700 mb-2">{currentQuestion.explanation}</p>
            {selectedAnswer === currentQuestion.correctAnswer && (
              <p className="text-green-600 font-semibold">+{currentQuestion.points} points!</p>
            )}
          </div>
        )}
      </div>
    );
  };

  // Render completed phase
  const renderCompleted = () => (
    <div className="text-center space-y-6">
      <div className="text-8xl mb-4 animate-bounce">🏆</div>
      <h2 className="text-4xl font-bold text-yellow-600 mb-4">
        {gameState.lives > 0 ? "Quest Completed!" : "Game Over"}
      </h2>
      <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-6 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{gameState.score}</div>
            <div className="text-sm text-gray-600">Final Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{gameState.currentLevel}</div>
            <div className="text-sm text-gray-600">Level Reached</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{formatTime(gameState.gameTime)}</div>
            <div className="text-sm text-gray-600">Time Played</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">{gameState.achievements.length}</div>
            <div className="text-sm text-gray-600">Achievements</div>
          </div>
        </div>
        
        {gameState.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Achievements Unlocked:</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {gameState.achievements.map((achievement, index) => (
                <Badge key={index} variant="default" className="bg-yellow-500">
                  <Award className="w-3 h-3 mr-1" />
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="flex gap-4 justify-center">
        <Button onClick={resetGame} size="lg">
          <RotateCcw className="w-5 h-5 mr-2" />
          Play Again
        </Button>
        <Button onClick={onClose} variant="outline" size="lg">
          Exit Game
        </Button>
      </div>
    </div>
  );

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-purple-50 to-pink-50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Gamepad2 className="w-8 h-8 text-purple-600" />
            {gameData.title}
          </CardTitle>
          <div className="flex gap-2">
            {gameState.isPlaying && (
              <Button
                onClick={togglePause}
                variant="outline"
                size="sm"
              >
                {gameState.isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </Button>
            )}
            <Button onClick={onClose} variant="outline" size="sm">
              ✕
            </Button>
          </div>
        </div>
        
        {gameState.isPlaying && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="font-semibold">{gameState.score}</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="font-semibold">{gameState.lives}</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-purple-500" />
              <span className="font-semibold">Level {gameState.currentLevel}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="font-semibold">{gameState.experience} XP</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-green-500" />
              <span className="font-semibold">{formatTime(gameState.gameTime)}</span>
            </div>
          </div>
        )}
        
        {gameState.isPlaying && gameState.currentLevel <= 5 && (
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{gameState.currentLevel}/5</span>
            </div>
            <Progress value={(gameState.currentLevel / 5) * 100} className="h-2" />
          </div>
        )}
      </CardHeader>
      
      <CardContent className="pb-8">
        {gamePhase === 'menu' && renderMenu()}
        {gamePhase === 'story' && renderStory()}
        {gamePhase === 'quiz' && renderQuiz()}
        {gamePhase === 'completed' && renderCompleted()}
        
        {gameState.isPaused && gameState.isPlaying && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Game Paused</h3>
              <Button onClick={togglePause}>
                <Play className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FullGameEngine;
