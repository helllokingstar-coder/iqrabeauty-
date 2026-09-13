import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  Star,
  Award,
  Users,
  ShieldCheck,
  Check,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronRight,
  Heart,
  ChevronLeft,
} from 'lucide-react';
import {
  SALON_INFO,
  SERVICES_DATA,
  GALLERY_DATA,
  BLOG_POSTS,
  EXPERT_ADVICE_ARTICLES,
  TESTIMONIALS_DATA,
} from '../data/salonData';
import { PageId, ServiceCategory, ServiceItem } from '../types';
import { BrandPartners } from '../components/BrandPartners';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectBlog: (slug: string) => void;
  onOpenBooking: (serviceId?: string) => void;
  onOpenLightbox: (index: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectService,
  onSelectBlog,
  onOpenBooking,
  onOpenLightbox,
}) => {
  const [activeServiceTab, setActiveServiceTab] = useState<ServiceCategory>('all');
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>('all');
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Hero image state with exact uploaded makeup.jfif
  const heroFileInputRef = useRef<HTMLInputElement>(null);
  const [heroImageSrc, setHeroImageSrc] = useState<string>(() => {
    return localStorage.getItem('iqra_custom_hero_image') || '/makeup.jfif';
  });
  const [isDraggingOverHero, setIsDraggingOverHero] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('iqra_custom_hero_image')) {
      const probe = new Image();
      probe.src = '/makeup.jfif';
      probe.onload = () => {
        setHeroImageSrc('/makeup.jfif');
      };
      probe.onerror = () => {
        setHeroImageSrc('/hero_makeup_artist.jpg');
      };
    }
  }, []);

  const handleHeroImageFile = (file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setHeroImageSrc(dataUrl);
        try {
          localStorage.setItem('iqra_custom_hero_image', dataUrl);
        } catch {
          // Ignore quota errors if high-res
        }
      }
    };
    reader.readAsDataURL(file);
  };

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactService, setContactService] = useState('Bridal Makeup');
  const [contactDate, setContactDate] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setContactMsg('');
    }, 6000);
  };

  const filteredServices =
    activeServiceTab === 'all'
      ? SERVICES_DATA.slice(0, 8)
      : SERVICES_DATA.filter((s) => s.category === activeServiceTab).slice(0, 8);

  const filteredGallery =
    activeGalleryTab === 'all'
      ? GALLERY_DATA.slice(0, 6)
      : GALLERY_DATA.filter((item) => item.category === activeGalleryTab).slice(0, 6);

  const featuredPricingServices = [
    {
      name: 'Hair Transformation & Cut',
      desc: 'Precision haircut, scalp clarifying wash, and signature Dyson blowout',
      price: 'Rs. 3,500',
      duration: '60 mins',
      category: 'Hair Care',
      serviceId: 'hair-transformation',
    },
    {
      name: 'Party Makeup & Lashes',
      desc: 'Luminous event base, sculpted eye contour, and mink-touch faux lashes',
      price: 'Rs. 7,500',
      duration: '75 mins',
      category: 'Makeup',
      serviceId: 'party-makeup-glam',
    },
    {
      name: 'Deluxe Clinical Hydra Facial',
      desc: '7-step vortex vacuum pore extraction with hyaluronic serum & cryo-tightening',
      price: 'Rs. 6,500',
      duration: '60 mins',
      category: 'Skincare',
      serviceId: 'hydra-facial-deluxe',
    },
    {
      name: 'Luxury Signature Bridal Makeup',
      desc: 'Waterproof 18-hr HD airbrush glam, royal jewelry pinning & dupata draping',
      price: 'Rs. 25,000',
      duration: '3 hours',
      category: 'Bridal Couture',
      serviceId: 'bridal-makeup-luxury',
    },
    {
      name: 'Royal Rose Spa Mani & Pedi',
      desc: 'Rose milk soak, callus buffing, paraffin warm wrap, and massage',
      price: 'Rs. 3,500',
      duration: '75 mins',
      category: 'Nails & Feet',
      serviceId: 'luxury-spa-mani-pedi',
    },
    {
      name: 'Custom Balayage & Olaplex',
      desc: 'Multidimensional hand-painted color tone with Olaplex bond repair',
      price: 'Rs. 16,500',
      duration: '3.5 hours',
      category: 'Hair Color',
      serviceId: 'balayage-highlights',
    },
  ];

  return (
    <div className="space-y-0">
      {/* ==================================================== */}
      {/* 1. HERO SECTION */}
      {/* ==================================================== */}
      <section
        id="hero-section"
        className="relative bg-gradient-to-b from-[#FFF7FA] via-[#FFF7FA] to-white pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden"
      >
        {/* Subtle decorative floral/radial background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F8DDE7]/50 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F8DDE7]/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8DDE7] text-[#B83268] text-xs font-semibold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D94F83]" />
                <span>Luxury Beauty & Salon • Gulberg III Lahore</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1] font-bold text-[#222222] tracking-tight">
                Beauty That <br />
                <span className="text-[#D94F83] italic font-normal font-cormorant font-semibold">
                  Reflects You
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#555555] max-w-xl leading-relaxed font-normal">
                Discover exceptional beauty, hair, skincare and makeup services designed to make you feel confident, radiant and unforgettable. Lahore's premier luxury salon sanctuary.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="hero-book-appointment-btn"
                  onClick={() => onOpenBooking()}
                  className="px-8 py-4 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white font-medium text-sm sm:text-base tracking-wide shadow-lg shadow-[#D94F83]/30 hover:shadow-xl hover:shadow-[#D94F83]/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>

                <button
                  id="hero-explore-services-btn"
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 rounded-full bg-white hover:bg-[#FFF7FA] text-[#222222] hover:text-[#D94F83] border border-[#F8DDE7] font-medium text-sm sm:text-base tracking-wide shadow-xs hover:border-[#D94F83]/50 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-[#D94F83]" />
                </button>
              </div>

              {/* Client trust mini-bar */}
              <div className="pt-4 flex items-center gap-4 border-t border-[#F8DDE7]/80">
                {/* Overlapping client avatars */}
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Happy Client"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80"
                    alt="Happy Client"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                    alt="Happy Client"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                    alt="Happy Client"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#D94F83]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D94F83]" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#222222]">
                    Trusted by 5,000+ Happy Clients in Lahore
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Hidden input for selecting the user's exact makeup file */}
                <input
                  type="file"
                  ref={heroFileInputRef}
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleHeroImageFile(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                  id="hero-file-input"
                />

                {/* Subtle pink gradient card frame */}
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDraggingOverHero(true);
                  }}
                  onDragLeave={() => setIsDraggingOverHero(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDraggingOverHero(false);
                    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                      handleHeroImageFile(e.dataTransfer.files[0]);
                    }
                  }}
                  className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 transition-all duration-300 ${
                    isDraggingOverHero
                      ? 'border-[#D94F83] ring-4 ring-[#D94F83]/30 scale-[1.02]'
                      : 'border-white'
                  } bg-gradient-to-tr from-[#F8DDE7] to-white p-2 group`}
                >
                  <div
                    onClick={() => heroFileInputRef.current?.click()}
                    title="Click or drop your exact image here (makeup.jfif)"
                    className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={heroImageSrc}
                      alt="Professional Makeup Artist & Bridal Session - Iqra Beauty Salon Lahore"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                    {/* Soft pink bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#B83268]/30 via-transparent to-transparent pointer-events-none" />

                    {/* Floating badge inside image */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between pointer-events-auto">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B83268] block">
                          Bridal & Event Couture
                        </span>
                        <span className="font-serif font-bold text-sm text-[#222222]">
                          Bookings Open for 2026
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking();
                        }}
                        className="px-3.5 py-1.5 rounded-full bg-[#D94F83] text-white text-xs font-medium hover:bg-[#B83268] transition"
                      >
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative floating circular badge */}
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-[#F8DDE7] hidden sm:flex items-center gap-2 animate-bounce duration-1000">
                  <Heart className="w-5 h-5 text-[#D94F83] fill-[#D94F83]" />
                  <span className="text-xs font-semibold text-[#222222]">100% Client Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* BRAND PARTNERS BAR */}
      {/* ==================================================== */}
      <BrandPartners />

      {/* ==================================================== */}
      {/* 2. TRUST / HIGHLIGHTS BAR */}
      {/* ==================================================== */}
      <section id="highlights-bar" className="py-10 bg-[#FFF7FA] border-b border-[#F8DDE7]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#F8DDE7]/70 shadow-xs hover:border-[#D94F83]/40 transition">
              <div className="w-12 h-12 rounded-xl bg-[#F8DDE7] text-[#D94F83] flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#222222] block">
                  10+
                </span>
                <span className="text-xs text-[#666666] font-medium">Years of Excellence</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#F8DDE7]/70 shadow-xs hover:border-[#D94F83]/40 transition">
              <div className="w-12 h-12 rounded-xl bg-[#F8DDE7] text-[#D94F83] flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#222222] block">
                  5,000+
                </span>
                <span className="text-xs text-[#666666] font-medium">Happy Clients</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#F8DDE7]/70 shadow-xs hover:border-[#D94F83]/40 transition">
              <div className="w-12 h-12 rounded-xl bg-[#F8DDE7] text-[#D94F83] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#222222] block">
                  25+
                </span>
                <span className="text-xs text-[#666666] font-medium">Beauty Services</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#F8DDE7]/70 shadow-xs hover:border-[#D94F83]/40 transition">
              <div className="w-12 h-12 rounded-xl bg-[#F8DDE7] text-[#D94F83] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#222222] block">
                  100%
                </span>
                <span className="text-xs text-[#666666] font-medium">Client Care & Hygiene</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 3. ABOUT US SECTION (Two-Column with Story) */}
      {/* ==================================================== */}
      <section id="about-preview-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                {/* Main Salon Interior Image */}
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFF7FA] aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                    alt="Iqra Beauty Salon Interior Gulberg Lahore"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping secondary experience card */}
                <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-white p-5 rounded-2xl shadow-xl border border-[#F8DDE7] max-w-xs hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F8DDE7] flex items-center justify-center text-[#D94F83]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-serif font-bold text-sm text-[#222222] block">
                        Gulberg III Sanctuary
                      </span>
                      <span className="text-xs text-[#666666]">
                        Hospital-grade hygiene & sterilized tools
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8DDE7] text-[#B83268] text-xs font-semibold tracking-widest uppercase">
                About Our Salon
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222] leading-tight">
                Where Beauty Meets{' '}
                <span className="text-[#D94F83] italic font-cormorant font-semibold">Confidence</span>
              </h2>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                At Iqra Beauty Salon, we believe beauty is an intimate form of self-expression and care. Located in the prestigious heart of 161 M Gulberg III, Lahore, our salon was created to provide discerning women with a tranquil retreat from the bustle of the city.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Certified Master Stylists & Aesthetic Specialists',
                  'Premium International Product Formulations',
                  'One-on-One Dedicated Consultations',
                  'Private Bridal & Spa Dressing Suites',
                  'Cutting-edge Dyson & Hydra Dermabrasion Tech',
                  'Transparent Pricing with Zero Hidden Extras',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#F8DDE7] text-[#D94F83] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#333333] font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-7 py-3.5 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white text-sm font-medium tracking-wide shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="text-xs sm:text-sm text-[#222222] hover:text-[#D94F83] font-semibold flex items-center gap-1.5 transition"
                >
                  <Phone className="w-4 h-4 text-[#D94F83]" />
                  <span>Call: {SALON_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 4. WHY CHOOSE US SECTION (4 Cards) */}
      {/* ==================================================== */}
      <section id="why-choose-us-section" className="py-20 bg-[#FFF7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
              The Iqra Beauty Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#222222]">
              Why Lahore Chooses Us
            </h2>
            <p className="text-sm text-[#666666]">
              Every treatment at Iqra Beauty Salon is tailored to elevate your natural beauty with precision, care, and international craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                num: '01',
                title: 'Expert Beauty Professionals',
                desc: 'Our senior artists and color directors hold internationally recognized certifications with over a decade of bridal and hair styling expertise.',
                icon: 'Award',
              },
              {
                num: '02',
                title: 'Premium Quality Products',
                desc: 'We strictly utilize world-renowned beauty brands: Olaplex, L\'Oréal Paris, Kérastase, MAC, Dermalogica, and Bobbi Brown.',
                icon: 'Sparkles',
              },
              {
                num: '03',
                title: 'Personalized Beauty Experience',
                desc: 'Every session commences with an in-depth diagnosis to map your unique undertones, hair condition, skin hydration, and lifestyle.',
                icon: 'Heart',
              },
              {
                num: '04',
                title: 'Luxury & Hygiene',
                desc: 'Autoclave sterilized instruments, single-use disposable capes, and ultra-hygienic private suites crafted for your total comfort.',
                icon: 'ShieldCheck',
              },
            ].map((card) => (
              <div
                key={card.num}
                className="bg-white p-8 rounded-3xl border border-[#F8DDE7]/80 shadow-sm hover:shadow-xl hover:border-[#D94F83]/50 hover:-translate-y-1.5 transition-all duration-300 space-y-4 group relative overflow-hidden"
              >
                {/* Large Subtle Pink Number Watermark */}
                <span className="text-4xl font-serif font-bold text-[#F8DDE7] group-hover:text-[#D94F83]/20 transition-colors block">
                  {card.num}
                </span>

                <h3 className="font-serif text-lg font-bold text-[#222222] group-hover:text-[#D94F83] transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {card.desc}
                </p>

                <div className="pt-2">
                  <span className="w-8 h-0.5 bg-[#F8DDE7] group-hover:bg-[#D94F83] group-hover:w-12 transition-all block rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 5. OUR SERVICES SECTION */}
      {/* ==================================================== */}
      <section id="services-preview-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
              Curated Beauty Menu
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222]">
              Our Signature Services
            </h2>
            <p className="text-sm text-[#666666]">
              Everything You Need to Look and Feel Your Best
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: 'all', label: 'All Services' },
                { id: 'hair', label: 'Hair Services' },
                { id: 'makeup', label: 'Makeup' },
                { id: 'bridal', label: 'Bridal Couture' },
                { id: 'skincare', label: 'Skin Care' },
                { id: 'nails', label: 'Nails & Feet' },
                { id: 'spa', label: 'Spa & Relaxation' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveServiceTab(tab.id as ServiceCategory)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
                    activeServiceTab === tab.id
                      ? 'bg-[#D94F83] text-white shadow-md shadow-[#D94F83]/25'
                      : 'bg-[#FFF7FA] text-[#555555] hover:bg-[#F8DDE7] hover:text-[#B83268]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-[#F8DDE7] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#D94F83]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Image with hover zoom */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {service.isPopular && (
                      <span className="absolute top-3 left-3 bg-[#D94F83] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        Popular
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#222222] font-semibold text-xs px-2.5 py-1 rounded-full border border-white/50">
                      {service.duration}
                    </span>
                  </div>

                  {/* Service Body */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B83268] block">
                      {service.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#222222] group-hover:text-[#D94F83] transition">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer with Price and Actions */}
                <div className="p-6 pt-0 space-y-3 border-t border-gray-50 mt-2">
                  <div className="flex items-center justify-between pt-3">
                    <span className="text-[11px] text-gray-500">Starting from</span>
                    <span className="font-serif text-base font-bold text-[#B83268]">
                      {service.price}
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
                      className="py-2.5 px-3 rounded-xl bg-[#D94F83] hover:bg-[#B83268] text-white text-xs font-medium text-center shadow-xs transition cursor-pointer"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#D94F83] text-[#D94F83] hover:bg-[#D94F83] hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer"
            >
              <span>View All Salon Services & Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 6. SERVICE PRICE LIST SECTION */}
      {/* ==================================================== */}
      <section id="service-price-list-section" className="py-20 bg-[#FFF7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
              Transparent Pricing
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#222222]">
              Service Price List
            </h2>
            <p className="text-sm text-[#666666]">
              Premium Beauty Services at Transparent Prices • All Rates in PKR
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPricingServices.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-[#F8DDE7] shadow-xs hover:shadow-lg hover:border-[#D94F83]/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#B83268] bg-[#F8DDE7] px-2.5 py-0.5 rounded-full">
                      {pkg.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D94F83]" />
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#222222]">
                    {pkg.name}
                  </h3>

                  <p className="text-xs text-[#666666] leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-4 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-gray-400">Starting from</span>
                    <span className="font-serif text-xl font-bold text-[#D94F83]">
                      {pkg.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(pkg.serviceId)}
                    className="px-4 py-2 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white text-xs font-medium transition cursor-pointer shadow-xs"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="px-7 py-3 rounded-full bg-white border border-[#F8DDE7] text-[#222222] hover:border-[#D94F83] hover:text-[#D94F83] text-sm font-medium shadow-xs transition cursor-pointer inline-flex items-center gap-2"
            >
              <span>View Full Service Price List</span>
              <ChevronRight className="w-4 h-4 text-[#D94F83]" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 7. PHOTO GALLERY SECTION */}
      {/* ==================================================== */}
      <section id="gallery-preview-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
              Our Visual Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222]">
              Beauty in Every Detail
            </h2>
            <p className="text-sm text-[#666666]">
              Explore Our Latest Beauty Transformations in Gulberg, Lahore
            </p>

            {/* Gallery filter chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
              {[
                { id: 'all', label: 'All' },
                { id: 'bridal', label: 'Bridal' },
                { id: 'hair', label: 'Hair' },
                { id: 'makeup', label: 'Makeup' },
                { id: 'skin', label: 'Skin' },
                { id: 'nails', label: 'Nails' },
                { id: 'salon', label: 'Salon' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                    activeGalleryTab === tab.id
                      ? 'bg-[#D94F83] text-white shadow-xs'
                      : 'bg-[#FFF7FA] text-[#666666] hover:bg-[#F8DDE7]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry / Grid gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(idx)}
                className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gray-100 group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Elegant overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[11px] uppercase tracking-wider text-[#F8DDE7] font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-200 line-clamp-2 mb-3">
                    {item.description}
                  </p>
                  <span className="text-xs text-[#F8DDE7] font-medium flex items-center gap-1">
                    <span>Click to view full image</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('gallery')}
              className="px-8 py-3.5 rounded-full bg-[#FFF7FA] border border-[#F8DDE7] hover:border-[#D94F83] text-[#222222] hover:text-[#D94F83] text-sm font-medium transition cursor-pointer"
            >
              Explore Full Photo Gallery
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 8. EXPERT ADVICE SECTION */}
      {/* ==================================================== */}
      <section id="expert-advice-preview-section" className="py-20 bg-[#FFF7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
                Authority & Professional Trust
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#222222]">
                Expert Advice
              </h2>
              <p className="text-sm text-[#666666]">
                Beauty Tips & Scientific Care Protocols From Our Professionals
              </p>
            </div>
            <button
              onClick={() => onNavigate('advice')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D94F83] hover:text-[#B83268] transition"
            >
              <span>View All Expert Guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERT_ADVICE_ARTICLES.slice(0, 3).map((article) => (
              <div
                key={article.id}
                onClick={() => onNavigate('advice')}
                className="bg-white rounded-3xl overflow-hidden border border-[#F8DDE7] shadow-xs hover:shadow-xl hover:border-[#D94F83]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#B83268] bg-[#F8DDE7] px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#222222] group-hover:text-[#D94F83] transition leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#666666] line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full object-cover ring-1 ring-[#F8DDE7]"
                    />
                    <div>
                      <span className="text-xs font-semibold text-[#222222] block">
                        {article.author.name}
                      </span>
                      <span className="text-[10px] text-gray-500 block">
                        {article.author.experience}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#D94F83] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Guide
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 9. BLOG / BEAUTY JOURNAL SECTION */}
      {/* ==================================================== */}
      <section id="blog-preview-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
              Editorial Beauty Journal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222]">
              Beauty Journal
            </h2>
            <p className="text-sm text-[#666666]">
              Latest Beauty Tips, Trends & Expert Advice for Modern Pakistani Women
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div
                key={post.id}
                onClick={() => onSelectBlog(post.slug)}
                className="bg-white rounded-3xl overflow-hidden border border-[#F8DDE7] shadow-xs hover:shadow-xl hover:border-[#D94F83]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-gray-500">
                      <span className="font-semibold text-[#B83268] uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#222222] group-hover:text-[#D94F83] transition leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#666666] line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="text-xs font-semibold text-[#D94F83] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('blog')}
              className="px-8 py-3.5 rounded-full bg-[#FFF7FA] border border-[#F8DDE7] hover:border-[#D94F83] text-[#222222] hover:text-[#D94F83] text-sm font-medium transition cursor-pointer"
            >
              Read All 12+ Beauty Journal Articles
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 10. CLIENT TESTIMONIALS SLIDER */}
      {/* ==================================================== */}
      <section id="testimonials-section" className="py-20 bg-[#FFF7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
              Client Love
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#222222]">
              What Our Clients Say
            </h2>
            <p className="text-sm text-[#666666]">
              Real stories from brides and guests across Lahore
            </p>
          </div>

          {/* Testimonial Active Slider Card */}
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#F8DDE7] shadow-lg relative">
            <div className="flex items-center gap-1 text-[#D94F83] mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D94F83]" />
              ))}
            </div>

            <p className="font-serif text-lg sm:text-xl text-[#222222] leading-relaxed italic mb-8">
              "{TESTIMONIALS_DATA[activeTestimonialIdx].review}"
            </p>

            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
              <div className="flex items-center gap-4">
                <img
                  src={TESTIMONIALS_DATA[activeTestimonialIdx].clientImage}
                  alt={TESTIMONIALS_DATA[activeTestimonialIdx].clientName}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#D94F83]"
                />
                <div>
                  <h4 className="font-serif font-bold text-base text-[#222222]">
                    {TESTIMONIALS_DATA[activeTestimonialIdx].clientName}
                  </h4>
                  <span className="text-xs text-gray-500 block">
                    {TESTIMONIALS_DATA[activeTestimonialIdx].location} • {TESTIMONIALS_DATA[activeTestimonialIdx].service}
                  </span>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActiveTestimonialIdx(
                      (activeTestimonialIdx - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
                    )
                  }
                  className="w-9 h-9 rounded-full border border-[#F8DDE7] hover:bg-[#F8DDE7] flex items-center justify-center text-[#222222] transition"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonialIdx((activeTestimonialIdx + 1) % TESTIMONIALS_DATA.length)
                  }
                  className="w-9 h-9 rounded-full border border-[#F8DDE7] hover:bg-[#F8DDE7] flex items-center justify-center text-[#222222] transition"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 11. LUXURY PINK CTA BANNER */}
      {/* ==================================================== */}
      <section
        id="cta-banner-section"
        className="relative py-20 bg-gradient-to-r from-[#D94F83] via-[#B83268] to-[#992454] text-white overflow-hidden shadow-xl"
      >
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80"
            alt="Salon Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#F8DDE7]">
            Begin Your Beauty Journey
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Ready to Feel Beautiful?
          </h2>

          <p className="text-sm sm:text-base text-[#F8DDE7] max-w-2xl mx-auto leading-relaxed">
            Book your appointment today and let our beauty experts create a look that's uniquely yours. Located at 161 M Gulberg III, Lahore.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 rounded-full bg-white text-[#B83268] hover:bg-[#FFF7FA] font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-black/20 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <a
              href={SALON_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-black/20 hover:scale-105 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 12. CONTACT QUICK SECTION */}
      {/* ==================================================== */}
      <section id="contact-quick-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Info & Map placeholder */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase block mb-1">
                  Visit Us in Gulberg
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#222222]">
                  Let's Create Your Perfect Look
                </h2>
                <p className="text-xs sm:text-sm text-[#666666] mt-2">
                  Our luxury salon is conveniently located in Gulberg III, Lahore, with private parking and dedicated concierge care.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#333333]">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FFF7FA] border border-[#F8DDE7]">
                  <MapPin className="w-5 h-5 text-[#D94F83] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#222222] block">Salon Address</span>
                    <span>{SALON_INFO.address}</span>
                    <span className="block text-[11px] text-[#666666]">{SALON_INFO.landmark}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFF7FA] border border-[#F8DDE7]">
                  <Phone className="w-5 h-5 text-[#D94F83] flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#222222] block">Direct Phone</span>
                    <a href={`tel:${SALON_INFO.phone}`} className="text-[#D94F83] font-semibold hover:underline">
                      {SALON_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFF7FA] border border-[#F8DDE7]">
                  <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#222222] block">WhatsApp Concierge</span>
                    <a
                      href={SALON_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-semibold hover:underline"
                    >
                      {SALON_INFO.whatsapp} (Instant Chat)
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Preview Card for Gulberg III Lahore */}
              <div className="rounded-2xl overflow-hidden border border-[#F8DDE7] shadow-xs relative aspect-[16/9] bg-[#F8DDE7]/40 flex items-center justify-center text-center p-6">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#D94F83] text-white mx-auto flex items-center justify-center shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-serif font-bold text-sm text-[#222222] block">
                    Gulberg III, Lahore, Pakistan
                  </span>
                  <p className="text-[11px] text-[#666666]">
                    Easily accessible from Main Boulevard & MM Alam Road
                  </p>
                  <a
                    href="https://maps.google.com/?q=Gulberg+III+Lahore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] font-semibold text-[#B83268] underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-[#FFF7FA] p-8 sm:p-10 rounded-3xl border border-[#F8DDE7] shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#222222] mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs text-[#666666] mb-6">
                Fill out the form below and our beauty coordinator will reach out to confirm availability.
              </p>

              {contactSent ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-[#F8DDE7] space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#F8DDE7] text-[#D94F83] mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#222222]">
                    Inquiry Sent Successfully!
                  </h4>
                  <p className="text-xs text-[#666666]">
                    Thank you! We will call or WhatsApp you shortly. You can also message us directly at {SALON_INFO.phoneFormatted}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Ayesha Malik"
                        className="w-full p-3 rounded-xl border border-[#F8DDE7] bg-white text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="e.g. 0303 6346909"
                        className="w-full p-3 rounded-xl border border-[#F8DDE7] bg-white text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="youremail@example.com"
                        className="w-full p-3 rounded-xl border border-[#F8DDE7] bg-white text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Select Service
                      </label>
                      <select
                        value={contactService}
                        onChange={(e) => setContactService(e.target.value)}
                        className="w-full p-3 rounded-xl border border-[#F8DDE7] bg-white text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                      >
                        <option value="Bridal Makeup">Bridal Makeup Couture</option>
                        <option value="Hair Styling & Color">Haircut & Balayage</option>
                        <option value="Deluxe Hydra Facial">Deluxe Hydra Facial</option>
                        <option value="Party Glam Makeup">Party & Event Glam</option>
                        <option value="Spa Mani & Pedi">Spa Manicure & Pedicure</option>
                        <option value="Keratin Smoothing">Keratin Smoothing Treatment</option>
                        <option value="Aromatherapy Massage">Aromatherapy Spa Massage</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={contactDate}
                      onChange={(e) => setContactDate(e.target.value)}
                      className="w-full p-3 rounded-xl border border-[#F8DDE7] bg-white text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      placeholder="Tell us about your event, preferred timing, or questions..."
                      className="w-full p-3 rounded-xl border border-[#F8DDE7] bg-white text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white font-medium text-xs tracking-wide shadow-md transition cursor-pointer"
                    >
                      Send Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenBooking()}
                      className="py-3.5 px-6 rounded-full bg-white border border-[#F8DDE7] text-[#222222] hover:text-[#D94F83] font-medium text-xs transition cursor-pointer"
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
