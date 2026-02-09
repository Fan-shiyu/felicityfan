import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Code2, Lightbulb, Target, AlertTriangle, Wrench, Layers } from "lucide-react";
import { projects } from "./Projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

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

        <header className="max-w-3xl mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6 fade-up">
            <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full font-medium">
              {project.category}
            </span>
            {project.tags.slice(1).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="fade-up delay-100">{project.title}</h1>
          
          <p className="mt-6 text-xl text-muted-foreground fade-up delay-200">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm fade-up delay-300">
            <span className="text-muted-foreground">{project.status}</span>
            {project.links && project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                {link.label}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </header>

        <div className="grid gap-12 fade-up delay-300">
          {/* Overview / Motivation */}
          <section>
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
              <Lightbulb className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-medium">Motivation</h2>
            </div>
            <div className="text-muted-foreground leading-relaxed max-w-3xl space-y-4">
              {project.overview.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Problem Statement */}
          {project.problemStatement && (
            <section>
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <AlertTriangle className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-lg font-medium">Problem Statement</h2>
              </div>
              <ul className="space-y-3 max-w-3xl">
                {project.problemStatement.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Core Idea */}
          {project.coreIdea && (
            <section>
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <Target className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-lg font-medium">Core Idea</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                {project.coreIdea}
              </p>
            </section>
          )}

          {/* Methodology / Approach */}
          <section>
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
              <Target className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-medium">Methodology</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {project.approach}
            </p>
          </section>

          {/* Technical Details */}
          <section>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <Code2 className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-medium">Technical Details</h2>
            </div>
            <ul className="space-y-3 max-w-3xl">
              {project.technicalDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Implementation & Design */}
          {project.implementation && (
            <section>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <Layers className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-lg font-medium">Implementation & Design</h2>
              </div>
              <ul className="space-y-3 max-w-3xl">
                {project.implementation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Results & Insights */}
          <section>
            <h2 className="text-lg font-medium mb-6 pb-4 border-b border-border">
              Results & Insights
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.outcomes.map((outcome, index) => (
                <div key={index} className="p-4 bg-card border border-border">
                  <span className="text-sm">{outcome}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Limitations & Future Directions */}
          {project.limitations && (
            <section>
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <AlertTriangle className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-lg font-medium">Limitations & Future Directions</h2>
              </div>
              <ul className="space-y-3 max-w-3xl">
                {project.limitations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tools & Technologies */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span key={index} className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Skills */}
          {project.skills && (
            <section>
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <Wrench className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-lg font-medium">Skills Demonstrated</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1.5 text-sm bg-accent/10 text-accent rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium"
          >
            Want to collaborate? Get in touch
            <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
