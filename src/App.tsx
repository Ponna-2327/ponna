import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CartSidebar from './components/Cart/CartSidebar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CategoryPage from './pages/CategoryPage';
import ProfilePage from './pages/ProfilePage';
import { useCart } from './hooks/useCart';

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, updateQuantity, removeItem, getItemCount } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemCount={getItemCount()}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      
      <Footer />
      
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;