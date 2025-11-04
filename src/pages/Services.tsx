import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Truck, FlaskConical, Wrench, MapPin } from "lucide-react";

const services = [
  {
    id: 1,
    name: "EcoTransport Solutions",
    category: "Logistics",
    rating: 4.8,
    reviews: 127,
    location: "Hamburg, Germany",
    description: "Specialized in sustainable transportation of industrial materials and waste streams.",
    services: ["Transport", "Storage", "Route Optimization"],
    icon: Truck,
  },
  {
    id: 2,
    name: "MaterialTest Labs",
    category: "Testing",
    rating: 4.9,
    reviews: 89,
    location: "Munich, Germany",
    description: "Comprehensive testing and certification services for recycled and reclaimed materials.",
    services: ["Material Testing", "Certification", "Quality Analysis"],
    icon: FlaskConical,
  },
  {
    id: 3,
    name: "IndustrialEquip Rental",
    category: "Equipment",
    rating: 4.7,
    reviews: 156,
    location: "Berlin, Germany",
    description: "Wide range of processing and handling equipment for circular economy operations.",
    services: ["Equipment Rental", "Installation", "Maintenance"],
    icon: Wrench,
  },
  {
    id: 4,
    name: "GreenLogistics Pro",
    category: "Logistics",
    rating: 4.6,
    reviews: 94,
    location: "Frankfurt, Germany",
    description: "Carbon-neutral logistics solutions for industrial resource exchange.",
    services: ["CO₂ Neutral Transport", "Tracking", "Documentation"],
    icon: Truck,
  },
];

export default function Services() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Services Marketplace</h1>
        <p className="text-muted-foreground">
          Find logistics, testing, and equipment providers for your circular economy needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="p-6 hover:shadow-hover transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
                    <Badge variant="outline" className="mt-1">
                      {service.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-medium text-foreground">{service.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({service.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{service.location}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.services.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-accent hover:bg-accent/90">
                    Contact Provider
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
