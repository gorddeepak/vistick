import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Shield, User, Heart, Smartphone, CheckCircle } from "lucide-react";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    phone: "",
    emergencyContact: "",
    emergencyPhone: "",
    locationConsent: false,
    healthConsent: false,
    alertsConsent: false,
    pairingCode: ""
  });

  const totalSteps = 5;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Choose Your Role</h2>
              <p className="text-muted-foreground">Select how you'll be using CareSync</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card 
                className={`p-8 cursor-pointer transition-smooth border-2 ${
                  formData.role === 'caregiver' ? 'border-primary shadow-glow' : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setFormData({...formData, role: 'caregiver'})}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-success rounded-2xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Caregiver</h3>
                  <p className="text-muted-foreground">Monitor and care for family members, elderly parents, or patients</p>
                </div>
              </Card>
              
              <Card 
                className={`p-8 cursor-pointer transition-smooth border-2 ${
                  formData.role === 'user' ? 'border-primary shadow-glow' : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setFormData({...formData, role: 'user'})}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-2xl flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Device Owner</h3>
                  <p className="text-muted-foreground">Set up monitoring for yourself and connect with caregivers</p>
                </div>
              </Card>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Personal Information</h2>
              <p className="text-muted-foreground">Tell us about yourself</p>
            </div>
            
            <div className="space-y-6 max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Emergency Contacts</h2>
              <p className="text-muted-foreground">Who should we contact in an emergency?</p>
            </div>
            
            <div className="space-y-6 max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                <Input 
                  id="emergencyContact" 
                  placeholder="Enter contact name"
                  value={formData.emergencyContact}
                  onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                <Input 
                  id="emergencyPhone" 
                  type="tel"
                  placeholder="Enter contact phone number"
                  value={formData.emergencyPhone}
                  onChange={(e) => setFormData({...formData, emergencyPhone: e.target.value})}
                />
              </div>
              
              <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-warning mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-warning">Important</p>
                    <p className="text-muted-foreground">This contact will receive immediate alerts during emergencies and can access your location if needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Privacy & Consent</h2>
              <p className="text-muted-foreground">Control what data we collect and how it's used</p>
            </div>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="flex items-start space-x-3 p-4 border border-border rounded-lg">
                <Checkbox 
                  id="location"
                  checked={formData.locationConsent}
                  onCheckedChange={(checked) => setFormData({...formData, locationConsent: checked as boolean})}
                />
                <div className="space-y-1">
                  <Label htmlFor="location" className="text-base font-medium">Location Tracking</Label>
                  <p className="text-sm text-muted-foreground">Allow real-time location tracking and geofencing alerts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 border border-border rounded-lg">
                <Checkbox 
                  id="health"
                  checked={formData.healthConsent}
                  onCheckedChange={(checked) => setFormData({...formData, healthConsent: checked as boolean})}
                />
                <div className="space-y-1">
                  <Label htmlFor="health" className="text-base font-medium">Health Monitoring</Label>
                  <p className="text-sm text-muted-foreground">Collect health data from connected devices and wearables</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 border border-border rounded-lg">
                <Checkbox 
                  id="alerts"
                  checked={formData.alertsConsent}
                  onCheckedChange={(checked) => setFormData({...formData, alertsConsent: checked as boolean})}
                />
                <div className="space-y-1">
                  <Label htmlFor="alerts" className="text-base font-medium">Emergency Alerts</Label>
                  <p className="text-sm text-muted-foreground">Send alerts via SMS, push notifications, and phone calls</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Device Pairing</h2>
              <p className="text-muted-foreground">Connect your devices to start monitoring</p>
            </div>
            
            <div className="max-w-md mx-auto space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-hero rounded-2xl flex items-center justify-center shadow-glow mb-4">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <p className="text-muted-foreground">Enter the pairing code from your device or scan the QR code</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="pairingCode">Pairing Code</Label>
                <Input 
                  id="pairingCode" 
                  placeholder="Enter 6-digit code"
                  value={formData.pairingCode}
                  onChange={(e) => setFormData({...formData, pairingCode: e.target.value})}
                  className="text-center text-xl tracking-widest"
                  maxLength={6}
                />
              </div>
              
              <Button variant="outline" className="w-full">
                Scan QR Code Instead
              </Button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-glow">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">CareSync</span>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>
        
        {/* Content Card */}
        <Card className="p-8 md:p-12 border-0 shadow-large">
          {currentStep === totalSteps && formData.pairingCode ? (
            // Success State
            <div className="text-center space-y-8">
              <div className="w-24 h-24 mx-auto bg-gradient-success rounded-full flex items-center justify-center shadow-glow">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Welcome to CareSync!</h2>
                <p className="text-xl text-muted-foreground">Your account has been created successfully. You can now start monitoring and staying connected with your loved ones.</p>
              </div>
              
              <Button variant="hero" size="xl" className="mx-auto" asChild>
                <a href="/dashboard">Go to Dashboard</a>
              </Button>
            </div>
          ) : (
            <>
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between pt-12">
                <Button 
                  variant="outline" 
                  onClick={handleBack}
                  disabled={currentStep === 1}
                >
                  Back
                </Button>
                
                <Button 
                  variant="hero" 
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 && !formData.role) ||
                    (currentStep === 2 && (!formData.name || !formData.email || !formData.phone)) ||
                    (currentStep === 3 && (!formData.emergencyContact || !formData.emergencyPhone)) ||
                    (currentStep === 4 && (!formData.locationConsent || !formData.healthConsent || !formData.alertsConsent))
                  }
                >
                  {currentStep === totalSteps ? 'Complete Setup' : 'Continue'}
                </Button>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Signup;