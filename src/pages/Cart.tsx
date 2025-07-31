import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import CartItem from '../components/CartItem';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { items, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-pink-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Votre panier est vide</h2>
          <p className="text-gray-600 mb-8">
            Découvrez notre collection et ajoutez vos articles préférés
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continuer mes achats
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center text-pink-500 hover:text-pink-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continuer mes achats
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Mon Panier</h1>
          <p className="text-gray-600 mt-2">
            {items.length} article{items.length > 1 ? 's' : ''} dans votre panier
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                {items.map((item, index) => (
                  <CartItem key={`${item.product.id}-${item.size}`} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Résumé de commande</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span>{total.toFixed(2)} Da</span>
                </div>
              
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>{(total + (total >= 50 ? 0 : 4.99)).toFixed(2)} Da</span>
                  </div>
                </div>
              </div>

            

              <Link
                to="/checkout"
                className="w-full bg-pink-500 text-white py-3 px-4 rounded-md hover:bg-pink-600 transition-colors font-medium text-center block"
              >
                Passer commande
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;