import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneInput } from "@/components/PhoneInput";
import { SalesFlow } from "@/components/SalesFlow";
import { TestimonialCards } from "@/components/TestimonialCards";
import { TechStack } from "@/components/TechStack";
import { Sparkles, ArrowDown } from "lucide-react";
import heroBgUrl from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Hero background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background/80"></div>
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float delay-2000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto mb-16">
            {/* Hero badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary-glow" />
              <span className="text-sm font-medium text-white/90">Powered by Advanced AI</span>
            </div>

            {/* Hero headline */}
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-in">
              AI Sales Rep that knows 
              <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                who's worth your time
              </span>
            </h1>

            {/* Hero subheadline */}
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Automatically qualify leads, follow up intelligently, and surface high-priority prospects 
              to your sales team. No more cold calls, just warm conversions.
            </p>
          </div>

          {/* Hero CTA */}
          <div className="animate-fade-in">
            <PhoneInput 
              title="Experience a call from your AI Sales Rep"
              subtitle="Get a live demo in 30 seconds"
              buttonText="Get a Call"
              variant="hero"
            />
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/60" />
          </div>
        </div>
      </section>

      {/* Sales Flow Section */}
      <div id="features">
        <SalesFlow />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialCards />
      </div>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Live Demo Section */}
      <section id="demo" className="py-24 bg-gradient-primary relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Let Monade call you in 30 seconds
            </h2>
            <p className="text-xl text-white/80 mb-12">
              See the magic yourself — Experience a live conversation with your AI Sales Rep
            </p>
          </div>

          <PhoneInput 
            title="Ready for your demo?"
            subtitle="Enter your details for an instant callback"
            buttonText="Call Me Now"
            variant="hero"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
