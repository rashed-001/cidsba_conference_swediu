# Project Initialization Guide (INIT.md)

This document provides step-by-step instructions to initialize, configure, run, and maintain the **IEEE CIDSBA Conference Website** project locally and in production environments.

---

## 📋 Prerequisites

Before starting, ensure your development environment meets the following requirements:

- **Node.js**: `v18.17.0` or higher (LTS recommended)
- **npm**: `v9.0.0` or higher (comes with Node.js)
- **Git**: Installed and configured on your system
- **OS**: Windows, macOS, or Linux

Verify your current versions:
```bash
node -v
npm -v
git --version
```

---

## 🚀 Quick Start & Initialization

### 1. Clone the Repository
```bash
git clone <repository-url>
cd cidsba_conference_swediu
```

### 2. Automated Setup (Recommended)

#### On Linux / macOS / Git Bash:
```bash
chmod +x init.sh
./init.sh
```

#### On Windows (PowerShell / Command Prompt):
```cmd
init.bat
```

---

## 🛠️ Manual Initialization Steps

If you prefer to set up the project manually, follow these steps:

### Step 1: Install Dependencies
Install all required Node modules specified in `package.json`:
```bash
npm install
```

### Step 2: Environment Configuration (Optional)
If environment variables are required in the future, create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

### Step 3: Run the Development Server
Start the Next.js development server with hot-reloading:
```bash
npm run dev
```

Open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

---

## 📜 Available NPM Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `dev` | `next dev` | Starts local development server on port 3000 |
| `build` | `next build` | Compiles and builds the production bundle |
| `start` | `next start` | Runs the compiled production server |
| `lint` | `next lint` | Executes ESLint to check for code quality issues |

---

## 📁 Directory Architecture Overview

```
cidsba_conference_swediu/
├── public/                # Static assets (images, logos, favicon)
│   └── images/
├── src/
│   ├── app/               # Next.js 14 App Router routes & pages
│   │   ├── committees/    # Committees listing page
│   │   ├── contact/       # Contact form & venue info
│   │   ├── downloads/     # Download templates & materials
│   │   ├── faq/           # Frequently asked questions
│   │   ├── gallery/       # Event photo gallery
│   │   ├── news/          # Conference announcements
│   │   ├── registration/  # Registration fees & process
│   │   ├── schedule/      # Conference program timeline
│   │   ├── speakers/      # Keynote & invited speakers
│   │   ├── sponsors/      # Sponsors & partners
│   │   ├── submission/    # Paper submission guidelines
│   │   ├── globals.css    # Global Tailwind CSS imports
│   │   ├── layout.js      # Root layout wrapper
│   │   └── page.js        # Main homepage
│   ├── components/        # Reusable UI components
│   └── data/              # Static content & JSON/JS data structures
├── INIT.md                # Project initialization guide
├── SUMMARY.md             # Detailed technical project summary
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS theme & plugin config
├── postcss.config.js      # PostCSS configuration
└── package.json           # Project metadata & dependencies
```

---

## 🔧 Troubleshooting Setup Issues

### Issue 1: Node Version Mismatch
- **Symptoms**: `SyntaxError` or module unsupported warnings during `npm install` or `npm run dev`.
- **Fix**: Update Node.js to v18+ using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager):
  ```bash
  nvm install 18
  nvm use 18
  ```

### Issue 2: `node_modules` Corruption or Cache Stale
- **Fix**: Perform a clean re-installation:
  ```bash
  rm -rf node_modules package-lock.json .next
  npm install
  ```

### Issue 3: Port 3000 Already in Use
- **Fix**: Specify a custom port when starting the dev server:
  ```bash
  npm run dev -- -p 3001
  ```
