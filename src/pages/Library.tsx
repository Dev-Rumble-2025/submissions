import React, { useState } from 'react';
import { Search, BookOpen, Download, Filter, Star, Eye } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  rating: number;
  downloads: number;
  thumbnail: string;
  publishYear: number;
}

const Library: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('title');

  const categories = [
    'all',
    'Computer Science',
    'Mathematics',
    'Engineering',
    'Physics',
    'Business',
    'Literature'
  ];

  const books: Book[] = [
    {
      id: '1',
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      category: 'Computer Science',
      description: 'A comprehensive guide to algorithms and data structures.',
      rating: 4.8,
      downloads: 1234,
      thumbnail: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=150&h=200&fit=crop',
      publishYear: 2009
    },
    {
      id: '2',
      title: 'Clean Code',
      author: 'Robert C. Martin',
      category: 'Computer Science',
      description: 'A handbook of agile software craftsmanship.',
      rating: 4.7,
      downloads: 987,
      thumbnail: 'https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&w=150&h=200&fit=crop',
      publishYear: 2008
    },
    {
      id: '3',
      title: 'Calculus: Early Transcendentals',
      author: 'James Stewart',
      category: 'Mathematics',
      description: 'Comprehensive calculus textbook with applications.',
      rating: 4.5,
      downloads: 756,
      thumbnail: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=150&h=200&fit=crop',
      publishYear: 2015
    },
    {
      id: '4',
      title: 'Design Patterns',
      author: 'Gang of Four',
      category: 'Computer Science',
      description: 'Elements of reusable object-oriented software.',
      rating: 4.6,
      downloads: 654,
      thumbnail: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=150&h=200&fit=crop',
      publishYear: 1994
    },
    {
      id: '5',
      title: 'Linear Algebra Done Right',
      author: 'Sheldon Axler',
      category: 'Mathematics',
      description: 'A modern approach to linear algebra.',
      rating: 4.4,
      downloads: 543,
      thumbnail: 'https://images.pexels.com/photos/1666673/pexels-photo-1666673.jpeg?auto=compress&cs=tinysrgb&w=150&h=200&fit=crop',
      publishYear: 2015
    },
    {
      id: '6',
      title: 'Physics for Engineers',
      author: 'Douglas C. Giancoli',
      category: 'Physics',
      description: 'Comprehensive physics textbook for engineering students.',
      rating: 4.3,
      downloads: 432,
      thumbnail: 'https://images.pexels.com/photos/834894/pexels-photo-834894.jpeg?auto=compress&cs=tinysrgb&w=150&h=200&fit=crop',
      publishYear: 2013
    }
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'author':
        return a.author.localeCompare(b.author);
      case 'rating':
        return b.rating - a.rating;
      case 'downloads':
        return b.downloads - a.downloads;
      default:
        return 0;
    }
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Library</h1>
          <p className="text-lg text-gray-600">Access thousands of academic resources and materials</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search books, authors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="title">Sort by Title</option>
              <option value="author">Sort by Author</option>
              <option value="rating">Sort by Rating</option>
              <option value="downloads">Sort by Downloads</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">{books.length}</p>
            <p className="text-sm text-gray-600">Total Books</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Download className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">{books.reduce((sum, book) => sum + book.downloads, 0)}</p>
            <p className="text-sm text-gray-600">Total Downloads</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Filter className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">{categories.length - 1}</p>
            <p className="text-sm text-gray-600">Categories</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900">4.5</p>
            <p className="text-sm text-gray-600">Avg Rating</p>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white opacity-50" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">{book.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{book.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(book.rating)}
                    <span className="text-sm text-gray-600 ml-1">({book.rating})</span>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {book.category}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{book.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{book.publishYear}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedBooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No books found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;