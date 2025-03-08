import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "#",
    label: "GitHub",
  },
];

export default function SocialLinks() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="p-2 rounded-full bg-white/90 shadow-md hover:bg-primary hover:text-white transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
