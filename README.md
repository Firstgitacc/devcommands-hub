# DevCommands Hub 🚀

A beautiful, searchable developer commands reference website built with React and Tailwind CSS.

## 📋 Features

- **Dynamic Data Loading**: Automatically loads commands from JSON files
- **Advanced Search**: Search across all commands and descriptions
- **Multi-level Filtering**: Filter by tool (Docker, Git, Kubernetes, Shell) and category
- **Copy to Clipboard**: One-click copy functionality for any command
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark Mode UI**: Modern dark theme with high-contrast text
- **Statistics Dashboard**: View command counts by tool
- **Bento Grid Layout**: Beautiful card-based layout

## 📁 Project Structure

```
devcommands-hub/
├── src/
│   ├── components/          # React components
│   │   ├── CommandCard.jsx  # Individual command card
│   │   ├── SearchBar.jsx    # Search and filter component
│   │   ├── Header.jsx       # Page header
│   │   ├── Statistics.jsx   # Statistics footer
│   │   └── EmptyState.jsx   # Empty state component
│   ├── data/               # JSON data files (EDIT THESE!)
│   │   ├── docker.json     # Docker commands
│   │   ├── git.json        # Git commands
│   │   ├── kubernetes.json # Kubernetes commands
│   │   └── shell.json      # Shell commands
│   ├── utils/              # Utility functions
│   │   └── dataLoader.js   # Data loading logic
│   ├── styles/             # CSS files
│   │   └── index.css       # Main CSS with Tailwind
│   ├── App.jsx             # Main App component
│   └── main.jsx            # Entry point
├── public/                 # Static assets
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm installed

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 How to Add/Update Commands

### Adding a New Command Set

1. **Create a new JSON file** in `src/data/` (e.g., `npm.json`)

2. **Format your JSON file** following this structure:
   ```json
   [
     {
       "category": "Category Name",
       "commands": [
         {
           "command": "your-command-here",
           "description": "What this command does"
         }
       ]
     }
   ]
   ```

3. **Update `src/utils/dataLoader.js`**:
   ```javascript
   // Add import
   import npmData from '../data/npm.json';
   
   // Add to dataSources array
   const dataSources = [
     // ... existing sources
     { name: 'NPM', data: npmData, color: 'red' },
   ];
   ```

4. **Update `src/components/CommandCard.jsx`** (optional - for custom color):
   ```javascript
   const colors = {
     // ... existing colors
     'red': 'bg-red-500/20 text-red-400 border-red-500/30',
   };
   ```

5. **Update `src/components/Statistics.jsx`** (optional - for custom color):
   ```javascript
   const colors = {
     // ... existing colors
     'NPM': 'text-red-400',
   };
   ```

### Updating Existing Commands

Simply edit the JSON files in `src/data/` - no code changes needed!

**Example: Adding a new Git command**

Edit `src/data/git.json`:
```json
{
  "category": "Commits and Branches",
  "commands": [
    // ... existing commands
    {
      "command": "git merge branch-name",
      "description": "Merge a branch into current branch"
    }
  ]
}
```

Save the file and the website will automatically update!

## 🎨 Customization

### Changing Colors

Edit color schemes in:
- `src/components/CommandCard.jsx` - Tool badge colors
- `src/components/Statistics.jsx` - Statistics card colors
- `src/utils/dataLoader.js` - Tool color definitions

### Modifying Layout

- **Grid Layout**: Edit grid classes in `src/App.jsx`
- **Card Design**: Modify `src/components/CommandCard.jsx`
- **Search Bar**: Customize `src/components/SearchBar.jsx`

### Styling

All styles use Tailwind CSS. Main CSS file: `src/styles/index.css`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📦 Dependencies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 🤝 Contributing

1. Add your JSON files to `src/data/`
2. Update `src/utils/dataLoader.js`
3. Test locally with `npm run dev`
4. Build with `npm run build`

## 📄 License

MIT

## 🙏 Acknowledgments

Built with ❤️ for developers who need quick command references.

---

**Quick Tips:**
- All command data is in `src/data/*.json` - edit these files to update commands
- No coding required to add/remove commands - just edit JSON files!
- Hot reload is enabled - changes appear immediately in development mode
