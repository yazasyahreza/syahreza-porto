import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Javascript", level: 75, category: "frontend" },
  { name: "Bootstrap", level: 92, category: "frontend" },

  { name: "Laravel", level: 84, category: "backend" },
  { name: "Go", level: 90, category: "backend" },
  { name: "PHP Native", level: 90, category: "backend" },
  { name: "Python", level: 83, category: "backend" },
  { name: "Java", level: 82, category: "backend" },
  { name: "MySql", level: 88, category: "backend" },

  { name: "Git/Github", level: 79, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getLevelName = (level) => {
    if (level >= 85) return "Pro";
    if (level >= 51) return "Intermediate";
    return "Learning";
  };

  const getLevelColor = (level) => {
    if (level >= 85) return "border border-green-400 text-green-400 rounded-full bg-green-400/10";
    if (level >= 51) return "border border-yellow-400 text-yellow-400 rounded-full bg-yellow-400/10";
    return "border border-blue-400 text-blue-400 rounded-full bg-blue-400/10";
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-400 to-indigo-400 text-white shadow-[0_0_25px_rgba(167,139,250,0.6)] transition-all duration-300"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const levelName = getLevelName(skill.level);
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs transition hover:shadow-md"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                <div className="text-left">
                  <div
                    className={cn(
                      "inline-block px-3 py-1 rounded-full text-sm font-medium mb-3",
                      getLevelColor(skill.level)
                    )}
                  >
                    {levelName}
                  </div>
                </div>

                <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <p className="text-xs text-muted-foreground mt-2 text-right">
                  {skill.level}%
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
