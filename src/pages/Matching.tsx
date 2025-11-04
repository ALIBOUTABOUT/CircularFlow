import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Factory, TrendingUp, MapPin, ArrowRight } from "lucide-react";

const matches = [
  {
    id: 1,
    provider: "ThermalTech GmbH",
    receiver: "GreenHeat Solutions",
    resource: "Waste Heat",
    compatibility: 95,
    distance: "3.2 km",
    co2Savings: "2.8t/month",
    tags: ["Nearby", "High Compatibility", "Verified"],
    description: "Excess heat from industrial process matches heating demand perfectly",
  },
  {
    id: 2,
    provider: "GlassWorks Industries",
    receiver: "BuildMat Recycling",
    intermediary: "TransitHub GmbH",
    resource: "Glass Scraps",
    compatibility: 88,
    distance: "12 km",
    co2Savings: "1.9t/month",
    tags: ["Triple Match", "Compatible", "Logistics Available"],
    description: "Glass scraps can be processed through intermediary for optimal reuse",
  },
  {
    id: 3,
    provider: "Forest Products Co.",
    receiver: "BioPower Energy",
    resource: "Wood Residues",
    compatibility: 92,
    distance: "8.5 km",
    co2Savings: "3.4t/month",
    tags: ["High Volume", "Regular Supply", "Verified"],
    description: "Consistent wood residue supply for biomass energy production",
  },
];

export default function Matching() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Smart Matching</h1>
        <p className="text-muted-foreground">
          AI-powered recommendations to connect your resources with the right partners
        </p>
      </div>

      <div className="grid gap-6">
        {matches.map((match) => (
          <Card key={match.id} className="p-6 hover:shadow-hover transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    {match.compatibility}% Match
                  </Badge>
                  {match.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {match.resource} Exchange
                </h3>
                <p className="text-sm text-muted-foreground">{match.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Factory className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{match.provider}</p>
                  <p className="text-xs text-muted-foreground">Provider</p>
                </div>
              </div>

              <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />

              {match.intermediary && (
                <>
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Factory className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{match.intermediary}</p>
                      <p className="text-xs text-muted-foreground">Intermediary</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </>
              )}

              <div className="flex items-center gap-3 flex-1">
                <div className="p-3 rounded-lg bg-success/10">
                  <Factory className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{match.receiver}</p>
                  <p className="text-xs text-muted-foreground">Receiver</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{match.distance} distance</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="text-success font-medium">{match.co2Savings} CO₂ saved</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 bg-accent hover:bg-accent/90">
                Propose Match
              </Button>
              <Button variant="outline" className="flex-1">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
