import { Building2, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Amazon Web Services (AWS)",
      role: "Principal Solution Architect",
      type: "Full Time",
      period: "April 2022 - Present",
      location: "Miami, FL",
      description: "Leading AI strategy, data modernization, and cloud-native banking solutions for Fortune 500 financial institutions.",
      responsibilities: [
        "Vision/Roadmap Management for Generative AI and Data Management initiatives",
        "Modernizing and deploying cloud-native banking solutions",
        "Leading AI/ML & Data Strategy for major financial institutions",
        "Technology owner for $200M+ annual revenue segment",
        "Architected 150+ AI use cases in production with 20,000+ user adoption"
      ],
      achievements: [
        "Drove $30M+ revenue through Data Lake solutions",
        "Led Responsible AI thought leadership at 23 events (2023-2025)",
        "Pioneered AWS DataZone adoption generating $5M+ services revenue"
      ]
    },
    {
      company: "Assurant Inc",
      role: "Director Solution Architect",
      type: "Full Time",
      period: "February 2020 - March 2022",
      location: "Miami, FL",
      description: "Led enterprise architecture strategy and built the enterprise architecture practice from ground up.",
      responsibilities: [
        "Vision/Roadmap/Runway Management for enterprise-wide initiatives",
        "Enterprise architecture strategy and multi-year technology roadmap ownership",
        "Legacy landscape modernization across 45+ business applications",
        "Vendor selection, contract negotiation, and Guidewire platform implementation",
        "Architecture governance board leadership and site reliability engineering"
      ],
      achievements: [
        "Founded enterprise architecture practice",
        "Boosted delivery efficiency by 35%",
        "Led Guidewire migration cutting costs by 30%",
        "Improved processing speed by 50% and customer satisfaction by 40%"
      ]
    },
    {
      company: "American Express",
      role: "Staff Architect (Director)",
      type: "Full Time",
      period: "July 2015 - February 2020",
      location: "Fort Lauderdale, FL",
      description: "Led product innovation and site reliability programs while establishing centers of excellence.",
      responsibilities: [
        "Vision/Roadmap/Runway Management and Site Reliability process ownership",
        "Managed COE program for upskilling in Open Source Technology",
        "New card product launch architect (8 products in 4 years)",
        "Blockchain COE lead and ETL/ELT owner",
        "Led fraud detection and dispute resolution analytics platforms"
      ],
      achievements: [
        "Launched 8 innovative products delivering market-leading digital experiences",
        "GAN-driven fraud detection reducing false positives by 30%, adding $50M revenue",
        "Dispute resolution analytics saving $15M annually",
        "Loyalty optimization increasing program revenue by $20M annually"
      ]
    },
    {
      company: "Morgan Stanley",
      role: "Platform Architect (Consultant via Capgemini)",
      type: "Consultant",
      period: "March 2012 - August 2015",
      location: "New York, NY",
      description: "Orchestrated end-to-end ETL pipelines and big data engineering for risk management.",
      responsibilities: [
        "End-to-end ETL pipeline and big data engineering",
        "Middleware integration across Data and ML platforms",
        "BPM rules engine development for compliance workflows",
        "Risk simulation engine using Monte-Carlo and scenario analysis",
        "Established Pega-based BPM Center of Excellence"
      ],
      achievements: [
        "Improved risk-assessment accuracy by 40%",
        "Helped avert $10M+ in potential regulatory fines",
        "Reduced manual review queues by 25%",
        "Cut onboarding time by 30% through BPM standardization"
      ]
    },
    {
      company: "TMG Health",
      role: "Technology Architect (Consultant via L&T Infotech/NIIT)",
      type: "Consultant",
      period: "August 2008 - February 2012",
      location: "Pittsburgh, PA & India",
      description: "Progressed from developer to lead to manager, architecting TMG Health's first-generation ATLAS platform.",
      responsibilities: [
        "Managed ATLAS platform supporting Medicare and Medicaid services",
        "Introduced predictive scoring and rule-based automation",
        "Designed automated enrollment & eligibility workflows",
        "Built claims adjudication dashboard with real-time insights",
        "Led big data strategy and analytics enablement initiatives"
      ],
      achievements: [
        "Cut claim errors by 35%, saving $2M annually",
        "40% faster turnaround for government health programs",
        "Increased staff productivity by 25% handling 1M+ claims/year",
        "Greenfield development of Medicare/Mediclaim product from ideation to launch"
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Professional <span className="gold-accent">Journey</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            18+ years of progressive leadership across technology innovation and enterprise transformation
          </p>
          <div className="w-24 h-1 bg-executive-gold mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-executive-gold via-primary-500 to-executive-gold/20"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-6 top-8 w-5 h-5 bg-executive-gold rounded-full border-4 border-executive-dark shadow-lg"></div>

                {/* Content Card */}
                <div className="md:ml-20 glass-card hover:bg-white/10 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-start mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-executive-gold/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Building2 className="w-6 h-6 text-executive-gold" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                        <p className="text-lg text-executive-gold font-semibold">{exp.role}</p>
                        <p className="text-sm text-white/50">{exp.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-white/50 text-sm mb-4">{exp.location}</p>
                  <p className="text-white/80 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-executive-gold uppercase tracking-wide mb-3">
                      Key Accountabilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-white/70 text-sm">
                          <span className="text-executive-gold mr-2 flex-shrink-0">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="pt-6 border-t border-white/10">
                    <h4 className="text-sm font-bold text-executive-gold uppercase tracking-wide mb-3">
                      Key Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start bg-executive-gold/5 rounded-lg p-3">
                          <span className="text-executive-gold mr-2 flex-shrink-0 font-bold">✓</span>
                          <span className="text-white/80 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
