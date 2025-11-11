"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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
  const [api, setApi] = useState<CarouselApi>();
  const isHovered = useRef(false);

  useEffect(() => {
    if (!api) return;

    const interval = window.setInterval(() => {
      if (isHovered.current) return;

      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 6000);

    return () => window.clearInterval(interval);
  }, [api]);

  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Experience</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Professional journey and key achievements
          </p>

          <Carousel
            className="relative"
            opts={{ loop: true, align: "start" }}
            setApi={setApi}
            onMouseEnter={() => {
              isHovered.current = true;
            }}
            onMouseLeave={() => {
              isHovered.current = false;
            }}
          >
            <CarouselContent>
              {experience.map((exp, index) => (
                <CarouselItem key={`${exp.company}-${exp.role}`} className="md:basis-3/4 lg:basis-2/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="h-full"
                  >
                    <div className="bg-card border border-border rounded-2xl p-8 shadow-lg shadow-primary/5 h-full flex flex-col justify-between">
                      <div className="flex items-start gap-3 mb-4">
                        <Briefcase className="text-primary mt-1" size={20} />
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.date}</p>
                        </div>
                      </div>
                      <ul className="space-y-3 mt-4 text-text-secondary">
                        {exp.details.map((detail) => (
                          <li key={detail} className="flex gap-2 leading-relaxed">
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
