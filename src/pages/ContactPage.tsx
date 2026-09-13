import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Bridal Consultation',
    date: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent, viaWhatsApp = false) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }

    if (viaWhatsApp) {
      const text = `*New Contact Inquiry - Iqra Beauty Salon Gulberg Lahore*\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        (formData.email ? `Email: ${formData.email}\n` : '') +
        `Service of Interest: ${formData.service}\n` +
        (formData.date ? `Preferred Date: ${formData.date}\n` : '') +
        (formData.message ? `Message: ${formData.message}` : '');

      const url = `https://wa.me/923036346909?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Bridal Consultation',
        date: '',
        message: '',
      });
    }, 6000);
  };

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF7FA] via-white to-[#FFF7FA] py-16 lg:py-20 border-b border-[#F8DDE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase bg-[#F8DDE7] px-3.5 py-1 rounded-full">
            Gulberg III Sanctuary
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#222222]">
            Contact & Location
          </h1>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mx-auto leading-relaxed">
            We look forward to welcoming you to our luxury salon in Lahore. Whether you require bridal consultations, hair color diagnostics, or skin therapy, we are here to assist.
          </p>

          {/* Breadcrumbs */}
          <div className="pt-2 text-xs text-gray-400 flex items-center justify-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#D94F83]">
              Home
            </button>
            <span>/</span>
            <span className="text-[#D94F83] font-medium">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Contact Details & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
                  Direct Salon Access
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#222222]">
                  Get in Touch
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Our concierge desk is open 6 days a week to help answer your questions and arrange appointments.
                </p>
              </div>

              {/* Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="p-5 rounded-3xl bg-[#FFF7FA] border border-[#F8DDE7] flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#F8DDE7] flex items-center justify-center text-[#D94F83] flex-shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-serif font-bold text-base text-[#222222]">
                      Salon Address
                    </h4>
                    <p className="text-gray-700 font-medium">
                      161 M Gulberg III, Lahore, Pakistan
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Off Main Boulevard & MM Alam Commercial Hub
                    </p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="p-5 rounded-3xl bg-[#FFF7FA] border border-[#F8DDE7] flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#F8DDE7] flex items-center justify-center text-[#D94F83] flex-shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-serif font-bold text-base text-[#222222]">
                      Telephone Concierge
                    </h4>
                    <a
                      href={`tel:${SALON_INFO.phone}`}
                      className="font-bold text-[#D94F83] hover:underline block text-sm sm:text-base"
                    >
                      {SALON_INFO.phoneFormatted}
                    </a>
                    <p className="text-[11px] text-gray-500">
                      Call for instant booking confirmations
                    </p>
                  </div>
                </div>

                {/* WhatsApp Chat */}
                <div className="p-5 rounded-3xl bg-[#FFF7FA] border border-[#F8DDE7] flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#F8DDE7] flex items-center justify-center text-[#25D366] flex-shrink-0 shadow-xs">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-serif font-bold text-base text-[#222222]">
                      WhatsApp Direct
                    </h4>
                    <a
                      href={SALON_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#25D366] hover:underline block text-sm sm:text-base"
                    >
                      {SALON_INFO.whatsapp}
                    </a>
                    <p className="text-[11px] text-gray-500">
                      Fastest response for bridal slots & pricing
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="p-5 rounded-3xl bg-[#FFF7FA] border border-[#F8DDE7] flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#F8DDE7] flex items-center justify-center text-[#D94F83] flex-shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-serif font-bold text-base text-[#222222]">
                      Opening Hours
                    </h4>
                    <div className="text-gray-700 text-xs space-y-0.5">
                      <div className="flex justify-between gap-4">
                        <span>Monday – Saturday:</span>
                        <span className="font-semibold text-gray-900">10:30 AM – 8:30 PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Sunday:</span>
                        <span className="font-semibold text-[#B83268]">
                          Bridal bookings by appointment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#FFF7FA] p-8 sm:p-12 rounded-3xl border border-[#F8DDE7] shadow-sm">
              <div className="space-y-2 mb-6">
                <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
                  Personalized Attention
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#222222]">
                  Send an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Please provide your details below and our team will get back to you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-[#F8DDE7] space-y-4 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-[#F8DDE7] text-[#D94F83] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#222222]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you, {formData.name}. Our salon coordinator will contact you via {formData.phone} shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Fatima Zahra"
                        className="w-full p-3 rounded-xl border border-[#F8DDE7] bg-white text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Mobile / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0303 6346909"
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="youremail@domain.com"
                        className="w-full p-3 rounded-xl border border-[#F8DDE7] bg-white text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#F8DDE7] bg-white text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                      >
                        <option value="Bridal Consultation">Bridal Couture Consultation</option>
                        <option value="Hair Styling & Balayage">Hair Styling & Balayage</option>
                        <option value="Party Glam Makeup">Party & Event Makeup</option>
                        <option value="Clinical Hydra Facial">Deluxe Hydra Facial</option>
                        <option value="Spa Mani & Pedi">Spa Manicure & Pedicure</option>
                        <option value="General Inquiry">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#F8DDE7] bg-white text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Message or Questions
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know your requirements or preferred time..."
                      className="w-full p-3 rounded-xl border border-[#F8DDE7] bg-white text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white font-medium text-xs tracking-wide shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry Online</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleSubmit(e, true)}
                      className="py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs tracking-wide shadow-xs transition cursor-pointer flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to WhatsApp (03036346909)</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map & Directions Section */}
      <section className="py-16 bg-[#FFF7FA] border-t border-[#F8DDE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
              Easy Navigation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#222222]">
              Find Us in Gulberg III, Lahore
            </h3>
            <p className="text-xs text-gray-600">
              161 M Gulberg III, Lahore • Dedicated Valet Parking & Female Guard Protection
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-[#F8DDE7] shadow-lg bg-white relative aspect-[16/7] min-h-[360px] flex items-center justify-center">
            {/* Embedded Google Maps iFrame */}
            <iframe
              title="Iqra Beauty Salon Location Gulberg III Lahore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.353381665427!2d74.3400581458245!3d31.50798774780642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a55555555%3A0x6b4458319fcf4cb3!2sGulberg%20III%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />

            {/* Floating Location Overlay Badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-[#F8DDE7] max-w-xs pointer-events-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D94F83] text-white flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#222222]">
                    Iqra Beauty Salon
                  </h4>
                  <p className="text-[11px] text-gray-600">
                    161 M Gulberg III, Lahore
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-[#25D366] font-semibold">● Open Now</span>
                <a
                  href="https://maps.google.com/?q=161+M+Gulberg+III+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D94F83] font-semibold hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
