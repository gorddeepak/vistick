import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Eye, MapPin, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import vistickHero from "@/assets/vistick-hero.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm">
                <Shield className="mr-2 h-4 w-4 text-primary" />
                <span className="text-primary font-medium">Empowering Independence Since 2023</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Navigate the World with{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Vistick is the smart vision stick that transforms mobility for the blind and visually impaired. 
                Real-time obstacle detection, GPS navigation, and emergency alerts - all in one intelligent device.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                variant="hero"
                onClick={() => navigate("/signup")}
                className="group"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                size="xl"
                variant="outline"
                className="group"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground font-medium">10,000+ Lives Enhanced</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground font-medium">Available in 50+ Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground font-medium">FDA Approved</span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative lg:order-2">
<<<<<<< HEAD
            <div className="relative rounded-2xl overflow-hidden shadow-large">
=======
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-large">
>>>>>>> a1c9ac8dc7519fe8bad2f9352c5ca01d7509f40c
              <img
                src={vistickHero}
                alt="Vistick Smart Vision Stick - A sleek white device with sensors and smart technology"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Feature Cards */}
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-medium backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
                <span className="text-sm font-medium">Real-time Detection</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-medium backdrop-blur">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">GPS Navigation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;