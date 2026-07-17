import { Trophy } from "lucide-react";

/**
 * Small terracotta pill marking an award (e.g. "Anthropic Prize", "First Prize").
 * Used on hackathon project cards and detail headers.
 */
const AwardBadge = ({ label, className = "" }: { label: string; className?: string }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded-full ${className}`}
  >
    <Trophy className="w-3.5 h-3.5" />
    {label}
  </span>
);

export default AwardBadge;
