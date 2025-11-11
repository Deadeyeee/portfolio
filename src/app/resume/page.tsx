import type { Metadata } from "next";
import { ResumeContent } from "@/components/ResumeContent";

export const metadata: Metadata = {
  title: "Resume · Jhimwel Prago",
  description: "Download and explore the professional resume of Jhimwel Prago.",
};

export default function ResumePage() {
  return <ResumeContent />;
}

