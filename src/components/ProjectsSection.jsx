import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import projects from "../data/projects";

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projects.title")}{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {t("projects.highlight")}
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden shadow-xs hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-shadow duration-500"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {t(project.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(project.descKey)}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yazasyahreza"
            className="cosmic-button relative text-white font-semibold rounded-full border border-violet-500 
             shadow-[0_0_10px_rgba(139,92,246,0.6)] hover:shadow-[0_0_25px_rgba(139,92,246,1)] 
             hover:border-violet-400 transition-all duration-850 ease-in-out w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            {t("projects.button")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
