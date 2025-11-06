import { Trophy, DollarSign, TrendingUp, Users, Database, Shield } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Database,
      title: "Financial Services Data Lake & Governance",
      role: "Strategy Lead",
      description: "Assisted 50+ large financial services customers in developing comprehensive Data Lake strategies, solving fragmented data silos to enable BI and AI/ML improvements.",
      impact: "$30M+ in revenue | Board-level presentations | Production deployments"
    },
    {
      icon: Shield,
      title: "Responsible AI Leadership",
      role: "Thought Leader",
      description: "Developed AWS point of view for Responsible AI implementation throughout the generative AI application lifecycle, covering all SDLC and Agile phases.",
      impact: "23 events across US (2023-2025) | Enterprise framework adoption"
    },
    {
      icon: Users,
      title: "Banking Segment Leadership",
      role: "Technology Owner",
      description: "Technology owner and organizational leader for BankUnited, SoFi, ACI Worldwide, First Citizens Bank, Cardinal Finance, Victory Capital, Liberty Mutual, Park National Bank, and Robinhood.",
      impact: "~$200M annual revenue | High-performing teams | Transformative solutions"
    },
    {
      icon: TrendingUp,
      title: "API Management & API as a Product",
      role: "Enterprise Architect - Assurant",
      description: "Led comprehensive APIM transformation strategy, establishing API-first architecture and API as a Product model. Designed governance frameworks, developer portals, and monetization strategies enabling self-service API consumption across 45+ business applications and 70+ technology platforms.",
      impact: "35% efficiency boost | Enterprise-wide API standardization | Developer enablement platform"
    },
    {
      icon: Database,
      title: "AWS DataZone & Data Mesh Pioneer",
      role: "Strategy Lead",
      description: "Led AWS DataZone and Unified Studio adoption across strategic US enterprise customers. Implemented federated governance and self-service data marketplaces.",
      impact: "45% faster time-to-market | $5M+ services revenue | MDM implementation"
    },
    {
      icon: DollarSign,
      title: "Cloud Migration & Modernization",
      role: "Principal Architect",
      description: "Orchestrated multiple large-scale migrations: Oracle/SQL Server to Redshift (50+ DBs), Informatica to AWS Glue (200+ workflows), Power BI/Tableau to QuickSight (150+ assets).",
      impact: "$4M+ annual savings | 8x performance improvement | 99.5% reliability"
    }
  ];

  return (
    <section id="achievements" className="section-container bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Career <span className="gold-accent">Highlights</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Delivering measurable business value through strategic data initiatives
          </p>
          <div className="w-24 h-1 bg-executive-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="glass-card hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-executive-gold/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="w-6 h-6 text-executive-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
                    <span className="text-sm text-executive-gold font-semibold">{achievement.role}</span>
                  </div>
                </div>
                <p className="text-white/70 mb-4 leading-relaxed">{achievement.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-executive-gold font-semibold">{achievement.impact}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Metrics */}
        <div className="mt-16 glass-card bg-gradient-to-r from-executive-gold/10 to-primary-500/10">
          <h3 className="text-2xl font-bold mb-8 text-center gold-accent">Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gold-accent mb-2">150+</div>
              <div className="text-white/70">AI Use Cases Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gold-accent mb-2">12</div>
              <div className="text-white/70">Fortune 500 Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gold-accent mb-2">$100M+</div>
              <div className="text-white/70">Business Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gold-accent mb-2">20K+</div>
              <div className="text-white/70">Users Enabled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
