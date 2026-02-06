import { ArrowUpRight } from "lucide-react";

const Cases = () => {
  return (
    <div className="page-section">
      <div className="container-narrow">
        <header className="max-w-2xl mb-16">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4 fade-up">
            Company Cases
          </p>
          <h1 className="fade-up delay-100">Selected work with leading organizations.</h1>
          <p className="mt-6 text-muted-foreground fade-up delay-200">
            A curated selection of strategic initiatives and transformations 
            I've led across industries.
          </p>
        </header>

        <div className="space-y-1 fade-up delay-300">
          {cases.map((caseItem, index) => (
            <article
              key={index}
              className="group py-8 border-t border-border hover:bg-muted/30 -mx-6 px-6 transition-colors cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-xl">{caseItem.company}</h3>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground">{caseItem.description}</p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground md:text-right">
                  <span>{caseItem.industry}</span>
                  <span className="hidden md:inline">·</span>
                  <span>{caseItem.year}</span>
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
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const cases = [
  {
    company: "Global Financial Services Corp",
    description: "Led a comprehensive digital transformation program, modernizing legacy systems and enabling new revenue streams.",
    industry: "Financial Services",
    year: "2023",
    tags: ["Digital Transformation", "Strategy", "Technology"],
  },
  {
    company: "Nordic Energy Group",
    description: "Designed and implemented a sustainability strategy, achieving carbon neutrality targets two years ahead of schedule.",
    industry: "Energy",
    year: "2022",
    tags: ["Sustainability", "Strategy", "Operations"],
  },
  {
    company: "European Retail Consortium",
    description: "Orchestrated a multi-country merger integration, harmonizing operations across 12 markets.",
    industry: "Retail",
    year: "2022",
    tags: ["M&A Integration", "Organizational Design"],
  },
  {
    company: "HealthTech Innovations",
    description: "Developed go-to-market strategy for breakthrough medical device, achieving 40% market share in 18 months.",
    industry: "Healthcare",
    year: "2021",
    tags: ["Go-to-Market", "Growth Strategy"],
  },
  {
    company: "Industrial Manufacturing Ltd",
    description: "Redesigned supply chain operations, reducing costs by 25% while improving delivery performance.",
    industry: "Manufacturing",
    year: "2020",
    tags: ["Operations", "Supply Chain", "Cost Optimization"],
  },
];

export default Cases;
