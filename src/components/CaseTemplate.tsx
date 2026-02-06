import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export interface CaseData {
  slug: string;
  title: string;
  descriptor: string;
  situation: string;
  task: string[];
  approach: string[];
  impact: string[];
  delivered: string[];
  skills: string[];
}

interface CaseTemplateProps {
  caseData: CaseData;
}

const CaseTemplate = ({ caseData }: CaseTemplateProps) => {
  return (
    <div className="page-section">
      <div className="container-narrow">
        <Link
          to="/#cases"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 fade-up"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to cases
        </Link>

        {/* Page Header */}
        <header className="mb-16">
          <h1 className="fade-up">{caseData.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground fade-up delay-100">
            {caseData.descriptor}
          </p>
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
            <ul className="space-y-2 max-w-3xl">
              {caseData.task.map((item, index) => (
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
              {caseData.approach.map((item, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Impact
            </h2>
            <ul className="space-y-2 max-w-3xl">
              {caseData.impact.map((item, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Delivered */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Delivered
            </h2>
            <ul className="space-y-2 max-w-3xl">
              {caseData.delivered.map((item, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {caseData.skills.map((skill, index) => (
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
            Interested in similar results? Let's talk
            <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseTemplate;
