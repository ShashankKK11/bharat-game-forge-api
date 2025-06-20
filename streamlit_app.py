
import streamlit as st
import json
import time
import random
from datetime import datetime

# Configure the page
st.set_page_config(
    page_title="Indic Game Generator",
    page_icon="🎮",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Add custom CSS animations
st.markdown("""
<style>
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes glow {
        0% {
            box-shadow: 0 0 5px rgba(99, 102, 241, 0.5);
        }
        50% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.8);
        }
        100% {
            box-shadow: 0 0 5px rgba(99, 102, 241, 0.5);
        }
    }
    
    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale(0.3);
        }
        50% {
            transform: scale(1.05);
        }
        70% {
            transform: scale(0.9);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .animated-header {
        animation: fadeInUp 1s ease-out;
    }
    
    .animated-card {
        animation: slideInRight 0.8s ease-out;
        transition: all 0.3s ease;
    }
    
    .animated-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    .pulse-button {
        animation: pulse 2s infinite;
        transition: all 0.3s ease;
    }
    
    .pulse-button:hover {
        animation: none;
        transform: scale(1.05);
    }
    
    .glow-effect {
        animation: glow 2s ease-in-out infinite;
    }
    
    .bounce-in {
        animation: bounceIn 0.6s ease-out;
    }
    
    .hover-scale {
        transition: transform 0.2s ease;
    }
    
    .hover-scale:hover {
        transform: scale(1.02);
    }
    
    .fade-in-delayed {
        animation: fadeInUp 1s ease-out 0.3s both;
    }
    
    .shake-error {
        animation: shake 0.5s ease-in-out;
    }
    
    .loading-dots::after {
        content: '';
        animation: loading-dots 1.5s infinite;
    }
    
    @keyframes loading-dots {
        0%, 20% { content: ''; }
        40% { content: '.'; }
        60% { content: '..'; }
        80%, 100% { content: '...'; }
    }
    
    .gradient-background {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        animation: gradient-shift 3s ease infinite;
    }
    
    @keyframes gradient-shift {
        0%, 100% { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        50% { background: linear-gradient(135deg, #764ba2 0%, #667eea 100%); }
    }
    
    .stButton > button {
        transition: all 0.3s ease !important;
    }
    
    .stButton > button:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2) !important;
    }
    
    .stSelectbox > div > div {
        transition: all 0.3s ease !important;
    }
    
    .stTextInput > div > div > input {
        transition: all 0.3s ease !important;
    }
    
    .stTextInput > div > div > input:focus {
        transform: scale(1.02) !important;
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.3) !important;
    }
</style>
""", unsafe_allow_html=True)

# Language data
LANGUAGES = {
    'english': {'name': 'English', 'native': 'English'},
    'hindi': {'name': 'Hindi', 'native': 'हिंदी'},
    'bengali': {'name': 'Bengali', 'native': 'বাংলা'},
    'telugu': {'name': 'Telugu', 'native': 'తెలుగు'},
    'marathi': {'name': 'Marathi', 'native': 'मराठी'},
    'tamil': {'name': 'Tamil', 'native': 'தமிழ்'},
    'gujarati': {'name': 'Gujarati', 'native': 'ગુજરાતી'},
    'kannada': {'name': 'Kannada', 'native': 'ಕನ್ನಡ'},
    'malayalam': {'name': 'Malayalam', 'native': 'മലയാളം'},
    'punjabi': {'name': 'Punjabi', 'native': 'ਪੰਜਾਬੀ'},
    'odia': {'name': 'Odia', 'native': 'ଓଡ଼ିଆ'},
    'assamese': {'name': 'Assamese', 'native': 'অসমীয়া'},
    'urdu': {'name': 'Urdu', 'native': 'اردو'},
    'sanskrit': {'name': 'Sanskrit', 'native': 'संस्कृत'}
}

GENRES = [
    'Adventure', 'Puzzle', 'Strategy', 'Educational', 'RPG', 
    'Action', 'Simulation', 'Card Game', 'Board Game', 'Quiz'
]

THEMES = [
    'Mythology - Ramayana', 'Mythology - Mahabharata', 'Mythology - Bhagavad Gita',
    'Mythology - Hanuman Chalisa', 'Mythology - Krishna Leela', 'Mythology - Shiva Purana',
    'Historical - Mughal Era', 'Historical - Maratha Empire', 'Historical - Chola Dynasty',
    'Historical - Gupta Empire', 'Historical - Mauryan Empire', 'Historical - Vijayanagara',
    'Festival - Diwali', 'Festival - Holi', 'Festival - Dussehra',
    'Festival - Karva Chauth', 'Festival - Ganesh Chaturthi', 'Festival - Navratri',
    'Culture - Classical Dance', 'Culture - Folk Tales', 'Culture - Ayurveda',
    'Culture - Yoga Traditions', 'Culture - Sanskrit Literature', 'Culture - Vedic Wisdom',
    'Geography - Indian States', 'Geography - Sacred Rivers', 'Geography - Mountain Ranges',
    'Literature - Sanskrit Poetry', 'Literature - Tamil Classics', 'Literature - Vedic Texts',
    'Architecture - Temples', 'Architecture - Forts', 'Architecture - Palaces',
    'Cuisine - Regional Foods', 'Cuisine - Spices & Herbs', 'Cuisine - Festival Foods',
    'Music - Classical Ragas', 'Music - Folk Songs', 'Music - Devotional Music',
    'Art - Madhubani', 'Art - Warli', 'Art - Tanjore Painting'
]

# Pre-built games
PREBUILT_GAMES = [
    {
        "title": "Ramayana Quest",
        "genre": "adventure",
        "theme": "mythology - ramayana",
        "description": "Join Prince Rama on his epic journey through exile, the search for Sita, and the battle against Ravana.",
        "mechanics": ['Story Progression', 'Character Development', 'Battle System', 'Quest Management'],
        "features": ['Voice Narration', 'Interactive Choices', 'Cultural Learning', 'Achievement System']
    },
    {
        "title": "Mahabharata Legends",
        "genre": "strategy",
        "theme": "mythology - mahabharata",
        "description": "Experience the great war of Kurukshetra and make crucial decisions that shape the destiny of kingdoms.",
        "mechanics": ['Strategic Combat', 'Diplomatic Choices', 'Resource Management', 'Alliance Building'],
        "features": ['Multiple Endings', 'Historical Accuracy', 'Character Relationships', 'Moral Dilemmas']
    },
    {
        "title": "Festival Celebrations",
        "genre": "simulation",
        "theme": "festival - diwali",
        "description": "Plan and organize traditional Indian festivals, learn customs, and spread joy in the community.",
        "mechanics": ['Event Planning', 'Resource Management', 'Community Building', 'Cultural Learning'],
        "features": ['Regional Variations', 'Recipe Collection', 'Decoration Crafting', 'Social Sharing']
    },
    {
        "title": "Classical Dance Academy",
        "genre": "educational",
        "theme": "culture - classical dance",
        "description": "Learn and master traditional Indian dance forms through interactive gameplay and cultural education.",
        "mechanics": ['Rhythm Matching', 'Pose Recognition', 'Story Interpretation', 'Performance Scoring'],
        "features": ['Multiple Dance Forms', 'Cultural Context', 'Progressive Learning', 'Performance Mode']
    },
    {
        "title": "Spice Route Trader",
        "genre": "strategy",
        "theme": "cuisine - spices & herbs",
        "description": "Navigate ancient trade routes, discover exotic spices, and build your trading empire across India.",
        "mechanics": ['Trade Management', 'Route Planning', 'Market Analysis', 'Cultural Exchange'],
        "features": ['Historical Accuracy', 'Recipe Discovery', 'Economic Strategy', 'Cultural Learning']
    },
    {
        "title": "Temple Architecture Builder",
        "genre": "simulation",
        "theme": "architecture - temples",
        "description": "Design and construct magnificent Indian temples while learning about architectural principles and cultural significance.",
        "mechanics": ['Building Design', 'Resource Management', 'Historical Accuracy', 'Cultural Integration'],
        "features": ['Authentic Styles', 'Educational Content', 'Visual Showcase', 'Historical Context']
    }
]

# Translation helpers (simplified)
def translate_text(text, target_language):
    if target_language == 'english':
        return text
    
    translations = {
        'hindi': {
            'Generate Your Game': 'अपना गेम बनाएं',
            'Generate Game': 'गेम बनाएं',
            'Play Now': 'अभी खेलें',
            'Download': 'डाउनलोड करें',
            'Ready-to-Play Games': 'तैयार खेल',
            'Custom Game Generator': 'कस्टम गेम जेनरेटर'
        }
    }
    
    return translations.get(target_language, {}).get(text, text)

def generate_game_html(game_data, language):
    """Generate a complete HTML game file"""
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{game_data['title']} - Complete Indic Game</title>
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: gradient-shift 3s ease infinite;
        }}
        @keyframes gradient-shift {{
            0%, 100% {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }}
            50% {{ background: linear-gradient(135deg, #764ba2 0%, #667eea 100%); }}
        }}
        .game-container {{
            max-width: 800px;
            width: 90%;
            background: rgba(255,255,255,0.1);
            padding: 30px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            text-align: center;
            animation: fadeInUp 1s ease-out;
        }}
        @keyframes fadeInUp {{
            from {{
                opacity: 0;
                transform: translateY(30px);
            }}
            to {{
                opacity: 1;
                transform: translateY(0);
            }}
        }}
        .game-title {{
            font-size: 2.5em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            animation: glow 2s ease-in-out infinite alternate;
        }}
        @keyframes glow {{
            from {{ text-shadow: 2px 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.3); }}
            to {{ text-shadow: 2px 2px 4px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.6); }}
        }}
        .play-button {{
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
            animation: pulse 2s infinite;
        }}
        @keyframes pulse {{
            0% {{ transform: scale(1); }}
            50% {{ transform: scale(1.05); }}
            100% {{ transform: scale(1); }}
        }}
        .play-button:hover {{
            transform: scale(1.1);
            animation: none;
        }}
    </style>
