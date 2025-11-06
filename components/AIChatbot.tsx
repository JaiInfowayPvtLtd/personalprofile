"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm an AI assistant here to help you learn about Adarsh Naidu's experience and expertise. Feel free to ask me anything!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Comprehensive RAG Knowledge base from webpage content and resume
  const knowledgeBase = {
    experience: {
      keywords: ["experience", "years", "how long", "background", "career", "work history", "roles", "positions"],
      response: "Adarsh Naidu has 18+ years of progressive experience across Fortune 500 organizations:\n\n• AWS (April 2022-Present): Principal Solution Architect - Vision/Roadmap Management, Modernizing cloud-native banking solutions, Generative AI, AI/ML & Data Management for Banking\n• Assurant (Feb 2020-March 2022): Director Solution Architect - Enterprise architecture strategy, multi-year technology roadmap, legacy modernization, vendor selection, built high-performance teams\n• American Express (July 2015-Feb 2020): Staff Architect (Director) - Site Reliability process Owner, COE program for upskilling, New card Product Launch Architect, Blockchain COE lead, ETL/ELT owner\n• Morgan Stanley (March 2012-Aug 2015): Platform Architect - End-to-end ETL pipeline, big data engineering, Middleware integration, BPM rules engine\n• TMG Health (Aug 2008-Feb 2012): Technology Architect - Started as developer, then Lead, then Manager for Medicare/Medicaid platform\n\nTotal Impact: $200M+ annual revenue, 50+ enterprise clients, 23 thought leadership events (2023-2025)"
    },
    education: {
      keywords: ["education", "degree", "university", "school", "studied", "wharton", "mba", "bachelor", "nit", "pune"],
      response: "Adarsh's educational background:\n\n• The Wharton School, Philadelphia, PA (IVY League): Chief Technology Officer (Jan 2023 - June 2024)\n• Pune University (Top 10 University in India): Masters of Business Administration in Information Systems (April 2005 - April 2007)\n• National Institute of Technology (Equivalent to IVY League in India): Bachelor of Engineering (April 2001 - April 2005)\n\nCertifications: TOGAF® 9.1 (Enterprise Architecture), AWS/Azure/GCP multi-cloud certifications, IEEE Senior Member\n\nContact: iitk.adarsh@gmail.com | Phone: 7249310440"
    },
    skills: {
      keywords: ["skills", "technologies", "tools", "expertise", "proficient", "know", "tech stack", "technical"],
      response: "Adarsh's comprehensive technical expertise:\n\n• AI/ML: LLMs, Bedrock, Vertex AI, RAG (LangChain, LlamaIndex), Multimodal, Agents, TensorFlow, SageMaker, Amazon Q, Replit, n8n, Kero, GraphRAG, PyTorch, Spark, Pandas, Matlab, SAS, EMR, Jupiter Notebook\n• DevOps: Git, Bitbucket, Docker, Kubernetes, Ansible, Jenkins\n• Cloud: AWS, Google GCP, Microsoft Azure, Serverless, Lambda/Azure Functions\n• OpenSource: MEAN/MERN, Angular, Node.js, React, MongoDB, CouchDB, Linux\n• Patterns: Microservices, Domain/Data/Model/Event/Test-driven, Clear Architecture, Layered/Tiered, Pub/Sub, Message-Oriented Middleware (MOM)\n• Blockchain: Hyperledger, Ethereum, Corda\n• Data: Snowflake, Databricks, Apache Iceberg, PySpark, Kafka, dbt, Data Warehouses, Lakehouses\n• Governance: Data Quality, Lineage, SR 11-7 Compliance, PII Management\n• Architecture: TOGAF, Enterprise Architecture, Multi-cloud integration"
    },
    achievements: {
      keywords: ["achievements", "accomplishments", "success", "delivered", "results", "impact", "outcomes", "value"],
      response: "Key Achievements & Business Impact:\n\n💰 FINANCIAL IMPACT:\n• $200M+ Annual Revenue Led (Banking segment)\n• $100M+ Business Value Delivered\n• $5M Annual Savings (Blockchain & Digital Payments)\n• $3M+ Revenue (Data Lake strategy services)\n\n🎯 SCALE & REACH:\n• 150+ AI/ML Use Cases deployed in production\n• 20,000+ Users enabled with data platforms\n• 5,000+ Global users (Digital payments)\n• 50+ Fortune 500 Enterprise clients\n• 10+ Data Lake customers\n\n⚡ OPERATIONAL EXCELLENCE:\n• 90% Reduction in cross-border settlement times\n• 60% Reduction in dispute resolution time\n• 50% Faster processing speed (Guidewire)\n• 40% Improved customer satisfaction\n• 35% Efficiency boost (Enterprise architecture)\n• 30% Cost reduction (Multiple projects)\n• 15% Cost savings (Blockchain trade finance)\n\n🏆 LEADERSHIP:\n• 23 Thought Leadership Events (2023-2025)\n• Founded Enterprise Architecture Practice at Assurant\n• Built high-performing teams across multiple organizations\n• Responsible AI framework adopted industry-wide"
    },
    dataStrategy: {
      keywords: ["data strategy", "architecture", "warehouse", "lakehouse", "governance", "platform", "pipeline", "etl"],
      response: "Adarsh builds comprehensive end-to-end data strategies:\n\n• Modern Data Warehouses: Enterprise-scale using Snowflake, Redshift\n• Data Lakehouses: Unified platforms with Delta Lake, Apache Iceberg, S3\n• Data Governance: Compliance, security, data quality frameworks\n• Data Pipelines: Real-time & batch ETL/ELT with PySpark, Kafka, EMR\n• Cloud Migration: Legacy to AWS/Azure/GCP transformation\n• Security & Compliance: PII management, SR 11-7, audit controls\n• Analytics & BI: Actionable insights with measurable ROI\n• DevOps & Automation: CI/CD, Infrastructure-as-Code\n\nAll solutions ensure data quality, compliance, and business value."
    },
    aws: {
      keywords: ["aws", "amazon", "cloud", "enterprise architect"],
      response: "At AWS (2021-Present), Adarsh serves as Enterprise Architect - Generative AI:\n\n• Led banking & financial services GenAI transformations\n• Developed industry-leading Responsible AI frameworks\n• Implemented 150+ AI use cases across enterprises\n• Enabled 20K+ users with AI platforms\n• Generated $20-40M annual value for clients\n• Specialized in cloud-native architectures for regulated industries\n• Built compliance-first AI solutions (SR 11-7, PII controls)\n• Architected RAG systems and LLM applications at scale"
    },
    banking: {
      keywords: ["banking", "financial", "fintech", "finance", "payment", "compliance"],
      response: "Deep banking & financial services expertise:\n\n• Payment Rail Modernization: Real-time processing systems\n• Dispute Management: 60% reduction in resolution time\n• AML/KYC Optimization: AI-powered compliance automation\n• Model Risk Compliance: SR 11-7 framework implementation\n• PII Management: Enterprise-grade data protection\n• Cloud Banking: Secure, scalable architectures\n• Regulatory Compliance: Audit-grade lineage and controls\n• AI in Banking: Responsible AI for financial institutions\n\nWorked with major banks including tier-1 institutions on critical transformations."
    },
    ai: {
      keywords: ["ai", "artificial intelligence", "machine learning", "ml", "genai", "generative", "llm", "rag"],
      response: "AI/ML & Generative AI expertise:\n\n• Generative AI: LLM applications, RAG architectures, prompt engineering\n• MLOps: End-to-end ML pipelines from dev to production\n• Responsible AI: Governance frameworks for ethical AI\n• Technologies: AWS SageMaker, Bedrock, OpenAI, LangChain, Hugging Face\n• Use Cases: 150+ deployed including chatbots, document analysis, code generation\n• Scale: 20K+ users, $20-40M annual value\n• Compliance: Model monitoring, bias detection, audit trails\n• Real Results: Production systems with measurable KPIs\n\nSpecializes in enterprise-scale, governed AI implementations."
    },
    testimonials: {
      keywords: ["testimonials", "recommendations", "references", "colleagues", "worked with"],
      response: "Adarsh has 15+ professional recommendations from colleagues at AWS, Assurant, American Express, and other organizations. Highlights:\n\n• 'Exceptional solution architect combining systems thinking with practical ML/GenAI implementation' - Siddharth Bhaskar, AWS\n• 'Transforms banking priorities into secure, compliant AI outcomes' - Gilberto Brito, AWS\n• 'Tremendously talented with technical excellence and strategic thinking' - Renee Lau, AWS\n• 'Outstanding ability to deliver enterprise-level analytics solutions' - Sanjay Rathi, AWS\n\nView all recommendations in the Testimonials section."
    },
    publications: {
      keywords: ["publications", "articles", "blog", "press", "writing", "published"],
      response: "Featured publications:\n\n1. 'How Does Cloud Enable the Transformation of Dispute Management in Banking?' - AWS Industries Blog (2024)\n2. 'Eight Game-Changing Products in Four Years Prove Digital Banking is Just Getting Started' - News Nation (2024)\n3. 'Data Architects Lead Banking's Digital Revolution' - Free Press Journal (June 2025)\n\nTopics: Cloud transformation, digital banking, data architecture, AI/ML in finance. 19+ total publications and 23 speaking events."
    },
    contact: {
      keywords: ["contact", "reach", "email", "connect", "hire", "consultation"],
      response: "Ready to discuss data strategy or AI transformation? You can reach Adarsh through:\n\n• Contact Form: Scroll to the Contact section at the bottom\n• Direct CTA: Click 'Get in Touch' button\n• LinkedIn: Find him through professional network\n\nIdeal for: Enterprise data architecture, AI/ML strategy, cloud transformation, governance frameworks, and Fortune 500 consulting."
    },
    certifications: {
      keywords: ["certifications", "certified", "credentials", "qualifications"],
      response: "Professional certifications:\n\n• TOGAF® 9.1 - Enterprise Architecture\n• AWS Certified - Multiple credentials\n• Azure Certified - Cloud solutions\n• GCP Certified - Google Cloud\n• IEEE Senior Member - Professional society\n• Wharton CTO Executive Education\n\nAll certifications maintain active status."
    },
    projects: {
      keywords: ["projects", "portfolio", "work", "case studies", "examples", "highlights"],
      response: "🌟 TOP 3 STAR PROJECTS:\n\n⭐ #1 Banking Segment Lead ($200M Revenue)\nTechnology owner for BankUnited, SoFi, ACI Worldwide, First Citizens Bank, Cardinal Finance, Victory Capital, Liberty Mutual, Park National Bank, and Robinhood. Built high-performing teams delivering transformative solutions to complex challenges.\n\n⭐ #2 Guidewire Global Platform Transformation\nArchitected end-to-end home platform strategy from business case through full migration. Results: 30% cost reduction, 50% faster processing, 40% improved customer satisfaction. Led vendor evaluation, team building, and zero-disruption data migration.\n\n⭐ #3 Digital Asset Payments Stablecoin System\nBuilt serverless blockchain payment solution on AWS enabling secure digital asset transactions with USDC and PYUSD integration. Results: 30% cost reduction, eliminated cross-border delays, $5M annual savings, 5,000+ global users.\n\nOTHER MAJOR PROJECTS:\n• Responsible AI Framework: Thought leadership at 23 events (2023-2025), developed AWS GenAI lifecycle implementation\n• Financial Services Data Lake: $3M+ revenue, 10+ customers, board-level presentations\n• Enterprise Architecture Practice: Founded at Assurant, 35% efficiency boost across 45+ apps, 70+ platforms\n• AmEx Product Launch: 8 innovative products in 4 years with market-leading digital experiences\n• Blockchain Payment & Trade Finance: 90% faster settlement, 15% cost reduction, $5M annual savings"
    },
  };

  const predefinedQuestions = [
    "What is Adarsh's experience?",
    "Show me top 3 projects",
    "What are his key skills?",
    "Who recommended him?",
    "What has he achieved?",
    "What's his AI/ML expertise?",
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for greetings
    if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
      return "Hello! I'm here to answer questions about Adarsh Naidu's professional background, expertise, and achievements. What would you like to know?";
    }

    // Specific person searches in recommendations
    const peopleMap: Record<string, string> = {
      'siddharth': "Siddharth Bhaskar (AWS) says: 'Adarsh is an exceptional solution architect who combines comprehensive systems thinking with practical implementation expertise in Machine Learning and Generative AI, enabling enterprises to progress from pilot programs to scaled, governed production systems with measurable KPI-driven results.'",
      'pradeep': "Pradeep Kumar Dhananjaya (AWS, Tech Lead) says: 'Adarsh has expertise in AI and banking, helping teams turn governance policy into real controls—managing PII, ensuring model risk compliance (SR 11-7), and improving AML and KYC processes. He streamlined data lake and mesh architectures with fine-grained access and audit-grade lineage.'",
      'jacob': "Jacob Lord (AWS, AI Sales Specialist) says: 'Adarsh worked with me on multiple AIML projects, and his ability to work effectively under pressure while maintaining attention to detail made him a reliable contributor to critical deliverables. He delivered high-quality solutions that exceeded client expectations.'",
      'gilberto': "Gilberto Brito Cordoves (AWS, Technical Account Manager) says: 'It has been outstanding working with Adarsh. He consistently transforms banking priorities into secure, compliant, and scalable AI outcomes. He aligned architecture with KPIs and delivered at scale (150+ AI use cases live, 20K+ users, $20-40M annual value) while meeting audit and risk standards.'",
      'renee': "Renee Lau (AWS, Principal Financial Services Strategist) says: 'Adarsh is tremendously talented. I saw firsthand how he developed and refined technical solutions and created an industry-leading point of view for AWS for implementation of Responsible AI throughout the generative AI application lifecycle. He demonstrated foresight and technical depth.'",
      'sanjay': "Sanjay Rathi (AWS, Sr. Cloud Solution Architect) says: 'Working with Adarsh on data analytics initiatives was outstanding. He possesses a remarkable ability to deliver solutions at an enterprise level—architecting and executing sophisticated analytics and AI platforms that drove meaningful transformation. His leadership and business understanding truly set him apart.'",
      'sudhir': "Sudhir Kalidindi (AWS) says: 'Working with Adarsh on banking projects especially the payment rail modernization program was genuinely rewarding. He combines strong technical depth with a practical, forward-looking approach to solving real business challenges. He delivered reliable, scalable, and future-ready solutions.'",
      'manuel': "Manuel Aragones (AWS, IT Consultant) says: 'Adarsh brings a rare blend of strategic architecture, hands-on engineering, and relentless customer focus. He helped design and deliver enterprise-scale, production-ready AI/ML solutions, turning ambiguous business needs into scalable MLOps pipelines with positive measurable outcomes.'",
      'cory': "Cory Mattson (LPL Financial, AVP Principal Architect) says: 'I had the pleasure of working with Adarsh at Assurant. He's not only a wonderful person but one of the best architects I've ever worked with. I highly recommend him.'",
      'milind': "Milind Pansare (American Express, AI/ML Cybersecurity Lead) says: 'Adarsh is exceptionally knowledgeable in developing mission-critical applications. He demonstrates terrific competence engaging with customers at both deep technical and high-level conceptual discussions. He earns my highest recommendation.'",
    };

    for (const [name, quote] of Object.entries(peopleMap)) {
      if (lowerMessage.includes(name)) {
        return quote;
      }
    }

    // Check for specific recommendation questions
    if (lowerMessage.includes('who recommended') || lowerMessage.includes('who said') || lowerMessage.includes('what do people say')) {
      return "Adarsh has 15+ recommendations from colleagues:\n\n• Siddharth Bhaskar (AWS) - Systems thinking with ML/GenAI expertise\n• Gilberto Brito (AWS) - Secure AI at scale, $20-40M value\n• Renee Lau (AWS) - Responsible AI frameworks\n• Sanjay Rathi (AWS) - Enterprise analytics transformation\n• Pradeep Kumar (AWS) - Banking AI & governance\n• Manuel Aragones (AWS) - Strategic architecture\n• Jacob Lord (AWS) - AIML project excellence\n• Sudhir Kalidindi (AWS) - Payment rail modernization\n• Cory Mattson (LPL) - One of the best architects\n• Milind Pansare (AmEx) - Mission-critical applications\n\nAsk about any specific person for their full recommendation!";
    }

    // Check knowledge base
    for (const value of Object.values(knowledgeBase)) {
      if (value.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return value.response;
      }
    }

    // Default response
    return "That's a great question! I can help with:\n• Experience & career history\n• Education & certifications\n• Technical skills & expertise\n• Achievements & impact\n• Data strategy capabilities\n• AWS role & projects\n• Banking expertise\n• AI/ML specialization\n• Recommendations (ask about specific people!)\n• Publications & articles\n\nWhat would you like to know?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate typing
    setIsTyping(true);

    // Get bot response after delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Light Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-executive-gold hover:bg-executive-gold/90 text-executive-dark rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Compact Chat Panel */}
      <div className={`fixed top-20 right-4 bottom-4 z-50 w-[380px] bg-executive-dark/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-executive-gold/30 flex flex-col transition-all duration-300 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-executive-gold/20 to-primary-500/20 p-4 rounded-t-2xl border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-executive-gold/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-executive-gold" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                <p className="text-xs text-white/60">Powered by RAG</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
              aria-label="Close chat"
            >
              <X size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[90%] rounded-xl p-3 ${
                  message.sender === "user"
                    ? "bg-executive-gold text-executive-dark"
                    : "bg-white/10 text-white"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/10 rounded-xl p-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-executive-gold rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-executive-gold rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-executive-gold rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div className="p-3 border-t border-white/10 bg-black/20">
          <p className="text-xs text-white/60 mb-2 font-semibold">Quick questions:</p>
          <div className="flex flex-wrap gap-1.5">
            {predefinedQuestions.slice(0, 4).map((question, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickQuestion(question)}
                className="text-xs px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/80 transition-all hover:border-executive-gold/50"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-3 border-t border-white/10 bg-black/30 rounded-b-2xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about Adarsh..."
              className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-executive-gold/50 text-sm"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-executive-gold hover:bg-executive-gold/90 text-executive-dark rounded-lg transition-all font-semibold"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
