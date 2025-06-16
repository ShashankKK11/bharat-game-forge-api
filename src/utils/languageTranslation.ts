
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

// Translation mappings for common game terms
export const gameTranslations: Record<string, Record<string, string>> = {
  // Game genres
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

// UI text translations
export const uiTranslations: Record<string, Record<string, string>> = {
  'Generate Game': {
    hindi: 'गेम बनाएं',
    bengali: 'গেম তৈরি করুন',
    tamil: 'விளையாட்டு உருவாக்கு',
    telugu: 'గేమ్ సృష్టించండి',
    marathi: 'गेम तयार करा',
    gujarati: 'ગેમ બનાવો',
    kannada: 'ಆಟವನ್ನು ರಚಿಸಿ',
    malayalam: 'ഗെയിം സൃഷ്ടിക്കുക',
    punjabi: 'ਗੇਮ ਬਣਾਓ',
    urdu: 'گیم بنائیں'
  },
  'Play Now': {
    hindi: 'अभी खेलें',
    bengali: 'এখনি খেলুন',
    tamil: 'இப்போது விளையாடு',
    telugu: 'ఇప్పుడే ఆడండి',
    marathi: 'आता खेळा',
    gujarati: 'હવે રમો',
    kannada: 'ಈಗ ಆಡಿ',
    malayalam: 'ഇപ്പോൾ കളിക്കുക',
    punjabi: 'ਹੁਣੇ ਖੇਡੋ',
    urdu: 'اب کھیلیں'
  },
  'Battle Now': {
    hindi: 'अभी युद्ध करें',
    bengali: 'এখনি যুদ্ধ করুন',
    tamil: 'இப்போது போர்',
    telugu: 'ఇప్పుడే యుద్ధం',
    marathi: 'आता लढा',
    gujarati: 'હવે યુદ્ધ',
    kannada: 'ಈಗ ಯುದ್ಧ',
    malayalam: 'ഇപ്പോൾ യുദ്ധം',
    punjabi: 'ਹੁਣੇ ਲੜਾਈ',
    urdu: 'اب جنگ کریں'
  }
};

export const translateText = (text: string, targetLanguage: string): string => {
  if (targetLanguage === 'english') return text;
  
  // Check if it's a UI text
  const uiTranslation = uiTranslations[text]?.[targetLanguage];
  if (uiTranslation) return uiTranslation;
  
  // Check if it's a game genre
  const genreTranslation = gameTranslations[text.toLowerCase()]?.[targetLanguage];
  if (genreTranslation) return genreTranslation;
  
  // For complex text, return a translated version (in a real app, this would call a translation API)
  return text; // Fallback to original text
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
