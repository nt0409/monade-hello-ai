import monadeLogoUrl from "@/assets/monade-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={monadeLogoUrl} alt="Monade" className="w-8 h-8" />
              <span className="text-xl font-heading font-bold text-foreground">Monade</span>
            </div>
            <p className="text-muted-foreground">
              AI Sales Rep that knows who's worth your time.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Product</h4>
            <nav className="space-y-2">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#integrations" className="block text-muted-foreground hover:text-primary transition-colors">Integrations</a>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Company</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#careers" className="block text-muted-foreground hover:text-primary transition-colors">Careers</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Resources</h4>
            <nav className="space-y-2">
              <a href="#docs" className="block text-muted-foreground hover:text-primary transition-colors">Documentation</a>
              <a href="#api" className="block text-muted-foreground hover:text-primary transition-colors">API</a>
              <a href="#support" className="block text-muted-foreground hover:text-primary transition-colors">Support</a>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Monade. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy</a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms</a>
            <a href="#security" className="text-muted-foreground hover:text-primary transition-colors text-sm">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};