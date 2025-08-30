import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  highlight: string;
  color?: string;
  website: string[];
  localSeo: string[];
  social: string[];
};

export function Pricing({
  onSelect,
}: {
  onSelect?: (planName: string) => void;
}) {
  const plans: Plan[] = [
    {
      name: "Starter Plan",
      price: "₹15,000/month (+GST)",
      highlight: "Beginner Friendly",
      website: [
        "5 Pages",
        "Hosting+Domain+SSL",
        "Contact Form",
        "Basic SEO",
        "Unique Content",
        "Testimonials",
        "Support",
      ],
      localSeo: [
        "Setup",
        "Competitor Research",
        "5 Citations",
        "2 Classifieds",
        "Reviews",
        "Tracking & Reporting",
      ],
      social: [
        "Instagram+Facebook",
        "8 Posts",
        "4 Reels",
        "Captions",
        "2 Ads Campaigns (client budget)",
      ],
    },
    {
      name: "Growth Plan",
      price: "₹25,000/month (+GST)",
      highlight: "Most Popular",
      color: "bg-primary text-primary-foreground",
      website: [
        "7 Pages",
        "Hosting+Domain+SSL",
        "Payment Gateway",
        "Chatbot",
        "Advanced SEO",
        "Support",
      ],
      localSeo: [
        "Setup",
        "GMB Optimization",
        "10 Citations",
        "5 Classifieds",
        "Map Integration",
        "Reporting",
      ],
      social: [
        "Instagram+Facebook+Twitter",
        "15 Posts",
        "8 Reels",
        "Captions",
        "3 Ads Campaigns (client budget)",
      ],
    },
    {
      name: "Premium Plan",
      price: "₹40,000/month (+GST)",
      highlight: "Best Value",
      website: [
        "15 Pages + Ecommerce",
        "50 Products",
        "Advanced Payment Gateway",
        "Chatbot",
        "3 Forms",
        "Security",
        "Support",
      ],
      localSeo: [
        "Competitor Audit",
        "GMB Optimization",
        "15 Citations",
        "10 Classifieds",
        "20 Backlinks",
        "Guest Posting",
        "Video SEO",
        "Reporting",
      ],
      social: [
        "Instagram+Facebook+Twitter+LinkedIn",
        "30 Posts",
        "16 Reels",
        "Captions",
        "4 Ads Campaigns (client budget)",
      ],
    },
  ];

  const Group = ({ title, items }: { title: string; items: string[] }) => (
    <div className="mt-4">
      <p className="font-medium">{title}</p>
      <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <Check className="h-4 w-4 text-primary mt-0.5" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="container py-12">
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p, idx) => (
          <Card
            key={p.name}
            className={cn(
              "relative flex h-full flex-col rounded-2xl border bg-white shadow-sm animate-fadeIn",
              idx === 1 && "ring-2 ring-primary",
            )}
          >
            <CardHeader>
              <div className="mb-2 inline-flex items-center gap-2">
                <span
                  className={cn(
                    "rounded-full px-2 py-1 text-xs",
                    p.color ?? "bg-secondary text-foreground/70",
                  )}
                >
                  {p.highlight}
                </span>
              </div>
              <CardTitle className="text-xl">{p.name}</CardTitle>
              <p className="text-2xl font-bold text-primary">{p.price}</p>
            </CardHeader>
            <CardContent>
              <Group title="Website" items={p.website} />
              <Group title="Local SEO" items={p.localSeo} />
              <Group title="Social Media" items={p.social} />
            </CardContent>
            <CardFooter className="mt-auto">
              <Button
                className="w-full rounded-full"
                onClick={() => onSelect?.(p.name)}
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
