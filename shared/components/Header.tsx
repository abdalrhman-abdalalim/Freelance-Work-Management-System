import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter text-white">
          FWMS<span className="text-brand-teal">.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-brand-teal"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-brand-teal">
            Login
          </Button>
          <Button className="bg-[#14b8a6] text-zinc-950 hover:bg-[#0d9488] font-bold px-6 shadow-lg shadow-teal-500/20">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 transition-colors"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full sm:w-[400px] bg-brand-dark/95 border-white/10 text-white backdrop-blur-xl p-0 transition-transform duration-500 ease-in-out"
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex items-center justify-between mb-12">
                  <SheetTitle className="text-2xl font-bold text-white">
                    Navigation
                  </SheetTitle>
                </div>

                <div className="flex flex-col gap-8">
                  {navLinks.map((link, index) => (
                    <SheetClose asChild key={link.name}>
                      <a
                        href={link.href}
                        className="text-3xl font-semibold text-zinc-300 hover:text-brand-teal transition-all flex items-center justify-between group"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        {link.name}
                        <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-brand-teal" />
                      </a>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-auto space-y-4 pb-8">
                  <hr className="border-white/10 mb-8" />
                  <Button
                    variant="outline"
                    className="w-full py-7 border-brand-teal/50 text-brand-teal text-lg hover:bg-brand-teal/5"
                  >
                    Login
                  </Button>
                  <Button className="w-full py-7 bg-brand-teal text-brand-dark text-lg font-bold shadow-[0_0_20px_rgba(45,212,191,0.2)]">
                    Get Started Free
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
