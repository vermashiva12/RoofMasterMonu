import { ReactNode } from "react";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SocialLinks />
      <main>{children}</main>
    </div>
  );
}