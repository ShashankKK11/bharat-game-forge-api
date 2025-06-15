
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, RefreshCw, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GameNameGenerator = () => {
  const [username, setUsername] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [generatedName, setGeneratedName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateGameName = async () => {
    if (!username.trim()) {
      toast({
        title: "Username Required",
        description: "Please enter a username to generate a game name",
        variant: "destructive",
      });
      return;
    }

    if (!apiKey.trim()) {
      toast({
        title: "API Key Required", 
        description: "Please enter your Zylalabs API key",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch(
        `https://zylalabs.com/api/2946/game+name+generator+api/3089/username+generator?username=${encodeURIComponent(username)}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      
      // The response structure may vary, adjust based on actual API response
      const gameName = data.game_name || data.name || data.result || 'Generated Game Name';
      setGeneratedName(gameName);
      
      toast({
        title: "Game Name Generated!",
        description: "Your unique game name has been created successfully",
      });
    } catch (error) {
      console.error('Error generating game name:', error);
      toast({
        title: "Generation Failed",
        description: "Failed to generate game name. Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (generatedName) {
      await navigator.clipboard.writeText(generatedName);
      toast({
        title: "Copied!",
        description: "Game name copied to clipboard",
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Game Name Generator</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate unique and creative game names using AI-powered name generation
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">
                Generate Your Game Name
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="apiKey" className="text-sm font-medium text-gray-700">
                    Zylalabs API Key
                  </Label>
                  <Input
                    id="apiKey"
                    type="password"
                    placeholder="Enter your Zylalabs API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Get your API key from{' '}
                    <a 
                      href="https://zylalabs.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Zylalabs
                    </a>
                  </p>
                </div>

                <div>
                  <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                    Username / Base Name
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter a username or base name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <Button
                onClick={generateGameName}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Generate Game Name
                  </>
                )}
              </Button>

              {generatedName && (
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Generated Game Name:</h3>
                      <p className="text-xl font-bold text-purple-700">{generatedName}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={copyToClipboard}
                      className="border-purple-300 text-purple-600 hover:bg-purple-50"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GameNameGenerator;
