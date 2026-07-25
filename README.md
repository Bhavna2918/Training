# TryLity - SaaS Landing Page

A modern, responsive, and production-ready SaaS landing page built with React, Vite, TypeScript, and Tailwind CSS. This project was developed as a submission for **Assignment 2: Build Header & Hero Section Using Tailwind CSS**.

## 🚀 Objective

The primary goal of this project is to build a responsive, clean, and pixel-perfect SaaS landing page utilizing modern frontend development practices. It demonstrates:
- Proper configuration and utilization of **Tailwind CSS**.
- Strict **Component-Based Architecture** following the Single Responsibility Principle (SRP).
- **TypeScript** integration for robust, type-safe data modeling.
- Advanced **CSS Grid & Flexbox** for flawless mobile-first responsiveness.

## 🛠 Technologies Used

- **React**: UI rendering library.
- **TypeScript**: Static typing for safer and predictable code.
- **Vite**: Next-generation frontend build tool for instant HMR.
- **Tailwind CSS (v4)**: Utility-first CSS framework for rapid, highly customizable styling.
- **Lucide React**: Beautiful, consistent SVG icons.

## 🏗️ Architecture & Folder Structure

The project is heavily modularized to ensure maintainability and scalability.

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── Header.tsx           # Sticky Header container
│   │   │   ├── Logo.tsx             # Brand Logo
│   │   │   ├── Navigation.tsx       # Desktop links
│   │   │   ├── NavItem.tsx          # Reusable navigation link
│   │   │   ├── HeaderButtons.tsx    # Auth CTA buttons
│   │   │   └── MobileMenu.tsx       # Hamburger menu logic
│   │   └── Footer.tsx
│   ├── hero/
│   │   ├── Hero.tsx                 # Grid container for the Hero
│   │   ├── HeroBadge.tsx            # Sparkle badge
│   │   ├── HeroTitle.tsx            # Main H1 Title
│   │   ├── HeroDescription.tsx      # Subtext
│   │   ├── HeroButtons.tsx          # Primary/Secondary CTAs
│   │   ├── HeroImage.tsx            # Dashboard mockup
│   │   ├── HeroStats.tsx            # Wrapper for stats
│   │   └── StatCard.tsx             # Reusable stat card
│   └── features/
│       ├── Features.tsx             # Grid container for features
│       └── FeatureCard.tsx          # Reusable feature card
├── data/
│   └── heroStats.tsx                # Data source for UI iteration
├── types/
│   └── hero.ts                      # Strict TypeScript interfaces
├── App.tsx                          # Root component
└── main.tsx                         # Entry point
```

## ✨ Key Features

1. **Modular Header:** Completely separated into specific micro-components (`Logo`, `Navigation`, `MobileMenu`) to avoid bloated files. Features a `sticky top-0` glassmorphism effect.
2. **Responsive Hero Section:** Implements a mobile-first CSS Grid (`grid-cols-1 lg:grid-cols-[45%_55%]`) that gracefully stacks on mobile and balances beautifully on desktop screens.
3. **Data-Driven UI Components:** The Statistics Cards and Feature Cards do not use hard-coded JSX. Instead, they map over strongly-typed data arrays (`src/data/`) using TypeScript interfaces, making future additions trivial.
4. **Premium Aesthetics:** Utilizes the Google **Inter** font family, soft subtle borders, drop shadows, and delicate micro-interactions (e.g., `hover:-translate-y-1`) for a professional SaaS feel.

## ⚙️ Installation & Setup

1. **Clone the repository** and navigate into the folder.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

## 📦 Build Instructions
To compile the project and check for TypeScript errors:
```bash
npm run build
```
*Note: The project compiles with zero TypeScript or ESLint errors.*
