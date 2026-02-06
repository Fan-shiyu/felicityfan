import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center">
      <section className="container-narrow py-16">
        <div className="max-w-3xl">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6 fade-up">
            Strategy Consultant & Advisor
          </p>
          
          <h1 className="fade-up delay-100 text-balance">
            Helping organizations navigate complexity and unlock growth.
          </h1>
          
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl fade-up delay-200">
            With over 15 years of experience in strategy consulting, I partner with 
            leaders to solve their most pressing challenges—from digital transformation 
            to organizational redesign.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-6 fade-up delay-300">
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

        <div className="mt-24 grid md:grid-cols-3 gap-8 fade-up delay-400">
          {highlights.map((item, index) => (
            <div key={index} className="space-y-2">
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
  { stat: "15+", label: "Years of experience" },
  { stat: "40+", label: "Projects delivered" },
  { stat: "$2B+", label: "Value created" },
];

export default Home;
