import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  status: string;
  overview: string;
  approach: string;
  technicalDetails: string[];
  outcomes: string[];
  tools: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "strategy-playbook",
    title: "Strategy Playbook",
    description: "A comprehensive guide distilling strategic frameworks and methodologies into actionable playbooks.",
    tags: ["Writing", "Strategy", "Frameworks"],
    category: "Writing",
    status: "In progress · Expected 2024",
    overview: "A book project synthesizing 15+ years of consulting experience into accessible frameworks for strategists and business leaders. The playbook covers problem structuring, hypothesis-driven analysis, and stakeholder communication.",
    approach: "Each chapter follows a consistent structure: conceptual foundation, practical methodology, real-world examples, and exercises. The content is informed by both academic research and hands-on consulting experience.",
    technicalDetails: [
      "Structured problem-solving methodologies (MECE, issue trees, hypothesis pyramids)",
      "Quantitative analysis frameworks for market sizing and financial modeling",
      "Stakeholder mapping and influence analysis techniques",
      "Decision-making under uncertainty using scenario planning",
    ],
    outcomes: [
      "12 chapters covering end-to-end strategic engagement lifecycle",
      "50+ frameworks and templates",
      "Case studies from multiple industries",
    ],
    tools: ["Notion", "Figma", "LaTeX"],
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
    link: "https://example.com/podcast",
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
    link: "https://example.com/climate",
  },
  {
    slug: "ml-optimization-library",
    title: "OptimizeML",
    description: "Open-source Python library for hyperparameter optimization using Bayesian methods.",
    tags: ["Open Source", "Machine Learning", "Python"],
    category: "Open Source",
    status: "Active · 2,500+ GitHub stars",
    overview: "A lightweight, research-backed library implementing state-of-the-art Bayesian optimization algorithms for machine learning hyperparameter tuning. Designed for both practitioners and researchers.",
    approach: "The library prioritizes ease of use without sacrificing flexibility. It supports multiple acquisition functions, handles mixed parameter spaces, and integrates seamlessly with popular ML frameworks.",
    technicalDetails: [
      "Gaussian Process-based surrogate modeling with custom kernels",
      "Expected Improvement, UCB, and Thompson Sampling acquisition functions",
      "Support for categorical, continuous, and conditional parameters",
      "Parallel optimization with asynchronous evaluation support",
      "Integration with scikit-learn, PyTorch, and TensorFlow",
    ],
    outcomes: [
      "2,500+ GitHub stars",
      "Used by 3 Fortune 500 companies",
      "Published paper at NeurIPS workshop",
    ],
    tools: ["Python", "NumPy", "SciPy", "GPyTorch"],
    link: "https://github.com",
  },
  {
    slug: "real-estate-optimization",
    title: "PropOptimizer",
    description: "Research project applying operations research methods to real estate portfolio optimization.",
    tags: ["Research", "Optimization", "Real Estate"],
    category: "Research",
    status: "Completed · 2023",
    overview: "An academic research project developing novel optimization algorithms for real estate portfolio construction. The work combines modern portfolio theory with constraint programming to handle real-world investment constraints.",
    approach: "We formulated the problem as a mixed-integer quadratic program (MIQP) and developed custom decomposition methods to handle large-scale instances. The approach was validated on historical data from commercial real estate markets.",
    technicalDetails: [
      "Mixed-integer quadratic programming (MIQP) formulation",
      "Benders decomposition for computational tractability",
      "Monte Carlo simulation for risk modeling",
      "Robust optimization for parameter uncertainty",
    ],
    outcomes: [
      "15% improvement in risk-adjusted returns vs. benchmark",
      "Paper accepted at Operations Research journal",
      "Algorithm licensed by real estate investment firm",
    ],
    tools: ["Python", "Gurobi", "CVXPY", "pandas"],
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