</head>
<body>
    <div class="game-container">
        <h1 class="game-title">🎮 {game_data['title']}</h1>
        <p style="font-size: 1.2em; margin-bottom: 20px; opacity: 0.9;">
            {game_data['description']}
        </p>
        
        <div style="margin: 30px 0;">
            <div style="display: inline-block; margin: 10px; padding: 15px; background: rgba(255,255,255,0.2); border-radius: 10px;">
                <strong>Genre:</strong> {game_data['genre']}
            </div>
            <div style="display: inline-block; margin: 10px; padding: 15px; background: rgba(255,255,255,0.2); border-radius: 10px;">
                <strong>Theme:</strong> {game_data['theme']}
            </div>
            <div style="display: inline-block; margin: 10px; padding: 15px; background: rgba(255,255,255,0.2); border-radius: 10px;">
                <strong>Language:</strong> {language}
            </div>
        </div>

        <button class="play-button" onclick="startGame()">🚀 Start Game</button>
        
        <div id="game-area" style="display: none; margin-top: 30px;">
            <h2>Welcome to {game_data['title']}!</h2>
            <p>This is a fully functional {game_data['genre']} game about {game_data['theme']}.</p>
            <p>Game mechanics include: {', '.join(game_data.get('mechanics', []))}</p>
            <button class="play-button" onclick="location.reload()">🔄 Restart</button>
        </div>
    </div>

    <script>
        function startGame() {{
            document.getElementById('game-area').style.display = 'block';
            alert('Game Started! This is a demo version of {game_data["title"]}');
        }}
    </script>
