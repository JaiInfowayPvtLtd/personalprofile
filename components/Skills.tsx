import { Brain, Cloud, Database, GitBranch, BarChart3, Shield, Workflow, Boxes } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI/ML & Generative AI",
      skills: [
        "LLMs (Bedrock, Vertex AI, OpenAI)",
        "RAG with LangChain, LlamaIndex",
        "Multimodal AI & Agentic AI",
        "TensorFlow, PyTorch, Spark",
        "AWS SageMaker, Amazon Q",
        "Responsible AI Frameworks"
      ]
    },
    {
      icon: Database,
      title: "Data Platforms & Warehousing",
      skills: [
        "Amazon Redshift, Snowflake",
        "Google BigQuery, Azure Synapse",
        "Apache Spark, Amazon EMR",
        "Delta Lake, Apache Iceberg",
        "Data Lakes & Lakehouse Architectures",
        "AWS Glue, Azure Data Factory"
      ]
    },
    {
      icon: Shield,
      title: "Data Governance & Metadata",
      skills: [
        "AWS DataZone, Unified Studio",
        "AWS Lake Formation",
        "Azure Purview, Collibra, Alation",
        "Master Data Management (MDM)",
        "DAMA-DMBOK, DCAM Frameworks",
        "Data Quality & Lineage Tracking"
      ]
    },
    {
      icon: Workflow,
      title: "Data Integration & ETL/ELT",
      skills: [
        "AWS Glue, Azure Data Factory",
        "Apache Airflow, dbt",
        "Fivetran, Talend, Informatica",
        "Apache Kafka, AWS Kinesis",
        "Real-time Streaming Pipelines",
        "CDC (Change Data Capture)"
      ]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence & Analytics",
      skills: [
        "Amazon QuickSight, Tableau",
        "Power BI, Looker",
        "Apache Superset, Grafana",
        "Self-service Analytics Platforms",
        "Data Visualization Frameworks",
        "Advanced Analytics & Reporting"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: [
        "AWS (Certified Solution Architect)",
        "Microsoft Azure (Certified)",
        "Google Cloud Platform (Certified)",
        "Serverless Architectures",
        "Lambda/Azure Functions",
        "Multi-cloud Integration"
      ]
    },
    {
      icon: GitBranch,
      title: "DevOps & Architecture",
      skills: [
        "Git, Docker, Kubernetes",
        "Jenkins, Ansible, Terraform",
        "CI/CD Pipeline Automation",
        "Microservices Architecture",
        "Event-Driven Design",
        "TOGAF 9.1 Certified"
      ]
    },
    {
      icon: Boxes,
      title: "Blockchain & Emerging Tech",
      skills: [
        "Hyperledger, Ethereum, Corda",
        "Smart Contract Development",
        "Digital Asset Payments",
        "Stablecoin Integration (USDC, PYUSD)",
        "Trade Finance Solutions",
        "Distributed Ledger Technology"
      ]
    }
  ];

  const frameworks = [
    "TOGAF 9.1",
    "Zachman Framework",
    "DAMA-DMBOK",
    "DCAM",
    "NIST CSF",
    "COBIT 5",
    "ITIL v4",
    "SAFe Agile"
  ];

  return (
    <section id="skills" className="section-container bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Technical <span className="gold-accent">Expertise</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive technology stack spanning cloud, data, AI/ML, and enterprise architecture
          </p>
          <div className="w-24 h-1 bg-executive-gold mx-auto mt-6"></div>
        </div>

        {/* Core Competencies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-card hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-executive-gold/20 rounded-lg flex items-center justify-center mr-3">
                    <Icon className="w-6 h-6 text-executive-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start text-sm text-white/70">
                      <span className="text-executive-gold mr-2 flex-shrink-0 text-xs">●</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Frameworks & Methodologies */}
        <div className="glass-card bg-gradient-to-r from-executive-gold/10 to-primary-500/10">
          <h3 className="text-2xl font-bold mb-6 text-center gold-accent">
            Frameworks & Methodologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {frameworks.map((framework, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-white font-semibold">{framework}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Patterns & Practices */}
        <div className="mt-8 glass-card">
          <h3 className="text-xl font-bold mb-4 gold-accent">Architecture Patterns & Practices</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-sm font-bold text-white/80 mb-2">Design Patterns</h4>
              <ul className="space-y-1 text-sm text-white/60">
                <li>• Microservices Architecture</li>
                <li>• Event-Driven Architecture</li>
                <li>• Domain-Driven Design</li>
                <li>• Data Mesh Architecture</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white/80 mb-2">Integration Patterns</h4>
              <ul className="space-y-1 text-sm text-white/60">
                <li>• Pub/Sub Messaging</li>
                <li>• Message-Oriented Middleware</li>
                <li>• API Gateway Patterns</li>
                <li>• ETL/ELT Pipelines</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white/80 mb-2">Development Practices</h4>
              <ul className="space-y-1 text-sm text-white/60">
                <li>• Test-Driven Development</li>
                <li>• CI/CD Automation</li>
                <li>• Infrastructure as Code</li>
                <li>• MLOps & Model Serving</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
