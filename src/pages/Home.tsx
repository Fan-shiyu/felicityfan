import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center">
      <section className="container-narrow py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Profile Photo */}
          <div className="flex-shrink-0 fade-up">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
              <img
                src={profilePhoto}
                alt="Felicity Fan"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4 fade-up">
              AI & Data Consultant
            </p>
            
            <h1 className="fade-up delay-100 text-balance">
              Hi, I'm Felicity Fan
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl fade-up delay-200 leading-relaxed">
              An AI & Data Consultant focused on delivering AI-powered solutions that drive 
              digital transformation. I create measurable impact by optimizing operations 
              and improving customer experiences, translating complex business challenges 
              into actionable, data-driven insights through scalable machine learning, 
              advanced analytics, and real-time dashboards.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6 fade-up delay-300">
              <Link
                to="/cases"
                className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide"
              >
                View case studies
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8 fade-up delay-400">
          {highlights.map((item, index) => (
            <div key={index} className="space-y-2 text-center md:text-left">
              <p className="font-serif text-3xl">{item.stat}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const highlights = [
  { stat: "10+", label: "Years of experience" },
  { stat: "50+", label: "Projects delivered" },
  { stat: "AI/ML", label: "Expertise" },
];

export default Home;
