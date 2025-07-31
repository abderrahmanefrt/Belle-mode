import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Heart, Star, ShoppingBag, CheckCircle } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';
import { useCart } from '../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);

  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Veuillez sélectionner une taille');
      return;
    }
    
    addItem(product, selectedSize);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 lg:h-[600px] object-cover rounded-lg"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center rounded-lg">
                  <span className="text-white font-medium text-lg">Rupture de stock</span>
                </div>
              )}
              <button className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-md hover:bg-pink-50 transition-colors">
                <Heart className="w-5 h-5 text-gray-600 hover:text-pink-500 transition-colors" />
              </button>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm text-pink-500 font-medium">{product.category}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">(4.8)</span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-2xl font-bold text-pink-600 mb-6">
                  {product.price.toFixed(2)} Da
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Taille</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md transition-colors ${
                        selectedSize === size
                          ? 'border-pink-500 bg-pink-50 text-pink-600'
                          : 'border-gray-300 hover:border-pink-300 hover:bg-pink-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`w-full py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${
                    product.inStock
                      ? 'bg-pink-500 text-white hover:bg-pink-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>
                    {product.inStock ? 'Ajouter au panier' : 'Produit indisponible'}
                  </span>
                </button>

                {showSuccess && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-md">
                    <CheckCircle className="w-5 h-5" />
                    <span>Produit ajouté au panier avec succès !</span>
                  </div>
                )}
              </div>

              {/* Product Features */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Informations produit</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Matière de qualité supérieure</li>
                  <li>• Entretien facile en machine</li>
                  <li>• Coupe ajustée et confortable</li>
                  <li>• Échange et retour gratuits sous 30 jours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;