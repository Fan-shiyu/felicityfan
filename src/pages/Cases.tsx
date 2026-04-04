import { Link } from "react-router-dom";
import { caseCards } from "@/data/cases";
import { Seo } from "@/components/Seo";
import { DEFAULT_SITE_DESCRIPTION } from "@/lib/site";

const VISIBLE_CARD_TAGS = 3;

const Cases = () => {
  return (
    <div className="page-section">
      <Seo
        title="Company Cases"
        description={DEFAULT_SITE_DESCRIPTION}
      />
      <div className="container-narrow">
        <header className="max-w-2xl mb-16">
          <h1 className="fade-up">Company Cases</h1>
          <p className="mt-6 text-lg text-muted-foreground fade-up delay-100">
            Selected consulting engagements where data-driven solutions delivered
            measurable business impact.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 fade-up delay-200">
          {caseCards.map((caseItem) => (
            <Link
              key={caseItem.slug}
              to={`/cases/${caseItem.slug}`}
              className="group block p-5 bg-card border border-border hover:border-muted-foreground/40 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-200 ease-out h-full flex flex-col"
            >
              <h2 className="font-serif text-lg group-hover:text-accent transition-colors leading-snug">
                {caseItem.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
                {caseItem.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {caseItem.tags.slice(0, VISIBLE_CARD_TAGS).map((tag, tagIndex) => (
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

export default Cases;
