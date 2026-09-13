import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/923036346909?text=${encodeURIComponent(
    'Hello Iqra Beauty Salon Lahore! I would like to inquire about booking an appointment / consultation.'
  )}`;

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 rounded-full bg-[#D94F83] text-white shadow-lg shadow-[#D94F83]/30 hover:bg-[#B83268] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group focus:outline-none"
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* WhatsApp Button with Tooltip and Pulse Animation */}
      <div className="relative pointer-events-auto flex items-center group">
        {/* Tooltip on hover/touch */}
        <div
          id="whatsapp-tooltip"
          className={`absolute right-16 whitespace-nowrap bg-white text-[#222222] text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg border border-[#F8DDE7] transition-all duration-300 flex items-center gap-1.5 ${
            showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span>Chat with us on WhatsApp</span>
        </div>

        {/* Floating Green WhatsApp Button */}
        <a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none"
          aria-label="Chat with Iqra Beauty Salon on WhatsApp"
        >
          {/* Subtle Outer Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
          
          {/* Official WhatsApp Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-white relative z-10 transition-transform duration-300 drop-shadow-sm"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.2.3-.778.98-1.004 1.18-.226.2-.452.226-.753.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.636-.929-2.242-.244-.591-.492-.511-.677-.52l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.123 3.242 5.143 4.546.718.311 1.279.497 1.716.636.721.23 1.377.197 1.896.12.577-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.076-.126-.277-.201-.578-.351zM12.004 21.84c-1.815 0-3.528-.488-5.01-1.339l-.359-.203-3.725.977.994-3.631-.225-.358a9.816 9.816 0 0 1-1.507-5.286c0-5.424 4.412-9.836 9.836-9.836 2.628 0 5.099 1.024 6.957 2.883a9.78 9.78 0 0 1 2.883 6.957c0 5.424-4.412 9.836-9.845 9.836zm8.384-16.79C18.15 2.812 15.19 1.75 12.004 1.75c-5.972 0-10.832 4.86-10.832 10.832 0 1.908.497 3.769 1.442 5.407L1 23l5.176-1.358a10.772 10.772 0 0 0 4.828 1.139h.004c5.972 0 10.832-4.86 10.832-10.832 0-2.894-1.126-5.615-3.452-6.899z" />
          </svg>
        </a>
      </div>
    </aside>
  );
};
