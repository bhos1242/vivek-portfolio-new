import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, ArrowRight, Share2, ZoomIn } from "lucide-react"

const projects = [
  {
    title: "Donate Aid Society",
    description: "Platform for charitable donations with secure online payment gateways, intuitive UI/UX, and Prisma-backed database.",
    url: "https://donateaidsociety.vercel.app/",
    image: "/projects/donate-aid.png",
    tags: ["React", "Next.js", "Prisma"],
    featured: true,
  },
  {
    title: "PracticeStacks",
    description: "Enterprise-grade proposal and compliance management platform with AI-powered automation, multi-currency support, and advanced analytics for professional service firms.",
    url: "https://www.practicestacks.in/",
    image: "/projects/practicestacks.png",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AI/ML"],
    featured: true,
  },
  {
    title: "Kaydyach Ani Faydyach",
    description: "Comprehensive platform providing detailed information about legal rights, government schemes, and citizen benefits.",
    url: "https://kaydyanch-ani-faydyach.vercel.app/",
    image: "/projects/kaydyach_ani_faydyach.png",
    tags: ["Next.js", "React.js", "TailwindCSS", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    title: "Megaaplex",
    description: "A modern real estate platform for property discovery, listings, and lead management. Built with Next.js and Tailwind CSS.",
    url: "https://www.megaaplex.com/",
    image: "/projects/megaaplex.png",
    tags: ["Next.js", "React.js", "TailwindCSS", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    title: "DemandToKaro",
    description: "Hyperlocal demand aggregation platform enabling users to request products and services and connect with local vendors.",
    url: "https://www.demandtokaro.com/",
    image: "/projects/demand-to-karo.png",
    tags: ["Next.js", "React.js", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    title: "Green Thumb Foundation",
    description: "Environmental conservation platform focused on tree planting initiatives, sustainability education, and community engagement.",
    url: "https://www.greenthumbfoundation.org/",
    image: "/projects/greenthumb.png",
    tags: ["Next.js", "React.js", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    title: "Epicarp Nature Care",
    description: "Sustainable e-commerce platform offering eco-friendly products with comprehensive environmental impact tracking.",
    url: "https://www.epicarpnaturecare.com/",
    image: "/projects/epicarp.png",
    tags: ["Next.js", "Node.js", "Razorpay"],
    featured: false,
  },
  {
    title: "Start Business Consulting",
    description: "Business strategy consulting platform offering market analysis, growth solutions, and comprehensive planning services.",
    url: "https://v0-start-business-demo-website.vercel.app/",
    image: "/projects/start_business.png",
    tags: ["Next.js", "React.js", "MongoDB"],
    featured: false,
  },
  {
    title: "Pixel Perfects",
    description: "Creative design agency platform showcasing portfolio, services, and client testimonials with a focus on UX.",
    url: "https://pixelperfects.in/",
    image: "/projects/pixel-perfects.png",
    tags: ["Next.js", "React.js", "TailwindCSS"],
    featured: false,
  },
  {
    title: "Guru Krupa Fire Services",
    description: "Professional fire safety services platform with equipment showcase and emergency consultation booking.",
    url: "https://www.gurukrupafireservices.com/",
    image: "/projects/guru-krupa.png",
    tags: ["Next.js", "React.js", "Node.js"],
    featured: false,
  },
  {
    title: "4 Star Travels",
    description: "Travel agency platform offering personalized travel planning, booking services, and customer support.",
    url: "https://www.4startravels.com/",
    image: "/projects/4-star-travels.png",
    tags: ["Next.js", "React.js", "Node.js"],
    featured: false,
  },
  {
    title: "SnehChhaya",
    description: "Comprehensive platform for child welfare organization providing care, education, and support to underprivileged children.",
    url: "https://www.snehchhaya.org/",
    image: "/projects/snehchhaya.png",
    tags: ["Next.js", "React.js", "MongoDB"],
    featured: false,
  },
  {
    title: "Godham Group",
    description: "Multi-business group platform showcasing agriculture, sustainability initiatives, and diverse business operations.",
    url: "https://www.godhamgroup.in/",
    image: "/projects/godham-group.png",
    tags: ["Next.js", "React.js", "MongoDB"],
    featured: false,
  },
  {
    title: "Varad Dental Clinic",
    description: "Modern dental clinic platform providing information on services, appointment booking, and patient resources.",
    url: "https://varad-dental-clinic.vercel.app/",
    image: "/projects/varad-dental-clinic.png",
    tags: ["Next.js", "React.js", "MongoDB"],
    featured: false,
  },
  {
    title: "Biztree Accounting",
    description: "Comprehensive accounting and financial management platform with automated reporting and expense tracking.",
    url: "https://v0-biztree.vercel.app/",
    image: "/projects/biztree.png",
    tags: ["Next.js", "React.js", "MongoDB"],
    featured: false,
  },
  {
    title: "Rainbow HR Consulting",
    description: "Professional HR consulting platform specializing in talent acquisition, employee engagement, and development.",
    url: "https://rainbow-hr-consulting.vercel.app/",
    image: "/projects/rainbow-hr.png",
    tags: ["Next.js", "React.js", "MongoDB"],
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
            <a href="https://github.com/bhos1242" target="_blank">
              More on GitHub <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        <div className="bento-grid">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`compact-card shine-effect group relative flex flex-col overflow-hidden border-none ${project.featured ? "md:col-span-2 md:row-span-2 bg-gradient-to-br from-card/50 to-primary/5 border-primary/20" : "md:col-span-1 md:row-span-1"
                }`}
            >
              {/* Image Preview Window */}
              <div className={cn(
                "relative w-full overflow-hidden bg-muted/20",
                project.featured ? "aspect-[16/10]" : "aspect-video"
              )}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - ${project.description}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={project.featured ? "(max-width: 768px) 100vw, 800px" : "(max-width: 768px) 100vw, 400px"}
                  priority={index < 2}
                />
                
                {/* Floating Badges/Actions */}
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  {project.featured && (
                    <div className="bg-primary/90 backdrop-blur-md p-2 rounded-full border border-primary/20 shadow-lg">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                  )}
                  <div className="bg-background/80 backdrop-blur-md p-2 rounded-full border border-border/50 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <ZoomIn className="w-4 h-4 text-primary" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>

              <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
                <div className="space-y-4">
                  <CardHeader className="p-0">
                    <CardTitle className={`${project.featured ? "text-2xl sm:text-4xl" : "text-xl"} font-black tracking-tight group-hover:text-primary transition-colors line-clamp-1`}>
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4">
                    <p className={`text-muted-foreground leading-relaxed line-clamp-3 ${project.featured ? "text-base sm:text-lg" : "text-sm"}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold px-2.5 py-1 bg-primary/5 text-primary/80 border border-primary/10 rounded-full uppercase tracking-tighter">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <div className="flex gap-3 pt-6 mt-auto">
                  <Button size={project.featured ? "lg" : "sm"} className="rounded-full flex-1 hover-lift font-bold" asChild>
                    <a href={project.url} target="_blank" aria-label={`View live site for ${project.title}`}>
                      <ExternalLink className="mr-2 w-4 h-4" />
                      View Live
                    </a>
                  </Button>
                  <Button size={project.featured ? "lg" : "sm"} variant="outline" className="rounded-full flex-none hover-lift px-4" asChild>
                    <a href="https://github.com/bhos1242" target="_blank" aria-label={`View GitHub source for ${project.title}`}>
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
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

