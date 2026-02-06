import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { cases } from "./Cases";

const CaseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = cases.find((c) => c.slug === slug);

  if (!caseStudy) {
    return (
      <div className="page-section">
        <div className="container-narrow text-center">
          <h1>Case not found</h1>
          <Link to="/cases" className="text-accent hover:underline mt-4 inline-block">
            ← Back to cases
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-section">
      <div className="container-narrow">
        <Link
          to="/cases"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 fade-up"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to cases
        </Link>

        <header className="max-w-3xl mb-16">
          <div className="flex flex-wrap gap-2 mb-6 fade-up">
            {caseStudy.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="fade-up delay-100">{caseStudy.title}</h1>
          
          <p className="mt-6 text-xl text-muted-foreground fade-up delay-200">
            {caseStudy.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground fade-up delay-300">
            <div>
              <span className="block text-foreground font-medium">{caseStudy.client}</span>
              <span>Client</span>
            </div>
            <div>
              <span className="block text-foreground font-medium">{caseStudy.industry}</span>
              <span>Industry</span>
            </div>
            <div>
              <span className="block text-foreground font-medium">{caseStudy.year}</span>
              <span>Year</span>
            </div>
          </div>
        </header>

        <div className="grid gap-12 fade-up delay-300">
          {/* Challenge */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              The Challenge
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {caseStudy.challenge}
            </p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-lg font-medium mb-4 pb-4 border-b border-border">
              The Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {caseStudy.solution}
            </p>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-lg font-medium mb-6 pb-4 border-b border-border">
              The Impact
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {caseStudy.impact.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <Link
            to="/contact"
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

export default CaseDetail;
