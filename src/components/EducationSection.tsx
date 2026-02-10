import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2 tracking-wider">05. Education</h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-10">Academic Background</h3>
        </motion.div>

        <div className="space-y-6">
          {[
            {
              degree: "B.E. in Electronics & Communication Engineering",
              institution: "SVCE, Bengaluru",
              score: "CGPA: 7.71",
              year: "2021 – 2025",
            },
            {
              degree: "Pre-University (PCMB)",
              institution: "Sri Sannidhi PU College, Karnataka",
              score: "94%",
              year: "2021",
            },
            {
              degree: "SSLC",
              institution: " Navachetana english medium School, Karnataka",
              score: "88.96%",
              year: "2019",
            },
          ].map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"
            >
              <div className="mt-0.5 p-2 rounded-lg bg-primary/10">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">
                  {edu.institution} {edu.year && `| ${edu.year}`}
                </p>
                <p className="text-sm font-mono text-primary mt-1">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Award size={20} className="text-primary" />
            Certifications
          </h3>
          <div className="space-y-3">
            {[
              "Full Stack Web Development with Java – VTHREESOFT Technologies",
              "IR4.0 Foundation Course – TechSaksham (Edunet Foundation)",
            ].map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card text-sm text-muted-foreground"
              >
                <span className="text-primary">▹</span>
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
