import React, { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  Phone,
  MessageCircle,
  HelpCircle,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { PageId, ServiceItem } from '../types';
import { SALON_INFO } from '../data/salonData';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF7FA] via-white to-[#FFF7FA] py-16 lg:py-20 border-b border-[#F8DDE7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Back button & Category */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#D94F83] font-medium transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Services Menu</span>
            </button>
            <span className="text-xs uppercase font-bold tracking-wider text-[#B83268] bg-[#F8DDE7] px-3 py-1 rounded-full">
              {service.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222]">
            {service.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
            {service.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-gray-600">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D94F83]" />
              <span className="font-semibold">{service.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D94F83]" />
              <span className="font-serif text-xl font-bold text-[#B83268]">
                {service.price}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D94F83]" />
              <span>161 M Gulberg III, Lahore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-gray-100 shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Comprehensive Description */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#222222]">
                  Service Overview
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Conducted exclusively in our tranquil private stations by senior specialists certified in international cosmetic techniques. We prioritize hair, skin, and nail integrity using dermatologist-tested formulations.
                </p>
              </div>

              {/* What's Included */}
              <div className="p-8 rounded-3xl bg-[#FFF7FA] border border-[#F8DDE7] space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#222222]">
                  What's Included in This Treatment
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {(service.features || service.benefits || []).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D94F83] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-800 font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The 4-Step Iqra Beauty Protocol */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-[#222222]">
                  The Iqra Beauty Protocol
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl border border-[#F8DDE7] bg-white space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#D94F83] text-white text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#222222]">
                      Diagnostic Consultation
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      We evaluate your hair health, skin undertones, face shape, and desired aesthetic goals prior to starting.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-[#F8DDE7] bg-white space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#D94F83] text-white text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#222222]">
                      Custom Preparation
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Formulation of custom color blends, serums, or hydrating masks tailored strictly to your individual profile.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-[#F8DDE7] bg-white space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#D94F83] text-white text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#222222]">
                      Artistic Execution
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Precision application using international equipment and sterile techniques for comfortable, seamless results.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-[#F8DDE7] bg-white space-y-2">
                    <span className="w-7 h-7 rounded-full bg-[#D94F83] text-white text-xs font-bold flex items-center justify-center">
                      4
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#222222]">
                      Aftercare Guidance
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Personalized maintenance guidance and home regimen suggestions to prolong your luminous salon finish.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service FAQ */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <h3 className="font-serif text-2xl font-bold text-[#222222] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#D94F83]" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#FFF7FA] border border-[#F8DDE7] space-y-1">
                    <h5 className="font-semibold text-xs sm:text-sm text-gray-900">
                      Do I need to book in advance?
                    </h5>
                    <p className="text-xs text-gray-600">
                      We strongly advise booking 24–48 hours in advance for weekdays, and 1–2 weeks ahead for weekends and wedding season bridal slots.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFF7FA] border border-[#F8DDE7] space-y-1">
                    <h5 className="font-semibold text-xs sm:text-sm text-gray-900">
                      Are products safe for sensitive skin or pregnant clients?
                    </h5>
                    <p className="text-xs text-gray-600">
                      Yes. Please notify your aesthetician or stylist during consultation so we can use sulfate-free, ammonia-free, and pregnancy-safe formulations.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFF7FA] border border-[#F8DDE7] space-y-1">
                    <h5 className="font-semibold text-xs sm:text-sm text-gray-900">
                      Where is Iqra Beauty Salon located?
                    </h5>
                    <p className="text-xs text-gray-600">
                      We are located at 161 M Gulberg III, Lahore, with secure client parking and valet assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sticky Booking Box (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="bg-[#FFF7FA] border-2 border-[#D94F83]/30 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6">
                <div className="space-y-2 pb-4 border-b border-[#F8DDE7]">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#B83268]">
                    Reserve Appointment
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#222222]">
                    {service.title}
                  </h4>
                  <div className="flex items-baseline justify-between pt-1">
                    <span className="font-serif text-2xl font-bold text-[#D94F83]">
                      {service.price}
                    </span>
                    <span className="text-xs text-gray-500">{service.duration}</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#D94F83]" />
                    <span>Carried out by Senior Specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D94F83]" />
                    <span>100% Sterilized Instruments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D94F83]" />
                    <span>Free Date Rescheduling</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="w-full py-3.5 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white text-xs font-bold tracking-wide shadow-md transition flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book This Service Now</span>
                  </button>

                  <a
                    href={`https://wa.me/923036346909?text=${encodeURIComponent(
                      `Hello Iqra Beauty Salon! I am inquiring about booking "${service.title}" (${service.price}). Please share available slots.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold tracking-wide shadow-xs transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

                <p className="text-[11px] text-center text-gray-500">
                  Or call directly: <a href={`tel:${SALON_INFO.phone}`} className="text-[#D94F83] font-semibold">{SALON_INFO.phoneFormatted}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
