from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_cors import CORS
import json
from datetime import datetime
import os

app = Flask(__name__, template_folder='templates', static_folder='static')
CORS(app)

# Mock MCP functions for product search
class MCPClient:
    @staticmethod
    def search_products(category, filters=None):
        """Mock MCP function to search for products"""
        if filters is None:
            filters = {}
        
        products_db = {
            'lip-liner': [
                {
                    'id': 'll1',
                    'name': 'Slim Lip Pencil',
                    'brand': 'NYX Professional Makeup',
                    'color': 'Natural',
                    'price': 25,
                    'store': 'Sephora',
                    'url': 'https://www.sephora.pl'
                },
                {
                    'id': 'll2',
                    'name': 'Lip Pencil',
                    'brand': 'Essence',
                    'color': 'Soft Rose',
                    'price': 12,
                    'store': 'Rossmann',
                    'url': 'https://www.rossmann.pl'
                },
                {
                    'id': 'll3',
                    'name': 'Lip Liner',
                    'brand': 'Maybelline',
                    'color': 'Pink',
                    'price': 18,
                    'store': 'Douglas',
                    'url': 'https://www.douglas.pl'
                }
            ],
            'lipstick': [
                {
                    'id': 'ls1',
                    'name': 'SuperStay Matte Ink',
                    'brand': 'Maybelline',
                    'color': 'Romantic Rose',
                    'price': 45,
                    'store': 'Rossmann',
                    'url': 'https://www.rossmann.pl'
                },
                {
                    'id': 'ls2',
                    'name': 'Color Sensational',
                    'brand': 'Maybelline',
                    'color': 'Pink Petal',
                    'price': 35,
                    'store': 'Douglas',
                    'url': 'https://www.douglas.pl'
                },
                {
                    'id': 'ls3',
                    'name': 'Creamy Matte',
                    'brand': 'Essence',
                    'color': 'Berry Love',
                    'price': 20,
                    'store': 'Rossmann',
                    'url': 'https://www.rossmann.pl'
                }
            ],
            'lip-gloss': [
                {
                    'id': 'lg1',
                    'name': 'Shine Shine Shine',
                    'brand': 'Essence',
                    'color': 'Pink Happiness',
                    'price': 15,
                    'store': 'Douglas',
                    'url': 'https://www.douglas.pl'
                },
                {
                    'id': 'lg2',
                    'name': 'Lip Glow Oil',
                    'brand': 'Dior',
                    'color': 'Pink',
                    'price': 120,
                    'store': 'Sephora',
                    'url': 'https://www.sephora.pl'
                },
                {
                    'id': 'lg3',
                    'name': 'Glossy Lip',
                    'brand': 'Maybelline',
                    'color': 'Rose Gold',
                    'price': 28,
                    'store': 'Rossmann',
                    'url': 'https://www.rossmann.pl'
                }
            ]
        }
        
        products = products_db.get(category, [])
        
        # Filter by color if provided
        if 'color' in filters and filters['color']:
            products = [p for p in products if filters['color'].lower() in p['color'].lower()]
        
        # Filter by price range if provided
        if 'min_price' in filters and filters['min_price']:
            products = [p for p in products if p['price'] >= filters['min_price']]
        
        if 'max_price' in filters and filters['max_price']:
            products = [p for p in products if p['price'] <= filters['max_price']]
        
        return products
    
    @staticmethod
    def find_dupes(product_id):
        """Mock MCP function to find cheaper alternatives"""
        dupes = [
            {
                'id': 'dupe1',
                'name': 'Affordable Alternative',
                'brand': 'Budget Brand',
                'color': 'Similar',
                'price': 12,
                'store': 'Aldi',
                'url': 'https://www.aldi.pl'
            }
        ]
        return dupes
    
    @staticmethod
    def compare_prices(product_id):
        """Mock MCP function to compare prices across stores"""
        comparisons = [
            {
                'id': 'comp1',
                'name': 'Same Product',
                'brand': 'Same Brand',
                'color': 'Same Color',
                'price': 25,
                'store': 'Different Store',
                'url': 'https://example.com'
            }
        ]
        return comparisons


