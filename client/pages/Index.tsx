import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Layout } from "@/components/site/Layout";
import { Link } from "react-router-dom";
import { Monitor, Search, Share2, Star, PenTool, Quote } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="container grid gap-8 py-20 md:grid-cols-2 md:items-center">
          <div className="space-y-6 animate-slideUp">
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/70">
              Digital Marketing Agency
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Grow Your Business Online with{" "}
              <span className="text-primary">GrowSetu</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose">
              Helping local businesses build their digital presence with
              websites, SEO, social media, and branding.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full"
              >
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="relative md:justify-self-end animate-fadeIn">
            <div className="aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-2xl border bg-secondary shadow-lg">
              <div className="h-full w-full grid grid-cols-2 gap-2 p-4">
                <div className="rounded-xl bg-white shadow-sm" />
                <div className="rounded-xl bg-white shadow-sm" />
                <div className="rounded-xl bg-white shadow-sm" />
                <div className="rounded-xl bg-white shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold">Services that drive results</h2>
          <p className="mt-2 text-muted-foreground">
            Everything you need to build and grow your brand online.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Monitor className="h-6 w-6 text-primary" />,
              title: "Website Development",
              desc: "Fast, responsive websites tailored to your business goals.",
            },
            {
              icon: <Search className="h-6 w-6 text-primary" />,
              title: "SEO & Local SEO",
              desc: "Get found on Google and drive organic traffic.",
            },
            {
              icon: <Share2 className="h-6 w-6 text-primary" />,
              title: "Social Media Management",
              desc: "Engage your audience and grow your online presence.",
            },
            {
              icon: <Star className="h-6 w-6 text-primary" />,
              title: "Google Reviews",
              desc: "Boost credibility with authentic customer reviews.",
            },
            {
              icon: <PenTool className="h-6 w-6 text-primary" />,
              title: "Logo & Branding",
              desc: "Build a memorable brand identity for your business.",
            },
          ].map((s) => (
            <Card
              key={s.title}
              className="group hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  {s.icon}
                </div>
                <CardTitle className="mt-4">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {s.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold">What our clients say</h2>
          <p className="mt-2 text-muted-foreground">
            Real stories from growing local businesses.
          </p>
        </div>
        <div className="relative">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {[
                {
                  quote:
                    "GrowSetu revamped our website and local SEO. We saw 50% traffic growth in 3 months!",
                  name: "Ankit Sharma",
                  role: "Owner, Cafe Hillside",
                },
                {
                  quote:
                    "Professional team with quick turnaround. Our Instagram engagement doubled.",
                  name: "Neha Verma",
                  role: "Founder, Bloom Boutique",
                },
                {
                  quote:
                    "They handled everything end-to-end. Highly recommend for small businesses.",
                  name: "Rahul Joshi",
                  role: "Director, Dehradun Fitness",
                },
              ].map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col justify-between gap-6 p-6">
                      <Quote className="h-8 w-8 text-primary" />
                      <p className="text-lg">“{t.quote}”</p>
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <div className="rounded-2xl border bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to grow?</h3>
            <p className="text-primary-foreground/90">
              Let’s build your digital presence today.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full"
            >
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
