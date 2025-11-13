# CultureMap - Interactive Cultural World Map

## Project Overview

**CultureMap** is an interactive web application that explores world cultures through an engaging educational platform. The project showcases traditions, music, cuisine, and festivals from 15 countries around the globe using modern web technologies.

### Course Information
- **Course**: Web Frontend Development
- **Project Type**: Group Final Project (4 members)
- **Duration**: 3 weeks
- **Grade Breakdown**: Technical Implementation (60%), Team Defense (30%), Bonus Features (10%)

---

## Key Features

### Core Features
1. **Interactive World Map** - Leaflet.js powered map with clickable country markers
2. **Country Profiles** - Detailed information about 15 countries
3. **Explore Page** - Browse and filter countries by category
4. **Country Comparison** - Side-by-side comparison tool
5. **Cultural Quiz** - Interactive 15-question quiz with scoring
6. **Responsive Design** - Mobile-friendly across all devices

### Bonus Features Implemented (+10% Maximum)
- **Localization (EN/RU)** - Full English-Russian translation (+5%)
- **Dark/Light Mode** - Theme toggle with localStorage (+3%)
- **Search/Filter Functionality** - Dynamic content filtering (+3%)
- **Scroll Animations** - AOS.js integration (+3%)
- **Animated Counters** - Progress bars with animation (+3%)
- **Notification System** - Toast notifications (+3%)
- **Interactive Quiz** - Full-featured quiz system (+2%)
- **Back to Top Button** - Smooth scroll (+2%)
- **Sticky Navigation** - Fixed header with scroll effects (+2%)
- **Confetti Animation** - Celebration effects (+2%)

**Total Bonus: 28% (Capped at 10%)**

---

## Project Structure

```
CultureMap/
├── index.html              # Homepage with map and featured countries
├── css/
│   └── style.css          # Main stylesheet with dark mode
├── js/
│   ├── data.js            # Countries and quiz data
│   ├── translations.js    # EN/RU localization
│   ├── theme.js           # Dark mode & toast notifications
│   ├── map.js             # Leaflet map integration
│   ├── main.js            # Core functionality
│   ├── explore.js         # Explore page logic
│   ├── compare.js         # Comparison tool
│   └── quiz.js            # Quiz functionality
├── pages/
│   ├── explore.html       # Browse all countries
│   ├── compare.html       # Compare countries
│   ├── quiz.html          # Cultural knowledge quiz
│   └── about.html         # Team and project info
└── README.md              # Project documentation
```

---

## Technologies Used

### Frontend Technologies
- **HTML5** - Semantic structure with proper accessibility
- **CSS3** - Custom styling with CSS variables
- **JavaScript ES6** - Modern syntax and features
- **Bootstrap 5** - Responsive grid and components

### Libraries & Frameworks
- **jQuery 3.6** - DOM manipulation and AJAX
- **Leaflet.js** - Interactive map rendering
- **AOS.js** - Scroll-based animations
- **Font Awesome 6** - Icon library
- **Canvas Confetti** - Celebration animations

---

## How to Run

### Option 1: Direct Browser Access
1. Download/clone the project
2. Open `index.html` in your web browser
3. No build process or server required!

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Then open: http://localhost:8000
```

---

## Page Descriptions

### 1. Home Page (index.html)
- Hero section with animated counters
- Interactive Leaflet map with country markers
- Featured countries grid with search and filters
- Call-to-action for quiz

### 2. Explore Page (explore.html)
- All countries displayed in grid format
- Category filters (Traditions, Music, Cuisine, Festivals)
- Real-time search functionality
- Cultural gallery with images
- Modal popups for country details

### 3. Compare Page (compare.html)
- Dropdown selectors for two countries
- Side-by-side comparison table
- Visual comparison of cultural elements
- Reset functionality

### 4. Quiz Page (quiz.html)
- 15 multiple-choice questions
- Progress bar and score tracking
- Instant feedback with explanations
- Final results with statistics
- Confetti celebration for high scores

### 5. About Page (about.html)
- Project mission and features
- Team member profiles with roles
- Technologies showcase
- Bonus features list

---

## Team Roles & Contributions

### Team Member 1: Project Lead & Map Integration
- Set up Git repository and project structure
- Implemented Leaflet.js interactive map
- Coordinated team workflow
- Managed code integration

**Code Contributions:**
- `index.html` - Homepage structure
- `js/map.js` - Map functionality
- `js/main.js` - Core features

### Team Member 2: UI/UX Designer & Dark Mode
- Designed overall user interface
- Implemented dark mode toggle
- Created responsive layouts
- Ensured accessibility standards

**Code Contributions:**
- `css/style.css` - All styling
- `js/theme.js` - Theme switching
- Responsive design implementation

### Team Member 3: JavaScript Developer & Features
- Developed interactive features
- Implemented search and filter logic
- Created quiz system
- Added animations and effects

**Code Contributions:**
- `js/quiz.js` - Quiz logic
- `js/explore.js` - Explore functionality
- `js/compare.js` - Comparison tool

### Team Member 4: Content & Localization
- Collected country data and images
- Created EN/RU translation system
- Wrote quiz questions
- Prepared documentation

**Code Contributions:**
- `js/data.js` - All content data
- `js/translations.js` - Localization
- `README.md` - Documentation

---

## Design Features

### Color Palette
- Primary: `#2563eb` (Blue)
- Secondary: `#7c3aed` (Purple)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Orange)
- Danger: `#ef4444` (Red)

