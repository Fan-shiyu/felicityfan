import { CaseData } from "@/components/CaseTemplate";
import cmsArchitecture from "@/assets/hackathons/cms-luminance/architecture.svg";

export interface HackathonCard {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  /** Award won, rendered as a badge on the card (e.g. "Anthropic Prize", "First Prize") */
  award?: string;
}

export const hackathonCards: HackathonCard[] = [
  {
    slug: "cms-luminance",
    title: "CMS & Luminance — AI-Powered Legal Case Theory Stress-Test",
    description: "Legal AI · Evidence Retrieval · Graph Analytics · NLP Pipeline",
    tags: ["Legal AI", "Evidence Retrieval", "Knowledge Graph"],
    award: "Anthropic Prize",
  },
  {
    slug: "houthoff-legal-intelligence",
    title: "Houthoff — AI-Driven Domain Intelligence for Legal Due Diligence",
    description: "Legal Tech · Generative AI · Risk Analytics",
    tags: ["Generative AI", "Legal Tech", "Risk Analytics"],
    award: "First Prize",
  },
  {
    slug: "nestle-vreugdenhil",
    title: "Nestlé & Vreugdenhil — Farmer-Centric Sustainability Analytics & Privacy-Preserving Benchmarking",
    description: "AgriTech · Sustainability Analytics · Data Platforms",
    tags: ["Sustainability Analytics", "AgriTech", "Privacy-by-Design"],
    award: "First Prize",
  },
];

