# Space-Themed Portfolio

A modern, responsive, and visually striking personal portfolio website with a space/cosmic theme. Built with React, Tailwind CSS, and Framer Motion.
Deployed at https://dipanjan2907.github.io/my-portfolio/

## Features

- 🌌 **Cosmic Theme**: Dark space theme with animated stars and glowing effects.
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop.
- ⚡ **Fast Performance**: Built with Vite for lightning-fast loading.
- 🎨 **Modern UI**: Smooth animations, glassmorphism, and interactive elements.
- ♿ **Accessible**: Semantic HTML and keyboard navigation support.

## Tech Stack

- **React**: UI Library
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **Lucide React**: Icons
- **Vite**: Build Tool

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd my-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## Deployment

### GitHub Pages

1.  Update `vite.config.js` with your base URL (if deploying to a subdirectory):
    ```javascript
    export default defineConfig({
      base: '/my-portfolio/', // Replace with your repository name
      plugins: [react()],
    })
    ```

2.  Run the build command:
    ```bash
    npm run build
    ```

3.  Deploy the `dist` folder to GitHub Pages. You can use the `gh-pages` package for easier deployment.

## Customization

- **Content**: Edit the components in `src/components` to update your information.
- **Colors**: Modify `tailwind.config.js` to change the color theme.
- **Images**: Replace placeholder images in `src/assets` or update image URLs in components.

## License

MIT
