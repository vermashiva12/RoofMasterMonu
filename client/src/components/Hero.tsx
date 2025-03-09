import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/95 to-primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Trusted Roofing Experts
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Professional roofing solutions for commercial and residential properties
            with over 20 years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get a Free Quote
            </Button>

            
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              onClick={() => {
                document.querySelector("#services")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Our Services
            </Button>

             <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              onClick="https://calendly.com/roofmasters340"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
