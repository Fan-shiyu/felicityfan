const Activities = () => {
  return (
    <div className="page-section">
      <div className="container-narrow">
        <header className="max-w-2xl mb-16">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4 fade-up">
            Professional Activities
          </p>
          <h1 className="fade-up delay-100">Speaking, writing, and shaping the conversation.</h1>
          <p className="mt-6 text-muted-foreground fade-up delay-200">
            Thought leadership and community engagement across strategy, 
            leadership, and organizational transformation.
          </p>
        </header>

        <div className="grid gap-16 fade-up delay-300">
          {/* Speaking */}
          <section>
            <h2 className="text-lg font-medium mb-8 pb-4 border-b border-border">
              Speaking Engagements
            </h2>
            <div className="space-y-6">
              {speaking.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-2 py-4"
                >
                  <div>
                    <h3 className="font-serif text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.event}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section>
            <h2 className="text-lg font-medium mb-8 pb-4 border-b border-border">
              Publications & Articles
            </h2>
            <div className="space-y-6">
              {publications.map((item, index) => (
                <article key={index} className="py-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="font-serif text-lg">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    Published in {item.publication}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Board Positions */}
          <section>
            <h2 className="text-lg font-medium mb-8 pb-4 border-b border-border">
              Board & Advisory Roles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {boards.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-serif text-lg">{item.organization}</h3>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                  <p className="text-xs text-muted-foreground">{item.period}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const speaking = [
  {
    title: "The Future of Strategy in an AI World",
    event: "World Economic Forum, Davos",
    date: "January 2024",
  },
  {
    title: "Building Resilient Organizations",
    event: "Harvard Business School Executive Education",
    date: "November 2023",
  },
  {
    title: "Digital Transformation: Lessons from the Field",
    event: "McKinsey Global Conference",
    date: "September 2023",
  },
  {
    title: "Leading Through Uncertainty",
    event: "TEDx Stockholm",
    date: "May 2023",
  },
];

const publications = [
  {
    title: "The New Rules of Corporate Strategy",
    publication: "Harvard Business Review",
    date: "December 2023",
  },
  {
    title: "Why Most Digital Transformations Fail",
    publication: "MIT Sloan Management Review",
    date: "August 2023",
  },
  {
    title: "The CEO's Guide to AI Adoption",
    publication: "Financial Times",
    date: "March 2023",
  },
];

const boards = [
  {
    organization: "TechStart Foundation",
    role: "Board Member",
    period: "2022 – Present",
  },
  {
    organization: "Nordic Business School",
    role: "Advisory Board",
    period: "2020 – Present",
  },
  {
    organization: "Climate Action Institute",
    role: "Strategic Advisor",
    period: "2021 – Present",
  },
  {
    organization: "Future Leaders Network",
    role: "Founding Advisor",
    period: "2019 – Present",
  },
];

export default Activities;
