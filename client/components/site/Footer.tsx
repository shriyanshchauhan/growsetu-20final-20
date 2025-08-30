import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-secondary">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-extrabold text-xl">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fe5a31c32c84c4d84bc3bed074d9eba31%2Fc76011f7c99a48028c568e20301938c0?format=webp&width=200" alt="GrowSetu logo" className="h-8 w-8 rounded-lg object-cover border" />
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
            <li>Phone: <a className="hover:text-primary" href="tel:+919410132905">+91 9410132905</a></li>
            <li>Dehradun, Uttarakhand</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a aria-label="Instagram" href="https://www.instagram.com/growsetu?igsh=MW0xdDk4NTM4MTN4eg==" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Twitter" href="https://x.com/GrowSetu98934?t=ZgucTiwoBgPq2eD8hw3VXA&s=08" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
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
