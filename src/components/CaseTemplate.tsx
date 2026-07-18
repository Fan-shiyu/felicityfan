import { Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Seo } from "@/components/Seo";
import AwardBadge from "@/components/AwardBadge";
export interface CaseFigure {
  /** Imported image asset (URL string resolved by Vite) */
  src: string;
  alt: string;
  caption?: string;
  /** "full" (default) spans the content column; "compact" constrains width and centers */
  size?: "full" | "compact";
}
export interface CaseLink {
  label: string;
  url: string;
}
/** Ordered content node for a richly structured Approach section */
export type ApproachNode =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] };
export interface CaseData {
  slug: string;
  title: string;
  descriptor: string;
  github?: string;
  demo?: string;
  liveUrl?: string;
  /** Optional extra labeled header links (e.g. two GitHub repos) */
  links?: CaseLink[];
  situation: string;
  /** Optional lead-in sentence shown above the Task bullets */
  taskIntro?: string;
  task: string[];
  /** Optional lead-in sentence shown above the Approach bullets */
  approachIntro?: string;
  approach: string[];
  /** Optional structured Approach content (headings, paragraphs, bullets in order).
   *  When present, it renders instead of approachIntro + the flat approach bullets. */
  approachContent?: ApproachNode[];
  /** Optional figure shown at the end of the Approach section (e.g. an architecture diagram) */
  approachFigure?: CaseFigure;
  /** Optional additional figures shown at the end of the Approach section */
  approachFigures?: CaseFigure[];
  impact: string[];
  delivered: string[];
  skills: string[];
}
interface CaseTemplateProps {
  caseData: CaseData;
  /** Where the "back" link points and its label (defaults to the Company Cases section) */
  backHref?: string;
  backLabel?: string;
  /** Optional award label rendered as a badge above the title */
  award?: string;
}
const CaseTemplate = ({
  caseData,
  backHref = "/#cases",
  backLabel = "Back to cases",
  award
}: CaseTemplateProps) => {
  return <div className="page-section">
      <Seo title={caseData.title} description={caseData.descriptor} />
      <div className="container-narrow">
        <Link to={backHref} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 fade-up">
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>

        {/* Page Header */}
        <header className="mb-16">
          {award && <div className="mb-4 fade-up">
              <AwardBadge label={award} />
            </div>}
          <h1 className="fade-up">{caseData.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground fade-up delay-100">
            {caseData.descriptor}
          </p>
          {(caseData.github || caseData.demo || caseData.liveUrl || (caseData.links && caseData.links.length > 0)) && <div className="flex flex-wrap gap-4 mt-4 fade-up delay-100">
              {caseData.github && <a href={caseData.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>}
              {caseData.links?.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.url.includes("github.com") ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                  {link.label}
                </a>)}
              {caseData.liveUrl && <a href={caseData.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Live Tool
                </a>}
              {caseData.demo && <a href={caseData.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <span className="w-4 h-4 flex items-center justify-center">▶</span>
                  Watch Demo
                </a>}
            </div>}
        </header>

        <div className="space-y-16 fade-up delay-200">
          {/* Situation */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Situation
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {caseData.situation}
            </p>
          </section>

          {/* Task */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Task
            </h2>
            {caseData.taskIntro && <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-4">
                {caseData.taskIntro}
              </p>}
            <ul className="space-y-2 max-w-3xl">
              {caseData.task.map((item, index) => <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{item}</span>
                </li>)}
            </ul>
          </section>

          {/* Approach */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Approach
            </h2>
            {caseData.approachContent ? <ApproachContent nodes={caseData.approachContent} /> : <>
                {caseData.approachIntro && <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-4">
                    {caseData.approachIntro}
                  </p>}
                <ul className="space-y-2 max-w-3xl">
                  {caseData.approach.map((item, index) => <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{item}</span>
                    </li>)}
                </ul>
              </>}
            {caseData.approachFigure && <CaseFigureBlock figure={caseData.approachFigure} />}
            {caseData.approachFigures?.map((figure, index) => <CaseFigureBlock key={index} figure={figure} />)}
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Impact
            </h2>
            <ul className="space-y-2 max-w-3xl">
              {caseData.impact.map((item, index) => <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{item}</span>
                </li>)}
            </ul>
          </section>

          {/* Delivered */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Delivered
            </h2>
            <ul className="space-y-2 max-w-3xl">
              {caseData.delivered.map((item, index) => <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{item}</span>
                </li>)}
            </ul>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {caseData.skills.map((skill, index) => <span key={index} className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full">
                  {skill}
                </span>)}
            </div>
          </section>
        </div>

        
      </div>
    </div>;
};
const ApproachContent = ({
  nodes
}: {
  nodes: ApproachNode[];
}) => <div className="space-y-4 max-w-3xl">
    {nodes.map((node, index) => {
      if (node.type === "heading") {
        return <h3 key={index} className="text-base font-sans font-medium text-accent pt-2">
            {node.text}
          </h3>;
      }
      if (node.type === "paragraph") {
        return <p key={index} className="text-base text-muted-foreground leading-relaxed">
            {node.text}
          </p>;
      }
      return <ul key={index} className="space-y-2">
          {node.items.map((item, i) => <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-3">
              <span className="text-accent mt-1.5">•</span>
              <span>{item}</span>
            </li>)}
        </ul>;
    })}
  </div>;
const CaseFigureBlock = ({
  figure
}: {
  figure: CaseFigure;
}) => <figure className={`mt-8 space-y-3 ${figure.size === "compact" ? "max-w-xl mx-auto" : ""}`}>
    <div className="overflow-hidden border border-border bg-card rounded-lg">
      <img src={figure.src} alt={figure.alt} loading="lazy" className="w-full h-auto" />
    </div>
    {figure.caption && <figcaption className="text-sm text-muted-foreground italic text-center">
        {figure.caption}
      </figcaption>}
  </figure>;
export default CaseTemplate;