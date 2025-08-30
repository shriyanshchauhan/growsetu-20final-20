import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Monitor, Search, Share2, Star, PenTool } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Monitor className="h-5 w-5" />, title: "Website Development", desc: "Responsive, fast, and SEO-friendly websites." },
    { icon: <Search className="h-5 w-5" />, title: "SEO & Local SEO", desc: "Rank higher on Google and maps." },
    { icon: <Share2 className="h-5 w-5" />, title: "Social Media Handling", desc: "Content, scheduling, and growth strategies." },
    { icon: <Star className="h-5 w-5" />, title: "Google Reviews Growth", desc: "Improve ratings with ethical review strategies." },
    { icon: <PenTool className="h-5 w-5" />, title: "Logo & Branding", desc: "Memorable logos and brand systems." },
  ];
  return (
    <Layout>
      <section className="container py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
          <p className="mt-2 text-muted-foreground">Everything you need to build and grow your brand online.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border p-6 bg-white">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">{s.icon}</div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4"><Button variant="secondary" className="rounded-full">Learn More</Button></div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
