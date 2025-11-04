import { useState } from "react";
import ResourceCard from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flame, Trash2, TreePine, Droplet, Search, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const resources = [
  {
    type: "Waste Heat",
    quantity: "500 kW continuous",
    location: "Hamburg, Germany",
    company: "ThermalTech GmbH",
    verified: true,
    co2Saved: "2.3t",
    icon: <Flame className="h-6 w-6" />,
  },
  {
    type: "Glass Scraps",
    quantity: "12 tons/month",
    location: "Munich, Germany",
    company: "GlassWorks Industries",
    verified: true,
    co2Saved: "1.8t",
    icon: <Trash2 className="h-6 w-6" />,
  },
  {
    type: "Wood Residues",
    quantity: "25 tons/week",
    location: "Berlin, Germany",
    company: "Forest Products Co.",
    verified: false,
    co2Saved: "3.1t",
    icon: <TreePine className="h-6 w-6" />,
  },
  {
    type: "Used Oils",
    quantity: "800 liters/month",
    location: "Frankfurt, Germany",
    company: "AutoService Plus",
    verified: true,
    co2Saved: "1.2t",
    icon: <Droplet className="h-6 w-6" />,
  },
];

export default function Resources() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Resource Hub</h1>
          <p className="text-muted-foreground">Discover available industrial resources</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90">
          Add Resource
        </Button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <Card className={`lg:col-span-1 p-6 h-fit ${showFilters ? "block" : "hidden lg:block"}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Filters</h3>
            <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)} className="lg:hidden">
              Close
            </Button>
          </div>
          
          <div className="space-y-6">
            <div>
              <Label className="mb-3 block">Resource Type</Label>
              <div className="space-y-2">
                {["Waste Heat", "Glass", "Wood", "Oil", "Metal", "Plastic"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={type} />
                    <label htmlFor={type} className="text-sm cursor-pointer">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Distance</Label>
              <div className="space-y-2">
                {["< 10 km", "< 50 km", "< 100 km", "Any"].map((distance) => (
                  <div key={distance} className="flex items-center space-x-2">
                    <Checkbox id={distance} />
                    <label htmlFor={distance} className="text-sm cursor-pointer">
                      {distance}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Verification</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="verified" />
                  <label htmlFor="verified" className="text-sm cursor-pointer">
                    Verified Only
                  </label>
                </div>
              </div>
            </div>

            <Button className="w-full" variant="outline">
              Reset Filters
            </Button>
          </div>
        </Card>

        {/* Resources Grid */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="lg:hidden" onClick={() => setShowFilters(true)}>
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
