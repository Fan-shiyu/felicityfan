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
    title: "ING — AI-Assisted Modernization of Legacy Software",
    description: "Financial Services · AI & Machine Learning",
    tags: ["AI", "Legacy Modernization", "Banking"],
  },
  {
    slug: "prorail-predictive-monitoring",
    title: "ProRail — Predictive Monitoring & Weather-Aware Fault Prevention",
    description: "Infrastructure · Predictive Analytics",
    tags: ["IoT", "Predictive Maintenance", "Railway"],
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
    title: "ING — AI-Assisted Modernization of Legacy Software",
    descriptor: "Financial Services · AI & Machine Learning",
    situation: "ING faced significant technical debt from decades-old legacy systems that were difficult to maintain, poorly documented, and increasingly costly to operate. The bank needed to modernize these systems while maintaining business continuity and regulatory compliance.",
    task: [
      "Assess the legacy codebase and identify modernization opportunities",
      "Develop AI-assisted tools to accelerate code understanding and refactoring",
      "Create a structured migration pathway with minimal operational disruption",
    ],
    approach: [
      "Conducted comprehensive analysis of legacy COBOL and mainframe systems",
      "Built AI models to parse and document legacy code structures",
      "Developed automated testing frameworks to ensure functional parity",
      "Implemented incremental migration strategy with rollback capabilities",
    ],
    impact: [
      "Reduced code analysis time by 60%",
      "Accelerated modernization timeline by 40%",
      "Maintained 100% business continuity during migration phases",
    ],
    delivered: [
      "AI-powered code documentation system",
      "Automated test generation framework",
      "Migration playbook and governance framework",
    ],
    skills: ["Python", "Machine Learning", "COBOL", "Cloud Architecture", "Agile"],
  },
  "prorail-predictive-monitoring": {
    slug: "prorail-predictive-monitoring",
    title: "ProRail — Predictive Monitoring & Weather-Aware Fault Prevention",
    descriptor: "Infrastructure · Predictive Analytics",
    situation: "ProRail, the Dutch railway infrastructure manager, experienced significant operational disruptions due to weather-related equipment failures. Traditional reactive maintenance was costly and led to service delays affecting millions of passengers.",
    task: [
      "Develop predictive models for weather-related infrastructure failures",
      "Integrate real-time weather data with asset monitoring systems",
      "Enable proactive maintenance scheduling to prevent failures",
    ],
    approach: [
      "Analyzed historical failure data correlated with weather patterns",
      "Built machine learning models predicting failure probability",
      "Integrated IoT sensor data from track and switch equipment",
      "Created real-time dashboards for operations teams",
    ],
    impact: [
      "30% reduction in weather-related service disruptions",
      "€5M annual savings in emergency maintenance costs",
      "Improved passenger satisfaction scores",
    ],
    delivered: [
      "Predictive maintenance platform",
      "Weather-risk scoring system",
      "Operations dashboard with real-time alerts",
    ],
    skills: ["Time Series Analysis", "IoT", "Python", "Azure", "Power BI"],
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
