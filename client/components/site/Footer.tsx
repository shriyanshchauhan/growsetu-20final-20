import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-secondary">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-extrabold text-xl">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">GS</span>
            <span>GrowSetu</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Helping local businesses build their digital presence with modern websites, SEO, social media and branding.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-primary" to="/">Home</Link></li>
            <li><Link className="hover:text-primary" to="/about">About</Link></li>
            <li><Link className="hover:text-primary" to="/services">Services</Link></li>
            <li><Link className="hover:text-primary" to="/portfolio">Portfolio</Link></li>
            <li><Link className="hover:text-primary" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <a className="hover:text-primary" href="mailto:hello@growsetu.com">hello@growsetu.com</a></li>
            <li>Dehradun, Uttarakhand</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a aria-label="Facebook" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="h-4 w-4" /></a>
            <a aria-label="Instagram" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
            <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} GrowSetu. All rights reserved.</p>
          <p>Made with care in Uttarakhand</p>
        </div>
      </div>
    </footer>
  );
}
