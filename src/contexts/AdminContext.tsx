import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, OrderData } from '../types';
import { mockProducts } from '../data/mockProducts';

interface AdminState {
  products: Product[];
  orders: OrderData[];
  isAuthenticated: boolean;
}

interface AdminContextType extends AdminState {
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addOrder: (order: OrderData) => void;
  updateOrderStatus: (id: string, status: 'pending' | 'confirmed' | 'cancelled') => void;
  deleteOrder: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AdminState>({
    products: mockProducts,
    orders: [],
    isAuthenticated: false
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('admin_products');
    const savedOrders = localStorage.getItem('admin_orders');
    const savedAuth = localStorage.getItem('admin_auth');

    if (savedProducts) {
      try {
        const products = JSON.parse(savedProducts);
        setState(prev => ({ ...prev, products }));
      } catch (error) {
        console.error('Error loading products:', error);
      }
    }

    if (savedOrders) {
      try {
        const orders = JSON.parse(savedOrders);
        setState(prev => ({ ...prev, orders }));
      } catch (error) {
        console.error('Error loading orders:', error);
      }
    }

    if (savedAuth === 'true') {
      setState(prev => ({ ...prev, isAuthenticated: true }));
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('admin_products', JSON.stringify(state.products));
  }, [state.products]);

  useEffect(() => {
    localStorage.setItem('admin_orders', JSON.stringify(state.orders));
  }, [state.orders]);

  useEffect(() => {
    localStorage.setItem('admin_auth', state.isAuthenticated.toString());
  }, [state.isAuthenticated]);

  const login = (email: string, password: string): boolean => {
    // Simple authentication (in real app, this would be an API call)
    if (email === 'admin@bellemode.fr' && password === 'admin123') {
      setState(prev => ({ ...prev, isAuthenticated: true }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setState(prev => ({ ...prev, isAuthenticated: false }));
    localStorage.removeItem('admin_auth');
  };

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString()
    };
    setState(prev => ({
      ...prev,
      products: [...prev.products, newProduct]
    }));
  };

  const updateProduct = (id: string, productData: Partial<Product>) => {
    setState(prev => ({
      ...prev,
      products: prev.products.map(product =>
        product.id === id ? { ...product, ...productData } : product
      )
    }));
  };

  const deleteProduct = (id: string) => {
    setState(prev => ({
      ...prev,
      products: prev.products.filter(product => product.id !== id)
    }));
  };

  const addOrder = (orderData: OrderData) => {
    const newOrder: OrderData = {
      ...orderData,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    setState(prev => ({
      ...prev,
      orders: [...prev.orders, newOrder]
    }));
  };

  const updateOrderStatus = (id: string, status: 'pending' | 'confirmed' | 'cancelled') => {
    setState(prev => ({
      ...prev,
      orders: prev.orders.map(order =>
        order.id === id ? { ...order, status } : order
      )
    }));
  };

  const deleteOrder = (id: string) => {
    setState(prev => ({
      ...prev,
      orders: prev.orders.filter(order => order.id !== id)
    }));
  };

  return (
    <AdminContext.Provider value={{
      ...state,
      login,
      logout,
      addProduct,
      updateProduct,
      deleteProduct,
      addOrder,
      updateOrderStatus,
      deleteOrder
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};