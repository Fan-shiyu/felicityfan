import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projectCards } from "@/data/projects";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fade-up delay-200">
          {projectCards.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group block p-5 bg-card border border-border hover:border-muted-foreground/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-start gap-3">
                <h2 className="font-serif text-lg group-hover:text-accent transition-colors leading-snug flex-1 min-w-0">
                  {project.title}
                </h2>
                <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-1" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-2 flex-1">
                {project.summary ?? project.tags.join(" · ")}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full"
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
