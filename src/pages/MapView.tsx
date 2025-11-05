import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, Trash2, TreePine, Droplet, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const clusters = [
  { id: 1, type: "heat", x: "30%", y: "40%", count: 12, color: "bg-red-500" },
  { id: 2, type: "glass", x: "60%", y: "30%", count: 8, color: "bg-blue-500" },
  { id: 3, type: "wood", x: "45%", y: "60%", count: 15, color: "bg-green-500" },
  { id: 4, type: "oil", x: "75%", y: "50%", count: 6, color: "bg-yellow-500" },
];

const companies = {
  heat: [
    { name: "ThermalTech Algeria", location: "Algiers", resources: "500 kW continuous" },
    { name: "IndustrialHeat Co.", location: "Algiers", resources: "300 kW peak" },
  ],
  glass: [
    { name: "GlassWorks Industries", location: "Oran", resources: "12 tons/month" },
    { name: "Crystal Processing", location: "Oran", resources: "8 tons/month" },
  ],
  wood: [
    { name: "Forest Products Co.", location: "Constantine", resources: "25 tons/week" },
    { name: "TimberWorks Algeria", location: "Constantine", resources: "18 tons/week" },
  ],
  oil: [
    { name: "AutoService Plus", location: "Annaba", resources: "800 liters/month" },
    { name: "Industrial Oils Ltd", location: "Annaba", resources: "600 liters/month" },
  ],
};

const typeIcons = {
  heat: <Flame className="h-5 w-5" />,
  glass: <Trash2 className="h-5 w-5" />,
  wood: <TreePine className="h-5 w-5" />,
  oil: <Droplet className="h-5 w-5" />,
};

const typeLabels = {
  heat: "Waste Heat",
  glass: "Glass Scraps",
  wood: "Wood Residues",
  oil: "Used Oils",
};

export default function MapView() {
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = translations[language].map;

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">{t.title}</h1>
        <p className="text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map View */}
        <div className="lg:col-span-2">
          <Card className="relative h-[600px] overflow-hidden">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--border)) 0px, transparent 1px, transparent 40px),
                                   repeating-linear-gradient(90deg, hsl(var(--border)) 0px, transparent 1px, transparent 40px)`
                }}
              />
            </div>

            {/* Resource Clusters */}
            {clusters.map((cluster) => (
              <button
                key={cluster.id}
                onClick={() => setSelectedCluster(cluster.type)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ left: cluster.x, top: cluster.y }}
              >
                <div className={`relative ${cluster.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity`}
                  style={{ width: `${cluster.count * 8}px`, height: `${cluster.count * 8}px` }}
                />
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${cluster.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                  {cluster.count}
                </div>
              </button>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Resource Types</h4>
              <div className="space-y-2">
                {Object.entries(typeLabels).map(([key, label]) => (
                  <div key={key} className="flex items-center gap-2 text-sm">
                    <div className={`w-3 h-3 rounded-full ${clusters.find(c => c.type === key)?.color}`} />
                    <span className="text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="lg:col-span-1">
          <Card className="p-6 h-[600px] overflow-auto">
            {selectedCluster ? (
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      {typeIcons[selectedCluster as keyof typeof typeIcons]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {typeLabels[selectedCluster as keyof typeof typeLabels]}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {companies[selectedCluster as keyof typeof companies].length} companies
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCluster(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  {companies[selectedCluster as keyof typeof companies].map((company, index) => (
                    <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-medium text-foreground mb-1">{company.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{company.location}</p>
                      <Badge variant="outline" className="text-xs">
                        {company.resources}
                      </Badge>
                      <Button className="w-full mt-3" size="sm">
                        {t.viewDetails}
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <p className="text-muted-foreground mb-2">
                    {t.clickCluster}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t.clustersInfo}
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
