export interface ProjectCard {
  slug: string;
  title: string;
  tags: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  descriptor: string;
  links?: ProjectLink[];
  motivation: string;
  problemContext: string[];
  approach: string[];
  results: string[];
  analysisToAction?: string[];
  deliverables: string[];
  skills: string[];
}

export const projectCards: ProjectCard[] = [
  {
    slug: "multivariate-cosine-similarity",
    title: "Quantifying Similarity Between Datasets Through Projections",
    tags: ["Research", "Statistical Methods", "Python", "R", "Web Application"],
  },
  {
    slug: "insurance-claim-optimization",
    title: "Smarter Insurance Claim Investigations Through Data-Driven Optimization",
    tags: ["Optimization", "Machine Learning", "Insurance Analytics"],
  },
  {
    slug: "customer-journey-analysis",
    title: "Improving Customer Experience Through Data-Driven Journey Analysis",
    tags: ["Customer Analytics", "Experience Optimization", "Business Insight"],
  },
];

export const projectDetails: Record<string, ProjectData> = {
  "multivariate-cosine-similarity": {
    slug: "multivariate-cosine-similarity",
    title: "Quantifying Similarity Between Datasets Through Projections",
    descriptor: "Research · Statistical Methods · Python · R · Web Application",
    links: [
      { label: "R Package", url: "https://github.com/Fan-shiyu/Multivariate-Cosine-Similarity" },
      { label: "Python Package", url: "https://github.com/Fan-shiyu/adtpy" },
      { label: "Web Application", url: "https://5683wm-shiyu-fan.shinyapps.io/Multivariate_Cosine_Similarity/" },
    ],
    motivation:
      "Comparing whether two datasets are similar is a surprisingly difficult problem. In practice, similarity is often reduced to univariate statistics, distance metrics, or distributional tests—methods that struggle to capture multivariate structure, directional variance, and interpretability.\n\nI wanted to answer a more fundamental question: when can we say that two datasets are genuinely comparable in a multivariate sense—and how can we explain that similarity geometrically?\n\nThis project emerged from that question and evolved into a new projection-based multivariate cosine similarity method, alongside open-source tools that make the method accessible to both technical and non-technical users.",
    problemContext: [
      "Most existing measures collapse multivariate structure into a single scalar without explanation",
      "Many are sensitive to scale, noise, or dimensionality",
      "They provide little insight into why two datasets are similar or different",
      "Practitioners need a global similarity score, geometric intuition, and visual diagnostics",
    ],
    approach: [
      "PCA applied independently to each dataset with flexible control over retained components",
      "Principal components from one dataset projected into the space of the other, producing interpretable vectors",
      "Cosine similarity computed using a multivariate formulation aggregating directional agreement across components",
      "Diagnostic analysis and visualization using angles, vector lengths, and projections to explain where similarity comes from—and where it breaks down",
      "A deliberate design choice to keep the method model-agnostic, interpretable, and robust to noise",
    ],
    results: [
      "Projection-based cosine similarity captures structural comparability missed by standard metrics",
      "Directional disagreement between datasets is often more informative than marginal distribution differences",
      "Visualization of projections significantly improves interpretability and trust in similarity scores",
      "Similarity is rarely uniform across components—exposing that structure is often more valuable than a single number",
    ],
    analysisToAction: [
      "Implemented end-to-end in R (adt package), Python (adtpy), and a Shiny web application for non-technical users",
      "Each artifact was designed for a different audience: statistical exploration, programmatic integration, and visual interaction",
      "Focus on reproducibility, consistent APIs, and clear separation between computation and visualization",
    ],
    deliverables: [
      "R package (adt) — PCA-based projection objects, similarity computation, and diagnostic visualizations",
      "Python package (adtpy) — modular architecture with NumPy and pandas integration",
      "Shiny web application — upload datasets, compute similarity, explore projections visually",
    ],
    skills: [
      "Statistical Method Design",
      "Multivariate Analysis",
      "PCA",
      "Geometry-Based Similarity",
      "Python & R Package Development",
      "Data Visualization",
      "Research-to-Product Translation",
    ],
  },
  "insurance-claim-optimization": {
    slug: "insurance-claim-optimization",
    title: "Smarter Insurance Claim Investigations Through Data-Driven Optimization",
    descriptor: "Optimization · Machine Learning · Insurance Analytics",
    motivation:
      "Insurance claim investigations are resource-intensive and often guided by heuristics rather than data. The challenge is to allocate limited investigator capacity to claims with the highest expected return—balancing fraud detection accuracy with operational cost.",
    problemContext: [
      "Claim investigation decisions are often rule-based and inconsistent across adjusters",
      "High false-positive rates waste investigator time on legitimate claims",
      "Limited visibility into which claim features predict investigation value",
      "Trade-offs between investigation depth and throughput are not systematically managed",
    ],
    approach: [
      "Developed a data-driven framework combining predictive modeling with optimization",
      "Built classification models to estimate fraud probability per claim",
      "Designed an optimization layer to allocate investigation resources under capacity constraints",
      "Incorporated cost-benefit analysis to prioritize claims by expected financial return",
      "Validated against historical investigation outcomes to measure uplift",
    ],
    results: [
      "Improved investigation hit rate compared to rule-based baseline",
      "Reduced wasted investigator effort on low-value claims",
      "Quantified the relationship between investigation capacity and recovery potential",
      "Demonstrated that combining prediction with optimization outperforms either approach alone",
    ],
    deliverables: [
      "Predictive fraud scoring model",
      "Resource allocation optimization framework",
      "Cost-benefit analysis and scenario evaluation",
      "Recommendations for operational integration",
    ],
    skills: [
      "Optimization",
      "Machine Learning",
      "Cost-Benefit Analysis",
      "Insurance Analytics",
      "Python",
      "Operations Research",
    ],
  },
  "customer-journey-analysis": {
    slug: "customer-journey-analysis",
    title: "Improving Customer Experience Through Data-Driven Journey Analysis",
    descriptor: "Customer Analytics · Experience Optimization · Business Insight",
    motivation:
      "Customer journeys are complex, multi-channel, and often poorly understood. Most organizations track individual touchpoints but lack a holistic view of how customers move through their experience—and where friction, drop-off, or dissatisfaction occurs.",
    problemContext: [
      "Touchpoint-level metrics miss the full picture of end-to-end customer experience",
      "Journey data is fragmented across systems, making holistic analysis difficult",
      "Identifying root causes of drop-off or dissatisfaction requires connecting behavioral and attitudinal data",
      "Translating journey insights into actionable improvements requires cross-functional alignment",
    ],
    approach: [
      "Mapped customer journeys from behavioral and survey data across multiple channels",
      "Identified key friction points and moments of truth using statistical analysis",
      "Segmented customers by journey patterns to reveal distinct experience profiles",
      "Quantified the impact of journey quality on business outcomes (retention, satisfaction, revenue)",
      "Developed actionable recommendations prioritized by impact and feasibility",
    ],
    results: [
      "Identified critical drop-off points that were previously undetected",
      "Revealed distinct customer segments with fundamentally different journey patterns",
      "Quantified the business impact of journey improvements at each stage",
      "Enabled data-driven prioritization of experience investments",
    ],
    analysisToAction: [
      "Translated journey insights into a prioritized improvement roadmap",
      "Aligned cross-functional teams around shared journey metrics and goals",
      "Established ongoing journey monitoring to track improvement impact over time",
    ],
    deliverables: [
      "End-to-end customer journey map with quantified friction points",
      "Customer segmentation by journey behavior",
      "Impact analysis linking journey quality to business outcomes",
      "Prioritized improvement roadmap with estimated impact",
    ],
    skills: [
      "Customer Analytics",
      "Journey Mapping",
      "Statistical Analysis",
      "Data Visualization",
      "Experience Design",
      "Business Strategy",
    ],
  },
};
