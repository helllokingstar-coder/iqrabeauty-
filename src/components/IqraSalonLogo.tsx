import React, { useState, useEffect } from 'react';
import officialLogo from '../assets/images/iqra_salon_logo.png';
import officialEmblem from '../assets/images/iqra_salon_emblem.png';

interface IqraSalonLogoProps {
  className?: string;
  variant?: 'full' | 'emblem';
  alt?: string;
}

export const IqraSalonLogo: React.FC<IqraSalonLogoProps> = ({
  className = 'h-11 sm:h-13 w-auto object-contain',
  variant = 'full',
  alt = 'Iqra Beauty Salon',
}) => {
  const [customLogo, setCustomLogo] = useState<string | null>(null);

  useEffect(() => {
    // Check if user uploaded their exact file in-session
    const saved = localStorage.getItem('iqra_custom_logo');
    if (saved) {
      setCustomLogo(saved);
    }

    const handleLogoUpdate = (e: CustomEvent<{ logoUrl: string }>) => {
      setCustomLogo(e.detail?.logoUrl || null);
    };

    window.addEventListener('iqra_logo_updated', handleLogoUpdate as EventListener);
    return () => {
      window.removeEventListener('iqra_logo_updated', handleLogoUpdate as EventListener);
    };
  }, []);

  const imageSrc = customLogo || (variant === 'emblem' ? officialEmblem : officialLogo);

  return (
    <img
      src={imageSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      className={`inline-block transition-transform duration-200 select-none ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};
