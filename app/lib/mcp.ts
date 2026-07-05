// Mock MCP (Model Context Protocol) functions for product search

type Product = {
  id: string;
  name: string;
  brand: string;
  color: string;
  price: number;
  store: string;
  url: string;
};

export async function searchProducts(category: string, filters: {
  color?: string;
  finish?: string;
  minPrice?: number;
  maxPrice?: number;
}): Promise<Product[]> {
  // Mock data - in a real app this would call an actual MCP service
  const mockProducts: Record<string, Product[]> = {
    'lip-liner': [
      {
        id: 'll1',
        name: 'Slim Lip Pencil',
        brand: 'NYX Professional Makeup',
        color: 'Natural',
        price: 25,
        store: 'Sephora',
        url: 'https://www.sephora.pl'
      },
      {
        id: 'll2',
        name: 'Lip Pencil',
        brand: 'Essence',
        color: 'Soft Rose',
        price: 12,
        store: 'Rossmann',
        url: 'https://www.rossmann.pl'
      }
    ],
    'lipstick': [
      {
        id: 'ls1',
        name: 'SuperStay Matte Ink',
        brand: 'Maybelline',
        color: 'Romantic Rose',
        price: 45,
        store: 'Rossmann',
        url: 'https://www.rossmann.pl'
      },
      {
        id: 'ls2',
        name: 'Color Sensational',
        brand: 'Maybelline',
        color: 'Pink Petal',
        price: 35,
        store: 'Douglas',
        url: 'https://www.douglas.pl'
      }
    ],
    'lip-gloss': [
      {
        id: 'lg1',
        name: 'Shine Shine Shine',
        brand: 'Essence',
        color: 'Pink Happiness',
        price: 15,
        store: 'Douglas',
        url: 'https://www.douglas.pl'
      },
      {
        id: 'lg2',
        name: 'Lip Glow Oil',
        brand: 'Dior',
        color: 'Pink',
        price: 120,
        store: 'Sephora',
        url: 'https://www.sephora.pl'
      }
    ]
  };

  // Filter mock data based on filters
  let products = mockProducts[category] || [];
  
  if (filters.color) {
    products = products.filter(p => 
      p.color.toLowerCase().includes(filters.color!.toLowerCase())
    );
  }
  
  if (filters.minPrice) {
    products = products.filter(p => p.price >= filters.minPrice!);
  }
  
  if (filters.maxPrice) {
    products = products.filter(p => p.price <= filters.maxPrice!);
  }
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return products;
}

export async function comparePrices(productId: string): Promise<Product[]> {
  // Mock implementation - would compare prices across stores in a real app
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return [
    {
      id: 'alt1',
      name: 'Similar Product',
      brand: 'Different Brand',
      color: 'Similar',
      price: 20,
      store: 'Other Store',
      url: 'https://example.com'
    }
  ];
}

export async function findDupes(productId: string): Promise<Product[]> {
  // Mock implementation - would find cheaper alternatives in a real app
  await new Promise(resolve => setTimeout(resolve, 400));
  
  return [
    {
      id: 'dupe1',
      name: 'Dupe Product',
      brand: 'Affordable Brand',
      color: 'Similar',
      price: 15,
      store: 'Discount Store',
      url: 'https://example.com'
    }
  ];
}