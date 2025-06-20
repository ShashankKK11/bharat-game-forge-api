export interface Language {
  code: string;
  name: string;
  english: string;
}

export const languages: Language[] = [
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

// Comprehensive UI translations
export const uiTranslations: Record<string, Record<string, string>> = {
  'Choose Your Language': {
    hindi: 'अपनी भाषा चुनें',
    bengali: 'আপনার ভাষা চয়ন করুন',
    tamil: 'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்',
    telugu: 'మీ భాషను ఎంచుకోండి',
    marathi: 'तुमची भाषा निवडा',
    gujarati: 'તમારી ભાષા પસંદ કરો',
    kannada: 'ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    malayalam: 'നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക',
    punjabi: 'ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ',
    urdu: 'اپنی زبان منتخب کریں'
  },
  'Generate games in any of the 22 official Indian languages with authentic cultural context': {
    hindi: '22 आधिकारिक भारतीय भाषाओं में से किसी भी भाषा में प्रामाणिक सांस्कृतिक संदर्भ के साथ गेम बनाएं',
    bengali: '22টি সরকারী ভারতীয় ভাষার যেকোনো একটিতে প্রামাণিক সাংস্কৃতিক প্রেক্ষাপট সহ গেম তৈরি করুন',
    tamil: '22 அதிகாரப்பூர்வ இந்திய மொழிகளில் ஏதேனும் ஒன்றில் உண்மையான கலாச்சார சூழலுடன் விளையாட்டுகளை உருவாக்குங்கள்',
    telugu: '22 అధికారిక భారతీయ భాషలలో దేనిలోనైనా ప్రామాణికమైన సాంస్కృతిక సందర్భంతో గేమ్‌లను రూపొందించండి',
    marathi: '22 अधिकृत भारतीय भाषांपैकी कोणत्याही भाषेत अस्सल सांस्कृतिक संदर्भासह गेम तयार करा',
    gujarati: '22 અધિકૃત ભારતીય ભાષાઓમાંથી કોઈપણમાં પ્રામાણિક સાંસ્કૃતિક સંદર્ભ સાથે ગેમ્સ બનાવો'
  },
  'All Indian Languages Supported': {
    hindi: 'सभी भारतीय भाषाएं समर्थित',
    bengali: 'সকল ভারতীয় ভাষা সমর্থিত',
    tamil: 'அனைத்து இந்திய மொழிகளும் ஆதரிக்கப்படுகின்றன',
    telugu: 'అన్ని భారతీయ భాషలకు మద్దతు ఉంది',
    marathi: 'सर्व भारतीय भाषा समर्थित',
    gujarati: 'બધી ભારતીય ભાષાઓ સપોર્ટેડ'
  },
  'Selected': {
    hindi: 'चयनित',
    bengali: 'নির্বাচিত',
    tamil: 'தேர்ந்தெடுக்கப்பட்டது',
    telugu: 'ఎంపిక చేయబడింది',
    marathi: 'निवडलेले',
    gujarati: 'પસંદ કરેલ'
  },
  'Generate Your Game': {
    hindi: 'अपना गेम बनाएं',
    bengali: 'আপনার গেম তৈরি করুন',
    tamil: 'உங்கள் விளையாட்டை உருவாக்குங்கள்',
    telugu: 'మీ గేమ్‌ను రూపొందించండి',
    marathi: 'तुमचा गेम तयार करा',
    gujarati: 'તમારી ગેમ બનાવો'
  },
  'Use our AI-powered generator to create culturally rich games in minutes': {
    hindi: 'मिनटों में सांस्कृतिक रूप से समृद्ध गेम बनाने के लिए हमारे AI-संचालित जेनरेटर का उपयोग करें',
    bengali: 'মিনিটের মধ্যে সাংস্কৃতিকভাবে সমৃদ্ধ গেম তৈরি করতে আমাদের AI-চালিত জেনারেটর ব্যবহার করুন',
    tamil: 'நிமிடங்களில் கலாச்சார ரீதியாக வளமான கேம்களை உருவாக்க எங்கள் AI-இயங்கும் ஜெனரேட்டரைப் பயன்படுத்துங்கள்'
  },
  'Ready-to-Play Games': {
    hindi: 'खेलने के लिए तैयार गेम्स',
    bengali: 'খেলার জন্য প্রস্তুত গেমস',
    tamil: 'விளையாட தயார் விளையாட்டுகள்',
    telugu: 'ఆట ఆడటానికి సిద్ధంగా ఉన్న గేమ్‌లు',
    marathi: 'खेळण्यासाठी तयार गेम्स',
    gujarati: 'રમવા માટે તૈયાર ગેમ્સ'
  }
};

// Game genre translations
export const gameTranslations: Record<string, Record<string, string>> = {
  adventure: {
    hindi: 'साहसिक',
    bengali: 'অ্যাডভেঞ্চার',
    tamil: 'சாகசம்',
    telugu: 'సాహసం',
    marathi: 'साहसी',
    gujarati: 'સાહસિક',
    kannada: 'ಸಾಹಸ',
    malayalam: 'സാഹസികത',
    punjabi: 'ਸਾਹਸ',
    urdu: 'مہم جوئی'
  },
  puzzle: {
    hindi: 'पहेली',
    bengali: 'ধাঁধা',
    tamil: 'புதிர்',
    telugu: 'పజిల్',
    marathi: 'कोडे',
    gujarati: 'કોયડો',
    kannada: 'ಒಗಟು',
    malayalam: 'പസിൽ',
    punjabi: 'ਬੁਝਾਰਤ',
    urdu: 'پہیلی'
  },
  strategy: {
    hindi: 'रणनीति',
    bengali: 'কৌশল',
    tamil: 'रणनीति',
    telugu: 'వ్యూహం',
    marathi: 'धोरण',
    gujarati: 'વ્યૂહરચના',
    kannada: 'ತಂತ್ರ',
    malayalam: 'തന്ത്രം',
    punjabi: 'ਰਣਨੀਤੀ',
    urdu: 'حکمت عملی'
  },
  action: {
    hindi: 'एक्शन',
    bengali: 'অ্যাকশন',
    tamil: 'நடவடிக்கை',
    telugu: 'యాక్షన్',
    marathi: 'अॅक्शन',
    gujarati: 'એક્શન',
    kannada: 'ಆಕ್ಷನ್',
    malayalam: 'ആക്ഷൻ',
    punjabi: 'ਐਕਸ਼ਨ',
    urdu: 'ایکشن'
  },
  educational: {
    hindi: 'शैक्षिक',
    bengali: 'শিক্ষামূলক',
    tamil: 'கல்வி',
    telugu: 'విద్యా',
    marathi: 'शैक्षणिक',
    gujarati: 'શૈક્ષણિક',
    kannada: 'ಶೈಕ್ಷಣಿಕ',
    malayalam: 'വിദ്യാഭ്യാസ',
    punjabi: 'ਸਿੱਖਿਆ',
    urdu: 'تعلیمی'
  }
};

export const translateText = (text: string, targetLanguage: string): string => {
  if (targetLanguage === 'english') return text;
  
  // Check UI translations first
  const uiTranslation = uiTranslations[text]?.[targetLanguage];
  if (uiTranslation) return uiTranslation;
  
  // Check game genre translations
  const genreTranslation = gameTranslations[text.toLowerCase()]?.[targetLanguage];
  if (genreTranslation) return genreTranslation;
  
  // Return original text if no translation found
  return text;
};

export const translateGameContent = (game: any, targetLanguage: string) => {
  if (targetLanguage === 'english') return game;
  
  return {
    ...game,
    title: translateGameTitle(game.title, targetLanguage),
    description: translateGameDescription(game.description, targetLanguage),
    genre: translateText(game.genre, targetLanguage),
    language: targetLanguage
  };
};

const translateGameTitle = (title: string, targetLanguage: string): string => {
  const titleTranslations: Record<string, Record<string, string>> = {
    "Ramayana Quest": {
      hindi: "रामायण क्वेस्ट",
      bengali: "রামায়ণ অনুসন্ধান",
      tamil: "ராமாயண தேடல்",
      telugu: "రామాయణ అన్వేషణ",
      marathi: "रामायण शोध",
      gujarati: "રામાયણ શોધ"
    },
    "Mahabharata Legends": {
      hindi: "महाभारत की गाथाएं",
      bengali: "মহাভারতের কিংবদন্তি",
      tamil: "மகாபாரத கதைகள்",
      telugu: "మహాభారత కథలు",
      marathi: "महाभारत दंतकथा",
      gujarati: "મહાભારત દંતકથાઓ"
    },
    "Festival Celebrations": {
      hindi: "त्योहार मनाना",
      bengali: "উৎসব উদযাপন",
      tamil: "திருவிழா கொண்டாட்டம்",
      telugu: "పండుగ వేడుకలు",
      marathi: "सण साजरा",
      gujarati: "તહેવાર ઉજવણી"
    }
  };
  
  return titleTranslations[title]?.[targetLanguage] || title;
};

const translateGameDescription = (description: string, targetLanguage: string): string => {
  // In a real implementation, this would use a translation API
  // For now, return the original description
  return description;
};
