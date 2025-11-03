import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Company Profile Website",
    description:
      "This website displays information about the company and my activities during my internship there. This project is my final internship assignment and was developed within 6 months",
    image: "/projects/p1.png",
    tags: ["Bootstrap", "PHP Native", "MySQL"],
    demoURL: "https://mycompany-profile.ct.ws/user",
    githubURL: "https://github.com/yazasyahreza/web-companyprofile",
  },
  {
    id: 2,
    title: "Administrator Company Profile Website",
    description:
      "The data displayed on the company profile website will be processed on this page. This project is a continuation of the company profile website that serves as an administrator.",
    image: "/projects/p2a.png",
    tags: ["Bootstrap", "PHP Native", "MySQL"],
    demoURL: "https://mycompany-profile.ct.ws/admin/",
    githubURL: "https://github.com/yazasyahreza/web-companyprofile",
  },
  {
    id: 3,
    title: "Garden School Blog",
    description:
      "This simple blog platform features articles and insights about my school garden. The website is static and was developed within 1 month.",
    image: "/projects/p5.png",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    demoURL: "https://kebun-sekolah.rf.gd/projectku",
    githubURL: "https://github.com/yazasyahreza/garden-school",
  },
  {
    id: 4,
    title: "Ogeng Press - Store Application",
    description:
      "I created this store application to make it easier for my father to manage the store's inventory. This application can process transactions, manage goods, and display transaction history. I developed this project over a period of 2 weeks.",
    image: "/projects/p7.png",
    tags: ["Java Swing", "MySQL"],
    demoURL: "#",
    githubURL: "https://github.com/yazasyahreza/ogengpress",
  },
  {
    id: 5,
    title: "Ecommerce Website",
    description:
      "This e-commerce website displays a list of the best and latest cars, or it can be referred to as a car dealership website. Users can interact with the website and read information about car sales. I developed this project over a period of 3 weeks.",
    image: "/projects/p3.png",
    tags: ["Bootstrap", "PHP Native", "MySQL"],
    demoURL: "https://goocar25.xo.je/user",
    githubURL: "https://github.com/yazasyahreza/egoocar",
  },
  {
    id: 6,
    title: "Administrator Ecommerce Website",
    description:
      "The data displayed on the car dealership e-commerce website will be processed on this page. This project is a continuation of the car dealership website that functions as an administrator.",
    image: "/projects/p4.png",
    tags: ["Bootstrap", "PHP Native", "MySQL"],
    demoURL: "https://goocar25.xo.je/admin/login.php",
    githubURL: "https://github.com/yazasyahreza/egoocar",
  },
  {
    id: 7,
    title: "APIs-based Store Application",
    description:
      "Here, I have created CRUD operations to manage store data such as products and employees, as well as to perform sales transactions. This project is designed in the form of an API as a bridge between the backend and frontend. Developed within 1 months",
    image: "/projects/p6.png",
    tags: ["Golang", "MySQL"],
    demoURL: "#",
    githubURL: "https://github.com/yazasyahreza/mesin-kasir-go",
  },
  {
    id: 8,
    title: "Administrator Training Course",
    description:
      "This is an administrator website that serves to manage course data for training programs. Users can also monitor training progress over a period of 1 month. I developed this project while participating in one of the training programs on campus. Developed within 1 months",
    image: "/projects/p8.png",
    tags: ["Laravel", "MySQL"],
    demoURL: "https://kursusunuja.ct.ws/login",
    githubURL: "https://github.com/yazasyahreza/kursusunuja",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {" "}
            Projects
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
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
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
