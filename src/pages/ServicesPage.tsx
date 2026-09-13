import React, { useState } from 'react';
import {
  Clock,
  Check,
  Calendar,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Phone,
  MessageCircle,
  Tag,
} from 'lucide-react';
import { PageId, ServiceCategory, ServiceItem } from '../types';
import { SERVICES_DATA, SALON_INFO } from '../data/salonData';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectService,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Services' },
    { id: 'makeup', label: 'Makeup & Glam' },
    { id: 'bridal', label: 'Bridal Couture' },
    { id: 'skincare', label: 'Clinical Skin Care' },
    { id: 'nails', label: 'Nails & Pedicure' },
    { id: 'spa', label: 'Spa & Wellness' },
  ];

  const filteredServices = SERVICES_DATA.filter((svc) => {
    const matchesTab = activeTab === 'all' || svc.category === activeTab;
    const matchesSearch =
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF7FA] via-white to-[#FFF7FA] py-16 lg:py-20 border-b border-[#F8DDE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase bg-[#F8DDE7] px-3.5 py-1 rounded-full">
            Unrivalled Luxury Menu
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#222222]">
            Signature Salon Services
          </h1>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mx-auto leading-relaxed">
            From bespoke bridal couture and artistic balayage to medical-grade hydra facials and restorative spa rituals. Discover transparent pricing and master craftsmanship.
          </p>

          {/* Breadcrumbs */}
          <div className="pt-2 text-xs text-gray-400 flex items-center justify-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#D94F83]">
              Home
            </button>
            <span>/</span>
            <span className="text-[#D94F83] font-medium">Services & Pricing</span>
          </div>
        </div>
      </section>

      {/* Main Services Filter & Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#F8DDE7]">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ServiceCategory)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#D94F83] text-white shadow-md shadow-[#D94F83]/20'
                      : 'bg-[#FFF7FA] text-[#555555] hover:bg-[#F8DDE7] hover:text-[#B83268]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 text-xs rounded-full border border-[#F8DDE7] focus:outline-none focus:border-[#D94F83] bg-[#FFF7FA]"
              />
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-[#F8DDE7] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#D94F83]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Image with hover zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {service.isPopular && (
                      <span className="absolute top-3 left-3 bg-[#D94F83] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        Popular Choice
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#222222] font-semibold text-xs px-2.5 py-1 rounded-full border border-white/50 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D94F83]" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B83268] block">
                      {service.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#222222] group-hover:text-[#D94F83] transition">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="pt-2 space-y-1.5">
                      {(service.features || service.benefits || []).slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                          <Check className="w-3.5 h-3.5 text-[#D94F83] flex-shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Price and Actions */}
                <div className="p-6 pt-0 space-y-4 border-t border-gray-50 mt-2">
                  <div className="flex items-center justify-between pt-3">
                    <div>
                      <span className="block text-[10px] text-gray-400">Price in Lahore</span>
                      <span className="font-serif text-xl font-bold text-[#B83268]">
                        {service.price}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      Gulberg III Salon
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="py-2.5 px-3 rounded-xl bg-[#FFF7FA] hover:bg-[#F8DDE7] text-[#222222] text-xs font-medium text-center transition cursor-pointer border border-[#F8DDE7]"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className="py-2.5 px-3 rounded-xl bg-[#D94F83] hover:bg-[#B83268] text-white text-xs font-medium text-center shadow-xs transition cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16 bg-[#FFF7FA] rounded-3xl border border-[#F8DDE7] mt-8">
              <p className="text-sm text-gray-600 mb-3">
                No services found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSearchQuery('');
                }}
                className="text-xs text-[#D94F83] font-semibold hover:underline"
              >
                Clear filters and show all services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Complete Transparent Price List Table */}
      <section className="py-20 bg-[#FFF7FA] border-t border-[#F8DDE7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
              Full Transparent Price Sheet
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#222222]">
              Complete Salon Price List
            </h2>
            <p className="text-sm text-[#666666]">
              All rates are in Pakistani Rupees (PKR). No hidden fees. Consultation included.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#F8DDE7] shadow-sm overflow-hidden divide-y divide-gray-100">
            {SERVICES_DATA.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#FFF7FA] transition"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B83268] bg-[#F8DDE7] px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#222222]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-1">{item.subtitle}</p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-5">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D94F83]" />
                    {item.duration}
                  </span>
                  <span className="font-serif font-bold text-sm sm:text-base text-[#D94F83] whitespace-nowrap">
                    {item.price}
                  </span>
                  <button
                    onClick={() => onOpenBooking(item.id)}
                    className="px-3 py-1.5 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white text-xs font-medium transition cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Couture Packages Special Feature */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
              Bridal Couture Studio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#222222]">
              Bridal Packages & Multi-Day Specials
            </h2>
            <p className="text-sm text-[#666666]">
              Designed for the regal Pakistani bride. Packages include private suite, dressing, dupatta setting, and jewelry placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFF7FA] p-8 rounded-3xl border border-[#F8DDE7] space-y-6 flex flex-col justify-between hover:shadow-lg transition">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B83268]">
                  Mehndi / Mayun
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#222222]">
                  Mehndi Glow Package
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Dewy sunlit makeup base, vibrant eye styling, floral jewelry fixation, and textured braid or loose waves.
                </p>
                <div className="space-y-2 pt-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D94F83]" />
                    <span>Luminous waterproof dewy foundation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D94F83]" />
                    <span>Traditional floral hair styling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D94F83]" />
                    <span>Dupatta setting and pinning</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#B83268] block mb-4">
                  Rs. 15,000
                </span>
                <button
                  onClick={() => onOpenBooking('party-makeup-glam')}
                  className="w-full py-3 rounded-full bg-[#D94F83] text-white text-xs font-medium hover:bg-[#B83268] transition"
                >
                  Reserve Mehndi Slot
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#FFF7FA] to-[#F8DDE7]/50 p-8 rounded-3xl border-2 border-[#D94F83] space-y-6 flex flex-col justify-between shadow-xl relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D94F83] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md">
                Most Popular
              </span>
              <div className="space-y-4 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B83268]">
                  Signature Barat
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#222222]">
                  Barat Royal Couture
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  The ultimate bridal transformation. 18-hour teardrop-proof HD airbrush base, dramatic royal eye contour, premium mink lashes, jewelry & dupatta styling.
                </p>
                <div className="space-y-2 pt-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D94F83]" />
                    <span>Senior Bridal Director execution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D94F83]" />
                    <span>Private VIP dressing suite</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D94F83]" />
                    <span>Pre-bridal facial & nail polish</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#D94F83] block mb-4">
                  Rs. 25,000
                </span>
                <button
                  onClick={() => onOpenBooking('bridal-makeup-luxury')}
                  className="w-full py-3 rounded-full bg-[#D94F83] text-white text-xs font-medium hover:bg-[#B83268] transition shadow-md"
                >
                  Reserve Barat Slot
                </button>
              </div>
            </div>

            <div className="bg-[#FFF7FA] p-8 rounded-3xl border border-[#F8DDE7] space-y-6 flex flex-col justify-between hover:shadow-lg transition">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B83268]">
                  Walima Glam
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#222222]">
                  Walima Elegance
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Soft romantic pastel glam, glass-skin radiant finish, Hollywood waves or romantic low updo, subtle smokey pastel eyes.
                </p>
                <div className="space-y-2 pt-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D94F83]" />
                    <span>Soft focus pastel bridal glow</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D94F83]" />
                    <span>Hollywood waves or textured bun</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D94F83]" />
                    <span>Dupatta pinning & veil draping</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#B83268] block mb-4">
                  Rs. 22,000
                </span>
                <button
                  onClick={() => onOpenBooking('bridal-makeup-luxury')}
                  className="w-full py-3 rounded-full bg-[#D94F83] text-white text-xs font-medium hover:bg-[#B83268] transition"
                >
                  Reserve Walima Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-14 bg-gradient-to-r from-[#D94F83] to-[#B83268] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Need a Custom Package or Consultation?
            </h3>
            <p className="text-xs sm:text-sm text-[#F8DDE7]">
              Speak directly with Zainab Tariq or our bridal concierge in Gulberg III, Lahore.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="px-6 py-3 rounded-full bg-white text-[#B83268] font-semibold text-xs transition hover:bg-[#FFF7FA]"
            >
              Call {SALON_INFO.phoneFormatted}
            </a>
            <a
              href={SALON_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs transition hover:bg-[#20bd5a] flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
