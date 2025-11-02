import { Briefcase, Cloud, Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {" "}
            Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Junior Web Developer </h3>
            <p className="text-muted-foregorund">
              Hello, I'm Syahreza, I have over 2 years of experience in web
              development. I specialize in backend development, I enjoy creating
              APIs - designing clean, responsive, and functional web
              applications. Currently, I like learning about machine learning.
            </p>

            <p className="text-muted-foregorund">
              I’m always excited to take on new challenges that push my
              creativity and problem-solving skills, turning ideas into
              something real that people can use and enjoy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive, high-performance websites with clean
                    code and modern design.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">APIs Design</h4>
                  <p className="text-muted-foreground">
                    Designing robust, secure, and scalable APIs that connect
                    systems efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
