import { Mail, Phone, Linkedin, Globe, MapPin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (724) 931-0440",
      href: "tel:+17249310440"
    },
    {
      icon: Mail,
      label: "Email",
      value: "iitk.adarsh@gmail.com",
      href: "mailto:iitk.adarsh@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/adarsh-n-56ab6310",
      href: "https://www.linkedin.com/in/adarsh-n-56ab6310/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Miami, Florida",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section-container bg-black/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Get In <span className="gold-accent">Touch</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Let's discuss how I can help drive your organization's data and AI transformation
          </p>
          <div className="w-24 h-1 bg-executive-gold mx-auto mt-6"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : "_self"}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : ""}
                className={`glass-card hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${
                  contact.href === "#" ? "pointer-events-none" : ""
                }`}
              >
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-executive-gold/20 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-7 h-7 text-executive-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">{contact.label}</div>
                    <div className="text-lg font-semibold text-white">{contact.value}</div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="glass-card bg-gradient-to-r from-executive-gold/10 to-primary-500/10 text-center">
          <Globe className="w-16 h-16 text-executive-gold mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Data Strategy?</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            With 18+ years of experience and a proven track record of delivering $100M+ in business
            value, I help organizations architect modern, cloud-native data ecosystems that drive
            competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:iitk.adarsh@gmail.com"
              className="px-8 py-4 bg-executive-gold hover:bg-executive-gold/90 text-executive-dark font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-n-56ab6310/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 flex items-center"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Specializations */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-bold text-white/80 mb-6">Areas of Expertise</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Strategy",
              "Data Governance",
              "Cloud Migration",
              "Generative AI",
              "ML/AI Solutions",
              "Enterprise Architecture",
              "Data Mesh",
              "Digital Transformation"
            ].map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm hover:bg-white/10 transition-all duration-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Adarsh Naidu. All rights reserved.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Chief Data Architect | Principal Solution Architect @ AWS | Technology Leader
          </p>
        </div>
      </div>
    </section>
  );
}
