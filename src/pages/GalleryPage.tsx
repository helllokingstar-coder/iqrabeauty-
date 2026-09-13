import React, { useState } from 'react';
import { Sparkles, Eye, Instagram, ArrowRight, Calendar } from 'lucide-react';
import { PageId } from '../types';
import { GALLERY_DATA, SALON_INFO } from '../data/salonData';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenLightbox: (index: number) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenLightbox,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Looks' },
    { id: 'bridal', label: 'Bridal Couture' },
    { id: 'hair', label: 'Hair & Balayage' },
    { id: 'makeup', label: 'Party Glam' },
    { id: 'skin', label: 'Skin Glow' },
    { id: 'nails', label: 'Nail Art' },
    { id: 'salon', label: 'Salon Ambiance' },
  ];

  const filteredItems =
    activeTab === 'all'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeTab);

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF7FA] via-white to-[#FFF7FA] py-16 lg:py-20 border-b border-[#F8DDE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase bg-[#F8DDE7] px-3.5 py-1 rounded-full">
            Real Transformations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#222222]">
            Beauty in Every Detail
          </h1>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mx-auto leading-relaxed">
            A visual showcase of real brides, hair color artistry, clinical skincare radiance, and nail architecture created at Iqra Beauty Salon in Gulberg III, Lahore.
          </p>

          {/* Breadcrumbs */}
          <div className="pt-2 text-xs text-gray-400 flex items-center justify-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#D94F83]">
              Home
            </button>
            <span>/</span>
            <span className="text-[#D94F83] font-medium">Photo Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((tab) => {
              const count =
                tab.id === 'all'
                  ? GALLERY_DATA.length
                  : GALLERY_DATA.filter((item) => item.category === tab.id).length;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-[#D94F83] text-white shadow-md shadow-[#D94F83]/25'
                      : 'bg-[#FFF7FA] text-[#555555] hover:bg-[#F8DDE7] hover:text-[#B83268]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      activeTab === tab.id ? 'bg-white/25 text-white' : 'bg-[#F8DDE7] text-[#B83268]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Masonry / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              // find actual index in GALLERY_DATA for lightbox
              const actualIndex = GALLERY_DATA.findIndex((g) => g.id === item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(actualIndex)}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-gray-100 shadow-xs hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#B83268] font-semibold text-[10px] uppercase tracking-wider shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <div className="space-y-1">
                      {item.stylist && (
                        <span className="text-[11px] text-[#F8DDE7] font-medium block">
                          Stylist: {item.stylist}
                        </span>
                      )}
                      <h3 className="font-serif text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-200 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-white/20 mt-3">
                      <span className="text-xs text-[#F8DDE7] font-medium flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Full Screen</span>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instagram Community Banner */}
      <section className="py-14 bg-[#FFF7FA] border-t border-[#F8DDE7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D94F83] to-[#B83268] text-white mx-auto flex items-center justify-center shadow-md">
            <Instagram className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#222222]">
            Follow @iqrabeautysalon.lahore on Instagram
          </h2>
          <p className="text-xs sm:text-sm text-[#666666]">
            Watch daily behind-the-scenes transformations, bridal reveals, and client reviews live from our Gulberg III salon.
          </p>
          <div className="pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#F8DDE7] hover:border-[#D94F83] text-[#222222] hover:text-[#D94F83] text-xs font-semibold shadow-xs transition"
            >
              <span>Join 45,000+ Followers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-[#D94F83] to-[#B83268] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Love What You See? Let's Style You
          </h2>
          <p className="text-sm text-[#F8DDE7] max-w-lg mx-auto">
            Book an appointment today with our senior artists at 161 M Gulberg III, Lahore.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-white text-[#B83268] hover:bg-[#FFF7FA] font-bold text-sm shadow-md transition"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
