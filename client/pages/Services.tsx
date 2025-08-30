import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Monitor, Search, Share2, Star, PenTool } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();
  const services = [
    {
      key: "website",
      icon: <Monitor className="h-6 w-6" />,
      title: "Website Development",
      desc: "Responsive, fast, and SEO-friendly websites.",
    },
    {
      key: "seo",
      icon: <Search className="h-6 w-6" />,
      title: "SEO & Local SEO",
      desc: "Rank higher on Google and maps.",
    },
    {
      key: "social",
      icon: <Share2 className="h-6 w-6" />,
      title: "Social Media Management",
      desc: "Content, scheduling, and growth strategies.",
    },
    {
      key: "reviews",
      icon: <Star className="h-6 w-6" />,
      title: "Google Reviews Growth",
      desc: "Improve ratings with ethical review strategies.",
    },
    {
      key: "branding",
      icon: <PenTool className="h-6 w-6" />,
      title: "Logo & Branding",
      desc: "Memorable logos and brand systems.",
    },
  ];

  const goPackages = (key: string) =>
    navigate("/packages", {
      state: { transition: "slide-left", category: key },
    });

  return (
    <Layout>
      <section className="container py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
          <p className="mt-2 text-muted-foreground">
            Swipe through our services and pick a package that fits.
          </p>
        </div>

        <div className="relative mt-8">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {services.map((s) => (
                <CarouselItem
                  key={s.key}
                  className="basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="group h-full cursor-pointer rounded-2xl border bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                    onClick={() => goPackages(s.key)}
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {s.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {s.desc}
                    </p>
                    <div className="mt-4">
                      <Button
                        className="rounded-full"
                        variant="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          goPackages(s.key);
                        }}
                      >
                        View Packages
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3" />
            <CarouselNext className="-right-3" />
          </Carousel>
        </div>
      </section>
    </Layout>
  );
}
