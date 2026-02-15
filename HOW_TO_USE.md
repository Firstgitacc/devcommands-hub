# How to Use DevCommands Hub

## 🎯 Purpose
This app helps you manage and search developer commands across different technologies. Instead of hardcoding commands, they're stored in JSON files that you can easily update.

---

## 📝 Adding Commands to Existing Technologies

### Step 1: Locate the JSON File
Go to: `src/data/`

You'll see:
- `docker.json` - For Docker commands
- `git.json` - For Git commands  
- `kubernetes.json` - For Kubernetes commands
- `shell.json` - For Shell/Linux commands

### Step 2: Edit the JSON File
Open any file and follow this format:

```json
[
  {
    "category": "Your Category Name",
    "commands": [
      {
        "command": "your-command --flag",
        "description": "What this command does"
      },
      {
        "command": "another-command",
        "description": "Another description"
      }
    ]
  }
]
```

### Example: Adding a Docker Command

**Before:**
```json
{
  "category": "Containers",
  "commands": [
    { "command": "docker ps", "description": "List running containers" }
  ]
}
```

**After:**
```json
{
  "category": "Containers",
  "commands": [
    { "command": "docker ps", "description": "List running containers" },
    { "command": "docker logs container-id", "description": "View container logs" }
  ]
}
```

### Step 3: Save and Refresh
- Save the JSON file
- The app will automatically reload (if running `npm start`)
- Your new command appears immediately!

---

## 🆕 Adding a New Technology (e.g., Python, NPM, AWS)

### Step 1: Create JSON File

Create: `src/data/python.json`

```json
[
  {
    "category": "Package Management",
    "commands": [
      {
        "command": "pip install package-name",
        "description": "Install a Python package"
      },
      {
        "command": "pip list",
        "description": "List installed packages"
      }
    ]
  },
  {
    "category": "Virtual Environments",
    "commands": [
      {
        "command": "python -m venv env",
        "description": "Create virtual environment"
      },
      {
        "command": "source env/bin/activate",
        "description": "Activate virtual environment"
      }
    ]
  }
]
```

### Step 2: Import in dataLoader.js

**File:** `src/utils/dataLoader.js`

**Add import at top:**
```javascript
import pythonData from '../data/python.json';
```

**Add to commandsData object:**
```javascript
export const loadCommandsData = () => {
  const commandsData = {
    docker: dockerData,
    git: gitData,
    kubernetes: kubernetesData,
    shell: shellData,
    python: pythonData  // ← Add this line
  };
  return commandsData;
};
```

### Step 3: Add Configuration

**File:** `src/utils/techConfig.js`

**Add import at top:**
```javascript
import { Code } from 'lucide-react';  // Choose an icon from lucide.dev
```

**Add to techConfig object:**
```javascript
export const techConfig = {
  // ... existing configs
  python: {
    icon: Code,                                           // Icon component
    color: 'from-yellow-400 to-blue-500',                // Gradient colors
    badge: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',  // Badge style
    name: 'Python'                                        // Display name
  }
};
```

### Step 4: Restart the App
```bash
npm start
```

You'll now see Python as a new technology card!

---

## 🎨 Choosing Colors and Icons

### Icons
Browse available icons at: https://lucide.dev/icons

Common icons:
- `Code` - Generic code
- `Database` - Databases
- `Cloud` - Cloud services
- `Cpu` - System/hardware
- `Package` - Package managers
- `Server` - Servers

### Colors (Tailwind Gradients)
```javascript
// Blue theme
color: 'from-blue-400 to-blue-600'

// Green theme
color: 'from-green-400 to-emerald-600'

// Purple theme
color: 'from-purple-400 to-pink-600'

// Orange theme
color: 'from-orange-400 to-red-600'

// Yellow theme
color: 'from-yellow-400 to-amber-600'
```

### Badge Colors (match your gradient)
```javascript
// Blue badge
badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30'

// Green badge
badge: 'bg-green-500/20 text-green-400 border-green-500/30'

// Purple badge
badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
```

---

## 📋 JSON File Structure - Complete Example

```json
[
  {
    "category": "Basic Commands",
    "commands": [
      {
        "command": "npm install",
        "description": "Install all dependencies"
      },
      {
        "command": "npm start",
        "description": "Start development server"
      }
    ]
  },
  {
    "category": "Testing",
    "commands": [
      {
        "command": "npm test",
        "description": "Run test suite"
      },
      {
        "command": "npm run test:watch",
        "description": "Run tests in watch mode"
      }
    ]
  }
]
```

---

## ✅ Best Practices

### 1. Organize by Categories
Group related commands together:
- ✅ Good: "Package Management", "Virtual Environments"
- ❌ Bad: "Commands", "Stuff"

### 2. Clear Descriptions
- ✅ Good: "Install a Python package from PyPI"
- ❌ Bad: "Install stuff"

### 3. Use Placeholders
```json
{
  "command": "docker exec -it container-name bash",
  "description": "Open bash shell in running container"
}
```

### 4. Valid JSON
- Use double quotes `"` not single quotes `'`
- Add commas between items
- No comma after last item
- Use JSONLint.com to validate

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to:
- **Netlify**: Drag `build/` folder
- **Vercel**: Connect GitHub repo
- **GitHub Pages**: Use `gh-pages` package

---

## 🐛 Troubleshooting

### Commands not appearing?
1. Check JSON file is valid (use JSONLint)
2. Check import in `dataLoader.js`
3. Restart development server

### Technology card not showing?
1. Check config in `techConfig.js`
2. Make sure icon is imported
3. Check spelling matches exactly

### Styling issues?
1. Run `npm install` again
2. Clear browser cache
3. Check Tailwind config is correct

---

## 💡 Tips

1. **Start Small**: Add a few commands first, test, then add more
2. **Consistent Naming**: Use lowercase for technology keys (docker, git, python)
3. **Regular Backups**: Keep a backup of your JSON files
4. **Version Control**: Use Git to track changes to JSON files

---

## 🎓 Examples

### Adding AWS CLI Commands

**1. Create `src/data/aws.json`:**
```json
[
  {
    "category": "S3",
    "commands": [
      { "command": "aws s3 ls", "description": "List S3 buckets" },
      { "command": "aws s3 cp file s3://bucket/", "description": "Upload file to S3" }
    ]
  },
  {
    "category": "EC2",
    "commands": [
      { "command": "aws ec2 describe-instances", "description": "List EC2 instances" }
    ]
  }
]
```

**2. Update `src/utils/dataLoader.js`:**
```javascript
import awsData from '../data/aws.json';

export const loadCommandsData = () => {
  const commandsData = {
    docker: dockerData,
    git: gitData,
    kubernetes: kubernetesData,
    shell: shellData,
    aws: awsData
  };
  return commandsData;
};
```

**3. Update `src/utils/techConfig.js`:**
```javascript
import { Cloud } from 'lucide-react';

export const techConfig = {
  // ... existing
  aws: {
    icon: Cloud,
    color: 'from-orange-400 to-yellow-600',
    badge: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    name: 'AWS'
  }
};
```

Done! AWS commands are now available! 🎉

---

**Need Help?** Check README.md or PROJECT_STRUCTURE.md
