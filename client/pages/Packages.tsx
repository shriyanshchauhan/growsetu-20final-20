import { Layout } from "@/components/site/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Check } from "lucide-react";
import { Pricing } from "@/components/sections/Pricing";

const tiers = [
  { name: "Basic", price: "₹4,999", features: ["Up to 3 pages", "Mobile responsive", "Basic SEO", "Contact form"] },
  { name: "Standard", price: "₹9,999", features: ["Up to 6 pages", "Speed optimized", "On-page SEO", "Blog setup", "Analytics"] },
  { name: "Premium", price: "₹14,999", features: ["Unlimited pages", "Advanced SEO", "Custom components", "Integrations", "Priority support"] },
];

const categories: { key: string; label: string; prefix: string }[] = [
  { key: "website", label: "Website Development", prefix: "Website" },
  { key: "seo", label: "SEO & Local SEO", prefix: "SEO" },
  { key: "social", label: "Social Media Management", prefix: "Social Media" },
  { key: "branding", label: "Branding & Logo Design", prefix: "Branding" },
];

export default function Packages() {
  const location = useLocation() as { state?: { transition?: string; category?: string } };
  const defaultTab = categories.find((c) => c.key === location.state?.category)?.key || "website";
  const transitionClass = location.state?.transition === "slide-left" ? "animate-slideLeft" : "animate-fadeIn";

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{ category: string; tier: string } | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onGet = (category: string, tier: string) => {
    setSelected({ category, tier });
    setSubmitted(false);
    setOpen(true);
  };

  return (
    <Layout>
      <section className={`container py-12 ${transitionClass}`}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Choose the Right Package for Your Growth</h1>
          <p className="mt-2 text-muted-foreground">Flexible plans designed for small businesses to scale online.</p>
        </div>

        <div className="mx-auto mt-8 max-w-5xl">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-secondary">
              {categories.map((c) => (
                <TabsTrigger key={c.key} value={c.key} className="rounded-full data-[state=active]:bg-white">
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((c) => (
              <TabsContent key={c.key} value={c.key} className="mt-6 animate-fadeIn">
                <div className="grid gap-6 md:grid-cols-3">
                  {tiers.map((t) => (
                    <Card key={`${c.key}-${t.name}`} className="flex flex-col rounded-2xl border shadow-sm bg-white">
                      <CardHeader>
                        <CardTitle className="text-xl">{`${c.prefix} ${t.name}`}</CardTitle>
                        <p className="text-3xl font-bold text-primary">{t.price}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {t.features.map((f) => (
                            <li key={f} className="list-disc ml-4">{f}</li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <Button className="w-full rounded-full" onClick={() => onGet(c.key, t.name)}>Get This Package</Button>
                      </CardFooter>
                    </Card>
                  ))}
                  {c.key === "branding" && (
                    <Card className="flex flex-col rounded-2xl border shadow-sm bg-white">
                      <CardHeader>
                        <span className="inline-flex w-fit rounded-full bg-secondary px-2 py-1 text-xs text-foreground/70">Best for Startups & Small Businesses</span>
                        <CardTitle className="text-xl">Logo Designing</CardTitle>
                        <p className="text-sm text-muted-foreground">Creative Branding for Your Business</p>
                        <p className="text-3xl font-bold text-primary">₹1500 <span className="text-sm font-normal text-foreground/70">(one-time)</span></p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {[
                            "3 Unique Logo Samples",
                            "2 Revisions",
                            "High-Quality PNG & JPG",
                            "Editable Source File (AI/PSD)",
                            "Social Media Ready Versions",
                            "Delivery in 3–4 Days",
                          ].map((f) => (
                            <li key={f} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <Button className="w-full rounded-full" onClick={() => onGet("branding", "Logo Designing")}>Get Your Logo</Button>
                      </CardFooter>
                    </Card>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-6">
          <Pricing onSelect={(plan) => onGet("pricing", plan)} />
        </div>

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent className="animate-slideUp">
            <DrawerHeader>
              <DrawerTitle>
                {submitted
                  ? "Thank you!"
                  : `Get Started — ${selected ? (selected.category === "pricing" ? selected.tier : `${categories.find((x) => x.key === selected.category)?.prefix} ${selected.tier}`) : "Package"}`}
              </DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-4">
              {submitted ? (
                <div className="rounded-lg border bg-secondary p-6 text-center">
                  <p className="text-lg font-semibold">Thanks for choosing GrowSetu!</p>
                  <p className="text-muted-foreground">Our team will reach out soon.</p>
                </div>
              ) : (
                <form
                  className="grid gap-4 md:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="name">Name</label>
                    <Input id="name" required placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="email">Email</label>
                    <Input id="email" type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium" htmlFor="phone">Phone</label>
                    <Input id="phone" required placeholder="(+91) 98765 43210" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Business Type</label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="startup">Startup</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" className="w-full rounded-full">Submit & Get Started</Button>
                  </div>
                </form>
              )}
            </div>
            <DrawerFooter />
          </DrawerContent>
        </Drawer>
      </section>
    </Layout>
  );
}
