import { BookOpen, ExternalLink, Calendar, Tag } from "lucide-react";
import { publications } from "@/lib/publications";

export default function BlogPress() {
  // Group publications by type
  const blogs = publications.filter(p => p.type === 'blog');
  const press = publications.filter(p => p.type === 'press');
  const articles = publications.filter(p => p.type === 'article');
  const research = publications.filter(p => p.type === 'research');

  const allPublications = publications;

  return (
    <section id="blog-press" className="section-container">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Blog & <span className="gold-accent">Press</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Thought leadership, industry insights, and media coverage showcasing expertise in
            data architecture, AI/ML, and digital transformation
          </p>
          <div className="w-24 h-1 bg-executive-gold mx-auto mt-6"></div>
        </div>

        {/* Publication Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold gold-accent mb-2">19+</div>
            <div className="text-sm text-white/60">Total Publications</div>
          </div>
          <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold gold-accent mb-2">{blogs.length}</div>
            <div className="text-sm text-white/60">Blog Articles</div>
          </div>
          <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold gold-accent mb-2">{press.length}</div>
            <div className="text-sm text-white/60">Press Coverage</div>
          </div>
          <div className="glass-card text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold gold-accent mb-2">23</div>
            <div className="text-sm text-white/60">Speaking Events</div>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {allPublications.map((publication) => (
            <a
              key={publication.id}
              href={publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                  publication.type === 'blog'
                    ? 'bg-blue-500/20 text-blue-300'
                    : publication.type === 'press'
                    ? 'bg-purple-500/20 text-purple-300'
                    : publication.type === 'article'
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-orange-500/20 text-orange-300'
                }`}>
                  {publication.type}
                </span>
                <ExternalLink className="w-5 h-5 text-executive-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-executive-gold transition-colors">
                {publication.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 mb-4 leading-relaxed line-clamp-3">
                {publication.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center text-sm text-white/60">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>{publication.publisher}</span>
                </div>
                <div className="flex items-center text-sm text-white/60">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{publication.date}</span>
                </div>
              </div>

              {/* Tags */}
              {publication.tags && publication.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {publication.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                  {publication.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs text-executive-gold">
                      +{publication.tags.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Categories Overview */}
        {(articles.length > 0 || research.length > 0) && (
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {articles.length > 0 && (
              <div className="glass-card">
                <h3 className="text-xl font-bold mb-4 gold-accent">Research Articles</h3>
                <p className="text-white/70 text-sm">
                  {articles.length} research article{articles.length !== 1 ? 's' : ''} on GANs,
                  synthetic data, and AI/ML applications in finance and insurance.
                </p>
              </div>
            )}
            {research.length > 0 && (
              <div className="glass-card">
                <h3 className="text-xl font-bold mb-4 gold-accent">Academic Research</h3>
                <p className="text-white/70 text-sm">
                  {research.length} academic publication{research.length !== 1 ? 's' : ''} spanning
                  data architecture, ML systems, and enterprise solutions.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
