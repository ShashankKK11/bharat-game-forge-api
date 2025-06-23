import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { X, Heart, Star, Zap, Sword, Shield, Target, CheckCircle, XCircle } from 'lucide-react';

interface FullGameEngineProps {
  gameData: {
    title: string;
    genre: string;
    theme: string;
    description: string;
  };
  onClose: () => void;
}

const FullGameEngine: React.FC<FullGameEngineProps> = ({ gameData, onClose }) => {
  const [gameState, setGameState] = useState({
    currentScreen: 'menu',
    score: 0,
    lives: 3,
    level: 1,
    experience: 0,
    currentQuestionIndex: 0,
    achievements: [] as string[],
    playerPosition: { x: 50, y: 50 },
    enemies: [] as Array<{ id: number, x: number, y: number, health: number }>,
    projectiles: [] as Array<{ id: number, x: number, y: number, direction: string }>,
    gameTime: 0,
    combo: 0,
    showAnswerFeedback: false,
    lastAnswerCorrect: false,
    selectedAnswer: -1
  });

  const questions = [
    {
      question: "What is the main theme of this game?",
      options: [gameData.theme, "Modern Technology", "Space Adventure", "Sports"],
      correct: 0,
      explanation: `This game focuses on ${gameData.theme} to promote cultural learning.`
    },
    {
      question: "Which genre best describes this game?",
      options: ["Action", gameData.genre, "Horror", "Racing"],
      correct: 1,
      explanation: `This is a ${gameData.genre} game designed for cultural education.`
    },
    {
      question: "What is the primary goal of playing this game?",
      options: ["Earning money", "Learning culture", "Defeating enemies", "Racing cars"],
      correct: 1,
      explanation: `The main goal is to learn about ${gameData.theme} through interactive gameplay.`
    },
    {
      question: "Which ancient epic is known for the Bhagavad Gita?",
      options: ["Ramayana", "Mahabharata", "Puranas", "Vedas"],
      correct: 1,
      explanation: "The Bhagavad Gita is a part of the Mahabharata epic."
    },
    {
      question: "What does 'Namaste' traditionally mean?",
      options: ["Hello", "Goodbye", "I bow to you", "Thank you"],
      correct: 2,
      explanation: "Namaste means 'I bow to you' and represents respect for the divine in another person."
    }
  ];

  const startGame = () => {
    setGameState(prev => ({ ...prev, currentScreen: 'quiz' }));
  };

  const loadQuestion = () => {
    const question = questions[gameState.currentQuestionIndex];
    return question;
  };

  const checkAnswer = (selectedIndex: number) => {
    const question = questions[gameState.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;

    setGameState(prev => ({
      ...prev,
      selectedAnswer: selectedIndex,
      showAnswerFeedback: true,
      lastAnswerCorrect: isCorrect,
      score: isCorrect ? prev.score + 100 : prev.score,
      experience: isCorrect ? prev.experience + 50 : prev.experience,
      lives: isCorrect ? prev.lives : Math.max(0, prev.lives - 1),
      combo: isCorrect ? prev.combo + 1 : 0,
      achievements: isCorrect ? [...prev.achievements, `Question ${prev.currentQuestionIndex + 1} Correct`] : prev.achievements
    }));

    // Auto-advance after showing feedback
    setTimeout(() => {
      if (gameState.lives > 1 || isCorrect) {
        nextQuestion();
      } else {
        endGame();
      }
    }, 2500);

    return isCorrect;
  };

  const nextQuestion = () => {
    if (gameState.currentQuestionIndex + 1 >= questions.length) {
      endGame();
      return;
    }

    setGameState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      showAnswerFeedback: false,
      selectedAnswer: -1
    }));
  };

  const endGame = () => {
    setGameState(prev => ({ ...prev, currentScreen: 'gameOver' }));
  };

  const resetGame = () => {
    setGameState({
      currentScreen: 'menu',
      score: 0,
      lives: 3,
      level: 1,
      experience: 0,
      currentQuestionIndex: 0,
      achievements: [] as string[],
      playerPosition: { x: 50, y: 50 },
      enemies: [] as Array<{ id: number, x: number, y: number, health: number }>,
      projectiles: [] as Array<{ id: number, x: number, y: number, direction: string }>,
      gameTime: 0,
      combo: 0,
      showAnswerFeedback: false,
      lastAnswerCorrect: false,
      selectedAnswer: -1
    });
  };

  // Action game specific mechanics
  const spawnEnemy = useCallback(() => {
    if (gameData.genre === 'action') {
      const newEnemy = {
        id: Date.now(),
        x: Math.random() * 90,
        y: Math.random() * 90,
        health: 100
      };
      setGameState(prev => ({
        ...prev,
        enemies: [...prev.enemies, newEnemy]
      }));
    }
  }, [gameData.genre]);

  const movePlayer = useCallback((direction: string) => {
    if (gameData.genre === 'action') {
      setGameState(prev => {
        let newX = prev.playerPosition.x;
        let newY = prev.playerPosition.y;
        
        switch (direction) {
          case 'up': newY = Math.max(0, newY - 5); break;
          case 'down': newY = Math.min(90, newY + 5); break;
          case 'left': newX = Math.max(0, newX - 5); break;
          case 'right': newX = Math.min(90, newX + 5); break;
        }
        
        return {
          ...prev,
          playerPosition: { x: newX, y: newY }
        };
      });
    }
  }, [gameData.genre]);

  const shootProjectile = useCallback(() => {
    if (gameData.genre === 'action') {
      const newProjectile = {
        id: Date.now(),
        x: gameState.playerPosition.x,
        y: gameState.playerPosition.y,
        direction: 'up'
      };
      setGameState(prev => ({
        ...prev,
        projectiles: [...prev.projectiles, newProjectile]
      }));
    }
  }, [gameData.genre, gameState.playerPosition]);

  // Keyboard controls for action games
  useEffect(() => {
    if (gameData.genre === 'action' && gameState.currentScreen === 'playing') {
      const handleKeyPress = (e: KeyboardEvent) => {
        switch (e.key) {
          case 'ArrowUp':
          case 'w':
            movePlayer('up');
            break;
          case 'ArrowDown':
          case 's':
            movePlayer('down');
            break;
          case 'ArrowLeft':
          case 'a':
            movePlayer('left');
            break;
          case 'ArrowRight':
          case 'd':
            movePlayer('right');
            break;
          case ' ':
            e.preventDefault();
            shootProjectile();
            break;
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [gameData.genre, gameState.currentScreen, movePlayer, shootProjectile]);

  // Action game loop
  useEffect(() => {
    if (gameData.genre === 'action' && gameState.currentScreen === 'playing') {
      const gameLoop = setInterval(() => {
        setGameState(prev => {
          let newState = { ...prev };
          
          // Move projectiles
          newState.projectiles = prev.projectiles
            .map(proj => ({ ...proj, y: proj.y - 5 }))
            .filter(proj => proj.y > 0);
          
          // Move enemies
          newState.enemies = prev.enemies.map(enemy => ({
            ...enemy,
            y: enemy.y + 1
          })).filter(enemy => enemy.y < 100);
          
          // Check collisions
          newState.enemies = newState.enemies.filter(enemy => {
            const hit = newState.projectiles.some(proj => 
              Math.abs(proj.x - enemy.x) < 5 && Math.abs(proj.y - enemy.y) < 5
            );
            if (hit) {
              newState.score += 50;
              newState.combo += 1;
              newState.projectiles = newState.projectiles.filter(proj => 
                !(Math.abs(proj.x - enemy.x) < 5 && Math.abs(proj.y - enemy.y) < 5)
              );
            }
            return !hit;
          });
          
          // Check player-enemy collisions
          const playerHit = newState.enemies.some(enemy => 
            Math.abs(enemy.x - prev.playerPosition.x) < 8 && 
            Math.abs(enemy.y - prev.playerPosition.y) < 8
          );
          
          if (playerHit) {
            newState.lives -= 1;
            newState.combo = 0;
            newState.enemies = newState.enemies.filter(enemy => 
              !(Math.abs(enemy.x - prev.playerPosition.x) < 8 && 
                Math.abs(enemy.y - prev.playerPosition.y) < 8)
            );
          }
          
          newState.gameTime += 1;
          
          return newState;
        });
        
        // Spawn enemies periodically
        if (Math.random() < 0.02) {
          spawnEnemy();
        }
      }, 100);

      return () => clearInterval(gameLoop);
    }
  }, [gameData.genre, gameState.currentScreen, spawnEnemy]);

  const renderQuiz = () => {
    const question = loadQuestion();

    if (!question) {
      return (
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-yellow-300">Congratulations!</h2>
          <p className="text-lg">You've completed all the questions!</p>
          <div className="bg-yellow-400 text-black p-4 rounded-lg">
            <p className="font-bold">Final Score: {gameState.score}</p>
            <p>Correct Answers: {gameState.achievements.length}</p>
          </div>
          <Button onClick={endGame} className="bg-green-500 hover:bg-green-600">
            🏆 Finish Game
          </Button>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">
            Question {gameState.currentQuestionIndex + 1} of {questions.length}
          </h3>
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-lg font-medium">{question.question}</p>
          </div>
        </div>

        <div className="grid gap-3">
          {question.options.map((option, index) => {
            let buttonClass = "w-full p-4 text-left transition-all duration-300 ";
            
            if (gameState.showAnswerFeedback) {
              if (index === question.correct) {
                buttonClass += "bg-green-600 hover:bg-green-600 text-white border-2 border-green-400";
              } else if (index === gameState.selectedAnswer && index !== question.correct) {
                buttonClass += "bg-red-600 hover:bg-red-600 text-white border-2 border-red-400";
              } else {
                buttonClass += "bg-gray-600 text-gray-300 cursor-not-allowed";
              }
            } else {
              buttonClass += "bg-gray-700 hover:bg-gray-600 text-white border-2 border-gray-600 hover:border-yellow-400";
            }

            return (
              <Button
                key={index}
                variant="secondary"
                className={buttonClass}
                onClick={() => !gameState.showAnswerFeedback && checkAnswer(index)}
                disabled={gameState.showAnswerFeedback}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm font-medium">{String.fromCharCode(65 + index)}.</span>
                  <span className="flex-1 mx-4 text-left">{option}</span>
                  {gameState.showAnswerFeedback && index === question.correct && (
                    <CheckCircle className="w-5 h-5 text-green-300" />
                  )}
                  {gameState.showAnswerFeedback && index === gameState.selectedAnswer && index !== question.correct && (
                    <XCircle className="w-5 h-5 text-red-300" />
                  )}
                </div>
              </Button>
            );
          })}
        </div>

        {gameState.showAnswerFeedback && (
          <div className={`p-4 rounded-lg border-2 animate-fade-in ${
            gameState.lastAnswerCorrect 
              ? 'bg-green-900 border-green-400 text-green-100' 
              : 'bg-red-900 border-red-400 text-red-100'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {gameState.lastAnswerCorrect ? (
                <CheckCircle className="w-6 h-6 text-green-400" />
              ) : (
                <XCircle className="w-6 h-6 text-red-400" />
              )}
              <span className="font-bold">
                {gameState.lastAnswerCorrect ? '🎉 Correct!' : '❌ Incorrect!'}
              </span>
              {gameState.lastAnswerCorrect && (
                <span className="text-yellow-300 font-bold">+100 points!</span>
              )}
            </div>
            <p className="text-sm">{question.explanation}</p>
          </div>
        )}

        <div className="space-y-2">
          <Progress 
            value={(gameState.currentQuestionIndex / questions.length) * 100} 
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-400">
            <span>Progress: {gameState.currentQuestionIndex}/{questions.length}</span>
            <span>Score: {gameState.score}</span>
          </div>
        </div>

        {gameState.combo > 1 && (
          <div className="text-center">
            <Badge variant="outline" className="text-yellow-300 border-yellow-300 animate-pulse">
              🔥 {gameState.combo} Streak!
            </Badge>
          </div>
        )}
      </div>
    );
  };

  const renderGameOver = () => (
    <div className="text-center space-y-6">
      <div className="text-6xl mb-4">
        {gameState.score >= 400 ? '🏆' : gameState.score >= 200 ? '🥈' : '🥉'}
      </div>
      <h2 className="text-3xl font-bold mb-4 text-yellow-300">Game Over!</h2>
      
      <div className="bg-gray-800 p-6 rounded-lg space-y-3">
        <p className="text-xl">Final Score: <span className="text-yellow-300 font-bold">{gameState.score}</span></p>
        <p className="text-lg">Questions Answered: {gameState.currentQuestionIndex + 1}/{questions.length}</p>
        <p className="text-lg">Correct Answers: {gameState.achievements.length}</p>
        <p className="text-lg">Best Streak: {Math.max(...gameState.achievements.map((_, i) => i + 1), 0)}</p>
        
        {gameState.score >= 400 && (
          <div className="text-yellow-300 font-bold animate-pulse">
            🌟 Perfect Score! Cultural Master! 🌟
          </div>
        )}
      </div>

      <div className="flex gap-4 justify-center">
        <Button onClick={resetGame} className="bg-blue-600 hover:bg-blue-700">
          🔄 Play Again
        </Button>
        <Button onClick={onClose} variant="outline">
          🚪 Exit Game
        </Button>
      </div>
    </div>
  );

  const renderActionGame = () => (
    <div className="relative w-full h-96 bg-gradient-to-b from-blue-900 to-purple-900 rounded-lg overflow-hidden border-4 border-yellow-400">
      {/* Game Area */}
      <div className="absolute inset-0">
        {/* Background effects */}
        <div className="absolute inset-0 bg-stars opacity-30"></div>
        
        {/* Player */}
        <div 
          className="absolute w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-2xl transform transition-all duration-100"
          style={{ 
            left: `${gameState.playerPosition.x}%`, 
            top: `${gameState.playerPosition.y}%`,
            transform: `translate(-50%, -50%) ${gameState.combo > 5 ? 'scale(1.2)' : 'scale(1)'}`
          }}
        >
          {gameData.theme.includes('hanuman') ? '🐒' : 
           gameData.theme.includes('arjuna') ? '🏹' :
           gameData.theme.includes('durga') ? '⚔️' :
           gameData.theme.includes('shiva') ? '🕉️' : '⚡'}
        </div>
        
        {/* Enemies */}
        {gameState.enemies.map(enemy => (
          <div 
            key={enemy.id}
            className="absolute w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-lg animate-pulse"
            style={{ 
              left: `${enemy.x}%`, 
              top: `${enemy.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            👹
          </div>
        ))}
        
        {/* Projectiles */}
        {gameState.projectiles.map(proj => (
          <div 
            key={proj.id}
            className="absolute w-2 h-4 bg-yellow-300 rounded-full"
            style={{ 
              left: `${proj.x}%`, 
              top: `${proj.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
        
        {/* Controls Hint */}
        <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 p-2 rounded">
          WASD/Arrows: Move | Space: Shoot
        </div>
        
        {/* Combo Display */}
        {gameState.combo > 0 && (
          <div className="absolute top-4 right-4 text-yellow-300 text-2xl font-bold animate-pulse">
            {gameState.combo}x COMBO!
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto bg-gradient-to-br from-purple-900 to-blue-900 text-white border-4 border-yellow-400">
        <CardHeader className="relative">
          <Button 
            onClick={onClose}
            variant="ghost" 
            size="icon"
            className="absolute top-2 right-2 text-white hover:bg-white hover:text-black"
          >
            <X className="w-6 h-6" />
          </Button>
          <CardTitle className="text-3xl text-center text-yellow-300">
            🎮 {gameData.title}
          </CardTitle>
          
          {/* Game Stats */}
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>Score: {gameState.score}</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              <span>Lives: {gameState.lives}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span>Level: {gameState.level}</span>
            </div>
            {gameData.genre === 'action' && (
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-400" />
                <span>Combo: {gameState.combo}</span>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {gameState.currentScreen === 'menu' && (
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4">
                {gameData.genre === 'action' ? '⚔️' : '🎮'}
              </div>
              <p className="text-xl mb-6">{gameData.description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <Badge variant="secondary">Genre: {gameData.genre}</Badge>
                <Badge variant="outline">Theme: {gameData.theme}</Badge>
              </div>
              <Button 
                onClick={() => setGameState(prev => ({ ...prev, currentScreen: 'playing' }))}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-lg px-8 py-3"
                size="lg"
              >
                {gameData.genre === 'action' ? '⚔️ Start Battle' : '🚀 Start Game'}
              </Button>
            </div>
          )}

          {gameState.currentScreen === 'playing' && (
            <div className="space-y-6">
              {gameData.genre === 'action' ? renderActionGame() : (
                <div className="text-center">
                  {renderQuiz()}
                </div>
              )}
            </div>
          )}

          {gameState.currentScreen === 'quiz' && (
            <div className="space-y-6">
              {renderQuiz()}
            </div>
          )}

          {gameState.currentScreen === 'gameOver' && (
            <div className="space-y-6">
              {renderGameOver()}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FullGameEngine;
