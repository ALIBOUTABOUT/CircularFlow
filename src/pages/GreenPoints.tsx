import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, CheckCircle, Target } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const co2Data = [
  { month: "Jan", co2: 45 },
  { month: "Feb", co2: 52 },
  { month: "Mar", co2: 61 },
  { month: "Apr", co2: 58 },
  { month: "May", co2: 70 },
  { month: "Jun", co2: 78 },
];

const resourceData = [
  { type: "Heat", count: 12 },
  { type: "Glass", count: 8 },
  { type: "Wood", count: 15 },
  { type: "Oil", count: 6 },
];

const badges = [
  { name: "Early Adopter", icon: Award, description: "Joined in first month", earned: true },
  { name: "Green Pioneer", icon: TrendingUp, description: "Saved 50t CO₂", earned: true },
  { name: "Perfect Match", icon: CheckCircle, description: "10 successful deals", earned: true },
  { name: "Climate Hero", icon: Target, description: "Saved 100t CO₂", earned: false },
];

export default function GreenPoints() {
  return (
    <div className="animate-fade-in space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Green Points Dashboard</h1>
        <p className="text-muted-foreground">
          Track your environmental impact and community achievements
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-success/10">
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Total CO₂ Saved</p>
          </div>
          <p className="text-3xl font-bold text-foreground">78.4t</p>
          <p className="text-sm text-success mt-1">+12.3t this month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-accent/10">
              <Award className="h-5 w-5 text-accent" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Green Points</p>
          </div>
          <p className="text-3xl font-bold text-foreground">2,847</p>
          <p className="text-sm text-muted-foreground mt-1">Top 15% in region</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Completed Deals</p>
          </div>
          <p className="text-3xl font-bold text-foreground">24</p>
          <p className="text-sm text-muted-foreground mt-1">6 this month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-accent/10">
              <Target className="h-5 w-5 text-accent" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">Badges Earned</p>
          </div>
          <p className="text-3xl font-bold text-foreground">3/4</p>
          <p className="text-sm text-muted-foreground mt-1">1 remaining</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">CO₂ Saved Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={co2Data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="co2"
                stroke="hsl(var(--success))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--success))", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Resources Exchanged</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={resourceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="type" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="count" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Badges */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Achievement Badges</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className={`p-4 rounded-lg border transition-all ${
                badge.earned
                  ? "border-success bg-success/5"
                  : "border-border bg-muted/50 opacity-60"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`p-2 rounded-lg ${
                    badge.earned ? "bg-success/10" : "bg-muted"
                  }`}
                >
                  <badge.icon
                    className={`h-5 w-5 ${
                      badge.earned ? "text-success" : "text-muted-foreground"
                    }`}
                  />
                </div>
                {badge.earned && (
                  <Badge variant="outline" className="text-xs border-success text-success">
                    Earned
                  </Badge>
                )}
              </div>
              <h4 className="font-medium text-foreground mb-1">{badge.name}</h4>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
