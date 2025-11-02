import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();

    const target = document.querySelector("#about");
    if (!target) return;

    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + window.scrollY;
    const distance = endY - startY;
    const duration = 2500; // durasi scroll (ms)
    const startTime = performance.now();

    const smoothScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // gunakan easing linear agar kecepatannya tetap pelan dan konstan
      const scrollY = startY + distance * progress;
      window.scrollTo(0, scrollY);

      if (progress < 1) {
        requestAnimationFrame(smoothScroll);
      } else {
        window.scrollTo(0, endY); // pastikan berhenti tepat di posisi tujuan
      }
    };

    requestAnimationFrame(smoothScroll);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hello World,</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent opacity-0 animate-fade-in-delay-1">
              My Space {" "}
            </span>
            <span className="opacity-0 animate-fade-in-delay-2">
              of Creation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Enjoy exploring my world of code and creativity, let’s build
            something amazing together!
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Tombol Scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <button
          onClick={handleSmoothScroll}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};
