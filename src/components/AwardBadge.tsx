import { Trophy } from "lucide-react";

/**
 * Small award pill (e.g. "Anthropic Prize", "First Prize").
 * Uses a soft terracotta tint so it reads as an award without overpowering the card.
 * Used on hackathon project cards and detail headers.
 */
const AwardBadge = ({ label, className = "" }: { label: string; className?: string }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full ${className}`}
  >
    <Trophy className="w-3.5 h-3.5" />
    {label}
  </span>
);

export default AwardBadge;
