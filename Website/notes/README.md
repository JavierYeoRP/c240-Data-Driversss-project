# 🍰 The Ad-Hoc Chatbot for Cooking Substitutions: Desserts

A friendly, kitchen-themed static website for instant dessert ingredient substitutions. Built by **Team Data Driversss** using pure HTML, CSS, and JavaScript – no external frameworks, optimized for GitHub Pages.

## 📋 Overview

This project provides a helpful resource for home bakers who need quick ingredient substitutions. Whether you're missing eggs, need dairy-free alternatives, or are looking for gluten-free options, our intelligent chatbot has you covered.

### Key Features

- **💬 Smart Chatbot**: Interactive assistant that understands natural language queries and provides instant substitution recommendations
- **📖 Comprehensive Guide**: Static reference page with detailed substitutions for 8+ common dessert ingredients
- **👥 Team Showcase**: Meet the creators and learn about the project's mission
- **📧 Contact Form**: Simple feedback and suggestion submission
- **📱 Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **🎨 Kitchen-Themed Styling**: Warm colors (cream, brown, pastel accents) create an inviting atmosphere
- **🚀 Fast & Lightweight**: Static site optimized for GitHub Pages – no server needed
- **🔒 Privacy-First**: All chat history stored locally in browser, no external data collection

## 📁 Project Structure

```
c240-Data-Driversss-project/
├── index.html                 # Home page
├── substitutions.html         # Substitution guide
├── about.html                 # Team & project info
├── contact.html               # Contact form
├── css/
│   └── style.css             # Main stylesheet (responsive, kitchen-themed)
├── js/
│   └── chatbot.js            # Chatbot logic & intelligence
├── images/                    # Image assets (for future use)
└── README.md                  # This file
```

## 🎯 Pages

### 1. **Home (index.html)**
- Project introduction and mission
- Problem statement (missing ingredients)
- Solution overview
- How-to guide for using the chatbot
- Popular substitutions preview
- Call-to-action

### 2. **Substitution Guide (substitutions.html)**
- Detailed substitutions for:
  - Eggs 🥚
  - Sugar 🍬
  - Butter 🧈
  - Flour 🌾
  - Chocolate 🍫
  - Milk 🥛
  - Vanilla 🌿
  - Leavening Agents ⬆️
  - Other common ingredients
- Each substitution includes ratios and pro tips
- General baking tips section

### 3. **About Us (about.html)**
- Team member profiles (Javier, Qian Hui, Keatson, Phylicia, Emmanuel)
- Project mission and values
- Why the team built this
- Technology stack explanation
- Unique differentiators

### 4. **Contact (contact.html)**
- Contact form with validation
- Multiple ways to reach us
- FAQ section
- Call-to-action for form submission

## 🤖 Chatbot Features

The chatbot uses intelligent pattern matching to understand user queries and provide accurate substitution recommendations. It supports:

- **Natural Language Understanding**: Recognizes various phrasings and synonyms
- **Ingredient Recognition**: Identifies ingredients by name or context
- **Context-Aware Responses**: Provides specific advice based on query type
- **Chat History**: Saves conversations in browser's sessionStorage
- **Floating Widget**: Fixed position at bottom-right corner with minimize/maximize functionality
- **Mobile Responsive**: Adapts to small screens automatically

### Supported Ingredients

The chatbot can help with:
- Eggs
- Sugar
- Butter
- Flour
- Chocolate
- Milk
- Vanilla
- Leavening agents (baking powder, baking soda)

### Chatbot Queries

Users can ask:
- "What can I substitute for eggs?"
- "Tell me about sugar substitutes"
- "How do I replace butter?"
- "What can I use instead of milk?"
- And many variations!

## 🎨 Design & Styling

### Color Palette
- **Primary Cream**: `#f5f1e8` – Main background, warm and inviting
- **Primary Brown**: `#8b6f47` – Headers, main text
- **Accent Rust**: `#c17a4a` – Highlights, hover states
- **Accent Sage**: `#a8b8a8` – Secondary accents
- **Accent Lavender**: `#d4c5d8` – Soft highlights
- **Accent Peach**: `#f4a582` – Call-to-action buttons

