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
    slug: "moonlit-legal-pipeline",
    title: "Moonlit — Automated Data Pipeline for European Legal Intelligence",
    description: "Legal Tech · Data Engineering · Web Scraping",
    tags: ["Data Engineering", "Legal Tech", "Web Scraping"],
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
  {
    slug: "deep-canvassing-impact",
    title: "Deep Canvassing Nederland — Data Analysis & Dashboard for Civic Impact Measurement",
    description: "Civic Tech · Social Impact · Data Analysis · NLP · Geospatial Analysis",
    tags: ["Social Impact", "NLP", "Geospatial Analysis"],
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
  "moonlit-legal-pipeline": {
    slug: "moonlit-legal-pipeline",
    title: "Moonlit — Automated Data Pipeline for European Legal Intelligence",
    descriptor: "Legal Tech · Data Engineering · Web Scraping",
    situation:
      "Moonlit is a legal technology platform that enables legal professionals and researchers across Europe to search and analyse court rulings from multiple jurisdictions. Legal case data is scattered across dozens of national court websites, published in unstructured formats across multiple languages. Collecting and processing this data manually was not scalable, and no automated solution existed to keep the platform continuously up to date.",
    task: [
      "Design and build an automated, end-to-end data pipeline that reliably collects legal case data from across Europe and delivers it in a structured, platform-ready format — without manual intervention",
    ],
    approach: [
      "Designed and built dedicated data pipelines — one per source — that each run automatically on a daily basis. Together, these pipelines feed the platform with legal data from court websites across multiple European countries",
      "Data collection: Each pipeline systematically discovers new legal cases published on its designated court website, extracting key information such as publication date, court, issuing authority, and document type",
      "Document processing: Legal rulings are typically published as lengthy PDF documents. The pipeline downloads these files, extracts the full text, and converts it into a structured format that can be displayed, searched, and processed directly on the platform",
      "Data preparation & delivery: Extracted content is cleaned, enriched, and structured to match the platform's data model. All changes go through a quality review before being published to the live platform",
      "Smart scheduling: The pipeline is designed to be resource-efficient — each day it first checks whether new cases have been published. If nothing has changed, it stops immediately. Only when new content is detected does it run the full process",
    ],
    impact: [
      "Enabled fully automated, daily delivery of legal cases from multiple European jurisdictions — eliminating manual data collection entirely",
      "Made legal documents directly readable and searchable on the platform, supporting both user research and AI-assisted features",
      "Reduced operational overhead through intelligent scheduling that avoids unnecessary processing on days with no new data",
      "Established a consistent pipeline architecture that can be replicated to onboard new court sources and countries as the platform expands",
    ],
    delivered: [
      "Fully automated daily data pipeline covering multiple European jurisdictions",
      "Document processing workflow converting raw legal PDFs into platform-ready content",
      "Quality review and deployment process ensuring data integrity before publication",
    ],
    skills: ["Databricks", "PySpark", "Microsoft Azure", "Python", "Web Scraping", "Data Pipeline Engineering"],
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
  "deep-canvassing-impact": {
    slug: "deep-canvassing-impact",
    title: "Deep Canvassing Nederland — Data Analysis & Dashboard for Civic Impact Measurement",
    descriptor: "Civic Tech · Social Impact · Data Analysis · NLP · Geospatial Analysis",
    situation: "Deep Canvassing Nederland is a Dutch non-profit that trains volunteers to hold structured, empathy-driven conversations with members of the public on immigration — one of the most divisive social topics in the Netherlands. Over two years, around a hundred volunteers logged thousands of door knocks and conversations through a custom-built web app, recording participant attitude scores before and after each conversation.\n\nDespite the richness of this dataset, the organisation had no systematic way to evaluate campaign effectiveness, understand geographic patterns, or identify what made certain conversations more impactful than others. Decisions about where to direct volunteer effort remained largely intuition-driven.",
    taskIntro: "As part of a CorrelAid Netherlands data team, I was tasked with:",
    task: [
      "Evaluating whether deep canvassing conversations produce measurable shifts in immigration attitudes,",
      "Identifying geographic and contextual factors associated with greater impact,",
      "Building tools that make ongoing insights accessible to a non-technical organisational team.",
    ],
    approachIntro: "I contributed to an end-to-end data analysis and tooling project across three workstreams:",
    approach: [
      "Quantitative impact analysis: Analysed before-and-after attitude scores across the full dataset to measure the direction, magnitude, and consistency of attitude change following deep canvassing conversations. Applied statistical techniques to distinguish genuine signal from noise and assess asymmetry in the distribution of score changes.",
      "Geospatial analysis: Joined canvassing activity data with postcode-level 2025 election results to map regional variation in attitudes and effectiveness. Used GeoPandas and Plotly to build interactive maps revealing the relationship between local political context and canvassing outcomes.",
      "Sentiment and text analysis: Applied Dutch NLP models to volunteers' free-text conversation reflections to identify recurring themes and patterns in what drives successful conversations. Used SHAP for model interpretability and Dutch-language stopword filtering to improve signal quality.",
      "Interactive dashboard: Built a multi-page Streamlit dashboard — deployed for internal use — giving the organisation a live, filterable view of migration scores, geographic coverage, and conversation trends over time. The dashboard is designed for ongoing monitoring as new data is collected.",
    ],
    impact: [
      "Demonstrated that deep canvassing conversations are associated with a consistent, positive directional shift in immigration attitudes — with upward shifts substantially outnumbering downward ones.",
      "Revealed that canvassing effectiveness varies meaningfully by region, with geographic and political context predicting both starting attitudes and the likelihood of attitude change — providing an evidence base for more targeted volunteer deployment.",
      "Delivered a reusable dashboard enabling the organisation to independently monitor campaign effectiveness on a rolling basis, without reliance on external analysts.",
      "Produced a structured insights report and data collection recommendations, directly informing the organisation's operational and strategic decisions.",
    ],
    delivered: [
      "Multi-page interactive Streamlit dashboard for internal monitoring",
      "Comprehensive data analysis report for non-technical organisational leadership",
      "Geospatial analysis linking canvassing patterns to regional political context",
      "NLP-based analysis of volunteer conversation reflections",
      "Data collection recommendations to improve future analytical capability",
    ],
    skills: ["Python", "Pandas", "Streamlit", "GeoPandas", "Plotly", "NLP", "SHAP", "Git", "Data Visualisation", "Geospatial Analysis", "Social Impact Measurement"],
  },
};
