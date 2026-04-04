import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projectDetails } from "@/data/projects";
import { Seo } from "@/components/Seo";
const ProjectDetail = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const project = slug ? projectDetails[slug] : undefined;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!project) {
    return <div className="page-section">
        <Seo title="Project not found" description="The requested project could not be found." />
        <div className="container-narrow text-center">
          <h1>Project not found</h1>
          <Link to="/projects" className="text-accent hover:underline mt-4 inline-block">
            ← Back to projects
          </Link>
        </div>
      </div>;
  }
  return <div className="page-section">
      <Seo title={project.title} description={project.descriptor} />
      <div className="container-narrow">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 fade-up">
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        {/* Page Header */}
        <header className="mb-16">
          <h1 className="fade-up">{project.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground fade-up delay-100">
            {project.descriptor}
          </p>
          {project.links && project.links.length > 0 && <div className="flex flex-wrap gap-4 mt-6 fade-up delay-100">
              {project.links.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  {link.label}
                </a>)}
            </div>}
        </header>

        <div className="space-y-16 fade-up delay-200">
          {/* Motivation */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Motivation
            </h2>
            <div className="text-muted-foreground leading-relaxed max-w-3xl space-y-4">
              {project.motivation.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </section>

          {/* Problem Context */}
          <BulletSection title="Problem Context" items={project.problemContext} />

          {/* Core Idea */}
          {project.coreIdea && <section>
              <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
                Core Idea
              </h2>
              <div className="text-muted-foreground leading-relaxed max-w-3xl space-y-4">
                {project.coreIdea.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
            </section>}

          {/* Methodology */}
          {project.methodology && <BulletSection title="Methodology" items={project.methodology} />}

          {/* Approach (shown only if it has meaningful content beyond methodology) */}
          {project.approach.length > 1 && <BulletSection title="Approach" items={project.approach} />}
          {project.approach.length === 1 && !project.methodology && <BulletSection title="Approach" items={project.approach} />}

          {/* Implementation & Design */}
          {project.implementationDesign && <BulletSection title="Implementation & Design" items={project.implementationDesign} />}

          {/* Results & Insights */}
          <BulletSection title="Results & Insights" items={project.results} />

          {/* Limitations & Future Directions */}
          {project.limitations && <BulletSection title="Limitations & Future Directions" items={project.limitations} />}

          {/* From Analysis to Action */}
          {project.analysisToAction && <BulletSection title="From Analysis to Action" items={project.analysisToAction} />}

          {/* Deliverables */}
          <BulletSection title="Deliverables" items={project.deliverables} />

          {/* Skills Demonstrated */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Skills Demonstrated
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => <span key={index} className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full">
                  {skill}
                </span>)}
            </div>
          </section>
        </div>

        
      </div>
    </div>;
};
const BulletSection = ({
  title,
  items
}: {
  title: string;
  items: string[];
}) => <section>
    <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
      {title}
    </h2>
    <ul className="space-y-2 max-w-3xl">
      {items.map((item, index) => <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
          <span className="text-accent mt-1.5">•</span>
          <span>{item}</span>
        </li>)}
    </ul>
  </section>;
export default ProjectDetail;