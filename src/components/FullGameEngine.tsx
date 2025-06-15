import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { X, Heart, Star, Zap, Sword, Shield, Target } from 'lucide-react';

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
    combo: 0
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

    if (isCorrect) {
      setGameState(prev => ({
        ...prev,
        score: prev.score + 100,
        experience: prev.experience + 50,
        achievements: [...prev.achievements, 'Correct Answer'],
        combo: prev.combo + 1
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        lives: prev.lives - 1,
        combo: 0
      }));
    }

    return isCorrect;
  };

  const nextQuestion = () => {
    setGameState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1
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
      combo: 0
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
        <div className="text-center">
          <h2 className="text-2xl">Congratulations!</h2>
          <p>You've completed all the questions.</p>
          <Button onClick={endGame}>Finish Game</Button>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{question.question}</h3>
        <ul className="space-y-2">
          {question.options.map((option, index) => (
            <li key={index}>
              <Button variant="secondary" className="w-full" onClick={() => {
                const isCorrect = checkAnswer(index);
                if (isCorrect) {
                  nextQuestion();
                } else {
                  if (gameState.lives <= 0) {
                    endGame();
                  }
                }
                setTimeout(nextQuestion, 2000);
              }}>
                {option}
              </Button>
            </li>
          ))}
        </ul>
        <Progress value={(gameState.currentQuestionIndex / questions.length) * 100} />
      </div>
    );
  };

  const renderGameOver = () => (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
      <p className="text-lg">Your final score: {gameState.score}</p>
      <p className="text-lg">You reached level: {gameState.level}</p>
      <Button onClick={resetGame}>Play Again</Button>
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