</body>
</html>"""
    return html_content

# Initialize session state
if 'selected_language' not in st.session_state:
    st.session_state.selected_language = 'english'
if 'generated_game' not in st.session_state:
    st.session_state.generated_game = None

# Main app
def main():
    # Header with animation
    st.markdown("""
    <div class="animated-header" style="text-align: center; padding: 2rem 0;">
        <h1 style="color: #6366f1; font-size: 3rem; margin-bottom: 1rem;">
            🎮 Indic Game Generator
        </h1>
        <p style="font-size: 1.2rem; color: #6b7280;">
            Create culturally rich games in Indian languages with AI
        </p>
    </div>
    """, unsafe_allow_html=True)

    # Language Selector with glow effect
    st.sidebar.markdown('<div class="glow-effect">', unsafe_allow_html=True)
    st.sidebar.header("🌍 Language Selection")
    language_options = {code: f"{data['name']} ({data['native']})" 
                       for code, data in LANGUAGES.items()}
    
    selected_lang = st.sidebar.selectbox(
        "Choose your language:",
        options=list(language_options.keys()),
        format_func=lambda x: language_options[x],
        index=list(language_options.keys()).index(st.session_state.selected_language)
    )
    st.sidebar.markdown('</div>', unsafe_allow_html=True)
    
    if selected_lang != st.session_state.selected_language:
        st.session_state.selected_language = selected_lang
        st.rerun()

    # Main content in two columns
    col1, col2 = st.columns([1, 1])

    with col1:
        st.markdown('<div class="fade-in-delayed">', unsafe_allow_html=True)
        st.header("🎯 Ready-to-Play Games")
        
        # Display pre-built games with animations
        for i, game in enumerate(PREBUILT_GAMES):
            with st.container():
                st.markdown(f"""
                <div class="animated-card hover-scale" style="border: 2px solid #e5e7eb; border-radius: 10px; padding: 1rem; margin: 1rem 0; background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);">
                    <h4 style="color: #374151; margin-bottom: 0.5rem;">🎮 {game['title']}</h4>
                    <p style="color: #6b7280; font-size: 0.9rem; margin-bottom: 1rem;">{game['description']}</p>
                    <div style="margin-bottom: 1rem;">
                        <span style="background: #ddd6fe; color: #5b21b6; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.8rem; margin-right: 0.5rem;">{game['genre']}</span>
                        <span style="background: #fed7d7; color: #c53030; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.8rem;">{game['theme'].split(' - ')[0]}</span>
                    </div>
                </div>
                """, unsafe_allow_html=True)
                
                if st.button(f"🎮 {translate_text('Play Now', st.session_state.selected_language)}", key=f"play_{i}", help="Click to load this game"):
                    st.session_state.generated_game = {
                        **game,
                        'language': st.session_state.selected_language,
                        'generated_at': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    }
                    st.markdown('<div class="bounce-in">', unsafe_allow_html=True)
                    st.success(f"✅ {game['title']} loaded successfully!")
                    st.markdown('</div>', unsafe_allow_html=True)

        st.header("🛠️ Custom Game Generator")
        
        # Custom game form with animated inputs
        with st.form("game_generator_form"):
            game_title = st.text_input("🎮 Game Title *", placeholder="e.g., Arjuna's Quest")
            game_genre = st.selectbox("🎯 Genre *", options=[''] + GENRES)
            game_theme = st.selectbox("🎨 Cultural Theme *", options=[''] + THEMES)
            game_description = st.text_area("📝 Additional Description", 
                                           placeholder="Describe your game concept, special features, or target audience...")
            
            submitted = st.form_submit_button(f"✨ {translate_text('Generate Game', st.session_state.selected_language)}")
            
            if submitted:
                if not game_title or not game_genre or not game_theme:
                    st.markdown('<div class="shake-error">', unsafe_allow_html=True)
                    st.error("❌ Please fill in all required fields (marked with *)")
                    st.markdown('</div>', unsafe_allow_html=True)
                else:
                    # Show animated generation progress
                    progress_bar = st.progress(0)
                    status_text = st.empty()
                    
                    for i in range(100):
                        progress_bar.progress(i + 1)
                        if i < 30:
                            status_text.markdown('<div class="loading-dots">🤖 Analyzing cultural context</div>', unsafe_allow_html=True)
                        elif i < 60:
                            status_text.markdown('<div class="loading-dots">🎨 Generating game mechanics</div>', unsafe_allow_html=True)
                        elif i < 90:
                            status_text.markdown('<div class="loading-dots">🌍 Translating to selected language</div>', unsafe_allow_html=True)
                        else:
                            status_text.markdown('<div class="loading-dots">✨ Finalizing your game</div>', unsafe_allow_html=True)
                        time.sleep(0.02)
                    
                    # Generate the game
                    description = game_description or f"An immersive {game_genre} game exploring {game_theme}"
                    
                    generated_game = {
                        'title': game_title,
                        'genre': game_genre,
                        'theme': game_theme,
                        'description': description,
                        'mechanics': [
                            'Turn-based gameplay',
                            'Story-driven progression',
                            'Cultural quiz elements',
                            'Achievement system',
                            'Multiplayer support'
                        ],
                        'features': [
                            'Voice narration in selected language',
                            'Authentic cultural graphics',
                            'Educational content integration',
                            'Leaderboard system',
                            'Offline play support'
                        ],
                        'language': st.session_state.selected_language,
                        'generated_at': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    }
                    
                    st.session_state.generated_game = generated_game
                    progress_bar.progress(100)
                    status_text.text("🎉 Game generated successfully!")
                    st.markdown('<div class="bounce-in">', unsafe_allow_html=True)
                    st.success("✅ Your Indic game is ready to play and download!")
                    st.markdown('</div>', unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)

    with col2:
        st.markdown('<div class="animated-card">', unsafe_allow_html=True)
        st.header("🎮 Generated Game Preview")
        
        if st.session_state.generated_game:
            game = st.session_state.generated_game
            
            # Game preview card with animations
            st.markdown(f"""
            <div class="bounce-in" style="border: 3px solid #10b981; border-radius: 15px; padding: 2rem; background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); margin: 1rem 0;">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h2 style="color: #059669; margin-bottom: 1rem;">🎮 {game['title']}</h2>
                    <div style="margin-bottom: 1rem;">
                        <span style="background: #ddd6fe; color: #5b21b6; padding: 0.5rem 1rem; border-radius: 0.5rem; margin: 0.25rem;">{game['genre']}</span>
                        <span style="background: #fef3c7; color: #d97706; padding: 0.5rem 1rem; border-radius: 0.5rem; margin: 0.25rem;">{game['theme']}</span>
                    </div>
                    <p style="color: #374151; font-size: 1.1rem; line-height: 1.6;">{game['description']}</p>
                </div>
                
                <div style="background: rgba(255,255,255,0.7); padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                    <h4 style="color: #374151; margin-bottom: 1rem;">🔧 Game Mechanics:</h4>
                    <ul style="color: #6b7280; line-height: 1.8;">
                        {''.join([f'<li>• {mechanic}</li>' for mechanic in game['mechanics']])}
                    </ul>
                </div>
                
                <div style="background: rgba(255,255,255,0.7); padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                    <h4 style="color: #374151; margin-bottom: 1rem;">✨ Features:</h4>
                    <ul style="color: #6b7280; line-height: 1.8;">
                        {''.join([f'<li>• {feature}</li>' for feature in game['features']])}
                    </ul>
                </div>
                
                <div style="background: #1f2937; padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
                    <h4 style="color: #10b981; margin-bottom: 1rem;">💻 Generated Code:</h4>
                    <pre style="color: #10b981; font-family: 'Courier New', monospace; font-size: 0.9rem; line-height: 1.4; white-space: pre-wrap;">
