import Link from 'next/link';
import { FaCalendar, FaArrowRight } from 'react-icons/fa';

export default function NewsCard({ title, excerpt, date, slug }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <FaCalendar className="mr-2" />
          {new Date(date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <Link 
          href={`/news/${slug}`}
          className="inline-flex items-center text-diu-green font-semibold hover:text-primary-700 transition-colors"
        >
          Read More <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}