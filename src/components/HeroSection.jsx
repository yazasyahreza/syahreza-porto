import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {" "}
      <div className="container max-w-4xl mx-auto text-center z-10">
        {" "}
        <div className="space-y-6">
          {" "}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {" "}
            <span className="opacity-0 animate-fade-in">
              {" "}
              {t("hero.slogan.1")}
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent animate-fade-in">
              {" "}
              {t("hero.slogan.2")}
            </span>{" "}
            <br />{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent animate-fade-in-delay-1">
              {" "}
              {t("hero.slogan.3")}{" "}
            </span>{" "}
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              {t("hero.slogan.4")}{" "}
            </span>{" "}
          </h1>{" "}
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {" "}
            {t("hero.subtitle")}{" "}
          </p>{" "}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            {" "}
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-white font-medium
                    bg-gradient-to-r from-purple-400 to-indigo-400
                    shadow-[0_0_15px_rgba(147,51,234,0.6)]
                    animate-pulseGlow"
            >
              {" "}
              {t("hero.button")}{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="absolute bottom-[1.5rem] sm:bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        {" "}
        <span className="text-sm text-muted-foreground mb-2">
          {" "}
          {t("hero.scroll")}{" "}
        </span>{" "}
        <a href="#about">
          {" "}
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 shadow-lg hover:scale-110 transition-transform duration-300">
            {" "}
            <ArrowDown size={20} />{" "}
          </div>{" "}
        </a>{" "}
      </div>{" "}
    </section>
  );
};