### Responsive Breakpoints
- **Desktop**: 1200px+ – Full layout
- **Tablet**: 768px-1199px – Adjusted grid and spacing
- **Mobile**: <768px – Single column layout, optimized touch targets
- **Small Mobile**: <480px – Further optimizations

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/JavierYeoRP/c240-Data-Driversss-project.git
cd c240-Data-Driversss-project
```

2. Open in your browser:
```bash
# Option 1: Double-click index.html
# Option 2: Use a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

### GitHub Pages Deployment

1. Push to GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose main branch and save
5. Site will be live at `https://username.github.io/c240-Data-Driversss-project`

## 💻 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, flexbox, grid, animations
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **SessionStorage**: For persistent chat history

## 🌟 Accessibility Features

- Semantic HTML structure
- Color contrast compliance
- Keyboard navigation support
- Responsive text sizing
- Clear focus indicators
- ARIA labels where needed

## 📱 Mobile Optimization

- Responsive images and layouts
- Touch-friendly button sizes (min 44x44px)
- Optimized font sizes for readability
- Efficient use of screen space
- Fast loading times

## 🔐 Privacy & Data

- **No external tracking**: No analytics, no ads
- **No data collection**: Form submissions are handled client-side
- **Local chat history**: Stored in browser's sessionStorage, cleared on browser close
- **No cookies** required for core functionality

## 📝 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Customization

### Adding New Substitutions

Edit `js/chatbot.js` and add to the `substitutions` object:
```javascript
newIngredient: [
  '1 cup ingredient = alternative with ratio',
  // ... more substitutions
]
```

### Changing Colors

Edit CSS variables in `css/style.css`:
```css
:root {
  --primary-cream: #f5f1e8;
  --primary-brown: #8b6f47;
  /* ... update colors ... */
}
```

### Adding Pages

1. Create new HTML file (copy template from existing pages)
2. Update navigation links in all pages
3. Include chatbot widget section
4. Link to stylesheet and chatbot script

## 🐛 Troubleshooting

**Chatbot not appearing?**
- Check browser console for JavaScript errors
- Ensure `js/chatbot.js` is being loaded
- Verify chatbot HTML elements exist (divs with correct IDs)

**Chat not responding?**
- Clear browser cache and sessionStorage
- Check that chatbot.js is not blocked
- Verify input field has correct ID

**Styling looks off?**
- Clear browser cache
- Ensure `css/style.css` is loading
- Check for CSS override issues

## 📧 Contact & Support

- **Website**: [Project website]
- **Contact Page**: Visit `/contact.html` for feedback form
- **Issues**: Report bugs through contact form

## 👥 Team

- **Javier** – Project Lead & Developer
- **Qian Hui** – Frontend & UI Designer
- **Keatson** – Culinary & Content Specialist
- **Phylicia** – Data & Analytics
- **Emmanuel** – Backend & Quality Assurance

## 📄 License

© 2024 Team Data Driversss. All rights reserved.

Made with ❤️ for home bakers everywhere.

## 🎓 Learning Resources

This project demonstrates:
- Semantic HTML structure
- CSS Grid and Flexbox layouts
- Responsive design principles
- Vanilla JavaScript (no frameworks)
- Session storage for persistence
- Static site hosting on GitHub Pages
- Accessible web design
- Component-based thinking

## 🚀 Future Enhancements

Potential features for future versions:
- [ ] Image assets and visual substitution guides
- [ ] Multi-language support
- [ ] Advanced search functionality
- [ ] User ratings on substitutions
- [ ] Export/print substitution guides
- [ ] Recipe integration
- [ ] Dietary filter options
- [ ] Allergen warnings

## 📞 Questions?

Contact us through the website's contact form or open an issue on GitHub!

---

**Happy Baking!** 🍪✨
