# Roof Masters Website

A professional roofing company website built with React, TypeScript, and Tailwind CSS.

## Project Structure

### Key Components

#### Old OKLCH : "primary": "oklch(70% 0.1 140)",

```
client/src/
├── components/
│   ├── Hero.tsx         # Main landing section
│   ├── Services.tsx     # Services showcase
│   ├── About.tsx        # Company information
│   ├── Contact.tsx      # Contact form and details
│   ├── Navigation.tsx   # Navigation menu
│   ├── Layout.tsx       # Main layout wrapper
│   ├── Logo.tsx         # Company logo
│   └── ui/             # Reusable UI components
├── pages/
│   ├── Home.tsx         # Main page
│   └── not-found.tsx    # 404 page
└── lib/
    ├── queryClient.ts   # API client setup
    └── utils.ts         # Utility functions
```

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Key Features

- Responsive design with Tailwind CSS
- Smooth scroll navigation
- Modern UI components with shadcn/ui
- Contact form integration
- Service showcase
- Company information section

## Component Documentation

### Navigation
- Located in `components/Navigation.tsx`
- Handles smooth scrolling to sections
- Responsive mobile menu
- Integrates company logo

### Hero Section
- Located in `components/Hero.tsx`
- Main landing section with call-to-action buttons
- Professional gradient background

### Services Section
- Located in `components/Services.tsx`
- Grid layout of service cards
- Icon integration with Lucide React

### About Section
- Located in `components/About.tsx`
- Company history and statistics
- Image integration

### Contact Section
- Located in `components/Contact.tsx`
- Contact form with validation
- Business information display
- Location and hours

### Logo Component
- Located in `components/Logo.tsx`
- SVG-based company logo
- Responsive sizing

## VS Code Extensions Recommended

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
- ES7+ React/Redux/React-Native snippets

## Debugging Tips

1. Use Chrome DevTools with React Developer Tools extension
2. Enable source maps in VS Code
3. Use the Network tab to monitor API calls
4. Check React component hierarchy in Components tab
5. Monitor console for any warnings or errors

## Theme Customization

The theme is configured in `theme.json` with a professional color scheme. Colors can be adjusted by modifying this file.

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run check`: Type checking
