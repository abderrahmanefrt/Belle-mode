import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../data/mockProducts';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Tous', ...Array.from(new Set(mockProducts.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'Tous' 
    ? mockProducts 
    : mockProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Notre Collection</h1>
          <p className="text-gray-600">
            Découvrez notre sélection de vêtements féminins élégants et tendance
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
            </h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center space-x-2 text-pink-500 hover:text-pink-600 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Filtres</span>
            </button>
          </div>

          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-pink-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun produit trouvé dans cette catégorie.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;