"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/HeroBackground";
import Image from "next/image";

interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  socials: {
    linkedin: string;
  };
  summary: string;
}

interface HeroProps {
  profile: ProfileData;
}

export const Hero = ({ profile }: HeroProps) => {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-12 px-4 py-24 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:py-32">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col gap-8 text-left lg:w-1/2"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">{profile.title}</p>
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">{profile.summary}</p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:text-base">
            <motion.div whileHover={{ x: 5 }} className="flex flex-wrap items-center gap-2">
              <MapPin size={18} />
              <span>{profile.location}</span>
            </motion.div>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ x: 5 }}
              className="flex flex-wrap items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span>{profile.email}</span>
            </motion.a>
            <motion.div whileHover={{ x: 5 }} className="flex flex-wrap items-center gap-2">
              <Phone size={18} />
              <span>{profile.phone}</span>
            </motion.div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button size="lg" asChild className="rounded-full w-full sm:w-auto">
              <a href={`mailto:${profile.email}`}>Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full w-full sm:w-auto">
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full w-full sm:w-auto">
              <a href="/resume">View Resume</a>
            </Button>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex w-full items-center justify-center lg:w-1/2"
        >
          <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-background/60 shadow-lg sm:max-w-sm md:max-w-md">
            <Image
              src="/images/profilePicture.png"
              alt={`${profile.name} portrait`}
              fill
              priority
              quality={100}
              sizes="(min-width: 1024px) 28rem, (min-width: 768px) 22rem, 18rem"
              className="-scale-x-100 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
