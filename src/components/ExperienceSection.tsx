import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Java Developer Intern",
    company: "Nimblix Technologies",
    period: "Jul 2025 – Oct 2025",
    points: [
      "Built backend modules using Spring Boot & MySQL",
      "Designed and documented REST APIs for microservices",
      "Optimized database queries and API response performance",
      "Used Git, Postman, and followed clean coding practices",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Vthreesoft Technologies",
    period: "Jul 2024 – Apr 2025",
    points: [
      "Developed full-stack applications using Core Java, Servlets, and JSP",
      "Built frontend interfaces with HTML, CSS, and JavaScript",
      "Implemented MVC architecture for structured application development",
      "Worked with MySQL for database operations and JDBC for connectivity",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2 tracking-wider">04. Experience</h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-10">Where I've Worked</h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                  <p className="font-mono text-sm text-primary mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                  <ul className="space-y-1.5">
                    {exp.points.map((point, pi) => (
                      <li key={pi} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
