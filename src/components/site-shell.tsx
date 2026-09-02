import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import logo from "@/assets/home-cinema-center-logo.webp.asset.json";
import { Button } from "@/components/ui/button";
import { areas, contact, navItems } from "@/lib/site-data";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link to="/" aria-label="Home Cinema Center home" className="shrink-0"><img src={logo.url} alt="Home Cinema Center" width="200" height="46" className="h-10 w-auto rounded-sm bg-foreground p-1.5" /></Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">{navItems.map((item) => <Link key={item.to} to={item.to} className="text-sm text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{item.label}</Link>)}</nav>
        <div className="hidden items-center gap-5 sm:flex"><a href={contact.phoneHref} className="text-sm font-semibold hover:text-primary">{contact.phone}</a><Button asChild variant="premium"><Link to="/contact">Get a Free Quote</Link></Button></div>
        <Button aria-label={open ? "Close menu" : "Open menu"} variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden">{navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block border-b border-border py-3 text-base">{item.label}</Link>)}<a href={contact.phoneHref} className="mt-4 block font-semibold text-primary">{contact.phone}</a></nav>}
    </header>
    <main>{children}</main>
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-4"><img src={logo.url} alt="Home Cinema Center" width="200" height="46" loading="lazy" className="h-10 w-auto rounded-sm bg-foreground p-1.5" /><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Custom home theater, audio, lighting and smart-home systems for Marin County homes and businesses.</p><a href={contact.phoneHref} className="mt-5 block font-semibold text-primary">{contact.phone}</a><a href={contact.emailHref} className="mt-2 block text-sm text-muted-foreground hover:text-foreground">{contact.email}</a></div>
        <div className="md:col-span-3"><h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">Explore</h3><div className="mt-5 grid gap-3 text-sm text-muted-foreground">{navItems.map((item) => <Link key={item.to} to={item.to} className="hover:text-primary">{item.label}</Link>)}<Link to="/residential-commercial" className="hover:text-primary">Residential & Commercial</Link></div></div>
        <div className="md:col-span-5"><h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">Service Areas</h3><div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">{areas.slice(0,8).map((area) => <span key={area}>{area}</span>)}</div><Link to="/service-areas" className="mt-6 inline-block text-sm font-semibold text-primary">View all service areas →</Link></div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-3 border-t border-border px-5 pt-7 text-xs text-muted-foreground sm:flex-row lg:px-8"><span>© 2026 Home Cinema Center. All rights reserved.</span><span>Serving Novato and Marin County, California</span></div>
    </footer>
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2"><Button asChild variant="premium" size="icon" className="size-12 rounded-full shadow-xl"><a href={contact.phoneHref} aria-label="Call Home Cinema Center"><Phone /></a></Button><Button asChild variant="premiumOutline" size="icon" className="size-12 rounded-full bg-background shadow-xl"><a href={contact.emailHref} aria-label="Message Home Cinema Center"><MessageCircle /></a></Button></div>
  </div>;
}

export function PageHero({ eyebrow, title, description, image }: { eyebrow: string; title: string; description: string; image?: string }) {
  return <section className="relative overflow-hidden border-b border-border py-24 md:py-32">{image && <img src={image} alt="" width="1200" height="800" className="absolute inset-0 h-full w-full object-cover opacity-25" />}<div className="absolute inset-0 bg-background/65" /><div className="relative mx-auto max-w-7xl px-5 lg:px-8"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p><h1 className="max-w-4xl text-5xl font-medium leading-[0.95] md:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p></div></section>;
}

export function FinalCta({ title = "Let’s design a system that feels effortless." }: { title?: string }) {
  return <section className="bg-primary py-20 text-primary-foreground"><div className="mx-auto max-w-5xl px-5 text-center"><h2 className="text-4xl font-medium md:text-6xl">{title}</h2><p className="mx-auto mt-5 max-w-xl text-base opacity-75">Tell our Novato team about your space, your priorities and how you want technology to fit your life.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild variant="dark" size="xl"><Link to="/contact">Get a Free Quote</Link></Button><Button asChild variant="premiumOutline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground"><a href={contact.phoneHref}>{contact.phone}</a></Button></div></div></section>;
}