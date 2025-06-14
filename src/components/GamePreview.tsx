
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Share2, Eye, Code, Gamepad2 } from 'lucide-react';

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
  const handlePlayNow = () => {
    // Create a simple game preview window
    const gameWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
    if (gameWindow) {
      gameWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${game.title} - Game Preview</title>
          <style>
            body {
              margin: 0;
              padding: 20px;
              font-family: 'Arial', sans-serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              text-align: center;
            }
            .game-container {
              max-width: 600px;
              margin: 0 auto;
              background: rgba(255,255,255,0.1);
              padding: 30px;
              border-radius: 20px;
              backdrop-filter: blur(10px);
              box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            }
            .game-title {
              font-size: 2.5em;
              margin-bottom: 20px;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            }
            .game-demo {
              width: 100%;
              height: 300px;
              background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
              background-size: 400% 400%;
              animation: gradientShift 3s ease infinite;
              border-radius: 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.5em;
              font-weight: bold;
              margin: 20px 0;
              position: relative;
              overflow: hidden;
            }
            .game-demo::before {
              content: '${game.title}';
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
              z-index: 2;
            }
            .floating-elements {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
            }
            .floating-element {
              position: absolute;
              animation: float 4s ease-in-out infinite;
              opacity: 0.7;
            }
            .floating-element:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
            .floating-element:nth-child(2) { top: 60%; right: 15%; animation-delay: 1s; }
            .floating-element:nth-child(3) { bottom: 30%; left: 20%; animation-delay: 2s; }
            .floating-element:nth-child(4) { top: 40%; right: 30%; animation-delay: 3s; }
            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              25% { transform: translateY(-10px) rotate(5deg); }
              50% { transform: translateY(-5px) rotate(-5deg); }
              75% { transform: translateY(-15px) rotate(3deg); }
            }
            .info-section {
              margin: 20px 0;
              text-align: left;
            }
            .badge {
              display: inline-block;
              background: rgba(255,255,255,0.2);
              padding: 5px 15px;
              border-radius: 20px;
              margin: 5px;
              font-size: 0.9em;
            }
            .close-btn {
              position: fixed;
              top: 20px;
              right: 20px;
              background: rgba(255,255,255,0.2);
              border: none;
              color: white;
              padding: 10px 20px;
              border-radius: 20px;
              cursor: pointer;
              font-size: 1em;
            }
            .close-btn:hover {
              background: rgba(255,255,255,0.3);
            }
          </style>
        </head>
        <body>
          <button class="close-btn" onclick="window.close()">✕ Close</button>
          <div class="game-container">
            <h1 class="game-title">🎮 ${game.title}</h1>
            <div class="game-demo">
              <div class="floating-elements">
                <div class="floating-element">🎯</div>
                <div class="floating-element">⭐</div>
                <div class="floating-element">🎊</div>
                <div class="floating-element">🚀</div>
              </div>
            </div>
            <div class="info-section">
              <h3>Game Features:</h3>
              ${game.features.map(feature => `<span class="badge">${feature}</span>`).join('')}
            </div>
            <div class="info-section">
              <h3>Game Mechanics:</h3>
              ${game.mechanics.map(mechanic => `<span class="badge">${mechanic}</span>`).join('')}
            </div>
            <p style="margin-top: 30px; font-style: italic; opacity: 0.8;">
              This is a preview of your generated ${game.genre} game with ${game.theme} theme.
              <br>The full game would include interactive gameplay, sound effects, and complete mechanics!
            </p>
          </div>
        </body>
        </html>
      `);
      gameWindow.document.close();
    }
  };

  const handleDownload = () => {
    // Create a downloadable HTML file with the game
    const gameHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${game.title} - Indic Game</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            overflow: hidden;
        }
        .game-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        .game-title {
            font-size: 3em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
            from { text-shadow: 2px 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.3); }
            to { text-shadow: 2px 2px 4px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.6); }
        }
        .game-area {
            width: 80%;
            height: 60%;
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5em;
            position: relative;
            overflow: hidden;
        }
        .instructions {
            position: absolute;
            bottom: 50px;
            font-size: 1.2em;
            opacity: 0.8;
        }
        .cultural-elements {
            position: absolute;
            font-size: 2em;
            animation: float 4s ease-in-out infinite;
        }
        .element-1 { top: 10%; left: 10%; animation-delay: 0s; }
        .element-2 { top: 20%; right: 15%; animation-delay: 1s; }
        .element-3 { bottom: 20%; left: 20%; animation-delay: 2s; }
        .element-4 { top: 40%; right: 10%; animation-delay: 3s; }
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
    </style>
</head>
<body>
    <div class="game-container">
        <h1 class="game-title">${game.title}</h1>
        <div class="game-area">
            <div class="cultural-elements element-1">🏛️</div>
            <div class="cultural-elements element-2">🎭</div>
            <div class="cultural-elements element-3">📿</div>
            <div class="cultural-elements element-4">🪔</div>
            <div>
                <h2>Welcome to ${game.title}!</h2>
                <p>Genre: ${game.genre} | Theme: ${game.theme}</p>
                <p style="margin-top: 30px; font-size: 0.8em; opacity: 0.7;">
                    Generated with Indic Game Generator
                </p>
            </div>
        </div>
        <div class="instructions">
            Click anywhere to start your cultural gaming adventure!
        </div>
    </div>
    <script>
        document.addEventListener('click', function() {
            alert('Welcome to ${game.title}! This is a demo version. The full game would include interactive gameplay, cultural storytelling, and immersive mechanics based on ${game.theme}.');
        });
    </script>
</body>
</html>`;

    const blob = new Blob([gameHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${game.title.replace(/\s+/g, '_')}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

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
            <p className="text-lg opacity-90">Ready to Play!</p>
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
            Play Now
          </Button>
          <Button 
            onClick={handleDownload}
            variant="outline" 
            className="flex-1 border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Game
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
