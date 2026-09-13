import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { IqraSalonLogo } from './IqraSalonLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState<'privacy' | 'terms' | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="main-site-footer" className="bg-white text-[#222222] pt-16 pb-12 border-t border-[#F8DDE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-[#F8DDE7]">
            {/* Column 1: Brand & Identity */}
            <div className="space-y-5">
              <div className="flex items-center">
                <IqraSalonLogo className="h-16 sm:h-20 w-auto max-w-[280px] object-contain" />
              </div>

              <p className="text-sm text-[#555555] leading-relaxed">
                Lahore’s premier luxury beauty sanctuary in Gulberg III. Delivering bespoke bridal couture makeup, artistic balayage, medical-grade hydra facials, and tranquil wellness rituals.
              </p>

              {/* Social Icons */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-black font-bold block mb-3">
                  Follow Our Transformations
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#FFF0F5] border border-[#F8DDE7] flex items-center justify-center text-[#D94F83] hover:bg-[#D94F83] hover:text-white hover:border-[#D94F83] shadow-xs transition"
                    aria-label="Iqra Beauty Salon Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#FFF0F5] border border-[#F8DDE7] flex items-center justify-center text-[#D94F83] hover:bg-[#D94F83] hover:text-white hover:border-[#D94F83] shadow-xs transition"
                    aria-label="Iqra Beauty Salon Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  {/* TikTok custom icon */}
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#FFF0F5] border border-[#F8DDE7] flex items-center justify-center text-[#D94F83] hover:bg-[#D94F83] hover:text-white hover:border-[#D94F83] shadow-xs transition"
                    aria-label="Iqra Beauty Salon TikTok"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#FFF0F5] border border-[#F8DDE7] flex items-center justify-center text-[#D94F83] hover:bg-[#D94F83] hover:text-white hover:border-[#D94F83] shadow-xs transition"
                    aria-label="Iqra Beauty Salon YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-bold text-black mb-5 relative inline-block">
                Quick Links
                <span className="block w-8 h-0.5 bg-[#D94F83] mt-1 rounded-full" />
              </h4>
              <ul className="space-y-3 text-sm text-[#555555]">
                <li>
                  <button
                    onClick={() => handleNav('home')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('about')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    Signature Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('gallery')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    Photo Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('advice')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    Expert Advice
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('blog')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    Beauty Journal (Blog)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('contact')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    Contact Us & Location
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="font-serif text-lg font-bold text-black mb-5 relative inline-block">
                Services
                <span className="block w-8 h-0.5 bg-[#D94F83] mt-1 rounded-full" />
              </h4>
              <ul className="space-y-3 text-sm text-[#555555]">
                <li>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    Hair Styling & Balayage
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    Bridal Couture Makeover
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    Party & Event Glam
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    Clinical Hydra Facial & Peels
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    Gel Extensions & Nail Art
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#D94F83] transition hover:translate-x-1 inline-block duration-150"
                  >
                    Aromatherapy Spa & Massage
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Newsletter */}
            <div className="space-y-5">
              <h4 className="font-serif text-lg font-bold text-black mb-4 relative inline-block">
                Gulberg Salon Contact
                <span className="block w-8 h-0.5 bg-[#D94F83] mt-1 rounded-full" />
              </h4>

              <div className="space-y-3 text-sm text-[#555555]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D94F83] mt-1 flex-shrink-0" />
                  <span>
                    161 M Gulberg III, Lahore, Pakistan
                    <span className="block text-xs text-[#777777]">Near Main Boulevard Gulberg</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D94F83] flex-shrink-0" />
                  <a
                    href={`tel:${SALON_INFO.phone}`}
                    className="hover:text-[#D94F83] text-[#222222] transition font-medium"
                  >
                    {SALON_INFO.phoneFormatted}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#D94F83] flex-shrink-0" />
                  <a
                    href={SALON_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D94F83] transition font-medium text-[#222222] flex items-center gap-1.5"
                  >
                    <span>WhatsApp: {SALON_INFO.whatsapp}</span>
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D94F83] flex-shrink-0" />
                  <span className="text-xs text-[#555555]">Mon - Sat: 10:30 AM – 8:30 PM</span>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-black font-bold block mb-2">
                  Join The Iqra Beauty Circle
                </span>
                <p className="text-xs text-[#666666] mb-3">
                  Receive private bridal previews, seasonal offers, and beauty masterclass invites.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-[#FFF7FA] border border-[#F8DDE7] rounded-xl px-3.5 py-2 text-xs text-[#222222] placeholder-gray-400 focus:outline-none focus:border-[#D94F83] focus:ring-1 focus:ring-[#D94F83] w-full"
                  />
                  <button
                    type="submit"
                    className="bg-[#D94F83] hover:bg-[#B83268] text-white px-3.5 py-2 rounded-xl text-xs font-medium flex items-center justify-center transition shadow-xs"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                </form>
                {subscribed && (
                  <div className="flex items-center gap-1.5 text-xs text-[#B83268] mt-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                    Thank you! You are on our VIP list.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
            <div>
              © 2026 Iqra Beauty Salon Lahore. All Rights Reserved.
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setShowPolicyModal('privacy')}
                className="hover:text-[#D94F83] transition underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setShowPolicyModal('terms')}
                className="hover:text-[#D94F83] transition underline-offset-4 hover:underline"
              >
                Terms & Conditions
              </button>
              <button
                onClick={onOpenBooking}
                className="text-[#D94F83] hover:text-[#B83268] font-semibold"
              >
                Book Your Visit
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Simple Policy Modal */}
      {showPolicyModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowPolicyModal(null)}
        >
          <div
            className="bg-white text-[#222222] max-w-lg w-full rounded-2xl p-6 max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="font-serif text-xl font-bold text-[#B83268]">
                {showPolicyModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                onClick={() => setShowPolicyModal(null)}
                className="text-gray-400 hover:text-gray-600 font-bold text-lg"
              >
                ✕
              </button>
            </div>
            <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
              {showPolicyModal === 'privacy' ? (
                <>
                  <p>
                    At Iqra Beauty Salon (161 M Gulberg III, Lahore), we respect the privacy of our valued clients.
                  </p>
                  <p>
                    <strong>Information Collection:</strong> Contact details (such as name, phone number, and booking dates) collected via our appointment form are used exclusively to coordinate your salon visits, bridal consultations, and inquiries.
                  </p>
                  <p>
                    <strong>Data Protection:</strong> We do not sell, rent, or distribute personal data to third parties. We treat your personal beauty records and bridal consultations with strict confidentiality.
                  </p>
                  <p>
                    If you have questions regarding your information, please message our concierge at 03036346909.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to Iqra Beauty Salon. By scheduling an appointment with us in Gulberg III, Lahore, you agree to our service guidelines.
                  </p>
                  <p>
                    <strong>Appointments & Punctuality:</strong> We kindly request clients arrive 10 minutes prior to scheduled session times. For major bridal bookings, advance reservation deposits are required.
                  </p>
                  <p>
                    <strong>Cancellation Policy:</strong> Please notify our concierge at least 24 hours in advance to reschedule regular services without penalty.
                  </p>
                  <p>
                    <strong>Hygiene & Safety:</strong> We maintain hospital-grade tool sterilization, disposable capes, and sanitized stations for each client.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 pt-3 border-t border-gray-100 text-right">
              <button
                onClick={() => setShowPolicyModal(null)}
                className="px-5 py-2 bg-[#D94F83] text-white rounded-xl text-sm font-medium hover:bg-[#B83268] transition"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
