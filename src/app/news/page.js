import NewsCard from '@/components/NewsCard';
import { newsArticles } from '@/data/news';
import { FaBell } from 'react-icons/fa';

export default function News() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-diu-green">
          News & Updates
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay informed about the latest conference announcements and updates
        </p>

        {/* Subscribe Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-diu-green to-primary-700 rounded-lg shadow-lg p-8 text-center text-white">
            <FaBell className="text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Subscribe to Updates
            </h2>
            <p className="mb-6 text-gray-100">
              Get the latest news and announcements delivered to your inbox
            </p>
            <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-diu-gold"
              />
              <button className="bg-diu-gold hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-50 text-diu-green font-bold py-3 px-8 rounded-lg shadow-md transition-colors border-2 border-diu-green">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}