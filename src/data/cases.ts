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
    description: "Legal · Natural Language Processing",
    tags: ["NLP", "Legal Tech", "Due Diligence"],
  },
  {
    slug: "nestle-sustainability",
    title: "Nestlé & Vreugdenhil — Farmer-Centric Sustainability Analytics",
    description: "FMCG · Sustainability Analytics",
    tags: ["Sustainability", "Analytics", "Agriculture"],
  },
  {
    slug: "vos-logistics-analytics",
    title: "Vos Logistics — Operational & Financial Performance Analytics",
    description: "Logistics · Business Intelligence",
    tags: ["BI", "Operations", "Logistics"],
  },
  {
    slug: "sabic-gcxgc-pipeline",
    title: "SABIC — Automated AI Pipeline for GC×GC Data Alignment",
    description: "Chemical Industry · Data Engineering",
    tags: ["Data Pipeline", "AI", "Chemical Analysis"],
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
    descriptor: "Legal · Natural Language Processing",
    situation: "Houthoff, a leading Dutch law firm, needed to process vast amounts of legal documents during M&A due diligence. Manual review was time-consuming, expensive, and prone to human error in identifying critical clauses and risks.",
    task: [
      "Automate document classification and key clause extraction",
      "Build domain-specific NLP models for legal terminology",
      "Reduce due diligence review time while maintaining accuracy",
    ],
    approach: [
      "Trained custom NLP models on legal document corpus",
      "Implemented named entity recognition for legal concepts",
      "Built clause extraction and risk flagging pipelines",
      "Created intuitive review interface for legal teams",
    ],
    impact: [
      "70% reduction in initial document review time",
      "Improved risk identification accuracy by 25%",
      "Enabled handling of 3x larger deal volumes",
    ],
    delivered: [
      "Legal document intelligence platform",
      "Custom NLP models for Dutch and English legal texts",
      "Risk assessment dashboards",
    ],
    skills: ["NLP", "Python", "Transformers", "Document AI", "Legal Tech"],
  },
  "nestle-sustainability": {
    slug: "nestle-sustainability",
    title: "Nestlé & Vreugdenhil — Farmer-Centric Sustainability Analytics",
    descriptor: "FMCG · Sustainability Analytics",
    situation: "Nestlé and Vreugdenhil needed to track and improve sustainability metrics across their dairy supply chain. Farmers lacked visibility into their environmental impact, and the companies needed data-driven insights to meet sustainability commitments.",
    task: [
      "Create a farmer-facing sustainability analytics platform",
      "Enable tracking of key environmental metrics",
      "Provide actionable insights for improving sustainability",
    ],
    approach: [
      "Designed user-friendly data collection interfaces for farmers",
      "Built analytics models for carbon footprint and water usage",
      "Created benchmarking tools comparing farm performance",
      "Developed recommendation engine for improvement actions",
    ],
    impact: [
      "Onboarded 2,000+ dairy farmers onto the platform",
      "15% average reduction in carbon footprint per farm",
      "Enhanced supply chain transparency for sustainability reporting",
    ],
    delivered: [
      "Farmer sustainability dashboard",
      "Carbon footprint calculator",
      "Benchmarking and recommendation system",
    ],
    skills: ["Data Analytics", "Power BI", "Azure", "Sustainability Metrics", "UX Design"],
  },
  "vos-logistics-analytics": {
    slug: "vos-logistics-analytics",
    title: "Vos Logistics — Operational & Financial Performance Analytics",
    descriptor: "Logistics · Business Intelligence",
    situation: "Vos Logistics operated with fragmented data across multiple systems, making it difficult to gain holistic insights into operational efficiency and financial performance. Decision-makers lacked real-time visibility into key metrics.",
    task: [
      "Unify data from disparate operational and financial systems",
      "Build comprehensive analytics dashboards for leadership",
      "Enable data-driven decision making across the organization",
    ],
    approach: [
      "Mapped and integrated data from ERP, TMS, and financial systems",
      "Designed dimensional data model for analytics",
      "Built self-service reporting capabilities",
      "Implemented automated data quality monitoring",
    ],
    impact: [
      "Reduced reporting time from days to hours",
      "Identified €2M in cost optimization opportunities",
      "Enabled real-time operational visibility",
    ],
    delivered: [
      "Enterprise data warehouse",
      "Executive and operational dashboards",
      "Self-service analytics platform",
    ],
    skills: ["SQL", "Power BI", "Data Modeling", "ETL", "Business Intelligence"],
  },
  "sabic-gcxgc-pipeline": {
    slug: "sabic-gcxgc-pipeline",
    title: "SABIC — Automated AI Pipeline for GC×GC Data Alignment",
    descriptor: "Chemical Industry · Data Engineering",
    situation: "SABIC's R&D teams used GC×GC chromatography for chemical analysis, but aligning and comparing results across experiments was manual and time-intensive. This bottleneck slowed research cycles and limited analytical throughput.",
    task: [
      "Automate the alignment of GC×GC chromatography data",
      "Build reproducible AI pipeline for data processing",
      "Enable faster and more accurate chemical analysis",
    ],
    approach: [
      "Developed image-based alignment algorithms for chromatograms",
      "Built automated peak detection and matching systems",
      "Created end-to-end pipeline with quality validation",
      "Implemented version control and reproducibility features",
    ],
    impact: [
      "Reduced data alignment time from hours to minutes",
      "Improved alignment accuracy by 40%",
      "Accelerated R&D experiment cycles",
    ],
    delivered: [
      "Automated GC×GC alignment pipeline",
      "Quality assurance dashboards",
      "Technical documentation and training materials",
    ],
    skills: ["Python", "Image Processing", "Machine Learning", "Data Pipeline", "Scientific Computing"],
  },
};
