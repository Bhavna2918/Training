# Vite React + TypeScript Project

A professional, clean, and beginner-friendly React application built using Vite and TypeScript.

## Project Overview
This project demonstrates React best practices, clean architecture, and reusable component design. It is structured to be easily understandable while incorporating modern tooling and features like strict TypeScript typing, responsive CSS, and client-side routing.

## Features
- **Clean Architecture**: Separation of components, pages, and styles.
- **Type Safety**: Enforced through strict TypeScript configurations.
- **Responsiveness**: A layout that looks great on all devices.
- **Modern Aesthetics**: Soft colors, modern typography, and hover effects.

## Technologies Used
- **React**: UI library (Functional components & hooks)
- **TypeScript**: Static typing for safer code
- **Vite**: Next-generation frontend tooling for fast builds and HMR
- **React Router**: Client-side routing (`react-router-dom`)
- **Vanilla CSS**: Clean, custom CSS using variables for theming

## Folder Structure
```text
src/
├── components/
│   ├── elements/      # Smallest reusable components (e.g., Button)
│   ├── cards/         # Composite components (e.g., Card)
│   └── layout/        # Structure components (e.g., Header, Navbar, Footer)
├── pages/             # Page components (Home, About)
├── assets/            # Static assets (images, icons)
├── styles/            # Global styles and CSS variables
├── utils/             # Helper functions
├── types/             # Global TypeScript interfaces
├── App.tsx            # Main application component & routing
└── main.tsx           # Entry point
```

## Installation & Setup

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

## Commands to Run
- `npm run dev`: Starts the local development server.
- `npm run build`: Compiles the TypeScript code and builds the project for production.

## Routing Information
The application uses `BrowserRouter` with the following routes configured:
- `/` - Home Page: Displays key features using Card components.
- `/about` - About Page: Provides information regarding project goals and architecture.

## Component Overview
- **Header & Navbar**: Located in `src/components/layout`. The Navbar utilizes `NavLink` to highlight the active route.
- **Button**: A highly reusable element supporting text, onClick handlers, button types, and disabled states.
- **Card**: A display component demonstrating composition by rendering a title, description, and the reusable Button.
