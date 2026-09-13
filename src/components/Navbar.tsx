import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { IqraSalonLogo } from './IqraSalonLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'advice', label: 'Expert Advice' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Sticky Navbar */}
      <header
        id="main-navbar-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F8DDE7] py-3'
            : 'bg-white border-b border-[#F8DDE7]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Left */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group focus:outline-none flex-shrink-0 transition-opacity hover:opacity-95 py-0.5"
            aria-label="Iqra Beauty Salon Home"
          >
            <IqraSalonLogo className="h-11 sm:h-13 md:h-14 lg:h-15 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] object-contain" />
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-sm tracking-wide transition-colors duration-200 py-1 font-medium ${
                    isActive
                      ? 'text-[#D94F83] font-semibold'
                      : 'text-[#444444] hover:text-[#D94F83]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D94F83] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA & Phone Right */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              id="nav-phone-link"
              href={`tel:${SALON_INFO.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-[#222222] hover:text-[#D94F83] transition px-3 py-1.5 rounded-full hover:bg-[#F8DDE7]/50"
              title="Call Iqra Beauty Salon Lahore"
            >
              <div className="w-8 h-8 rounded-full bg-[#FFF7FA] border border-[#F8DDE7] flex items-center justify-center text-[#D94F83]">
                <Phone className="w-4 h-4" />
              </div>
              <span className="tracking-wide font-medium">{SALON_INFO.phoneFormatted}</span>
            </a>

            <button
              id="nav-book-appointment-btn"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white text-sm font-medium tracking-wide shadow-md shadow-[#D94F83]/25 hover:shadow-lg hover:shadow-[#D94F83]/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Right Controls: Book Icon & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-quick-book-btn"
              onClick={() => onOpenBooking()}
              className="p-2 rounded-full bg-[#D94F83] text-white text-xs font-medium flex items-center gap-1.5 px-3 shadow-sm"
              aria-label="Book Appointment"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden xs:inline text-xs">Book</span>
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#222222] hover:bg-[#F8DDE7] focus:outline-none transition"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D94F83]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 top-[65px] z-50 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm ml-auto h-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F8DDE7]">
                <div className="flex items-center">
                  <IqraSalonLogo className="h-10 w-auto max-w-[180px]" />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-[#F8DDE7] text-[#666666]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left text-base transition-colors ${
                        isActive
                          ? 'bg-[#F8DDE7] text-[#B83268] font-semibold'
                          : 'text-[#222222] hover:bg-[#FFF7FA]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-[#D94F83]" />}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer info & CTA */}
            <div className="mt-8 pt-6 border-t border-[#F8DDE7] space-y-4">
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF7FA] text-[#222222] hover:bg-[#F8DDE7] transition text-sm font-medium"
              >
                <div className="w-9 h-9 rounded-full bg-[#F8DDE7] flex items-center justify-center text-[#D94F83]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-[#666666]">Call Salon Concierge</span>
                  <span className="font-semibold text-sm text-[#222222]">{SALON_INFO.phoneFormatted}</span>
                </div>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#D94F83] hover:bg-[#B83268] text-white font-medium text-center shadow-lg shadow-[#D94F83]/30 transition"
              >
                Book Appointment Online
              </button>

              <div className="text-center text-xs text-[#666666] pt-1">
                161 M Gulberg III, Lahore • Open Today until 8:30 PM
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
