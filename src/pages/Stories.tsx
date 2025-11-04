import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, MapPin, Calendar } from "lucide-react";
import successImage from "@/assets/success-story.jpg";

const stories = [
  {
    id: 1,
    title: "Hamburg Heat Exchange Network Success",
    company: "ThermalTech GmbH & Partners",
    date: "March 2024",
    location: "Hamburg, Germany",
    image: successImage,
    description: "Successfully established a regional heat exchange network connecting 6 industrial facilities, transforming waste heat into a valuable community resource.",
    impact: {
      co2: "156 tons",
      distance: "23 km",
      materials: "500 kW continuous",
    },
    tags: ["Waste Heat", "Regional", "Infrastructure"],
  },
  {
    id: 2,
    title: "Glass Recycling Innovation Partnership",
    company: "GlassWorks & BuildMat Recycling",
    date: "February 2024",
    location: "Munich, Germany",
    image: successImage,
    description: "Pioneering collaboration converts glass manufacturing waste into premium building insulation material, closing the loop in construction materials.",
    impact: {
      co2: "89 tons",
      distance: "12 km",
      materials: "12 tons/month",
    },
    tags: ["Glass", "Innovation", "Construction"],
  },
  {
    id: 3,
    title: "Wood-to-Biomass Energy Chain",
    company: "Forest Products & BioPower Energy",
    date: "January 2024",
    location: "Berlin, Germany",
    image: successImage,
    description: "Transformed wood processing residues into reliable biomass fuel supply, powering local community heating systems sustainably.",
    impact: {
      co2: "203 tons",
      distance: "8.5 km",
      materials: "25 tons/week",
    },
    tags: ["Wood", "Energy", "Biomass"],
  },
];

export default function Stories() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Success Stories</h1>
        <p className="text-muted-foreground">
          Real impact from circular economy partnerships
        </p>
      </div>

      <div className="grid gap-8">
        {stories.map((story) => (
          <Card key={story.id} className="overflow-hidden hover:shadow-hover transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {story.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {story.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {story.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {story.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {story.description}
                  </p>

                  <p className="text-sm font-medium text-foreground mb-2">
                    {story.company}
                  </p>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <span className="text-xs text-muted-foreground">CO₂ Saved</span>
                    </div>
                    <p className="text-lg font-bold text-foreground">{story.impact.co2}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-xs text-muted-foreground">Distance</span>
                    </div>
                    <p className="text-lg font-bold text-foreground">{story.impact.distance}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Materials</p>
                    <p className="text-lg font-bold text-foreground truncate">
                      {story.impact.materials}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
