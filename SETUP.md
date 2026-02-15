# Quick Setup Guide

## Step 1: Install Dependencies
```bash
cd devcommands-hub
npm install
```

## Step 2: Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
```

## Step 3: Start Development Server
```bash
npm start
```

The app will open at http://localhost:3000

## Adding New Commands - Quick Reference

### Method 1: Update existing files
Just edit the JSON files in `src/data/` folder:
- `docker.json`
- `git.json`
- `kubernetes.json`
- `shell.json`

### Method 2: Add new technology
1. Create new JSON file in `src/data/` (e.g., `python.json`)
2. Add import to `src/utils/dataLoader.js`
3. Add config to `src/utils/techConfig.js`

## Troubleshooting

### If Tailwind styles don't load:
Make sure you have `postcss.config.js`:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### If imports fail:
- Check file paths are correct
- Make sure JSON files are valid (use JSONLint)
- Restart development server

### Build errors:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```
