import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foregorund">
        &copy; {new Date().getFullYear()} Syahreza. All rights reserved.
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 text-white 
             transition-all duration-850 ease-in-out hover:shadow-[0_0_20px_rgba(167,139,250,1)]"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
