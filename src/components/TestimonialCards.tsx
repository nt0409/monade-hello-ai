import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Quote } from "lucide-react";

const testimonials = [
  {
    industry: "Real Estate",
    logo: "🏠",
    result: "40% more deals closed",
    company: "PropTech Solutions",
    location: "Bangalore",
    quote: "We closed 40% more deals without hiring more SDRs.",
    name: "Rajesh Kumar",
    role: "Founder",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    industry: "EdTech",
    logo: "📚",
    result: "18% more qualified demos",
    company: "EduNext",
    location: "Mumbai",
    quote: "Student enrollment calls became seamless and professional.",
    name: "Priya Sharma",
    role: "Head of Sales",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    industry: "SaaS",
    logo: "💻",
    result: "3x faster lead qualification",
    company: "CloudFlow",
    location: "Hyderabad",
    quote: "Our sales team now focuses only on hot prospects.",
    name: "Arjun Patel",
    role: "VP Sales",
    gradient: "from-purple-500 to-pink-500"
  }
];

export const TestimonialCards = () => {
  const handleCallPreview = (industry: string) => {
    // TODO: Implement call preview functionality
    alert(`Playing ${industry} call preview...`);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Proven Results Across <span className="bg-gradient-primary bg-clip-text text-transparent">Industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses transform their sales process with Monade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in cursor-pointer">
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Industry badge and logo */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{testimonial.logo}</div>
                    <Badge variant="secondary" className="font-medium">
                      {testimonial.industry}
                    </Badge>
                  </div>
                </div>

                {/* Result metric */}
                <div className="mb-6">
                  <div className={`text-3xl font-heading font-bold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent mb-2`}>
                    {testimonial.result}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company} • {testimonial.location}
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <Quote className="w-6 h-6 text-primary mb-3 opacity-50" />
                  <blockquote className="text-foreground font-medium leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm text-muted-foreground">
                    — {testimonial.name}, {testimonial.role}
                  </div>
                </div>

                {/* Call preview button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  onClick={() => handleCallPreview(testimonial.industry)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Call Preview
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};