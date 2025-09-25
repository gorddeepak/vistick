import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MapPin, 
  Battery, 
  Clock, 
  Phone, 
  Eye, 
  Mic,
  AlertTriangle,
  Shield,
  Heart,
  Navigation,
  Activity
} from "lucide-react";

const Dashboard = () => {
  const [selectedMember, setSelectedMember] = useState("mom");

  const familyMembers = [
    {
      id: "mom",
      name: "Mom",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b3e7019c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      status: "safe",
      lastSeen: "2 minutes ago",
      battery: 75,
      location: "Home"
    },
    {
      id: "dad",
      name: "Dad",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      status: "active",
      lastSeen: "5 minutes ago", 
      battery: 45,
      location: "Office"
    },
    {
      id: "daughter",
      name: "Emma",
      avatar: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      status: "safe",
      lastSeen: "1 minute ago",
      battery: 92,
      location: "School"
    }
  ];

  const alerts = [
    {
      id: 1,
      type: "location",
      member: "Emma",
      message: "Arrived at school safely",
      time: "8:45 AM",
      severity: "info"
    },
    {
      id: 2,
      type: "battery", 
      member: "Dad",
      message: "Device battery below 50%",
      time: "10:30 AM",
      severity: "warning"
    },
    {
      id: 3,
      type: "health",
      member: "Mom",
      message: "Morning medication reminder sent",
      time: "9:00 AM", 
      severity: "info"
    }
  ];

  const events = [
    {
      time: "10:45 AM",
      event: "Location update",
      member: "Emma",
      details: "Still at Lincoln High School"
    },
    {
      time: "10:30 AM", 
      event: "Battery alert",
      member: "Dad",
      details: "Device battery at 45%"
    },
    {
      time: "9:15 AM",
      event: "Geofence entry",
      member: "Dad", 
      details: "Entered Downtown Office zone"
    },
    {
      time: "8:45 AM",
      event: "Safe arrival",
      member: "Emma",
      details: "Arrived at school on time"
    }
  ];

  const currentMember = familyMembers.find(m => m.id === selectedMember);

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Top Status Bar */}
      <div className="bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 border-2 border-success shadow-medium">
                  <AvatarImage src={currentMember?.avatar} alt={currentMember?.name} />
                  <AvatarFallback>{currentMember?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-bold text-foreground">{currentMember?.name}</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Last seen {currentMember?.lastSeen}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Battery className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium">{currentMember?.battery}%</span>
                </div>
                
                <Badge variant={currentMember?.status === 'safe' ? 'default' : 'secondary'} className="bg-success text-success-foreground">
                  <Shield className="w-3 h-3 mr-1" />
                  {currentMember?.status === 'safe' ? 'Safe' : 'Active'}
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {familyMembers.map((member) => (
                <button
                  key={member.id}
                  onClick={() => setSelectedMember(member.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-smooth ${
                    selectedMember === member.id 
                      ? 'bg-primary text-primary-foreground shadow-medium' 
                      : 'hover:bg-accent'
                  }`}
                >
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-xs">{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{member.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Map & Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Card */}
            <Card className="p-6 border-0 shadow-large">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">Live Location</h3>
                <Badge variant="outline" className="border-success/20 text-success">
                  <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
                  Live
                </Badge>
              </div>
              
              {/* Map Placeholder */}
              <div className="h-80 bg-muted rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="w-12 h-12 text-primary mx-auto" />
                    <div>
                      <p className="font-semibold text-foreground">{currentMember?.location}</p>
                      <p className="text-sm text-muted-foreground">Real-time tracking active</p>
                    </div>
                  </div>
                </div>
                
                {/* Mock location pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-large animate-pulse"></div>
                </div>
              </div>
            </Card>
            
            {/* Events Timeline */}
            <Card className="p-6 border-0 shadow-large">
              <h3 className="text-xl font-bold text-foreground mb-6">Recent Events</h3>
              
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/50 transition-smooth">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-foreground">{event.event}</span>
                        <span className="text-sm text-muted-foreground">{event.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.member}: {event.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Right Column - Alerts & Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 border-0 shadow-large">
              <h3 className="text-xl font-bold text-foreground mb-6">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="card" className="h-16 flex-col gap-2">
                  <Navigation className="w-5 h-5" />
                  <span className="text-xs">Locate</span>
                </Button>
                
                <Button variant="success" className="h-16 flex-col gap-2">
                  <Phone className="w-5 h-5" />
                  <span className="text-xs">Call</span>
                </Button>
                
                <Button variant="outline" className="h-16 flex-col gap-2">
                  <Eye className="w-5 h-5" />
                  <span className="text-xs">Live Monitor</span>
                </Button>
                
                <Button variant="outline" className="h-16 flex-col gap-2">
                  <Mic className="w-5 h-5" />
                  <span className="text-xs">Voice Note</span>
                </Button>
              </div>
            </Card>
            
            {/* Active Alerts */}
            <Card className="p-6 border-0 shadow-large">
              <h3 className="text-xl font-bold text-foreground mb-6">Recent Alerts</h3>
              
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg border border-border">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      alert.severity === 'warning' ? 'bg-warning/20' : 'bg-success/20'
                    }`}>
                      {alert.severity === 'warning' ? (
                        <AlertTriangle className="w-4 h-4 text-warning" />
                      ) : (
                        <Shield className="w-4 h-4 text-success" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-foreground text-sm">{alert.member}</span>
                        <span className="text-xs text-muted-foreground">{alert.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Device Health */}
            <Card className="p-6 border-0 shadow-large">
              <h3 className="text-xl font-bold text-foreground mb-6">Device Health</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-success" />
                    <span className="font-medium">Health Monitoring</span>
                  </div>
                  <Badge variant="default" className="bg-success text-success-foreground">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <span className="font-medium">Activity Tracking</span>
                  </div>
                  <Badge variant="default" className="bg-primary text-primary-foreground">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="font-medium">Location Services</span>
                  </div>
                  <Badge variant="default" className="bg-secondary text-secondary-foreground">Active</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;