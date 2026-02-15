# DevCommands Hub - File Structure

## 📂 Complete Project Structure

```
devcommands-hub/
│
├── 📁 public/
│   └── index.html                    # Main HTML file
│
├── 📁 src/
│   │
│   ├── 📁 components/                # All React Components
│   │   ├── ActiveFilters.jsx         # Shows active filter chips
│   │   ├── CommandCard.jsx           # Individual command display
│   │   ├── CommandsHub.jsx           # 🎯 MAIN COMPONENT (orchestrates everything)
│   │   ├── EmptyState.jsx            # "No results" message
│   │   ├── SearchBar.jsx             # Search input + category filters
│   │   └── TechCard.jsx              # Technology selector buttons
│   │
│   ├── 📁 data/                      # ⭐ JSON FILES - UPDATE THESE!
│   │   ├── docker.json               # Docker commands
│   │   ├── git.json                  # Git commands
│   │   ├── kubernetes.json           # Kubernetes commands
│   │   └── shell.json                # Shell/Linux commands
│   │
│   ├── 📁 styles/                    # CSS Styling
│   │   ├── App.css                   # Main app styles
│   │   └── index.css                 # Global styles with Tailwind
│   │
│   ├── 📁 utils/                     # Utility Functions
│   │   ├── dataLoader.js             # 🔧 Loads & processes JSON files
│   │   └── techConfig.js             # 🎨 Technology icons & colors
│   │
│   ├── App.js                        # Root App component
│   └── index.js                      # Entry point (renders App)
│
├── 📄 package.json                   # Project dependencies
├── 📄 tailwind.config.js             # Tailwind CSS configuration
├── 📄 postcss.config.js              # PostCSS configuration
├── 📄 .gitignore                     # Git ignore rules
├── 📄 README.md                      # Complete documentation
└── 📄 SETUP.md                       # Quick setup guide

```

## 🎯 Key Files to Know

### For Adding/Updating Commands:
- **`src/data/*.json`** - Add your commands here

### For Adding New Technologies:
1. **`src/data/newtech.json`** - Create new JSON file
2. **`src/utils/dataLoader.js`** - Import the file
3. **`src/utils/techConfig.js`** - Add icon and colors

### For Styling Changes:
- **`src/utils/techConfig.js`** - Colors and badges
- **`src/components/*.jsx`** - Individual component styles

## 📊 Component Hierarchy

```
App.js
└── CommandsHub.jsx (Main Container)
    ├── Header (Title & Description)
    ├── TechCard.jsx (x4) - Docker, Git, K8s, Shell
    ├── SearchBar.jsx
    │   └── Category Filter Buttons
    ├── ActiveFilters.jsx (Filter Chips)
    ├── Results Count
    ├── CommandCard.jsx (Multiple) - Grid of Commands
    │   ├── Technology Badge
    │   ├── Category Badge
    │   ├── Copy Button
    │   ├── Command Display
    │   └── Description
    └── EmptyState.jsx (When no results)
```

## 🔄 Data Flow

```
JSON Files (src/data/)
    ↓
dataLoader.js (processes data)
    ↓
CommandsHub.jsx (manages state)
    ↓
Child Components (display data)
```

## 💡 Quick Tips

1. **To add commands**: Edit JSON files in `src/data/`
2. **To add technology**: Follow 3-step process in README
3. **To change colors**: Edit `src/utils/techConfig.js`
4. **To modify layout**: Edit component files in `src/components/`

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Your app will be running at: http://localhost:3000
```
