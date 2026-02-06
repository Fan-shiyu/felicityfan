import { useState } from "react";
import { ArrowRight, Linkedin, Github, Mail } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-section">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="fade-up">Let's Connect</h1>
            <p className="mt-6 text-lg text-muted-foreground fade-up delay-100">
              Whether you're exploring a new project, seeking collaboration, or 
              just want to exchange ideas—I'd love to hear from you.
            </p>
          </header>

          {isSubmitted ? (
            <div className="text-center py-12 fade-up">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-serif text-2xl mb-4">Message Sent</h2>
              <p className="text-muted-foreground">
                Thank you for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-sm text-accent hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 fade-up delay-200">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.name ? "border-destructive" : "border-border"
                  } focus:border-foreground focus:outline-none transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.email ? "border-destructive" : "border-border"
                  } focus:border-foreground focus:outline-none transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.message ? "border-destructive" : "border-border"
                  } focus:border-foreground focus:outline-none transition-colors resize-none`}
                  placeholder="Tell me about your project or what's on your mind..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social Links */}
          <div className="mt-16 pt-12 border-t border-border fade-up delay-300">
            <p className="text-center text-sm text-muted-foreground mb-6">
              Or find me elsewhere
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://linkedin.com/in/felicityfan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <div className="w-10 h-10 rounded-full border border-border group-hover:border-foreground flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-sm hidden sm:inline">LinkedIn</span>
              </a>
              
              <a
                href="https://github.com/felicityfan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <div className="w-10 h-10 rounded-full border border-border group-hover:border-foreground flex items-center justify-center transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <span className="text-sm hidden sm:inline">GitHub</span>
              </a>
              
              <a
                href="mailto:hello@felicityfan.com"
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <div className="w-10 h-10 rounded-full border border-border group-hover:border-foreground flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm hidden sm:inline">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
