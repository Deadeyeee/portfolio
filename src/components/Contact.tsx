"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileData {
  email: string;
  socials: {
    linkedin: string;
  };
}

interface ContactProps {
  profile: ProfileData;
}

export const Contact = ({ profile }: ContactProps) => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="rounded-full">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} className="mr-2" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full">
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} className="mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
