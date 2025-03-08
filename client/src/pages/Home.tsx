import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}