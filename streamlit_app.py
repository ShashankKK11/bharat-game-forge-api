
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
        }}
        .play-button:hover {{
            transform: scale(1.05);
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
    # Header
    st.markdown("""
    <div style="text-align: center; padding: 2rem 0;">
        <h1 style="color: #6366f1; font-size: 3rem; margin-bottom: 1rem;">
            🎮 Indic Game Generator
        </h1>
        <p style="font-size: 1.2rem; color: #6b7280;">
            Create culturally rich games in Indian languages with AI
        </p>
    </div>
    """, unsafe_allow_html=True)

    # Language Selector
    st.sidebar.header("🌍 Language Selection")
    language_options = {code: f"{data['name']} ({data['native']})" 
                       for code, data in LANGUAGES.items()}
    
    selected_lang = st.sidebar.selectbox(
        "Choose your language:",
        options=list(language_options.keys()),
        format_func=lambda x: language_options[x],
        index=list(language_options.keys()).index(st.session_state.selected_language)
    )
    
    if selected_lang != st.session_state.selected_language:
        st.session_state.selected_language = selected_lang
        st.rerun()

    # Main content in two columns
    col1, col2 = st.columns([1, 1])

    with col1:
        st.header("🎯 Ready-to-Play Games")
        
        # Display pre-built games
        for i, game in enumerate(PREBUILT_GAMES):
            with st.container():
                st.markdown(f"""
                <div style="border: 2px solid #e5e7eb; border-radius: 10px; padding: 1rem; margin: 1rem 0; background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);">
                    <h4 style="color: #374151; margin-bottom: 0.5rem;">🎮 {game['title']}</h4>
                    <p style="color: #6b7280; font-size: 0.9rem; margin-bottom: 1rem;">{game['description']}</p>
                    <div style="margin-bottom: 1rem;">
                        <span style="background: #ddd6fe; color: #5b21b6; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.8rem; margin-right: 0.5rem;">{game['genre']}</span>
                        <span style="background: #fed7d7; color: #c53030; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.8rem;">{game['theme'].split(' - ')[0]}</span>
                    </div>
                </div>
                """, unsafe_allow_html=True)
                
                if st.button(f"🎮 {translate_text('Play Now', st.session_state.selected_language)}", key=f"play_{i}"):
                    st.session_state.generated_game = {
                        **game,
                        'language': st.session_state.selected_language,
                        'generated_at': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    }
                    st.success(f"✅ {game['title']} loaded successfully!")

        st.header("🛠️ Custom Game Generator")
        
        # Custom game form
        with st.form("game_generator_form"):
            game_title = st.text_input("🎮 Game Title *", placeholder="e.g., Arjuna's Quest")
            game_genre = st.selectbox("🎯 Genre *", options=[''] + GENRES)
            game_theme = st.selectbox("🎨 Cultural Theme *", options=[''] + THEMES)
            game_description = st.text_area("📝 Additional Description", 
                                           placeholder="Describe your game concept, special features, or target audience...")
            
            submitted = st.form_submit_button(f"✨ {translate_text('Generate Game', st.session_state.selected_language)}")
            
            if submitted:
                if not game_title or not game_genre or not game_theme:
                    st.error("❌ Please fill in all required fields (marked with *)")
                else:
                    # Show generation progress
                    progress_bar = st.progress(0)
                    status_text = st.empty()
                    
                    for i in range(100):
                        progress_bar.progress(i + 1)
                        if i < 30:
                            status_text.text("🤖 Analyzing cultural context...")
                        elif i < 60:
                            status_text.text("🎨 Generating game mechanics...")
                        elif i < 90:
                            status_text.text("🌍 Translating to selected language...")
                        else:
                            status_text.text("✨ Finalizing your game...")
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
                    st.success("✅ Your Indic game is ready to play and download!")

    with col2:
        st.header("🎮 Generated Game Preview")
        
        if st.session_state.generated_game:
            game = st.session_state.generated_game
            
            # Game preview card
            st.markdown(f"""
            <div style="border: 3px solid #10b981; border-radius: 15px; padding: 2rem; background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); margin: 1rem 0;">
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
            
            # Action buttons
            col_play, col_download = st.columns(2)
            
            with col_play:
                if st.button("🎮 Play Complete Game", use_container_width=True):
                    st.info("🎮 Game launched! (This would open the full game in a new window)")
                    
            with col_download:
                # Generate HTML file
                html_content = generate_game_html(game, game['language'])
                
                st.download_button(
                    label="💾 Download Complete Game",
                    data=html_content,
                    file_name=f"{game['title'].replace(' ', '_')}_Complete_Game.html",
                    mime="text/html",
                    use_container_width=True
                )
            
            # Game info
            st.markdown(f"""
            <div style="margin-top: 2rem; padding: 1rem; background: #f3f4f6; border-radius: 10px;">
                <h5 style="color: #374151;">📊 Game Information:</h5>
                <p style="color: #6b7280; margin: 0.5rem 0;"><strong>Language:</strong> {LANGUAGES[game['language']]['name']} ({LANGUAGES[game['language']]['native']})</p>
                <p style="color: #6b7280; margin: 0.5rem 0;"><strong>Generated:</strong> {game['generated_at']}</p>
                <p style="color: #6b7280; margin: 0.5rem 0;"><strong>Status:</strong> ✅ Ready to play</p>
            </div>
            """, unsafe_allow_html=True)
            
        else:
            # Placeholder when no game is generated
            st.markdown("""
            <div style="border: 2px dashed #d1d5db; border-radius: 15px; padding: 3rem; text-align: center; background: #f9fafb;">
                <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.3;">🎮</div>
                <h3 style="color: #9ca3af; margin-bottom: 1rem;">Your Generated Game Will Appear Here</h3>
                <p style="color: #6b7280;">Choose from ready-to-play games or create your custom game</p>
            </div>
            """, unsafe_allow_html=True)

    # Footer
    st.markdown("---")
    st.markdown("""
    <div style="text-align: center; padding: 2rem 0; color: #6b7280;">
        <p>🎮 Built with Streamlit • Promoting Indian Culture Through Gaming 🇮🇳</p>
    </div>
    """, unsafe_allow_html=True)

if __name__ == "__main__":
    main()
