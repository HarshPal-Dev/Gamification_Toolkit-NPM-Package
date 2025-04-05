# 🎮 GameBoostJS

**GameBoostJS** is a lightweight, plug-and-play **gamification toolkit** for modern web applications. Add XP, badges, levels, and engagement logic to any app effortlessly. Built with simplicity and speed in mind.

---

## 🚀 Features

- 🏅 Reward system (XP, badges, achievements)
- 🎯 Level progression tracking
- 🔒 Unlockable milestones
- ⚡ Plug & play — minimal setup
- 🔧 Rollup.js bundled
- 🧪 Unit tested (Jest)
- 🪶 Lightweight and dependency-free

---

## 📦 Installation

```bash
npm install gamify_by_harsh
```

or with yarn:

```bash
yarn add gamify_by_harsh
```

---

## 📚 Basic Usage

```js
import { GameEngine } from 'gameboostjs';

// Initialize the engine
const game = new GameEngine({
  userId: 'player001',
  levelCap: 20,
});

// Add XP
game.addXP(150);

// Unlock a badge
game.unlockBadge('first-login');

// Get user stats
console.log(game.getUserStats());
```

---

## 🔧 API Overview

### `GameEngine(options)`
| Option      | Type     | Default | Description                    |
|-------------|----------|---------|--------------------------------|
| `userId`    | string   | null    | Unique user identifier         |
| `levelCap`  | number   | 10      | Max level user can reach       |

### Core Methods

| Method                | Returns           | Description                              |
|-----------------------|-------------------|------------------------------------------|
| `addXP(points)`       | void              | Add experience points                    |
| `getLevel()`          | number            | Returns current level                    |
| `unlockBadge(badge)`  | void              | Adds badge to user profile               |
| `getUserStats()`      | object            | Returns XP, badges, level, and more      |

---

## 💡 Example

```js
const game = new GameEngine({ userId: 'johnDoe' });

game.addXP(200);
game.unlockBadge('daily-streak');

if (game.getLevel() >= 5) {
  console.log('Level 5 achieved! 🎉');
}
```

---

## 📁 File Structure

```
GameBoostJS/
├── src/
│   ├── core/           # Core game logic
│   ├── ui/             # UI helpers (optional)
│   ├── utils/          # Helper functions
│   └── index.js        # Entry point
├── tests/              # Jest unit tests
├── rollup.config.js    # Rollup bundler config
├── package.json
└── README.md
```

---

## 🧪 Running Locally

```bash
# Clone the repo
git clone https://github.com/your-username/GameBoostJS.git
cd GameBoostJS

# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm run test
```

---

## 📖 Built With

- **JavaScript (ES6)**
- **Rollup.js** - Module bundler


---

## 🙌 Contributing

Contributions are welcome! Please open issues and PRs.

```bash
# Fork & clone the repo
# Create a new branch
git checkout -b feature-branch
# Make changes, commit, push, and open a PR
```


---
