import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium">Rupture de stock</span>
          </div>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-50">
          <Heart className="w-4 h-4 text-gray-600 hover:text-pink-500 transition-colors" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-pink-600 transition-colors">
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
          </h3>
        </div>
        
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-pink-600">
            {product.price.toFixed(2)} Da
          </span>
          
          <Link
            to={`/products/${product.id}`}
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors duration-300 flex items-center space-x-1"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Voir</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;