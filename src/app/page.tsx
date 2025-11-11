import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import profileData from "@/data/profile.json";
import Script from "next/script";

type ProfileData = typeof profileData;

export default function HomePage() {
  const profile: ProfileData = profileData;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://portfolio-jhimwel-prago.vercel.app";

  const projectSchemas = profile.projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: project.link ?? siteUrl,
    image: project.image ? `${siteUrl}${project.image}` : undefined,
    inLanguage: "en",
    keywords: project.tech.join(", "),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
    },
  }));

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "PH",
    },
    sameAs: Object.values(profile.socials ?? {}),
    image: `${siteUrl}/images/profilePicture.png`,
    description: profile.summary,
    knowsAbout: profile.skills,
    worksFor: [
      {
        "@type": "Organization",
        name: profile.experience[0]?.company ?? "Independent Consultant",
      },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      skills: profile.skills,
    },
    makesOffer: {
      "@type": "OfferCatalog",
      name: "Professional Services",
      itemListElement: projectSchemas,
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jhimwel Prago Portfolio",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en",
  };

  return (
    <>
      <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(websiteJsonLd)}
      </Script>
      <Script id="person-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(personJsonLd)}
      </Script>
      <div className="min-h-screen">
        <Hero profile={profile} />
        <Skills skills={profile.skills} />
        <Experience experience={profile.experience} />
        <Projects projects={profile.projects} />
        <Education education={profile.education} awards={profile.awards} />
        <Contact profile={profile} />

        <footer className="bg-surface py-8 text-center text-sm text-muted-foreground border-t border-border">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

