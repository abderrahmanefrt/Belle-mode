import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.product.id, item.size, newQuantity);
  };

  const handleRemove = () => {
    removeItem(item.product.id, item.size);
  };

  return (
    <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.product.name}</h3>
        <p className="text-sm text-gray-500">Taille: {item.size}</p>
        <p className="text-sm font-medium text-pink-600">
          {item.product.price.toFixed(2)} Da
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          disabled={item.quantity <= 1}
        >
          <Minus className="w-4 h-4 text-gray-600" />
        </button>
        
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      
      <div className="text-right">
        <p className="font-medium text-gray-900">
          {(item.product.price * item.quantity).toFixed(2)} Da
        </p>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700 transition-colors mt-1"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;