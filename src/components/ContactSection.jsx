import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "../lib/utils";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "92fdee49-938f-4924-88bc-25ef38369ac9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        event.target.reset();
      } else {
        setResult("Error: " + (data.message || "Failed to send"));
      }
    } catch (error) {
      setResult("Network Error: " + error.message);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {" "}
            Touch
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Got an idea or project you'd like to bring to life? Let’s create
          something amazing together!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:yazasyahreza@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    yazasyahreza@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+6285150616368"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +62 851-5061-6368
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Probolinggo, Indonesia
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/yazasyahreza"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/yazagmng" target="_blank">
                  <Instagram />
                </a>
                <a href="https://x.com/9aSyahreza" target="_blank">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="access_key"
                value="2e4fb31c-681a-4bf8-9ec1-bdd745c0ab68"
              ></input>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Syahreza..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="yazasyahreza@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending.." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
