import { Link } from "react-router-dom";
import { hackathonCards } from "@/data/hackathons";
import AwardBadge from "@/components/AwardBadge";
import { Seo } from "@/components/Seo";
import { DEFAULT_SITE_DESCRIPTION } from "@/lib/site";

const VISIBLE_CARD_TAGS = 3;

const Hackathons = () => {
  return (
    <div className="page-section">
      <Seo title="Hackathon Projects" description={DEFAULT_SITE_DESCRIPTION} />
      <div className="container-narrow">
        <header className="max-w-2xl mb-16">
          <h1 className="fade-up">Hackathon Projects</h1>
          <p className="mt-6 text-lg text-muted-foreground fade-up delay-100">
            Award-winning solutions built under intense time pressure at
            hackathons and case competitions.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 fade-up delay-200">
          {hackathonCards.map((project) => (
            <Link
              key={project.slug}
              to={`/hackathons/${project.slug}`}
              className="group block p-5 bg-card border border-border hover:border-muted-foreground/40 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-200 ease-out h-full flex flex-col"
            >
              {project.award && (
                <div className="mb-3">
                  <AwardBadge label={project.award} />
                </div>
              )}
              <h2 className="font-serif text-lg group-hover:text-accent transition-colors leading-snug">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.slice(0, VISIBLE_CARD_TAGS).map((tag, tagIndex) => (
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

export default Hackathons;
