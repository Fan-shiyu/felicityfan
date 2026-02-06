import { useState } from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="page-section">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <header className="mb-12">
              <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4 fade-up">
                Contact
              </p>
              <h1 className="fade-up delay-100">Let's start a conversation.</h1>
              <p className="mt-6 text-muted-foreground fade-up delay-200">
                Whether you're facing a strategic challenge or exploring new 
                opportunities, I'd love to hear from you.
              </p>
            </header>

            <div className="space-y-6 fade-up delay-300">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:hello@johndoe.com"
                    className="font-medium hover:text-accent transition-colors"
                  >
                    hello@johndoe.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Stockholm, Sweden</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 fade-up delay-300">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-border focus:border-foreground focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project or challenge..."
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Send message
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
