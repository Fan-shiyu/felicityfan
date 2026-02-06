import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <div className="page-section">
      <div className="container-narrow">
        <header className="max-w-2xl mb-16">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4 fade-up">
            Side Projects
          </p>
          <h1 className="fade-up delay-100">Ventures beyond the day job.</h1>
          <p className="mt-6 text-muted-foreground fade-up delay-200">
            Personal projects, experiments, and initiatives that keep me 
            learning and creating.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 fade-up delay-300">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group p-8 bg-card border border-border hover:border-muted-foreground/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs text-muted-foreground tracking-widest uppercase">
                  {project.category}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                )}
              </div>
              
              <h3 className="font-serif text-xl mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground">{project.status}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Strategy Playbook",
    category: "Writing",
    description: "A comprehensive guide to strategic thinking, distilling lessons from 15 years of consulting into actionable frameworks.",
    status: "In progress · Expected 2024",
    link: null,
  },
  {
    title: "The Decision Lab",
    category: "Podcast",
    description: "Weekly conversations with executives and thinkers exploring how great decisions are made under uncertainty.",
    status: "Active · 120+ episodes",
    link: "https://example.com",
  },
  {
    title: "Climate Collective",
    category: "Non-profit",
    description: "Pro-bono consulting for climate-focused startups, helping founders navigate the path from idea to impact.",
    status: "Founded 2021 · 15 ventures supported",
    link: "https://example.com",
  },
  {
    title: "Strategic Frameworks Library",
    category: "Open Source",
    description: "A curated, open-source collection of strategic frameworks and tools for consultants and strategists.",
    status: "Active · 2,000+ GitHub stars",
    link: "https://github.com",
  },
];

export default Projects;
