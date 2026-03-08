import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Github, Mail } from "lucide-react";
import { z } from "zod";
import profilePhoto from "@/assets/profile-photo.png";
import { caseCards } from "@/data/cases";
import { projectCards } from "@/data/projects";
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters")
});
type ContactFormData = z.infer<typeof contactSchema>;
const Index = () => {
  return <div>
      {/* Hero Section */}
      <section id="home" className="flex items-center">
        <div className="container-narrow py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Profile Photo */}
            <div className="flex-shrink-0 fade-up">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
                <img src={profilePhoto} alt="Felicity Fan" className="w-full h-full object-cover object-center" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4 fade-up">
            </p>
              
              <h1 className="fade-up delay-100 text-balance">Felicity Fan</h1>
              
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl fade-up delay-200 leading-relaxed">An AI & Data Consultant focused on delivering AI-powered solutions that drive digital transformation. I create measurable impact by optimizing operations and improving customer experiences, translating complex business challenges into actionable, data-driven insights through scalable machine learning pipelines, advanced analytics, AI agents and LLMs, and real-time interactive dashboards.  </p>
              
              <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6 fade-up delay-300">
                <a href="#cases" className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide">
                  View case studies
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors">
                  Get in touch
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="page-section border-t border-border">
        <div className="container-narrow">
          <header className="max-w-2xl mb-16">
            <h2 className="font-serif text-4xl md:text-5xl fade-up">Company Cases</h2>
            <p className="mt-6 text-lg text-muted-foreground fade-up delay-100">
              Selected consulting engagements where data-driven solutions delivered 
              measurable business impact.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 fade-up delay-200">
            {caseCards.map(caseItem => <Link key={caseItem.slug} to={`/cases/${caseItem.slug}`} className="group block p-5 bg-card border border-border hover:border-muted-foreground/40 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-200 ease-out">
                <h3 className="font-serif text-lg group-hover:text-accent transition-colors leading-snug">
                  {caseItem.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {caseItem.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {caseItem.tags.slice(0, 2).map((tag, tagIndex) => <span key={tagIndex} className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full">
                      {tag}
                    </span>)}
                </div>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="page-section border-t border-border">
        <div className="container-narrow">
          <header className="max-w-2xl mb-16">
            <h2 className="font-serif text-4xl md:text-5xl fade-up">Side Projects</h2>
            <p className="mt-6 text-lg text-muted-foreground fade-up delay-100">
              Independent projects exploring data science, optimization, and 
              research-driven methods.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 fade-up delay-200">
            {projectCards.map(project => <Link key={project.slug} to={`/projects/${project.slug}`} className="group block p-5 bg-card border border-border hover:border-muted-foreground/40 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-200 ease-out">
              <h3 className="font-serif text-lg group-hover:text-accent transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {project.tags.join(" · ")}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => <span key={tagIndex} className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full">
                      {tag}
                    </span>)}
                </div>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="page-section border-t border-border">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>;
};
const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke("send-contact-email", {
        body: result.data
      });
      if (error) throw error;
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (err) {
      console.error("Failed to send message:", err);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <>
      <header className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl fade-up">Let's Connect</h2>
        <p className="mt-6 text-lg text-muted-foreground fade-up delay-100">
          Whether you're exploring a new project, seeking collaboration, or 
          just want to exchange ideas—I'd love to hear from you.
        </p>
      </header>

      {isSubmitted ? <div className="text-center py-12 fade-up">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-accent" />
          </div>
          <h3 className="font-serif text-2xl mb-4">Message Sent</h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. I'll get back to you soon.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="mt-6 text-sm text-accent hover:underline">
            Send another message
          </button>
        </div> : <form onSubmit={handleSubmit} className="space-y-6 fade-up delay-200">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 bg-transparent border ${errors.name ? "border-destructive" : "border-border"} focus:border-foreground focus:outline-none transition-colors`} placeholder="Your name" />
            {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 bg-transparent border ${errors.email ? "border-destructive" : "border-border"} focus:border-foreground focus:outline-none transition-colors`} placeholder="your@email.com" />
            {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className={`w-full px-4 py-3 bg-transparent border ${errors.message ? "border-destructive" : "border-border"} focus:border-foreground focus:outline-none transition-colors resize-none`} placeholder="Tell me about your project or what's on your mind..." />
            {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
          </div>

          <button type="submit" disabled={isSubmitting} className="group w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
            {isSubmitting ? "Sending..." : <>
                Send Message
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>}
          </button>
        </form>}

      {/* Social Links */}
      <div className="mt-16 pt-12 border-t border-border fade-up delay-300">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Or find me elsewhere
        </p>
        <div className="flex items-center justify-center gap-6">
          <a href="https://linkedin.com/in/felicityfan" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <div className="w-10 h-10 rounded-full border border-border group-hover:border-foreground flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </div>
            <span className="text-sm hidden sm:inline">LinkedIn</span>
          </a>
          
          <a href="https://github.com/Fan-shiyu" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <div className="w-10 h-10 rounded-full border border-border group-hover:border-foreground flex items-center justify-center transition-colors">
              <Github className="w-4 h-4" />
            </div>
            <span className="text-sm hidden sm:inline">GitHub</span>
          </a>
          
          <a href="mailto:sfan289@aucklanduni.ac.nz" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
            <div className="w-10 h-10 rounded-full border border-border group-hover:border-foreground flex items-center justify-center transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-sm hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </>;
};
const highlights = [{
  stat: "10+",
  label: "Years of experience"
}, {
  stat: "50+",
  label: "Projects delivered"
}, {
  stat: "AI/ML",
  label: "Expertise"
}];
export default Index;