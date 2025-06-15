
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Languages, ArrowRight, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LanguageConverter = () => {
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [convertedGame, setConvertedGame] = useState(null);
  const { toast } = useToast();

  const languages = [
    { code: 'hindi', name: 'हिंदी', english: 'Hindi' },
    { code: 'bengali', name: 'বাংলা', english: 'Bengali' },
    { code: 'telugu', name: 'తెలుగు', english: 'Telugu' },
    { code: 'marathi', name: 'मराठी', english: 'Marathi' },
    { code: 'tamil', name: 'தமிழ்', english: 'Tamil' },
    { code: 'gujarati', name: 'ગુજરાતી', english: 'Gujarati' },
    { code: 'urdu', name: 'اردو', english: 'Urdu' },
    { code: 'kannada', name: 'ಕನ್ನಡ', english: 'Kannada' },
    { code: 'odia', name: 'ଓଡ଼ିଆ', english: 'Odia' },
    { code: 'malayalam', name: 'മലയാളം', english: 'Malayalam' },
    { code: 'punjabi', name: 'ਪੰਜਾਬੀ', english: 'Punjabi' },
    { code: 'assamese', name: 'অসমীয়া', english: 'Assamese' },
    { code: 'maithili', name: 'मैथिली', english: 'Maithili' },
    { code: 'sanskrit', name: 'संस्कृत', english: 'Sanskrit' },
    { code: 'nepali', name: 'नेपाली', english: 'Nepali' },
    { code: 'konkani', name: 'कोंकणी', english: 'Konkani' },
    { code: 'manipuri', name: 'মণিপুরী', english: 'Manipuri' },
    { code: 'sindhi', name: 'سندھی', english: 'Sindhi' },
    { code: 'dogri', name: 'डोगरी', english: 'Dogri' },
    { code: 'kashmiri', name: 'کٲشُر', english: 'Kashmiri' },
    { code: 'santali', name: 'ᱥᱟᱱᱛᱟᱲᱤ', english: 'Santali' },
    { code: 'bodo', name: 'बड़ो', english: 'Bodo' }
  ];

  const sampleGames = [
    {
      title: "राम की यात्रा",
      language: "hindi",
      description: "एक महाकाव्यिक साहसिक खेल जहाँ आप राम के साथ उनकी 14 साल की वनवास यात्रा में शामिल होते हैं।"
    },
    {
      title: "রামের যাত্রা",
      language: "bengali", 
      description: "একটি মহাকাব্যিক অ্যাডভেঞ্চার গেম যেখানে আপনি রামের সাথে তার ১৪ বছরের বনবাস যাত্রায় যোগ দেন।"
    },
    {
      title: "రామ యాత్ర",
      language: "telugu",
      description: "రాముడితో కలిసి అతని 14 సంవత్సరాల వనవాస ప్రయాణంలో మీరు పాల్గొనే ఒక మహాకావ్య సాహస గేమ్।"
    }
  ];

  const handleConvert = async () => {
    if (!sourceLanguage || !targetLanguage) {
      toast({
        title: "Missing Selection",
        description: "Please select both source and target languages",
        variant: "destructive",
      });
      return;
    }

    if (sourceLanguage === targetLanguage) {
      toast({
        title: "Same Language",
        description: "Source and target languages cannot be the same",
        variant: "destructive",
      });
      return;
    }

    setIsConverting(true);

    // Simulate language conversion
    setTimeout(() => {
      const sourceGame = sampleGames.find(g => g.language === sourceLanguage);
      const targetLang = languages.find(l => l.code === targetLanguage);
      
      if (sourceGame && targetLang) {
        const mockConvertedGame = {
          originalTitle: sourceGame.title,
          originalLanguage: sourceLanguage,
          convertedTitle: `Converted: ${sourceGame.title}`,
          targetLanguage: targetLanguage,
          targetLanguageName: targetLang.name,
          originalDescription: sourceGame.description,
          convertedDescription: `[${targetLang.english}] This game has been converted to ${targetLang.english} with culturally appropriate adaptations and native script rendering.`,
          conversionFeatures: [
            'Native script rendering',
            'Cultural context adaptation',
            'Voice narration in target language',
            'Regional folklore integration',
            'Localized UI elements'
          ]
        };
        
        setConvertedGame(mockConvertedGame);
        
        toast({
          title: "Conversion Complete!",
          description: `Game successfully converted to ${targetLang.english}`,
        });
      }
      
      setIsConverting(false);
    }, 2500);
  };

  const resetConverter = () => {
    setSourceLanguage('');
    setTargetLanguage('');
    setConvertedGame(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Languages className="w-12 h-12 text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Language Converter</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Convert any game between all 22 official Indian languages with AI-powered translation and cultural adaptation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Conversion Controls */}
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <RefreshCw className="w-6 h-6 text-indigo-600" />
                Convert Game Language
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From Language *
                </label>
                <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
                  <SelectTrigger className="border-2 border-indigo-200 focus:border-indigo-500">
                    <SelectValue placeholder="Select source language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{lang.name}</span>
                          <span className="text-gray-500">({lang.english})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-indigo-400" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To Language *
                </label>
                <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                  <SelectTrigger className="border-2 border-indigo-200 focus:border-indigo-500">
                    <SelectValue placeholder="Select target language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{lang.name}</span>
                          <span className="text-gray-500">({lang.english})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4 space-y-3">
                <Button
                  onClick={handleConvert}
                  disabled={isConverting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 text-lg"
                >
                  {isConverting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Converting Language...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Languages className="w-5 h-5" />
                      Convert Game
                    </div>
                  )}
                </Button>

                <Button
                  onClick={resetConverter}
                  variant="outline"
                  className="w-full"
                >
                  Reset Converter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Conversion Result */}
          <div className="space-y-6">
            {convertedGame ? (
              <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800">Conversion Successful!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Original</h4>
                      <p className="text-lg font-medium">{convertedGame.originalTitle}</p>
                      <Badge variant="outline" className="mt-2">
                        {languages.find(l => l.code === convertedGame.originalLanguage)?.english}
                      </Badge>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-2">Converted</h4>
                      <p className="text-lg font-medium">{convertedGame.convertedTitle}</p>
                      <Badge variant="default" className="mt-2 bg-green-600">
                        {convertedGame.targetLanguageName}
                      </Badge>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Converted Description</h4>
                    <p className="text-gray-600">{convertedGame.convertedDescription}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3">Conversion Features</h4>
                    <div className="space-y-2">
                      {convertedGame.conversionFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Download Converted Game
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-xl border-0 bg-gray-50 border-dashed border-2 border-gray-300">
                <CardContent className="py-16 text-center">
                  <div className="text-gray-400 mb-4">
                    <Languages className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-xl font-semibold">Converted Game Will Appear Here</h3>
                    <p className="text-gray-500 mt-2">Select languages and click convert to see the result</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Sample Games */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-indigo-800">Sample Games in Different Languages</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sampleGames.map((game, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-2">{game.title}</h4>
                    <Badge variant="secondary" className="mb-4">
                      {languages.find(l => l.code === game.language)?.english}
                    </Badge>
                    <p className="text-gray-600 text-sm leading-relaxed">{game.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageConverter;
