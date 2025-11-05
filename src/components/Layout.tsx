import { Link, useLocation } from "react-router-dom";
import { Recycle, Map, Package, Award, Lightbulb, Wrench, TrendingUp, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { language } = useLanguage();
  const t = translations[language];

  const navigation = [
    { name: t.nav.home, href: "/", icon: Recycle },
    { name: t.nav.map, href: "/map", icon: Map },
    { name: t.nav.resources, href: "/resources", icon: Package },
    { name: t.nav.greenPoints, href: "/green-points", icon: Award },
    { name: t.nav.ideas, href: "/ideas", icon: Lightbulb },
    { name: t.nav.services, href: "/services", icon: Wrench },
    { name: t.nav.stories, href: "/stories", icon: TrendingUp },
    { name: t.nav.profile, href: "/profile", icon: User },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <nav className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Recycle className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-foreground">CircularFlow</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
