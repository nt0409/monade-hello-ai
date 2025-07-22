import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Sparkles } from "lucide-react";

interface PhoneInputProps {
  title: string;
  subtitle: string;
  buttonText: string;
  variant?: "hero" | "cta";
}

export const PhoneInput = ({ title, subtitle, buttonText, variant = "cta" }: PhoneInputProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual phone call functionality
    alert(`Calling ${phoneNumber}...`);
  };

  return (
    <div className="relative">
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-glow rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary rounded-full animate-float delay-1000 opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-primary-glow rounded-full animate-float delay-2000 opacity-50"></div>
      </div>

      <div className={`max-w-md mx-auto ${variant === "hero" ? "relative z-10" : ""}`}>
        {/* Mobile-like interface */}
        <div className="bg-gradient-card backdrop-blur-sm rounded-3xl p-8 shadow-card border border-white/20">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-primary p-3 rounded-full animate-glow-pulse">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="h-12 bg-white/50 border-white/30 rounded-full pl-4 pr-4 text-center text-lg font-medium placeholder:text-muted-foreground/60"
              />
            </div>
            
            <Button 
              type="submit" 
              variant={variant}
              size="lg"
              className="w-full group"
              disabled={!phoneNumber.trim()}
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
              {buttonText}
            </Button>
          </form>

          {/* Voice wave animation */}
          <div className="flex items-center justify-center mt-6 space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-primary rounded-full animate-pulse"
                style={{
                  height: Math.random() * 20 + 10 + "px",
                  animationDelay: i * 0.1 + "s",
                  animationDuration: "1.5s"
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};