### Dark Mode
- Automatic localStorage persistence
- Smooth transitions between themes
- Properly styled for all components

### Responsive Breakpoints
- Mobile: < 576px
- Tablet: 576px - 768px
- Desktop: > 768px

---

## Countries Included

1. 🇯🇵 Japan
2. 🇮🇹 Italy
3. 🇮🇳 India
4. 🇲🇽 Mexico
5. 🇪🇬 Egypt
6. 🇧🇷 Brazil
7. 🇫🇷 France
8. 🇨🇳 China
9. 🇷🇺 Russia
10. 🇬🇷 Greece
11. 🇲🇦 Morocco
12. 🇦🇺 Australia
13. 🇪🇸 Spain
14. 🇰🇷 South Korea
15. 🇵🇪 Peru

Each country includes:
- Basic information (capital, population, language)
- 4-5 traditions
- 3-4 music styles
- 5+ cuisine items
- 3-4 major festivals
- High-quality images

---

## Project Requirements Checklist

### Technical Implementation (60%)
- Project Structure & Pages (5%) - 5 pages with consistent navigation
- Design Consistency (5%) - Unified visual identity and color palette
- Responsiveness (10%) - Mobile-friendly with proper breakpoints
- Bootstrap & Custom Styling (15%) - Balanced use of framework and custom CSS
- JavaScript & jQuery (20%) - Rich interactive features
- Code Quality (5%) - Clean, commented, optimized code

### Team Defense (30%)
- Live Demonstration (10%) - All features working smoothly
- Individual Explanation (10%) - Each member can explain their code
- Theory Questions (10%) - Prepared for technical questions

### Bonus Features (10%)
- Maximum bonus achieved with 10+ features implemented

**Total Project Score: 100% + 10% Bonus**

---

## Code Quality Features

### JavaScript Best Practices
- ES6 syntax (arrow functions, const/let)
- Modular code organization
- Event delegation for performance
- localStorage for data persistence
- Error handling and validation

### Accessibility (ARIA)
- Semantic HTML5 tags
- Alt text for all images
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance

### Performance Optimization
- Minified external libraries via CDN
- Optimized images
- Efficient DOM manipulation
- Debounced search input
- Lazy loading considerations

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Known Issues & Future Improvements

### Current Limitations
- Images use external URLs (Unsplash) - could be replaced with local assets
- Quiz questions are hardcoded - could use API
- No backend database - all data is client-side

### Future Enhancements
- Add more countries (target: 50+)
- Implement drag & drop features
- Add user accounts and save progress
- Include video content
- API integration for real-time data
- Multi-language support (add more languages)

---

## Learning Outcomes

Through this project, our team demonstrated proficiency in:
1. HTML5 semantic structure and accessibility
2. CSS3 advanced styling and animations
3. JavaScript DOM manipulation and event handling
4. jQuery library usage
5. Bootstrap responsive framework
6. Git version control and collaboration
7. API integration (Leaflet.js)
8. LocalStorage for data persistence
9. Internationalization (i18n)
10. Project management and teamwork

---

## Acknowledgments

- **Unsplash** - High-quality country images
- **OpenStreetMap** - Map tiles
- **Font Awesome** - Icon library
- **Bootstrap Team** - Responsive framework
- **Leaflet.js** - Mapping library

---

## License

This project was created for educational purposes as part of a Web Frontend Development course.
© 2025 CultureMap Team. All rights reserved.

---

**Project Completed**: November 2025
