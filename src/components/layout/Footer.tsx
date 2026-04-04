import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-narrow py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <Link
              to="/"
              className="font-serif text-lg hover:text-accent transition-colors inline-block"
            >
              Felicity Fan
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              AI & Data Consultant
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://linkedin.com/in/felicityfan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sfan289@aucklanduni.ac.nz"
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Felicity Fan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
