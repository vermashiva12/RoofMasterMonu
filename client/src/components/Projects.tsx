import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Commercial Office Complex",
    description: "Complete roof replacement for a 50,000 sq ft office building",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    type: "Commercial",
    completion: "2024",
  },
  {
    title: "Luxury Home Development",
    description: "High-end residential roofing for a new housing development",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    type: "Residential",
    completion: "2024",
  },
  {
    title: "Industrial Warehouse",
    description: "Industrial roofing solution for a large distribution center",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866",
    type: "Industrial",
    completion: "2023",
  },
  {
    title: "Shopping Center Renovation",
    description: "Major roof repair and renovation for a retail complex",
    image: "https://images.unsplash.com/photo-1555652736-e92021d28a10",
    type: "Commercial",
    completion: "2023",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of completed roofing projects, showcasing
            our expertise across residential, commercial, and industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader className="flex flex-row items-center justify-between">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <Badge variant="secondary">{project.type}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <p className="text-sm text-gray-500">
                  Completed: {project.completion}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
