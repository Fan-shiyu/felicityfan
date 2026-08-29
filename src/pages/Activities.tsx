import { Seo } from "@/components/Seo";
import { DEFAULT_SITE_DESCRIPTION } from "@/lib/site";
import pyladiesWorkshop from "@/assets/pyladies-workshop.avif";
import hack4herStage from "@/assets/hack4her-stage.png";
import hack4herKeynote from "@/assets/hack4her-keynote.jpg";
import toastmastersTeam from "@/assets/toastmasters-team.png";
import pydataModerating from "@/assets/pydata-moderating.png";
import pydataStage from "@/assets/pydata-stage.png";
import tilburgTalk from "@/assets/tilburg-talk.png";

export type ActivityImage = string | { src: string; /** Tailwind object-position class, e.g. "object-top" */ position?: string };

export interface Activity {
  id: string;
  title: string;
  description: string;
  images: ActivityImage[];
  layout?: "horizontal" | "vertical";
  /** When true, the image is top-aligned with the description text (title sits above as a header) */
  alignImageWithContent?: boolean;
}

const imgSrc = (image: ActivityImage) => (typeof image === "string" ? image : image.src);
const imgPosition = (image: ActivityImage) => (typeof image === "string" ? "" : image.position ?? "");

export const activities: Activity[] = [
  {
    id: "pyladies-amsterdam",
    title: "PyLadies Amsterdam 2026 — Workshop Design & Delivery",
    description: "Designed and delivered \"Building with Coding Agents — Ship a Python Streamlit Dashboard,\" a 90-minute hands-on online workshop for PyLadies Amsterdam. Structured as a guided learning journey for a mixed-experience audience, the session covered 16 concepts across five exercises, with participants directing coding agents themselves to build a working dashboard. All materials were open-sourced as a self-paced course anyone can run, reuse, or teach from. Sharing knowledge with fellow practitioners is something I genuinely enjoy — through workshops like this, I aim to make emerging AI engineering practices accessible, practical, and welcoming for the data community.",
    images: [pyladiesWorkshop],
    layout: "horizontal",
    alignImageWithContent: true,
  },
  {
    id: "hack4her",
    title: "Hack4Her 2026 — Keynote Speaker",
    description: "Invited keynote speaker at Hack4Her 2026, the only female-focused student hackathon in the Netherlands, held at Vrije Universiteit Amsterdam. My talk, \"Women in Tech: Data, Stories, and the Future of AI,\" wove together data on the gender gap, personal reflections on navigating tech as a woman, and a hands-on introduction to AI tools for the hackathon. I closed with an AI-generated video I produced, imagining what a female tech career could look like five years from now. This talk reflects my commitment to making technical knowledge accessible and advocating for greater inclusion in the field.",
    images: [hack4herStage, { src: hack4herKeynote, position: "object-top" }],
    layout: "horizontal",
    alignImageWithContent: true,
  },
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
    layout: "horizontal",
    alignImageWithContent: true,
  },
  {
    id: "tilburg-talk",
    title: "Technical Talk — Sharing Open-Source Research with the Data Community",
    description: "Delivered a technical talk at Tilburg Data Night, presenting the design and structure of an open-source statistical package I developed. The session focused on translating research ideas into practical tools, discussing design choices, implementation trade-offs, and real-world use cases. Through this talk, I aim to contribute back to the data community by sharing lessons learned and encouraging knowledge exchange around applied data science.",
    images: [tilburgTalk],
    layout: "horizontal",
  },
];

const Activities = () => {
  return (
    <div className="page-section">
      <Seo
        title="Professional Activities"
        description={DEFAULT_SITE_DESCRIPTION}
      />
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

const ActivityImages = ({ activity }: { activity: Activity }) =>
  activity.images.length === 1 ? (
    <div className="overflow-hidden rounded-lg">
      <img
        src={imgSrc(activity.images[0])}
        alt={activity.title}
        className={`w-full h-auto object-cover ${imgPosition(activity.images[0])}`}
      />
    </div>
  ) : (
    <div className="grid grid-cols-2 gap-3">
      {activity.images.map((image, idx) => (
        <div key={idx} className="overflow-hidden rounded-lg aspect-square">
          <img
            src={imgSrc(image)}
            alt={`${activity.title} ${idx + 1}`}
            className={`w-full h-full object-cover ${imgPosition(image)}`}
          />
        </div>
      ))}
    </div>
  );

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
                  src={imgSrc(image)}
                  alt={`${activity.title} ${idx + 1}`}
                  className={`w-full h-auto object-cover ${imgPosition(image)}`}
                />
              </div>
            ))}
          </div>
        )}

        <div className="md:max-w-2xl">
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

  // Content-aligned layout: half-width title stays in the text column, image
  // top-aligned with the description (title sits above the text, not the image)
  if (activity.alignImageWithContent && hasImages) {
    const textCol = reverse ? "md:col-start-1" : "md:col-start-2";
    const imageCol = reverse ? "md:col-start-2" : "md:col-start-1";
    return (
      <article className="grid gap-y-4 gap-x-8 md:gap-x-12 md:grid-cols-2 md:grid-rows-[auto_1fr] items-start">
        <h2 className={`font-serif text-2xl md:text-3xl md:row-start-1 ${textCol}`}>
          {activity.title}
        </h2>
        <div className={`md:row-start-2 md:mt-[7px] ${imageCol}`}>
          <ActivityImages activity={activity} />
        </div>
        <div className={`md:row-start-2 ${textCol}`}>
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
                src={imgSrc(activity.images[0])}
                alt={activity.title}
                className={`w-full h-auto object-cover ${imgPosition(activity.images[0])}`}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {activity.images.map((image, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg aspect-square">
                  <img
                    src={imgSrc(image)}
                    alt={`${activity.title} ${idx + 1}`}
                    className={`w-full h-full object-cover ${imgPosition(image)}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className={`${reverse && hasImages ? 'md:[direction:ltr]' : ''} ${!hasImages ? 'md:max-w-2xl' : ''}`}>
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
