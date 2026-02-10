import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "REST APIs", "JPA", "JDBC", "MySQL"],
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Servlets", "JSP"],
  },
  {
    title: "Tools & Concepts",
    skills: ["Git & GitHub", "Postman", "IntelliJ IDEA", "VS Code", "MVC Architecture", "OOPs", "Exception Handling", "Database Design"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2 tracking-wider">02. Skills</h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-10">Technologies I Work With</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h4 className="font-mono text-sm text-primary mb-4 font-medium">{group.title}</h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
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

export default SkillsSection;
