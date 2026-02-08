import toastmastersTeam from "@/assets/toastmasters-team.png";
import pydataModerating from "@/assets/pydata-moderating.png";
import pydataStage from "@/assets/pydata-stage.png";

export interface Activity {
  id: string;
  title: string;
  description: string;
  images: string[];
  layout?: "horizontal" | "vertical";
}

export const activities: Activity[] = [
  {
    id: "toastmasters",
    title: "Toastmasters Den Bosch — Communication & Leadership Development",
    description: "Active member and former board member of Toastmasters Den Bosch. I deliver prepared speeches and structured evaluations, and have served on the club board to support meeting facilitation and member development. Through this role, I continuously strengthen my communication, presentation, and leadership skills—essential for stakeholder engagement and executive-level storytelling.",
    images: [toastmastersTeam],
    layout: "horizontal",
  },
  {
    id: "pydata",
    title: "PyData Eindhoven 2025 — Conference Moderation & Organization",
    description: "Co-organizer and co-moderator of PyData Eindhoven 2025, contributing to the planning and delivery of a large-scale data and AI conference over several months of preparation. During the event, I co-moderated multiple technical sessions, introducing speakers and their topics, managing time and session flow, and facilitating audience Q&A. This role required clear communication, real-time coordination, and the ability to maintain an engaging and professional atmosphere for both speakers and attendees.",
    images: [pydataModerating, pydataStage],
    layout: "vertical",
  },
];

const Activities = () => {
  return (
    <div className="page-section">
      <div className="container-narrow">
        <header className="max-w-3xl mb-16">
          <h1 className="fade-up">Activities</h1>
          <p className="mt-6 text-lg text-muted-foreground fade-up delay-100">
            Professional and community engagements that reflect a commitment to 
            leadership, knowledge sharing, and meaningful contribution beyond 
            day-to-day work.
          </p>
        </header>

        <div className="space-y-16 md:space-y-24 fade-up delay-200">
          {activities.map((activity, index) => (
            <ActivityBlock 
              key={activity.id} 
              activity={activity} 
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ActivityBlockProps {
  activity: Activity;
  reverse?: boolean;
}

const ActivityBlock = ({ activity, reverse = false }: ActivityBlockProps) => {
  const hasImages = activity.images.length > 0;
  const isVertical = activity.layout === "vertical";

  // Vertical layout: images stacked on top, text below
  if (isVertical) {
    return (
      <article className="space-y-8">
        {hasImages && (
          <div className="space-y-4">
            {activity.images.map((image, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${activity.title} ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="md:max-w-2xl">
          <div className="space-y-1 mb-4">
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            {activity.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {activity.description}
          </p>
        </div>
      </article>
    );
  }

  // Horizontal layout: image left/right, text opposite
  return (
    <article className={`grid gap-8 md:gap-12 ${hasImages ? 'md:grid-cols-2 items-center' : ''} ${reverse && hasImages ? 'md:[direction:rtl]' : ''}`}>
      {hasImages && (
        <div className={`space-y-4 ${reverse ? 'md:[direction:ltr]' : ''}`}>
          {activity.images.length === 1 ? (
            <div className="overflow-hidden rounded-lg">
              <img
                src={activity.images[0]}
                alt={activity.title}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {activity.images.map((image, idx) => (
                <div key={idx} className="aspect-square bg-muted overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${activity.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className={`${reverse && hasImages ? 'md:[direction:ltr]' : ''} ${!hasImages ? 'md:max-w-2xl' : ''}`}>
        <div className="space-y-1 mb-4">
          <div className="w-8 h-px bg-accent" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl mb-4">
          {activity.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {activity.description}
        </p>
      </div>
    </article>
  );
};

export default Activities;
