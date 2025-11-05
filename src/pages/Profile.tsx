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
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Profile() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  
  const [companyName, setCompanyName] = useState("ThermalTech Algeria");
  const [sector, setSector] = useState("Manufacturing");
  const [email, setEmail] = useState("contact@thermaltech.dz");
  const [phone, setPhone] = useState("+213 21 1234 5678");
  const [address, setAddress] = useState("Zone Industrielle, Rue de l Industrie 123, 16000 Algiers, Algeria");
  
  const [isEditing, setIsEditing] = useState(false);

  const t = translations[language].profile;

  const handleSaveChanges = () => {
    toast({
      title: t.companyInfo.save,
      description: "Your company information has been updated successfully.",
    });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setCompanyName("ThermalTech Algeria");
    setSector("Manufacturing");
    setEmail("contact@thermaltech.dz");
    setPhone("+213 21 1234 5678");
    setAddress("Zone Industrielle, Rue de l Industrie 123, 16000 Algiers, Algeria");
    setIsEditing(false);
    toast({
      title: t.companyInfo.cancel,
      description: "Your edits have been discarded.",
    });
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value as "en" | "fr" | "ar");
    const langName = value === "en" ? "English" : value === "fr" ? "Français" : "العربية";
    toast({
      title: "Language Changed",
      description: `Language switched to ${langName}`,
    });
  };

  const handleConfigureNotifications = () => {
    toast({
      title: "Notifications Settings",
      description: "Opening notification preferences...",
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleDeactivateAccount = () => {
    toast({
      variant: "destructive",
      title: "Account Deactivated",
      description: "Your account has been deactivated. Redirecting...",
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleAddResource = () => {
    toast({
      title: "Add Resource",
      description: "Opening resource creation form...",
    });
  };

  const handleEditResource = () => {
    toast({
      title: "Edit Resource",
      description: "Opening resource editor...",
    });
  };

  const handleRemoveResource = () => {
    toast({
      variant: "destructive",
      title: "Resource Removed",
      description: "The resource has been removed from your listings.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">{t.title}</h1>
        <p className="text-muted-foreground">{t.subtitle}</p>
      </div>

      <Tabs defaultValue="company" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="company">{t.tabs.company}</TabsTrigger>
          <TabsTrigger value="resources">{t.tabs.resources}</TabsTrigger>
          <TabsTrigger value="settings">{t.tabs.settings}</TabsTrigger>
        </TabsList>

        <TabsContent value="company">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-border">
                <div className="p-4 rounded-xl bg-accent/10">
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">ThermalTech Algeria</h3>
                  <p className="text-sm text-muted-foreground">Manufacturing  Algiers, Algeria</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company-name">{t.companyInfo.companyName}</Label>
                  <Input 
                    id="company-name" 
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                      setIsEditing(true);
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="sector">{t.companyInfo.sector}</Label>
                  <Input 
                    id="sector" 
                    value={sector}
                    onChange={(e) => {
                      setSector(e.target.value);
                      setIsEditing(true);
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t.companyInfo.email}</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="email" 
                      className="pl-10" 
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setIsEditing(true);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">{t.companyInfo.phone}</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="phone" 
                      className="pl-10" 
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setIsEditing(true);
                      }}
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">{t.companyInfo.address}</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="address"
                      className="pl-10"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        setIsEditing(true);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button 
                  variant="outline"
                  onClick={handleCancelEdit}
                  disabled={!isEditing}
                >
                  {t.companyInfo.cancel}
                </Button>
                <Button 
                  className="bg-accent hover:bg-accent/90"
                  onClick={handleSaveChanges}
                  disabled={!isEditing}
                >
                  {t.companyInfo.save}
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">{t.resources.title}</h3>
              <Button 
                className="bg-accent hover:bg-accent/90"
                onClick={handleAddResource}
              >
                {t.resources.addButton}
              </Button>
            </div>

            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-l-accent">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Waste Heat</h4>
                    <p className="text-sm text-muted-foreground mb-2">500 kW continuous output</p>
                    <p className="text-xs text-muted-foreground">
                      {t.resources.listed}: 2 {t.resources.months} {t.resources.ago}  12 {t.resources.views}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleEditResource}
                    >
                      {t.resources.edit}
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="sm">{t.resources.remove}</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>{t.resources.removeTitle}</AlertDialogTitle>
                          <AlertDialogDescription>
                            {t.resources.removeDesc}
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>{translations[language].common.cancel}</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={handleRemoveResource}
                            className="bg-destructive hover:bg-destructive/90"
                          >
                            {t.resources.remove}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </Card>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">{t.settings.title}</h3>
            <div className="space-y-6">
              <div>
                <Label htmlFor="language" className="flex items-center gap-2 mb-3">
                  <Globe className="h-4 w-4" />
                  {t.settings.language}
                </Label>
                <Select value={language} onValueChange={handleLanguageChange}>
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
                      {t.settings.theme}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {theme === "dark" ? t.settings.darkMode : t.settings.lightMode}
                    </p>
                  </div>
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <Label htmlFor="notifications">{t.settings.notifications}</Label>
                <p className="text-sm text-muted-foreground mb-3">
                  {t.settings.notificationsDesc}
                </p>
                <Button 
                  variant="outline"
                  onClick={handleConfigureNotifications}
                >
                  {t.settings.configureNotif}
                </Button>
              </div>

              <div className="pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full md:w-auto"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  {t.settings.logout}
                </Button>
              </div>

              <div className="pt-4 border-t border-border">
                <Label className="text-destructive">{t.settings.dangerZone}</Label>
                <p className="text-sm text-muted-foreground mb-3">
                  {t.settings.dangerDesc}
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="text-destructive hover:bg-destructive/10">
                      {t.settings.deactivate}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>{t.settings.deactivateTitle}</AlertDialogTitle>
                      <AlertDialogDescription>
                        {t.settings.deactivateDesc}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>{translations[language].common.cancel}</AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={handleDeactivateAccount}
                        className="bg-destructive hover:bg-destructive/90"
                      >
                        {t.settings.yesDeactivate}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
