'use client';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, title: 'Conference opening ceremony', category: 'events', year: '2023' },
    { id: 2, title: 'Keynote presentation', category: 'presentations', year: '2023' },
    { id: 3, title: 'Technical session', category: 'sessions', year: '2023' },
    { id: 4, title: 'Poster presentations', category: 'posters', year: '2023' },
    { id: 5, title: 'Networking session', category: 'networking', year: '2023' },
    { id: 6, title: 'Award ceremony', category: 'awards', year: '2023' },
    { id: 7, title: 'Workshop activities', category: 'workshops', year: '2023' },
    { id: 8, title: 'Panel discussion', category: 'events', year: '2023' },
    { id: 9, title: 'Closing ceremony', category: 'events', year: '2023' },
  ];

  const categories = ['all', 'events', 'presentations', 'sessions', 'workshops', 'networking', 'awards', 'posters'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="section bg-slate-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Gallery</span>
          <h1 className="section-heading">Conference highlights</h1>
          <p className="section-copy mx-auto">
            A glimpse into the vibrant atmosphere of our academic and research community during previous conference editions.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] transition ${
                  activeCategory === category ? 'bg-[var(--navy)] text-white' : 'bg-white text-slate-700 shadow-sm hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <div key={item.id} onClick={() => setSelectedImage(item)} className="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_14px_30px_rgba(13,27,61,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,27,61,0.1)]">
                <div className="relative flex aspect-video items-center justify-center bg-[linear-gradient(135deg,#0d1b3d,#1d6fb8_52%,#0b7ca4)] text-5xl font-black text-white/60">
                  {item.id}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/15 opacity-0 transition group-hover:opacity-100">
                    <span className="rounded-full border border-white/60 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-white">View</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-slate-500">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedImage(null)}>
            <button className="absolute right-5 top-5 text-3xl text-white" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
            <div className="w-full max-w-5xl">
              <div className="flex aspect-video items-center justify-center rounded-[1.5rem] bg-[linear-gradient(135deg,#0d1b3d,#1d6fb8_52%,#0b7ca4)] text-7xl font-black text-white/80">
                {selectedImage.id}
              </div>
              <div className="mt-4 text-center text-white">
                <h3 className="text-2xl font-black">{selectedImage.title}</h3>
                <p className="mt-2 text-slate-300">{selectedImage.year}</p>
              </div>
            </div>
          </div>
        )}

        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-[0_18px_50px_rgba(13,27,61,0.06)] md:p-10">
          <h3 className="text-2xl font-black text-slate-900 md:text-3xl">Share your conference moments</h3>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Have photos from past editions or your event participation? We’d love to feature them in the official conference gallery.
          </p>
          <a href="/contact" className="primary-button mt-8">Submit photos</a>
        </div>
      </div>
    </div>
  );
}