# 🌟 Fetch API User Dashboard

A modern, dark-themed user dashboard that fetches and displays user data from the JSONPlaceholder API with stunning animations and responsive design.

![GitHub last commit](https://img.shields.io/github/last-commit/AdarshXKumAR/User-Data-Fetcher)
![GitHub repo size](https://img.shields.io/github/repo-size/AdarshXKumAR/User-Data-Fetcher)
![GitHub stars](https://img.shields.io/github/stars/AdarshXKumAR/User-Data-Fetcher)

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek gradient backgrounds with glassmorphism effects
- 🌟 **Animated UI** - Smooth animations and floating particles background
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🔄 **Real-time Data Fetching** - Uses modern Fetch API with async/await
- ⚡ **Performance Monitoring** - Shows load time and user count statistics
- 🎯 **Interactive Cards** - Hover effects with color-changing avatars
- 🛡️ **Error Handling** - Comprehensive network and HTTP error management
- 🔄 **Reload Functionality** - Easy data refresh capability
- 📊 **Clean Code Structure** - Object-oriented ES6+ JavaScript

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling with animations and gradients
- **JavaScript (ES6+)** - Modern asynchronous programming
- **Fetch API** - HTTP requests and data fetching
- **Font Awesome** - Beautiful icons
- **JSONPlaceholder API** - Sample user data

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls
- Basic understanding of HTML, CSS, and JavaScript

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdarshXKumAR/User-Data-Fetcher.git
   ```

2. **Navigate to project directory**
   ```bash
   cd fetch-api-user-dashboard
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

### Usage

1. **Fetch Users**: Click the "Fetch Users" button to load user data
2. **View Details**: Hover over user cards to see interactive animations
3. **Reload Data**: Use the reload button to refresh the user data
4. **Error Testing**: Disable internet connection to test error handling

## 🏗️ Project Structure

```
fetch-api-user-dashboard/
│
├── index.html          # Main HTML file
├── README.md          # Project documentation
├── LICENSE           # MIT license file
└── assets/           # Project assets (if any)
    └── screenshots/  # Screenshot images
```

## 🎯 Key Learning Objectives

This project demonstrates proficiency in:

- **Fetch API** and modern JavaScript
- **Promise handling** with async/await
- **Error handling** and user feedback
- **DOM manipulation** and dynamic content
- **CSS animations** and modern styling
- **Responsive web design**
- **Object-oriented programming** in JavaScript

## 🔧 API Reference

The project uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/):

```javascript
// API Endpoint
GET https://jsonplaceholder.typicode.com/users

// Response Format
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": { ... },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": { ... }
}
```

## 🎨 Customization

### Changing Colors
Modify the CSS variables in the `:root` selector:

```css
:root {
  --primary-color: #40e0d0;
  --secondary-color: #48cae4;
  --accent-color: #023e8a;
}
```

### Adjusting User Limit
Change the user limit in the JavaScript:

```javascript
// In fetchUsers() method
const limitedUsers = users.slice(0, 12); // Change 9 to desired number
```

## 🐛 Troubleshooting

**Common Issues:**

1. **CORS Errors**: Use a local server instead of opening HTML directly
2. **Network Errors**: Check internet connection and API availability
3. **Animation Issues**: Ensure modern browser with CSS3 support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing the free API
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [MDN Web Docs](https://developer.mozilla.org/) for excellent documentation

## 📊 Project Stats

- **Lines of Code**: ~400+
- **File Size**: ~15KB
- **Load Time**: <500ms
- **Browser Support**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+

---

⭐ **If you found this project helpful, please give it a star!** ⭐
