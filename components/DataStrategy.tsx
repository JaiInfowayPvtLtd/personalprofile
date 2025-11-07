"use client";

import { Database, Shield, Cloud, Lock, Brain, Sparkles, Network, Cpu } from "lucide-react";

export default function DataStrategy() {
  const capabilities = [
    {
      icon: Brain,
      title: "Generative AI Strategy",
      description: "Enterprise GenAI roadmaps partnering with C-suite to deliver transformative AI solutions across the organization"
    },
    {
      icon: Sparkles,
      title: "LLM & RAG Architectures",
      description: "Designing scalable LLM applications, RAG frameworks, and AI-powered solutions for enterprise use cases"
    },
    {
      icon: Database,
      title: "Modern Data Platforms",
      description: "Strategic data architecture combining data warehouses, lakehouses, and cloud-native platforms for AI/ML enablement"
    },
    {
      icon: Shield,
      title: "Responsible AI Governance",
      description: "Comprehensive AI/ML governance frameworks covering model risk, ethics, compliance, and lifecycle management"
    },
    {
      icon: Cpu,
      title: "AI/ML Platforms & MLOps",
      description: "Enterprise AI platforms with MLOps pipelines, model deployment, monitoring, and continuous improvement"
    },
    {
      icon: Network,
      title: "Data Mesh & Federation",
      description: "Federated data architectures enabling self-service analytics and domain-driven ownership at scale"
    },
    {
      icon: Cloud,
      title: "Cloud-Native Transformation",
      description: "Orchestrating multi-cloud modernization strategies aligned with business objectives and ROI targets"
    },
    {
      icon: Lock,
      title: "Enterprise Security & Compliance",
      description: "Board-level security frameworks with PII management, model risk compliance (SR 11-7), and regulatory controls"
    }
  ];

  return (
    <section id="data-strategy" className="section-container bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Enterprise Architecture: <span className="gold-accent">Data & GenAI Strategy</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Partnering with C-suite executives to orchestrate transformative data and AI strategies—from Generative AI
            roadmaps to modern data platforms—aligning technology innovation with business objectives and delivering
            measurable enterprise value
          </p>
          <div className="w-24 h-1 bg-executive-gold mx-auto mt-6"></div>
        </div>

        {/* Core Value Proposition */}
        <div className="glass-card bg-gradient-to-r from-executive-gold/10 to-primary-500/10 mb-12">
          <div className="md:flex items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 gold-accent">Strategic Leadership in Data & AI Transformation</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                As a Chief Architect with 18+ years partnering with Fortune 500 C-suites, I co-create enterprise
                roadmaps that unite Generative AI innovation with modern data architectures—driving digital
                transformation, operational excellence, and competitive differentiation.
              </p>
              <p className="text-white/70 leading-relaxed">
                From establishing Responsible AI governance frameworks to orchestrating cloud-native data platforms,
                I enable organizations to harness AI and data as strategic assets—delivering board-level impact
                through architecture excellence, risk management, and measurable business outcomes.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="glass-card bg-executive-dark/50 text-center p-6">
                <div className="text-4xl font-bold gold-accent mb-2">150+</div>
                <div className="text-sm text-white/60">AI/ML Use Cases<br/>Deployed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="glass-card hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <Icon className="w-12 h-12 text-executive-gold mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{capability.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
