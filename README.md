# Interactive Periodic Table PWA

A Progressive Web App featuring an interactive periodic table with detailed element information, offline support, and installation capabilities.

## Features

✨ **Interactive Design**
- Click any element to view detailed information
- Color-coded by element category (alkali metals, noble gases, etc.)
- Smooth hover effects and animations
- Responsive design for all screen sizes

📱 **Progressive Web App**
- Install on mobile and desktop devices
- Works offline after first visit
- Add to home screen capability
- Fast loading with service worker caching

🔬 **Comprehensive Data**
- All 118 elements
- Atomic number, mass, and symbol
- Electron configuration
- Melting and boiling points
- Year of discovery
- Element category classification

🌐 **Share Functionality**
- Easy sharing via native share API
- Fallback copy-to-clipboard support

📡 **Online/Offline Indicator**
- Real-time connection status
- Seamless offline experience

## Installation

### Quick Start
1. Open `index.html` in a modern web browser
2. Click "Install App" when prompted (or use browser's install option)
3. App will be added to your home screen/desktop


## File Structure

```
pwa-periodic-table/
├── index.html          # Main HTML file
├── app.js              # Application logic and data
├── manifest.json       # PWA manifest configuration
├── service-worker.js   # Service worker for offline support
├── icon-192.png        # App icon (192x192)
├── icon-512.png        # App icon (512x512)
└── README.md           # This file
```

## Browser Compatibility

- Chrome/Edge: Full support ✅
- Firefox: Full support ✅
- Safari: Partial PWA support (iOS 11.3+) ⚠️
- Opera: Full support ✅

## Customization

### Changing Colors
Edit the CSS in `index.html`:
- Background gradient: Update `body` background
- Theme color: Update `--theme-color` and `theme_color` in manifest.json
- Element categories: Modify `.alkali-metal`, `.noble-gas`, etc. classes

### Adding More Element Data
Edit the `elements` array in `app.js` and add new properties to the info display.

### Changing Layout
The grid layout is defined in the `grid` array in `app.js`. Modify to change element positioning.

## Offline Support

The service worker caches all necessary files on first visit:
- HTML, CSS, and JavaScript
- App icons
- Manifest file

Once cached, the app works completely offline!

## Contributing

Feel free to fork and customize this project. Some ideas for enhancements:
- Add more element properties (density, electronegativity, etc.)
- Include 3D atomic models
- Add element comparison features
- Implement search functionality
- Add quiz/learning mode
- Include isotope information

## License

Free to use and modify for educational purposes.

## Credits

Created with ❤️ for chemistry enthusiasts and students.

## Support

For issues or questions:
1. Check that you're serving over HTTPS (except localhost)
2. Ensure all files are in the same directory
3. Clear browser cache and try again
4. Check browser console for errors

---

**Enjoy exploring the elements!** 🧪⚛️
