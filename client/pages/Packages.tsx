import { Layout } from "@/components/site/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const tiers = [
  { name: "Basic", price: "₹4,999", features: ["Up to 3 pages", "Mobile responsive", "Basic SEO", "Contact form"] },
  { name: "Standard", price: "₹9,999", features: ["Up to 6 pages", "Speed optimized", "On-page SEO", "Blog setup", "Analytics"] },
  { name: "Premium", price: "₹14,999", features: ["Unlimited pages", "Advanced SEO", "Custom components", "Integrations", "Priority support"] },
];

const categories: { key: string; label: string }[] = [
  { key: "website", label: "Website" },
  { key: "seo", label: "SEO" },
  { key: "social", label: "Social Media" },
  { key: "branding", label: "Branding" },
];

export default function Packages() {
  const location = useLocation() as { state?: { transition?: string; category?: string } };
  const defaultTab = categories.find((c) => c.key === location.state?.category)?.key || "website";
  const transitionClass = location.state?.transition === "slide-left" ? "animate-slideLeft" : "animate-fadeIn";

  return (
    <Layout>
      <section className={`container py-12 ${transitionClass}`}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Choose the Right Package for Your Growth</h1>
          <p className="mt-2 text-muted-foreground">Transparent pricing with everything you need to get results.</p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-secondary">
              {categories.map((c) => (
                <TabsTrigger key={c.key} value={c.key} className="rounded-full data-[state=active]:bg-white">
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((c) => (
              <TabsContent key={c.key} value={c.key} className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {tiers.map((t) => (
                    <Card key={t.name} className="flex flex-col rounded-2xl border shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-xl">{t.name}</CardTitle>
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
                        <Button className="w-full rounded-full">Get This Package</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
