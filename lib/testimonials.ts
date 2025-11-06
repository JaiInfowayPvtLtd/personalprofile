export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  date: string;
  text: string;
  linkedinUrl?: string;
  highlighted?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Siddharth Bhaskar',
    title: 'Product & Tech Leader at AWS',
    company: 'AWS',
    relationship: 'Worked on the same team',
    date: 'November 2025',
    text: 'Adarsh is an exceptional solution architect who combines comprehensive systems thinking with practical implementation expertise in Machine Learning and Generative AI, enabling enterprises to progress from pilot programs to scaled, governed production systems with measurable KPI-driven results. Throughout his career, from NIIT Technologies to his leadership role at AWS, he has consistently transformed architectural concepts into tangible outcomes. Organizations seeking to implement Generative AI solutions responsibly and efficiently would benefit significantly from his leadership.',
    highlighted: true
  },
  {
    id: '2',
    name: 'Pradeep Kumar Dhananjaya',
    title: 'Tech Lead, Worldwide Banking',
    company: 'AWS',
    relationship: 'Worked on different teams',
    date: 'November 2025',
    text: 'Adarsh has expertise in AI and banking, helping teams turn governance policy into real controls—whether it\'s managing PII, ensuring model risk compliance (SR 11-7), or improving AML and KYC processes. He worked with me on large financial institutions, where he streamlined data lake and mesh architectures with fine-grained access, added clear audit-grade lineage, and built Responsible AI guardrails that keep these organizations moving fast!',
    highlighted: true
  },
  {
    id: '3',
    name: 'Jacob Lord',
    title: 'Sales Specialist | Artificial Intelligence',
    company: 'AWS',
    relationship: 'Worked on different teams',
    date: 'October 2025',
    text: 'Adarsh worked with me on multiple AIML projects, and his ability to work effectively under pressure while maintaining attention to detail made him a reliable contributor to critical deliverables. He demonstrated strong expertise in AIML and consistently delivered high-quality solutions that exceeded client expectations. I would highly recommend Adarsh and believe he would be a strong asset to any team.',
    highlighted: false
  },
  {
    id: '4',
    name: 'Gilberto Brito Cordoves',
    title: 'Technical Account Manager',
    company: 'AWS',
    relationship: 'Worked on different teams',
    date: 'October 2025',
    text: 'It has been outstanding working with Adarsh Naidu. He consistently transforms banking and customer priorities into secure, compliant, and scalable AI outcomes with clear, measurable impact. In our work together, he aligned architecture with KPIs and delivered at scale (150+ AI use cases live, 20K+ users enabled, $20–40M annual value) while meeting audit and risk standards without slowing delivery. A rare blend of systems thinker and hands-on leader, he removes blockers, communicates crisply with executives and engineers, and delivers production results. Adarsh is the leader you want on your side, highly recommended!',
    highlighted: true
  },
  {
    id: '5',
    name: 'Renee Lau',
    title: 'Principal Financial Services Industry Strategist',
    company: 'AWS',
    relationship: 'Worked on different teams',
    date: 'October 2025',
    text: 'I worked with Adarsh for over 3 years at AWS, and he is tremendously talented. I saw firsthand how he developed and refined technical solutions and created an industry-leading point of view for AWS for implementation of Responsible AI throughout the generative AI application lifecycle. He consistently demonstrated foresight and technical depth, tailoring responsible AI practices to each client\'s SDLC and Agile phases to ensure practical and strategic impact. I\'d strongly recommend Adarsh for leadership roles that demand technical excellence and strategic thinking.',
    highlighted: true
  },
  {
    id: '6',
    name: 'Sanjay Rathi',
    title: 'Sr. Cloud Solution Architect | Advisory to CxOs',
    company: 'AWS',
    relationship: 'Worked on the same team',
    date: 'October 2025',
    text: 'As a fellow banking professional, working alongside Adarsh Naidu on data analytics initiatives was an outstanding experience. Adarsh possesses a remarkable ability to deliver solutions at an enterprise level—his skill in architecting and executing sophisticated analytics and AI platforms drove meaningful transformation across our organization. What truly set Adarsh apart was his leadership presence and deep understanding of both technology and business. He effectively collaborated with C-suite stakeholders, translating complex requirements into actionable strategies that aligned perfectly with business goals. Adarsh\'s visionary approach and commitment to quality uplifted the entire team, making each project both impactful and rewarding.',
    highlighted: true
  },
  {
    id: '7',
    name: 'Sudhir Kalidindi',
    title: 'Global Leader | Architect | Payments',
    company: 'AWS',
    relationship: 'Worked on different teams',
    date: 'October 2025',
    text: 'Working with Adarsh on banking projects especially the payment rail modernization program was a genuinely rewarding experience. He combines strong technical depth with a practical, forward-looking approach to solving real business challenges. Adarsh played a key role in shaping and delivering solutions that were reliable, scalable, and future-ready for modern banking. What really stood out was his curiosity, teamwork, and ability to bring out the best in everyone around him.',
    highlighted: false
  },
  {
    id: '8',
    name: 'Manuel Aragones',
    title: 'IT Consultant | Cloud Specialist',
    company: 'AWS',
    relationship: 'Worked on different teams',
    date: 'October 2025',
    text: 'I\'m proud to recommend Adarsh Naidu, whom I partnered with across multiple financial-services engagements while he served as an Enterprise Architect — Generative AI at AWS. From a TAM\'s perspective, Adarsh brings a rare blend of strategic architecture, hands-on engineering, and relentless customer focus. He helped design and deliver enterprise-scale, production-ready AI/ML solutions across South Florida, turning ambiguous business needs into scalable MLOps pipelines with positive measurable outcomes. Collaborative, technically gifted, and an excellent communicator, Adarsh would be a high-impact addition to any team tackling real-world AI at scale.',
    highlighted: true
  },
  {
    id: '9',
    name: 'Dunielquis Llaugert',
    title: 'Software Engineer',
    company: 'Assurant',
    relationship: 'Worked on the same team',
    date: 'May 2022',
    text: 'I had the opportunity of working with Adarsh on several projects when he was the Solution Architect for the Multifamily Housing Line of Business at Assurant. His guidance and depth knowledge of Azure architecture and services help us immensely. He was a great asset to our team, and I highly recommend him.',
    highlighted: false
  },
  {
    id: '10',
    name: 'Cory Mattson',
    title: 'AVP Principal Architect',
    company: 'LPL Financial',
    relationship: 'Was senior to Adarsh',
    date: 'April 2022',
    text: 'I had the pleasure of working with Adarsh on numerous projects while we both were at Assurant. He\'s not only a wonderful person but one of the best architects I\'ve ever worked with. I highly recommend him.',
    highlighted: false
  },
  {
    id: '11',
    name: 'Amilcar Arevalo',
    title: 'Sr Solution Architect',
    company: 'Assurant',
    relationship: 'Worked on the same team',
    date: 'April 2022',
    text: 'I had the opportunity to work with Adarsh at Assurant. He is an excellent Solution Architect with a wide and Indepth knowledge of cloud technologies and solutions. He also demonstrated great skills working and partnering with business groups while developing roadmap strategies. He was a great asset and contributor for the team, and it was a pleasure working with him.',
    highlighted: false
  },
  {
    id: '12',
    name: 'Milind Pansare',
    title: 'AI/ML Cybersecurity Lead',
    company: 'American Express',
    relationship: 'Worked on different teams',
    date: 'September 2018',
    text: 'Adarsh is exceptionally knowledgeable in the development and qualification of mission-critical applications. He always demonstrates terrific competence when engaging with customers and external business partners both at a deep technical level as well as a higher level in order to convey or discuss concepts. Its been my pleasure to work with Adarsh at American Express. As a team member or a leader, Adarsh earns my highest recommendation.',
    highlighted: false
  },
  {
    id: '13',
    name: 'Sameen Khan',
    title: 'Project Manager @ TMG Health',
    company: 'TMG Health',
    relationship: 'Was senior to Adarsh',
    date: 'July 2018',
    text: 'Adarsh\'s ability to juggle multiple projects was unlike any I\'ve seen before and made a dramatic difference in the productivity level of our team. As a leader Adarsh earns my highest recommendation.',
    highlighted: false
  },
  {
    id: '14',
    name: 'Ajit Dalal',
    title: 'Data and AI Leader',
    company: 'NIIT Technologies',
    relationship: 'Managed Adarsh directly',
    date: 'January 2015',
    text: 'Adarsh has a positive attitude, is enthusiastic and proactive in nature. He is a team player and was very organized. He is diligent and ensures that the job gets done. It was great to have him in my team at NIIT Technologies.',
    highlighted: false
  },
  {
    id: '15',
    name: 'AMIT REGE',
    title: 'Sr. Manager',
    company: 'L&T Infotech',
    relationship: 'Managed Adarsh directly',
    date: 'August 2012',
    text: 'Adarsh was part of my team and was responsible for several initiatives in the Enterprise Integration domain. Due to his sound background of Computer Science, he could relate to issues in the IT industry very well. He has superior communication skills and is a self starter, very diligent and committed professional on whom I could rely to achieve specific objectives. His excellent presentation skills, sets him apart.',
    highlighted: false
  }
];

// Helper function to get highlighted testimonials
export const getHighlightedTestimonials = () => {
  return testimonials.filter(t => t.highlighted);
};

// Helper function to get testimonials by company
export const getTestimonialsByCompany = (company: string) => {
  return testimonials.filter(t => t.company === company);
};
