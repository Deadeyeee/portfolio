import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://portfolio-jhimwel-prago.vercel.app";
const siteName = "Jhimwel Prago · Full Stack Developer";
const siteDescription =
  "Results-oriented full stack developer specializing in .NET, React, Next.js, and Web3 solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s · Jhimwel Prago",
  },
  description: siteDescription,
  applicationName: "Jhimwel Prago Portfolio",
  keywords: [
    "Jhimwel Prago",
    "Full Stack Developer",
    ".NET Developer",
    "React Developer",
    "Next.js",
    "Web3",
    "Portfolio",
    "Philippines Developer",
  ],
  authors: [{ name: "Jhimwel Prago", url: siteUrl }],
  creator: "Jhimwel Prago",
  publisher: "Jhimwel Prago",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/images/profilePicture.png",
        width: 1024,
        height: 1024,
        alt: "Portrait of Jhimwel Prago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/images/profilePicture.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <AppProviders>
          <Navigation />
          <main className="pt-16 min-h-screen">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}

