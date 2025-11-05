import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = ["Company Info", "Location", "Resources", "Verification"];

// Validation schemas for each step
const companyInfoSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  sector: z.string().min(2, "Industry sector is required"),
  email: z.string().email("Please enter a valid email address"),
});

const locationSchema = z.object({
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  postal: z.string().min(4, "Postal code is required"),
});

const resourcesSchema = z.object({
  resources: z.array(z.string()).min(1, "Please select at least one resource type"),
});

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedResources, setSelectedResources] = useState<string[]>([]);
  const { toast } = useToast();

  // Form for step 0 - Company Info
  const companyForm = useForm({
    resolver: zodResolver(companyInfoSchema),
    mode: "onChange",
    defaultValues: {
      companyName: "",
      sector: "",
      email: "",
    },
  });

  // Form for step 1 - Location
  const locationForm = useForm({
    resolver: zodResolver(locationSchema),
    mode: "onChange",
    defaultValues: {
      address: "",
      city: "",
      postal: "",
    },
  });

  const handleNext = async () => {
    // Validate current step before proceeding
    if (currentStep === 0) {
      const isValid = await companyForm.trigger();
      if (!isValid) {
        toast({
          variant: "destructive",
          title: "Missing Information",
          description: "Please fill in all required fields correctly.",
        });
        return;
      }
    } else if (currentStep === 1) {
      const isValid = await locationForm.trigger();
      if (!isValid) {
        toast({
          variant: "destructive",
          title: "Missing Information",
          description: "Please fill in all location details.",
        });
        return;
      }
    } else if (currentStep === 2) {
      if (selectedResources.length === 0) {
        toast({
          variant: "destructive",
          title: "No Resources Selected",
          description: "Please select at least one resource type.",
        });
        return;
      }
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
      toast({
        title: "Success!",
        description: "Your company profile has been created.",
      });
    }
  };

  const handleResourceToggle = (resource: string) => {
    setSelectedResources((prev) =>
      prev.includes(resource)
        ? prev.filter((r) => r !== resource)
        : [...prev, resource]
    );
  };

  if (completed) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20 animate-fade-in">
        <div className="mb-6">
          <div className="mx-auto w-20 h-20 rounded-full bg-success/10 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-success" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Welcome to CircularFlow!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your company profile is now active. Start exploring resources and connecting with partners.
        </p>
        <Button size="lg" onClick={() => window.location.href = "/resources"}>
          Browse Resources
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Company Onboarding</h1>
        <p className="text-muted-foreground">Let's set up your circular economy profile</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  index <= currentStep
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {index + 1}
              </div>
              <span className="text-xs mt-2 text-muted-foreground">{step}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-16 mx-2 rounded transition-all ${
                  index < currentStep ? "bg-accent" : "bg-secondary"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <Card className="p-8">
        {currentStep === 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Company Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="company-name">
                  Company Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="company-name"
                  placeholder="Enter company name"
                  {...companyForm.register("companyName")}
                />
                {companyForm.formState.errors.companyName && (
                  <p className="text-sm text-destructive mt-1">
                    {companyForm.formState.errors.companyName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="sector">
                  Industry Sector <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="sector"
                  placeholder="e.g., Manufacturing, Energy, Construction"
                  {...companyForm.register("sector")}
                />
                {companyForm.formState.errors.sector && (
                  <p className="text-sm text-destructive mt-1">
                    {companyForm.formState.errors.sector.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="contact">
                  Contact Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contact"
                  type="email"
                  placeholder="contact@company.com"
                  {...companyForm.register("email")}
                />
                {companyForm.formState.errors.email && (
                  <p className="text-sm text-destructive mt-1">
                    {companyForm.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Location Details</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="address">
                  Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="address"
                  placeholder="Street address"
                  {...locationForm.register("address")}
                />
                {locationForm.formState.errors.address && (
                  <p className="text-sm text-destructive mt-1">
                    {locationForm.formState.errors.address.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">
                    City <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="city"
                    placeholder="City"
                    {...locationForm.register("city")}
                  />
                  {locationForm.formState.errors.city && (
                    <p className="text-sm text-destructive mt-1">
                      {locationForm.formState.errors.city.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="postal">
                    Postal Code <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="postal"
                    placeholder="Postal code"
                    {...locationForm.register("postal")}
                  />
                  {locationForm.formState.errors.postal && (
                    <p className="text-sm text-destructive mt-1">
                      {locationForm.formState.errors.postal.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="h-48 bg-secondary rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Map preview will appear here</p>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Resource Types</h2>
            <p className="text-sm text-muted-foreground">
              Select the types of resources your company can provide or needs{" "}
              <span className="text-destructive">*</span>
            </p>
            <div className="space-y-3">
              {["Waste Heat", "Glass Scraps", "Wood Residues", "Used Oils", "Metal Waste", "Plastic Waste"].map(
                (resource) => (
                  <div key={resource} className="flex items-center space-x-2">
                    <Checkbox
                      id={resource}
                      checked={selectedResources.includes(resource)}
                      onCheckedChange={() => handleResourceToggle(resource)}
                    />
                    <label htmlFor={resource} className="text-sm font-medium cursor-pointer">
                      {resource}
                    </label>
                  </div>
                )
              )}
            </div>
            {selectedResources.length === 0 && currentStep === 2 && (
              <p className="text-sm text-muted-foreground italic">
                Please select at least one resource type to continue
              </p>
            )}
            {selectedResources.length > 0 && (
              <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                <p className="text-sm text-success">
                  ✓ {selectedResources.length} resource type{selectedResources.length > 1 ? "s" : ""} selected
                </p>
              </div>
            )}
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Upload Certificates</h2>
            <p className="text-sm text-muted-foreground">Upload relevant certifications and documentation</p>
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-accent transition-colors cursor-pointer">
              <p className="text-muted-foreground">
                Drag and drop files here or click to browse
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                PDF, JPG, PNG up to 10MB
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button 
            onClick={handleNext}
            className="bg-accent hover:bg-accent/90"
          >
            {currentStep === steps.length - 1 ? "Complete" : "Next"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
