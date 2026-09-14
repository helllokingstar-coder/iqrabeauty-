import React from 'react';
import {
  Sparkles,
  Award,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  Star,
  Users,
} from 'lucide-react';
import { PageId } from '../types';
import { SALON_INFO, SALON_TEAM, TESTIMONIALS_DATA } from '../data/salonData';
import { BrandPartners } from '../components/BrandPartners';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-0">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-[#FFF7FA] via-white to-[#FFF7FA] py-16 lg:py-20 border-b border-[#F8DDE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase bg-[#F8DDE7] px-3.5 py-1 rounded-full">
            Our Heritage & Passion
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#222222]">
            Where Beauty Meets Confidence
          </h1>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mx-auto leading-relaxed">
            Founded with a vision to redefine luxury beauty culture in Lahore. Step into our Gulberg III haven and discover a realm where artistry, science, and care unite.
          </p>

          {/* Breadcrumbs */}
          <div className="pt-2 text-xs text-gray-400 flex items-center justify-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#D94F83]">
              Home
            </button>
            <span>/</span>
            <span className="text-[#D94F83] font-medium">About Us</span>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Visuals */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF7FA] aspect-[4/3]">
                <img
                  src="/color_salon_hair.jpg"
                  alt="Iqra Beauty Salon Story Lahore"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#D94F83] text-white p-6 rounded-3xl shadow-xl hidden sm:block max-w-xs">
                <span className="font-serif text-3xl font-bold block">10+ Years</span>
                <span className="text-xs text-[#F8DDE7]">
                  Setting the standard for luxury beauty & bridal mastery in Lahore
                </span>
              </div>
            </div>

            {/* Story Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#222222]">
                Crafting Timeless Elegance in Gulberg III
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Iqra Beauty Salon was established at 161 M Gulberg III with a singular purpose: to bring world-class beauty craftsmanship to Pakistan without compromise. We recognized that the modern Pakistani woman deserves more than just a quick salon visit — she deserves a peaceful retreat, bespoke attention, and dermatologically sound procedures.
              </p>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Over the past decade, we have had the privilege of styling thousands of unforgettable brides, creating viral balayage transformations, and rejuvenating tired complexions through non-invasive medical facials.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-[#222222] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#D94F83]" />
                  <span>Cruelty-Free International Brands</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#222222] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#D94F83]" />
                  <span>Private VIP Dressing Suites</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#222222] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#D94F83]" />
                  <span>Certified Aestheticians & Stylists</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy, Mission & Vision */}
      <section className="py-20 bg-[#FFF7FA] border-y border-[#F8DDE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#F8DDE7] shadow-sm space-y-4 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-[#F8DDE7] text-[#D94F83] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#222222]">Our Philosophy</h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                We celebrate individuality. We never apply a copy-paste formula to makeup or hair; rather, we highlight your innate features so you look and feel like the most radiant version of yourself.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#F8DDE7] shadow-sm space-y-4 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-[#F8DDE7] text-[#D94F83] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#222222]">Our Mission</h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                To deliver uncompromising luxury, uncompromising hygiene, and artistic perfection for hair, skin, bridal couture, and wellness in a relaxing, women-first environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#F8DDE7] shadow-sm space-y-4 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-2xl bg-[#F8DDE7] text-[#D94F83] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#222222]">Our Vision</h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                To stand as Pakistan's most revered beauty studio, championing advanced beauty education, sustainable product formulations, and elevated salon standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <BrandPartners />

      {/* Meet Our Expert Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
              The Master Artists
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#222222]">
              Meet Our Expert Team
            </h2>
            <p className="text-sm text-[#666666]">
              Trained internationally and dedicated to tailoring every service to your style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SALON_TEAM.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-[#F8DDE7] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B83268]">
                    {member.experience}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#222222] group-hover:text-[#D94F83] transition">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-gray-700">{member.role}</p>
                  <p className="text-xs text-gray-500 leading-relaxed pt-2 border-t border-gray-100">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Salon Experience */}
      <section className="py-20 bg-[#FFF7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
                Sanctuary in Gulberg III
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#222222]">
                The Iqra Beauty Experience
              </h2>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                From the moment you walk through our doors, you are treated to signature Pakistani warmth and international luxury. Relax in plush blush velvet seating, sip artisanal herbal rose tea or cappuccino, and unwind in private treatment chambers acoustically insulated for stillness.
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: 'Medical-Grade Sterilization',
                    desc: 'All metal instruments undergo hospital-level autoclave sterilization and are unsealed in front of you.',
                  },
                  {
                    title: 'Private Bridal Suites',
                    desc: 'Spacious suites designed with professional lighting, dedicated changing mirrors, and private vanity stations.',
                  },
                  {
                    title: 'Bespoke Consultations',
                    desc: 'We never rush. Every session begins with a diagnostic check to ensure safety, tone match, and client delight.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-[#F8DDE7] space-y-1">
                    <h4 className="font-serif font-bold text-sm text-[#222222]">{item.title}</h4>
                    <p className="text-xs text-[#666666] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
                    alt="Facial Lounge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80"
                    alt="Nail Suite"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                    alt="Hair Station"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80"
                    alt="Spa Lounge"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#D94F83] to-[#B83268] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Experience the Luxury Difference in Lahore
          </h2>
          <p className="text-sm text-[#F8DDE7] max-w-xl mx-auto">
            Book your consultation or treatment today at 161 M Gulberg III, Lahore.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-white text-[#B83268] hover:bg-[#FFF7FA] font-bold text-sm shadow-md transition"
            >
              Book Appointment
            </button>
            <a
              href={SALON_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20bd5a] transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
