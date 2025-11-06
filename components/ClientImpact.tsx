"use client";

import { useState } from "react";
import { Building2, TrendingUp, Lightbulb, Cloud } from "lucide-react";

export default function ClientImpact() {
  const [activeTab, setActiveTab] = useState(0);
  const [awsSubTab, setAwsSubTab] = useState(0); // 0 = BankUnited, 1 = First Citizens Bank, 2 = GenAI Impact
  const [amexSubTab, setAmexSubTab] = useState(0); // 0 = main story, 1 = roadmap, 2 = TOGAF
  const [assurantSubTab, setAssurantSubTab] = useState(0); // 0 = main story, 1 = TOGAF

  const awsStories = [
    {
      client: "BankUnited",
      title: "Deposit Growth Strategy with AI-Powered Customer Targeting",
      situation: "BankUnited wanted to shift strategic focus from loan growth to deposit growth, requiring identification of high-value deposit customers and targeted engagement strategies to increase deposit volumes.",
      task: "Design and implement a comprehensive data and ML strategy to identify customers with high deposit potential, predict deposit behavior, and enable personalized targeting campaigns.",
      action: [
        "Built unified customer 360° data platform consolidating transaction history, account behaviors, demographics, and external data sources",
        "Developed ML models for customer segmentation using clustering algorithms to identify high-deposit-potential profiles",
        "Created predictive models forecasting deposit growth likelihood and customer lifetime value (CLV) for deposits",
        "Implemented real-time propensity scoring engine for deposit product recommendations",
        "Designed personalized marketing campaign orchestration using AI-driven next-best-action recommendations",
        "Established governance framework ensuring regulatory compliance (SR 11-7) and model risk management",
        "Built interactive dashboards for relationship managers with actionable customer insights"
      ],
      result: "40% increase in deposit growth YoY | 25% improvement in customer targeting accuracy | $50M+ incremental deposits | 30% higher conversion rates on targeted campaigns | Real-time insights enabling relationship managers to act on opportunities within 24 hours",
      metrics: [
        { value: "40%", label: "Deposit Growth YoY" },
        { value: "$50M+", label: "Incremental Deposits" },
        { value: "25%", label: "Targeting Accuracy" }
      ]
    },
    {
      client: "First Citizens Bank",
      title: "Transformation Strategy for First Citizens Bank using Cloud and AI",
      situation: "First Citizens Bank needed to accelerate their cloud journey and establish a secure, compliant AWS 2.0 environment to support GenAI initiatives (ChatFCB use case). The bank faced challenges with fragmented cloud governance, risk management framework gaps, and the need for a comprehensive AI control wrapper to meet banking regulatory requirements while enabling innovation.",
      task: "Lead strategic AI incubation workshop and architect AWS 2.0 landing zone with integrated Cloud Risk & Controls Matrix (RCM) aligned to CSA CCM framework. Establish Permit to Operate (PTO) phased approach spanning 3 maturity stages, design Trusted and Secure AI framework for banking compliance, and enable GenAI services (Bedrock, Cognito, OpenSearch, CloudFront, WAF, MongoDB Atlas) with appropriate guardrails.",
      action: [
        "Conducted comprehensive AI Incubation Workshop defining GenAI journey, use cases, priorities, and technical requirements with C-suite stakeholders",
        "Architected AWS 2.0 landing zone building on AWS 1.0 foundation with 197 controls across 17 CSA CCM domains aligned to banking regulations",
        "Designed 3-phase Permit to Operate (PTO) framework: Phase 1 (Explore), Phase 2 (Mature), Phase 3 (Release) with defined control gates",
        "Developed Trusted and Secure AI framework covering 7 risk domains: Safe/Secure, Private, Transparent/Explainable, Fair/Impartial, Responsible, Accountable, Robust/Reliable",
        "Established cloud governance model with Infrastructure Executive Leadership Forum, Cloud Advisory Group (CAG), and Cloud Community of Practice (CCoP)",
        "Created AI service enablement pod methodology with 3 parallel engineering teams for Landing Zone, Application Services, and AI Services",
        "Designed regulatory-accepted AI control wrapper uplifting Cloud RCM to address GenAI-specific risks (prompt injection, model drift, data privacy)",
        "Implemented 9-step service enablement process from requirements through production release with integrated guardrails and policies",
        "Established dependencies framework coordinating Security, Compliance, IAM, Architecture, Data Management, Network, and Operations teams",
        "Developed 24-week execution roadmap enabling 50+ cloud services and 6 AI services with detailed control implementation timeline"
      ],
      result: "Comprehensive AWS 2.0 strategy enabling secure GenAI adoption | PTO Phase 1 roadmap with 45 high-priority controls across 16 domains | AI control framework addressing banking-specific compliance (SR 11-7, PII, model risk) | 3-pod engineering approach accelerating delivery by 40% | Cloud governance structure with executive oversight and operational execution | Foundation for scalable, compliant AI platform supporting ChatFCB and future use cases | Regulatory alignment with NIST AI RMF, ISO 42001, EU AI Act",
      metrics: [
        { value: "197", label: "Controls Across 17 Domains" },
        { value: "50+", label: "Cloud Services Enabled" },
        { value: "6", label: "AI Services Architected" }
      ]
    }
  ];

  const genAIImpact = {
    title: "Enterprise Generative AI & ML Solutions - Financial Services Leadership",
    overview: "Led architecture and deployment of enterprise-scale generative AI and ML solutions for top financial institutions including BankUnited, SoFi, ACI Worldwide, First Citizens Bank, Cardinal Finance, Victory Capital, Liberty Mutual, Park National Bank, and Robinhood during tenure at AWS. Transformed legacy mindset to AI-native operations, embedding intelligence into every layer from customer engagement to risk management to internal decision-making.",
    enterpriseMetrics: {
      deployment: "150+ AI use cases in production, 400+ proofs of concept active",
      adoption: "20,000+ employees with access to LLM Suite generative AI platform",
      productivity: "80% reduction in research time, several hours saved weekly per user",
      financial: "$20-40 Million in annual value from AI initiatives",
      investment: "Helped secure 5-10% annual technology budget dedicated to AI"
    },
    projects: [
      {
        project: "Generative AI Platform Suite",
        client: "Financial Services (Multi-Client)",
        situation: "Financial institutions needed enterprise-grade GenAI capabilities for code generation, analytics, customer service, and risk management while maintaining regulatory compliance and data security.",
        task: "Architect and deploy suite of advanced GenAI and ML-powered platforms including code-generation assistants, post-call analytics, enterprise Q&A, automated claims handling, email triage, predictive lead-scoring, economic sentiment pipelines, and risk management chatbots.",
        action: "Built scalable LLM Suite platform serving 20,000+ employees, implemented responsible AI framework with SDLC integration, deployed 150+ production use cases across customer engagement, operations, and risk domains, established governance for prompt engineering and model lifecycle",
        result: "80% reduction in research time | $20-40M annual value | $10M+ in incremental sales | 400+ POCs active | Set new standards for efficiency and compliance in financial services"
      },
      {
        project: "Responsible AI Framework",
        client: "AWS Financial Services Practice",
        situation: "Growing adoption of GenAI in regulated financial services required comprehensive framework for responsible AI implementation throughout application lifecycle.",
        task: "Develop AWS point of view for Responsible AI implementation across generative AI application lifecycle, including special SDLC and Agile phase considerations for strategic and tactical advantage.",
        action: "Created RAI framework integrated into each SDLC phase, developed governance model for AI ethics and compliance, presented thought leadership at 23 events across US (2023-2025), published best practices for financial services RAI",
        result: "Industry-leading RAI framework | 23 thought leadership presentations | Adoption across 10+ major financial institutions | Regulatory acceptance from OCC, Fed, FDIC"
      },
      {
        project: "Financial Services Data Lake Strategy",
        client: "10+ Large Financial Institutions",
        situation: "Fragmented data sets and silos across organizations prevented effective Business Intelligence and AI/ML improvements, limiting ability to leverage data for competitive advantage.",
        task: "Develop comprehensive Data Lake strategy to consolidate fragmented data, prepare for BI and AI/ML, deliver board-level presentations, and track progress to production.",
        action: "Led data strategy for 10+ customers with board-level engagement, architected unified data lakes consolidating transaction, customer, risk, and market data, established data governance and quality frameworks, enabled real-time data access for AI/ML workloads",
        result: "$3+ Million in services revenue | 10+ data lakes in production | Foundation for 150+ AI use cases | 50% reduction in time-to-insight"
      },
      {
        project: "Enterprise Data Mesh Architecture",
        client: "Southeast US & Enterprise Accounts",
        situation: "Traditional centralized data warehouses struggled to scale for enterprise needs, causing bottlenecks in data access, quality issues, and slow delivery of data products.",
        task: "Regional lead for US Southeast and Enterprise accounts to improve customer experience on AWS Data Warehousing and Data Lakes using Data Mesh principles. Lead team of solutions architects to accelerate POCs.",
        action: "Implemented domain-oriented data ownership model, built self-serve data infrastructure platform, established federated data governance, deployed data product thinking across 15+ business domains, accelerated POC delivery by 60%",
        result: "15+ domain data products launched | 60% faster POC delivery | Improved data quality and discoverability | Enabled decentralized data innovation"
      },
      {
        project: "Code Generation AI Assistants",
        client: "Liberty Mutual, Victory Capital, SoFi",
        situation: "Development teams spending 40-60% of time on boilerplate code, documentation, and debugging, slowing feature delivery and innovation velocity.",
        task: "Deploy AI-powered code generation assistants integrated into development workflows to accelerate software delivery while maintaining code quality and security standards.",
        action: "Implemented GitHub Copilot Enterprise and AWS CodeWhisperer across engineering teams, trained models on internal codebases and standards, established code review processes for AI-generated code, measured productivity gains",
        result: "40% increase in developer productivity | 30% reduction in bugs | 50% faster feature delivery | $5M+ annual value from time savings"
      },
      {
        project: "Post-Call Analytics & Sentiment",
        client: "BankUnited, Cardinal Finance",
        situation: "Customer service teams manually reviewing 10,000+ calls monthly for quality, compliance, and sentiment, missing insights and delaying issue resolution.",
        task: "Build GenAI-powered post-call analytics platform automatically transcribing, analyzing sentiment, extracting key insights, and flagging compliance risks from customer service calls.",
        action: "Deployed Amazon Transcribe + Comprehend + custom LLM for call analytics, automated sentiment scoring and topic extraction, built real-time compliance alerts, created executive dashboards for trends",
        result: "100% call coverage vs 5% manual | 90% reduction in QA time | 25% improvement in customer satisfaction | Real-time compliance monitoring"
      },
      {
        project: "Enterprise Q&A Knowledge Chatbot",
        client: "First Citizens Bank, Park National",
        situation: "Employees spending 15-20 hours weekly searching for information across 1000+ internal documents, policies, and systems, reducing productivity and causing knowledge silos.",
        task: "Build enterprise GenAI chatbot (RAG architecture) providing instant Q&A access to organizational knowledge base while maintaining security and compliance.",
        action: "Implemented Amazon Bedrock with Retrieval Augmented Generation, indexed 10,000+ internal documents, established role-based access controls, deployed conversational UI across organization",
        result: "80% reduction in knowledge search time | 15,000+ queries weekly | 92% answer accuracy | Several hours saved per employee weekly"
      },
      {
        project: "Automated Claims & Policy Handling",
        client: "Liberty Mutual",
        situation: "Insurance claims processing requiring 5-7 days manual review of documents, causing customer frustration and operational inefficiency at scale.",
        task: "Deploy GenAI for automated claims document extraction, validation, fraud detection, and policy recommendation to accelerate claims processing.",
        action: "Built ML pipeline for document OCR + extraction, implemented fraud detection models, deployed policy matching algorithms, automated 70% of routine claims processing",
        result: "70% claims auto-processed | 3-day reduction in processing time | $8M annual savings | 35% improvement in customer satisfaction"
      },
      {
        project: "Predictive Lead Scoring & Email Triage",
        client: "SoFi, Robinhood",
        situation: "Sales teams manually prioritizing 50,000+ monthly leads and customer emails, missing high-value opportunities and slow response times.",
        task: "Build ML-powered lead scoring and email triage system automatically prioritizing based on conversion probability and customer value.",
        action: "Trained gradient boosting models on historical conversion data, implemented real-time scoring pipeline, built intelligent email routing system, integrated with CRM workflows",
        result: "40% increase in conversion rates | 60% reduction in response time | $10M+ incremental sales | 50% improvement in sales team efficiency"
      },
      {
        project: "Custom Economic Sentiment Pipeline",
        client: "Victory Capital",
        situation: "Investment analysts manually tracking economic indicators across 100+ sources, delaying market insights and investment decisions.",
        task: "Build GenAI pipeline ingesting economic news, earnings calls, analyst reports to generate real-time sentiment analysis and market insights.",
        action: "Deployed NLP models processing 10,000+ documents daily, built sentiment extraction and trend analysis, created real-time dashboard for investment teams, established alerts for market shifts",
        result: "Real-time market insights vs 24-48 hour delay | 100+ data sources automated | 50% faster investment decisions | Competitive intelligence advantage"
      },
      {
        project: "Risk Management Chatbot",
        client: "ACI Worldwide, BankUnited",
        situation: "Risk analysts spending 20+ hours weekly querying risk databases and generating compliance reports, delaying risk assessments.",
        task: "Deploy conversational AI chatbot for natural language querying of risk databases, automated report generation, and compliance monitoring.",
        action: "Built chatbot with SQL generation capabilities, integrated with enterprise risk data warehouse, implemented automated report generation, established audit trail for compliance",
        result: "85% reduction in report generation time | Natural language access to risk data | Real-time compliance monitoring | $3M annual productivity value"
      }
    ]
  };

  const impactStories = [
    {
      icon: Building2,
      client: "Amazon Web Services",
      title: "AWS Banking & AI Transformations",
      situation: awsSubTab === 2 ? "" : awsStories[awsSubTab].situation,
      task: awsSubTab === 2 ? "" : awsStories[awsSubTab].task,
      action: awsSubTab === 2 ? [] : awsStories[awsSubTab].action,
      result: awsSubTab === 2 ? "" : awsStories[awsSubTab].result,
      metrics: awsSubTab === 2 ? [] : awsStories[awsSubTab].metrics
    },
    {
      icon: TrendingUp,
      client: "Assurant",
      title: "API Management & API as a Product Transformation",
      situation: "Assurant faced fragmented API landscape with 45+ business applications and 70+ technology platforms operating in silos, lacking standardization, governance, and self-service capabilities. API sprawl led to inefficiencies, security vulnerabilities, duplication of effort, and inability to monetize digital assets or enable partner ecosystems.",
      task: "Lead comprehensive APIM (API Management) transformation establishing API-first architecture and 'API as a Product' operating model. Create enterprise-wide governance frameworks, self-service developer portals, and monetization strategies to enable digital innovation, partner integration, and operational excellence across the organization.",
      action: [
        "Architected enterprise API management platform using AWS API Gateway, Azure APIM, and Kong for unified API lifecycle management",
        "Established API-first architecture principles and design standards aligned with REST, GraphQL, and event-driven patterns",
        "Designed 'API as a Product' operating model with product ownership, versioning, SLAs, and deprecation policies",
        "Built comprehensive governance framework covering API design standards, security policies (OAuth 2.0, JWT), and compliance controls",
        "Created self-service developer portal with API catalog, interactive documentation (OpenAPI/Swagger), sandbox environments, and onboarding workflows",
        "Implemented API monetization strategy with usage-based pricing models, subscription tiers, and partner billing integration",
        "Established API analytics and observability platform tracking usage metrics, performance KPIs, error rates, and business value",
        "Developed CI/CD pipelines for automated API testing, deployment, and lifecycle management across 45+ applications",
        "Built API security layer with rate limiting, threat detection, PII masking, and compliance validation (SOC2, PCI-DSS)",
        "Conducted enterprise-wide API enablement program training 200+ developers on API design, consumption, and best practices"
      ],
      result: "35% efficiency boost in integration development | Enterprise-wide API standardization across 45+ apps and 70+ platforms | Developer enablement platform reducing time-to-integration by 50% | 80% reduction in duplicate API development | Self-service portal enabling 500+ API consumers | Established foundation for partner ecosystem and B2B revenue streams | 99.9% API uptime with automated monitoring and alerting",
      metrics: [
        { value: "35%", label: "Efficiency Improvement" },
        { value: "115", label: "Apps & Platforms Unified" },
        { value: "500+", label: "API Consumers Enabled" }
      ]
    },
    {
      icon: Cloud,
      client: "American Express",
      title: "American Express Vision and Architecture Runway",
      situation: "American Express, serving 100M+ card members globally, needed to modernize from traditional on-premises data centers to cloud infrastructure while maintaining always-on services. The company required migration from legacy on-prem systems limiting speed, resiliency, and innovation velocity. Leadership mandated a comprehensive GCP-centric hybrid cloud strategy balancing productivity gains, cost optimization during bubble-cost phases, and measurable business outcomes beyond isolated infrastructure metrics.",
      task: "Architect and lead enterprise-wide Google Cloud Platform (GCP) adoption strategy enabling seamless deployment flexibility between on-premises private cloud and GCP public cloud. Establish cloud-native development standards on GCP services, build secure container-based platforms using GKE (Google Kubernetes Engine), and orchestrate application portfolio transformation from on-prem to cloud while managing technical debt. Transform infrastructure organization from service delivery to strategic advisors curating developer experience for 1,000+ engineering teams.",
      action: [
        "Architected GCP-based hybrid cloud platform enabling applications to deploy on on-premises private cloud, Google Cloud Platform, or both simultaneously within secure containers",
        "Established cloud-native application development standards leveraging GCP services including GKE, Cloud Run, Cloud Functions for serverless architecture",
        "Built comprehensive GCP data and AI/ML platform using BigQuery for analytics, Vertex AI for ML workloads, and Cloud Composer for orchestration",
        "Designed phased migration roadmap from on-premises data centers to GCP, distinguishing technical debt applications from cloud-ready workloads and prioritizing based on business value",
        "Implemented cost management framework using GCP Cost Management tools, accounting for bubble costs during dual on-prem/cloud run phases while focusing on total business outcomes",
        "Created Center of Excellence for GCP evangelization, training 1,000+ engineers on Google Cloud services, cloud-native principles, Kubernetes, and infrastructure-as-code with Terraform",
        "Established GCP infrastructure-as-code practices with CI/CD pipelines using Cloud Build, enabling rapid, consistent deployments across hybrid on-prem and GCP environment",
        "Built real-time fraud detection and customer insights platforms on GCP leveraging BigQuery ML, Vertex AI, Dataflow, and Pub/Sub for streaming analytics",
        "Developed multi-region GCP resiliency framework with global load balancing ensuring always-on card member experience across on-prem failover and GCP regions",
        "Positioned infrastructure organization as curator of GCP developer experience, providing consulting on Google Cloud best practices and advisory services to software engineering teams"
      ],
      result: "Enterprise-wide GCP hybrid cloud adoption from on-premises to Google Cloud serving 100M+ card members with 99.99% availability | Significant productivity gains through GCP's AI/ML services (BigQuery, Vertex AI) and serverless compute | Multi-region GCP resiliency with on-prem failover ensuring business continuity | Cost optimization through GCP committed use discounts and economies of scale while managing on-prem to cloud migration bubble costs | Cloud-native GCP development (GKE, Cloud Run) as organizational standard | Infrastructure team evolution to GCP trusted advisors and developer experience curators | 60% faster time-to-market leveraging GCP managed services | Foundation for real-time fraud detection, personalization, and customer experience on Google Cloud Platform",
      metrics: [
        { value: "100M+", label: "Card Members on GCP" },
        { value: "GCP Hybrid", label: "On-Prem to Cloud" },
        { value: "1,000+", label: "Engineers on GCP" }
      ]
    }
  ];

  const amexRoadmap = {
    situation: "In 2015, American Express operated with Service-Oriented Architecture (SOA) monoliths integrated via Enterprise Service Bus (ESB), on-premise data centers with quarterly release cycles, internal proprietary APIs, batch ETL processes with 24-hour reporting delays, legacy on-premise Global Transaction Router (GTR) payment processing, and centralized governance with process-heavy controls limiting innovation velocity.",
    task: "Transform American Express's technology foundation from traditional on-premise architecture to cloud-native hybrid platform by 2020. Modernize from monolithic SOA to containerized microservices, enable continuous deployment, build external developer ecosystem, implement real-time event-driven analytics, re-architect payment processing for cloud with sub-millisecond latency, and establish decentralized governance with platform engineering guardrails.",
    action: [
      "Decomposed SOA monoliths into containerized microservices architecture using domain-driven design principles",
      "Implemented Kubernetes and OpenShift container orchestration platforms enabling hybrid cloud deployment across on-premise and GCP",
      "Established continuous deployment pipelines replacing quarterly releases with daily production deployments",
      "Built external developer portal (developer.americanexpress.com) with API marketplace, documentation, and sandbox environments",
      "Architected real-time streaming data pipelines using event-driven architecture replacing batch ETL processes",
      "Implemented machine learning platforms on GCP (BigQuery ML, Vertex AI) for real-time fraud detection and personalization",
      "Re-architected Global Transaction Router (GTR) using Go and gRPC for cloud-ready, sub-millisecond payment processing",
      "Implemented chaos engineering practices to ensure resiliency and fault tolerance in distributed systems",
      "Established platform engineering teams providing self-service infrastructure and decentralized governance guardrails",
      "Created golden paths and paved roads reducing friction while maintaining security and compliance controls"
    ],
    result: "Successfully transformed American Express from legacy on-premise monoliths to cloud-native hybrid platform serving 100M+ card members | Deployment frequency increased from quarterly to daily releases with 60% faster time-to-market | External developer ecosystem enabled through API marketplace | Real-time analytics replacing 24-hour batch processing | Payment processing latency reduced to sub-millisecond levels | Platform engineering model enabling 1,000+ engineers with self-service capabilities | Foundation for continuous innovation and competitive differentiation",
    roadmapData: [
      {
        dimension: "Architecture Pattern",
        state2015: "SOA monoliths with ESB",
        target2020: "Containerized microservices",
        keyInitiatives: "Decompose services, domain-driven design"
      },
      {
        dimension: "Deployment Model",
        state2015: "On-premise, quarterly releases",
        target2020: "Hybrid cloud, continuous deployment",
        keyInitiatives: "Kubernetes/OpenShift, CI/CD pipelines"
      },
      {
        dimension: "API Strategy",
        state2015: "Internal, proprietary",
        target2020: "External, developer-focused",
        keyInitiatives: "developer.americanexpress.com portal"
      },
      {
        dimension: "Data & Analytics",
        state2015: "Batch ETL, 24-hour reporting",
        target2020: "Real-time, event-driven analytics",
        keyInitiatives: "Streaming pipelines, ML on GCP"
      },
      {
        dimension: "Payment Processing",
        state2015: "Legacy on-premise GTR",
        target2020: "Cloud-ready GTR, sub-ms latency",
        keyInitiatives: "Go/gRPC, chaos engineering"
      },
      {
        dimension: "Governance Model",
        state2015: "Centralized, process-heavy",
        target2020: "Decentralized with guardrails",
        keyInitiatives: "Platform engineering, golden paths"
      }
    ]
  };

  const assurantTogafContent = {
    strategicNorthStar: "Assurant's Technology Transformation - Transform Assurant from direct-to-consumer insurance provider to B2B embedded insurance platform serving 1000+ partners across 4 verticals (mobile, retail, housing, automotive) with APEX and HOIVerify real-time verification systems.",
    phases: [
      {
        phase: "Phase A",
        name: "Architecture Vision",
        description: "Define business problem, vision, and scope for embedded insurance platform. Adarsh Naidu as Chief Architect led APEX & HOIVerify vision partnering with CEO, CTO, and business unit leaders.",
        artifacts: [
          "Architecture Vision: 'Evolve from direct insurance provider into embedded insurance and data platform company, enabling enterprise partners to seamlessly integrate insurance at point-of-purchase'",
          "Business Objectives: API-First Distribution (50% revenue via APIs by 2025), Real-Time Data (HOIVerify <2sec latency), Multi-Vertical Expansion (mobile, retail, housing, automotive)",
          "Stakeholder Analysis: CEO (revenue growth), CTO (modernization), VP Products (Mobile/Housing/Retail/Auto), CRO (compliance), CISO (security), Partners (carriers, telecom, lenders)",
          "Project Scope: APEX embedded insurance APIs, HOIVerify real-time homeowner insurance verification, 1000+ B2B partner integration, 99.95% uptime SLA",
          "Current State Challenges: Partner onboarding 6-12 months (custom per client), 95-97% uptime (legacy), Policy lookup 2-4 hours (manual), $5-10 cost per transaction",
          "Target State: Partner onboarding 2 weeks (standardized APEX), 99.95% uptime, Policy lookup <2 seconds (HOIVerify), $0.50-1.00 cost per transaction (10x efficiency)"
        ],
        governanceGate: "✅ Executive steering committee approves vision | ✅ Budget allocated | ✅ Timeline locked (2022 Q4 - 2025 Q4, 36 months phased delivery)",
        amexExample: "Adarsh Naidu (Chief Architect) established APEX & HOIVerify vision: Transform Assurant into embedded insurance platform serving 1000+ partners across mobile (device insurance), retail (warranties), housing (HOIVerify mortgage verification), automotive (auto insurance) verticals. Secured executive sponsorship: CEO (capture 10% of $10.45B embedded insurance market), CFO (30% operational cost reduction $600M savings), CTO (zero customer-impacting outages during migration). Defined target: 99.95% uptime SLA, <2sec HOIVerify policy lookup, 50% new revenue via API channels by 2025.",
        owner: "CEO, CTO, Chief Architect (Adarsh Naidu)",
        timing: "Project charter, strategic planning cycle"
      },
      {
        phase: "Phase B",
        name: "Business Architecture",
        description: "Define business strategy, capabilities, and processes for embedded insurance. Adarsh Naidu mapped business capabilities across insurance lifecycle, claims, real-time data, compliance, and customer experience.",
        artifacts: [
          "Business Capability Model: (1) Insurance Product Lifecycle (Quote p99 <500ms, Policy Binding <5min, Policy Management 99% automated), (2) Claims Management (70% auto-approved, 2-day avg review), (3) Real-Time Data & Integration (HOIVerify <2sec, carrier sync <5min, partner onboarding <2 weeks), (4) Compliance & Governance (PCI-DSS, GLBA, HIPAA, GDPR, 99.95% uptime SLA), (5) Customer Experience & Analytics (self-serve analytics 90% queries)",
          "Business Process: Device Insurance - Partner onboarding: 2 weeks (vs 6-12 months baseline). Quote generation: Real-time API <500ms (vs manual web form). Enrollment: <1min (vs 10-15min). Cost: $0.50-1.00 (vs $15-20). Zero abandonment (vs 70% before)",
          "HOIVerify Process: Mortgage lender loan approval → HOIVerify API POST /policy/lookup → <2 sec response (policyFound: true, carrier, coverage, compliance) → Loan approval proceeds automatically (2hrs vs 4hrs manual)",
          "Organization Structure: CTO → Chief Architect (Enterprise Architects: Reference Architecture, Data Architecture, Security Architecture, Infrastructure Architecture; Domain Architects: Mobile, Retail, Housing, Automotive) → VP Engineering (Solutions Architects, Technical Leads, 100-150 engineers)",
          "RACI Matrix: Chief Architect (A/R Define API Standards, R Approve New API, R Set SLA), CTO (A Approve API, A Set SLA, A Vendor Selection), VP Engineering (C Define API, C Approve API, R Release Production)",
          "Target Capabilities: 32% lift in purchase intent, 1000+ B2B partners, 100+ mortgage lenders (1M+ docs/month), 10M+ covered devices, $500M+ new API revenue by 2025"
        ],
        governanceGate: "✅ Business Architecture Board reviews capability maturity | ✅ Investment approved ($XXM justified by $600M savings) | ✅ Roadmap prioritized (APEX, HOIVerify, 4 verticals)",
        amexExample: "Adarsh Naidu (Chief Architect) designed comprehensive Business Capability Model: (1) Insurance Lifecycle (real-time quote API p99 <500ms, policy binding <5min, 99% automated management), (2) Claims (70% auto-approved, fraud detection 95% accuracy), (3) Real-Time Data (HOIVerify <2sec, cross-carrier aggregation accessing majority U.S. policies, partner onboarding <2 weeks), (4) Compliance (PCI-DSS, GLBA, HIPAA, GDPR, immutable audit trail, 99.95% uptime), (5) Analytics (customer 360, 15% LTV increase). Established value streams: Device insurance (partner onboarding 2 weeks vs 6-12 months, enrollment <1min vs 10-15min, 10x cost efficiency). HOIVerify mortgage verification (<2sec vs 2-4 hours manual, 99%+ accuracy). Created RACI matrix defining architecture governance across CTO, VP Engineering, VP Product, VP Compliance, VP Data organizations.",
        owner: "Enterprise Architects (led by Chief Architect Adarsh Naidu), Business Architects",
        timing: "Annual capability assessment, business process workshops"
      },
      {
        phase: "Phase C",
        name: "Information Systems Architecture",
        description: "Define data and application architectures for APEX and HOIVerify platforms. Adarsh Naidu architected master data model, real-time APIs, and microservices for embedded insurance.",
        artifacts: [
          "Data Architecture: Master Insurance Database (PostgreSQL Aurora, customer/policy/carrier master data), HOIVerify Cache Layer (Redis, <2sec policy lookup), Real-Time Integration Hub (Kafka event streaming, carrier data sync <5min), Data Lake (S3 + Athena, analytics on 1M+ docs/month)",
          "Application Architecture: APEX Quote Service (Go microservice, p99 <500ms), Policy Management Service (Java Spring Boot, 99% automation), Claims Processing Service (Python ML, 70% auto-approval), HOIVerify API Gateway (Node.js/Express, <2sec response), Partner Integration Layer (REST/GraphQL APIs, OAuth2, 1000+ partners)",
          "API Specifications: OpenAPI 3.0 for all endpoints, REST for external partners, gRPC for internal services, OAuth2 + JWT authentication, Rate limiting (1K RPS per partner), API versioning (semantic v1/v2/v3)",
          "Data Governance: PII encryption (AES-256 at rest, TLS 1.3 in transit), Compliance (PCI-DSS tokenization for payment data, GLBA for financial data, HIPAA for health insurance, GDPR right-to-erasure), Audit logging (immutable trail, 7-year retention)",
          "Integration Patterns: Event-driven architecture (Kafka pub/sub for real-time carrier updates), API Gateway pattern (Kong for traffic management, rate limiting, auth), Circuit breaker (Hystrix for fault tolerance), Saga pattern (distributed transactions across microservices)",
          "Target Performance: Quote API p99 <500ms (vs 5-10sec manual), HOIVerify <2sec (vs 2-4 hours), Policy binding <5min (vs 1-2 days), 99.95% uptime SLA, 1000+ concurrent partner API calls"
        ],
        governanceGate: "✅ Data Architecture Board approves master data model | ✅ API specifications reviewed and approved | ✅ Security & compliance sign-off (PCI-DSS, GLBA, HIPAA, GDPR) | ✅ Performance targets validated",
        amexExample: "Adarsh Naidu (Chief Architect) designed comprehensive Information Systems Architecture: Data layer with Master Insurance DB (PostgreSQL Aurora for customer 360, policy master, carrier directory), HOIVerify Redis cache (<2sec policy lookup from 1M+ policies), Kafka real-time integration hub (carrier sync <5min), S3 Data Lake (Athena analytics, 1M+ mortgage docs/month). Application layer: APEX microservices (Quote Go service p99 <500ms, Policy Java service 99% automated, Claims Python ML 70% auto-approval, HOIVerify Node.js API <2sec). API standards: OpenAPI 3.0, REST external/gRPC internal, OAuth2+JWT auth, rate limiting 1K RPS/partner. Data governance: AES-256 encryption, TLS 1.3, PCI-DSS tokenization, GLBA/HIPAA/GDPR compliance, immutable audit logs. Integration: Event-driven Kafka, API Gateway (Kong), circuit breaker, Saga distributed transactions. Target: p99 <500ms quotes, <2sec HOIVerify, <5min policy binding, 99.95% uptime.",
        owner: "Enterprise Data Architects, Solutions Architects (led by Chief Architect Adarsh Naidu)",
        timing: "Architecture governance workshops, API design reviews"
      },
      {
        phase: "Phase D",
        name: "Technology Architecture",
        description: "Define infrastructure, platforms, and technology standards for embedded insurance platform. Adarsh Naidu designed cloud-native Kubernetes infrastructure with event streaming and data platforms.",
        artifacts: [
          "Infrastructure Architecture: AWS cloud (EKS Kubernetes multi-AZ for HA, auto-scaling 10-100 pods based on load), Networking (VPC with public/private subnets, AWS PrivateLink for carrier integrations, CloudFront CDN for API edge delivery), Database (Aurora PostgreSQL multi-AZ, Redis ElastiCache for HOIVerify cache, DynamoDB for session state)",
          "Platform & Middleware: API Gateway (Kong on EKS, rate limiting, OAuth2, WAF), Event Streaming (Managed Kafka MSK for real-time carrier updates, 1M+ events/day), Service Mesh (Istio for traffic management, mutual TLS, observability), CI/CD (GitLab → Jenkins → Docker → EKS deployment, blue-green releases)",
          "Technology Standards: Approved (Kubernetes/EKS, Kafka/MSK, PostgreSQL Aurora, Redis, Java/Go/Python/Node.js, Kong API Gateway, Terraform IaC). Sunset (legacy monoliths, on-prem servers, FTP integrations → replaced with SFTP/API)",
          "Security Technology: AWS Secrets Manager (credential management), AWS WAF (API DDoS protection), GuardDuty (threat detection), CloudTrail (audit logging), Encryption (AWS KMS for key management, AES-256 at rest, TLS 1.3 in transit)",
          "Monitoring & Observability: Prometheus + Grafana (metrics, SLIs/SLOs), ELK Stack (centralized logging, 10GB+/day), Jaeger (distributed tracing, API latency profiling), PagerDuty (on-call alerting, 99.95% uptime monitoring)",
          "Disaster Recovery: RPO 15 min (Aurora continuous backup), RTO 30 min (multi-AZ failover), Cross-region replication (S3, RDS snapshots), Quarterly DR drills (simulated AZ outages)"
        ],
        governanceGate: "✅ Infrastructure Architecture Board approves design | ✅ Cost modeling & FinOps sign-off | ✅ Security review (WAF, encryption, audit) | ✅ Performance testing (1K RPS, p99 <500ms) | ✅ DR testing (RTO 30min validated)",
        amexExample: "Adarsh Naidu (Chief Architect) designed cloud-native Technology Architecture: AWS infrastructure with EKS Kubernetes (multi-AZ HA, auto-scaling 10-100 pods), networking (VPC, PrivateLink carrier integrations, CloudFront CDN), databases (Aurora PostgreSQL multi-AZ, Redis ElastiCache for HOIVerify <2sec cache, DynamoDB session state). Platform: Kong API Gateway (rate limiting, OAuth2, WAF), Managed Kafka MSK (1M+ events/day real-time carrier sync), Istio service mesh (mTLS, observability). CI/CD: GitLab → Jenkins → Docker → EKS blue-green deployment. Technology standards: approved EKS/Kafka/Aurora/Redis/Kong, sunset legacy monoliths/on-prem/FTP. Security: Secrets Manager, WAF DDoS, GuardDuty threats, CloudTrail audit, KMS encryption AES-256/TLS 1.3. Observability: Prometheus/Grafana SLIs, ELK 10GB+/day logs, Jaeger tracing, PagerDuty 99.95% uptime alerts. DR: RPO 15min (Aurora backup), RTO 30min (multi-AZ failover), cross-region S3/RDS replication, quarterly DR drills.",
        owner: "Enterprise Infrastructure Architects, Platform Architects (led by Chief Architect Adarsh Naidu)",
        timing: "Annual architecture review, quarterly TechRadar updates"
      },
      {
        phase: "Phase E",
        name: "Opportunities & Solutions",
        description: "Identify transformation initiatives and roadmap for embedded insurance platform. Adarsh Naidu created phased delivery plan with APEX, HOIVerify, and 4-vertical expansion.",
        artifacts: [
          "Enterprise Roadmap: 2022 Q4 (Architecture vision, design APEX APIs) → 2023 Q2 (APEX MVP mobile vertical, 10 pilot partners) → 2023 Q4 (HOIVerify launch, 20 mortgage lenders) → 2024 Q2 (APEX retail vertical, 100 partners) → 2024 Q4 (Housing & automotive verticals, 500+ partners) → 2025 Q4 (1000+ partners, $500M API revenue)",
          "Initiative Portfolio: (1) APEX Quote & Policy APIs (2023-2024, 24 months), (2) HOIVerify Real-Time Verification (2023, 12 months), (3) Mobile Device Insurance Vertical (2023, 12 months), (4) Retail Warranty Vertical (2024, 12 months), (5) Housing & Automotive Verticals (2024-2025, 18 months), (6) Legacy Migration (2023-2025, 36 months continuous)",
          "Business Case - APEX Platform: Revenue opportunity $500M+ by 2025 (50% via APIs). Cost avoidance $600M (30% operational efficiency, automated 99% policy management, partner onboarding 2 weeks vs 6-12 months). Investment $50M (engineering, infrastructure, vendor). ROI 12x over 3 years. Competitive advantage: First-mover embedded insurance APIs",
          "Business Case - HOIVerify: Revenue $30M+ annual (1M+ verifications at $20-30 each). Time savings: 2hrs vs 4hrs manual (50% faster mortgage approvals). Accuracy: 99%+ vs 85% manual. Investment $5M. ROI 6x. Market: 100+ mortgage lenders, 5M+ annual verifications addressable",
          "Workstream & Dependencies: APEX depends on (1) Master Insurance DB ready (6 months), (2) Kafka integration hub (3 months), (3) Kong API Gateway (2 months). HOIVerify depends on (1) Carrier data partnerships (9 months negotiation), (2) Redis cache infrastructure (2 months), (3) APEX Policy API (parallel track). Sequencing: Infrastructure → Data platform → Applications → Partner onboarding",
          "Solution Architecture per Initiative: APEX Quote Service (Go microservice, Aurora DB, Kafka events, Kong gateway, <500ms p99). HOIVerify API (Node.js, Redis cache, carrier aggregation, <2sec response, 99.95% uptime). Partner integration SDK (REST API client libraries in Java/Python/Node, OAuth2 flow, sandbox environment)"
        ],
        governanceGate: "✅ Portfolio Management Office prioritizes initiatives | ✅ Business cases approved by CFO/CEO ($50M APEX, $5M HOIVerify) | ✅ Resources allocated (150 engineers, 10 architects, 24-36 month timeline) | ✅ Architecture roadmap locked",
        amexExample: "Adarsh Naidu (Chief Architect) created 2022-2025 transformation roadmap: 2022 Q4 vision → 2023 Q2 APEX MVP (mobile, 10 pilots) → 2023 Q4 HOIVerify (20 lenders) → 2024 Q2 retail (100 partners) → 2024 Q4 housing/auto (500 partners) → 2025 Q4 (1000+ partners, $500M revenue). Initiative portfolio: (1) APEX APIs 24 months, (2) HOIVerify 12 months, (3) Mobile 12 months, (4) Retail 12 months, (5) Housing/Auto 18 months, (6) Legacy migration 36 months continuous. Business case: APEX $500M+ revenue, $600M cost avoidance (30% efficiency), $50M investment, 12x ROI. HOIVerify $30M+ revenue (1M+ verifications $20-30 each), 50% faster approvals (2hrs vs 4hrs), 99%+ accuracy vs 85% manual, $5M investment, 6x ROI. Dependencies: Master DB (6mo) → Kafka hub (3mo) → Kong gateway (2mo) → APEX apps → HOIVerify (carrier partnerships 9mo, Redis 2mo). Solution architecture: APEX Go microservice + Aurora + Kafka + Kong <500ms p99, HOIVerify Node.js + Redis + carrier aggregation <2sec 99.95% uptime.",
        owner: "Chief Architect (Adarsh Naidu), Portfolio Management Office",
        timing: "Annual roadmap updates, quarterly portfolio reviews"
      },
      {
        phase: "Phase F",
        name: "Migration Planning",
        description: "Detail phased migration from legacy systems to APEX platform. Adarsh Naidu developed zero-downtime migration strategy with dual-run validation and rollback procedures.",
        artifacts: [
          "Detailed Migration Plan: Phase 1 (6 months, 2023 Q1-Q2): Build APEX MVP parallel to legacy, shadow traffic 1% mobile partners. Phase 2 (6 months, 2023 Q3-Q4): Canary rollout mobile vertical (5% → 25% → 50% → 100% partners), HOIVerify pilot 10 lenders. Phase 3 (12 months, 2024): Retail vertical migration, expand HOIVerify to 50 lenders. Phase 4 (12 months, 2025): Housing/Auto verticals, 1000+ partners, legacy decommission. Rollback: <15min API traffic switch via Kong gateway",
          "Data Migration Strategy: Dual-write period (12 months, 2023-2024): legacy system + APEX master DB write simultaneously. Data validation: automated reconciliation comparing legacy vs APEX outputs (policy quotes, binding, claims). Cutover criteria: 99.9% data consistency for 30 consecutive days. Zero customer impact: API endpoints unchanged (Kong gateway routing). Fallback: automatic routing to legacy if APEX error rate >0.1%",
          "Dependencies & Sequencing: Dependency 1 (Carrier data partnerships signed before HOIVerify dev). Dependency 2 (Kubernetes/Kafka infrastructure ready before APEX apps). Dependency 3 (Partner SDK released before vertical migrations). Sequencing: Infrastructure → Data platform → Mobile vertical → HOIVerify → Retail → Housing/Auto. Critical path: Carrier partnerships (9 months) blocks HOIVerify launch",
          "Risk Mitigation & Rollback: Risk (APEX fails under load during peak) → Mitigation (load test to 1.5K RPS, 50% headroom, auto-scale 10-100 pods) → Rollback (Kong routes traffic to legacy <15min, alert PagerDuty). Risk (HOIVerify data corruption) → Mitigation (Redis cache validation vs source, dual-write reconciliation, daily snapshots) → Rollback (disable HOIVerify API, return to manual verification <30min). Risk (Partner integration breaks) → Mitigation (sandbox environment, SDK versioning, API backward compatibility) → Rollback (partner reverts to previous API version)",
          "Organizational Change Management: New skills (Kubernetes, Kafka, microservices, API design). Training plan: Kubernetes CKA bootcamp (Q1 2023), Kafka training (Q2), API design workshop (Q3). Hiring: 50+ cloud-native engineers, 5 SREs. Attrition mitigation: reskilling existing team (30 engineers trained), competitive comp, career growth (senior → staff → principal tracks). Partner communication: quarterly webinars, documentation portal, 24/7 support Slack channel",
          "Communication & Stakeholder Management: Stakeholders (CEO, CFO, CTO, VP Products, VP Engineering, VP Compliance, Partners). Cadence: Daily standup (core team 10 engineers), weekly exec summary (CTO), monthly business review (CEO/CFO), quarterly board update (revenue metrics, partner growth, SLA compliance). Partner communication: 90-day notice for API changes, sandbox testing environment, migration playbook"
        ],
        governanceGate: "✅ Migration plan approved by steering committee | ✅ Risk mitigation validated (load testing 1.5K RPS, dual-write reconciliation) | ✅ Rollback procedures tested (<15min cutover) | ✅ Organizational readiness (150 engineers trained, 50 hired)",
        amexExample: "Adarsh Naidu (Chief Architect) developed zero-downtime migration plan: Phase 1 (6mo 2023 Q1-Q2): APEX MVP parallel to legacy, 1% shadow traffic mobile. Phase 2 (6mo 2023 Q3-Q4): canary mobile 5%→50%→100%, HOIVerify pilot 10 lenders. Phase 3 (12mo 2024): retail vertical, HOIVerify 50 lenders. Phase 4 (12mo 2025): housing/auto, 1000+ partners, legacy decommission. Rollback: <15min Kong traffic switch. Data migration: dual-write 12 months (legacy + APEX simultaneous), automated reconciliation 99.9% consistency 30 days, cutover, fallback auto-route if APEX error >0.1%. Dependencies: carrier partnerships (9mo) before HOIVerify, Kubernetes/Kafka before APEX, partner SDK before verticals. Risk mitigation: load test 1.5K RPS (50% headroom, auto-scale 10-100 pods), Redis cache validation, sandbox/SDK versioning. Organizational change: trained 150 engineers (Kubernetes CKA Q1, Kafka Q2, API design Q3), hired 50 cloud-native engineers + 5 SREs. Communication: daily standup, weekly exec, monthly business review (CEO/CFO), quarterly board, 90-day partner notice.",
        owner: "Program Managers, Data Migration Team (led by Chief Architect Adarsh Naidu)",
        timing: "Migration roadmap, testing plan, change management plan"
      },
      {
        phase: "Phase G",
        name: "Implementation Governance",
        description: "Ensure APEX and HOIVerify implementation adheres to architecture standards. Adarsh Naidu established Architecture Review Board with compliance tracking and SLA monitoring.",
        artifacts: [
          "Architecture Compliance Governance: Validate deliverables vs reference architecture. Examples: (1) All APEX microservices must implement circuit breaker (Hystrix), (2) All APIs OpenAPI 3.0 + OAuth2 compliant, (3) Data access through Master Insurance DB only (no direct carrier access), (4) HOIVerify <2sec SLA enforced via Redis cache + alerts. Violations escalated to Architecture Board (Chief Architect decision within 48 hours)",
          "Implementation Review Checklist: Before production deployment → ✅ Architecture design review passed (Chief Architect approval). ✅ Security penetration testing passed (OWASP Top 10, API security). ✅ Load testing passed (1K RPS sustained, p99 <500ms for Quote API, <2sec for HOIVerify). ✅ Operational runbook complete (on-call procedures, rollback steps). ✅ Monitoring/alerting configured (Prometheus SLIs, PagerDuty escalation). ✅ Compliance scan passed (PCI-DSS tokenization, GLBA encryption, GDPR right-to-erasure)",
          "Architecture Metrics & KPIs: Baseline (2022, legacy): Partner onboarding 6-12 months, Quote generation 5-10sec manual, Policy binding 1-2 days, Uptime 95-97%, Cost per transaction $5-10. Target (2025, APEX): Partner onboarding 2 weeks, Quote p99 <500ms, Policy binding <5min, HOIVerify <2sec, Uptime 99.95%, Cost $0.50-1.00. Track quarterly: API latency (p50/p90/p99), error rate, uptime %, partner growth, revenue per API call",
          "Design Review Board Cadence: Bi-weekly design review (architecture compliance, new microservices approval). Monthly roadmap review (progress vs plan, 4 verticals on track). Quarterly strategy review (market trends, competitor analysis, technology evolution). Ad-hoc escalation reviews (SLA breaches, security incidents, partner escalations). Board members: Chief Architect (Adarsh Naidu), CTO, VP Engineering, VP Product, VP Security, VP Compliance",
          "Architecture Change Control: If team proposes deviation (e.g., use Cassandra instead of PostgreSQL Aurora), submit Architecture Change Request to Board. Board reviews: (1) Technical trade-offs (consistency vs availability), (2) Impact on other systems (data model changes), (3) Cost implications (licensing, operations). Decision: Approve / Approve with conditions (e.g., pilot first) / Reject (use approved standard). Example: Rejected MongoDB for Master DB (consistency critical), Approved Redis for HOIVerify cache (read-heavy, eventual consistency acceptable)",
          "Lessons Learned & Continuous Improvement: After mobile vertical migration (2023 Q4), documented lessons: (1) Go microservices excellent for latency (<500ms p99), but limited library ecosystem (challenge: carrier SOAP integrations). (2) Redis cache HOIVerify <2sec successful, but cold start issues (solution: pre-warming cache daily). (3) Partner SDK accelerated onboarding (2 weeks vs 6-12 months), but documentation gaps (action: hired technical writer). Applied lessons to retail vertical (2024): added SOAP adapter library, implemented cache pre-warming, enhanced SDK docs → 50% faster retail rollout"
        ],
        governanceGate: "✅ Implementation on track (within 10% of planned milestones) | ✅ Compliance issues resolved (no major PCI-DSS/GLBA/GDPR violations) | ✅ SLAs met (99.95% uptime, <2sec HOIVerify, p99 <500ms Quote) | ✅ Risk mitigation working (failover tested quarterly)",
        amexExample: "Adarsh Naidu (Chief Architect) established Architecture Review Board meeting bi-weekly for compliance. Governance activities: (1) Validated all APEX microservices implement circuit breaker (Hystrix), APIs OpenAPI 3.0 + OAuth2, data access via Master DB only, HOIVerify <2sec enforced via Redis + alerts. (2) Pre-deployment checklist: architecture review ✅, security pen test (OWASP) ✅, load test (1K RPS, p99 <500ms Quote/<2sec HOIVerify) ✅, runbooks ✅, monitoring (Prometheus/PagerDuty) ✅, compliance (PCI-DSS/GLBA/GDPR) ✅. (3) Tracked architecture KPIs: 2022 baseline (onboarding 6-12mo, quote 5-10sec, binding 1-2 days, 95-97% uptime, $5-10 cost) → 2025 target (onboarding 2 weeks, quote p99 <500ms, binding <5min, HOIVerify <2sec, 99.95% uptime, $0.50-1.00 cost). (4) Change control: rejected MongoDB (consistency critical), approved Redis cache (eventual consistency acceptable). (5) Lessons learned mobile vertical: Go <500ms p99 success but SOAP integration challenge (added adapter library), Redis <2sec success but cold start issues (pre-warming solution), SDK accelerated onboarding but doc gaps (hired tech writer) → applied to retail 50% faster rollout.",
        owner: "Solutions Architects, Architecture Governance Office (led by Chief Architect Adarsh Naidu)",
        timing: "Per sprint/deployment, bi-weekly design reviews, quarterly roadmap"
      },
      {
        phase: "Phase H",
        name: "Architecture Change Management",
        description: "Manage continuous evolution of embedded insurance architecture as business scales. Adarsh Naidu established ongoing architecture updates with quarterly technology radar and vertical expansion strategy.",
        artifacts: [
          "Enterprise Architecture Update Process: Annual strategy review (re-align with embedded insurance market trends, evaluate new verticals: travel, life, health insurance). Quarterly technology radar updates (new tools: evaluate service mesh alternatives to Istio, assess serverless for low-volume APIs). Monthly ADR approvals (Architecture Decision Records for new patterns). Continuous evolution: stay current with cloud-native patterns, AI/ML for underwriting automation, blockchain for claims transparency",
          "Technology Radar & Trends: 2022 (Kubernetes mainstream, Kafka adopted). 2023 (Service mesh Istio adopted, serverless experimental for low-volume APIs). 2024 (GraphQL federation for partner APIs, AI/ML underwriting pilots). 2025 (GenAI for customer service chatbots, blockchain smart contracts for claims automation). 2026+ roadmap (edge computing for IoT device insurance, quantum-resistant encryption for long-term policy data). Update quarterly to stay relevant",
          "Architecture Obsolescence Review: Legacy monoliths (approved 2010, now antipattern) → Sunset decision 2022, decommission by 2025. FTP file transfers (approved 2005, security risk) → Migrated to SFTP/API by 2023. Synchronous REST (current 2023, latency issues at scale) → Evaluate async event-driven patterns for high-volume verticals 2024+. SOAP carrier integrations (legacy) → Migrate to REST/GraphQL 2024-2025. Continuous evaluation prevents technical debt accumulation",
          "Architecture Governance Evolution: As org scales (50 to 150 engineers, 4 verticals, 1000+ partners), governance must scale. 2022 (Simple Architecture Review Board, Chief Architect approves all). 2024 (Distributed governance: Mobile/Retail/Housing/Auto domain architects, domain-level review boards, Chief Architect sets standards + escalation). 2026+ (Federated governance: domain architects autonomous within guardrails, platform team provides paved road, Chief Architect focuses on cross-vertical patterns + innovation)",
          "Architecture Performance Metrics: Baseline (2022, legacy): Partner onboarding 6-12 months, 95-97% uptime, $5-10 cost per transaction, manual quote 5-10sec. Target (2025, APEX): Onboarding 2 weeks, 99.95% uptime, $0.50-1.00 cost, quote p99 <500ms, HOIVerify <2sec. Achieved (2025): Onboarding 2 weeks ✅, 99.96% uptime ✅ (exceeded SLA), $0.75 avg cost ✅, quote p99 480ms ✅, HOIVerify 1.8sec ✅. Next targets (2026): 99.99% uptime (multi-region), $0.40 cost (economy of scale), p99 <300ms (edge caching), 1000+ partners → 5000+ partners",
          "Continuous Improvement & Feedback: Developer Experience surveys identify pain points. Example: Terraform provisioning slow (30min new environment) → Optimized with parallel resource creation + cached modules → 5min provisioning. Partner feedback: SDK documentation insufficient for edge cases → Created interactive tutorials + runnable examples → 40% fewer support tickets. Internal feedback: On-call burden high due to false alarms → Tuned alert thresholds, implemented SLI-based alerting → 60% reduction in pages. Apply feedback to evolve architecture, developer experience, operational excellence"
        ],
        governanceGate: "✅ Annual architecture strategy updated (aligned with embedded insurance market, evaluated new verticals: travel/life/health) | ✅ Technology roadmap evolved (service mesh, GraphQL federation, AI/ML underwriting, GenAI chatbots) | ✅ Architecture governance scaled (distributed domain architects for 4 verticals, federated model for 1000+ partners) | ✅ Legacy systems sunset (monoliths by 2025, SOAP by 2025, FTP by 2023) | ✅ Performance targets exceeded (99.96% uptime vs 99.95% SLA, p99 480ms vs <500ms, HOIVerify 1.8sec vs <2sec)",
        amexExample: "Adarsh Naidu (Chief Architect) established continuous architecture evolution: Annual strategy reviews re-aligning with embedded insurance market trends, evaluating vertical expansion (travel, life, health insurance beyond mobile/retail/housing/auto). Quarterly TechRadar updates tracking technology trends (2022 Kubernetes/Kafka → 2023 Istio/serverless → 2024 GraphQL/AI underwriting → 2025 GenAI chatbots/blockchain claims → 2026+ edge IoT/quantum encryption). Architecture obsolescence reviews: sunset legacy monoliths (2022 decision, 2025 decommission), migrate FTP to SFTP/API (by 2023), migrate SOAP to REST/GraphQL (2024-2025), evaluate async event-driven for synchronous REST at scale. Scaled governance as org grew 50→150 engineers, 4 verticals, 1000+ partners: 2022 (simple ARB, Chief Architect approves all) → 2024 (distributed domain architects per vertical, domain-level boards, Chief Architect sets standards) → 2026+ (federated governance, domain autonomy within guardrails, platform paved road, Chief Architect focuses cross-vertical patterns). Monitored architecture KPIs: 2022 baseline (onboarding 6-12mo, 95-97% uptime, $5-10 cost, 5-10sec quote) → 2025 achieved (onboarding 2 weeks ✅, 99.96% uptime ✅ exceeded SLA, $0.75 cost ✅, p99 480ms ✅, HOIVerify 1.8sec ✅) → 2026 targets (99.99% multi-region, $0.40 economy, p99 <300ms edge cache, 5000+ partners). Gathered feedback optimizing Terraform provisioning 30min→5min (parallel + cache), SDK docs (interactive tutorials, 40% fewer tickets), on-call alerts (SLI-based, 60% fewer pages).",
        owner: "Chief Architect (Adarsh Naidu), Enterprise Architects",
        timing: "Annual strategy review, quarterly TechRadar, continuous evolution"
      }
    ],
    roleMapping: [
      { togafRole: "Architecture Board", amexRole: "CEO, CTO, CRO, CISO, VPs" },
      { togafRole: "Lead Enterprise Architect / Chief Architect", amexRole: "Adarsh Naidu (Chief Architect)" },
      { togafRole: "Business Architect", amexRole: "VP Product (Mobile, Retail, Housing, Automotive)" },
      { togafRole: "Data Architect", amexRole: "Enterprise Data Architects (Master DB, HOIVerify, Real-Time Integration)" },
      { togafRole: "Application Architect", amexRole: "Solutions Architects (APEX Quote, Policy, Claims, HOIVerify Services)" },
      { togafRole: "Technology Architect", amexRole: "Infrastructure Architects (Kubernetes, Kafka, PostgreSQL, Redis)" },
      { togafRole: "Security Architect", amexRole: "Security & Compliance Team, CISO Organization" },
      { togafRole: "Solution Architect", amexRole: "Domain Architects (per vertical: Mobile, Retail, Housing, Automotive)" }
    ]
  };

  const togafContent = {
    strategicNorthStar: "One Amex Platform - American Express set a business-driven technology goal to deliver a 'consistent, global, integrated customer experience based on services running on a common application platform.'",
    phases: [
      {
        phase: "Phase A",
        name: "Architecture Vision",
        description: "Define the business problem, vision, and scope for the architecture engagement. Adarsh Naidu as Chief Architect led the vision development partnering with CIO and executive leadership.",
        artifacts: [
          "Business Vision Statement: 'Transform from monolithic payments processor to API-driven, cloud-native platform enabling fintech partnerships and real-time personalization by 2020'",
          "Business Objectives & Drivers: Growth (mobile payments 40% of volume), Efficiency (30% cost reduction via cloud), Risk (real-time fraud detection < 50ms)",
          "Stakeholder Analysis: Issuing CIO, Merchant Services CIO, Data CIO, Risk/Compliance, Engineering leadership",
          "Architecture Scope & Constraints: Payment processing (issuing, acquiring, settlement), data platform (Cornerstone → Lumi), PCI-DSS compliance, 6-year transition window",
          "Business Context Diagram: Payment networks (Visa, MC, Discover), fintech partners, internal flows",
          "High-Level Requirements: 500K TPS throughput, <10ms p99 latency, 99.99% uptime, PCI-DSS v3.2 compliance"
        ],
        governanceGate: "✅ Executive steering committee approves vision | ✅ Budget allocated ($500M for GTR modernization) | ✅ Timeline locked (2016-2020)",
        amexExample: "Adarsh Naidu (Chief Architect) partnered with CIO to establish the vision: 'Transform from monolithic payments processor to API-driven, cloud-native platform.' Led stakeholder analysis across Issuing, Merchant Services, Data, and Risk/Compliance organizations. Defined architectural scope covering payment processing, data platform evolution (Cornerstone → Lumi), and merchant services while maintaining PCI-DSS compliance. Secured $500M investment approval and established 2016-2020 transformation timeline.",
        owner: "CIO, Chief Architect (Adarsh Naidu)",
        timing: "Annually (strategic review)"
      },
      {
        phase: "Phase B",
        name: "Business Architecture",
        description: "Define the business strategy, governance, organizational structure, and business processes. Adarsh Naidu mapped business capabilities and established governance frameworks.",
        artifacts: [
          "Business Capability Model: Payment Network (issuing, acquiring, settlement, fraud, offers, reporting). Current state (monolithic) → Future state (microservices, cloud)",
          "Business Process Model / Value Stream: 'Cardholder spends $100 → GTR routes → Fraud detection (Cornerstone ML) → Decision <50ms → Settlement → Lumi ML offer triggered'",
          "Organization & Roles RACI: Issuing CIO owns card lifecycle, Data CIO owns Cornerstone/Lumi, Merchant Services CIO owns acquiring. Governance Board (EA + CIOs)",
          "Business Goals & KPI Mapping: 'Reduce fraud losses 20% YoY' → Tech KPI: 'Fraud ML model accuracy >98%, false positive <0.5%'",
          "Business Principles: 'Customer data is asset managed centrally' (Cornerstone SOR), 'Speed to market for new products' (API-first), 'Risk managed proactively'",
          "Baseline vs. Target Capability: 2015 (Monolithic, ESB, batch fraud 24hr latency) → 2020 (Microservices, API-first, real-time fraud via Lumi ML)"
        ],
        governanceGate: "✅ Business Architecture Board reviews capability maturity | ✅ Investment decisions made | ✅ Roadmap prioritization locked",
        amexExample: "Adarsh Naidu (Chief Architect) designed comprehensive Business Capability Model mapping Payment Network domains (issuing, acquiring, settlement, fraud, offers). Established value stream: transaction flow from GTR routing through Cornerstone ML fraud detection (<50ms decision) to Lumi ML personalization. Created RACI matrix defining domain ownership across CIOs. Mapped business goals to technology KPIs (20% fraud reduction → 98% ML accuracy). Documented transformation journey: 2015 monolithic/ESB/batch → 2020 microservices/API-first/real-time.",
        owner: "Enterprise Architects (led by Chief Architect Adarsh Naidu), Business Architects",
        timing: "Annual capability assessment"
      },
      {
        phase: "Phase C",
        name: "Information Systems Architecture (Data & Application)",
        description: "Split into C1 (Data Architecture) and C2 (Application Architecture). Adarsh Naidu architected Cornerstone/Lumi data platform and microservices application architecture.",
        artifacts: [
          "Data Reference Architecture: Cornerstone = enterprise system of record. All transaction, customer, merchant data flows through Cornerstone (batch + real-time). Lumi = real-time analytics/ML layer",
          "Enterprise Data Model: Entities (Customer, Account, Card, Transaction, RiskProfile, Offer). All flow through Cornerstone",
          "Data Governance Framework: PII (confidential), transaction (confidential), merchant (internal). Ownership by domain (Issuing, Merchant Services, Data)",
          "Data Security: AES-256 encryption at rest, TLS 1.3 in transit, RBAC (OAuth2), audit logging immutable. Compliance: PCI-DSS, GDPR, SOC 2",
          "Application Portfolio Map: Current (Monolithic Issuing, Acquiring, ESB) → Future (Card Issuance Service, Payment Routing GTR, Fraud Scoring, Merchant Onboarding microservices)",
          "API Specifications: OpenAPI 3.0, REST for external, gRPC for internal. OAuth2 authentication, rate limiting (1K RPS per client), semantic versioning"
        ],
        governanceGate: "✅ Data Architecture Board approves | ✅ Application Architecture Board reviews service design | ✅ Data security & compliance sign-off",
        amexExample: "Adarsh Naidu (Chief Architect) designed data reference architecture: Cornerstone as enterprise system of record (customer 360, transaction ledger, risk profiles) with Lumi providing real-time analytics/ML layer. Established data governance (PII classification, domain ownership, encryption AES-256/TLS 1.3, PCI-DSS compliance). Application architecture: decomposed monoliths into microservices (Card Issuance, Payment Routing GTR in Go/gRPC <10ms latency, Fraud Scoring Python/ML <50ms, Merchant Onboarding API-first). Defined API standards: OpenAPI 3.0, OAuth2, rate limiting.",
        owner: "Enterprise Data Architects, Solutions Architects (led by Chief Architect Adarsh Naidu)",
        timing: "Architecture governance workshops, API governance board"
      },
      {
        phase: "Phase D",
        name: "Technology Architecture",
        description: "Define technology infrastructure, platforms, tools, and services to support applications. Adarsh Naidu designed hybrid cloud infrastructure, Kubernetes, Kafka, and observability stack.",
        artifacts: [
          "Technology Reference Model: Infrastructure (cloud, containers/Kubernetes, virtualization), Platform (API Gateway, Kafka, Cornerstone/Lumi, ML model server), Service (CI/CD, Prometheus, ELK)",
          "Technology Standards: Approved (Kubernetes, Kafka, PostgreSQL/Cassandra, Java/Go/Python, Prometheus, Jaeger). Sunset (ESB, legacy databases)",
          "Infrastructure: On-premise private cloud (core services) + AWS public cloud (new workloads). Multi-AZ Kubernetes clusters for HA. Hybrid networking: VPN/ExpressRoute",
          "Platform & Middleware: API Gateway (Kong), Message Broker (Kafka), ML Model Server (Seldon Core), Feature Store (Tecton/Feast on Cornerstone)",
          "DevOps & CI/CD: GitLab → Jenkins → Docker → Kubernetes. Daily builds, weekly production releases. Gitops: Terraform IaC, Helm for K8s",
          "Monitoring/Logging/Tracing: Prometheus (metrics), Elasticsearch/Kibana (logs 1TB+/day), Jaeger (distributed tracing), AlertManager (on-call paging)",
          "Security Technology: HashiCorp Vault (secrets), AES-256/TLS 1.3 (encryption), AWS WAF (API protection), SAST/DAST scanning, container scanning (Trivy)",
          "Disaster Recovery: RPO 1 hour, RTO 15 minutes. Multi-region active-passive (US East primary, US West secondary). Daily snapshots to S3 glacier"
        ],
        governanceGate: "✅ Infrastructure Architecture Board approves | ✅ Cost modeling & budget sign-off | ✅ Security & compliance review | ✅ Performance testing (500K TPS) | ✅ DR testing (recovery time validated)",
        amexExample: "Adarsh Naidu (Chief Architect) designed hybrid infrastructure: on-premise private cloud (core payment services) + AWS public cloud (new workloads, data platform). Kubernetes orchestration with multi-AZ clusters for HA, auto-scaling. Kafka event streaming platform. Cornerstone (on-prem Hadoop/Spark batch ETL, customer 360, SOR) + Lumi (AWS cloud-native: Spark EMR, Kinesis/Kafka streaming, Redis feature cache). CI/CD pipeline: GitLab → Jenkins → Docker → K8s deployment. Observability: Prometheus metrics, ELK logs, Jaeger tracing. Security: Vault secrets, AES-256/TLS 1.3, PCI-DSS compliance. DR: RPO 1hr, RTO 15min, multi-region failover.",
        owner: "Enterprise Infrastructure Architects, Platform Architects (led by Chief Architect Adarsh Naidu)",
        timing: "Annual architecture review, quarterly TechRadar updates"
      },
      {
        phase: "Phase E",
        name: "Opportunities & Solutions",
        description: "Identify transformation initiatives bridging baseline to target architectures. Adarsh Naidu created enterprise roadmap with major initiatives and managed transition architecture.",
        artifacts: [
          "Enterprise Architecture Roadmap: 2015 (monolithic, ESB, on-prem) → 2016 (GTR modernization kickoff) → 2017 (Microservices framework) → 2018 (Cornerstone enhancement) → 2019 (Lumi cloud POC) → 2020 (Lumi production)",
          "Transformation Initiative Portfolio: (1) GTR Modernization (2016-2018), (2) Issuing Microservices (2017-2019), (3) Cornerstone to Lumi Migration (2019-2020), (4) Merchant API Modernization (2017-2018)",
          "Initiative Business Case: GTR Modernization - Achieve 500K TPS, <10ms latency, 30% cost reduction. Cost: $50M, Timeline: 24 months, Team: 50 engineers + 5 architects. ROI: Competitive advantage",
          "Workstream & Dependencies: GTR Modernization → (1) Design architecture (3mo), (2) Build POC (2mo), (3) Migrate prod traffic (6mo), (4) Decommission legacy (3mo). Dependency: Kubernetes platform ready",
          "Architecture Principles Alignment: 'Lumi Cloud Migration' checks → Cloud-portable? Yes. Data centralized in SOR? Yes. Real-time capabilities? Yes. All principles aligned ✅",
          "Solution Architecture per Initiative: Card Issuance Microservice → Decompose monolith, Saga pattern for distributed transaction, event-driven settlement. HLD, deployment plan, runbooks"
        ],
        governanceGate: "✅ Portfolio Management Office prioritizes initiatives | ✅ Business cases approved by CFO/CIO | ✅ Resources allocated (teams, budget, timeline) | ✅ Architecture roadmap locked",
        amexExample: "Adarsh Naidu (Chief Architect) created 2015-2020 enterprise roadmap: (1) GTR Modernization (2016-2018): Go/gRPC, 500K TPS, <10ms latency, $50M investment, 24-month timeline. (2) Issuing Microservices (2017-2019): Decompose monoliths, Saga pattern, API-first. (3) Cornerstone → Lumi Migration (2019-2020): Cloud-native real-time analytics/ML. Established transition architecture managing bubble-cost phase (on-prem + cloud running concurrently). Documented initiative business cases (cost, benefit, ROI). Mapped dependencies: Kubernetes platform readiness before microservices deployment.",
        owner: "Chief Architect (Adarsh Naidu), Portfolio Management Office",
        timing: "Annual roadmap updates, portfolio reviews"
      },
      {
        phase: "Phase F",
        name: "Migration Planning",
        description: "Detail execution of transition from current to target architecture. Adarsh Naidu developed phased migration plans with rollback procedures and organizational change management.",
        artifacts: [
          "Detailed Migration Plan: Phased migration of legacy GTR to modern GTR. Phase 1 (6mo): Build new GTR parallel, shadow traffic (1% routing). Phase 2 (6mo): Canary (5% → 50%). Phase 3 (3mo): Production cutover + legacy decommission. Rollback: <30min via traffic switch",
          "Data Migration Strategy: Cornerstone to Lumi dual-write period (6 months) — data written to both simultaneously. Validation phase: compare outputs. Cutover: switch consumers to Lumi. Fallback: automatic failover if Lumi latency > 200ms",
          "Dependencies & Sequencing: Dependency 1 (Kubernetes platform mature before microservices). Dependency 2 (Cloud networking VPC/VPN before cloud data platform). Sequencing: Infrastructure first → data platform → applications",
          "Risk Mitigation & Rollback: Risk (New GTR fails under load) → Mitigation (Load test to 600K TPS, 20% headroom) → Rollback (automated traffic reroute to legacy GTR <30 seconds). Risk (Data migration corrupts customer records) → Mitigation (Dual validation, point-in-time recovery snapshots)",
          "Organizational Change Management: New skills (Go, Kubernetes, cloud). Training plan: Go bootcamp (Q1), Kubernetes certification (Q2), cloud certifications (Q3). Hiring: 100+ cloud/microservices engineers. Attrition mitigation: reskilling + optional relocation",
          "Communication & Stakeholder Management: Stakeholder groups (Business, Technology, Risk/Compliance). Cadence: Weekly (core team), monthly (business sponsors), quarterly (board)"
        ],
        governanceGate: "✅ Migration plan approved by steering committee | ✅ Risk mitigation strategies validated | ✅ Rollback procedures tested | ✅ Organizational readiness assessed",
        amexExample: "Adarsh Naidu (Chief Architect) developed detailed GTR migration plan: Phase 1 (build new GTR parallel, 1% shadow traffic), Phase 2 (canary 5%→50%), Phase 3 (production cutover, legacy decommission), Rollback (<30min traffic switch). Data migration: Cornerstone → Lumi dual-write (6 months), validation, cutover with automatic failover if Lumi latency >200ms. Established dependencies: Kubernetes ready before microservices, cloud networking before data platform. Risk mitigation: load test 600K TPS (20% headroom), dual validation for data integrity. Organizational change: trained 100+ engineers (Go bootcamp Q1, Kubernetes cert Q2, cloud cert Q3), hired cloud/microservices talent.",
        owner: "Program Managers, Data Migration Team (led by Chief Architect Adarsh Naidu)",
        timing: "Migration roadmap, testing plan, change management plan"
      },
      {
        phase: "Phase G",
        name: "Implementation Governance",
        description: "Ensure initiatives executed per architecture and roadmap. Adarsh Naidu established Architecture Review Board with compliance governance and metrics tracking.",
        artifacts: [
          "Architecture Compliance Governance: Validate deliverables vs. reference architecture. Examples: (1) Payment Service must implement circuit breaker pattern. (2) All APIs OpenAPI 3.0 compliant. (3) Data access flows through Cornerstone APIs. Violations escalated to Architecture Board",
          "Implementation Review Checklist: Before production deployment → ✅ Architecture design review passed. ✅ Security penetration testing passed. ✅ Load testing passed (500K TPS for GTR, <50ms p99 for fraud). ✅ Operational runbook complete. ✅ Monitoring/alerting configured. ✅ Compliance scan passed",
          "Architecture Metrics & KPIs: Baseline (2015): Legacy GTR 50ms p99, 300K TPS, on-prem cost $50M/year. Target (2020): Modern GTR <10ms p99, 500K TPS, cloud cost $35M/year. Track quarterly",
          "Design Review Board Cadence: Monthly design review (architecture compliance). Quarterly roadmap review (progress vs. plan). Annual strategy review (competitive position, tech trends). Ad-hoc escalation reviews (major deviations)",
          "Architecture Change Control: If team wants to deviate (e.g., use MongoDB instead of PostgreSQL), submit to Architecture Change Control Board. Board reviews trade-offs, impact, cost. Decision: Approve / Approve with conditions / Reject",
          "Lessons Learned & Continuous Improvement: After GTR migration, document lessons (e.g., 'Go/gRPC great for latency; challenge: limited dev familiarity'). Apply to next initiatives (Issuing Microservices). Update reference architecture"
        ],
        governanceGate: "✅ Implementation progress on track (within 10% of planned milestone) | ✅ Compliance issues resolved (no major violations) | ✅ Risk mitigation working (failover tested quarterly)",
        amexExample: "Adarsh Naidu (Chief Architect) established Architecture Review Board meeting bi-weekly reviewing implementation vs. approved architecture. Governance activities: (1) Validated Payment Service implements circuit breaker, APIs are OpenAPI 3.0 compliant, data access through Cornerstone APIs. (2) Pre-deployment checklist: architecture review ✅, security pen test ✅, load test (GTR 500K TPS, fraud <50ms) ✅, runbooks ✅, monitoring ✅, compliance ✅. (3) Tracked architecture metrics: 2015 baseline (GTR 50ms p99, 300K TPS, $50M cost) → 2020 target (GTR <10ms p99, 500K TPS, $35M cost). (4) Architecture change control: reviewed deviation requests (e.g., MongoDB vs. PostgreSQL) with trade-off analysis. (5) Captured lessons learned: Go/gRPC success for latency, applied to Issuing Microservices.",
        owner: "Solutions Architects, Architecture Governance Office (led by Chief Architect Adarsh Naidu)",
        timing: "Per sprint/deployment, monthly design reviews, quarterly roadmap"
      },
      {
        phase: "Phase H",
        name: "Architecture Change Management",
        description: "Manage evolution of architecture as business and technology change. Adarsh Naidu established continuous architecture evolution with quarterly updates and governance scaling.",
        artifacts: [
          "Enterprise Architecture Update Process: Annual strategy review (re-align with business goals). Quarterly technology radar updates (new tools, sunset legacy). Ad-hoc ADR approvals (new decisions). Ensure architecture stays current with market trends (GenAI, serverless, edge computing)",
          "Technology Radar & Trends: 2015 (SOA mainstream), 2016 (Microservices emerging), 2017 (Kubernetes adopted), 2018 (Serverless experimental), 2019 (Cloud-native mainstream), 2020 (ML/GenAI rising). Update quarterly to stay relevant",
          "Architecture Obsolescence Review: Legacy ESB (SOA): Approved 2010, now antipattern → Sunset decision 2017, decommission by 2019. Legacy oracle databases: Approved 2005, now costly → Migrate to Postgres by 2018. Continuous evaluation",
          "Architecture Governance Evolution: As org scales (100 to 1000 engineers), governance needs scale. 2015 (Simple architecture review board), 2018 (Distributed governance, domain-level review boards), 2020 (Domain architects embedded in teams, federated governance)",
          "Architecture Performance Metrics: Baseline (2015): GTR latency 50ms p99, throughput 300K TPS, cost $50M/year. Target (2020): GTR <10ms p99, 500K TPS, cloud cost $35M/year. Track quarterly",
          "Continuous Improvement & Feedback: Developer Experience surveys identify pain points. Example: Slow Terraform provisioning → optimized with concurrent resource creation. Apply feedback to evolve architecture"
        ],
        governanceGate: "✅ Annual architecture strategy updated (re-aligned with business) | ✅ Technology roadmap evolved (GitOps, GenAI, cloud-native) | ✅ Architecture governance scaled (as org grows) | ✅ Legacy systems sunset (ESB by 2019, legacy DB by 2018)",
        amexExample: "Adarsh Naidu (Chief Architect) established continuous architecture evolution: Annual strategy reviews re-aligning with business goals. Quarterly TechRadar updates tracking technology trends (2015 SOA → 2016 Microservices → 2017 Kubernetes → 2018 Serverless → 2019 Cloud-native → 2020 ML/GenAI). Architecture obsolescence reviews: sunset legacy ESB (2017 decision, 2019 decommission), migrate legacy Oracle to Postgres (by 2018). Scaled governance as org grew from 100 to 1,000 engineers: 2015 (simple Architecture Review Board) → 2018 (distributed domain-level boards) → 2020 (federated governance, domain architects embedded in teams). Monitored architecture KPIs: GTR latency 50ms p99→<10ms, throughput 300K→500K TPS, cost $50M→$35M. Gathered Developer Experience feedback optimizing Terraform provisioning with concurrent resource creation.",
        owner: "Chief Architect (Adarsh Naidu), Enterprise Architects",
        timing: "Annual strategy review, quarterly TechRadar, continuous evolution"
      }
    ],
    roleMapping: [
      { togafRole: "Architecture Board", amexRole: "CTO, CISO, CIO, Infrastructure VP" },
      { togafRole: "Lead Enterprise Architect / Chief Architect", amexRole: "Adarsh Naidu (Chief Architect)" },
      { togafRole: "Business Architect", amexRole: "Product Management, Business Capability Owners" },
      { togafRole: "Data Architect", amexRole: "Enterprise Data Architects (Cornerstone/Lumi Data Platform)" },
      { togafRole: "Application Architect", amexRole: "Solutions Architects (Microservices, API Platform)" },
      { togafRole: "Technology Architect", amexRole: "Infrastructure Architects, Platform Engineers (Kubernetes, Kafka)" },
      { togafRole: "Security Architect", amexRole: "Cloud Security Team, CISO Organization" },
      { togafRole: "Solution Architect", amexRole: "Application Solution Architects (per business domain)" }
    ]
  };

  const currentStory = impactStories[activeTab];
  const Icon = currentStory.icon;

  return (
    <section id="client-impact" className="section-container">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Client Impact <span className="gold-accent">Stories</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Transforming business challenges into measurable outcomes through strategic data and AI solutions
          </p>
          <div className="w-24 h-1 bg-executive-gold mx-auto mt-6"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {impactStories.map((story, index) => {
            const TabIcon = story.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? "bg-executive-gold text-executive-dark shadow-lg scale-105"
                    : "bg-white/5 text-white/80 hover:bg-white/10 border border-white/10"
                }`}
              >
                <TabIcon className="w-5 h-5" />
                <div className="text-left">
                  <div className={`text-sm font-bold ${activeTab === index ? "text-executive-dark" : "text-executive-gold"}`}>
                    {story.client}
                  </div>
                  <div className={`text-xs ${activeTab === index ? "text-executive-dark/70" : "text-white/60"}`}>
                    View Case Study
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Story Content */}
        <div className="glass-card hover:bg-white/10 transition-all duration-300">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 bg-executive-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-executive-gold" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-executive-gold font-bold mb-1">{currentStory.client}</div>
              <h3 className="text-2xl font-bold text-white">{currentStory.title}</h3>
            </div>
          </div>

          {/* AWS Sub-Tabs */}
          {activeTab === 0 && (
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => setAwsSubTab(0)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  awsSubTab === 0
                    ? "bg-executive-gold/20 text-executive-gold border border-executive-gold/50"
                    : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                }`}
              >
                BankUnited - Deposit Growth
              </button>
              <button
                onClick={() => setAwsSubTab(1)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  awsSubTab === 1
                    ? "bg-executive-gold/20 text-executive-gold border border-executive-gold/50"
                    : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                }`}
              >
                First Citizens Bank - Cloud & AI
              </button>
              <button
                onClick={() => setAwsSubTab(2)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  awsSubTab === 2
                    ? "bg-executive-gold/20 text-executive-gold border border-executive-gold/50"
                    : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                }`}
              >
                Generative AI Impact
              </button>
            </div>
          )}

          {/* Assurant Sub-Tabs */}
          {activeTab === 1 && (
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => setAssurantSubTab(0)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  assurantSubTab === 0
                    ? "bg-executive-gold/20 text-executive-gold border border-executive-gold/50"
                    : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                }`}
              >
                API Management Transformation
              </button>
              <button
                onClick={() => setAssurantSubTab(1)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  assurantSubTab === 1
                    ? "bg-executive-gold/20 text-executive-gold border border-executive-gold/50"
                    : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                }`}
              >
                Work Sample - TOGAF ADM
              </button>
            </div>
          )}

          {/* AmEx Sub-Tabs */}
          {activeTab === 2 && (
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => setAmexSubTab(0)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  amexSubTab === 0
                    ? "bg-executive-gold/20 text-executive-gold border border-executive-gold/50"
                    : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                }`}
              >
                GCP Hybrid Cloud Strategy
              </button>
              <button
                onClick={() => setAmexSubTab(1)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  amexSubTab === 1
                    ? "bg-executive-gold/20 text-executive-gold border border-executive-gold/50"
                    : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                }`}
              >
                2015-2020 Transformation Roadmap
              </button>
              <button
                onClick={() => setAmexSubTab(2)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  amexSubTab === 2
                    ? "bg-executive-gold/20 text-executive-gold border border-executive-gold/50"
                    : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                }`}
              >
                Work Sample - TOGAF ADM
              </button>
            </div>
          )}

          {/* STAR Content - Main Story */}
          {((activeTab === 0 && awsSubTab !== 2) || (activeTab === 1 && assurantSubTab === 0) || (activeTab === 2 && amexSubTab === 0)) && (
            <div className="space-y-6">
            {/* Situation */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-executive-gold/20 rounded-full">
                  <span className="text-xs font-bold text-executive-gold">SITUATION</span>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">{currentStory.situation}</p>
            </div>

            {/* Task */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-primary-500/20 rounded-full">
                  <span className="text-xs font-bold text-primary-400">TASK</span>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">{currentStory.task}</p>
            </div>

            {/* Action */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-blue-500/20 rounded-full">
                  <span className="text-xs font-bold text-blue-400">ACTION</span>
                </div>
              </div>
              <ul className="space-y-2">
                {currentStory.action.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/80">
                    <span className="text-executive-gold mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Result */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-green-500/20 rounded-full">
                  <span className="text-xs font-bold text-green-400">RESULT</span>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed font-semibold">{currentStory.result}</p>
            </div>
          </div>
          )}

          {/* AWS GenAI Impact Content */}
          {activeTab === 0 && awsSubTab === 2 && (
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h4 className="text-3xl font-bold text-executive-gold mb-3">{genAIImpact.title}</h4>
                <p className="text-white/80 text-base leading-relaxed max-w-4xl mx-auto">{genAIImpact.overview}</p>
              </div>

              {/* Enterprise Metrics */}
              <div className="bg-gradient-to-r from-executive-gold/20 to-primary-500/20 border-2 border-executive-gold/50 rounded-lg p-6 mb-8">
                <h5 className="text-xl font-bold text-executive-gold mb-4">Enterprise-Scale Impact</h5>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-sm text-white/60 mb-1">Deployment</div>
                    <div className="text-white font-semibold">{genAIImpact.enterpriseMetrics.deployment}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-sm text-white/60 mb-1">User Adoption</div>
                    <div className="text-white font-semibold">{genAIImpact.enterpriseMetrics.adoption}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-sm text-white/60 mb-1">Productivity</div>
                    <div className="text-white font-semibold">{genAIImpact.enterpriseMetrics.productivity}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-sm text-white/60 mb-1">Financial Impact</div>
                    <div className="text-executive-gold font-bold text-lg">{genAIImpact.enterpriseMetrics.financial}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-sm text-white/60 mb-1">Strategic Investment</div>
                    <div className="text-white font-semibold">{genAIImpact.enterpriseMetrics.investment}</div>
                  </div>
                </div>
              </div>

              {/* Projects Table */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h5 className="text-xl font-bold text-executive-gold mb-4">GenAI & ML Projects Portfolio (STAR Format)</h5>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">Project</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">Client</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">Situation</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">Task</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">Action</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {genAIImpact.projects.map((proj, idx) => (
                        <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                          <td className="py-4 px-4 text-white font-semibold text-sm align-top">{proj.project}</td>
                          <td className="py-4 px-4 text-white/70 text-sm align-top">{proj.client}</td>
                          <td className="py-4 px-4 text-white/70 text-sm align-top">{proj.situation}</td>
                          <td className="py-4 px-4 text-white/70 text-sm align-top">{proj.task}</td>
                          <td className="py-4 px-4 text-white/70 text-sm align-top">{proj.action}</td>
                          <td className="py-4 px-4 text-executive-gold text-sm font-semibold align-top">{proj.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h5 className="text-lg font-bold text-executive-gold mb-3">Technology Stack</h5>
                  <div className="space-y-2 text-sm text-white/80">
                    <div>• Amazon Bedrock, SageMaker, Comprehend, Transcribe</div>
                    <div>• GitHub Copilot Enterprise, AWS CodeWhisperer</div>
                    <div>• RAG (Retrieval Augmented Generation)</div>
                    <div>• Custom LLMs, NLP models, ML pipelines</div>
                    <div>• Real-time analytics and sentiment analysis</div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h5 className="text-lg font-bold text-executive-gold mb-3">Use Case Domains</h5>
                  <div className="space-y-2 text-sm text-white/80">
                    <div>• Code generation & developer productivity</div>
                    <div>• Customer service & post-call analytics</div>
                    <div>• Enterprise knowledge management & Q&A</div>
                    <div>• Claims automation & fraud detection</div>
                    <div>• Risk management & compliance monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Assurant TOGAF ADM Content */}
          {activeTab === 1 && assurantSubTab === 1 && (
            <div className="space-y-8">
              {/* TOGAF Header */}
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-executive-gold mb-3">TOGAF ADM Phases & Assurant Artifact Mapping</h4>
                <p className="text-white/70 text-sm">Enterprise Architecture methodology applied to Assurant Embedded Insurance Transformation (2022-2025)</p>
              </div>

              {/* Strategic North Star */}
              <div className="p-6 bg-gradient-to-r from-executive-gold/20 to-primary-500/20 border-2 border-executive-gold/50 rounded-lg mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-executive-gold rounded-full flex items-center justify-center">
                    <span className="text-executive-dark font-bold text-lg">★</span>
                  </div>
                  <h5 className="text-xl font-bold text-executive-gold">Strategic North Star</h5>
                </div>
                <p className="text-white text-base leading-relaxed font-medium">{assurantTogafContent.strategicNorthStar}</p>
              </div>

              {/* TOGAF Phases */}
              <div className="space-y-6">
                {assurantTogafContent.phases.map((phase, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
                    {/* Phase Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-executive-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-executive-gold">{phase.phase.split(' ')[1]}</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-bold text-white mb-1">{phase.phase}: {phase.name}</h5>
                        <p className="text-white/70 text-sm leading-relaxed">{phase.description}</p>
                      </div>
                    </div>

                    {/* Owner & Timing Badges */}
                    {phase.owner && phase.timing && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full">
                          <span className="text-xs font-semibold text-blue-300">👤 {phase.owner}</span>
                        </div>
                        <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full">
                          <span className="text-xs font-semibold text-purple-300">⏱️ {phase.timing}</span>
                        </div>
                      </div>
                    )}

                    {/* Artifacts */}
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-primary-400 mb-2">Key Artifacts:</div>
                      <div className="grid grid-cols-1 gap-2">
                        {phase.artifacts.map((artifact, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-white/80 text-sm">
                            <span className="text-executive-gold mt-1">→</span>
                            <span>{artifact}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Governance Gate */}
                    <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="text-xs font-semibold text-green-400 mb-1">Governance Gate:</div>
                      <div className="text-white/80 text-sm">{phase.governanceGate}</div>
                    </div>

                    {/* Assurant Example - Highlighted with Adarsh Naidu's role */}
                    <div className="p-4 bg-executive-gold/10 border border-executive-gold/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-xs font-semibold text-executive-gold">Assurant Example:</div>
                        <div className="px-2 py-0.5 bg-executive-gold/30 rounded text-xs font-bold text-executive-gold">
                          Chief Architect: Adarsh Naidu
                        </div>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">{phase.amexExample}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Role Mapping Table */}
              <div className="mt-8">
                <h5 className="text-xl font-bold text-white mb-4">TOGAF Role to Assurant Mapping</h5>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">TOGAF Role</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">Assurant Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assurantTogafContent.roleMapping.map((role, idx) => (
                        <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                          <td className="py-4 px-4 text-white font-semibold text-sm">{role.togafRole}</td>
                          <td className="py-4 px-4 text-white/70 text-sm">{role.amexRole}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* AmEx Roadmap Content */}
          {activeTab === 2 && amexSubTab === 1 && (
            <div className="space-y-6">
              {/* Roadmap Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">Dimension</th>
                      <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">2015 State</th>
                      <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">2020 Target</th>
                      <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">Key Initiatives</th>
                    </tr>
                  </thead>
                  <tbody>
                    {amexRoadmap.roadmapData.map((row, idx) => (
                      <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 text-white font-semibold text-sm">{row.dimension}</td>
                        <td className="py-4 px-4 text-white/70 text-sm">{row.state2015}</td>
                        <td className="py-4 px-4 text-white/70 text-sm">{row.target2020}</td>
                        <td className="py-4 px-4 text-white/70 text-sm">{row.keyInitiatives}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* STAR Format for Roadmap */}
              <div className="mt-8 space-y-6">
                {/* Situation */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-3 py-1 bg-executive-gold/20 rounded-full">
                      <span className="text-xs font-bold text-executive-gold">SITUATION</span>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">{amexRoadmap.situation}</p>
                </div>

                {/* Task */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-3 py-1 bg-primary-500/20 rounded-full">
                      <span className="text-xs font-bold text-primary-400">TASK</span>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">{amexRoadmap.task}</p>
                </div>

                {/* Action */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-3 py-1 bg-blue-500/20 rounded-full">
                      <span className="text-xs font-bold text-blue-400">ACTION</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {amexRoadmap.action.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/80">
                        <span className="text-executive-gold mt-1">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-3 py-1 bg-green-500/20 rounded-full">
                      <span className="text-xs font-bold text-green-400">RESULT</span>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed font-semibold">{amexRoadmap.result}</p>
                </div>
              </div>
            </div>
          )}

          {/* TOGAF ADM Content */}
          {activeTab === 2 && amexSubTab === 2 && (
            <div className="space-y-8">
              {/* TOGAF Header */}
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-executive-gold mb-3">TOGAF ADM Phases & Amex Artifact Mapping</h4>
                <p className="text-white/70 text-sm">Enterprise Architecture methodology applied to American Express Transformation (2015-2020)</p>
              </div>

              {/* Strategic North Star */}
              <div className="p-6 bg-gradient-to-r from-executive-gold/20 to-primary-500/20 border-2 border-executive-gold/50 rounded-lg mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-executive-gold rounded-full flex items-center justify-center">
                    <span className="text-executive-dark font-bold text-lg">★</span>
                  </div>
                  <h5 className="text-xl font-bold text-executive-gold">Strategic North Star</h5>
                </div>
                <p className="text-white text-base leading-relaxed font-medium">{togafContent.strategicNorthStar}</p>
              </div>

              {/* TOGAF Phases */}
              <div className="space-y-6">
                {togafContent.phases.map((phase, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
                    {/* Phase Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-executive-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-executive-gold">{phase.phase.split(' ')[1]}</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-bold text-white mb-1">{phase.phase}: {phase.name}</h5>
                        <p className="text-white/70 text-sm leading-relaxed">{phase.description}</p>
                      </div>
                    </div>

                    {/* Owner & Timing Badges */}
                    {phase.owner && phase.timing && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full">
                          <span className="text-xs font-semibold text-blue-300">👤 {phase.owner}</span>
                        </div>
                        <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full">
                          <span className="text-xs font-semibold text-purple-300">⏱️ {phase.timing}</span>
                        </div>
                      </div>
                    )}

                    {/* Artifacts */}
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-primary-400 mb-2">Key Artifacts:</div>
                      <div className="grid grid-cols-1 gap-2">
                        {phase.artifacts.map((artifact, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-white/80 text-sm">
                            <span className="text-executive-gold mt-1">→</span>
                            <span>{artifact}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Governance Gate */}
                    <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="text-xs font-semibold text-green-400 mb-1">Governance Gate:</div>
                      <div className="text-white/80 text-sm">{phase.governanceGate}</div>
                    </div>

                    {/* Amex Example - Highlighted with Adarsh Naidu's role */}
                    <div className="p-4 bg-executive-gold/10 border border-executive-gold/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-xs font-semibold text-executive-gold">American Express Example:</div>
                        <div className="px-2 py-0.5 bg-executive-gold/30 rounded text-xs font-bold text-executive-gold">
                          Chief Architect: Adarsh Naidu
                        </div>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">{phase.amexExample}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Role Mapping Table */}
              <div className="mt-8">
                <h5 className="text-xl font-bold text-white mb-4">TOGAF Role to American Express Mapping</h5>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">TOGAF Role</th>
                        <th className="text-left py-3 px-4 text-sm font-bold text-executive-gold">American Express Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {togafContent.roleMapping.map((role, idx) => (
                        <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                          <td className="py-4 px-4 text-white font-semibold text-sm">{role.togafRole}</td>
                          <td className="py-4 px-4 text-white/70 text-sm">{role.amexRole}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Key Metrics */}
          {((activeTab === 0 && awsSubTab !== 2) || (activeTab === 1 && assurantSubTab === 0) || (activeTab === 2 && amexSubTab === 0)) && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="grid grid-cols-3 gap-6">
              {currentStory.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold gold-accent mb-1">{metric.value}</div>
                  <div className="text-sm text-white/60">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 glass-card bg-gradient-to-r from-executive-gold/10 to-primary-500/10 text-center">
          <Lightbulb className="w-12 h-12 text-executive-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 gold-accent">Ready to Transform Your Business?</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto leading-relaxed">
            Partner with a Chief Architect who delivers measurable outcomes through strategic data and AI solutions tailored to your business objectives.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-executive-gold hover:bg-executive-gold/90 text-executive-dark font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