export const hackathonDetails: Record<string, CaseData> = {
  "cms-luminance": {
    slug: "cms-luminance",
    title: "CMS & Luminance — AI-Powered Legal Case Theory Stress-Test",
    descriptor: "Legal AI · Evidence Retrieval · Graph Analytics · NLP Pipeline",
    github: "https://github.com/Fan-shiyu/pleading-to-proof",
    liveUrl: "https://pleading-to-proof-txpb.vercel.app/",
    situation:
      "In complex commercial litigation, legal teams face a recurring and costly challenge: establishing whether each pleaded allegation is actually provable on the available evidence. Cross-referencing a litigation bundle against every allegation in the pleadings is manual, time-consuming, and error-prone. Important contradictions are often discovered late, and evidential gaps are not identified until a case is already committed to trial.\n\nCMS, one of Europe's leading law firms, and Luminance, a pioneer in legal AI, identified this as a structural inefficiency in how litigation teams assess case strength. They commissioned a solution to automate the pleading-to-evidence mapping process, surface hidden contradictions — including cases where a client's own documents undermine their own pleaded case — and deliver a structured case theory stress-test accessible to both legal professionals and non-technical stakeholders.",
    task: [
      "Design and build an end-to-end AI pipeline that maps every pleaded allegation to the available evidence, classifying each as supported, contradicted, or evidentially absent, and ranking all allegations by litigation risk",
      "Operate on any litigation bundle without case-specific configuration, and support matters where no pleadings yet exist",
      "Produce outputs — proof matrix, risk dashboard, gap analysis, and evidence graph — that non-technical legal professionals could interpret and act on directly",
    ],
    approach: [
      "Six-stage AI pipeline for legal document analysis: type-aware ingestion respects the natural legal unit of each document (contract clauses, witness-statement paragraphs, expert-opinion sections, issue-log entries), with a formal legal citation assigned to each passage at ingestion and preserved unchanged through the entire pipeline",
      "Proposition extraction: where pleadings exist, a large language model extracts all propositions at temperature 0.0 from the Particulars of Claim, assigning each a legal element type and importance weight; where none exist, UMAP dimensionality reduction and HDBSCAN clustering infer the legal themes from the evidence, enabling the tool to operate at the earliest stages of a matter",
      "Hybrid evidence retrieval: BM25 sparse retrieval using a custom legal tokeniser (preserving monetary figures, clause references, and legal negations) is fused with dense semantic embeddings via Reciprocal Rank Fusion; a cross-encoder NLI model filters retrieved passages by direction before final classification by an LLM, which produces a score from −2 to +2, a verbatim quote, and a plain-English reason",
      "Hallucination prevention: accuracy is enforced through seven independent validation layers — every classification must be anchored to a verbatim quote programmatically validated as a literal substring of the source document; any passage failing validation is quarantined for human review and never reaches the proof matrix as a confirmed finding",
      "Legally-grounded scoring: proof scores are a weighted sum normalised by maximum possible evidence weight, with source-credibility weights grounded in Gestmin v Credit Suisse [2013] and Walter Lilly v Mackay [2012]; a dedicated CONTRADICTED_BY_OWN_EVIDENCE label fires when the dominant contradicting evidence comes from the claimant's own documents; all nodes and relationships load into a Neo4j knowledge graph (SUPPORTS, CONTRADICTS, CORROBORATES, and CITES edges)",
    ],
    approachFigure: {
      src: cmsArchitecture,
      alt: "Architecture diagram of the six-stage AI pipeline, from type-aware document ingestion through hybrid retrieval and validation to the scored proof matrix and Neo4j evidence graph.",
      caption:
        "Architecture: the six-stage pipeline mapping every pleaded allegation to evidence, with validation guardrails and a Neo4j evidence graph.",
    },
    impact: [
      "Applied to a commercial technology dispute bundle, the tool surfaced critical case vulnerabilities within minutes of ingestion",
      "Multiple allegations were flagged CONTRADICTED_BY_OWN_EVIDENCE at maximum litigation risk — including a no-acceptance claim directly contradicted by the claimant's own signed acceptance certificate and the witness statement of the executive who signed it",
      "A pleaded platform-unavailability figure was contradicted by the claimant's own independent IT expert, who found materially lower unavailability with the largest outage attributable to the claimant's own network provider",
      "A substantial loss-of-profit claim was found significantly overstated by the claimant's own forensic accountant, who attributed a material shortfall to causes unrelated to the defendant",
      "Two allegations were identified as evidential gaps, with no supporting evidence present in the bundle — both would likely fail under the balance of probabilities standard",
    ],
    delivered: [
      "An end-to-end AI pipeline processing a full litigation bundle from raw documents to scored propositions, without manual configuration or case-specific customisation",
      "A proof matrix mapping every pleaded allegation to its evidential status, proof score, litigation risk score, and most determinative citation — a Scott Schedule built by AI",
      "A litigation risk dashboard and gap analysis report distinguishing evidential absence from evidential contradiction",
      "An interactive Neo4j evidence graph with document and passage-level views, corroboration filtering, and citation chain navigation",
      "A citation-complete audit trail from every risk score to a verbatim quote in a named document — every finding independently verifiable by a lawyer in seconds",
      "A deployed public tool accessible at pleading-to-proof-txpb.vercel.app",
    ],
    skills: [
      "Legal AI",
      "Natural Language Processing",
      "Hybrid Information Retrieval (BM25 + Dense + RRF)",
      "LLM Engineering",
      "Hallucination Prevention",
      "Knowledge Graph Design (Neo4j)",
      "Legal Scoring Methodology",
      "Full-Stack Development (React · Vite)",
      "End-to-End AI Pipeline Architecture",
    ],
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
  "nestle-vreugdenhil": {
    slug: "nestle-vreugdenhil",
    title: "Nestlé & Vreugdenhil — Farmer-Centric Sustainability Analytics & Privacy-Preserving Benchmarking",
    descriptor: "AgriTech · Sustainability Analytics · Data Platforms",
    situation:
      "Dairy farmers operate in a fragmented data landscape, where sustainability-relevant information — such as emissions, feed efficiency, and milk production — is spread across Excel files, APIs, and proprietary systems. At the same time, sustainability reporting and environmental performance requirements are increasing, placing higher demands on data accuracy, timeliness, and transparency.\n\nNestlé and Vreugdenhil explored how data and analytics could give farmers real-time sustainability insight, while ensuring data ownership, privacy, and competitive confidentiality.",
    task: [
      "Monitor environmental and production performance in real time",
      "Track sustainability KPIs at actionable levels of granularity",
      "Benchmark performance against peers without exposing sensitive farm data",
      "Support both operational decisions and regulatory reporting",
    ],
    approach: [
      "Designed and implemented a farmer-centric sustainability analytics platform, with a strong focus on usability, data integration, and privacy-by-design",
      "Unified sustainability data layer, integrating fragmented agri-data sources (Excel, APIs, proprietary systems) into a single analytics pipeline",
      "Domain-specific sustainability KPIs, defined at sub-barn and per-animal level, covering emissions (NH₃, CH₄), feed efficiency, milk yield, and quality indicators",
      "Decision-ready dashboards, featuring KPI summary cards, time-series trends, benchmarking visuals, and composite sustainability scores",
      "Privacy-preserving benchmarking, allowing farmers to compare performance against regional or peer averages using aggregated and synthetic data, without sharing farm-level details",
      "Developed in close collaboration with domain experts to ensure alignment with real farm operations and industry requirements",
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
    skills: [
      "Sustainability Analytics",
      "Data Integration",
      "KPI Design",
      "Dashboard Design",
      "Privacy-by-Design",
      "AgriTech Data Systems",
    ],
  },
};
