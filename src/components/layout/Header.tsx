import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/cases", label: "Company Cases" },
  { path: "/projects", label: "Side Projects" },
  { path: "/activities", label: "Professional Activities" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-narrow">
        <div className="flex items-center justify-between h-20">
          <NavLink
            to="/"
            className="font-serif text-xl tracking-tight hover:text-accent transition-colors"
          >
            FF
          </NavLink>
          
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2"
        aria-label="Toggle menu"
      >
        <div className="w-5 flex flex-col gap-1">
          <span
            className={`h-px bg-foreground transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`h-px bg-foreground transition-all duration-300 ${
              isOpen ? "-rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-background border-b border-border">
          <ul className="container-narrow py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-lg transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
