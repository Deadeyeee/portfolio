import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  details: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Experience
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Professional journey and key achievements
          </p>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="text-primary mt-1" size={20} />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.date}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-text-secondary flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
