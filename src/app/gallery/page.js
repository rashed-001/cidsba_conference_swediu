'use client';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder gallery items - replace with actual images
  const galleryItems = [
    { id: 1, title: "Conference Opening Ceremony", category: "events", year: "2023" },
    { id: 2, title: "Keynote Presentation", category: "presentations", year: "2023" },
    { id: 3, title: "Technical Session", category: "sessions", year: "2023" },
    { id: 4, title: "Poster Presentations", category: "posters", year: "2023" },
    { id: 5, title: "Networking Session", category: "networking", year: "2023" },
    { id: 6, title: "Award Ceremony", category: "awards", year: "2023" },
    { id: 7, title: "Workshop Activities", category: "workshops", year: "2023" },
    { id: 8, title: "Panel Discussion", category: "events", year: "2023" },
    { id: 9, title: "Closing Ceremony", category: "events", year: "2023" },
  ];

  const categories = ["all", "events", "presentations", "sessions", "workshops", "networking", "awards", "posters"];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-diu-green">
          Conference Gallery
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Highlights from previous CIDSBA conferences
        </p>

        {/* Category Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-diu-green text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-video bg-gradient-to-br from-diu-green to-primary-700 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder - replace with actual images */}
                <div className="text-white text-4xl font-bold opacity-50 group-hover:opacity-70 transition-opacity">
                  {item.id}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    View Image
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={32} />
            </button>
            <div className="max-w-5xl w-full">
              <div className="aspect-video bg-gradient-to-br from-diu-green to-primary-700 flex items-center justify-center rounded-lg">
                <div className="text-white text-6xl font-bold">
                  {selectedImage.id}
                </div>
              </div>
              <div className="text-white mt-4 text-center">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.year}</p>
              </div>
            </div>
          </div>
        )}

        {/* Upload Info */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Share Your Conference Moments
            </h3>
            <p className="text-gray-600 mb-6">
              Have photos from the conference? We'd love to feature them in our gallery!
            </p>
            <a
              href="/contact"
              className="inline-block bg-diu-green hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Submit Photos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}