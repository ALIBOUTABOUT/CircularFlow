import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Mail, MapPin, Phone, Moon, Sun, Globe, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { useToast } from "@/hooks/use-toast";

export default function Profile() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [language, setLanguage] = useState("en");
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Company Profile</h1>
        <p className="text-muted-foreground">Manage your company information and settings</p>
      </div>

      <Tabs defaultValue="company" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="company">Company Info</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="company">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-border">
                <div className="p-4 rounded-xl bg-accent/10">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">ThermalTech GmbH</h3>
                  <p className="text-sm text-muted-foreground">Manufacturing • Hamburg, Germany</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="ThermalTech GmbH" />
                </div>
                <div>
                  <Label htmlFor="sector">Industry Sector</Label>
                  <Input id="sector" defaultValue="Manufacturing" />
                </div>
                <div>
                  <Label htmlFor="email">Contact Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="email" className="pl-10" defaultValue="contact@thermaltech.de" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="phone" className="pl-10" defaultValue="+49 40 1234 5678" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="address"
                      className="pl-10"
                      defaultValue="Industriestraße 123, 20095 Hamburg, Germany"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-accent hover:bg-accent/90">Save Changes</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Your Resources</h3>
              <Button className="bg-accent hover:bg-accent/90">Add Resource</Button>
            </div>

            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-l-accent">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Waste Heat</h4>
                    <p className="text-sm text-muted-foreground mb-2">500 kW continuous output</p>
                    <p className="text-xs text-muted-foreground">Listed: 2 months ago • 12 views</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm">Remove</Button>
                  </div>
                </div>
              </Card>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Account Settings</h3>
            <div className="space-y-6">
              <div>
                <Label htmlFor="language" className="flex items-center gap-2 mb-3">
                  <Globe className="h-4 w-4" />
                  Language
                </Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-full md:w-64">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="ar">العربية</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="flex items-center gap-2 mb-1">
                      {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                      Theme
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {theme === "dark" ? "Dark mode" : "Light mode"}
                    </p>
                  </div>
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Label htmlFor="notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground mb-3">
                  Receive updates about matches, messages, and platform news
                </p>
                <Button variant="outline">Configure Notifications</Button>
              </div>

              <div className="pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full md:w-auto"
                  onClick={() => {
                    toast({
                      title: "Logged out",
                      description: "You have been successfully logged out.",
                    });
                  }}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Log Out
                </Button>
              </div>

              <div className="pt-4 border-t border-border">
                <Label className="text-destructive">Danger Zone</Label>
                <p className="text-sm text-muted-foreground mb-3">
                  Irreversible actions that affect your account
                </p>
                <Button variant="outline" className="text-destructive hover:bg-destructive/10">
                  Deactivate Account
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
