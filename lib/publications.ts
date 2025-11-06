export interface Publication {
  id: string;
  title: string;
  description: string;
  url: string;
  publisher: string;
  date: string;
  type: 'blog' | 'press' | 'article' | 'research';
  tags?: string[];
  image?: string;
}

export const publications: Publication[] = [
  {
    id: '1',
    title: 'How Does Cloud Enable the Transformation of Dispute Management in Banking?',
    description: 'An in-depth exploration of cloud-native architectures transforming dispute management processes in the banking sector, reducing resolution times and improving customer satisfaction.',
    url: 'https://aws.amazon.com/blogs/industries/how-does-cloud-enable-the-transformation-of-dispute-management-in-banking/',
    publisher: 'AWS Industries Blog',
    date: '2024',
    type: 'blog',
    tags: ['Cloud', 'Banking', 'Dispute Management', 'AWS', 'Digital Transformation']
  },
  {
    id: '2',
    title: 'Eight Game-Changing Products in Four Years Prove Digital Banking is Just Getting Started',
    description: 'A showcase of groundbreaking innovations in digital banking, highlighting the rapid evolution of financial technology and customer-centric product development.',
    url: 'https://english.newsnationtv.com/brand-stories/brand-stories-english/eight-game-changing-products-in-four-years-prove-digital-banking-is-just-getting-started-9687573',
    publisher: 'News Nation',
    date: '2024',
    type: 'press',
    tags: ['Digital Banking', 'Innovation', 'Product Development', 'FinTech']
  },
  {
    id: '3',
    title: 'Data Architects Lead Banking\'s Digital Revolution While Competitors Watch From The Sidelines',
    description: 'A profile exploring how data architects are driving banking\'s digital transformation through cloud migration and AI solutions, generating substantial revenue gains and operational efficiencies.',
    url: 'https://www.freepressjournal.in/latest-news/data-architects-lead-bankings-digital-revolution-while-competitors-watch-from-the-sidelines',
    publisher: 'Free Press Journal',
    date: 'June 2025',
    type: 'press',
    tags: ['Data Architecture', 'Banking', 'Digital Transformation', 'Cloud Migration', 'AI']
  },
  {
    id: '4',
    title: 'Generative AI Transforms Banking: Adarsh Naidu Drives Massive Revenue Growth and Hyper-Personalization Across Global Finance',
    description: 'Exploring how Adarsh Naidu leverages generative AI to revolutionize banking operations, driving significant revenue growth and delivering hyper-personalized customer experiences across major financial institutions worldwide.',
    url: 'https://www.mid-day.com/buzz/article/generative-ai-transforms-banking-adarsh-naidu-drives-massive-revenue-growth-and-hyper-personalization-across-global-finance-6639',
    publisher: 'Mid-Day',
    date: '2024',
    type: 'press',
    tags: ['Generative AI', 'Banking', 'Revenue Growth', 'Personalization', 'AI/ML', 'Financial Services']
  },
  {
    id: '5',
    title: 'Adarsh Naidu: How Housing Apps Benefiting from Next-Gen Platform Migrations',
    description: 'An insightful analysis of how Adarsh Naidu leads next-generation platform migrations for housing applications, modernizing infrastructure and enabling scalable, efficient solutions that transform the real estate technology landscape.',
    url: 'https://www.outlookindia.com/hub4business/adarsh-naidu-how-housing-apps-benefiting-from-next-gen-platform-migrations',
    publisher: 'Outlook India',
    date: '2024',
    type: 'press',
    tags: ['Platform Migration', 'Housing Apps', 'Real Estate Tech', 'Cloud Migration', 'Modernization', 'Digital Transformation']
  },
  // Add more publications here following the same structure
  // Example:
  // {
  //   id: '3',
  //   title: 'Your Article Title',
  //   description: 'Brief description of the article',
  //   url: 'https://example.com/article',
  //   publisher: 'Publisher Name',
  //   date: 'YYYY',
  //   type: 'blog',
  //   tags: ['Tag1', 'Tag2']
  // },
];

// Helper function to get publications by type
export const getPublicationsByType = (type: Publication['type']) => {
  return publications.filter(pub => pub.type === type);
};

// Helper function to get recent publications
export const getRecentPublications = (limit: number = 6) => {
  return publications.slice(0, limit);
};
