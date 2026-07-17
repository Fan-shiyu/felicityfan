import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import CaseTemplate from "@/components/CaseTemplate";
import { hackathonCards, hackathonDetails } from "@/data/hackathons";
import { Seo } from "@/components/Seo";

const HackathonDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? hackathonDetails[slug] : undefined;
  const award = slug ? hackathonCards.find((c) => c.slug === slug)?.award : undefined;

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="page-section">
        <Seo title="Project not found" description="The requested hackathon project could not be found." />
        <div className="container-narrow text-center">
          <h1>Project not found</h1>
          <Link to="/#hackathons" className="text-accent hover:underline mt-4 inline-block">
            ← Back to hackathon projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <CaseTemplate
      caseData={project}
      award={award}
      backHref="/#hackathons"
      backLabel="Back to hackathon projects"
    />
  );
};

export default HackathonDetail;
