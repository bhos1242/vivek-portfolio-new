import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Star, ArrowRight, Share2 } from "lucide-react"

const projects = [
  {
    title: "Donate Aid Society",
    description:
      "Platform for charitable donations with secure online payment gateways, intuitive UI/UX, and Prisma-backed database.",
    url: "https://donateaidsociety.vercel.app/",
    tags: ["React", "Next.js", "Prisma"],
    year: "2024",
    status: "Live",
    featured: true,
  },
  {
    title: "4 Star Travels",
    description:
      "Travel booking platform featuring curated domestic & international tour packages, secure payment APIs.",
    url: "https://www.4startravels.com",
    tags: ["Next.js", "TypeScript", "Payment API"],
    year: "2024",
    status: "Live",
    featured: true,
  },
  {
    title: "Sneh Chhaya Foundation",
    description:
      "Non-profit organization website for social welfare initiatives, featuring donation management.",
    url: "https://www.snehchhaya.org",
    tags: ["React", "Community Platform", "CMS"],
    year: "2024",
    status: "Live",
    featured: false,
  },
  {
    title: "Free QR Code Generator",
    description:
      "Powerful online QR code generation tool with customizable designs and multiple format support.",
    url: "https://www.freeqrcodegenerator.shop",
    tags: ["Next.js", "QR Generation", "API"],
    year: "2024",
    status: "Live",
    featured: false,
  },
  {
    title: "Start Business",
    description:
      "Service portal for company incorporation, GST registration, and trademark filing.",
    url: "https://www.startbusiness.co.in",
    tags: ["React", "AI Integration", "Real-time Tracking"],
    year: "2024",
    status: "Live",
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="app-section bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="outline" className="px-4 py-1 rounded-full border-primary/30 text-primary">
              Portfolio
            </Badge>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A collection of digital products and web applications built with modern technologies.
            </p>
          </div>
          <Button variant="ghost" className="rounded-full group" asChild>
            <a href="https://github.com/vivekbhos" target="_blank">
              More on GitHub <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        <div className="bento-grid">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`compact-card group relative flex flex-col justify-between ${project.featured ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                }`}
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                {project.featured && (
                  <div className="bg-primary/10 backdrop-blur-md p-2 rounded-full border border-primary/20">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                  </div>
                )}
                <div className="bg-background/50 backdrop-blur-md p-2 rounded-full border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Share2 className="w-4 h-4 text-foreground" />
                </div>
              </div>

              <CardHeader className="p-0 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    <Calendar className="w-3 h-3" />
                    {project.year} • {project.status}
                  </div>
                  <CardTitle className={`${project.featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"} font-black`}>
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="p-0 space-y-4">
                <p className={`text-muted-foreground leading-relaxed ${project.featured ? "text-lg" : "text-sm"}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-1 bg-muted rounded-md uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size={project.featured ? "lg" : "sm"} className="rounded-full flex-1 hover-lift" asChild>
                    <a href={project.url} target="_blank">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      View Live
                    </a>
                  </Button>
                  <Button size={project.featured ? "lg" : "sm"} variant="outline" className="rounded-full flex-none hover-lift" asChild>
                    <a href="https://github.com/vivekbhos" target="_blank">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* View All Card */}
          <Card className="compact-card bg-primary/5 border-dashed border-primary/30 flex items-center justify-center text-center md:col-span-1 md:row-span-1 hover:bg-primary/10 cursor-pointer group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-base">View More</h3>
                <p className="text-[10px] text-muted-foreground">Check my GitHub for 20+ more projects</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

