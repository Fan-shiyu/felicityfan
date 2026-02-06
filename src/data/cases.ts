import { CaseData } from "@/components/CaseTemplate";

export interface CaseCard {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

export const caseCards: CaseCard[] = [
  {
    slug: "ing-ai-modernization",
    title: "ING — AI-Assisted Modernization of Large-Scale Legacy Software",
    description: "Banking · Generative AI · Software Modernization",
    tags: ["Generative AI", "Software Modernization", "Banking"],
  },
  {
    slug: "prorail-predictive-monitoring",
    title: "ProRail — Predictive Monitoring & Weather-Aware Fault Prevention for Railway Bridges",
    description: "Infrastructure · Data Science · Predictive Maintenance",
    tags: ["Data Science", "Predictive Maintenance", "Infrastructure"],
  },
  {
    slug: "houthoff-legal-intelligence",
    title: "Houthoff — AI-Driven Domain Intelligence for Legal Due Diligence",
    description: "Legal Tech · Generative AI · Risk Analytics",
    tags: ["Generative AI", "Legal Tech", "Risk Analytics"],
  },
  {
    slug: "nestle-sustainability",
    title: "Nestlé & Vreugdenhil — Farmer-Centric Sustainability Analytics & Privacy-Preserving Benchmarking",
    description: "AgriTech · Sustainability Analytics · Data Platforms",
    tags: ["Sustainability Analytics", "AgriTech", "Data Platforms"],
  },
  {
    slug: "vos-logistics-analytics",
    title: "Vos Logistics — Operational & Financial Performance Analytics",
    description: "Logistics · Business Intelligence · Performance Management",
    tags: ["Business Intelligence", "Performance Management", "Logistics"],
  },
  {
    slug: "sabic-gcxgc-pipeline",
    title: "SABIC — Automated AI Pipeline for GC×GC Data Alignment & Compound Classification",
    description: "Chemical Analytics · Applied Machine Learning · Data Automation",
    tags: ["Applied ML", "Chemical Analytics", "Data Automation"],
  },
];

export const caseDetails: Record<string, CaseData> = {
  "ing-ai-modernization": {
    slug: "ing-ai-modernization",
    title: "ING — AI-Assisted Modernization of Large-Scale Legacy Software",
    descriptor: "Banking · Generative AI · Software Modernization",
    situation: "ING is modernizing long-lived, business-critical banking systems to support scalability, performance, and long-term maintainability. One large, internally developed application with more than 20 years of history comprised millions of lines of legacy PL/SQL code with limited documentation and no automated tests, making manual refactoring slow, costly, and risky.",
    task: [
      "Explore whether Generative AI and Large Language Models (LLMs) can safely support engineers in understanding complex legacy code",
      "Translate legacy code into modern Java systems",
      "Reduce manual refactoring effort while preserving business logic and correctness",
    ],
    approach: [
      "Designed and evaluated an AI-assisted code translation pipeline, working closely with ING engineers and academic supervisors",
      "Structured prompt engineering with domain context and logical constraints",
      "Evaluation of multiple commercial and open-source LLMs",
      "A similarity-based retrieval strategy to select the most relevant code examples",
      "Integration of domain models to guide syntactic and functional correctness",
      "Rather than maximizing prompt size, the solution focused on example relevance, using code similarity to improve translation outcomes",
    ],
    impact: [
      "Increased translation quality by ~8% in test pass rate, improving functional correctness of generated Java code",
      "Reduced manual refactoring effort by producing more accurate, context-aware translations",
      "Demonstrated a scalable, controllable GenAI strategy for large legacy codebases",
      "Delivered actionable guidance on where and how GenAI can be responsibly embedded in software engineering workflows",
      "The work resulted in a peer-reviewed research publication, bridging academic research and real-world banking applications",
    ],
    delivered: [
      "AI-assisted PL/SQL → Java translation pipeline",
      "Similarity-based example selection method",
      "Quantitative evaluation framework",
      "Practical recommendations for GenAI adoption in legacy modernization",
    ],
    skills: ["Generative AI", "Prompt Engineering", "Software Modernization", "Python", "PL/SQL", "Java"],
  },
  "prorail-predictive-monitoring": {
    slug: "prorail-predictive-monitoring",
    title: "ProRail — Predictive Monitoring & Weather-Aware Fault Prevention for Railway Bridges",
    descriptor: "Infrastructure · Data Science · Predictive Maintenance",
    github: "https://github.com/Fan-shiyu/Smart_Bridge_Dashboard",
    situation: "ProRail operates critical movable railway bridges where faults can cause train delays, safety risks, and costly manual interventions. While large volumes of sensor and fault data were available, limited tooling existed to systematically explain failures, quantify environmental impact, or anticipate high-risk situations.",
    task: [
      "Design a data-driven solution that helps engineers understand recurring bridge faults",
      "Quantify the role of extreme weather",
      "Act earlier to prevent disruptions",
    ],
    approach: [
      "Developed an end-to-end analytics and monitoring framework combining interactive dashboards for real-time and historical bridge behavior",
      "Root cause analysis linking faults to bridge cycles and components",
      "Statistical assessment of weather–fault relationships",
      "A machine-learning early-warning model predicting wind-related faults at an hourly level",
      "The solution was built in close collaboration with bridge inspectors, system specialists, and operations teams to ensure operational relevance",
    ],
    impact: [
      "Identified bridge-specific fault drivers, separating mechanical issues from weather-induced failures",
      "Quantified the dominant impact of wind gusts on lift-bridge lockouts, validating operational hypotheses with data",
      "Delivered a high accuracy predictive warning system, enabling proactive intervention",
      "Streamlined approximately 31% of manual bridge operations, improving efficiency and reducing maintenance costs",
    ],
    delivered: [
      "Executive-ready dashboards for bridge monitoring",
      "Predictive weather-warning model",
      "Actionable insights for maintenance and operations planning",
    ],
    skills: ["Data Science", "Time Series Analysis", "Machine Learning", "Dashboard Design", "Infrastructure Analytics"],
  },
  "houthoff-legal-intelligence": {
    slug: "houthoff-legal-intelligence",
    title: "Houthoff — AI-Driven Domain Intelligence for Legal Due Diligence",
    descriptor: "Legal Tech · Generative AI · Risk Analytics",
    github: "https://github.com/Fan-shiyu/Nova_Dominium",
    demo: "https://www.youtube.com/watch?v=LWCr_vuKkGE",
    situation: "In modern M&A transactions, domain names are critical corporate assets. They underpin branding, digital operations, customer access, and email infrastructure. During legal due diligence, verifying whether all relevant domains are properly owned by the target company is essential — yet highly manual.\n\nAt Houthoff, one of the leading law firms in the Netherlands, legal teams often receive large spreadsheets containing hundreds of domains. Verifying ownership, expiration risk, and inconsistencies across registries requires time-consuming manual lookups across fragmented WHOIS and registry systems, increasing both workload and transaction risk.",
    task: [
      "Verify domain ownership at scale",
      "Identify ownership and expiry risks early",
      "Reduce manual effort while improving reliability and auditability of findings",
    ],
    approach: [
      "Designed and built Nova Dominium, an AI-enhanced domain intelligence platform tailored to legal due-diligence workflows",
      "Automated domain intelligence: Programmatic retrieval of WHOIS and RDAP data across multiple TLDs, enriched with DNS and TLS signals to improve ownership attribution and data completeness",
      "Explainable risk classification: Collaborated closely with legal experts to translate domain governance and due-diligence requirements into transparent risk logic, classifying domains as low, medium, or high risk based on ownership alignment and expiry exposure",
      "Integrated external data sources: Connected multiple external APIs to increase accuracy, handle privacy-protected records, and surface inconsistencies across registries",
      "End-to-end legal workflow support: Delivered a web-based interface that ingests domain lists, presents structured results, highlights high-risk domains, and provides downloadable evidence (PDFs, exports) suitable for legal reporting",
    ],
    impact: [
      "Reduced domain ownership review time by more than 80%, eliminating repetitive manual lookups",
      "Enabled rapid identification of high-risk domains that could affect deal certainty or closing conditions",
      "Improved consistency and completeness of due-diligence findings across large domain portfolios",
      "Allowed legal teams to focus on risk analysis and decision-making, rather than data collection",
    ],
    delivered: [
      "Nova Dominium: a scalable web-based domain intelligence platform",
      "Automated WHOIS/RDAP retrieval and enrichment pipeline",
      "Explainable domain risk-scoring logic aligned with legal standards",
      "Exportable, audit-ready outputs for M&A and compliance reviews",
    ],
    skills: ["Generative AI", "Data Integration", "Risk Modeling", "Legal Tech", "API Engineering", "Explainable Decision Logic"],
  },
  "nestle-sustainability": {
    slug: "nestle-sustainability",
    title: "Nestlé & Vreugdenhil — Farmer-Centric Sustainability Analytics & Privacy-Preserving Benchmarking",
    descriptor: "AgriTech · Sustainability Analytics · Data Platforms",
    situation: "Dairy farmers operate in a fragmented data landscape, where sustainability-relevant information—such as emissions, feed efficiency, and milk production—is spread across Excel files, APIs, and proprietary systems. At the same time, sustainability reporting and environmental performance requirements are increasing, placing higher demands on data accuracy, timeliness, and transparency.\n\nNestlé and Vreugdenhil explored how data and analytics could give farmers real-time sustainability insight, while ensuring data ownership, privacy, and competitive confidentiality.",
    task: [
      "Monitor environmental and production performance in real time",
      "Track sustainability KPIs at actionable levels of granularity",
      "Benchmark performance against peers without exposing sensitive farm data",
      "Support both operational decisions and regulatory reporting",
    ],
    approach: [
      "Designed and implemented a farmer-centric sustainability analytics platform, with a strong focus on usability, data integration, and privacy-by-design",
      "Unified sustainability data layer, integrating fragmented agri-data sources into a single analytics pipeline",
      "Domain-specific sustainability KPIs, defined at sub-barn and per-animal level, covering emissions (NH₃, CH₄), feed efficiency, milk yield, and quality indicators",
      "Decision-ready dashboards, featuring KPI summary cards, time-series trends, benchmarking visuals, and composite sustainability scores",
      "Privacy-preserving benchmarking, allowing farmers to compare performance against regional or peer averages using aggregated and synthetic data, without sharing farm-level details",
      "The solution was developed in close collaboration with domain experts to ensure alignment with real farm operations and industry requirements",
    ],
    impact: [
      "Enabled farmers to access and interpret sustainability data in real time, instead of relying on fragmented reports",
      "Translated complex sustainability metrics into actionable, farm-level KPIs",
      "Demonstrated how privacy-by-design analytics can support collective benchmarking without compromising data ownership",
      "Provided a scalable blueprint for data-driven sustainability management across the dairy value chain",
    ],
    delivered: [
      "Farmer-centric sustainability analytics platform (proof of concept)",
      "Integrated sustainability data pipeline",
      "Domain-aligned KPIs and composite scoring logic",
      "Interactive dashboard for monitoring, benchmarking, and reporting",
      "Privacy-preserving benchmarking design",
    ],
    skills: ["Sustainability Analytics", "Data Integration", "KPI Design", "Dashboard Design", "Privacy-by-Design", "AgriTech Data Systems"],
  },
  "vos-logistics-analytics": {
    slug: "vos-logistics-analytics",
    title: "Vos Logistics — Operational & Financial Performance Analytics",
    descriptor: "Logistics · Business Intelligence · Performance Management",
    situation: "Vos Logistics operates complex logistics networks across customers, routes, and transport assets. As the organization continued to professionalize its analytics capabilities, leadership sought more consistent, decision-ready insight into operational efficiency and financial performance across the network.\n\nExisting reporting provided useful operational views but lacked a cohesive structure to support management- and executive-level steering.",
    task: [
      "Understand key operational and financial performance drivers",
      "Monitor productivity and cost efficiency across the network",
      "Support informed decisions on pricing, customer portfolios, and network design",
      "Serve both operational management and executive oversight",
    ],
    approach: [
      "Contributed to the design and implementation of a KPI-driven analytics framework, translating business questions into interactive Power BI dashboards in close collaboration with senior stakeholders",
      "Strategic KPI design covering financial and productivity dimensions, applied consistently across customers, routes, shipments, and assets",
      "Targeted analytical deep dives using Python to better understand operational patterns and efficiency drivers",
      "Executive-ready dashboards with high-level KPI summaries, ranking views, drill-downs, and time-based and geographic perspectives",
      "Stakeholder alignment to ensure insights were actionable and relevant for decision-making at different management layers",
    ],
    impact: [
      "Improved transparency into performance drivers across the logistics network",
      "Supported more structured, data-driven discussions around pricing, customer selection, and operational optimization",
      "Reduced reliance on fragmented reports by introducing cohesive, management-oriented analytics",
    ],
    delivered: [
      "Financial and productivity KPI framework",
      "Interactive Power BI dashboards for management and executives",
      "Analytical insights supporting performance and pricing discussions",
    ],
    skills: ["Business Intelligence", "KPI Design", "Analytics", "Power BI", "Logistics Analytics", "Executive Communication"],
  },
  "sabic-gcxgc-pipeline": {
    slug: "sabic-gcxgc-pipeline",
    title: "SABIC — Automated AI Pipeline for GC×GC Data Alignment & Compound Classification",
    descriptor: "Chemical Analytics · Applied Machine Learning · Data Automation",
    situation: "SABIC is a global chemical manufacturer investing heavily in innovation and advanced analytical methods to support high-quality chemical analysis. One recurring challenge in this context is the analysis of GC×GC chromatographic data, where peak positions can shift over time, across batches, and between instruments.\n\nThese shifts make manual alignment and compound identification time-consuming, expert-dependent, and difficult to scale.",
    task: [
      "Align GC×GC data despite complex, omni-directional peak shifts",
      "Reduce manual analysis effort while preserving analytical accuracy",
      "Enable consistent compound identification across samples and batches",
      "Integrate smoothly into existing analytical workflows",
    ],
    approach: [
      "Contributed to the design and implementation of an end-to-end AI-driven pipeline for GC×GC data processing, working closely with domain experts to align technical choices with scientific objectives",
      "Automated peak detection and global alignment, optimized for complex GC×GC peak shifts",
      "Implementation and tuning of the Icoshift alignment method, significantly improving alignment consistency across samples",
      "Machine learning–based compound classification, using a Random Forest model to enable robust, automated identification across different batches",
      "Pipeline integration, combining alignment, feature extraction, and classification into a scalable, repeatable workflow",
    ],
    impact: [
      "Reduced alignment error substantially, improving consistency and reliability of GC×GC analyses",
      "Minimized manual intervention by automating key steps in data alignment and compound identification",
      "Demonstrated how AI-driven pipelines can scale advanced analytical methods without compromising scientific integrity",
      "Delivered a practical blueprint for integrating machine learning into chemical analysis workflows",
    ],
    delivered: [
      "End-to-end automated GC×GC alignment and classification pipeline",
      "Optimized alignment methodology",
      "Validated machine learning model for compound identification",
      "Clear, reproducible workflow aligned with domain requirements",
    ],
    skills: ["Applied Machine Learning", "Signal Alignment", "Data Pipelines", "Python"],
  },
};
