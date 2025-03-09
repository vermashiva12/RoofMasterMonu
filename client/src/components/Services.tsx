import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Home, Warehouse, Shield } from "lucide-react";

const services = [
  {
    title: "Commercial Roofing",
    description:
      "Comprehensive roofing solutions for businesses, warehouses, and commercial properties.",
    icon: Building2,
  },
  {
    title: "Residential Roofing",
    description:
      "Expert installation and repair services for homes, using premium materials and craftsmanship.",
    icon: Home,
  },
  {
    title: "Industrial Roofing",
    description:
      "Specialized roofing solutions for industrial facilities and manufacturing plants.",
    icon: Warehouse,
  },
  {
    title: "Maintenance & Repair",
    description:
      "Regular maintenance and prompt repair services to extend your roof's lifespan.",
    icon: Shield,
  },
   {
    title: "Waterproofing Services",
    description:
      "Protect your property with our expert roof waterproofing services, ensuring durability and leak-free performance. ",
    icon: Shield,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a complete range of roofing services for all types of
            properties, backed by our commitment to quality and customer
            satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-none shadow-lg">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
