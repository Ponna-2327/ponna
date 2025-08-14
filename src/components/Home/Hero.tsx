import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Magical Products for
              <span className="block text-yellow-300">Amazing Kids</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-lg">
              Discover safe, educational, and fun products that spark imagination and joy for children of all ages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/category/toys" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <span>Shop Now</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link to="/category/all" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
                View Categories
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-300" />
                <span className="text-sm font-medium">Safety Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-6 h-6 text-blue-300" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-300" />
                <span className="text-sm font-medium">Top Rated</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy kids playing with toys"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;