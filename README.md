# 🗳️ Election Process Education Portal

> **A modern, multilingual web portal that empowers every citizen to understand and participate in the democratic process.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

## 📖 About the Project

The **Election Process Education Portal** is a civic-tech web application built for the **Hack2Skill hackathon**. It aims to bridge the information gap in election literacy by providing a visually rich, accessible, and multilingual platform covering the complete Indian election process — from voter registration to result declaration.

The portal supports **English**, **Bengali (বাংলা)**, and **Hindi (हिन्दी)**, ensuring that election knowledge reaches every citizen, regardless of language.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🌐 **Multilingual Support** | Seamlessly switch between English, Bengali & Hindi via a dynamic `LanguageContext` |
| 🎬 **Animated Hero Section** | Glassmorphism hero with Framer Motion entrance animations |
| 🗺️ **Election Timeline** | Step-by-step visual guide of the entire election lifecycle |
| 📋 **Voter Guide** | Eligibility requirements, document checklist & registration steps |
| 📊 **Live Statistics** | Key electoral statistics with animated counters |
| 🗳️ **Voting Simulator** | Interactive simulation of the EVM-based voting process |
| 🔍 **Candidate Finder** | Tool to look up candidates by constituency |
| 📰 **News Section** | Curated election-related news updates |
| ❓ **FAQ Section** | Frequently asked questions about the election process |
| 📱 **Fully Responsive** | Mobile-first design that works on all screen sizes |

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) with [Vite 8](https://vite.dev/)
- **Styling:** [TailwindCSS 4](https://tailwindcss.com/) + Custom CSS
- **Animations:** [Framer Motion 12](https://www.framer.com/motion/)
- **Icons:** [React Icons 5](https://react-icons.github.io/react-icons/)
- **State Management:** React Context API (`LanguageContext`)
- **Linting:** ESLint with React Hooks & React Refresh plugins

---

## 📁 Project Structure

```
election-process-education/
├── public/                    # Static assets
├── src/
│   ├── assets/                # Images and media
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx     # Responsive navbar with language switcher
│   │   │   └── Footer.jsx     # Site footer with links
│   │   └── sections/
│   │       ├── Hero.jsx           # Landing hero with glassmorphism
│   │       ├── Timeline.jsx       # Election process timeline
│   │       ├── VoterGuide.jsx     # Voter registration guide
│   │       ├── Statistics.jsx     # Key electoral statistics
│   │       ├── VotingSimulator.jsx# Interactive EVM simulator
│   │       ├── CandidateFinder.jsx# Constituency & candidate lookup
│   │       ├── NewsSection.jsx    # Election news feed
│   │       └── FAQ.jsx            # Frequently asked questions
│   ├── context/
│   │   └── LanguageContext.jsx    # Multilingual content & language state
│   ├── App.jsx                    # Root component & page layout
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🌐 Multilingual System

All UI text is driven by `LanguageContext`, which stores translations for **English**, **Bengali**, and **Hindi**. Every component consumes the context using the `useLanguage()` hook.

```jsx
import { useLanguage } from '../../context/LanguageContext';

const MyComponent = () => {
  const { t } = useLanguage();
  return <h1>{t.hero.title}</h1>;
};
```

To switch language, call the `setLanguage` function from the context with `'en'`, `'bn'`, or `'hi'`.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/MohanlalManna24/Election-Process-Education.git

# 2. Navigate into the project directory
cd Election-Process-Education

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the portal live.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the local development server with HMR |
| `npm run build` | Build the optimized production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'feat: add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Mohanlal Manna**

- GitHub: [@MohanlalManna24](https://github.com/MohanlalManna24)

---

> *"An informed voter is the foundation of a strong democracy."*
