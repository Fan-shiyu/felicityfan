import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  status: string;
  overview: string;
  problemStatement?: string[];
  coreIdea?: string;
  approach: string;
  technicalDetails: string[];
  implementation?: string[];
  outcomes: string[];
  limitations?: string[];
  tools: string[];
  skills?: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "multivariate-cosine-similarity",
    title: "Quantifying Similarity Between Datasets Through Projections",
    description: "A projection-based multivariate cosine similarity method with open-source tools in R, Python, and a web application.",
    tags: ["Research", "Statistical Methods", "Python", "R", "Web Application"],
    category: "Research",
    status: "Completed · Published",
    overview: "Comparing whether two datasets are similar is a surprisingly difficult problem. In practice, similarity is often reduced to univariate statistics, distance metrics, or distributional tests—methods that struggle to capture multivariate structure, directional variance, and interpretability.\n\nI wanted to answer a more fundamental question: when can we say that two datasets are genuinely comparable in a multivariate sense—and how can we explain that similarity geometrically?\n\nThis project emerged from that question and evolved into a new projection-based multivariate cosine similarity method, alongside open-source tools that make the method accessible to both technical and non-technical users.",
    problemStatement: [
      "Most measures collapse multivariate structure into a single scalar without explanation",
      "Many are sensitive to scale, noise, or dimensionality",
      "They provide little insight into why two datasets are similar or different",
      "Practitioners need a global similarity score, geometric intuition, and visual diagnostics",
    ],
    coreIdea: "The key idea is to view dataset similarity through the geometry of projections. Each dataset is represented in a reduced multivariate space using PCA. Principal directions from one dataset are projected onto the PCA space of the other. Similarity is quantified using a cosine-based metric reflecting alignment of directions, relative variance captured, and angular relationships between components. This yields a scalar similarity score, vector lengths and angles with direct geometric meaning, and a natural foundation for visualization.",
    approach: "The workflow consists of four steps: dimensionality reduction via PCA applied independently to each dataset; projection and alignment of principal components from one dataset into the space of the other; cosine similarity computation using a multivariate formulation that aggregates directional agreement; and diagnostic analysis with visualization using angles, vector lengths, and projections to explain where similarity comes from and where it breaks down. A deliberate design choice was to keep the method model-agnostic, interpretable, and robust to noise.",
    technicalDetails: [
      "PCA-based dimensionality reduction with flexible control over retained components",
      "Principal component projection and alignment across dataset spaces",
      "Multivariate cosine similarity formulation aggregating directional agreement",
      "Diagnostic visualization of angles, vector lengths, and projections (1D, 2D, 3D)",
    ],
    implementation: [
      "R package (adt) — PCA-based projection objects, similarity computation, and rich diagnostic visualizations for statistical exploration",
      "Python package (adtpy) — Modular architecture with reusable projection and plotting utilities, seamless NumPy and pandas integration",
      "Web application — User-facing interface abstracting the mathematics, allowing non-technical users to upload datasets, compute similarity scores, and explore projections visually",
    ],
    outcomes: [
      "Projection-based cosine similarity captures structural comparability missed by standard metrics",
      "Directional disagreement between datasets is often more informative than marginal distribution differences",
      "Visualization of projections significantly improves interpretability and trust in similarity scores",
      "Similarity is rarely uniform across components—exposing that structure is often more valuable than a single number",
    ],
    limitations: [
      "PCA-based representations may miss non-linear structure",
      "Sensitivity to component selection requires careful interpretation",
      "Extension to time-dependent or functional data remains open",
      "Planned extensions include nonlinear embeddings, robust PCA variants, and domain-specific similarity weighting",
    ],
    tools: ["Python", "R", "NumPy", "pandas", "Shiny", "PCA", "Cosine Similarity"],
    skills: [
      "Statistical Method Design",
      "Multivariate Analysis",
      "PCA",
      "Geometry-Based Similarity",
      "Python & R Package Development",
      "Data Visualization",
      "Research-to-Product Translation",
    ],
    links: [
      { label: "R Package", url: "https://github.com/Fan-shiyu/Multivariate-Cosine-Similarity" },
      { label: "Python Package", url: "https://github.com/Fan-shiyu/adtpy" },
      { label: "Web Application", url: "https://5683wm-shiyu-fan.shinyapps.io/Multivariate_Cosine_Similarity/" },
    ],
  },
  {
    slug: "decision-lab-podcast",
    title: "The Decision Lab",
    description: "Weekly podcast exploring how leaders make high-stakes decisions under uncertainty.",
    tags: ["Podcast", "Leadership", "Decision Science"],
    category: "Podcast",
    status: "Active · 120+ episodes",
    overview: "A long-form interview podcast featuring executives, researchers, and practitioners discussing decision-making processes. Episodes explore cognitive biases, organizational dynamics, and practical heuristics for better decisions.",
    approach: "Each episode combines narrative storytelling with actionable insights. Guests share specific decisions they've faced, the frameworks they used, and lessons learned from both successes and failures.",
    technicalDetails: [
      "Behavioral economics and cognitive bias research",
      "Bayesian reasoning and probabilistic thinking",
      "Organizational decision-making processes",
      "Risk assessment and mitigation strategies",
    ],
    outcomes: [
      "120+ episodes published",
      "50,000+ monthly downloads",
      "Featured in Apple Podcasts Business Top 100",
    ],
    tools: ["Riverside.fm", "Descript", "Transistor"],
    links: [{ label: "Listen", url: "https://example.com/podcast" }],
  },
  {
    slug: "climate-collective",
    title: "Climate Collective",
    description: "Pro-bono consulting initiative supporting climate-focused startups with data strategy and analytics.",
    tags: ["Non-profit", "Climate Tech", "Advisory"],
    category: "Non-profit",
    status: "Founded 2021 · 15 ventures supported",
    overview: "A volunteer-driven initiative connecting experienced data professionals with early-stage climate tech startups. We provide strategic guidance on data infrastructure, analytics capabilities, and measurement frameworks.",
    approach: "Engagements typically span 3-6 months, focusing on building foundational data capabilities. We help startups define key metrics, establish data collection processes, and build dashboards for investor reporting.",
    technicalDetails: [
      "Carbon accounting and emissions measurement methodologies",
      "Impact metrics design and tracking frameworks",
      "Data infrastructure setup (warehousing, ETL pipelines)",
      "Investor-ready analytics and reporting dashboards",
    ],
    outcomes: [
      "15 climate startups supported",
      "$50M+ in follow-on funding raised by portfolio",
      "Open-source carbon tracking toolkit released",
    ],
    tools: ["dbt", "Snowflake", "Looker", "Python"],
    links: [{ label: "Visit", url: "https://example.com/climate" }],
  },
];

const Projects = () => {
  return (
    <div className="page-section">
      <div className="container-narrow">
        <header className="max-w-2xl mb-16">
          <h1 className="fade-up">Side Projects</h1>
          <p className="mt-6 text-lg text-muted-foreground fade-up delay-100">
            Independent projects exploring data science, optimization, and 
            research-driven methods.
          </p>
        </header>

        <div className="space-y-4 fade-up delay-200">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group block p-6 md:p-8 bg-card border border-border hover:border-muted-foreground/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-xl md:text-2xl group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                
                <div className="text-sm text-muted-foreground md:text-right flex-shrink-0">
                  {project.status}
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
