import { Card } from "@/components/ui/card";
import { Phone, Brain, Send, MessageCircle, Target, ArrowRight } from "lucide-react";

const flowSteps = [
  {
    icon: Phone,
    title: "AI Voice Call Begins",
    description: "Your AI Sales Rep calls the lead and qualifies them.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "Call Transcript Analysis",
    description: "Every word analyzed using LLMs and intent classification.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Send,
    title: "Smart Follow-Ups",
    description: "Relevant documents, brochures, or replies sent via Email and WhatsApp — instantly.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MessageCircle,
    title: "Doubt Resolution in Real-Time",
    description: "Two-way voice + text chat to resolve objections or questions — instantly.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Target,
    title: "Sales Team Empowered",
    description: "Hot leads pushed directly to your team to convert. We help your team close, not replace them.",
    color: "from-indigo-500 to-purple-500"
  }
];

export const SalesFlow = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            How Monade <span className="bg-gradient-primary bg-clip-text text-transparent">Transforms</span> Your Sales Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From lead qualification to closing deals, our AI handles the entire sales ecosystem
          </p>
        </div>

        {/* Desktop: Horizontal scroll */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="flex items-center justify-between space-x-6 overflow-x-auto pb-6">
              {flowSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <Card className="min-w-[300px] p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer animate-fade-in">
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                  
                  {index < flowSteps.length - 1 && (
                    <div className="flex-shrink-0 mx-4">
                      <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical cards */}
        <div className="lg:hidden space-y-6">
          {flowSteps.map((step, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer animate-slide-in">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} p-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};