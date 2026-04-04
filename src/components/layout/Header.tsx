import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home" },
  { id: "cases", label: "Company Cases" },
  { id: "projects", label: "Side Projects" },
  { path: "/activities", label: "Professional Activities" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only track sections on homepage
      if (location.pathname === "/") {
        const sections = ["home", "cases", "projects", "contact"];
        const scrollPosition = window.scrollY + 100;

        for (const sectionId of sections.reverse()) {
          const element = document.getElementById(sectionId);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Reset to top when navigating to a new page (not hash navigation)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    if (item.path) {
      // Regular page navigation
      return;
    }

    e.preventDefault();
    
    if (location.pathname !== "/") {
      // Navigate to homepage then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(item.id!);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Just scroll on homepage
      const element = document.getElementById(item.id!);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (item: typeof navItems[0]) => {
    if (item.path) {
      return location.pathname === item.path;
    }
    return location.pathname === "/" && activeSection === item.id;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-narrow">
        <div className="flex items-center h-20 w-full gap-4">
          <Link
            to="/"
            className="font-serif text-lg tracking-tight text-foreground hover:text-accent transition-colors shrink-0"
          >
            Felicity Fan
          </Link>

          <ul className="hidden md:flex flex-1 justify-center items-center gap-8 min-w-0">
            {navItems.map((item) => (
              <li key={item.id || item.path}>
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive: routeActive }) =>
                      `text-sm font-medium tracking-wide transition-colors ${
                        routeActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`text-sm font-medium tracking-wide transition-colors ${
                      isActive(item)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <MobileNav handleNavClick={handleNavClick} isActive={isActive} />
        </div>
      </nav>
    </header>
  );
};

interface MobileNavProps {
  handleNavClick: (item: typeof navItems[0], e: React.MouseEvent) => void;
  isActive: (item: typeof navItems[0]) => boolean;
}

const MobileNav = ({ handleNavClick, isActive }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const handleMobileNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    setIsOpen(false);
    handleNavClick(item, e);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-5 h-3.5 flex flex-col justify-between">
          <span
            className={`h-px w-full bg-foreground transition-all duration-300 origin-center ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-foreground transition-all duration-300 ${
              isOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-foreground transition-all duration-300 origin-center ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-background border-b border-border">
          <ul className="container-narrow py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.id || item.path}>
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive: routeActive }) =>
                      `block text-lg transition-colors ${
                        routeActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleMobileNavClick(item, e)}
                    className={`block text-lg transition-colors ${
                      isActive(item)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
