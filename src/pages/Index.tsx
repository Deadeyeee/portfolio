import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";

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
  skills: string[];
  experience: Array<{
    role: string;
    company: string;
    date: string;
    details: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    tech: string[];
  }>;
  education: {
    degree: string;
    school: string;
    date: string;
    honors: string;
  };
  awards: string[];
}

const Index = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/profile.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading profile data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-muted-foreground"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Error Loading Profile</h2>
          <p className="text-muted-foreground">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero profile={profile} />
      <Skills skills={profile.skills} />
      <Experience experience={profile.experience} />
      <Projects projects={profile.projects} />
      <Education education={profile.education} awards={profile.awards} />
      <Contact profile={profile} />
      
      <footer className="bg-surface py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
