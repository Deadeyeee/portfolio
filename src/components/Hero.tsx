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
    <section className="relative min-h-screen flex items-center px-4 overflow-hidden">
      <HeroBackground />
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            {profile.title}
          </p>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            {profile.summary}
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <MapPin size={18} />
              <span>{profile.location}</span>
            </motion.div>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span>{profile.email}</span>
            </motion.a>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Phone size={18} />
              <span>{profile.phone}</span>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="rounded-full">
              <a href={`mailto:${profile.email}`}>Get In Touch</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full"
            >
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full"
            >
              <a href="/resume">View Resume</a>
            </Button>
          </div>
        </motion.div>

        {/* Right: Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-end"
        >
          <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/profilePicture.png"
              alt={`${profile.name} portrait`}
              fill
              priority
              quality={100}
              sizes="(min-width: 1024px) 24rem, (min-width: 768px) 40vw, 70vw"
              className="-scale-x-100"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
