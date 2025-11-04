import { Package, Award, TrendingUp, Users } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-industrial.jpg";

export default function Home() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Industrial Circular Economy" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-80" />
        </div>
        
        <div className="relative px-8 py-20 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-4">
            Transform Industrial Waste into Value
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Connect with businesses to exchange surplus materials, reduce waste, 
            and build a sustainable circular economy together.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/resources">
              <Button size="lg" variant="secondary">
                Browse Resources
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Platform Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Active Resources"
            value="248"
            icon={Package}
            trend="+12% this month"
            trendUp
          />
          <StatCard
            title="Deals Matched"
            value="86"
            icon={Users}
            trend="+8% this month"
            trendUp
          />
          <StatCard
            title="CO₂ Saved"
            value="1,234t"
            icon={TrendingUp}
            trend="This month"
          />
          <StatCard
            title="Green Points"
            value="45,678"
            icon={Award}
            trend="Community total"
          />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="grid md:grid-cols-3 gap-6">
        <Link to="/map" className="group">
          <div className="p-6 rounded-xl bg-card border border-border hover:shadow-hover transition-all duration-300">
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
              Explore Heat Map
            </h3>
            <p className="text-sm text-muted-foreground">
              Discover nearby resources and potential partners on an interactive map
            </p>
          </div>
        </Link>
        
        <Link to="/matching" className="group">
          <div className="p-6 rounded-xl bg-card border border-border hover:shadow-hover transition-all duration-300">
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
              Smart Matching
            </h3>
            <p className="text-sm text-muted-foreground">
              AI-powered suggestions to find your perfect resource partner
            </p>
          </div>
        </Link>
        
        <Link to="/ideas" className="group">
          <div className="p-6 rounded-xl bg-card border border-border hover:shadow-hover transition-all duration-300">
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
              Ideas Lab
            </h3>
            <p className="text-sm text-muted-foreground">
              Collaborate on innovative circular economy projects
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
