import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import monadeLogoUrl from "@/assets/monade-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={monadeLogoUrl} alt="Monade" className="w-8 h-8" />
          <span className="text-xl font-heading font-bold text-foreground">Monade</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Success Stories</a>
          <a href="#demo" className="text-foreground hover:text-primary transition-colors">Live Demo</a>
          <a href="#docs" className="text-foreground hover:text-primary transition-colors">Docs</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="cta" size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-white/20 md:hidden">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <a href="#features" className="block text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#testimonials" className="block text-foreground hover:text-primary transition-colors">Success Stories</a>
              <a href="#demo" className="block text-foreground hover:text-primary transition-colors">Live Demo</a>
              <a href="#docs" className="block text-foreground hover:text-primary transition-colors">Docs</a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full">Sign In</Button>
                <Button variant="cta" size="sm" className="w-full">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};