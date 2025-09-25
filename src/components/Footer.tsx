import { Button } from "@/components/ui/button";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-glow">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">CareSync</span>
            </div>
            
            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
              Advanced family safety and health monitoring platform. Keep your loved ones safe with real-time alerts, location tracking, and emergency response features.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="/signup">Get Started Free</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a href="/dashboard">Schedule Demo</a>
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <nav className="space-y-3">
              <a href="/privacy" className="block text-white/80 hover:text-white transition-smooth">
                Privacy Policy
              </a>
              <a href="/help" className="block text-white/80 hover:text-white transition-smooth">
                Help Center
              </a>
              <a href="/contact" className="block text-white/80 hover:text-white transition-smooth">
                Contact Support
              </a>
              <a href="/terms" className="block text-white/80 hover:text-white transition-smooth">
                Terms of Service
              </a>
              <a href="/security" className="block text-white/80 hover:text-white transition-smooth">
                Security
              </a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-glow" />
                <span className="text-white/80">1-800-CARESYNC</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-glow" />
                <span className="text-white/80">support@caresync.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-glow" />
                <span className="text-white/80">24/7 Emergency Response</span>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="text-sm text-white/60">Emergency Hotline</div>
              <div className="text-2xl font-bold text-warning">911</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 CareSync. All rights reserved. | HIPAA Compliant | SOC 2 Certified
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm text-white/80">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;