import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="mb-4 -ml-2"
              >
                <ArrowLeft size={18} className="mr-2" />
                Back to Home
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Resume</h1>
              <p className="text-muted-foreground mt-2">View and download my professional resume</p>
            </div>
            
            <Button size="lg" asChild className="rounded-full">
              <a href="/resume.pdf" download="Jhimwel_Prago_Resume.pdf">
                <Download size={18} className="mr-2" />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
            <object
              data="/resume.pdf"
              type="application/pdf"
              className="w-full h-[calc(100vh-200px)] min-h-[800px]"
              aria-label="Resume PDF viewer"
            >
              <div className="p-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Unable to display PDF. Please download the file to view it.
                </p>
                <Button asChild>
                  <a href="/resume.pdf" download="Jhimwel_Prago_Resume.pdf">
                    <Download size={18} className="mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
