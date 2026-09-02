import { AudioLines, Blinds, Camera, HouseWifi, Lightbulb, MonitorUp, Network, Theater } from "lucide-react";

export const contact = {
  phone: "(415) 897-6217",
  phoneHref: "tel:+14158976217",
  email: "info@homecinemamarin.com",
  emailHref: "mailto:info@homecinemamarin.com",
};

export const navItems = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export const services = [
  { title: "Home Theater Design & Installation", description: "Cinema-grade pictures, immersive sound and acoustic design calibrated to your room.", icon: Theater },
  { title: "Home Networks", description: "Fast, resilient wired and wireless coverage designed for every corner of the property.", icon: Network },
  { title: "Multi-Room Audio", description: "Beautiful, balanced sound in the rooms you use—and outdoors—with simple control.", icon: AudioLines },
  { title: "Sonos Audio Installation", description: "Expert placement, configuration and integration for effortless whole-home listening.", icon: HouseWifi },
  { title: "Surveillance Cameras", description: "Discreet property awareness with clear views, remote access and thoughtful placement.", icon: Camera },
  { title: "Mantel Mount & TV Installation", description: "Cleanly mounted displays, concealed wiring and comfortable viewing angles.", icon: MonitorUp },
  { title: "Lutron Lighting", description: "Elegant lighting scenes that make every room feel right with one touch.", icon: Lightbulb },
  { title: "Indoor & Outdoor Motorized Shades", description: "Quiet daylight, privacy and glare control tailored to your architecture.", icon: Blinds },
];

export const areas = ["Novato", "San Rafael", "Mill Valley", "Tiburon", "Belvedere", "Sausalito", "Larkspur", "Corte Madera", "Kentfield", "Ross", "Fairfax", "San Anselmo"];