
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages } from '@/utils/languageTranslation';

const LanguageSelector = () => {
  const { selectedLanguage, setSelectedLanguage, t, getCurrentLanguage } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Languages className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('Choose Your Language')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('Generate games in any of the 22 official Indian languages with authentic cultural context')}
          </p>
        </div>
        
        <Card className="max-w-6xl mx-auto shadow-xl border-0 bg-gradient-to-br from-orange-50 to-red-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-gray-800">
              {t('All Indian Languages Supported')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* English option */}
              <div
                onClick={() => setSelectedLanguage('english')}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedLanguage === 'english'
                    ? 'border-orange-500 bg-orange-100 shadow-md'
                    : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-sm'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2 text-gray-800">
                    English
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    English
                  </Badge>
                </div>
              </div>
              
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
                  {t('Selected')}: {selectedLanguage === 'english' ? 'English' : getCurrentLanguage().name} 
                  ({selectedLanguage === 'english' ? 'English' : getCurrentLanguage().english})
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
