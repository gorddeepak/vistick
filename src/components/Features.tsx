import { AlertTriangle, MapPin, Bluetooth, Eye, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: AlertTriangle,
    title: "Real-time Obstacle Alerts",
    description: "Advanced ultrasonic and AI-powered sensors detect obstacles, steps, and hazards up to 6 feet away with instant haptic and audio feedback.",
    gradient: "gradient-warning",
  },
  {
    icon: MapPin,
    title: "Live Location & Geofencing", 
    description: "GPS tracking keeps caregivers informed while customizable geofences send alerts when entering or leaving designated safe zones.",
    gradient: "gradient-hero",
  },
  {
    icon: Bluetooth,
    title: "Easy Device Pairing",
    description: "Seamless smartphone integration via Bluetooth. Quick setup with QR codes and voice-guided configuration for maximum accessibility.",
    gradient: "gradient-accent",
  },
  {
    icon: Eye,
    title: "Computer Vision AI",
    description: "YOLO-powered object recognition identifies crosswalks, stairs, doors, and landmarks with spoken descriptions for enhanced navigation.",
    gradient: "gradient-success",
  },
  {
    icon: Shield,
    title: "Emergency SOS System",
    description: "One-touch emergency activation sends location and alerts to your care network with automatic escalation to emergency services if needed.",
    gradient: "gradient-warning",
  },
  {
    icon: Zap,
    title: "Long-lasting Battery",
    description: "All-day battery life with smart power management. USB-C fast charging and low battery alerts ensure you're never caught off guard.",
    gradient: "gradient-accent",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Advanced Features for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Independent Living
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature is designed with accessibility and safety in mind, 
            empowering users to navigate confidently while keeping loved ones connected.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-${feature.gradient} mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;