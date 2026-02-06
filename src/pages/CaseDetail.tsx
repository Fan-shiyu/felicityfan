import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import CaseTemplate from "@/components/CaseTemplate";
import { caseDetails } from "@/data/cases";

const CaseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseData = slug ? caseDetails[slug] : undefined;

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseData) {
    return (
      <div className="page-section">
        <div className="container-narrow text-center">
          <h1>Case not found</h1>
          <Link to="/#cases" className="text-accent hover:underline mt-4 inline-block">
            ← Back to cases
          </Link>
        </div>
      </div>
    );
  }

  return <CaseTemplate caseData={caseData} />;
};

export default CaseDetail;
