import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  client: string;
  industry: string;
  year: string;
  challenge: string;
  solution: string;
  impact: string[];
}

export const cases: CaseStudy[] = [
  {
    slug: "financial-services-digital-transformation",
    title: "AI-Powered Customer Analytics Platform",
    description: "Built an end-to-end machine learning platform that transformed customer insights and drove personalization at scale.",
    tags: ["Machine Learning", "Analytics", "Financial Services"],
    client: "Global Financial Services Corp",
    industry: "Financial Services",
    year: "2023",
    challenge: "The client struggled with fragmented customer data across 15+ legacy systems, limiting their ability to deliver personalized experiences and identify cross-sell opportunities.",
    solution: "Designed and implemented a unified customer data platform with real-time ML models for propensity scoring, churn prediction, and next-best-action recommendations. Integrated with existing CRM and marketing automation tools.",
    impact: [
      "35% increase in cross-sell conversion rates",
      "Reduced customer churn by 22%",
      "Unified view of 12M+ customers",
      "Real-time decisioning under 100ms latency",
    ],
  },
  {
    slug: "energy-sustainability-analytics",
    title: "Predictive Maintenance & Energy Optimization",
    description: "Developed IoT-driven analytics solution reducing equipment downtime and optimizing energy consumption across operations.",
    tags: ["IoT", "Predictive Analytics", "Energy"],
    client: "Nordic Energy Group",
    industry: "Energy",
    year: "2022",
    challenge: "Unplanned equipment failures were causing significant operational disruptions and energy waste across their distributed network of power generation facilities.",
    solution: "Deployed sensor networks across critical equipment, built predictive maintenance models using time-series analysis, and created real-time dashboards for operations teams to monitor and optimize energy efficiency.",
    impact: [
      "40% reduction in unplanned downtime",
      "18% improvement in energy efficiency",
      "€15M annual cost savings",
      "Carbon neutrality achieved 2 years early",
    ],
  },
  {
    slug: "retail-demand-forecasting",
    title: "Intelligent Demand Forecasting System",
    description: "Created ML-based demand forecasting engine improving inventory accuracy and reducing stockouts across 12 markets.",
    tags: ["Forecasting", "Supply Chain", "Retail"],
    client: "European Retail Consortium",
    industry: "Retail",
    year: "2022",
    challenge: "Legacy forecasting methods led to chronic inventory imbalances—excess stock in some locations while experiencing stockouts in others, impacting both margins and customer satisfaction.",
    solution: "Built a hierarchical forecasting system incorporating external signals (weather, events, promotions), automated model selection, and seamless integration with inventory management systems.",
    impact: [
      "28% reduction in stockouts",
      "15% decrease in excess inventory",
      "Forecast accuracy improved from 65% to 89%",
      "Automated forecasts for 50K+ SKUs",
    ],
  },
  {
    slug: "healthcare-clinical-analytics",
    title: "Clinical Decision Support Platform",
    description: "Built AI-powered clinical analytics platform improving diagnostic accuracy and patient outcomes.",
    tags: ["Healthcare AI", "Clinical Analytics", "NLP"],
    client: "HealthTech Innovations",
    industry: "Healthcare",
    year: "2021",
    challenge: "Clinicians faced information overload with fragmented patient data, leading to delayed diagnoses and inconsistent treatment recommendations.",
    solution: "Developed NLP models to extract insights from clinical notes, built risk stratification algorithms, and created intuitive dashboards that surface actionable recommendations at the point of care.",
    impact: [
      "25% improvement in early detection rates",
      "Reduced diagnostic time by 40%",
      "40% market share achieved in 18 months",
      "Processing 100K+ clinical notes daily",
    ],
  },
  {
    slug: "manufacturing-supply-chain",
    title: "Supply Chain Visibility & Optimization",
    description: "Implemented real-time supply chain analytics platform delivering end-to-end visibility and cost optimization.",
    tags: ["Supply Chain", "Real-time Analytics", "Manufacturing"],
    client: "Industrial Manufacturing Ltd",
    industry: "Manufacturing",
    year: "2020",
    challenge: "Limited visibility across a complex global supply chain resulted in reactive decision-making, excess buffer inventory, and frequent delivery delays.",
    solution: "Built a control tower solution with real-time tracking, predictive delay detection, and scenario modeling capabilities. Integrated with 200+ suppliers and logistics partners.",
    impact: [
      "25% reduction in supply chain costs",
      "95% on-time delivery (up from 78%)",
      "Real-time visibility across 200+ suppliers",
      "30% reduction in safety stock",
    ],
  },
];

const Cases = () => {
  return (
    <div className="page-section">
      <div className="container-narrow">
        <header className="max-w-2xl mb-16">
          <h1 className="fade-up">Company Cases</h1>
          <p className="mt-6 text-lg text-muted-foreground fade-up delay-100">
            Selected consulting engagements where data-driven solutions delivered 
            measurable business impact.
          </p>
        </header>

        <div className="space-y-4 fade-up delay-200">
          {cases.map((caseItem) => (
            <Link
              key={caseItem.slug}
              to={`/cases/${caseItem.slug}`}
              className="group block p-6 md:p-8 bg-card border border-border hover:border-muted-foreground/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-xl md:text-2xl group-hover:text-accent transition-colors">
                      {caseItem.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <p className="text-muted-foreground">
                    {caseItem.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {caseItem.tags.map((tag, tagIndex) => (
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

export default Cases;
