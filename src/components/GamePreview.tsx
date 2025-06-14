
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Share2, Eye, Code, Gamepad2 } from 'lucide-react';
import FullGameEngine from './FullGameEngine';

interface GamePreviewProps {
  game: {
    title: string;
    genre: string;
    theme: string;
    description: string;
    mechanics: string[];
    features: string[];
    codeSnippet: string;
    downloadUrl: string;
  };
}

const GamePreview: React.FC<GamePreviewProps> = ({ game }) => {
  const [showFullGame, setShowFullGame] = useState(false);

  const handlePlayNow = () => {
    setShowFullGame(true);
  };

  const handleCloseGame = () => {
    setShowFullGame(false);
  };

  const handleDownload = () => {
    // Create a comprehensive downloadable game package
    const gameHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${game.title} - Complete Indic Game</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .game-container {
            max-width: 800px;
            width: 90%;
            background: rgba(255,255,255,0.1);
            padding: 30px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            text-align: center;
        }
        .game-title {
            font-size: 2.5em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
            from { text-shadow: 2px 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.3); }
            to { text-shadow: 2px 2px 4px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.6); }
        }
        .game-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        .stat-card {
            background: rgba(255,255,255,0.2);
            padding: 20px;
            border-radius: 15px;
            backdrop-filter: blur(5px);
        }
        .stat-value {
            font-size: 2em;
            font-weight: bold;
            display: block;
        }
        .stat-label {
            font-size: 0.9em;
            opacity: 0.8;
            margin-top: 5px;
        }
        .play-button {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            color: white;
            font-size: 1.2em;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s ease;
            margin: 20px 10px;
        }
        .play-button:hover {
            transform: scale(1.05);
        }
        .features-list {
            text-align: left;
            margin: 20px 0;
        }
        .feature-item {
            padding: 10px 0;
            border-bottom: 1px solid rgba(255,255,255,0.2);
        }
        .cultural-elements {
            position: fixed;
            font-size: 2em;
            animation: float 6s ease-in-out infinite;
            opacity: 0.3;
            pointer-events: none;
        }
        .element-1 { top: 10%; left: 10%; animation-delay: 0s; }
        .element-2 { top: 20%; right: 15%; animation-delay: 2s; }
        .element-3 { bottom: 30%; left: 20%; animation-delay: 4s; }
        .element-4 { top: 60%; right: 10%; animation-delay: 1s; }
        .element-5 { bottom: 20%; right: 25%; animation-delay: 3s; }
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(120deg); }
            66% { transform: translateY(-10px) rotate(240deg); }
        }
        .quiz-area {
            background: rgba(255,255,255,0.1);
            border-radius: 15px;
            padding: 20px;
            margin: 20px 0;
        }
        .question {
            font-size: 1.3em;
            margin-bottom: 20px;
        }
        .options {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 20px 0;
        }
        .option {
            background: rgba(255,255,255,0.2);
            border: 2px solid transparent;
            padding: 15px;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .option:hover {
            background: rgba(255,255,255,0.3);
            border-color: #4ecdc4;
        }
        .option.selected {
            background: #4ecdc4;
            border-color: #45b7d1;
        }
    </style>
</head>
<body>
    <div class="cultural-elements element-1">🏛️</div>
    <div class="cultural-elements element-2">🎭</div>
    <div class="cultural-elements element-3">📿</div>
    <div class="cultural-elements element-4">🪔</div>
    <div class="cultural-elements element-5">🕉️</div>
    
    <div class="game-container">
        <h1 class="game-title">🎮 ${game.title}</h1>
        <p style="font-size: 1.2em; margin-bottom: 20px; opacity: 0.9;">
            ${game.description}
        </p>
        
        <div class="game-stats">
            <div class="stat-card">
                <span class="stat-value">🏆</span>
                <div class="stat-label">Genre: ${game.genre}</div>
            </div>
            <div class="stat-card">
                <span class="stat-value">🎨</span>
                <div class="stat-label">Theme: ${game.theme}</div>
            </div>
            <div class="stat-card">
                <span class="stat-value">⭐</span>
                <div class="stat-label">Score: <span id="score">0</span></div>
            </div>
            <div class="stat-card">
                <span class="stat-value">❤️</span>
                <div class="stat-label">Lives: <span id="lives">3</span></div>
            </div>
        </div>

        <div class="features-list">
            <h3 style="margin-bottom: 15px;">🎯 Game Features:</h3>
            ${game.features.map(feature => `<div class="feature-item">✨ ${feature}</div>`).join('')}
        </div>

        <div class="quiz-area" id="quizArea" style="display: none;">
            <div class="question" id="questionText"></div>
            <div class="options" id="optionsContainer"></div>
            <button class="play-button" id="submitAnswer" style="display: none;">Submit Answer</button>
            <div id="result" style="margin-top: 20px;"></div>
        </div>

        <div id="gameControls">
            <button class="play-button" onclick="startGame()">🚀 Start Game</button>
            <button class="play-button" onclick="showInstructions()">📖 Instructions</button>
        </div>

        <div id="instructions" style="display: none; text-align: left; margin-top: 20px;">
            <h3>🎮 How to Play:</h3>
            <ul style="margin: 15px 0; padding-left: 20px;">
                <li>Answer cultural questions to progress through levels</li>
                <li>Each correct answer gives you points and experience</li>
                <li>Wrong answers cost you a life</li>
                <li>Complete all levels to win the game</li>
                <li>Learn about ${game.theme} as you play!</li>
            </ul>
        </div>
    </div>

    <script>
        let gameState = {
            score: 0,
            lives: 3,
            level: 1,
            currentQuestion: 0
        };

        const questions = [
            {
                question: "What is the main theme of this game?",
                options: ["${game.theme}", "Modern Technology", "Space Adventure", "Sports"],
                correct: 0,
                explanation: "This game focuses on ${game.theme} to promote cultural learning."
            },
            {
                question: "Which genre best describes this game?",
                options: ["Action", "${game.genre}", "Horror", "Racing"],
                correct: 1,
                explanation: "This is a ${game.genre} game designed for cultural education."
            },
            {
                question: "What is the primary goal of playing this game?",
                options: ["Earning money", "Learning culture", "Defeating enemies", "Racing cars"],
                correct: 1,
                explanation: "The main goal is to learn about ${game.theme} through interactive gameplay."
            }
        ];

        function startGame() {
            document.getElementById('gameControls').style.display = 'none';
            document.getElementById('instructions').style.display = 'none';
            document.getElementById('quizArea').style.display = 'block';
            loadQuestion();
        }

        function showInstructions() {
            const instructions = document.getElementById('instructions');
            instructions.style.display = instructions.style.display === 'none' ? 'block' : 'none';
        }

        function loadQuestion() {
            if (gameState.currentQuestion >= questions.length) {
                endGame();
                return;
            }

            const question = questions[gameState.currentQuestion];
            document.getElementById('questionText').textContent = question.question;
            
            const optionsContainer = document.getElementById('optionsContainer');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                optionDiv.textContent = option;
                optionDiv.onclick = () => selectOption(index);
                optionDiv.dataset.index = index;
                optionsContainer.appendChild(optionDiv);
            });

            document.getElementById('submitAnswer').style.display = 'none';
            document.getElementById('result').innerHTML = '';
        }

        function selectOption(index) {
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            document.querySelector(\`[data-index="\${index}"]\`).classList.add('selected');
            document.getElementById('submitAnswer').style.display = 'block';
            document.getElementById('submitAnswer').onclick = () => checkAnswer(index);
        }

        function checkAnswer(selectedIndex) {
            const question = questions[gameState.currentQuestion];
            const isCorrect = selectedIndex === question.correct;
            
            if (isCorrect) {
                gameState.score += 100;
                document.getElementById('score').textContent = gameState.score;
                document.getElementById('result').innerHTML = \`
                    <div style="color: #4ecdc4; font-size: 1.2em;">
                        🎉 Correct! +100 points<br>
                        <small>\${question.explanation}</small>
                    </div>
                \`;
            } else {
                gameState.lives--;
                document.getElementById('lives').textContent = gameState.lives;
                document.getElementById('result').innerHTML = \`
                    <div style="color: #ff6b6b; font-size: 1.2em;">
                        ❌ Incorrect! -1 life<br>
                        <small>\${question.explanation}</small>
                    </div>
                \`;
                
                if (gameState.lives <= 0) {
                    setTimeout(() => endGame(false), 2000);
                    return;
                }
            }

            gameState.currentQuestion++;
            setTimeout(() => {
                if (gameState.currentQuestion < questions.length) {
                    loadQuestion();
                } else {
                    endGame(true);
                }
            }, 3000);
        }

        function endGame(won = true) {
            document.getElementById('quizArea').innerHTML = \`
                <div style="text-align: center;">
                    <h2 style="font-size: 2.5em; margin-bottom: 20px;">
                        \${won ? '🏆 Congratulations!' : '💔 Game Over'}
                    </h2>
                    <p style="font-size: 1.3em; margin-bottom: 20px;">
                        Final Score: \${gameState.score}<br>
                        Lives Remaining: \${gameState.lives}
                    </p>
                    <p style="margin-bottom: 30px;">
                        \${won ? 
                            'You have successfully completed your cultural journey through ' + '${game.theme}!' :
                            'Better luck next time! Keep learning about ' + '${game.theme}.'
                        }
                    </p>
                    <button class="play-button" onclick="location.reload()">🔄 Play Again</button>
                </div>
            \`;
        }

        // Auto-save progress
        setInterval(() => {
            localStorage.setItem('gameProgress', JSON.stringify(gameState));
        }, 5000);

        // Load saved progress
        window.onload = () => {
            const saved = localStorage.getItem('gameProgress');
            if (saved) {
                const savedState = JSON.parse(saved);
                if (savedState.score > 0) {
                    if (confirm('Continue from saved game?')) {
                        gameState = savedState;
                        document.getElementById('score').textContent = gameState.score;
                        document.getElementById('lives').textContent = gameState.lives;
                    }
                }
            }
        };
    </script>
</body>
</html>`;

    const blob = new Blob([gameHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${game.title.replace(/\s+/g, '_')}_Complete_Game.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (showFullGame) {
    return (
      <FullGameEngine 
        gameData={{
          title: game.title,
          genre: game.genre,
          theme: game.theme,
          description: game.description
        }}
        onClose={handleCloseGame}
      />
    );
  }

  return (
    <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-blue-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-green-600" />
            🎮 {game.title}
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <Eye className="w-4 h-4" />
            Preview
          </Button>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary">{game.genre}</Badge>
          <Badge variant="outline">{game.theme}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Game Visual Preview */}
        <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg p-8 text-white text-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="text-6xl mb-4 animate-bounce">🎮</div>
            <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
            <p className="text-lg opacity-90">Complete Interactive Game Ready!</p>
          </div>
          <div className="absolute top-4 right-4 text-4xl animate-spin">⭐</div>
          <div className="absolute bottom-4 left-4 text-3xl animate-pulse">🎯</div>
          <div className="absolute top-1/2 left-6 text-2xl animate-bounce">🚀</div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <Code className="w-4 h-4" />
            Game Mechanics:
          </h4>
          <div className="flex flex-wrap gap-2">
            {game.mechanics.map((mechanic, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                {mechanic}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
          <div className="space-y-1">
            {game.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Generated Code:</h4>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            <pre>{game.codeSnippet}</pre>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button 
            onClick={handlePlayNow}
            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Play Complete Game
          </Button>
          <Button 
            onClick={handleDownload}
            variant="outline" 
            className="flex-1 border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Complete Game
          </Button>
          <Button variant="outline" size="icon" className="shadow-md hover:shadow-lg transition-all duration-300">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GamePreview;