// Generated Game Structure
const {game['title'].replace(' ', '')}Game = {{
  title: "{game['title']}",
  genre: "{game['genre']}",
  theme: "{game['theme']}",
  language: "{game['language']}",
  mechanics: [
    "turnBasedGameplay",
    "storyProgression",
    "quizElements"
  ],
  assets: {{
    graphics: "cultural_authentic",
    audio: "indic_traditional",
    fonts: "unicode_support"
  }}
}};
                    </pre>
                </div>
            </div>
            """, unsafe_allow_html=True)
            
            # Action buttons with pulse animation
            col_play, col_download = st.columns(2)
            
            with col_play:
                st.markdown('<div class="pulse-button">', unsafe_allow_html=True)
                if st.button("🎮 Play Complete Game", use_container_width=True):
                    st.markdown('<div class="bounce-in">', unsafe_allow_html=True)
                    st.info("🎮 Game launched! (This would open the full game in a new window)")
                    st.markdown('</div>', unsafe_allow_html=True)
                st.markdown('</div>', unsafe_allow_html=True)
                    
            with col_download:
                # Generate HTML file
                html_content = generate_game_html(game, game['language'])
                
                st.markdown('<div class="pulse-button">', unsafe_allow_html=True)
                st.download_button(
                    label="💾 Download Complete Game",
                    data=html_content,
                    file_name=f"{game['title'].replace(' ', '_')}_Complete_Game.html",
                    mime="text/html",
                    use_container_width=True
                )
                st.markdown('</div>', unsafe_allow_html=True)
            
            # Game info with fade animation
            st.markdown(f"""
            <div class="fade-in-delayed" style="margin-top: 2rem; padding: 1rem; background: #f3f4f6; border-radius: 10px;">
                <h5 style="color: #374151;">📊 Game Information:</h5>
                <p style="color: #6b7280; margin: 0.5rem 0;"><strong>Language:</strong> {LANGUAGES[game['language']]['name']} ({LANGUAGES[game['language']]['native']})</p>
                <p style="color: #6b7280; margin: 0.5rem 0;"><strong>Generated:</strong> {game['generated_at']}</p>
                <p style="color: #6b7280; margin: 0.5rem 0;"><strong>Status:</strong> ✅ Ready to play</p>
            </div>
            """, unsafe_allow_html=True)
            
        else:
            # Placeholder when no game is generated with subtle animation
            st.markdown("""
            <div class="animated-card" style="border: 2px dashed #d1d5db; border-radius: 15px; padding: 3rem; text-align: center; background: #f9fafb;">
                <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.3; animation: pulse 2s infinite;">🎮</div>
                <h3 style="color: #9ca3af; margin-bottom: 1rem;">Your Generated Game Will Appear Here</h3>
                <p style="color: #6b7280;">Choose from ready-to-play games or create your custom game</p>
            </div>
            """, unsafe_allow_html=True)
        st.markdown('</div>', unsafe_allow_html=True)

    # Footer with animation
    st.markdown("---")
    st.markdown("""
    <div class="animated-header" style="text-align: center; padding: 2rem 0; color: #6b7280;">
        <p>🎮 Built with Streamlit • Promoting Indian Culture Through Gaming 🇮🇳</p>
    </div>
    """, unsafe_allow_html=True)

if __name__ == "__main__":
    main()
