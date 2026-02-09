import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projectDetails } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectDetails[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="page-section">
        <div className="container-narrow text-center">
          <h1>Project not found</h1>
          <Link to="/projects" className="text-accent hover:underline mt-4 inline-block">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-section">
      <div className="container-narrow">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 fade-up"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        {/* Page Header */}
        <header className="mb-16">
          <h1 className="fade-up">{project.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground fade-up delay-100">
            {project.descriptor}
          </p>
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-6 fade-up delay-100">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </header>

        <div className="space-y-16 fade-up delay-200">
          {/* Motivation */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Motivation
            </h2>
            <div className="text-muted-foreground leading-relaxed max-w-3xl space-y-4">
              {project.motivation.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Problem Context */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Problem Context
            </h2>
            <ul className="space-y-2 max-w-3xl">
              {project.problemContext.map((item, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Approach */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Approach
            </h2>
            <ul className="space-y-2 max-w-3xl">
              {project.approach.map((item, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Results & Insights */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Results & Insights
            </h2>
            <ul className="space-y-2 max-w-3xl">
              {project.results.map((item, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* From Analysis to Action */}
          {project.analysisToAction && (
            <section>
              <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
                From Analysis to Action
              </h2>
              <ul className="space-y-2 max-w-3xl">
                {project.analysisToAction.map((item, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                    <span className="text-accent mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Deliverables */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Deliverables
            </h2>
            <ul className="space-y-2 max-w-3xl">
              {project.deliverables.map((item, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Skills Demonstrated */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Skills Demonstrated
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <Link
            to="/#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium"
          >
            Interested in similar work? Let's talk
            <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
