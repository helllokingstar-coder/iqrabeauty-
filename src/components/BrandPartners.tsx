import React from 'react';
import { SALON_INFO } from '../data/salonData';

export const BrandPartners: React.FC = () => {
  return (
    <section id="brand-partners-section" className="py-8 bg-white border-y border-[#F8DDE7]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#B83268] font-semibold">
            Formulated With World-Renowned Luxury Beauty Houses
          </span>
        </div>

        {/* Brand Logos Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 opacity-75 hover:opacity-100 transition-opacity">
          {SALON_INFO.brandPartners.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center px-3 py-1 group transition"
              title={brand.name}
            >
              <span className="font-serif tracking-widest text-xs sm:text-sm font-semibold uppercase text-[#333333] group-hover:text-[#D94F83] transition">
                {brand.logoText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
