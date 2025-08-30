import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <Layout>
      <section className="container py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold">About GrowSetu</h1>
          <p className="mt-4 text-muted-foreground">
            We help small businesses in Uttarakhand and beyond grow online.
          </p>
        </div>

        <div className="mx-auto mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="font-semibold text-xl">Our Mission</h3>
            <p className="mt-2 text-muted-foreground">
              Empower local businesses with modern digital solutions that are
              accessible, effective, and growth-driven.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="font-semibold text-xl">Our Vision</h3>
            <p className="mt-2 text-muted-foreground">
              Be the trusted digital partner for small businesses across India,
              delivering measurable results and lasting brands.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <Button className="rounded-full" asChild>
            <a href="/contact">Let’s Grow Together</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