class LipComboGenerator:
    @staticmethod
    def generate_combo(occasion, finish, style, color, budget):
        """Generate AI-powered lip combo based on user preferences"""
        
        # Combo names based on preferences
        combo_names = {
            ('date', 'glossy', 'glam'): '✨ Glam Date Night',
            ('date', 'satin', 'soft girl'): '💕 Soft Romantic Glow',
            ('wedding', 'matte', 'glam'): '👑 Elegant Bride',
            ('party', 'shimmer', 'glam'): '🎉 Party Sparkle',
            ('school', 'matte', 'natural'): '📚 Clean Girl Everyday',
            ('everyday', 'satin', 'clean girl'): '🌸 Minimal Chic',
        }
        
        combo_descriptions = {
            '✨ Glam Date Night': 'A bold and glamorous look perfect for impressing on a special date night.',
            '💕 Soft Romantic Glow': 'Delicate pink tones with a soft finish, creating a romantic and approachable vibe.',
            '👑 Elegant Bride': 'Sophisticated and timeless, perfect for your special day with a matte luxe finish.',
            '🎉 Party Sparkle': 'Eye-catching shimmers and bold colors that shine under party lights.',
            '📚 Clean Girl Everyday': 'Natural, minimal look that works for school and everyday activities.',
            '🌸 Minimal Chic': 'Understated elegance with neutral tones and satin finish for modern minimalism.',
        }
        
        key = (occasion, finish, style)
        combo_name = combo_names.get(key, '💄 Your Perfect Look')
        description = combo_descriptions.get(combo_name, 'A beautiful lip combination tailored to your style.')
        
        # Search for products based on filters
        mcp = MCPClient()
        liner = mcp.search_products('lip-liner', {'color': color, 'max_price': budget})
        lipstick = mcp.search_products('lipstick', {'color': color, 'max_price': budget})
        gloss = mcp.search_products('lip-gloss', {'max_price': budget})
        
        # Select first available or default
        selected_liner = liner[0] if liner else {
            'id': 'default_ll',
            'name': 'Universal Lip Liner',
            'brand': 'Any Brand',
            'color': color,
            'price': 15,
            'store': 'Local Store',
            'url': '#'
        }
        
        selected_lipstick = lipstick[0] if lipstick else {
            'id': 'default_ls',
            'name': 'Classic Lipstick',
            'brand': 'Any Brand',
            'color': color,
            'price': 30,
            'store': 'Local Store',
            'url': '#'
        }
        
        selected_gloss = gloss[0] if gloss else {
            'id': 'default_lg',
            'name': 'Shiny Lip Gloss',
            'brand': 'Any Brand',
            'color': 'Clear',
            'price': 15,
            'store': 'Local Store',
            'url': '#'
        }
        
        total_price = selected_liner['price'] + selected_lipstick['price'] + selected_gloss['price']
        
        return {
            'name': combo_name,
            'description': description,
            'products': {
                'liner': selected_liner,
                'lipstick': selected_lipstick,
                'gloss': selected_gloss
            },
            'total_price': total_price,
            'occasion': occasion,
            'finish': finish,
            'style': style,
            'color': color
        }


@app.route('/')
def index():
    """Render main page"""
    try:
        return render_template('index.html')
    except Exception as e:
        print(f"Error rendering template: {e}")
        return f"<h1>Error loading page</h1><p>{str(e)}</p>", 500


@app.route('/api/generate-combo', methods=['POST'])
def generate_combo():
    """API endpoint to generate lip combo"""
    data = request.json
    
    combo = LipComboGenerator.generate_combo(
        occasion=data.get('occasion'),
        finish=data.get('finish'),
        style=data.get('style'),
        color=data.get('color'),
        budget=int(data.get('budget', 150))
    )
    
    return jsonify(combo)


@app.route('/api/find-dupes/<product_id>', methods=['GET'])
def find_dupes(product_id):
    """API endpoint to find cheaper alternatives"""
    mcp = MCPClient()
    dupes = mcp.find_dupes(product_id)
    return jsonify(dupes)


@app.route('/api/compare-prices/<product_id>', methods=['GET'])
def compare_prices(product_id):
    """API endpoint to compare prices"""
    mcp = MCPClient()
    comparisons = mcp.compare_prices(product_id)
    return jsonify(comparisons)


@app.route('/api/search-products', methods=['POST'])
def search_products():
    """API endpoint to search for products"""
    data = request.json
    mcp = MCPClient()
    
    products = mcp.search_products(
        category=data.get('category'),
        filters={
            'color': data.get('color'),
            'min_price': data.get('min_price'),
            'max_price': data.get('max_price')
        }
    )
    
    return jsonify(products)


if __name__ == '__main__':
    print("🌸 Starting LipScout AI Server...")
    print("👉 Open http://localhost:8000 in your browser")
    app.run(debug=True, port=8000, host='127.0.0.1')