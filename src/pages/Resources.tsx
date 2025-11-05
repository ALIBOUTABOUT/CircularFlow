import { useState } from "react";
import ResourceCard from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flame, Trash2, TreePine, Droplet, Search, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const resources = [
  {
    type: "Waste Heat",
    quantity: "500 kW continuous",
    location: "Algiers, Algeria",
    company: "ThermalTech Algeria",
    verified: true,
    co2Saved: "2.3t",
    icon: <Flame className="h-6 w-6" />,
  },
  {
    type: "Glass Scraps",
    quantity: "12 tons/month",
    location: "Oran, Algeria",
    company: "GlassWorks Industries",
    verified: true,
    co2Saved: "1.8t",
    icon: <Trash2 className="h-6 w-6" />,
  },
  {
    type: "Wood Residues",
    quantity: "25 tons/week",
    location: "Constantine, Algeria",
    company: "Forest Products Co.",
    verified: false,
    co2Saved: "3.1t",
    icon: <TreePine className="h-6 w-6" />,
  },
  {
    type: "Used Oils",
    quantity: "800 liters/month",
    location: "Annaba, Algeria",
    company: "AutoService Plus",
    verified: true,
    co2Saved: "1.2t",
    icon: <Droplet className="h-6 w-6" />,
  },
];

export default function Resources() {
  const [showFilters, setShowFilters] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].resources;

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90">
          {t.addResource}
        </Button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <Card className={`lg:col-span-1 p-6 h-fit ${showFilters ? "block" : "hidden lg:block"}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">{t.filters}</h3>
            <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)} className="lg:hidden">
              {t.close}
            </Button>
          </div>
          
          <div className="space-y-6">
            <div>
              <Label className="mb-3 block">{t.resourceType}</Label>
              <div className="space-y-2">
                {[t.wasteHeat, t.glass, t.wood, t.oil, t.metal, t.plastic].map((type) => (
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
              <Label className="mb-3 block">{t.distance}</Label>
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
              <Label className="mb-3 block">{t.verification}</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="verified" />
                  <label htmlFor="verified" className="text-sm cursor-pointer">
                    {t.verifiedOnly}
                  </label>
                </div>
              </div>
            </div>

            <Button className="w-full" variant="outline">
              {t.resetFilters}
            </Button>
          </div>
        </Card>

        {/* Resources Grid */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t.searchPlaceholder}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="lg:hidden" onClick={() => setShowFilters(true)}>
              <Filter className="h-4 w-4 mr-2" />
              {t.filters}
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
