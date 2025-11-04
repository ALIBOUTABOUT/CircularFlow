import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  type: string;
  quantity: string;
  location: string;
  company: string;
  verified: boolean;
  co2Saved: string;
  icon: React.ReactNode;
  available?: boolean;
}

export default function ResourceCard({
  type,
  quantity,
  location,
  company,
  verified,
  co2Saved,
  icon,
  available = true,
}: ResourceCardProps) {
  return (
    <Card className="p-6 hover:shadow-hover transition-all duration-300 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-accent/10 text-accent">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{type}</h3>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
        {verified && (
          <Badge variant="outline" className="gap-1">
            <CheckCircle className="h-3 w-3 text-success" />
            Verified
          </Badge>
        )}
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-foreground">Quantity:</span>
          <span className="text-muted-foreground">{quantity}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp className="h-4 w-4 text-success" />
          <span className="text-success font-medium">{co2Saved} CO₂ saved/month</span>
        </div>
      </div>
      
      <Button className="w-full" variant={available ? "default" : "secondary"}>
        {available ? "View Details" : "Request Info"}
      </Button>
    </Card>
  );
}
