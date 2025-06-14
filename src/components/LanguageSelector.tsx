
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Languages } from 'lucide-react';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');
  
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Languages className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Language</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate games in any of the 22 official Indian languages with authentic cultural context
          </p>
        </div>
        
        <Card className="max-w-6xl mx-auto shadow-xl border-0 bg-gradient-to-br from-orange-50 to-red-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-gray-800">
              All Indian Languages Supported
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    selectedLanguage === lang.code
                      ? 'border-orange-500 bg-orange-100 shadow-md'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-sm'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2 text-gray-800">
                      {lang.name}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {lang.english}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full">
                <span className="font-semibold">
                  Selected: {languages.find(l => l.code === selectedLanguage)?.name} 
                  ({languages.find(l => l.code === selectedLanguage)?.english})
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LanguageSelector;
