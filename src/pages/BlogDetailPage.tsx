import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { PageId } from '../types';
import { BLOG_POSTS, SALON_INFO } from '../data/salonData';

interface BlogDetailPageProps {
  slug: string;
  onNavigate: (page: PageId) => void;
  onSelectBlog: (slug: string) => void;
  onOpenBooking: () => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  slug,
  onNavigate,
  onSelectBlog,
  onOpenBooking,
}) => {
  const [copied, setCopied] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <article className="space-y-0">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF7FA] via-white to-[#FFF7FA] py-16 lg:py-20 border-b border-[#F8DDE7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-center">
          {/* Back button & Category */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#D94F83] font-medium transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Beauty Journal</span>
            </button>
            <span className="text-xs uppercase font-bold tracking-wider text-[#B83268] bg-[#F8DDE7] px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
            {post.title}
          </h1>

          {/* Author metadata bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover ring-1 ring-[#D94F83]"
              />
              <span className="font-semibold text-gray-800">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D94F83]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D94F83]" />
              <span>{post.readTime}</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-[#D94F83] hover:text-[#B83268] font-semibold"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Main Hero Image */}
          <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-gray-100 shadow-md">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Callout Box */}
          <div className="p-6 rounded-2xl bg-[#FFF7FA] border border-[#F8DDE7] space-y-3">
            <h4 className="font-serif font-bold text-base text-[#222222] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D94F83]" />
              <span>Key Editorial Highlights</span>
            </h4>
            <div className="space-y-2">
              {(post.keyTakeaways || post.tags.map((t) => `Expert focus: ${t}`)).map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#D94F83] mt-0.5 flex-shrink-0" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF7FA] border border-[#F8DDE7] flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-[#D94F83] flex-shrink-0"
            />
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#B83268]">
                Article Author
              </span>
              <h4 className="font-serif text-lg font-bold text-[#222222]">
                {post.author.name}
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed">
                {post.author.role} at Iqra Beauty Salon, Gulberg III Lahore. Specializing in bespoke aesthetics, bridal curation, and dermatological hair care.
              </p>
            </div>
          </div>

          {/* In-Article Booking CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#D94F83] to-[#B83268] text-white text-center space-y-4 shadow-lg">
            <h3 className="font-serif text-2xl font-bold">
              Ready for Your Personalized Consultation?
            </h3>
            <p className="text-xs sm:text-sm text-[#F8DDE7] max-w-md mx-auto">
              Meet with our certified master team at 161 M Gulberg III, Lahore, for a personalized diagnosis and treatment plan.
            </p>
            <button
              onClick={onOpenBooking}
              className="px-8 py-3 rounded-full bg-white text-[#B83268] hover:bg-[#FFF7FA] font-bold text-xs shadow-md transition"
            >
              Book an Appointment
            </button>
          </div>

          {/* Related Articles */}
          <div className="pt-12 border-t border-gray-100 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#222222]">
              Related Reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectBlog(rel.slug)}
                  className="bg-white rounded-2xl border border-[#F8DDE7] overflow-hidden shadow-xs hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={rel.featuredImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-bold text-[#B83268] uppercase">
                      {rel.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#222222] group-hover:text-[#D94F83] transition">
                      {rel.title}
                    </h4>
                    <span className="text-xs text-[#D94F83] font-semibold inline-flex items-center gap-1 pt-1">
                      <span>Read Story</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
