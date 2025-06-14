
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Copy, ExternalLink, Key, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ApiDocs = () => {
  const [apiKey, setApiKey] = useState('indic_game_api_key_demo_12345');
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      description: "Code snippet copied successfully",
    });
  };

  const endpoints = [
    {
      method: 'POST',
      endpoint: '/api/generate-game',
      description: 'Generate a new game with specified parameters',
      parameters: [
        { name: 'title', type: 'string', required: true, description: 'Game title' },
        { name: 'genre', type: 'string', required: true, description: 'Game genre' },
        { name: 'theme', type: 'string', required: true, description: 'Cultural theme' },
        { name: 'language', type: 'string', required: true, description: 'Target language code' },
        { name: 'description', type: 'string', required: false, description: 'Additional description' }
      ]
    },
    {
      method: 'GET',
      endpoint: '/api/languages',
      description: 'Get list of supported Indian languages',
      parameters: []
    },
    {
      method: 'GET',
      endpoint: '/api/themes',
      description: 'Get available cultural themes',
      parameters: []
    },
    {
      method: 'GET',
      endpoint: '/api/games/{id}',
      description: 'Retrieve a specific generated game',
      parameters: [
        { name: 'id', type: 'string', required: true, description: 'Game ID' }
      ]
    }
  ];

  const codeExamples = {
    javascript: `// Generate a new game
const response = await fetch('https://api.indicgames.dev/api/generate-game', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ${apiKey}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: "Krishna's Adventure",
    genre: "adventure",
    theme: "mythology-krishna",
    language: "hindi",
    description: "An epic journey of Lord Krishna"
  })
});

const game = await response.json();
console.log(game);`,
    
    python: `import requests

# Generate a new game
url = "https://api.indicgames.dev/api/generate-game"
headers = {
    "Authorization": f"Bearer ${apiKey}",
    "Content-Type": "application/json"
}
data = {
    "title": "Krishna's Adventure",
    "genre": "adventure", 
    "theme": "mythology-krishna",
    "language": "hindi",
    "description": "An epic journey of Lord Krishna"
}

response = requests.post(url, headers=headers, json=data)
game = response.json()
print(game)`,
    
    curl: `curl -X POST "https://api.indicgames.dev/api/generate-game" \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Krishna'\''s Adventure",
    "genre": "adventure",
    "theme": "mythology-krishna", 
    "language": "hindi",
    "description": "An epic journey of Lord Krishna"
  }'`
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Code className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">API Documentation</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Integrate Indic Game Generation into your applications with our powerful REST API
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* API Key Section */}
          <Card className="mb-8 shadow-lg border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Key className="w-6 h-6" />
                Get Started with API
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Your API Key:</h4>
                  <div className="bg-black/20 p-3 rounded-lg font-mono text-sm break-all">
                    {apiKey}
                  </div>
                </div>
                <div className="space-y-3">
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-blue-600 hover:bg-blue-50"
                    onClick={() => copyToClipboard(apiKey)}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy API Key
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Full Docs
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Endpoints */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  API Endpoints
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge 
                        variant={endpoint.method === 'GET' ? 'secondary' : 'default'}
                        className={endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                        {endpoint.endpoint}
                      </code>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{endpoint.description}</p>
                    {endpoint.parameters.length > 0 && (
                      <div className="text-xs text-gray-500">
                        Parameters: {endpoint.parameters.map(p => p.name).join(', ')}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Rate Limits & Features */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>API Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Rate Limits</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Free Tier:</span>
                      <Badge variant="secondary">100 requests/day</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Pro Tier:</span>
                      <Badge variant="secondary">10,000 requests/day</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Enterprise:</span>
                      <Badge variant="secondary">Unlimited</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Supported Features</h4>
                  <div className="space-y-2">
                    {[
                      'Real-time game generation',
                      '22 Indian languages support',
                      'Cultural theme integration',
                      'Multiple game genres',
                      'Downloadable game assets',
                      'Voice narration support'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Code Examples */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Code Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                
                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang}>
                    <div className="relative">
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{code}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(code)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApiDocs;
