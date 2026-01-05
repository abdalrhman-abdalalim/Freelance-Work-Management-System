import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <main className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-brand-dark">
      {/* 1. Subtle Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(45,212,191,0.15),transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        {/* 2. Minimalist Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-zinc-500 text-xs tracking-widest uppercase animate-fade-in">
          <span className="w-1 h-1 rounded-full bg-brand-teal" />
          Version 2.0 is now live
          <ChevronRight className="w-3 h-3" />
        </div>

        {/* 3. The "Light" Typography Title */}
        <h1 className="text-5xl md:text-8xl font-extralight tracking-tight text-white leading-tight">
          Work <span className="font-medium">Smarter</span>. <br />
          Not Harder.
        </h1>

        {/* 4. Elegant Subtext */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
          FWMS is the minimalist workspace for the modern freelancer. Manage
          projects, clients, and time in one fluid interface.
        </p>

        {/* 5. Minimalist Actions */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Button
            size="lg"
            className="h-14 px-10 bg-white text-brand-dark hover:bg-zinc-200 text-base font-medium rounded-full transition-all duration-300"
          >
            Get Started Free
          </Button>

          <Button
            variant="link"
            size="lg"
            className="text-white hover:text-brand-teal text-base font-light transition-colors group"
          >
            See how it works
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* 6. Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent" />
    </main>
  );
};

export default HeroSection;
