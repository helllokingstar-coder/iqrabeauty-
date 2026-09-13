import React, { useState } from 'react';
import {
  Sparkles,
  User,
  Clock,
  CheckCircle2,
  Calendar,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { PageId } from '../types';
import { EXPERT_ADVICE_ARTICLES, SALON_INFO } from '../data/salonData';

interface ExpertAdvicePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ExpertAdvicePage: React.FC<ExpertAdvicePageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(
    EXPERT_ADVICE_ARTICLES[0].id
  );

  const selectedArticle =
    EXPERT_ADVICE_ARTICLES.find((a) => a.id === selectedArticleId) ||
    EXPERT_ADVICE_ARTICLES[0];

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF7FA] via-white to-[#FFF7FA] py-16 lg:py-20 border-b border-[#F8DDE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase bg-[#F8DDE7] px-3.5 py-1 rounded-full">
            Clinical Insights & Pro Techniques
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#222222]">
            Expert Beauty Advice
          </h1>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mx-auto leading-relaxed">
            Professional skincare regimens, bridal preparation schedules, and hair health protocols curated by Lahore's leading cosmetologists and artists.
          </p>

          {/* Breadcrumbs */}
          <div className="pt-2 text-xs text-gray-400 flex items-center justify-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#D94F83]">
              Home
            </button>
            <span>/</span>
            <span className="text-[#D94F83] font-medium">Expert Advice</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: List of Guides */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#222222] mb-2">
                Curated Expert Guides
              </h3>

              <div className="space-y-3">
                {EXPERT_ADVICE_ARTICLES.map((article) => {
                  const isSelected = article.id === selectedArticle.id;
                  return (
                    <div
                      key={article.id}
                      onClick={() => setSelectedArticleId(article.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#FFF7FA] border-[#D94F83] shadow-md'
                          : 'bg-white border-[#F8DDE7] hover:border-[#D94F83]/40'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-1">
                        <span className="font-bold text-[#B83268] uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h4
                        className={`font-serif text-sm font-bold leading-snug ${
                          isSelected ? 'text-[#D94F83]' : 'text-[#222222]'
                        }`}
                      >
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100 text-xs text-gray-600">
                        <img
                          src={article.author.avatar}
                          alt={article.author.name}
                          className="w-5 h-5 rounded-full object-cover"
                        />
                        <span>{article.author.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Consultation Box in Sidebar */}
              <div className="p-6 rounded-3xl bg-gradient-to-b from-[#FFF7FA] to-[#F8DDE7]/40 border border-[#F8DDE7] space-y-4 mt-8">
                <div className="w-10 h-10 rounded-full bg-[#D94F83] text-white flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-[#222222]">
                  Book One-on-One Beauty Consultation
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Have a specific skin condition or planning your wedding timeline? Meet with our specialists in Gulberg III.
                </p>
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white text-xs font-semibold shadow-xs transition"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Right Column: Detailed Guide View */}
            <div className="lg:col-span-8 bg-white border border-[#F8DDE7] rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
              {/* Header */}
              <div className="space-y-3 pb-6 border-b border-gray-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#B83268] bg-[#F8DDE7] px-3 py-1 rounded-full">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D94F83]" />
                    {selectedArticle.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] leading-tight">
                  {selectedArticle.title}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed italic">
                  {selectedArticle.excerpt}
                </p>

                {/* Author Card */}
                <div className="flex items-center gap-4 pt-4">
                  <img
                    src={selectedArticle.author.avatar}
                    alt={selectedArticle.author.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#D94F83]"
                  />
                  <div>
                    <h5 className="font-serif font-bold text-sm text-[#222222]">
                      {selectedArticle.author.name}
                    </h5>
                    <span className="text-xs text-[#B83268] font-medium block">
                      {selectedArticle.author.title} • {selectedArticle.author.experience}
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Featured Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-gray-100 shadow-sm">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content Paragraphs */}
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                {(selectedArticle.fullGuide || selectedArticle.content || []).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Actionable Pro Tips Callout */}
              <div className="p-6 rounded-2xl bg-[#FFF7FA] border border-[#F8DDE7] space-y-4">
                <h4 className="font-serif text-lg font-bold text-[#222222] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#D94F83]" />
                  <span>Key Professional Takeaways</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(selectedArticle.keyTakeaways || selectedArticle.tips || []).map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D94F83] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-800 font-medium">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frequently Asked Questions */}
              {selectedArticle.faqs && selectedArticle.faqs.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h4 className="font-serif text-lg font-bold text-[#222222] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#D94F83]" />
                    <span>Frequently Asked Questions</span>
                  </h4>
                  <div className="space-y-3">
                    {selectedArticle.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1.5"
                      >
                        <h5 className="font-semibold text-xs sm:text-sm text-gray-900">
                          Q: {faq.q}
                        </h5>
                        <p className="text-xs text-gray-600 leading-relaxed">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Guide Bottom CTA */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="font-serif font-bold text-base text-[#222222] block">
                    Questions for {selectedArticle.author.name}?
                  </span>
                  <span className="text-xs text-gray-500">
                    Visit our Gulberg III salon or message our team on WhatsApp.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-2.5 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white text-xs font-semibold shadow-xs transition"
                  >
                    Book Session
                  </button>
                  <a
                    href={SALON_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
