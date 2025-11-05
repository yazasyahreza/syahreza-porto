import { useState } from "react";
import { cn } from "../lib/utils";

const gallerys = [
  {
    id: 1,
    date: "Nov 2023",
    title: "LSP Certificate",
    description:
      "Competent KKNI Level II Software Engineer, I received this certificate after passing the LSP exam in the software engineer field of expertise.",
    image: "/projects/s1.jpeg",
    category: "achievement",
  },
  {
    id: 2,
    date: "June 2023",
    title: "Internship Certificate",
    description:
      "I got this certificate after participating in internship activities and getting a score of 93 predicate A.",
    image: "/projects/s2.jpeg",
    category: "achievement",
  },
  {
    id: 3,
    date: "June 2023",
    title: "Certificate of Internship Completion",
    description:
      "Excellent Junior Backend Dev, I got this certificate after graduating from my internship as a junior backend developer in a software house.",
    image: "/projects/s3.jpeg",
    category: "achievement",
  },
];

const categories = ["all", "achievement", "activities", "learning journey"];

export const GallerysSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredGallerys = gallerys.filter(
    (gallery) => activeCategory === "all" || gallery.category === activeCategory
  );

  return (
    <section id="gallerys" className="py-24 px-4 relative overflow-hidden">
      <div
        className="container mx-auto max-w-5xl"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          The{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Gallerys
          </span>
        </h2>

        <p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          My Gallery showcases a collection of my certificates, activities, and
          memorable moments.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-400 to-indigo-400 text-white shadow-[0_0_15px_rgba(139,92,246,0.6)]"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/90 hover:shadow-[0_0_10px_rgba(139,92,246,0.4)]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallerys.map((gallery) => (
            <div
              key={gallery.id}
              className="bg-card rounded-lg overflow-hidden shadow-xs hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-shadow duration-500"
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelectedImage(gallery.image)}
                className="relative h-48 overflow-hidden group"
                aria-label={`Preview ${gallery.title}`}
              >
                <img
                  src={gallery.image}
                  alt={gallery.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75 cursor-pointer"
                />

                <div className="hidden md:flex absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center pointer-events-none">
                  <span className="text-white text-lg font-semibold flex items-center gap-2 animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                      />
                    </svg>
                    Click to view
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                    {gallery.date}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-1">{gallery.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {gallery.description}
                </p>

                <p className="text-xs pt-2 text-center text-muted-foreground italic md:hidden">
                  Click image to preview
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-[0_0_40px_rgba(139,92,246,0.8)] transition-transform duration-700 hover:scale-105"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black/80 px-3 py-1 rounded-full text-sm transition-all"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
