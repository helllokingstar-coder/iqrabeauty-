import React, { useState, useEffect } from 'react';
import { PageId, ServiceItem } from './types';
import { SERVICES_DATA, GALLERY_DATA, BLOG_POSTS } from './data/salonData';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { GalleryLightbox } from './components/GalleryLightbox';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ExpertAdvicePage } from './pages/ExpertAdvicePage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string>(BLOG_POSTS[0].slug);

  // Booking Modal
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);

  // Lightbox Modal
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Scroll to top on navigation change
  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setCurrentPage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBlog = (slug: string) => {
    setSelectedBlogSlug(slug);
    setCurrentPage('blog-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] flex flex-col font-sans selection:bg-[#F8DDE7] selection:text-[#B83268]">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectService={handleSelectService}
            onSelectBlog={handleSelectBlog}
            onOpenBooking={handleOpenBooking}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onSelectService={handleSelectService}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'service-detail' && (
          <ServiceDetailPage
            service={selectedService}
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking()}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'advice' && (
          <ExpertAdvicePage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={navigateTo}
            onSelectBlog={handleSelectBlog}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'blog-detail' && (
          <BlogDetailPage
            slug={selectedBlogSlug}
            onNavigate={navigateTo}
            onSelectBlog={handleSelectBlog}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Luxury Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={bookingServiceId}
      />

      {/* Photo Gallery Lightbox */}
      <GalleryLightbox
        isOpen={isLightboxOpen}
        items={GALLERY_DATA}
        currentIndex={lightboxIndex}
        onClose={() => setIsLightboxOpen(false)}
        onNavigateIndex={setLightboxIndex}
        onBookService={() => handleOpenBooking()}
      />

      {/* Floating WhatsApp and Back-To-Top Actions */}
      <FloatingActions />
    </div>
  );
}
