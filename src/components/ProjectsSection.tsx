import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "XenzKart – E-commerce Platform",
    description: "Full-stack e-commerce application built with JSP & Servlets following MVC architecture. Includes product catalog, cart, orders, and authentication.",
    tech: ["Java", "JSP", "Servlets", "JDBC", "MySQL"],
    github: "https://github.com/Sandeepkumar-S-18/XenzKart--Full-stack-project",
    highlight: "Full-Stack Web Application",
  },
  {
    title: "Bookstore Management System",
    description: "RESTful backend with JWT authentication. APIs for managing books, users, and orders with secure endpoints.",
    tech: ["Java", "Spring Boot", "JPA", "MySQL", "JWT"],
    github: "https://github.com/Sandeepkumar-S-18/Bookstore-Management-System",
    highlight: "Spring Boot Backend Application",
  },
  {
    title: "E-commerce Application (Console + GUI)",
    description: "Java console and GUI shopping system with JDBC-based database integration for product management and ordering.",
    tech: ["Java", "Swing GUI", "JDBC", "MySQL"],
    github: "https://github.com/Sandeepkumar-S-18/E-commerce-GUI",
    highlight: "GUI Application",
  },
  {
    title: "Smart Wireless Water Meter",
    description: "IoT system using ESP32 for real-time pH, TDS, and flow monitoring with ThingSpeak dashboard. Selected for KSCST funding.",
    tech: ["ESP32", "IoT", "ThingSpeak", "Sensors"],
    github: "https://github.com/Sandeepkumar-S-18/Smart_wireless_water_meter_with_Web_DB",
    highlight: "KSCST Funded",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2 tracking-wider">03. Projects</h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-10">Things I've Built</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 flex flex-col hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {project.highlight && (
                <span className="inline-block self-start px-2 py-0.5 mb-3 text-xs font-mono font-medium rounded bg-primary/10 text-primary border border-primary/20">
                  {project.highlight}
                </span>
              )}

              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
