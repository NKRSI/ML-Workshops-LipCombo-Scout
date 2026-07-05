# 💄 LipScout AI - Your Perfect Lip Combo

A modern web application powered by MCP (Model Context Protocol) that generates personalized lip combinations and connects you to real products from Polish beauty stores.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Python](https://img.shields.io/badge/Python-3.13-blue)
![Flask](https://img.shields.io/badge/Flask-3.0-red)
![MCP](https://img.shields.io/badge/MCP-Enabled-blueviolet)

## 🌸 Features

### ✨ AI-Powered Lip Combo Generator
- Generates personalized lip combinations based on your style preferences
- Creates unique names and descriptions for each look
- Suggests real products that match your vibe and budget

### 🛍️ MCP-Integrated Product Discovery
- **Lip Liner** - contouring & precision tools
- **Lipstick** - colors & finishes for every mood
- **Lip Gloss** - shine, shimmer & glossy effects
- Real-time product data through MCP connections
- Seamless integration with beauty retailer networks

### 💰 Smart Shopping
- Budget slider from 20-150 PLN
- Automatic total price calculation
- Find cheaper alternatives (dupes) through MCP
- Compare prices across connected stores

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- pip
- MCP server(s) configured (optional - mock data available by default)

### Installation & Running

1. **Install dependencies:**
```bash
pip install -r requirements.txt
```

2. **Configure MCP (optional):**
Add your MCP server connections to enable live product data. Update the `MCPClient` class in `app.py` with your retailer APIs or MCP server endpoints.

3. **Run the application:**
```bash
python app.py
```

4. **Open in browser:**
Open [http://localhost:8000](http://localhost:8000) to see LipScout in action.

## 📁 Project Structure

```
lipscout-ai/
├── app.py                    # Flask backend with MCP client setup
├── requirements.txt          # Python dependencies
├── templates/
│   └── index.html           # Beautiful Tailwind CSS frontend
├── README.md                # This file
├── AGENTS.md                # MCP agent configuration
└── CLAUDE.md                # Documentation
```

## 🔌 MCP Architecture

LipScout uses the Model Context Protocol (MCP) to connect with beauty product data sources. The architecture enables:

- **Modular Data Sources** - Connect to multiple retailer APIs through unified MCP interface
- **Real-Time Updates** - Access current product inventory and pricing
- **Extensible Tools** - Add new data sources without modifying core logic
- **Smart Integrations** - Combine multiple sources for better recommendations

## 🎯 How It Works

1. **Fill Preferences** - Select occasion, finish, style, color, and budget
2. **AI Generates Look** - Backend creates a personalized combo with name & description
3. **MCP Product Search** - Queries connected beauty retailers through MCP tools
4. **View Results** - See all 3 products (liner, lipstick, gloss) with real pricing
5. **Smart Recommendations** - Find dupes & price comparisons through MCP connections

## 🔧 API Endpoints (MCP-Powered)

### POST `/api/generate-combo`
Generates a personalized lip combination by querying MCP product sources.

**Request:**
```json
{
  "occasion": "date",
  "finish": "satin",
  "style": "soft girl",
  "color": "pink",
  "budget": 100
}
```

**Response:**
```json
{
  "name": "💕 Soft Romantic Glow",
  "description": "Delicate pink tones with a soft finish...",
  "products": {
    "liner": {"name": "...", "price": 25, "store": "..."},
    "lipstick": {"name": "...", "price": 45, "store": "..."},
    "gloss": {"name": "...", "price": 15, "store": "..."}
  },
  "total_price": 85
}
```

### GET `/api/find-dupes/<product_id>`
Uses MCP to find cheaper alternatives across connected retailers

### GET `/api/compare-prices/<product_id>`
Compares pricing across multiple stores via MCP integrations

### POST `/api/search-products`
Searches through MCP product networks with filters (category, color, price range)

## 🎨 Design Highlights

✨ **Modern Aesthetic:**
- Gradient pink backgrounds
- Glass morphism cards
- Smooth hover animations
- Fully responsive design

🎯 **Customization:**
- 5 occasions
- 4 finish options
- 4 style categories
- 5 color choices
- Budget slider (20-150 PLN)

## 📦 Tech Stack

**Backend:**
- Python 3.13
- Flask 3.0
- Flask-CORS 4.0

**Frontend:**
- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- No build required!

## 🚀 Deployment

### Local Development
```bash
python app.py
```
Runs on http://localhost:8000

### Production with Gunicorn
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

### Docker Deployment
```dockerfile
FROM python:3.13-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

## 🔮 Future Enhancements

- [ ] Expanded MCP retailer connections (Sephora, Douglas, Rossmann, and more)
- [ ] User accounts with saved combo history
- [ ] Live product reviews through MCP integrations
- [ ] Social sharing with combo recommendations
- [ ] Advanced MCP tools for trend analysis
- [ ] Price drop alerts via MCP notifications
- [ ] Multi-region beauty store support
- [ ] Mobile companion app

## 📞 Support & Issues

- Check the [troubleshooting](#troubleshooting) section
- Verify all dependencies are installed
- Clear browser cache if seeing issues
- Check Flask console for error messages

## 🎉 Credits

Made with 💖 for beauty enthusiasts everywhere!

---

**LipScout AI - Where AI Meets Beauty** 🌸✨💄
