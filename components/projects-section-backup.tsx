import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Donate Aid Society",
    description:
      "Platform for charitable donations with secure online payment gateways, intuitive UI/UX, and Prisma-backed database.",
    url: "https://www.donateaid.org.in",
    image: "/charity-donation-website-interface.jpg",
    tags: ["React", "Next.js", "Prisma", "Payment Gateway"],
    year: "2024",
    status: "Live",
    featured: true,
  },
  {
    title: "4 Star Travels",
    description:
      "Travel booking platform featuring curated domestic & international tour packages, secure payment APIs, and responsive design.",
    url: "https://www.4startravels.com",
    image: "/travel-booking-website-interface.png",
    tags: ["Next.js", "TypeScript", "Payment API", "Responsive Design"],
    year: "2024",
    status: "Live",
    featured: true,
  },
  {
    title: "Start Business",
    description:
      "Service portal for company incorporation, GST registration, and trademark filing. Includes AI-powered service recommendations and real-time compliance tracking.",
    url: "https://www.startbusiness.co.in",
    image: "/business-services-website-interface.jpg",
    tags: ["React", "AI Integration", "Real-time Tracking", "Business Services"],
    year: "2024",
    status: "Live",
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-secondary/10 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Featured Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Recent Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Showcasing real-world applications that demonstrate my full-stack development expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border-muted/50 bg-background/50 backdrop-blur-sm ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <Badge variant="secondary" className="bg-background/90 text-primary font-medium">
                    {project.status}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.year}</p>
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-primary text-lg group-hover:text-primary/80 transition-colors line-clamp-1">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm text-pretty leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs px-2 py-0.5 hover:bg-primary/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2 py-0.5">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" asChild className="flex-1 group/btn">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5 group-hover/btn:rotate-45 transition-transform" />
                      Live Site
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="group/github">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5 group-hover/github:scale-110 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-xl font-semibold mb-2">Interested in seeing more of my work?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Explore my complete portfolio and open-source contributions on GitHub
            </p>
            <Button size="lg" variant="outline" asChild className="group">
              <a href="https://github.com/bhos1242" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View All Projects on GitHub
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
                  <Button size="sm" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Interested in seeing more of my work?</p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/bhos1242" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
