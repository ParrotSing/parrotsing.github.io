# ParrotSing Website - Vite Development Setup

This project has been set up with Vite for modern web development while preserving all original HTML files and assets.

## Project Structure

```
parrotsing.github.io/
├── src/                    # Modern development files
│   ├── main.js            # JavaScript entry point
│   └── style.css          # Modern CSS
├── public/                # Static assets (copied from root)
│   ├── clipart/
│   ├── images/
│   ├── media/
│   ├── sounds/
│   └── files/
├── *.html                 # Original HTML files (preserved)
├── main.html              # Modern development entry point
├── vite.config.js         # Vite configuration
├── package.json           # Node.js dependencies
└── README_VITE.md         # This file
```

## Development Commands

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
This will start the Vite development server with hot module replacement (HMR).

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

## Features

- ✅ **Hot Module Replacement (HMR)** - Instant updates during development
- ✅ **Multi-page Setup** - All HTML files are included in the build
- ✅ **Asset Optimization** - Automatic optimization of images, CSS, and JS
- ✅ **Modern JavaScript** - ES6+ modules and modern syntax support
- ✅ **Fast Builds** - Lightning-fast development and production builds
- ✅ **Original Files Preserved** - All original HTML files remain unchanged

## Usage

1. **Development**: Use `npm run dev` to start developing with modern tools
2. **Original Files**: All your original `.html` files are preserved and accessible
3. **Assets**: All media files, images, and sounds are in the `public/` folder
4. **Customization**: Modify `src/main.js` and `src/style.css` for modern enhancements

## Accessing Your Pages

During development:
- Modern entry: `http://localhost:5173/main.html`
- Original index: `http://localhost:5173/index.html`
- Other pages: `http://localhost:5173/[filename].html`

## Notes

- Original HTML files are untouched and fully functional
- Static assets are served from the `public/` directory
- The Vite config automatically includes all HTML files in the build
- Modern JavaScript modules can be added to enhance functionality
- CSS can be modernized while maintaining the original design

This setup gives you the best of both worlds: modern development tools and your existing website intact.
