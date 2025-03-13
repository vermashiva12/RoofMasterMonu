import { Button } from "@/components/ui/button";

export default function CR() {
  return (
    <section id="commerical-roofing" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf"
              alt="Roofing team at work"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Roof Masters
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over two decades of experience in the roofing industry, Roof
              Masters has established itself as a leader in providing top-quality
              roofing solutions for both commercial and residential properties.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified professionals is committed to delivering
              excellence in every project, using the latest techniques and
              highest-quality materials to ensure lasting results.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">20+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">1000+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
            <Button
              size="lg"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
