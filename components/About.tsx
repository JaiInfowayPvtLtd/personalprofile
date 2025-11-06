import { Briefcase, Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="gold-accent">Executive</span> Profile
          </h2>
          <div className="w-24 h-1 bg-executive-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-executive-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-executive-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Visionary Leader</h3>
            <p className="text-white/70 leading-relaxed">
              Hands-on leader driving strategic digital transformation and cloud migration across global enterprises
            </p>
          </div>

          <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-executive-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-executive-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Strategic Partner</h3>
            <p className="text-white/70 leading-relaxed">
              Trusted partner to C-suite executives in financial services, co-creating enterprise roadmaps
            </p>
          </div>

          <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-executive-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-executive-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Innovation Architect</h3>
            <p className="text-white/70 leading-relaxed">
              Leveraging Generative AI, blockchain, and emerging technologies to expand market reach and revenue
            </p>
          </div>
        </div>

        <div className="glass-card">
          <h3 className="text-2xl font-bold mb-6 gold-accent">Strategic Leadership</h3>
          <p className="text-white/80 leading-relaxed mb-4">
            Adarsh Naidu's career traces a dynamic ascent from hands-on engineering to visionary enterprise
            architecture leadership, partnering with C-suite executives to align business objectives with
            technology strategies, enabling enhanced scalability, operational efficiency, and significant cost savings.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            Adept at orchestrating large-scale <span className="text-executive-gold font-semibold">legacy modernization</span> to
            <span className="text-executive-gold font-semibold"> cloud-native microservices architectures</span>,
            implementing robust <span className="text-executive-gold font-semibold">governance frameworks</span> (TOGAF, Zachman),
            and leveraging emerging technologies such as
            <span className="text-executive-gold font-semibold"> Generative AI/ML</span>,
            <span className="text-executive-gold font-semibold"> blockchain</span>, and
            <span className="text-executive-gold font-semibold"> advanced data analytics</span>.
          </p>
          <p className="text-white/80 leading-relaxed">
            Passionate about building high-performance teams, fostering innovation through reference architectures
            and capability modeling, and ensuring organizational excellence through enterprise-wide standards and
            best practices. Established Architecture Review Boards (ARB) and governance processes to ensure
            compliance, interoperability, and cost optimization across all technology domains.
          </p>
        </div>
      </div>
    </section>
  );
}
