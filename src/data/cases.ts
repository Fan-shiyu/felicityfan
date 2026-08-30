import { CaseData } from "@/components/CaseTemplate";
import sensingCluesArchitecture from "@/assets/projects/SensingClues/architecture.svg";
import sensingCluesMonthlyNdvi from "@/assets/projects/SensingClues/monthly_NDVI .png";
import sensingCluesFrpMap from "@/assets/projects/SensingClues/frp_map.png";
import sensingCluesCustomRanking from "@/assets/projects/SensingClues/custom ranking.png";
import growingRootsArchitecture from "@/assets/projects/GrowingRoots/architecture.svg";
import ecfiArchitecture from "@/assets/projects/ECFI/architecture.svg";

export interface CaseCard {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

export const caseCards: CaseCard[] = [
  {
    slug: "ecfi-community-foundation-workflow",
    title: "ECFI — Community Foundation Data Workflow Automation",
    description: "WordPress Plugin Development · Workflow Automation · Nonprofit Tech · Data Engineering",
    tags: ["Workflow Automation", "Nonprofit Tech", "Data Engineering"],
  },
  {
    slug: "sensingclues-conservation-ai",
    title: "SensingClues — Conservation Monitoring Data Pipeline & AI Assistant",
    description: "Conservation Tech · Geospatial AI · LLM Agent Design · Data Engineering",
    tags: ["Geospatial AI", "LLM Agent Design", "Data Engineering"],
  },
  {
    slug: "growing-roots-azc-data-platform",
    title: "Growing Roots — Data Pipeline, Web App & Impact Dashboard for AZC Community Gardens",
    description: "NGO Tech · Data Engineering · Full-Stack Development · Business Intelligence",
    tags: ["Data Engineering", "Full-Stack Development", "Business Intelligence"],
  },
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
  "ecfi-community-foundation-workflow": {
    slug: "ecfi-community-foundation-workflow",
    title: "ECFI — Community Foundation Data Workflow Automation",
    descriptor: "WordPress Plugin Development · Workflow Automation · Nonprofit Tech · Data Engineering",
    github: "https://github.com/Fan-shiyu/ecfi-cf-workflow",
    situation: "The European Community Foundation Initiative (ECFI) maintains a public database and interactive map of nearly 1,000 community foundations across Europe. Before this project, keeping that data current meant the website administrator manually collecting updates from dozens of country level collaborators over email, merging everything into a master spreadsheet by hand, and re-uploading it to the website. A single update round took roughly three days of manual work. Collaborators typically submitted updates through a shared spreadsheet, with no way to trace who had changed what, and review and approval happened manually in that same spreadsheet rather than through any structured system. Adding a new data field meant a developer rebuilding parts of the system.",
    task: [
      "Design and build a self-service data workflow that lets collaborators review and update their own community foundations directly, lets the website administrator approve changes with a single click, and removes the need for developer involvement in every future data collection round, without requiring any collaborator to create an account or learn a new tool.",
    ],
    approach: [],
    approachContent: [
      { type: "heading", text: "Secure, no-login collaborator access" },
      { type: "paragraph", text: "Each collaborator receives a personal, tokenised link instead of an account. Opening it takes them straight into either a spreadsheet style table view for reviewing many foundations at once, or a focused single record form for detailed editing, both built on one shared, extensible field registry so every field behaves consistently across both views." },
      { type: "heading", text: "Automated review, approval, and merge" },
      { type: "paragraph", text: "Every edit, whether submitted one row at a time or in bulk, lands in a single review queue. Approving a change writes it directly into the live WordPress database in one click, replacing what used to be a manual spreadsheet merge and re-upload." },
      { type: "heading", text: "Self-extending data model" },
      { type: "paragraph", text: "The administrator can add entirely new data fields (text, number, or dropdown) directly from the WordPress admin panel at any time, with zero developer involvement. New fields automatically appear in both collaborator views, the review workflow, and every export." },
      { type: "heading", text: "Automated communication layer" },
      { type: "paragraph", text: "Invitations are sent with each collaborator's personal link pre-filled, individually or in bulk. Collaborators automatically receive a confirmation of exactly what they submitted, and the administrator is automatically notified whenever new changes arrive for review." },
      { type: "heading", text: "One-click reporting" },
      { type: "paragraph", text: "A full, always current export of the entire database is available on demand as a formatted Excel file, alongside a ready-to-use mail merge export of collaborator contacts. This replaced a previous reliance on a static, one-time import file that never reflected live changes." },
    ],
    approachFigure: {
      src: ecfiArchitecture,
      alt: "ECFI plugin architecture: collaborator access issues a tokenised link into table or form review interfaces, changes flow through automated review and merge into the live WordPress database, while self-extending custom fields, automated communication, and one-click reporting all connect to that same database for collaborators and the website admin.",
      caption: "End-to-end workflow: collaborator token access, automated review and merge into the live WordPress database, then automated email and export outputs back to collaborators and the website administrator.",
    },
    impact: [
      "Cut the website administrator's per-round update time from roughly three days of manual spreadsheet work to about three minutes of review and approval.",
      "Gave nearly 30 country level collaborators direct, secure, self-service access to their own data for the first time, with zero training or account setup required.",
      "Eliminated manual spreadsheet merging entirely. Every approved change now writes straight into the live database.",
      "Made the platform self-extending, so the administrator can grow the dataset with new fields indefinitely without further development work.",
      "Replaced an untraceable, shared spreadsheet based update process with a fully auditable one. Every submission, approval, and notification is automatically logged.",
    ],
    delivered: [
      "WordPress plugin with tokenised collaborator access, table and form based review interfaces, and a shared field registry",
      "Automated review, approval, and audit log system writing directly to the live database",
      "Admin configurable custom fields with zero-code extensibility",
      "Automated invitation and confirmation email system",
      "On-demand Excel export tools for the full dataset and for collaborator mail merges",
    ],
    skills: ["WordPress Plugin Development", "PHP", "MySQL", "Workflow Automation", "ACF", "Data Migration", "Email Automation (SMTP/OAuth2)", "Nonprofit Technology"],
  },
  "sensingclues-conservation-ai": {
    slug: "sensingclues-conservation-ai",
    title: "SensingClues — Conservation Monitoring Data Pipeline & AI Assistant",
    descriptor: "Conservation Tech · Geospatial AI · LLM Agent Design · Data Engineering",
    links: [
      { label: "GitHub (pipeline)", url: "https://github.com/Fan-shiyu/environmental-ts-data-pipeline" },
      { label: "GitHub (app)", url: "https://github.com/SensingClues/environmental-time-series" },
    ],
    situation: "SensingClues is a conservation technology NGO that provides data tools to wildlife rangers and field practitioners across Africa and Europe. Their existing R Shiny application displayed satellite vegetation and fire data through static, predefined dashboard views — but conservation managers with limited technical backgrounds struggled to extract specific insights without navigating multiple tabs and configuring filters manually. They requested a natural language interface that could answer data questions directly, without requiring dashboard expertise.\n\nThis project was built as a data-for-good initiative through CorrelAid Netherlands, extending a Phase 1 Shiny application built by a previous team. Phase 2 introduced the full backend pipeline, a production-grade data API, and a chart-capable AI assistant — transforming the app from a static application into a conversational data analysis tool.",
    taskIntro: "Design and build a full-stack data system that:",
    task: [
      "Automates monthly satellite data ingestion from Google Earth Engine with no manual steps",
      "Pre-computes analytical products (NDVI time series, anomalies, fire return periods, phenology) and serves them over a REST API",
      "Powers a resilient three-path data loading architecture in the Shiny app (API → Parquet → raw raster fallback)",
      "Enables a conversational AI assistant that answers natural language questions about vegetation and fire data — returning interactive charts, maps, and tables inline in the conversation",
    ],
    approach: [],
    approachContent: [
      { type: "heading", text: "Automated data pipeline" },
      { type: "paragraph", text: "I built a Python pipeline that fetches monthly GeoTIFF rasters from Google Earth Engine (Sentinel-2 NDVI, MODIS NDVI, MODIS burned area) and pre-computes them into Parquet tables and GeoJSON products through two preprocessing passes:" },
      { type: "bullets", items: [
        "Pass A (monthly): NDVI time series, historical baselines, anomalies, per-class statistics, burned area summaries",
        "Pass B (annual): resilience rankings, phenological events, vegetation delta maps, fire return period GeoJSON",
      ] },
      { type: "paragraph", text: "Three GitHub Actions workflows automate the full pipeline on a monthly and annual schedule, with GEE service account authentication, failure alerting via auto-opened GitHub issues, and concurrent-run protection." },
      { type: "heading", text: "FastAPI data service" },
      { type: "paragraph", text: "A read-only FastAPI service exposes 15+ endpoints covering NDVI time series, burned area, anomaly, phenology, delta grids, and geometry. Responses use a compact 2D grid format (~7× smaller than naive per-pixel JSON) and are cached in memory (1 hour for time-series, 24 hours for geometry). The service supports both a Shiny-oriented table format and an enriched agent format, and requires no GEE calls at runtime — it reads only pre-computed outputs." },
      { type: "heading", text: "AI Assistant — chart-capable conversational agent" },
      { type: "paragraph", text: "The core architectural insight behind the AI Assistant: instead of having the LLM generate chart code, the agent returns structured JSON references that trigger the existing Shiny plotting functions. The application became the rendering engine; the agent became the reasoning layer. This pattern means any team with a code-based analytics application (Shiny, Streamlit, Dash) can augment it with a conversational agent without rewriting their visualisation layer." },
      { type: "paragraph", text: "The agent supports two response modes:" },
      { type: "bullets", items: [
        "Mode A — chart references: the agent returns a structured reference (chart type, endpoint, params) and the Shiny app renders the result using its existing Plotly, Leaflet, or static image functions. Supports 10 chart types including timeseries, anomaly heatmaps, phenology charts, fire return period maps, delta maps, and multi-year spatial comparison images.",
        "Mode B — agent-computed charts: for custom ranking, filtering, or aggregation questions not covered by existing chart types, the agent computes a summary from its tool results and returns inline data rendered as a simple bar, line, or table.",
      ] },
      { type: "paragraph", text: "The agent uses a tool-calling loop over the FastAPI service via LiteLLM, supporting both Anthropic Claude and OpenAI GPT-4o. Tool description hooks — embedding visual output instructions directly in tool descriptions — proved significantly more reliable than system prompt rules alone for triggering the correct chart type consistently." },
    ],
    approachFigures: [
      {
        src: sensingCluesArchitecture,
        alt: "End-to-end architecture: Google Earth Engine to Python preprocessing to FastAPI data service to R Shiny app and AI agent.",
        caption: "End-to-end pipeline: Google Earth Engine → Python preprocessing → FastAPI data service → R Shiny app + AI agent.",
      },
      {
        src: sensingCluesMonthlyNdvi,
        alt: "The AI assistant rendering a monthly NDVI trend for 2023 as an interactive Plotly chart.",
        caption: "Mode A: monthly NDVI trend for 2023 highlighted against the historical baseline, rendered inline as an interactive Plotly chart.",
      },
      {
        src: sensingCluesFrpMap,
        alt: "The AI assistant rendering an interactive Leaflet fire return period map.",
        caption: "Mode A spatial: the agent returns an frp_map reference and the app renders an interactive Leaflet fire return period map, showing which zones burn most frequently.",
      },
      {
        src: sensingCluesCustomRanking,
        alt: "The AI assistant answering a custom ranking question with an inline bar chart.",
        caption: "Mode B: for a custom ranking question (\"which 3 years had the highest burned area?\"), the agent computes the result from its tool data and returns inline chart data rendered as a simple bar chart.",
      },
    ],
    impact: [
      "Conservation practitioners can now ask natural language questions about satellite vegetation and fire data — receiving answers as text, interactive charts, spatial maps, or tables — without navigating a complex dashboard or requiring technical training.",
      "The automated pipeline eliminates manual data processing: monthly satellite data is fetched, preprocessed, and deployed with no human intervention, keeping the application current for active field use across Zambia Mponda and West Lunga National Park.",
      "The \"chart reference\" architecture — where the agent orchestrates existing application functions rather than generating chart code — provides a reusable pattern for augmenting any code-based analytics application with a conversational agent layer.",
      "The project demonstrates that NGO-deployed AI systems can match the technical depth of commercial products while serving conservation and social-good missions that commercial investment rarely reaches.",
    ],
    delivered: [
      "Automated Python data pipeline (GEE → Parquet/GeoJSON) with GitHub Actions CI/CD (monthly + annual)",
      "FastAPI data service with 15+ endpoints, in-memory caching, and compact grid format",
      "Three-path resilient data loading architecture in the R Shiny application",
      "AI Assistant tab with Mode A chart references (10 chart types) and Mode B agent-computed charts/tables",
      "Tool description hooks for reliable structured agent output — validated across 28 test scenarios",
    ],
    skills: ["LLM Agent Design", "FastAPI", "Python", "R / Shiny", "Google Earth Engine", "Geospatial Data", "GitHub Actions", "MLOps", "LiteLLM", "Plotly", "Leaflet"],
  },
  "growing-roots-azc-data-platform": {
    slug: "growing-roots-azc-data-platform",
    title: "Growing Roots — Data Pipeline, Web App & Impact Dashboard for AZC Community Gardens",
    descriptor: "NGO Tech · Data Engineering · Full-Stack Development · Business Intelligence",
    github: "https://github.com/CorrelAidxNL/growing-roots",
    situation: "Growing Roots, a program of the Dutch NGO The Present, runs community gardens at asylum seeker centres (AZCs) across two locations in Amsterdam. Gardeners recorded weekly attendance, activities, and donations by hand on paper, then transcribed the records into loose spreadsheets after the fact, a process prone to missed sessions, inconsistent formats, and transcription errors, and one that gave the organisation no reliable way to report on its own impact to funders and stakeholders.",
    task: [
      "As Project Lead for a CorrelAid Netherlands team, design and build a complete data infrastructure for the program: a structured database, an automated pipeline to consolidate a year of fragmented historical records, a web application for real-time field data entry, and a companion dashboard, all built to scale cleanly as the program adds new garden locations, rather than being rebuilt each time it grows.",
    ],
    approach: [
      "Database design: a six-tab relational schema (Participants, Session Agenda, Attendance, Ecological, Donations, Audit Log) with a clear separation between auto-generated fields (IDs, timestamps, computed flags like \"new this session\") and gardener-entered fields, with fully protected ranges so every write is forced through the application layer rather than direct spreadsheet editing.",
      "Automation layer: replaced the paper-to-spreadsheet workflow entirely. A gardener now enters session data once, in the field, through the web app: the pipeline validates, structures, and writes it directly into the database with zero manual re-keying. A companion Python pipeline also consolidated a year of fragmented historical records (~171 participants, ~106 sessions, ~2,600+ attendance rows across two sites) into the new schema, including name-matching logic to preserve participant continuity across years.",
      "Web application: a Google Apps Script app giving gardeners a guided weekly submission flow (attendance, donations, photos, quotes) with offline support (submissions queue locally and sync automatically once back online), and giving coordinators season-planning tools and settings management, with role- and location-based access control throughout.",
      "Built for scale: locations are never hardcoded. Both the app and the dashboard read active gardens from a live settings table, so onboarding a new AZC location is a data entry, not a code change: no new dropdowns, forms, or dashboard pages to build by hand as the program grows.",
      "Dashboard: designed and directed development of a companion Looker Studio dashboard on the same database schema (participant demographics, activity trends, donations, and ecological metrics), built with the same scalability principle, so new sites and new metrics extend the existing pages rather than requiring new ones.",
      "Authentication redesign: later re-architected how the app authenticates users, moving from per-user execution permissions to a single dedicated identity for all data operations, a change driven by a platform-level restriction discovered in Apps Script's hosting environment, solved with Google's OAuth redirect flow while preserving accurate per-user audit logging throughout the transition.",
    ],
    approachFigure: {
      src: growingRootsArchitecture,
      alt: "End-to-end architecture: paper records digitized into an automated Python pipeline, loaded into a structured Google Sheets database, read and written by a Google Apps Script web app, and visualized in a Looker Studio dashboard.",
      caption: "End-to-end data system: paper records → automated pipeline → structured Google Sheets database → web app (real-time entry) → Looker Studio dashboard.",
    },
    impact: [
      "Eliminated manual double-entry across two active locations: gardeners now enter data once, in the field, instead of transcribing paper records after the fact.",
      "Gives Growing Roots reliable, decision-ready reporting for funders and program leadership for the first time, replacing ad hoc, after-the-fact data collection.",
      "Designed to grow with the program: adding a new AZC garden requires no code changes to either the app or the dashboard, directly supporting the organisation's goal of opening new locations year over year.",
    ],
    delivered: [
      "Automated Python pipeline consolidating historical multi-location records into a structured database",
      "Six-tab relational Google Sheets database with protected ranges and automatic vs. gardener-entered field separation",
      "Google Apps Script web app: gardener submission flow, offline queueing, coordinator planning and settings tools, role/location-based access control",
      "Looker Studio impact dashboard: participant demographics, activity trends, donations, and ecological metrics",
      "Bilingual (EN/NL) user guides for gardeners and coordinators",
    ],
    skills: ["Python", "Google Apps Script", "Google Sheets API", "OAuth 2.0", "Data Pipeline Design", "Looker Studio", "Data Modeling", "Stakeholder Management", "NGO Program Design"],
  },
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
