"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

interface EducationData {
  degree: string;
  school: string;
  date: string;
  honors: string;
}

interface EducationProps {
  education: EducationData;
  awards: string[];
}

export const Education = ({ education, awards }: EducationProps) => {
  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            Education & Recognition
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>

              <div>
                <p className="text-lg font-medium text-foreground mb-1">{education.degree}</p>
                <p className="text-primary font-medium">{education.school}</p>
                <p className="text-sm text-muted-foreground mb-2">{education.date}</p>
                <p className="text-sm font-semibold text-accent">{education.honors}</p>
              </div>
            </motion.div>

            {/* Awards Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Awards</h3>
              </div>

              <ul className="space-y-3">
                {awards.map((award, index) => (
                  <li key={index} className="text-text-secondary flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
