# Hong Kong & Macau Anniversary Trip Website

A minimal, responsive web interface for visualizing your HK & Macau trip itinerary (5-7 December 2026).

## Features

✨ **Interactive Timeline** - Visual timeline for each day with activities
🗺️ **Google Maps Integration** - Direct links to locations and routes
🚇 **Transport Options** - Multiple HK transport options with costs and times
📱 **Mobile Responsive** - Works perfectly on all devices
🎨 **Minimal Design** - Clean, easy-to-read interface
⌨️ **Keyboard Shortcuts** - Press 1, 2, or 3 to jump between days

## Quick Start

### Local Development

Simply open `index.html` in your browser:

```bash
open index.html
```

Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000`

### Deploy to GitHub Pages

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: HK Macau trip website"
   ```

2. **Create GitHub repository**:
   - Go to https://github.com/new
   - Create a new repository named `AniversaryTrip` (or any name)
   - Don't initialize with README (you already have one)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/AniversaryTrip.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be available at: `https://YOUR_USERNAME.github.io/AniversaryTrip/`

## File Structure

```
AniversaryTrip/
├── index.html              # Main HTML file
├── style.css              # Styling
├── script.js              # Interactive features
├── HK_Macau_Trip_Plan.md  # Original markdown plan
└── README.md              # This file
```

## Features Breakdown

### Transport Options
Click any "Transport Options" button to see:
- Multiple transport modes (MTR, Bus, Taxi, Ferry, Tram)
- Estimated costs in HK$
- Travel times
- Helpful tips

### Google Maps Integration
Every location has a "View on Map" or "View Route" link that opens:
- Specific locations in Google Maps
- Route planning between destinations
- Easy navigation on mobile devices

### Interactive Elements
- **Expandable Transport Info**: Click buttons to show/hide details
- **Smooth Animations**: Cards fade in as you scroll
- **Responsive Design**: Adapts to any screen size
- **Print-Friendly**: Clean layout when printing

## Keyboard Shortcuts

- `1`, `2`, `3` - Jump to Day 1, 2, or 3
- `Cmd/Ctrl + P` - Print itinerary

## Customization

### Change Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #e63946;    /* Main accent color */
    --secondary-color: #457b9d;  /* Secondary accent */
    --accent: #06d6a0;           /* Button highlights */
}
```

### Add More Activities
Edit `index.html` and add activity cards following this structure:

```html
<div class="activity-card">
    <div class="time">HH:MM</div>
    <div class="content">
        <h3>Activity Name</h3>
        <p>Description</p>
        <a href="GOOGLE_MAPS_URL" target="_blank" class="map-link">📍 View on Map</a>
    </div>
</div>
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Using on Your Trip

1. **Bookmark the page** on your phone's home screen
2. **Works offline** after first load (browser cache)
3. **Save to PDF** for offline backup (use print function)
4. **Share the link** with travel companions

## Hong Kong Transport Quick Reference

- **Octopus Card**: Get one at airport - works on all transport
- **MTR**: Fast, clean, runs 6am-1am
- **Trams**: HK$3 flat fare, scenic but slow
- **Star Ferry**: Must-do experience, very cheap
- **Taxis**: Always use meter, have destination in Chinese

## License

Personal use for your anniversary trip. Enjoy! 🎉❤️

---

**Have a wonderful trip!**
