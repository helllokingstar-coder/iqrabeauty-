import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Scissors,
} from 'lucide-react';
import { SERVICES_DATA, SALON_INFO, SALON_TEAM } from '../data/salonData';
import { IqraSalonLogo } from './IqraSalonLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || SERVICES_DATA[0].id
  );
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('02:00 PM');
  const [selectedStylist, setSelectedStylist] = useState<string>('Any Available Master Artist');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Set default date to tomorrow in YYYY-MM-DD
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setSelectedDate(dateStr);
  }, []);

  // Update selected service if preselectedServiceId changes
  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServiceId(preselectedServiceId);
      const svc = SERVICES_DATA.find((s) => s.id === preselectedServiceId);
      if (svc) {
        setSelectedCategory(svc.category);
      }
    }
  }, [preselectedServiceId, isOpen]);

  if (!isOpen) return null;

  const currentService =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
    '07:30 PM',
  ];

  const handleSubmit = (e: React.FormEvent, viaWhatsApp = false) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) {
      alert('Please provide your name and phone number so our salon concierge can reach you.');
      return;
    }

    const ref = `IBS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);

    if (viaWhatsApp) {
      const waMessage = `*New Booking Request - Iqra Beauty Salon Gulberg Lahore*\n` +
        `Ref: #${ref}\n` +
        `Service: ${currentService.title} (${currentService.price})\n` +
        `Date: ${selectedDate}\n` +
        `Time: ${selectedTime}\n` +
        `Preferred Stylist: ${selectedStylist}\n` +
        `Client Name: ${clientName}\n` +
        `Phone: ${clientPhone}\n` +
        (clientEmail ? `Email: ${clientEmail}\n` : '') +
        (notes ? `Special Notes: ${notes}\n` : '');

      const url = `https://wa.me/923036346909?text=${encodeURIComponent(waMessage)}`;
      window.open(url, '_blank');
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-card"
        className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-[#F8DDE7] my-8 text-[#222222] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FFF7FA] via-white to-[#F8DDE7]/40 p-6 border-b border-[#F8DDE7] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#FFF0F5] border border-[#F8DDE7] flex items-center justify-center p-1 shadow-xs">
              <IqraSalonLogo variant="emblem" className="w-9 h-9 object-contain" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#222222]">
                Reserve Your Appointment
              </h3>
              <p className="text-xs text-[#666666]">
                161 M Gulberg III, Lahore • Concierge: {SALON_INFO.phoneFormatted}
              </p>
            </div>
          </div>
          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-[#F8DDE7] text-gray-400 hover:text-[#D94F83] hover:border-[#D94F83] flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body or Success Confirmation */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#F8DDE7] text-[#D94F83] mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase">
                Reservation Request Received
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#222222]">
                We Look Forward to Welcoming You!
              </h4>
              <p className="text-sm text-[#666666] max-w-md mx-auto">
                Thank you, <strong className="text-[#222222]">{clientName}</strong>. Our salon concierge will call/WhatsApp you at <strong className="text-[#222222]">{clientPhone}</strong> shortly to confirm your reservation slot.
              </p>
            </div>

            {/* Booking Summary Ticket */}
            <div className="bg-[#FFF7FA] border border-[#F8DDE7] rounded-2xl p-5 text-left max-w-md mx-auto text-xs space-y-2.5">
              <div className="flex justify-between pb-2 border-b border-[#F8DDE7]">
                <span className="text-gray-500">Booking Reference:</span>
                <span className="font-mono font-bold text-[#D94F83]">#{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Service:</span>
                <span className="font-semibold text-gray-800">{currentService.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Price & Duration:</span>
                <span className="font-semibold text-[#B83268]">
                  {currentService.price} • {currentService.duration}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date & Time:</span>
                <span className="font-semibold text-gray-800">
                  {selectedDate} at {selectedTime}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Stylist:</span>
                <span className="font-semibold text-gray-800">{selectedStylist}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-[#F8DDE7]">
                <span className="text-gray-500">Location:</span>
                <span className="font-medium text-gray-700">161 M Gulberg III, Lahore</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/923036346909?text=${encodeURIComponent(
                  `Hi Iqra Beauty Salon, I just booked #${bookingRef} for ${currentService.title} on ${selectedDate}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Follow up on WhatsApp</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-[#222222] font-medium text-xs transition"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={(e) => handleSubmit(e, false)} className="p-6 space-y-6">
            {/* Step 1: Select Category & Service */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-2 flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-[#D94F83]" />
                1. Select Luxury Service
              </label>

              {/* Quick Category Chips */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'hair', label: 'Hair' },
                  { id: 'bridal', label: 'Bridal' },
                  { id: 'makeup', label: 'Makeup' },
                  { id: 'skincare', label: 'Skin' },
                  { id: 'nails', label: 'Nails' },
                  { id: 'spa', label: 'Spa' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                      selectedCategory === cat.id
                        ? 'bg-[#D94F83] text-white'
                        : 'bg-[#FFF7FA] text-[#666666] hover:bg-[#F8DDE7]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Service Select dropdown with pricing info */}
              <div className="relative">
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#F8DDE7] bg-white text-sm font-medium text-[#222222] focus:outline-none focus:border-[#D94F83] focus:ring-1 focus:ring-[#D94F83]"
                >
                  {filteredServices.map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.title} — {svc.price} ({svc.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Current Service Highlight Pill */}
              <div className="mt-2.5 p-3 rounded-xl bg-[#FFF7FA] border border-[#F8DDE7]/70 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-[#222222]">{currentService.title}</span>
                  <span className="text-[#666666] block text-[11px]">{currentService.subtitle}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#B83268] text-sm block">{currentService.price}</span>
                  <span className="text-[10px] text-gray-500">{currentService.duration}</span>
                </div>
              </div>
            </div>

            {/* Step 2: Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D94F83]" />
                  2. Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#F8DDE7] text-sm text-[#222222] focus:outline-none focus:border-[#D94F83]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D94F83]" />
                  3. Convenient Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#F8DDE7] bg-white text-sm text-[#222222] focus:outline-none focus:border-[#D94F83]"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Stylist Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#D94F83]" />
                4. Stylist Preference (Optional)
              </label>
              <select
                value={selectedStylist}
                onChange={(e) => setSelectedStylist(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-[#F8DDE7] bg-white text-sm text-[#222222] focus:outline-none focus:border-[#D94F83]"
              >
                <option value="Any Available Master Artist">Any Available Master Artist</option>
                {SALON_TEAM.map((member) => (
                  <option key={member.name} value={`${member.name} (${member.role})`}>
                    {member.name} — {member.role}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Client Details */}
            <div className="space-y-3 pt-1 border-t border-[#F8DDE7]">
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#666666] pt-2">
                5. Your Contact Details
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#F8DDE7] text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / WhatsApp (e.g. 0300 1234567) *"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#F8DDE7] text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#F8DDE7] text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Special requests or occasion (Optional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#F8DDE7] text-xs text-[#222222] focus:outline-none focus:border-[#D94F83]"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-[#F8DDE7] flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                id="submit-booking-online-btn"
                className="flex-1 py-3 px-5 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white font-medium text-xs tracking-wide shadow-md shadow-[#D94F83]/25 transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Appointment</span>
              </button>

              <button
                type="button"
                id="submit-booking-whatsapp-btn"
                onClick={(e) => handleSubmit(e, true)}
                className="py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs tracking-wide shadow-md transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book via WhatsApp</span>
              </button>
            </div>

            <p className="text-[11px] text-center text-gray-500">
              No immediate prepayment required. Our concierge will verify your booking within 15 minutes.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
