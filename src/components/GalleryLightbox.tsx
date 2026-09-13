import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigateIndex: (index: number) => void;
  onBookService?: (serviceName?: string) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigateIndex,
  onBookService,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigateIndex((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigateIndex((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigateIndex]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigateIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigateIndex((currentIndex + 1) % items.length);
  };

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/20"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        id="lightbox-prev-btn"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition border border-white/20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        id="lightbox-next-btn"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition border border-white/20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Lightbox Content Container */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center bg-[#181315] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[68vh] flex items-center justify-center bg-black/40 overflow-hidden">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[68vh] w-auto max-w-full object-contain select-none"
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="w-full p-5 sm:p-6 bg-[#1C1719] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#D94F83]/20 border border-[#D94F83]/40 text-[#F8DDE7] text-[11px] font-medium uppercase tracking-wider">
                {currentItem.category}
              </span>
              {currentItem.stylist && (
                <span className="text-xs text-gray-400">
                  Artist: <strong className="text-gray-200">{currentItem.stylist}</strong>
                </span>
              )}
            </div>
            <h4 className="font-serif text-lg sm:text-xl font-medium text-white">
              {currentItem.title}
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              {currentItem.description}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs text-gray-400 hidden sm:inline">
              {currentIndex + 1} / {items.length}
            </span>
            {onBookService && (
              <button
                onClick={() => {
                  onClose();
                  onBookService(currentItem.title);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white text-xs font-medium flex items-center justify-center gap-1.5 shadow-md transition whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book This Look</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
