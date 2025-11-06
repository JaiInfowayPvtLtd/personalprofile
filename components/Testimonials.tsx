"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Users, Briefcase } from "lucide-react";
import { testimonials, getHighlightedTestimonials } from "@/lib/testimonials";

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const highlighted = getHighlightedTestimonials();
  const displayTestimonials = showAll ? testimonials : highlighted;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
  };

  const currentTestimonial = displayTestimonials[currentIndex];

  // Group testimonials by company for stats
  const companyCounts = testimonials.reduce((acc, t) => {
    acc[t.company] = (acc[t.company] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section id="testimonials" className="section-container bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Professional <span className="gold-accent">Recommendations</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Testimonials from colleagues, leaders, and partners across Fortune 500 organizations
          </p>
          <div className="w-24 h-1 bg-executive-gold mx-auto mt-6"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
            <Users className="w-8 h-8 mx-auto mb-3 text-executive-gold" />
            <div className="text-3xl font-bold gold-accent mb-2">{testimonials.length}</div>
            <div className="text-sm text-white/60">Recommendations</div>
          </div>
          <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
            <Briefcase className="w-8 h-8 mx-auto mb-3 text-executive-gold" />
            <div className="text-3xl font-bold gold-accent mb-2">{Object.keys(companyCounts).length}</div>
            <div className="text-sm text-white/60">Organizations</div>
          </div>
          <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
            <Quote className="w-8 h-8 mx-auto mb-3 text-executive-gold" />
            <div className="text-3xl font-bold gold-accent mb-2">{companyCounts['AWS'] || 0}</div>
            <div className="text-sm text-white/60">AWS Colleagues</div>
          </div>
          <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
            <Quote className="w-8 h-8 mx-auto mb-3 text-executive-gold" />
            <div className="text-3xl font-bold gold-accent mb-2">{highlighted.length}</div>
            <div className="text-sm text-white/60">Featured</div>
          </div>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="glass-card bg-gradient-to-r from-executive-gold/10 to-primary-500/10 mb-12 relative">
          <Quote className="absolute top-6 left-6 w-16 h-16 text-executive-gold/20" />

          <div className="relative z-10 px-12 py-8">
            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-executive-gold/20 hover:bg-executive-gold/30 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-executive-gold" />
              </button>

              <div className="text-center flex-1">
                <div className="text-sm text-executive-gold font-semibold mb-2">
                  {currentIndex + 1} of {displayTestimonials.length}
                </div>
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-executive-gold/20 hover:bg-executive-gold/30 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-executive-gold" />
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 italic">
                "{currentTestimonial.text}"
              </p>

              <div className="border-t border-white/10 pt-6">
                <div className="text-xl font-bold text-white mb-1">
                  {currentTestimonial.name}
                </div>
                <div className="text-executive-gold font-semibold mb-1">
                  {currentTestimonial.title}
                </div>
                <div className="text-white/60 text-sm mb-2">
                  {currentTestimonial.company}
                </div>
                <div className="text-white/50 text-xs">
                  {currentTestimonial.relationship} • {currentTestimonial.date}
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {displayTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-executive-gold w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid View - All Testimonials */}
        {showAll && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="glass-card hover:bg-white/10 transition-all duration-300 flex flex-col"
              >
                <Quote className="w-8 h-8 text-executive-gold/40 mb-4" />
                <p className="text-white/80 text-sm leading-relaxed mb-4 flex-1 line-clamp-6">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold text-white text-sm">{testimonial.name}</div>
                  <div className="text-executive-gold text-xs mb-1">{testimonial.title}</div>
                  <div className="text-white/50 text-xs">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-executive-gold hover:bg-executive-gold/90 text-executive-dark font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {showAll ? 'Show Featured Only' : `View All ${testimonials.length} Recommendations`}
          </button>
        </div>

        {/* Add More Instructions */}
        <div className="mt-12 glass-card bg-executive-dark/50">
          <h3 className="text-lg font-bold mb-3 gold-accent">Add More Recommendations</h3>
          <p className="text-white/70 text-sm mb-4">
            To add more testimonials, edit the{" "}
            <code className="px-2 py-1 bg-white/10 rounded text-executive-gold text-xs">
              lib/testimonials.ts
            </code>{" "}
            file and add new entries to the array. Set <code className="px-1 bg-white/10 rounded text-xs">highlighted: true</code> for featured recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
