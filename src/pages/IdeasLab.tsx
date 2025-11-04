import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, MessageCircle, Calendar, User } from "lucide-react";

const ideas = [
  {
    id: 1,
    title: "Regional Heat Network Integration",
    author: "Maria Schmidt",
    company: "ThermalTech GmbH",
    date: "2 days ago",
    description: "Proposal to create a coordinated heat exchange network connecting 5+ industrial facilities in the Hamburg area.",
    tags: ["Waste Heat", "Infrastructure", "Large Scale"],
    votes: 42,
    comments: 15,
  },
  {
    id: 2,
    title: "Glass-to-Insulation Material Pipeline",
    author: "Thomas Weber",
    company: "GlassWorks Industries",
    date: "5 days ago",
    description: "Transform glass manufacturing waste into high-quality building insulation material through partnership with construction firms.",
    tags: ["Glass", "Construction", "Innovation"],
    votes: 38,
    comments: 12,
  },
  {
    id: 3,
    title: "Mobile Wood Chipping Service",
    author: "Anna Hoffmann",
    company: "Forest Products Co.",
    date: "1 week ago",
    description: "On-site wood residue processing service to reduce transportation costs and create immediate biomass fuel.",
    tags: ["Wood", "Logistics", "Service"],
    votes: 31,
    comments: 8,
  },
  {
    id: 4,
    title: "Used Oil Collection Consortium",
    author: "Klaus Müller",
    company: "AutoService Plus",
    date: "1 week ago",
    description: "Collaborative collection and processing system for used industrial oils across multiple automotive service centers.",
    tags: ["Oil", "Collaboration", "Efficiency"],
    votes: 27,
    comments: 10,
  },
];

export default function IdeasLab() {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Circular Ideas Lab</h1>
          <p className="text-muted-foreground">
            Collaborate on innovative circular economy projects
          </p>
        </div>
        <Button className="bg-accent hover:bg-accent/90">
          Post New Idea
        </Button>
      </div>

      <div className="grid gap-6">
        {ideas.map((idea) => (
          <Card key={idea.id} className="p-6 hover:shadow-hover transition-all duration-300">
            <div className="flex gap-6">
              {/* Vote Section */}
              <div className="flex flex-col items-center gap-2 min-w-[60px]">
                <Button variant="ghost" size="sm" className="hover:bg-accent/10 hover:text-accent">
                  <ThumbsUp className="h-5 w-5" />
                </Button>
                <span className="text-lg font-semibold text-foreground">{idea.votes}</span>
                <span className="text-xs text-muted-foreground">votes</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-foreground mb-2 hover:text-accent cursor-pointer transition-colors">
                    {idea.title}
                  </h3>
                  <p className="text-muted-foreground">{idea.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {idea.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{idea.author}</span>
                      <span className="text-xs">• {idea.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{idea.date}</span>
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    {idea.comments} comments
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
