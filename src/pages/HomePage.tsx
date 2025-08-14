import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedCategories from '../components/Home/FeaturedCategories';
import ProductGrid from '../components/Products/ProductGrid';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { sampleProducts } from '../data/products';

const HomePage: React.FC = () => {
  const { addToCart } = useCart();
  const { wishlistItems, toggleWishlist } = useWishlist();

  return (
    <main>
      <Hero />
      <FeaturedCategories />
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and highly-rated products loved by kids and parents
            </p>
          </div>
          
          <ProductGrid
            products={sampleProducts}
            onAddToCart={addToCart}
            onToggleWishlist={toggleWishlist}
            wishlistItems={wishlistItems}
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Updated with Motivo Kids
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest updates on new arrivals, special offers, and parenting tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;