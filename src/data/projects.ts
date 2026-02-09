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
  coreIdea?: string;
  methodology?: string[];
  approach: string[];
  implementationDesign?: string[];
  results: string[];
  limitations?: string[];
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
      "Comparing whether two datasets are similar is a surprisingly difficult problem. In practice, similarity is often reduced to univariate statistics, distance metrics, or distributional tests—methods that struggle to capture multivariate structure, directional variance, and interpretability.\n\nI wanted to answer a more fundamental question:\n\nWhen can we say that two datasets are genuinely comparable in a multivariate sense—and how can we explain that similarity geometrically?\n\nThis project emerged from that question and evolved into a new projection-based multivariate cosine similarity method, alongside open-source tools that make the method accessible to both technical and non-technical users.",
    problemContext: [
      "They collapse multivariate structure into a single scalar without explanation",
      "They are sensitive to scale, noise, or dimensionality",
      "They provide little insight into why two datasets are similar or different",
      "In applied settings (e.g. nutrition, social science, experimental data), practitioners need a global similarity score, geometric intuition behind that score, and visual diagnostics to support interpretation",
    ],
    coreIdea:
      "The key idea behind this project is to view dataset similarity through the geometry of projections.\n\nEach dataset is first represented in a reduced multivariate space using Principal Component Analysis (PCA). Principal directions from one dataset are projected onto the PCA space of the other. Similarity is quantified using a cosine-based metric that reflects alignment of directions, relative variance captured, and angular relationships between components.\n\nThis yields a scalar similarity score, vector lengths and angles with direct geometric meaning, and a natural foundation for visualization (1D, 2D, 3D).",
    methodology: [
      "Dimensionality reduction — PCA is applied independently to each dataset, with flexible control over the number of retained components",
      "Projection & alignment — Principal components from one dataset are projected into the space of the other, producing interpretable vectors",
      "Cosine similarity computation — Similarity is computed using a multivariate cosine formulation that aggregates directional agreement across components",
      "Diagnostic analysis & visualization — Angles, vector lengths, and projections are used to explain where similarity comes from—and where it breaks down",
    ],
    approach: [
      "A deliberate design choice was to keep the method model-agnostic, interpretable, and robust to noise rather than optimizing for black-box accuracy",
    ],
    implementationDesign: [
      "R package (adt) — Designed for statistical exploration, providing PCA-based projection objects, similarity computation, and rich diagnostic visualizations",
      "Python package (adtpy) — A Pythonic implementation with modular architecture, reusable projection and plotting utilities, and seamless integration with NumPy and pandas workflows",
      "Web application — A user-facing interface that abstracts the mathematics, allowing non-technical users to upload datasets, compute similarity scores, and explore projections visually",
      "Across all three, the focus was on reproducibility, consistent APIs, and a clear separation between computation and visualization",
    ],
    results: [
      "Projection-based cosine similarity captures structural comparability missed by standard metrics",
      "Directional disagreement between datasets is often more informative than marginal distribution differences",
      "Visualization of projections significantly improves interpretability and trust in similarity scores",
      "Similarity is rarely uniform across components—and exposing that structure is often more valuable than a single number",
    ],
    limitations: [
      "PCA-based representations may miss non-linear structure",
      "Sensitivity to component selection requires careful interpretation",
      "Extension to time-dependent or functional data remains open",
      "Planned extensions include nonlinear embeddings, robust PCA variants, and domain-specific similarity weighting",
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
    links: [
      { label: "GitHub", url: "https://github.com/Fan-shiyu/Insurance_Claim_Optimization/" },
    ],
    motivation:
      "Insurance claim investigations involve a delicate balance. Investigating too aggressively increases operational costs, while investigating too little exposes insurers to unnecessary overpayments. In practice, investigation decisions are often rule-based or experience-driven, making it difficult to consistently optimize outcomes at scale.\n\nI wanted to explore how data science could move this process from heuristics to optimization, turning investigation decisions into a measurable, explainable, and value-driven system.",
    problemContext: [
      "For each claim, insurers can choose between multiple investigation types: on-site investigations (accurate but expensive), desk investigations (cheaper but less thorough), or no investigation (fastest but carries financial risk)",
      "The core challenge is not prediction alone, but deciding which investigation type delivers the highest overall value, given both investigation cost and overpayment risk",
    ],
    methodology: [
      "Translating business value into a metric — Rather than optimizing model accuracy in isolation, defined a business-driven objective: Saving = avoided overpayment − investigation cost. This formulation directly connects analytical outputs to financial impact",
      "Predicting claim outcomes — Built a predictive model for claim payout amounts: performed data cleaning and exploratory analysis on claims, payments, and customer attributes; engineered features capturing claim characteristics, timing effects, customer information, and investigation costs; benchmarked multiple regression models and selected LightGBM (R² = 0.742)",
      "Optimizing investigation decisions at scale — Used a Genetic Algorithm to assign investigation types across all claims, maximizing total saving under the defined cost–benefit framework. This allowed the system to balance local claim-level decisions with global portfolio-level outcomes",
    ],
    approach: [
      "End-to-end decision optimization combining predictive modeling with explicit business objectives",
    ],
    results: [
      "The optimized investigation policy achieved more than a threefold improvement in total saving compared to the current strategy",
      "Scenario analysis showed that shifting certain investigations from on-site to desk-based reviews could lead to substantial cost reductions without materially increasing risk",
      "Small, explainable decision changes, when applied consistently at scale, can deliver outsized impact",
    ],
    analysisToAction: [
      "Avoiding costly on-site investigations for low-value claims",
      "Skipping investigations entirely for very small claims where risk is limited",
      "These recommendations are easy to communicate, easy to implement, and grounded in data rather than intuition",
    ],
    deliverables: [
      "A fully reproducible Python workflow covering EDA, modeling, and optimization",
      "A predictive model for estimating claim payout risk",
      "An optimization engine translating predictions into investigation decisions",
      "A stakeholder-ready presentation summarizing insights and recommendations",
    ],
    skills: [
      "Optimization",
      "Feature Engineering",
      "LightGBM",
      "Genetic Algorithms",
      "Business Metric Design",
      "Explainable Decision Systems",
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
