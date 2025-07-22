import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, Database, Mic } from "lucide-react";

const technologies = [
  {
    icon: Brain,
    name: "Advanced LLMs",
    description: "GPT-4 & Claude for natural conversations",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageSquare,
    name: "WhatsApp API",
    description: "Seamless messaging integration",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Database,
    name: "Dynamic CRM Integration",
    description: "Works with Salesforce, HubSpot & more",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Mic,
    name: "Real-time Voice Synthesis",
    description: "Natural, human-like conversations",
    color: "from-orange-500 to-red-500"
  }
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Powered by <span className="bg-gradient-primary bg-clip-text text-transparent">Cutting-Edge</span> Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on the latest AI infrastructure for enterprise-grade reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <Card key={index} className="group p-6 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 text-center animate-fade-in hover:scale-105 cursor-pointer">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tech.color} p-4 group-hover:animate-float`}>
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {tech.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tech.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};