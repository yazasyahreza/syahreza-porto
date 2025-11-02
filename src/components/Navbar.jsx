import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Gallerys", href: "#gallerys" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar utama */}
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300 py-5", // padding tetap
          isScrolled
            ? "bg-background/60 backdrop-blur-md shadow-sm" // efek muncul saat scroll
            : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between">
          <a className="text-xl font-bold flex items-center" href="#hero">
            <span className="relative z-10 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              <span className="text-glow text-foreground">S</span>YA
              <span className="text-glow text-foreground">HRE</span>ZA
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* mobile nav button */}
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
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {isMenuOpen && (
            <div className="mt-8">
              <ThemeToggle />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
