import { Smartphone, UserPlus, Navigation } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    step: "01",
    title: "Download & Setup",
    description: "Download the Vistick app, create your profile, and pair your device in under 5 minutes with our voice-guided setup process.",
    color: "primary",
  },
  {
    icon: UserPlus,
    step: "02", 
    title: "Add Your Care Network",
    description: "Invite family members and caregivers to join your network. Set emergency contacts and customize notification preferences.",
    color: "accent",
  },
  {
    icon: Navigation,
    step: "03",
    title: "Navigate with Confidence", 
    description: "Start exploring with real-time guidance, obstacle detection, and GPS navigation. Your care network stays informed automatically.",
    color: "success",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How Vistick{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps and begin your journey to enhanced independence and peace of mind.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${step.color} text-white font-bold text-lg shadow-medium group-hover:shadow-glow transition-all duration-300`}>
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-16 w-full h-px bg-border">
                    <div className="absolute inset-0 bg-gradient-to-r from-border to-transparent" />
                  </div>
                )}
              </div>

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-${step.color}/10 mb-4 group-hover:bg-${step.color}/20 transition-colors duration-300`}>
                <step.icon className={`h-8 w-8 text-${step.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground mb-4">Ready to get started?</p>
          <div className="inline-flex items-center gap-2 text-primary font-medium">
            <span>Setup takes less than 5 minutes</span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;