import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  const education = [
    {
      institution: "The Wharton School, University of Pennsylvania",
      degree: "Chief Technology Officer",
      type: "Executive Program",
      period: "January 2023 - June 2024",
      location: "Philadelphia, PA",
      prestige: "IVY League",
      description: "Executive education program focusing on technology leadership, digital transformation, and strategic innovation."
    },
    {
      institution: "Pune University",
      degree: "Master of Business Administration",
      type: "MBA - Information Technology",
      period: "April 2005 - April 2007",
      location: "Pune, India",
      prestige: "Top 10 University in India",
      description: "Specialized in Information Technology with focus on business strategy and technology management."
    },
    {
      institution: "National Institute of Technology",
      degree: "Bachelor of Engineering",
      type: "B.E. - Information Technology",
      period: "April 2001 - April 2005",
      location: "Chhattisgarh, India",
      prestige: "Equivalent to IVY League in India",
      description: "Comprehensive engineering education with strong foundation in computer science and information systems."
    }
  ];

  const certifications = [
    {
      category: "Cloud Certifications",
      certs: [
        "AWS Certified Solutions Architect",
        "Microsoft Azure Certified Solution Architect",
        "Google Cloud Platform (GCP) Certified Architect"
      ]
    },
    {
      category: "Architecture & Frameworks",
      certs: [
        "TOGAF® 9.1 Certified",
        "Zachman Framework Practitioner"
      ]
    },
    {
      category: "Data & Governance",
      certs: [
        "DAMA-DMBOK Certified",
        "DCAM Framework Specialist"
      ]
    }
  ];

  const memberships = [
    { org: "IEEE", level: "Senior Member" },
    { org: "British Computer Society (BCS)", level: "Fellow" },
    { org: "Forbes Technology Council", level: "Member" }
  ];

  return (
    <section id="education" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Education & <span className="gold-accent">Credentials</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            World-class education and professional certifications from premier institutions
          </p>
          <div className="w-24 h-1 bg-executive-gold mx-auto mt-6"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="glass-card hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-executive-gold/20 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-executive-gold" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{edu.institution}</h3>
                      <p className="text-lg text-executive-gold font-semibold">{edu.degree}</p>
                      <p className="text-sm text-white/60">{edu.type}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-executive-gold/20 border border-executive-gold/30 rounded-lg text-executive-gold text-sm font-semibold">
                        {edu.prestige}
                      </span>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm mb-3">
                    {edu.location} • {edu.period}
                  </p>
                  <p className="text-white/70 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="glass-card mb-8 bg-gradient-to-r from-executive-gold/10 to-primary-500/10">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-executive-gold mr-3" />
            <h3 className="text-2xl font-bold gold-accent">Professional Certifications</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((category, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold text-white mb-4">{category.category}</h4>
                <ul className="space-y-3">
                  {category.certs.map((cert, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-executive-gold mr-2 flex-shrink-0">✓</span>
                      <span className="text-white/80 text-sm">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="glass-card">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-executive-gold mr-3" />
            <h3 className="text-2xl font-bold gold-accent">Professional Memberships</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-xl font-bold text-white mb-2">{membership.org}</div>
                <div className="text-executive-gold font-semibold">{membership.level}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Note */}
        <div className="mt-8 glass-card bg-executive-gold/5 border-l-4 border-executive-gold">
          <p className="text-white/80">
            <span className="font-bold text-executive-gold">19+ Publications</span> spanning GAN
            applications in finance and insurance, modernizing legacies, and optimizing operations for
            Fortune 100 companies, generating measurable impacts in cost savings, revenue growth, and
            efficiency gains.
          </p>
        </div>
      </div>
    </section>
  );
}
