import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { PageId } from '../types';
import { BLOG_POSTS } from '../data/salonData';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onSelectBlog: (slug: string) => void;
  onOpenBooking: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onSelectBlog,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Bridal Beauty', label: 'Bridal Beauty' },
    { id: 'Skincare', label: 'Skincare' },
    { id: 'Hair Trends', label: 'Hair Trends' },
    { id: 'Nail Art', label: 'Nails & Aesthetics' },
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FFF7FA] via-white to-[#FFF7FA] py-16 lg:py-20 border-b border-[#F8DDE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#B83268] uppercase bg-[#F8DDE7] px-3.5 py-1 rounded-full">
            The Iqra Beauty Journal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#222222]">
            Beauty Journal & Trends
          </h1>
          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mx-auto leading-relaxed">
            Insider hair styling secrets, bridal skincare timelines, and cutting-edge aesthetic trends straight from our master artists in Gulberg III, Lahore.
          </p>

          {/* Breadcrumbs */}
          <div className="pt-2 text-xs text-gray-400 flex items-center justify-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#D94F83]">
              Home
            </button>
            <span>/</span>
            <span className="text-[#D94F83] font-medium">Beauty Journal</span>
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article Card */}
          {activeCategory === 'all' && !searchQuery && (
            <div
              onClick={() => onSelectBlog(featuredPost.slug)}
              className="mb-16 bg-[#FFF7FA] rounded-3xl border border-[#F8DDE7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 group"
            >
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-[#D94F83] text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px]">
                      Featured Story
                    </span>
                    <span className="text-[#B83268] font-semibold">{featuredPost.category}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#222222] group-hover:text-[#D94F83] transition leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F8DDE7] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <span className="text-xs font-semibold text-gray-900 block">
                        {featuredPost.author.name}
                      </span>
                      <span className="text-[10px] text-gray-500">{featuredPost.date}</span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#D94F83] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Filter & Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#F8DDE7]">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-[#D94F83] text-white shadow-md shadow-[#D94F83]/20'
                      : 'bg-[#FFF7FA] text-[#555555] hover:bg-[#F8DDE7] hover:text-[#B83268]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-64 relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-[#F8DDE7] focus:outline-none focus:border-[#D94F83] bg-[#FFF7FA]"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => onSelectBlog(post.slug)}
                className="bg-white rounded-3xl overflow-hidden border border-[#F8DDE7] shadow-xs hover:shadow-xl hover:border-[#D94F83]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-gray-500">
                      <span className="font-semibold text-[#B83268] uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#D94F83]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#222222] group-hover:text-[#D94F83] transition leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#666666] line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="text-xs font-semibold text-[#D94F83] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 bg-[#FFF7FA] rounded-3xl border border-[#F8DDE7]">
              <p className="text-sm text-gray-600 mb-3">No articles match your search.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="text-xs text-[#D94F83] font-semibold hover:underline"
              >
                Show all articles
              </button>
            </div>
          )}

          {/* Newsletter Box */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#FFF7FA] via-white to-[#F8DDE7]/50 border border-[#F8DDE7] text-center max-w-3xl mx-auto space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#D94F83] text-white mx-auto flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#222222]">
              Subscribe to the Iqra Beauty Journal
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
              Get weekly bridal prep checklists, seasonal hair care regimens, and exclusive Gulberg III salon promotions delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-xs rounded-full border border-[#F8DDE7] focus:outline-none focus:border-[#D94F83] bg-white text-[#222222]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#D94F83] hover:bg-[#B83268] text-white text-xs font-semibold shadow-xs transition"
              >
                Join VIP Club
              </button>
            </form>

            {isSubscribed && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#B83268] font-medium pt-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Thank you! You are subscribed to our beauty journal.</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
