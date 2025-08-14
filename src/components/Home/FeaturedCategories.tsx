import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const FeaturedCategories: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: 'Toys & Games',
      description: 'Fun and educational toys for all ages',
      image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'bg-red-500',
      path: '/category/toys'
    },
    {
      id: 2,
      name: 'Kids Clothing',
      description: 'Comfortable and stylish clothes',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'bg-blue-500',
      path: '/category/clothing'
    },
    {
      id: 3,
      name: 'Books & Learning',
      description: 'Educational books and materials',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'bg-green-500',
      path: '/category/books'
    },
    {
      id: 4,
      name: 'Baby Care',
      description: 'Everything for your little one',
      image: 'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'bg-pink-500',
      path: '/category/baby-care'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect products for every age and interest
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              to={category.path}
              key={category.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <button className="flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  <span>Explore</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;