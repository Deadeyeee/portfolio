import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="relative min-h-screen flex items-center px-4 pt-16 overflow-hidden">
      {/* Flow Field Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-primary" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="100%" className="text-accent" stopColor="currentColor" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Flowing curved lines */}
          <path d="M0,100 Q250,50 500,100 T1000,100" stroke="url(#flow-gradient)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M0,200 Q300,150 600,200 T1200,200" stroke="url(#flow-gradient)" strokeWidth="1.5" fill="none" style={{ animationDelay: '0.5s' }} className="animate-pulse" />
          <path d="M0,300 Q200,250 400,300 T800,300" stroke="url(#flow-gradient)" strokeWidth="2.5" fill="none" style={{ animationDelay: '1s' }} className="animate-pulse" />
          <path d="M0,400 Q350,350 700,400 T1400,400" stroke="url(#flow-gradient)" strokeWidth="1" fill="none" style={{ animationDelay: '1.5s' }} className="animate-pulse" />
          <path d="M0,500 Q150,450 300,500 T600,500" stroke="url(#flow-gradient)" strokeWidth="2" fill="none" style={{ animationDelay: '2s' }} className="animate-pulse" />
        </svg>
      </div>

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
            <Button size="lg" variant="outline" asChild className="rounded-full">
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full">
              <a href="/resume">View Resume</a>
            </Button>
          </div>
        </motion.div>

        {/* Right: Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-border flex items-center justify-center">
            <p className="text-muted-foreground text-center px-8">
              Your profile image will appear here
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
