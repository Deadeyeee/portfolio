"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  const handleOpenLink = (link?: string) => {
    if (!link) return;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Featured Projects</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Recent work showcasing technical expertise and problem-solving
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => handleOpenLink(project.link)}
                role={project.link ? "button" : undefined}
                tabIndex={project.link ? 0 : undefined}
                onKeyDown={(event) => {
                  if (!project.link) return;
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleOpenLink(project.link);
                  }
                }}
                className={cn(
                  "group flex h-full cursor-default flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300",
                  project.link && "cursor-pointer hover:border-primary hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background",
                  !project.link && "hover:border-primary hover:shadow-xl",
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-transparent">
                  <Image
                    src={project.image ?? "/placeholder.svg"}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 768px) 45vw, 90vw"
                    className={cn(
                      "object-cover transition-transform duration-500",
                      project.image ? "group-hover:scale-105" : "object-contain p-8 opacity-80",
                    )}
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                      <p className="text-muted-foreground mt-1 leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
