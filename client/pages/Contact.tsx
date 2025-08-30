import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, Instagram, Linkedin, Phone, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="container py-12">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground mt-2">We'd love to hear about your project. Let's grow together.</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll get back to you shortly.");
            }}
            className="rounded-2xl border p-6 shadow-sm bg-white"
          >
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" name="email" placeholder="you@example.com" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <Input id="phone" name="phone" placeholder="(+91) 98765 43210" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" name="message" placeholder="Tell us about your business and goals" rows={5} required />
              </div>
              <div className="flex gap-3">
                <Button type="submit" className="rounded-full">Send Message</Button>
                <Button asChild variant="secondary" className="rounded-full">
                  <a href="https://wa.me/919410132905?text=Hi%20GrowSetu%2C%20I%20want%20to%20discuss%20my%20project." target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border bg-secondary">
              <iframe
                title="Dehradun Map"
                src="https://www.google.com/maps?q=Dehradun%2C%20Uttarakhand&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="font-semibold mb-4">Reach us directly</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> hello@growsetu.com</li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> <a className="hover:text-primary" href="tel:+919410132905">+91 9410132905</a></li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> Dehradun, Uttarakhand</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a aria-label="Instagram" href="https://www.instagram.com/growsetu?igsh=MW0xdDk4NTM4MTN4eg==" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
                <a aria-label="Twitter" href="https://x.com/GrowSetu98934?t=ZgucTiwoBgPq2eD8hw3VXA&s=08" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
                <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919410132905?text=Hi%20GrowSetu%2C%20I%20want%20to%20book%20a%20free%20consultation."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-white shadow-lg hover:bg-green-600"
      >
        <MessageCircle className="h-5 w-5" /> Chat
      </a>
    </Layout>
  );
}
