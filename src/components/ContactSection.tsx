import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${form.name}`;
    const body = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    const mailtoLink = `mailto:tech.sandeep18@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    toast.info("Opening your email app...");

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 500);

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-mono text-sm text-primary mb-2 tracking-wider">
            06. Contact
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Get In Touch
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Contact info */}
          <div className="space-y-4">
            {[
              {
                icon: Mail,
                label: "tech.sandeep18@gmail.com",
                href: "mailto:tech.sandeep18@gmail.com",
              },
              {
                icon: Phone,
                label: "+91 8123571317",
                href: "tel:+918123571317",
              },
              {
                icon: Github,
                label: "GitHub",
                href: "https://github.com/Sandeepkumar-S-18",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/sandeepku-s",
              },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                  <Icon size={16} />
                </div>
                {label}
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />

            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />

            <textarea
              placeholder="Your message"
              required
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send size={14} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
