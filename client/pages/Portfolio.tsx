import { Layout } from "@/components/site/Layout";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Portfolio() {
  return (
    <Layout>
      <section className="container py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Our Work</h1>
          <p className="mt-2 text-muted-foreground">A snapshot of projects and happy clients.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border bg-white">
              <img src="/placeholder.svg" alt="Project placeholder" className="h-48 w-full object-cover" />
              <div className="p-4">
                <p className="font-semibold">Project {i + 1}</p>
                <p className="text-sm text-muted-foreground">Modern website redesign</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-center">Trusted by local brands</h2>
          <div className="relative">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {Array.from({ length: 8 }).map((_, i) => (
                  <CarouselItem key={i} className="basis-1/2 sm:basis-1/4 lg:basis-1/6">
                    <div className="rounded-xl border bg-white p-6 flex items-center justify-center">
                      <img src="/placeholder.svg" alt="Client logo" className="h-10 w-auto opacity-70" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">Success story: 50% traffic growth for a local business in 3 months.</p>
        </div>
      </section>
    </Layout>
  );
}
