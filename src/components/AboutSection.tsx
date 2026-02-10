import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2 tracking-wider">01. About Me</h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">Who I Am</h3>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm an Application Developer based in Bengaluru, India, specializing in{" "}
              <span className="text-foreground font-medium">Java, Spring Boot, REST APIs</span>, and
              database-driven applications. I enjoy architecting scalable backend systems and building
              full-stack web solutions that solve real-world problems.
            </p>
            <p>
              With hands-on internship experience at product-focused companies, I've developed and
              optimized backend modules, designed RESTful APIs, and worked across the full development
              lifecycle — from database design to deployment.
            </p>
            <p>
              I'm actively looking for opportunities as a{" "}
              <span className="text-foreground font-medium">Java Developer</span>,{" "}
              <span className="text-foreground font-medium">Backend Engineer</span>, or{" "}
              <span className="text-foreground font-medium">Full-Stack Developer</span> where I can
              contribute to impactful projects and grow as an engineer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
