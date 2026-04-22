# Random Quote Generator - React Application

A simple yet elegant React application that generates random inspirational quotes with dynamic color changes. Built with React 18 and Vite for lightning-fast development and production builds.

## Features

- 🎲 **Random Quotes** - Display random inspirational quotes from famous personalities
- 🎨 **Dynamic Colors** - Each quote comes with a randomly selected theme color
- ⚡ **Fast Development** - Built with Vite for instant HMR (Hot Module Replacement)
- 💅 **Modern UI** - Clean, responsive design with smooth animations
- 📱 **Responsive** - Works perfectly on desktop, tablet, and mobile devices

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations and gradients
- **JavaScript (ES6+)** - Modern JavaScript

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd test-zerogpt-application
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173` (or another available port).

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
test-zerogpt-application/
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── src/
│   ├── main.jsx         # React entry point
│   ├── App.jsx          # Main App component
│   ├── App.css          # Component styles
│   └── index.css        # Global styles
└── .gitignore           # Git ignore rules
```

## Usage

1. Click the **Get New Quote** button to display a random quote
2. The app will automatically change the theme color with each new quote
3. Hover over the quote box to see a subtle shadow effect
4. The interface is fully responsive and works on all device sizes

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production-ready build
- `npm run preview` - Preview the production build

## Customization

### Adding More Quotes

Edit the `randomQuotes` array in `src/App.jsx` to add your own quotes:

```javascript
const randomQuotes = [
  "Your quote here. - Author Name",
  "Another quote. - Another Author",
  // Add more quotes...
]
```

### Changing Colors

Modify the `colors` array in the `getRandomColor()` function to customize the theme colors:

```javascript
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', /* ... */]
```

### Styling

All CSS styles are located in `src/App.css` and `src/index.css`. Feel free to customize the appearance to match your preferences.

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

**Enjoy generating random quotes!** ✨
