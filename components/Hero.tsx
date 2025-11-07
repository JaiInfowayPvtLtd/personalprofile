"use client";

import { Award, Cloud, TrendingUp, Users } from "lucide-react";

export default function Hero() {
  const highlights = [
    { icon: Cloud, value: "18+", label: "Years Experience" },
    { icon: Award, value: "$200M+", label: "Annual Revenue Led" },
    { icon: Users, value: "50+", label: "Enterprise Clients" },
    { icon: TrendingUp, value: "$100M+", label: "Business Value Delivered" },
  ];

  return (
    <section className="flex items-center justify-center relative overflow-hidden pt-20 pb-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-executive-gold/10 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-primary-500/10 rounded-full blur-3xl bottom-20 right-10 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8 relative z-10 w-full">
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[320px_1fr] gap-8 items-start animate-fade-in">
          {/* Left Side - Profile Photo */}
          <div className="flex justify-center md:justify-start order-1 md:order-1">
            <div className="relative group cursor-pointer">
              {/* Decorative Ring - Animated */}
              <div className="absolute inset-0 bg-gradient-to-br from-executive-gold to-primary-500 opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500 group-hover:scale-110"></div>

              {/* Photo Container - Interactive with expressions */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-4 border-executive-gold/30 group-hover:border-executive-gold/60 shadow-2xl transition-all duration-500 group-hover:shadow-executive-gold/50 group-hover:scale-105 transform">
                {/* Placeholder - Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-executive-navy to-executive-dark flex items-center justify-center">
                  <img
                    src="/profile.jpg"
                    alt="Adarsh Naidu"
                    className="w-full h-full object-contain bg-gradient-to-br from-executive-navy to-executive-dark transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="text-executive-gold text-6xl font-serif font-bold">AN</div>';
                    }}
                  />

                  {/* Interactive Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-executive-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl border-2 border-executive-gold animate-pulse"></div>
                </div>
              </div>

              {/* Decorative Elements - Animated */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-executive-gold/20 blur-xl group-hover:bg-executive-gold/40 group-hover:w-20 group-hover:h-20 transition-all duration-500"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-primary-500/20 blur-xl group-hover:bg-primary-500/40 group-hover:w-24 group-hover:h-24 transition-all duration-500"></div>

              {/* Floating Badge on Hover */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-bottom-7 transition-all duration-500">
                <div className="bg-executive-gold px-5 py-1.5 rounded-full shadow-2xl">
                  <p className="text-executive-dark font-bold text-xs whitespace-nowrap">Chief Architect</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center md:text-left order-2 md:order-2">
            {/* Title Badge */}
            <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-executive-gold/30 mb-4">
              <span className="text-executive-gold font-semibold text-xs md:text-sm">Wharton Chief Technology Officer</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              <span className="block text-white/90">Adarsh Naidu</span>
              <span className="block gold-accent mt-1">Chief Architect</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-white/70 mb-4 font-light leading-relaxed">
              Leader | Visionary | Enterprise Strategist
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              {[
                "Master of Business Administration",
                "Bachelor of Engineering",
                "TOGAF® 9.1",
                "AWS/Azure/GCP Certified",
                "IEEE Senior Member",
                "BCS Fellow",
                "Forbes Technology Council"
              ].map((cert) => (
                <span
                  key={cert}
                  className="px-2.5 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs font-medium text-white/80"
                >
                  {cert}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-white/60 mb-6 leading-relaxed">
              Trusted partner to C-suite executives with 18+ years driving strategic digital transformation,
              cloud migration, and enterprise innovation across global Fortune 500 organizations.
              Leading large-scale modernization initiatives, AI/ML strategies, and governance frameworks
              that align business objectives with technology roadmaps.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-executive-gold hover:bg-executive-gold/90 text-executive-dark font-semibold text-sm rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="#achievements"
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm rounded-lg transition-all duration-300"
              >
                View Achievements
              </a>
            </div>
          </div>
        </div>

        {/* Stats - Full Width Below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <Icon className="w-6 h-6 mx-auto mb-3 text-executive-gold" />
                <div className="text-2xl font-bold gold-accent mb-1">{item.value}</div>
                <div className="text-xs text-white/60">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-executive-gold rounded-full mt-1.5"></div>
        </div>
      </div>
    </section>
  );
}
