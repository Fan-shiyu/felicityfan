export interface Activity {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export const activities: Activity[] = [
  {
    id: "speaking",
    title: "Conference Speaking",
    description: "Sharing insights on AI strategy, digital transformation, and data-driven decision making at industry conferences and executive forums. Recent engagements include keynotes on responsible AI adoption and workshops on building analytics capabilities.",
    images: [],
  },
  {
    id: "mentoring",
    title: "Mentoring & Coaching",
    description: "Supporting the next generation of data professionals through formal mentoring programs and informal coaching. Focused on helping early-career consultants and data scientists navigate career transitions and develop leadership skills.",
    images: [],
  },
  {
    id: "writing",
    title: "Writing & Publications",
    description: "Contributing articles and thought leadership pieces on emerging trends in AI/ML, analytics strategy, and digital transformation. Published in industry journals and business publications reaching practitioner and executive audiences.",
    images: [],
  },
  {
    id: "community",
    title: "Community Leadership",
    description: "Active involvement in professional communities including organizing local data science meetups, contributing to open-source projects, and participating in industry working groups focused on ethical AI standards.",
    images: [],
  },
  {
    id: "advisory",
    title: "Advisory & Board Roles",
    description: "Serving as advisor and board member for startups and non-profits at the intersection of technology and social impact. Providing strategic guidance on data strategy, product development, and scaling operations.",
    images: [],
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

  return (
    <article className={`grid gap-8 md:gap-12 ${hasImages ? 'md:grid-cols-2 items-center' : ''} ${reverse && hasImages ? 'md:[direction:rtl]' : ''}`}>
      {hasImages && (
        <div className={`space-y-4 ${reverse ? 'md:[direction:ltr]' : ''}`}>
          {activity.images.length === 1 ? (
            <div className="aspect-[4/3] bg-muted overflow-hidden">
              <img
                src={activity.images[0]}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {activity.images.map((image, idx) => (
                <div key={idx} className="aspect-square bg-muted overflow-hidden">
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
