
# 💄 LipScout AI - Your Perfect Lip Combo

A girly, modern web application that uses AI to generate personalized lip combinations and finds real products with prices from Polish beauty stores.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Python](https://img.shields.io/badge/Python-3.13-blue)
![Flask](https://img.shields.io/badge/Flask-3.0-red)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Latest-38B2AC)

## 🌸

## 🌸 Features

### ✨ AI-Powered Lip Combo Generator
- Generates personalized lip combinations based on user preferences
- Creates unique names and descriptions for each look
- Recommends real products from Polish beauty retailers

### 🛍️ Product Search & Recommendations
- **Lip Liner** - contouring products
- **Lipstick** - color options with various finishes
- **Lip Gloss** - shine and glossy effects
- Real prices and store links
- Mock MCP (Model Context Protocol) integration

### 💰 Budget-Friendly
- Budget slider from 20-150 PLN
- Automatic total price calculation
- Find cheaper alternatives (dupes)
- Price comparison across stores

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- pip

### Installation & Running

1. **Install dependencies:**
```bash
pip install -r requirements.txt
```

2. **Run the application:**
```bash
python app.py
```

3. **Open in browser:**
Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

## 📁 Project Structure

```
lipscout-ai/
├── app.py                    # Flask backend with MCP integration
├── requirements.txt          # Python dependencies
├── templates/
│   └── index.html           # Beautiful Tailwind CSS frontend
├── README.md                # This file
└── AGENTS.md                # Agent configuration
```

## 🎯 How It Works

1. **Fill Preferences** - Select occasion, finish, style, color, and budget
2. **AI Generates Look** - Backend creates personalized combo with name & description
3. **Real Products** - System searches mock database for products matching preferences
4. **View Results** - See all 3 products (liner, lipstick, gloss) with prices
5. **Save & Share** - Keep your favorite combos or share with friends

## 🔧 API Endpoints

### POST `/api/generate-combo`
Generates a personalized lip combination based on user preferences.

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
Finds cheaper alternatives for a product

### GET `/api/compare-prices/<product_id>`
Compares prices across different stores

### POST `/api/search-products`
Searches for products with filters (category, color, price range)

## 🎨 Design Highlights

✨ **Modern Aesthetic:**
- Gradient pink backgrounds
- Glass morphism cards
- Smooth hover animations
- Fully responsive design
- Cute emoji icons

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

- [ ] User accounts and saved combos
- [ ] Real API integration with beauty retailers
- [ ] Product reviews and ratings
- [ ] Social sharing features
- [ ] Machine learning recommendations
- [ ] Email notifications for price drops
- [ ] Mobile app version

## 📞 Support & Issues

- Check the [troubleshooting](#troubleshooting) section
- Verify all dependencies are installed
- Clear browser cache if seeing issues
- Check Flask console for error messages

## 🎉 Credits

Made with 💖 for beauty enthusiasts everywhere!

---

**LipScout AI - Where AI Meets Beauty** 🌸✨💄
