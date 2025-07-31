import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { AdminProvider } from './contexts/AdminContext';
import AdminRoute from './components/AdminRoute';
import AdminLayout from './components/AdminLayout';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminProductForm from './pages/admin/AdminProductForm';
import AdminOrders from './pages/admin/AdminOrders';

function App() {
  return (
    <AdminProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <Home />
                </main>
                <Footer />
              </div>
            } />
            <Route path="/products" element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <Products />
                </main>
                <Footer />
              </div>
            } />
            <Route path="/products/:id" element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <ProductDetail />
                </main>
                <Footer />
              </div>
            } />
            <Route path="/cart" element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <Cart />
                </main>
                <Footer />
              </div>
            } />
            <Route path="/checkout" element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <Checkout />
                </main>
                <Footer />
              </div>
            } />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="products/new" element={<AdminProductForm />} />
              <Route path="products/edit/:id" element={<AdminProductForm />} />
              <Route path="orders" element={<AdminOrders />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AdminProvider>
  );
}

export default App;