import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: "home", href: "#hero" },
    { key: "about", href: "#about" },
    { key: "gallerys", href: "#gallerys" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300 py-5",
          isScrolled
            ? "bg-background/60 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a className="text-xl font-bold flex items-center" href="#hero">
            <span className="relative z-10 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              <span className="text-glow text-foreground">S</span>YA
              <span className="text-glow text-foreground">HRE</span>ZA
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {t(`navbar.${item.key}`)}
              </a>
            ))}
          </div>

          {/* Theme + Language Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={cn(
              "md:hidden p-2 text-foreground z-50 transition-opacity duration-300",
              isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 p-2 text-foreground"
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(`navbar.${item.key}`)}
            </a>
          ))}

          {isMenuOpen && (
            <div className="mt-8 flex items-center space-x-3">
              <LanguageToggle />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
